// $("#dropdown1 li").on("click", function(e) {

//creating function to run when page loads
$(document).ready(function () {
  // e.preventDefault();

  $("<div class = 'totalParks'></div>").appendTo(".container");

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
                 description: response.data[i].description,
                 campsites: response.data[i].campsites.totalSites,
                 fees: response.data[i].fees[0].cost,
                 reservation: response.data[i].reservationInfo
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
                let W_icon = `http://openweathermap.org/img/wn/${weather_response.weather[0].icon}@2x.png`;
                
                let weatherInfoElem = $("<div>");
                let weatherIcon = $("<img>");
                weatherIcon.attr("src", W_icon);
                weatherIcon.attr("class", "icon");
                let weatherTemp = weather_response.main.temp;
                console.log(weatherTemp);
                let F = (weatherTemp - 273.15) * 1.80 + 32
                F = F.toFixed(0)
                weatherInfoElem.append(weatherIcon);
                $(weatherInfoElem).append("Temperature: " + F + "°");
                
                $('#'+id).append(weatherInfoElem);
                
         })
            console.log(site.imageUrl);
            let campInfoElem = $("<div>", {id: id});
            let campImage = $("<img>");
            if (site.imageUrl == "undefined"){
                campImage.attr("src", images/imgicon.png)
            };
            campImage.attr("src", site.imageUrl);            
            let campsiteName = $("<h3>"+site.campsiteName+"</h3>");
            let campDesc = $("<p>"+site.description+"</p>");
            let campsiteTotals = $("<p>"+"Total number of campsites: "+site.campsites+"</p>");
            let fees = site.fees
            let dollarFees = parseFloat(fees).toFixed( 2 );
            let finalFees = $("<p>"+"Extimated Campsite Fee: $"+dollarFees+"</p>");

            let reservations = $("<p>"+site.reservation+"</p>");
            console.log(site.campsiteName);
            campInfoElem.append(campImage);
            campInfoElem.append(campsiteName);
            campInfoElem.append(campDesc);
            campInfoElem.append(campsiteTotals);
            campInfoElem.append(finalFees);
            campInfoElem.append(reservations)
            $('#campsiteInfo').append(campInfoElem);
      $(campImage).wrap($("<a>").attr("href", "campsitepg3.html"));
      $(id).append(campImage)
    //   $("a").attr("href", "campsitepg3.html").append(campsiteName)
    });
    let totalparks = document.querySelector(".container .totalParks");
    totalparks.textContent = "Total National Park Campgrounds in " + state + ": " + response.total;
  });
});
