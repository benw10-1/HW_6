var city, region_code, country, latitude, longitude, icons, zoom, map, source, view, vector, overlay, tileLayer, search, searches, mapEl, history, current, styler, weekly, objs

const iconCodes = ["11d", "11n", "09d", "09n", "10d", "10n", "13d", "13n", "50d", "50n", "01d", "01n", "02d", "02n", "03d", "03n", "04d", "04n"]
const api_key = "286593f8a4744e7b153b7c57a9a68833"

String.prototype.format = function () {
    var args = arguments
    
    return this.replace(/{(\d+)}/g, function (match, number) {
        return typeof args[number] != 'undefined' ? args[number] : match
    })
}

function loadIcons() {
    icons = {}
    objs = {}
    for (const index in iconCodes) {
        let load = new Image()
        load.src = "https://openweathermap.org/img/wn/{0}@2x.png".format(iconCodes[index])
        icons[iconCodes[index]] = "https://openweathermap.org/img/wn/{0}@2x.png".format(iconCodes[index])
        objs[iconCodes[index]] = load
    }
}

function loadEls() {
    search = document.getElementById("search")
    mapEl = document.getElementById("js-map")
    current = document.getElementById("current")
    history = document.getElementById("search-history")
    weekly = document.getElementById("weekly")

    search.addEventListener("keypress", event => {
        if (event.key === "Enter") {
            console.log(event)
            searchLocation(search.innerHTML)
            event.preventDefault()
        }
    })
}

function generateMap() {
    view = new ol.View({
        center: ol.proj.fromLonLat([-96.21, 37.46]),
        zoom: 4
    })
    tileLayer = new ol.layer.Tile({
        preload: 4,
        source: new ol.source.OSM()
    })
    source = new ol.source.Vector()
    vector = new ol.layer.Vector({
        source: source,
        updateWhileAnimating: true,
        updateWhileInteracting: true
    })

    map = new ol.Map({
        view: view,
        controls : ol.control.defaults({
            attribution : false,
            zoom : false,
        }),
        layers: [tileLayer, vector],
        target: 'js-map'
    })

    map.on("pointermove", event => {
        map.getViewport().style.cursor = ''
        map.forEachFeatureAtPixel(map.getEventPixel(event.originalEvent), (feature, layer) => {
            map.getViewport().style.cursor = 'pointer'
        })
    })
    map.on("click", event => {
        map.forEachFeatureAtPixel(map.getEventPixel(event.originalEvent), (feature, layer) => {
            searchLocation(feature.info)
        })
    })

    return map
}

function displayWeather(data) {
    let current_ = data.current
    let daily = data.daily
    // temp wind humidity, uv
    let children = current.children

    children[0].children[0].innerHTML = moment.unix(current_.dt).format("M/D/YYYY")

    // let icon = document.createElement("div")
    // icon.style = `
    //     background: url({0}) no-repeat;
    //     width: 20px;
    //     height: 20px;
    //     margin-top: 6px;
    //     position: relative;
    //     z-index: 10;
    // `.format(icons[current_.weather[0].icon])

    children[1].innerHTML = current_.temp
    children[2].innerHTML = current_.wind_speed
    children[3].innerHTML = current_.humidity
    children[4].innerHTML = current_.uvi

    weekly.innerHTML = ""

    for (i=0; i < 5; i++) {
        let cur = daily[i]

        let container = document.createElement("div")
        container.classList.add("day")

        let h = document.createElement("h1")
        h.innerHTML = moment.unix(cur.dt).format("M/D/YYYY")
        container.appendChild(h)

        let dv = document.createElement("div")
        dv.style.background = "url(" + icons[cur.weather[0].icon] + ")"
        dv.style.backgroundSize = "auto"
        dv.style.backgroundRepeat = "no-repeat"
        container.appendChild(dv)
        
        for (p=0; p < 3; p++) container.appendChild(document.createElement("p"))

        let res = 0, s = 0
        for (const prop in cur.temp) {
            res += cur.temp[prop]
            s += 1
        }
        container.children[2].innerHTML = (res/s).toFixed(2)
        container.children[3].innerHTML = cur.wind_speed
        container.children[4].innerHTML = cur.humidity

        weekly.appendChild(container)
    }
    children[0].children[0].appendChild(objs[current_.weather[0].icon])
}

function updateSearchHistory(location, data) {
    // if (searches.hasOwnProperty(location)) return true
}

function changeStyle(style) {
    console.log(style)
    if (!styler) {
        styler = document.createElement("style")
        document.getElementsByTagName("head")[0].appendChild(styler)
    }

    styler.innerHTML = style
}

function searchLocation(location) {
    location = location.trim()
    getLocationData(location).then(data => {
        let loc = data.display_name.split(",").slice(0, 3).join(",")
        getLocationData(data.lon, data.lat).then(data => {
            displayWeather(data)
            if (!updateSearchHistory(loc, data)) addFeature(data.lon, data.lat, data.current.weather[0].icon, loc)
        })
        if (!data) return
        let box = data.boundingbox
        let left = box[2], right = box[3], bottom = box[0], top = box[1]
        goToCoord(data.lon, data.lat, [left, bottom], [right, top])
    })
}

function goToCoord(lon, lat, min, max, onDone = () => { }) {
    if (map === undefined) {
        return
    }

    setInteractions(false)

    setZoomLevel(min, max)

    view.animate({
        center: ol.proj.fromLonLat([lon, lat]),
        zoom: zoom,
        duration: 2000
    }, finished => {
        setInteractions(true)
        onDone()
    })
}

function addFeature(lon, lat, code, info) {
    let feature = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.fromLonLat([lon, lat])),
        name: info
    })

    let colorStyle = new ol.style.Style({
        image: new ol.style.Icon({
            src: icons[code],
            scale: .5,
            opacity: 1
        })
    })

    feature.setStyle(colorStyle)

    source.addFeature(feature)
}

function setInteractions(active) {
    map.getInteractions().forEach(function (interaction) {
        interaction.setActive(active)
    }, this)
}

function getLocationData() {
    let url

    if (arguments.length === 2) {
        url = "https://api.openweathermap.org/data/2.5/onecall?lat={0}&lon={1}&exclude=minutely,hourly,alerts&appid={2}&units=imperial".format(arguments[1], arguments[0], api_key)
    }
    else {
        if (arguments[0].length === 5 && parseInt(arguments[0]) !== NaN) {
            arguments[0] = arguments[0] + " USA"
        }
        url = "https://nominatim.openstreetmap.org/search?q={0}&country=USA&format=json".format(arguments[0])
    }
    return fetch(url).then(response => {
        return response.json()
    }).catch(error => {
        console.log("error: ", error)
    }).then(result => {
        if (result instanceof Array) {
            let imp = 0
            let imp_i = 0
            for (const i in result) {
                if (result[i].importance >= imp) {
                    imp = result[i].importance
                    imp_i = i
                }
            }

            return result[imp_i]
        }
        
        return result
    })
}

function setZoomLevel(min, max) {
    let storedExtent = map.getView().calculateExtent(map.getSize())

    let points = [ol.proj.fromLonLat(min), ol.proj.fromLonLat(max), ol.proj.fromLonLat([max[0], min[1]]), ol.proj.fromLonLat([min[0], max[1]])]

    let geo = new ol.geom.Polygon([points], "XY")
    
    map.getView().fit(geo)

    zoom = Math.max(Math.min(map.getView().getZoom(), 14), 4)

    map.getView().fit(storedExtent)
}
