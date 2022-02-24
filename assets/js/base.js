var city, region_code, country, latitude, longitude, icons, zoom, map, source, view, vector, overlay, tileLayer, search

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
    for (const index in iconCodes) {
        let load = new Image()
        load.src = "https://openweathermap.org/img/wn/{0}@2x.png".format(iconCodes[index])
        icons[iconCodes[index]] = load
    }
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
    // overlay = new ol.Overlay({
    //     element: container,
    //     autoPan: {
    //         animation: {
    //             duration: 250,
    //         }
    //     }
    // })

    map = new ol.Map({
        view: view,
        // overlays: [overlay],
        layers: [tileLayer, vector],
        target: 'js-map'
    })

    return map
}

function goToCoord(lon, lat, min, max, onDone = () => { }) {
    if (map === undefined) {
        return
    }

    setLoading(true)
    setInteractions(false)
    source.clear()

    setZoomLevel(min, max)

    view.animate({
        center: ol.proj.fromLonLat([lon, lat]),
        zoom: zoom,
        duration: 2000
    }, finished => {
        setInteractions(true)
        setLoading(false)
        onDone()
    })
}

function setInteractions(active) {
    let plus = document.querySelector(".ol-zoom-in")
    let minus = document.querySelector(".ol-zoom-out")

    plus.disabled = !active
    minus.disabled = !active

    map.getInteractions().forEach(function (interaction) {
        interaction.setActive(active)
    }, this)
}

function getLocationData() {
    let url

    if (arguments.length === 2) {
        url = "https://api.openweathermap.org/data/2.5/onecall?lat={0}&lon={1}&exclude=current,minutely,hourly,alerts&appid={2}".format(lat, lon, api_key)
    }
    else {
        setLoading(true)
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
