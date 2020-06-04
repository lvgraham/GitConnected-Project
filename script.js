/* When the user clicks on the button, (drop down button)
toggle between hiding and showing the dropdown content */
// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
//   }
  
//   // Close the dropdown menu if the user clicks outside of it
//   window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
//       var dropdowns = document.getElementsByClassName("dropdown-content");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
//   }

// --------------------------------------------------------------------- PULL STATE INFO FROM API

// const state = array('AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY', 'AE', 'AA', 'AP');

const queryURL = "https://developer.nps.gov/api/v1/campgrounds?stateCode=" + "TX" + "&api_key=ASQluJvriYYOmYed5QzQRORAQ2y3nC9julgxAIhA"


// const state = $("#state").val().trim();

$.getJSON(queryURL, function(json) {
        //  console.log(json);
         console.log("Total parks in state: ", json.total)
         console.log(json.data[0].reservationUrl)
         console.log("Number of sites reservable: ", json.data[0].numberOfSitesReservable)
         console.log(json.data[0].campsites)
         console.log(json.data[0].directionsUrl)
         console.log(json.data[0].fees[0].cost)
         console.log(json.data[0].name)
         console.log(json.data[0].description)
})

// ------------------------------------------------------------------------ APPEND RANDOM PARKS TO HOMEPAGE

// $("#card-panel").append(stateInfo)


// $.ajax({
//     url: queryURL,
//     dataType: 'jsonp',
//     success: function(results){
//         var title = results.response.oneforty;
//         var numTweets = results.response.trackback_total;
//         $('#results').append(title + ' has ' + numTweets + ' tweets.');
//     }
// });
let state = "TX";
let longitude;
let latitude; 
let APIKey = "ASQluJvriYYOmYed5QzQRORAQ2y3nC9julgxAIhA";
let queryURL = "https://developer.nps.gov/api/v1/campgrounds?stateCode="+state+"&api_key="+APIKey;
git$("button").on("click", function() {
    state = $(this).attr("Search");

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(campgroundsReturned);

function campgroundsReturned(data) {
    console.log(data);  
};
})
