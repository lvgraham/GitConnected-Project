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


const queryURL = "https://developer.nps.gov/api/v1/campgrounds?stateCode=" + state + "&api_key=ASQluJvriYYOmYed5QzQRORAQ2y3nC9julgxAIhA"

// const state = TX

const state = $("#state").val().trim();

$.getJSON(queryURL, function(json) {
         console.log(json);
})


// $.ajax({
//     url: queryURL,
//     dataType: 'jsonp',
//     success: function(results){
//         var title = results.response.oneforty;
//         var numTweets = results.response.trackback_total;
//         $('#results').append(title + ' has ' + numTweets + ' tweets.');
//     }
// });