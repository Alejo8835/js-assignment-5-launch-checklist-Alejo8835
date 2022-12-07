// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
              
   let missionTarget = document.getElementById("missionTarget");
       missionTarget.innerHTML = `
       <h2>Mission Destination</h2>
       <ol>
           <li>Name:${name} </li>
           <li>Diameter: ${diameter} </li>
           <li>Star: ${star}</li>
           <li>Distance from Earth: ${distance} </li>
           <li>Number of Moons: ${moons}</li>
       </ol>
       <img src="${imageUrl}">
      `;
}

function validateInput(testInput) {
    let numberInput = Number(testInput);
    if(testInput === "") {
        return "Empty";
    } else if(isNaN(numberInput)) {
        return "Not a Number";
    } else if (isNaN(numberInput) === false) {
        return "Is a Number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
        let pilotStatus = document.getElementById("pilotStatus");
        let copilotStatus = document.getElementById("copilotStatus");
        let fuelLevelStatus = document.getElementById("fuelStatus");
        let cargoLevelStatus = document.getElementById("cargoStatus"); 

       if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("All fields are required!");
       } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        alert("Make sure to enter valid information for each field!");
       } else {
        list.style.visibility = "visible";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch!`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch!`;
        const launchStatus = document.getElementById("launchStatus");
        if (fuelLevel < 10000 && cargoLevel <= 10000) {
        //list.style.visibility = "visible";
        fuelLevelStatus.innerHTML = 'Fuel level too low for lunch!';
        launchStatus.innerHTML = 'Shuttle not ready for lunch!';
        launchStatus.style.color = 'red';
        } else if (cargoLevel >= 10000 && fuelLevel > 10000) {
        cargoLevelStatus.innerHTML = 'Cargo mass too heavy for launch';
        launchStatus.innerHTML ='Shuttle not ready for launch'
        launchStatus.style.color = 'red';  
        } else {
         fuelLevel.innerHTML = 'Fuel level high enoguh for launch';
         cargoLevel.innerHTML = 'Cargo mass low enough for launch';
         launchStatus.innerHTML = 'Shuttle ready for launch!'
         launchStatus.style.color = 'green';    
        }
       }
      }     
async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
          if (response.status >= 400) {
            throw new Error("find response");
        } else {
        return response.json()
        }
     });
    return planetsReturned;
}

function pickPlanet(planets) {
   let index = Math.floor(Math.random() * planets.length);
   return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
