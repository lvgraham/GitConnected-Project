// let searchBtn = document.querySelector('#searchWeather')

// //need to get the city name from the search bar
// let cityName = document.getElementById('cityName');


// //search button onclick event
// searchBtn.addEventListener("click", function(){

//     event.preventDefault();


//     let city = cityName.value;

//     const APIKey = "d367dcfadab5440b10dca09382825e01";

//     const postURL = "https://api.openweathermap.org/data/2.5/weather?q=" + postalCode + "&appid=" + APIKey;


//     $.ajax({
//         url:postURL,
//         method:"GET"
//     }).then(function(postResponse){
//         console.log(postResponse);

//         //using moment.js to get current date
//         let now = moment();
//         //converting kelvin temp to farenheight
//         let tempF = (postResponse.main.temp - 273.15) * 1.80 + 32;

//         //adding city, temp, humidity, wind, and UV
//         $(".city").html('<h2>' + postResponse.name + " (" + now.format('MM-DD-YYYY') + ") </h2>");
//         $(".tempF").text('Temperature (F): ' + tempF.toFixed(2));
//         $(".humidity").text('Humidity: ' + postResponse.main.humidity + "%");
//         $(".wind").text('Wind speed: ' + postResponse.wind.speed + " MPH");
//     })

//     let lat = postResponse.coord.lat;
//     let lon = postResponse.coord.lon;
        
//         //setting variable for UV URL
//     let coordURL = 'https://api.openweathermap.org/data/2.5/uvi?appid=' + APIKey + '&lat=' + lat + '&lon=' + lon;

//         //ajax request for UV data
//     $.ajax({
//         url: coordURL,
//         method: 'GET'
//     }).then(function(coordResponse){

//         let now = moment();

//         let tempF = (coordResponse.main.temp - 273.15) * 1.80 + 32;
    
//         $(".city").html('<h2>' + coordResponse.name + " (" + now.format('MM-DD-YYYY') + ") </h2>");
//         $(".tempF").text('Temperature (F): ' + tempF.toFixed(2));
//         $(".humidity").text('Humidity: ' + coordResponse.main.humidity + "%");
//         $(".wind").text('Wind speed: ' + coordResponse.wind.speed + " MPH");

//     })


    

//     //creating variable for 5-day forecast API
//     const queryURL2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey;
//     console.log(queryURL2);

//     //pulling 5-day forecast data
//     $.ajax({
//         url:queryURL2,
//         method:"GET"
//     }).then(function(response){
//         console.log(response);

//         //for loop to add the 5-day forcast to page
//         for (let i=0; i< response.list.length; i++){

//             //converting temp to F
//             let temp = (response.list[i].main.temp - 273.15) * 1.80 + 32;

//             //showing the future dates
//             let now = moment().add([i+1], 'days');
//             $('.day' + i).text((now.format('MM-DD-YYYY')));

//             //displaying the icons
//             let iconURL = 'https://openweathermap.org/img/wn/';
//             let icon = iconURL + response.list[i].weather[0].icon + '@2x.png';
//             console.log(icon)
//             $('.icon' + i).attr('src', icon);

//             //adding the temperatures + humidity
//             $('.temp' + i).text('Temp (F): ' + temp.toFixed(2));
//             $('.humid' + i).text('Humidity: ' + response.list[i].main.humidity + '%');
//             // $('.temp' + i).text(response.list[i].main.temp );

//         }
//     });
// });
