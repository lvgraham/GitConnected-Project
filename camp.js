// $("#dropdown1 li").on("click", function(e) {
$(document).ready(function () {
  // e.preventDefault();

  $("<div class = 'totalParks '>Total National Parks in State: </div>").appendTo(".container");

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
    for (let i = 0; i < response.data.length; i++) {
      console.log(response.data.length);
      console.log(i);
      let campInfoElem = $("<div>");
      let campImage = $("<img>");
      campImage.attr("src", response.data[i].images[0].url);
      let campsiteName = response.data[i].name;
      let id = response.data[i].id
      console.log(campsiteName);
      console.log(id)
      $(campInfoElem.append(campImage));
      $(campInfoElem.append(campsiteName));
      $("#campsiteInfo").append(campInfoElem);
      $(campImage).wrap($("<a>").attr("href", "campsitepg3.html"));
      $(id).append(campImage)
    //   $("a").attr("href", "campsitepg3.html").append(campsiteName)
    }
    let totalparks = document.querySelector(".container .totalParks");
    totalparks.textContent = "Total Nat. Park Campgrounds in State: " + response.total;
  });
});
