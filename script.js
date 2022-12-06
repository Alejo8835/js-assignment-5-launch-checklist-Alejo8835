

   window.addEventListener("load", function() {
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       let selectPlanet = pickPlanet(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       addDestinationInfo(document, selectPlanet.name, selectPlanet.diameter, selectPlanet.star, selectPlanet.distance, selectPlanet.moons, selectPlanet.image);
       
     
       
   })


    list = document.getElementById("faultyItems");
    //list.style.visibility = "hidden"
    let form = document.querySelector("form");
    // console.log(form)
    form.addEventListener('submit', function(event) {
    // console.log('Submit')
         
        let pilotNameInput = document.querySelector("input[name=pilotName]");
        let pilot = pilotNameInput.value;
        let copilotNameInput = document.querySelector("input[name=copilotName]");
        let copilot = copilotNameInput.value;
        let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
        let fuelLevel = Number(fuelLevelInput.value);
        let cargoMassInput = document.querySelector("input[name=cargoMass]");
        let cargoLevel = Number(cargoMassInput.value);
        event.preventDefault();

    // console.log(typeof formSubmission)

        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
        
    });
});
