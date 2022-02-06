window.onload = () => {
    getCurrentLocation().then(data => {
        getWeatherData("Lake Forest")
    })
}