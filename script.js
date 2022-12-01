// Write your JavaScript code here!

window.addEventListener("load", function() {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch(); // added = myFetch() here per notes above
    listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.

       let planet = (pickPlanet(listedPlanets)); // variable declared to hold randomized planet info on page load
       console.log(planet); // test
        // values for accessing data in JSON
        /*
            name = planet.name;
            diameter = planet.diameter;
            star = planet.star
            distance = planet.distance;
            moons = planet.moons;
            imageUrl = planet.image;
        */
       console.log(planet.name); // test
       console.log(planet.diameter); // test
       
       addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image); // sends randomized planet info into browser

   })
   
   // "Make sure to call your formSubmission() function at the appropriate time in your script.js file!"

    //let pilot = document.getElementById("pilotStatus"); // not necessary
    //let copilot = document.getElementById("copilotStatus"); // not necessary
    //let fuelLevel = document.getElementById("fuelStatus"); // not necessary
    //let cargoLevel = document.getElementById("cargoStatus"); // not necessary
    let list = document.getElementById("faultyItems");  // Need clarity on "list" as a variable.
    
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


