// $("#dropdown1 li").on("click", function(e) {
$(document).ready(function () {
  // e.preventDefault();

  $("<div class = 'totalParks '></div>").appendTo(".container");

  const urlParams = new URLSearchParams(window.location.search);
  const state = urlParams.get("state");

  // let state = 'TX';//$(this).find("a").attr("value"); getParams('state');
  // console.log(state);

  const APIKey = "ASQluJvriYYOmYed5QzQRORAQ2y3nC9julgxAIhA";

  const queryURL =
    "https://developer.nps.gov/api/v1/campgrounds?stateCode=" +
    state +
    "&api_key=" +
    APIKey;
  const W_APIKey = "adcd79e037a9e3c5d37cd3c98797ce1c";

  $.ajax({
    type: "GET",
    url: queryURL,
    dataType: "json",
  }).then(function (response) {
    console.log(response)
    const arrayResponse = [];
    for (let i = 0; i < response.data.length ; i++){
        arrayResponse.push({
            longitude: response.data[i].longitude,
            latitude: response.data[i].latitude,
            imageUrl: response.data[i].images[0].url,
            campsiteName: response.data[i].name,
            description: response.data[i].description
        })
    }
   
   arrayResponse.forEach(function(site, index){
      let id = "W_camp"+ index;
      let W_queryURL = "https://api.openweathermap.org/data/2.5/weather?lat="+site.latitude+"&lon="+site.longitude+"&appid="+W_APIKey; 
      $.ajax({
           type: 'GET',
           url: W_queryURL,
           dataType: 'json',
       }).then (function(weather_response) {
           console.log(weather_response);
           
           let weatherInfoElem = $("<div>");
           let weatherTemp = weather_response.main.temp;
           console.log(weatherTemp);
           let F = (weatherTemp - 273.15) * 1.80 + 32
                F = F.toFixed(0)
                $(weatherInfoElem).append("Temperature: " + F + "°");
           $('#'+id).append(weatherInfoElem);
           
    })
       
       let campInfoElem = $("<div>", {id: id});
       let campImage = $("<img>");
       campImage.attr("src", site.imageUrl);            
       let campsiteName = $("<h3>"+site.campsiteName+"</h3>");
       let campDesc = $("<p>"+site.description+"</p>");
       console.log(site.campsiteName);
       campInfoElem.append(campImage);
       campInfoElem.append(campsiteName);
       campInfoElem.append(campDesc);
       $('#campsiteInfo').append(campInfoElem);
      $(campImage).wrap($("<a>").attr("href", "campsitepg3.html"));
    //   $(campImage).wrap($("<a>").attr("href", "https://developer.nps.gov/api/v1/campgrounds?id=" + id + "&api_key=" + APIKey));
      $(id).append(campImage)
    });
    let totalparks = document.querySelector(".container .totalParks");
    totalparks.textContent = "Total Nat. Park Campgrounds in State: " + response.total;
  });
});


// let id = response.data[i].id