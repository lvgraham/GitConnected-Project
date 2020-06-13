$(document).ready(function(){
    $("<div class = 'totalParks '>Total National Parks in State: </div>").appendTo(".campAdd"); 
    $("<div class = 'totalSites '>Number of Total Sites: </div>").appendTo(".campAdd"); 
    // $("<div class = 'tentSites '>Number of Tent Sites: </div>").appendTo(".container"); 
    // $("<div class = 'rvSites '>Number of RV Sites: </div>").appendTo(".container"); 
    $("<div class = 'reserveURL '>Reservation URL: </div>").appendTo(".campAdd"); 
    $("<div class = 'cost '>Cost: </div>").appendTo(".campAdd"); 
    $("<div class = 'parkName '>Park Name: </div>").appendTo(".campAdd"); 
    $("<div class = 'stateCode '>State Code: </div>").appendTo(".campAdd"); 

// })

// $("#dropdown1 li").on("click", function(e) {  // make on page load grab state from array of states to populate random data
    
    e.preventDefault();
    
    let state = $(this).find("a").attr("value");
    // console.log(state);

    const APIKey = "ASQluJvriYYOmYed5QzQRORAQ2y3nC9julgxAIhA"

    const queryURL = "https://developer.nps.gov/api/v1/campgrounds?stateCode=" + state + "&api_key=" + APIKey

    $.ajax({
        type: 'GET',
        url: queryURL,
        dataType: 'json',

    }).then (function(response) {
        // console.log(response)

    let totalparks = document.querySelector(".campAdd .totalParks");
    totalparks.textContent = ("Total National Parks in State: " + response.total);

    let stateCode = document.querySelector(".campAdd .stateCode");
    stateCode.textContent = ("State Code: " + response.data[0].addresses[0].stateCode)
    
    let reserveSites = document.querySelector(".campAdd .reserveSites");
    reserveSites.textContent = ("Number of Reservable Site: " + response.data[0].numberOfSitesReservable)
  
    let totalSites = document.querySelector(".campAdd .totalSites");
    totalSites.textContent = ("Number of Total Sites: " + response.data[0].campsites.totalsites)
    
    // let tentSites = document.querySelector(".container .tentSites");
    // tentSites.textContent = ("Number of Tent Only: " + response.data[0].campsites.tentonly)
    
    // let rvSites = document.querySelector(".container .rvSites");
    // rvSites.textContent = ("Number of RV Only: " + response.data[0].campsites.rvonly)
  
    let reserveURL = document.querySelector(".campAdd .reserveURL");
    reserveURL.textContent = ("Reservation URL: " + response.data[0].reservationUrl)  

    let cost = document.querySelector(".campAdd .cost");
    cost.textContent = ("Cost: " + response.data[0].fees[0].cost) 
    
    let parkName = document.querySelector(".campAdd .parkName");
    parkName.textContent = ("Park Name: " + response.data[0].operatingHours[0].name) 


    console.log("Latitude: ", response.data[0].latitude)
    console.log("Longitude: ", response.data[0].longitude)
    console.log("Park ID: ", response.data[0].id)
    console.log("Postal Code: ", response.data[4].addresses[0].postalCode)
  
    })

    
});

// ----- Make Array of States for query url to grab at random
