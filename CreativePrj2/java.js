
/* TO DO
get the page looking good
*/

document.getElementById("ghibli_film").addEventListener("click", function(event) {
    event.preventDefault();
    
    //is this all i Need?? look above 
const url = "https://ghibliapi.herokuapp.com/films"; 


fetch(url)
      .then(function(response) { 
           console.log("hello from function that is anonymus");
        return response.json();
      }).then(function(json) {	
        let results = "";
     results += "<h4>Ghibli Films</h4>";
     

      //All of this needs edited
      for (let i=0; i < json.length; i++) {
        results += '<p><b> Title: </b>' + json[i].title + "<br>";
        results += '<b>Film Director: </b> ' + json[i].director + "<br>";
        results += '<b>Film Producer: </b>' + json[i].producer + "<br>" + "<br>";
      
        results += '<b>Description of the Film: </b>' + json[i].description + "<br>";
        results += '<b>Release Date: </b> ' + json[i].release_date + "<br>";
        results += "</p>";
      }
      document.getElementById("GhibExtend").innerHTML = results;
    
    });
    
  });


  document.getElementById("ghibli_character").addEventListener("click", function(event) {
    event.preventDefault();
    
    //is this all i Need?? look above 
const url = "https://ghibliapi.herokuapp.com/people"; 


fetch(url)
      .then(function(response) { 
           console.log("hello from function that is anonymus");
        return response.json();
      }).then(function(json) {	
        let results = "";
     results += "<h4>Ghibli Characters</h4>";
     

      //All of this needs edited
      for (let i=0; i < json.length; i++) {
        results += '<p> <b>Name of Character: </b>' + json[i].name + "<br>";
        results += '<b>Gender: </b>' + json[i].gender + "<br>";
        results += '<b>Age: </b>' + json[i].age + "<br>";
        results += '<b>Eye Color: </b>' + json[i].eye_color + "<br>";
        results += '<b>Hair Color: </b>' + json[i].hair_color + "<br>";
       results += "</p>";
      }
      document.getElementById("GhibExtend").innerHTML = results;
    
    });
    
  });

  document.getElementById("ghibli_vehicles").addEventListener("click", function(event) {
    event.preventDefault();
    
    //is this all i Need?? look above 
const url = "https://ghibliapi.herokuapp.com/vehicles"; 


fetch(url)
      .then(function(response) { 
           console.log("hello from function that is anonymus");
        return response.json();
      }).then(function(json) {	
        let results = "";
     results += "<h4>Ghibli Vehicles</h4>";
     

      //All of this needs edited
      for (let i=0; i < json.length; i++) {
        results += '<p> <b>Name of Vehicle: </b>' + json[i].name + "<br>";
        results += '<b>Class: </b>' + json[i].vehicle_class + "<br>";
        results += '<b>Length = </b>' + json[i].length + "<br>";
        results += '<b>Description: </b>' + json[i].description + "<br>";
       
        results += "</p>";
      }
      document.getElementById("GhibExtend").innerHTML = results;
    
    });
    
  });


  document.getElementById("ghibli_locations").addEventListener("click", function(event) {
    event.preventDefault();
  const url = "https://ghibliapi.herokuapp.com/locations"; 
  fetch(url)
      .then(function(response) { 
           console.log("hello from function that is anonymus");
        return response.json();
      }).then(function(json) {	
        let results = "";
     results += "<h4>Ghibli Places</h4>";
     

      //All of this needs edited
      for (let i=0; i < json.length; i++) {
        results += '<p> <b>Name of Place: </b>' + json[i].name + "<br>";
        results += '<b>Climate: </b>' + json[i].climate + "<br>";
        results += '<b>Terrain: = </b>' + json[i].terrain + "<br>";
        results += '<b>Surface Water Level: </b>' + json[i].surface_water + "<br>";
       
        results += "</p>";
      }
      document.getElementById("GhibExtend").innerHTML = results;
    
    });
    
  });
 

  document.getElementById("ghibli_species").addEventListener("click", function(event) {
    event.preventDefault();
  const url = "https://ghibliapi.herokuapp.com/species"; 
  fetch(url)
      .then(function(response) { 
           console.log("hello from function that is anonymus");
        return response.json();
      }).then(function(json) {	
        let results = "";
     results += "<h4>Ghibli Species</h4>";
     

      //All of this needs edited
      for (let i=0; i < json.length; i++) {
        results += '<p> <b>Name: </b>' + json[i].name + "<br>";
        results += '<b>Eye Color: </b>' + json[i].eye_colors + "<br>";
        results += '<b>Hair Color: </b>' + json[i].hair_colors + "<br>";
        results += '<b>Classification: </b>' + json[i].classification + "<br>";
       
       
        results += "</p>";
      }
      document.getElementById("GhibExtend").innerHTML = results;
    
    });
    
  });
  
  
  
  