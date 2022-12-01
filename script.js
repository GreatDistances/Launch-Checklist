// Write your JavaScript code here!

window.addEventListener("load", function() {

    /*
   let listedPlanets;
        // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse // = myFetch(); // added = myFetch() here per notes above
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   */

   // "Make sure to call your formSubmission() function at the appropriate time in your script.js file!" (???)
   // ??? is this supposed to go inside of window event listener?

    //let pilot = document.getElementById("pilotStatus");
    //let copilot = document.getElementById("copilotStatus");
    //let fuelLevel = document.getElementById("fuelStatus");
    //let cargoLevel = document.getElementById("cargoStatus");
    let list = document.getElementById("faultyItems");
    
    let formSubmit = document.getElementById("formSubmit");
    formSubmit.addEventListener("click", function (event) {
        event.preventDefault();
        console.log("submit clicked");

        let pilotNameInput = document.querySelector("input[name=pilotName]");
        let pilot = pilotNameInput.value;

        let copilotInput = document.querySelector("input[name=copilotName]");
        let copilot = copilotInput.value;

        let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
        let fuelLevel = fuelLevelInput.value;

        let cargoLevelInput = document.querySelector("input[name=cargoMass]");
        let cargoLevel = cargoLevelInput.value;

        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
            
    });
});


