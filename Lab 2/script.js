//TODO
//save under corect name





document.getElementById("weatherSubmit").addEventListener("click", function(event) {
    event.preventDefault();
    const value = document.getElementById("weatherInput").value;
    if (value === "")
      return;
    console.log(value);
    const url = "http://api.openweathermap.org/data/2.5/weather?q=" + value +  ",US&units=imperial&id=image" + "&APPID=885fcd6a4fc6a184eb62a8efbf3cf1cc";
    fetch(url)
      .then(function(response) { //then is for the promise property (running multiple functions at the same time)
     console.log("hello from function that is anonymus");
        return response.json();
      }).then(function(json) {	
        let results = "";
      results += '<h3>Weather in ' + json.name + "</h3>";
     
      for (let i=0; i < json.weather.length; i++) {
	results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
      }
      results += '<p> Temperature ' + json.main.temp + " &deg;F</p>"
      results += "<p>"
      for (let i=0; i < json.weather.length; i++) {
  results += "<h4>" + json.weather[i].description + "</h4>";
  
	if (i !== json.weather.length - 1)
	  results += ", "
      }
    
      results += '<p> Wind Speed in ' + json.name + " " + json.wind.speed + "</p>";
      results += '<p> Clouds in ' + json.name + " " + json.clouds.all + "</p>";
      results += "</p>";
     
    
      //my code which may or may not be correct so make sure to have it checked if it is not working
     
      document.getElementById("weatherResults").innerHTML = results;
      
      });

      const url2 = "http://api.openweathermap.org/data/2.5/forecast?q=" + value + ", US&units=imperial" + "&APPID=885fcd6a4fc6a184eb62a8efbf3cf1cc";
      fetch(url2)
        .then(function(response) {
          return response.json();
        }).then(function(json) {
            let forecast = "";
            
            for (let i=0; i < json.list.length; i++) {
          forecast += "<h2>" + moment(json.list[i].dt_txt).format('MMMM Do YYYY, h:mm:ss a') + "</h2>";
          forecast += "<p>Temperature: " + json.list[i].main.temp + "</p>";
          forecast += "<p>Wind Speed " + json.list[i].wind.speed +"</p>";
          forecast += "<p> Clouds " + json.list[i].clouds.all +"</p>";
          forecast += '<img src="http://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/>'

        }

            document.getElementById("forecastResults").innerHTML = forecast;
        });
      console.log("hello world");
  });