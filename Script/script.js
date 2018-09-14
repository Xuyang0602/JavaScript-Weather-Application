/**
 *      Init
 *      
 */

window.onload = () => {
    LOCALSTORAGE.get();
    let cities = LOCALSTORAGE.getSavedCities();
    console.log(cities);
    if (cities.length !== 0) {
        cities.forEach((city) => SAVEDCITIES.drawCity(city));
        WEATHER.getWeather(cities[cities.length - 1], false);
    } else UI.showApp();
};

/**
 *      UI Elements Module
 *      
 *      - this module will be responsible for controling UI 
 *        Elements like Menu
 */

const UI = (function () {
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

    const drawWeatherData = (data, location) => {
        console.log(data);

        let currentlyData = data.currently;
        let dailyData = data.daily.data;
        let hourlyData = data.hourly.data;
        let weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let dailyWeatherWrapper = document.querySelector("#daily-weather-wrapper");
        let dailyWeatherModel;
        let day;
        let maxMinTemp;
        let dailyIcon;
        let hourlyWeatherWrapper = document.querySelector("#hourly-weather-wrapper");
        let hourlyWeatherModel;
        let hourlyIcon;



        // Set Current Weather section

        // Set Current Location
        document.querySelectorAll(".location-label").forEach((ele) => {
            ele.innerText = location;
        });

        // Set the background
        document.querySelector('main').style.backgroundImage = `url("../Resources/assets/images/bg-images/${currentlyData.icon}.jpg")`;

        // Set the icon
        document.querySelector('#currentlyIcon').setAttribute('src', `../Resources/assets/images/summary-icons/${currentlyData.icon}-white.png`);

        // Set the summary
        document.querySelector('#summary-label').innerText = currentlyData.summary;

        // Set the temperature (from Fahrenheit to Celcius)
        document.querySelector('#degress-label').innerHTML = Math.round((currentlyData.temperature - 32) * 5 / 9) + '&#176;';

        // Set humidty
        document.querySelector('#humidity-label').innerText = Math.round(currentlyData.humidity * 100) + '%';

        // Set wind speed
        document.querySelector('#wind-speed-label').innerText = (currentlyData.windSpeed * 1.6093).toFixed(1) + ' kph';

        // Set Lower Panel

        // Set daily weather
        while (dailyWeatherWrapper.children[1]) {
            dailyWeatherWrapper.removeChild(dailyWeatherWrapper.children[1]);
        }

        for (let i = 0; i <= 6; i++) {

            // clone the node and remove display-none class
            dailyWeatherModel = dailyWeatherWrapper.children[0].cloneNode(true);
            dailyWeatherModel.classList.remove('display-none');

            // set the day
            day = weekDays[new Date(dailyData[i].time * 1000).getDay()];
            dailyWeatherModel.children[0].children[0].innerHTML = day;

            // set min/max temperature for the next days in celcius
            maxMinTemp = Math.round((dailyData[i].temperatureMax - 32) * 5 / 9) + '&#176;' +
                Math.round((dailyData[i].temperatureMin - 32) * 5 / 9) + '&#176';
            dailyWeatherModel.children[1].children[0].innerHTML = maxMinTemp;

            // set daily icon
            dailyIcon = dailyData[i].icon;
            dailyWeatherModel.children[1].children[1].children[0].setAttribute('src', `../Resources/assets/images/summary-icons/${dailyIcon}-white.png`);

            // append the model
            dailyWeatherWrapper.appendChild(dailyWeatherModel);
        }
        dailyWeatherWrapper.children[1].classList.add('current-day-of-the-week');

        // Set hourly weather
        while (hourlyWeatherWrapper.children[1]) {
            hourlyWeatherWrapper.removeChild(hourlyWeatherWrapper.children[1]);
        }

        for (let i = 0; i <= 24; i++) {
            // clone the node and remove display-none class
            hourlyWeatherModel = hourlyWeatherWrapper.children[0].cloneNode(true);
            hourlyWeatherModel.classList.remove('display-none');

            // set the hour
            hourlyWeatherModel.children[0].children[0].innerHTML = new Date(hourlyData[i].time * 1000).getHours() + ":00";

            // set temperature
            hourlyWeatherModel.children[1].children[0].innerHTML = Math.round((hourlyData[i].temperature - 32) * 5 / 9) + '&#176;';

            // set hourly icon
            hourlyIcon = hourlyData[i].icon;
            hourlyWeatherModel.children[1].children[1].children[0].setAttribute('src', `../Resources/assets/images/summary-icons/${hourlyIcon}-grey.png`);

            // append the model
            hourlyWeatherWrapper.appendChild(hourlyWeatherModel);
        }

        UI.showApp();
    }

    document.querySelector("#open-menu-btn").addEventListener('click', _showMenu);
    document.querySelector("#close-menu-btn ").addEventListener('click', _hideMenu);
    document.querySelector("#toggle-hourly-weather").addEventListener('click', _toggleHourWeather);

    return {
        showApp,
        loadApp,
        drawWeatherData
    };
})();

/**
 *      Local Storage Api
 *      
 *      - this module will be responsible for saving, retriving
 *        and deleting the citied added by user
 */

 const LOCALSTORAGE = (function() {
     let savedCities = [];

     const save = (city) => {
         savedCities.push(city);
         localStorage.setItem('savedCities', JSON.stringify(savedCities));
     };

     const get = () => {
         if (localStorage.getItem('savedCities') != null) {
             savedCities = JSON.parse(localStorage.getItem("savedCities"));
         }
     };

     const remove = (index) => {
         if (index < savedCities.length) {
             savedCities.splice(index, 1);
             localStorage.setItem("savedCities", JSON.stringify(savedCities));
         }
     };

     const getSavedCities = () => savedCities;

     return {
         save,
         get,
         remove,
         getSavedCities
     }

 })();

 /**
 *      Saved Cities module
 *      
 *      - this module will be responsible for showing on the UI 
 *        saved cities from the local storage and from here user
 *        will be able to delete or switch between city he wants
 *        to see data
 */

const SAVEDCITIES = (function() {
    let container = document.querySelector("#saved-cities-wrapper");

    const drawCity = (city) => {
        let cityBox = document.createElement('div');
        let cityWrapper = document.createElement('div');
        let deleteWrapper = document.createElement('div');
        let cityTextNode = document.createElement('h1');
        let deleteBtn = document.createElement('button');

        cityBox.classList.add('saved-city-box', 'flex-container');
        cityTextNode.innerHTML = city;
        cityTextNode.classList.add('set-city');
        cityWrapper.classList.add('ripple', 'set-city');
        cityWrapper.append(cityTextNode);
        cityBox.append(cityWrapper);

        deleteBtn.classList.add('ripple', 'remove-saved-city');
        deleteBtn.innerHTML = '-';
        deleteWrapper.append(deleteBtn);
        cityBox.append(deleteWrapper);

        container.append(cityBox);
    };

    const _deleteCity = (cityHTMLBtn) => {
        let nodes = Array.prototype.slice.call(container.children);
        let cityWrapper = cityHTMLBtn.closest('.saved-city-box');
        let cityIndex = nodes.indexOf(cityWrapper);
        LOCALSTORAGE.remove(cityIndex);
        cityWrapper.remove();
    };

    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('remove-saved-city')) {
            _deleteCity(event.target);
        }
    });

    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('set-city')) {
            let nodes = Array.prototype.slice.call(container.children);
            let cityWrapper = event.target.closest('.saved-city-box');
            let cityIndex = nodes.indexOf(cityWrapper);
            let savedCites = LOCALSTORAGE.getSavedCities();

            WEATHER.getWeather(savedCites[cityIndex], false);
        }
    });

    return {
        drawCity
    }

})();


  
/**
 *      Get Location Module
 *      
 *      - this module will be responsible for getting the data
 *        about the location to search for weather
 */

const GETLOCATION = (function () {
    let location;
    let locationIput = document.querySelector("#location-input");
    let addCityBtn = document.querySelector("#add-city-btn");

    locationIput.addEventListener('input', function () {
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
        WEATHER.getWeather(location, true);
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

const WEATHER = (function () {
    const darkSkyKey = 'abb6c4bc746ff07ddc578a3ce70710d5';
    const geoCodeKey = '9e3c900b3f2a492f9ec243a042480958';

    const _getDarkSkyURL = (lat, lng) => `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${darkSkyKey}/${lat},${lng}`;
    const _getGeocodeURL = (location) => `https://api.opencagedata.com/geocode/v1/json?q=${location}&key=${geoCodeKey}`;

    const _getDarkSkyDate = (url, location) => {
        axios.get(url)
            .then((res) => {
                UI.drawWeatherData(res.data, location);
            }).catch((err) => {
                console.error(err);
            });
    }

    const getWeather = (location, save) => {
        UI.loadApp();

        let geocodeURL = _getGeocodeURL(location);

        axios.get(geocodeURL)
            .then((res) => {
                console.log(res);
                if (res.data.results.length == 0) {
                    console.error("Invalid Location");
                    UI.showApp();
                    return;
                }

                if (save) {
                    LOCALSTORAGE.save(location);
                    SAVEDCITIES.drawCity(location);
                }

                let lat = res.data.results[0].geometry.lat;
                let lng = res.data.results[0].geometry.lng;

                let darkskyURL = _getDarkSkyURL(lat, lng);
                _getDarkSkyDate(darkskyURL, location);

            }).catch((err) => {
                console.error(err);
            });
    };

    return {
        getWeather
    };

})();


