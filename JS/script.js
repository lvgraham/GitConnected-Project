
$(document).ready(function(){
    $("<div class = 'parkName '></div>").appendTo(".campAdd");
  $("<div class = 'totalSites '></div>").appendTo(".campAdd");
//   $("<div class = 'reserveSites '>Number of Reservable Sites: </div>").appendTo(".campAdd");
//   $("<div class = 'reserveURL '>Reservation URL: </div>").appendTo(".campAdd");
  $("<div class = 'cost '></div>").appendTo(".campAdd");
  $("<div class = 'stateCode '></div>").appendTo(".campAdd");
  $("<div class = 'description '></div>").appendTo(".campAdd");
  $("<img class = 'parkImg '>").appendTo(".campAdd");
  $("<div class = 'infoURL '></div>").appendTo(".campAdd");

  

})
 

window.onload = (event) => {
// $("#dropdown1 li").on("load", function(e) {
    let stateArr = [ 'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'DC', 'FL', 'HI', 'ID', 'IN', 'KS', 'KY', 'MD', 'MI', 'MN', 'MS', 'MO', 'MT', 'NV', 'NJ', 'NM', 'NY', 'NC', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VA', 'WA', 'WV', 'WI', 'WY' ]
    let state = stateArr[Math.floor(Math.random()*stateArr.length)];
    console.log(state)
    // removed (NH, VI, IL, DE, MH, VT, ME, IA, CT, MA, NE, PR)

// $("#dropdown1 li").on("click", function(e) {  // make on page load grab state from array of states to populate random data
    
    
    // let state = $(this).find("a").attr("value");
    // console.log(state);

    const APIKey = "ASQluJvriYYOmYed5QzQRORAQ2y3nC9julgxAIhA"

    const queryURL = "https://developer.nps.gov/api/v1/campgrounds?stateCode=" + state + "&api_key=" + APIKey

    $.ajax({
        type: 'GET',
        url: queryURL,
        dataType: 'json',

    }).then (function(response) {
        console.log(response)

    for (i = 0; i < state.length; i++) {


        let stateCode = document.querySelector(".campAdd .stateCode");
        stateCode.textContent = ("State Code: " + response.data[i].addresses[0].stateCode)
        // console.log(stateCode)
  
        let totalSites = document.querySelector(".campAdd .totalSites");
        totalSites.textContent = ("Number of Total Sites: " + response.data[i].campsites.totalSites)  

        let cost = document.querySelector(".campAdd .cost");
        cost.textContent = ("Cost: " + response.data[i].fees[0].cost) 

        let description = document.querySelector(".campAdd .description");
        description.textContent = ("Description: " + response.data[i].description) 
    
        let parkName = document.querySelector(".campAdd .parkName");
        parkName.textContent = ("Park Name: " + response.data[i].name) 
        console.log(parkName)

        let moreInfo = document.querySelector(".campAdd .infoURL");
        moreInfo.textContent = "For More Information: "+ response.data[i].url;
        console.log(moreInfo)

        // let img = response.data[0].images[0].url
        // document.getElementById("parkImg").src = img;
        document.getElementById("parkImg").src = response.data[0].images[0].url

  

    }

    })

}

