
$(document).ready(function() { 
    $("<div class = 'totalParks '>Total National Parks in State: </div>").appendTo(".container"); 
    $("<div class = 'reserveSites '>Number of Reservable Sites: </div>").appendTo(".container"); 
    $("<div class = 'totalSites '>Number of Total Sites: </div>").appendTo(".container"); 
    $("<div class = 'reserveURL '>Reservation URL: </div>").appendTo(".container"); 
    $("<div class = 'cost '>Cost: </div>").appendTo(".container"); 
    $("<div class = 'parkName '>Park Name: </div>").appendTo(".container"); 
    $("<div class = 'stateCode '>State Code: </div>").appendTo(".container"); 
    $("<div class = 'description '>Description: </div>").appendTo(".container");
    $("<ul class = 'parks '>Parks: </ul>").appendTo(".campsiteName");

}); 

// $("#dropdown1 li").on("click", function(e) {
    $(document).ready(function() {
    // e.preventDefault();
    
    const urlParams = new URLSearchParams(window.location.search);
    const state = urlParams.get('state');

    // let state = 'TX';//$(this).find("a").attr("value"); getParams('state');
    // console.log(state);

    const APIKey = "ASQluJvriYYOmYed5QzQRORAQ2y3nC9julgxAIhA"

    const queryURL = "https://developer.nps.gov/api/v1/campgrounds?stateCode=" + state + "&api_key=" + APIKey

    $.ajax({
        type: 'GET',
        url: queryURL,
        dataType: 'json',

    }).then (function(response) {
        // console.log(response)
        for (let i = 0; i < response.data.length ; i++){
            console.log(response.data.length);
            console.log(i);
            let campInfoElem = $("<div>");
            let campImage = $("<img>");
            campImage.attr("src", response.data[i].images[0].url);            
            let campsiteName = response.data[i].name;
            console.log(campsiteName);
            $(campInfoElem.append(campImage));
            $(campInfoElem.append(campsiteName));
            $('#campsiteInfo').append(campInfoElem);
            }
    
    let totalparks = document.querySelector(".container .totalParks");
    totalparks.textContent = ("Total Campgrounds in State: " + response.total);

    let stateCode = document.querySelector(".container .stateCode");
    stateCode.textContent = ("State Code: " + response.data[0].addresses[0].stateCode)
    
    let reserveSites = document.querySelector(".container .reserveSites");
    reserveSites.textContent = ("Number of Reservable Site: " + response.data[0].numberOfSitesReservable)
  
    let totalSites = document.querySelector(".container .totalSites");
    totalSites.textContent = ("Number of Total Sites: " + response.data[0].campsites.totalsites)
    
    let reserveURL = document.querySelector(".container .reserveURL");
    reserveURL.textContent = ("Reservation URL: " + response.data[0].reservationUrl)  

    let cost = document.querySelector(".container .cost");
    cost.textContent = ("Cost: " + response.data[0].fees[0].cost) 
    
    let parkName = document.querySelector(".container .parkName");
    parkName.textContent = ("Park Name: " + response.data[0].operatingHours[0].name)

    let description = document.querySelector(".container .description")
    description.textContent = ("Description: " + response.data[0].description)
    
    // let parks = document.querySelector(".container .park")
    // parks.textContent = ("Parks: " + response.data[0].description)
    
    
    // $.each(state, function(key, value) {
    //     var parkName = value.name;
    //     // var tuningArray = value.tuning;
    //     console.log('name: ' + tuningName);
    //     $.each(tuningArray, function(key,value) {
    //       console.log(value);
    //     });
    //   });

    for (let i = 0; i < response.data.length; i++) {
        let masterArr = response.data[i].name;
        console.log(masterArr)
        let parkNameList = document.querySelector(".container .parks")
        parkNameList.textContent = masterArr

    }

    // console.log("Latitude: ", response.data[0].latitude)
    // console.log("Longitude: ", response.data[0].longitude)
    // console.log("Park ID: ", response.data[0].id)
    // console.log("Postal Code: ", response.data[0].addresses[0].postalCode)
  
    });
    
});








