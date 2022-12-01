// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

// VALIDATE INPUT: Should take in a string as parameter and return "Empty", NaN or "Is A Number" as appropriate.
function validateInput(testInput) {

    if (!testInput) {
        console.log("validateInput - field empty");
        return "Empty";
    } else if (isNaN(Number(testInput)) === true) {
        console.log("validateInput - not a number");  // test
        return "Not a Number";
    } else if (testInput = (/^[0-9]+$/)) {
        console.log("validateInput - is a number");  // test
        return "Is a Number";
    }
}
    
// FORM SUBMISSION:  Takes in a document parameter and strings representing the pilot, co-pilot, fuel level and cargo mass.
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    console.log("submit clicked, console log inside formSubmission"); // test

    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    //let list = document.getElementById("faultyItems"); // this was causing an error if used as faultyItems or as list.  Not sure why.
    let launchStatus = document.getElementById("launchStatus");

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        console.log("alert - empty field");  // test
        alert("All fields are required!");
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        alert("Please enter valid input data in fields.");  // test
        console.log("alert - invalid input");
    } else {
        list.style.visibility = "visible";  // change faultyItems to visible
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`; // using template literal, update the li element pilotStatus to include pilot's name
        copilotStatus.innerHTML = `Pilot ${copilot} is ready for launch`; // using template literal, update the li element copilotStatus to include copilot's name
        
        if (fuelLevel < 10000 && cargoLevel > 10000) { // fuel low, cargo too high
            console.log("formSubmission #1 fuel LOW, cargo HIGH");
            launchStatus.style.color = "red"; // change h2 element launchStatus text color to red.
            launchStatus.innerHTML = "Shuttle not ready for launch"; // change h2 element launchStatus to "Shuttle not ready for launch"
            fuelStatus.innerHTML = "Fuel level too low for launch"; // <10000 fuel level
            cargoStatus.innerHTML = "Cargo mass too high for launch"; // >10000 cargo level
        }
        else if (fuelLevel < 10000 && cargoLevel <= 10000) { // fuel low, cargo ok
            console.log("formSubmission #2 fuel LOW, cargo ok");
            launchStatus.style.color = "red"; // change h2 element launchStatus text color to red.
            launchStatus.innerHTML = "Shuttle not ready for launch"; // change h2 element launchStatus to "Shuttle not ready for launch"
            fuelStatus.innerHTML = "Fuel level too low for launch"; // if user submits < 10000 fuel level
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
        }
        else if (fuelLevel >= 10000 && cargoLevel > 10000) {  // fuel ok, cargo too high
            console.log("formSubmission #3 fuel ok, cargo HIGH");
            launchStatus.style.color = "red"; // change h2 element launchStatus text color to red.
            launchStatus.innerHTML = "Shuttle not ready for launch"; // change h2 element launchStatus to "Shuttle not ready for launch"
            fuelStatus.innerHTML = "Fuel level high enough for launch"
            cargoStatus.innerHTML = "Cargo mass too high for launch";
        }
        else {
            console.log("formSubmission #4 fuel ok, cargo ok");
            launchStatus.style.color = "green"; // change h2 element launchStatus text color to green.
            launchStatus.innerHTML = "Shuttle is ready for launch.";
            fuelStatus.innerHTML = "Fuel level high enough for launch"
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
        }        
    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json(); //  added "return response.json()" per instructions
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
