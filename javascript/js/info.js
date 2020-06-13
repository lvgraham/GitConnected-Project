$(document).ready(function () {
  $("<div class = 'parkName '>Park Name: </div>").appendTo(".container");
  $("<div class = 'totalSites '>Number of Total Sites: </div>").appendTo(".container");
  $("<div class = 'reserveSites '>Number of Reservable Sites: </div>").appendTo(".container");
  $("<div class = 'reserveURL '>Reservation URL: </div>").appendTo(".container");
  $("<div class = 'cost '>Cost: </div>").appendTo(".container");
  // $("<div class = 'stateCode '>State Code: </div>").appendTo(".container");
  $("<div class = 'description '>Description: </div>").appendTo(".container");
  // $("<div class = 'totalParks '>Total Nat. Park Campgrounds: </div>").appendTo(".container");
  $("<div class = 'parkImg '></div>").appendTo(".container");

});

// $("#dropdown1 li").on("click", function(e) {
$(document).ready(function () {
  // e.preventDefault();

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

  $.ajax({
    type: "GET",
    url: queryURL,
    dataType: "json",
  }).then(function (response) {
    // console.log(response)

    // let totalparks = document.querySelector(".container .totalParks");
    // totalparks.textContent = ("Total Campgrounds in State: " + response.total);

    // let stateCode = document.querySelector(".container .stateCode");
    // stateCode.textContent = ("State Code: " + response.data[0].addresses[0].stateCode)

    let reserveSites = document.querySelector(".container .reserveSites");
    reserveSites.textContent =
      "Number of Reservable Site: " + response.data[0].numberOfSitesReservable;

    let totalSites = document.querySelector(".container .totalSites");
    totalSites.textContent =
      "Number of Total Sites: " + response.data[0].campsites.totalsites;

    let reserveURL = document.querySelector(".container .reserveURL");
    reserveURL.textContent =
      "Reservation URL: " + response.data[0].reservationUrl;

    let cost = document.querySelector(".container .cost");
    cost.textContent = "Cost: " + response.data[0].fees[0].cost;

    let parkName = document.querySelector(".container .parkName");
    parkName.textContent =
      "Park Name: " + response.data[0].operatingHours[0].name;

    let description = document.querySelector(".container .description");
    description.textContent = "Description: " + response.data[0].description;

    let parks = document.querySelector(".container .park");
    parks.textContent = "Parks: " + response.data[0].description;

    let img = document.querySelector(".container .parkImg")
    img.innerHTML = response.data[0].images[0].url

    // console.log("Latitude: ", response.data[0].latitude)
    // console.log("Longitude: ", response.data[0].longitude)
    // console.log("Park ID: ", response.data[0].id)
    // console.log("Postal Code: ", response.data[0].addresses[0].postalCode)
  });
});


// response.data[i].id

// https://developer.nps.gov/api/v1/campgrounds?id= + id + &api_key=ASQluJvriYYOmYed5QzQRORAQ2y3nC9julgxAIhA
    //search by id