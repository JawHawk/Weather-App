const api = {
    key: "715c637277ab1070eb80acea16390637",
    base:"https://api.openweatherapp.org/data/2.5/"
}

const submit = document.querySelector('.submit');
submit.addEventListener('click',click)



const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);


const success = position =>{
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=715c637277ab1070eb80acea16390637`)
             .then(response => response.json())
                .then(function(data){
                    displayResults(data)
                })
}

if (window.navigator.geolocation) {
    window.navigator.geolocation.getCurrentPosition(success,console.log);
   }



function click() {
    getResults(searchbox.value)
}

function setQuery(evt) {
    if (evt.keyCode == 13) {            //13 key is for enter key
       getResults(searchbox.value)
    }
}
function getResults(query) {
   // var s = `${api.base}weather?lat=35&lon=139&appid=${api.key}`;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPID=715c637277ab1070eb80acea16390637`).then(function(response){
    response.json().then(function(data) {
        displayResults(data);
    });
}).catch(function(error) {
    console.log('Fetch Error:', error);
});
}



   
   
function displayResults(weather) {
    let city = document.querySelector('.location .city');
  city.innerText = `${weather.name}`;

   let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);

    let temp = document.querySelector('.current .temp');
    temperature = Math.round(weather.main.temp)
    temp.innerHTML = `${temperature}<span>°c</span>`;
  
    let weather_el = document.querySelector('.current .weather');
   weather_el.innerText = weather.weather[0].main;
  
    let hilow = document.querySelector('.hi-low');
   // hilow.innerText = `${Math.round(weather.main.temp_min - 273.15)}°c / ${Math.round(weather.main.temp_max - 273.15)}°c`;
    hilow.innerText = `Humidity : ${weather.main.humidity}`;
  }


function dateBuilder(d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${day} ${date} ${month} ${year}`;
}


/////////////
//////////
//////
///////
/////////////////
/////////////////////
/////////////////////
///////////////////////////
/////////////////
///////////////////////////////
////////////////////////////
/////////////////////////////////////////
////////////////////////////////
//////////////////////////
