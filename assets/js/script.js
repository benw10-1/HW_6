window.onload = () => {
    search = document.getElementById("search")

    search.addEventListener("keyup", event => {
        if (event.key === "Enter") event.preventDefault()
    })

    loadIcons()

    generateMap()

    fetch('https://ipapi.co/json/').then(result => {
        return result.json()
    }).then(data => {
        if (!data) {
            // default IPAPI example
            data = {
                "ip": "208.67.222.222",
                "city": "San Francisco",
                "region": "California",
                "region_code": "CA",
                "country": "US",
                "country_name": "United States",
                "continent_code": "NA",
                "in_eu": false,
                "postal": "94107",
                "latitude": 37.7697,
                "longitude": -122.3933,
                "timezone": "America/Los_Angeles",
                "utc_offset": "-0800",
                "country_calling_code": "+1",
                "currency": "USD",
                "languages": "en-US,es-US,haw,fr",
                "asn": "AS36692",
                "org": "OpenDNS, LLC"
            }
        }

        else [city, region_code, country, latitude, longitude] = [data.city, data.region_code, data.country, data.latitude, data.longitude]

        return data
    }).then(data => {
        getLocationData(data.city + ", " + data.state ?? data.country).then(data => {

        })
    })
}
