// const searchElement = document.querySelector('[data-city-search]')
// const searchBox = new google,maps.places.SearschBox(searchElement)
// searchBox.addListener('places_changed', () => {
//     const place = searchBox.getPlaces()[0]
//     if (place == null) return
//     const latitude = place.geometry.location.lat()
//     const longitude = place.geometry.location.lng()

//     fetch('/weather', {
//         method: 'POST',
//         header: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//         },
//         body: JSON.stringify({
//             latitude,
//             longitude
//         })
//     }).then( res => res.json()).then(data => {
//         setWeatherData(data, place.formatted_address)
//     })
// })
