/**
 *      Init
 *      
 */

window.onload = () => {
    UI.showApp();
};

/**
 *      UI Elements Module
 *      
 *      - this module will be responsible for controling UI 
 *        Elements like Menu
 */

 const UI = (function() {
     let menu = document.querySelector('#menu-container');
     
    const showApp = () => {
        document.querySelector("#app-loader").classList.add('display-none');
        document.querySelector("main").removeAttribute('hidden');
    };

    const loadApp = () => {
        document.querySelector("#app-loader").classList.remove('display-none');
        document.querySelector("main").setAttribute('hidden', 'true');
    };

    const _showMenu = () => {
        menu.style.right = 0;
    }

    const _hideMenu = () => {
        menu.style.right = '-65%';
    }

    const _toggleHourWeather = () => {
        let hourlyWeather = document.querySelector("#hourly-weather-wrapper"),
            arrow = document.querySelector("#toggle-hourly-weather").children[0],
            visible = hourlyWeather.getAttribute('visible'),
            dailyWeather = document.querySelector('#daily-weather-wrapper');
        
        if (visible == 'false') {
            hourlyWeather.setAttribute('visible', 'true');
            hourlyWeather.style.bottom = 0;
            arrow.style.transform = "rotate(180deg)";
            dailyWeather.style.opacity = 0;
        } else if (visible == 'true') {
            hourlyWeather.setAttribute('visible', 'false');
            hourlyWeather.style.bottom = '-100%';
            arrow.style.transform = "rotate(0deg)";
            dailyWeather.style.opacity = 1;
        } else console.error("Unknown state of the hourly weather panel and visible attribute");
    }


    document.querySelector("#open-menu-btn").addEventListener('click',  _showMenu);
    document.querySelector("#close-menu-btn ").addEventListener('click', _hideMenu);
    document.querySelector("#toggle-hourly-weather").addEventListener('click', _toggleHourWeather);
 
    return {
        showApp,
        loadApp
    };
 })();

 /**
 *      Get Location Module
 *      
 *      - this module will be responsible for getting the data
 *        about the location to search for weather
 */

const GETLOCATION = (function() {
    let location;
    let locationIput = document.querySelector("#location-input");
    let addCityBtn = document.querySelector("#add-city-btn");

    locationIput.addEventListener('input', function() {
        let inputValue = this.value.trim();

        if (inputValue != '') {
            addCityBtn.removeAttribute('disabled');
            addCityBtn.classList.remove('disabled');
        } else {
            addCityBtn.setAttribute('disabled', 'true');
            addCityBtn.classList.add('disabled');
        }
    });

    const _addCity = () => {
        location = locationIput.value;
        locationIput.value = "";
        addCityBtn.setAttribute('disabled', 'true');
        addCityBtn.classList.add('disabled');

        // Get Weather Data
        WEATHER.getWeather(location);
    };

    addCityBtn.addEventListener('click', _addCity);
})();

 /**
 *      Get Weather Data
 *      
 *      - this module will aquire weather data and then it 
 *        will pass to another module which will put the 
 *        data on UI
 */

 const WEATHER = (function() {
     const darkSkyKey = 'abb6c4bc746ff07ddc578a3ce70710d5'; 
     const geoCodeKey = '9e3c900b3f2a492f9ec243a042480958';

     const _getDarkSkyURL = (lat, lng) => `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${darkSkyKey}/${lat},${lng}`;
     const _getGeocodeURL = (location) => `https://api.opencagedata.com/geocode/v1/json?q=${location}&key=${geoCodeKey}`;

     const _getDarkSkyDate = (url) => {
         axios.get(url)
            .then( (res) => {
                console.log(res);
            }).catch( (err) => {
                console.log(err);
            });
     }

     const getWeather = (location) => {
         UI.loadApp();

         let geocodeURL = _getGeocodeURL(location);

         console.log(geocodeURL);

         axios.get(geocodeURL)
            .then( (res) => {
                // console.log(res.data.results[0].geometry);
                let lat = res.data.results[0].geometry.lat;
                let lng = res.data.results[0].geometry.lng;

                let darkskyURL = _getDarkSkyURL(lat, lng);
                _getDarkSkyDate(darkskyURL);

            }).catch( (err) => {
                console.log(err);
            });
     };

     return {
        getWeather
     };

 })();