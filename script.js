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