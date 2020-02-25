const axios = require('axios').default;

  axios.get('https://swapi.co/api/films')
  .then(function (response) {
    console.log("Getting all the films");
    var result = response.data.results;
    result.forEach((item,index)=> {
        console.log(item.title)
    })
  })
  .catch(function (error) {
    console.log("Error in fetching data. Error: " + error);
  });




  axios.get('https://swapi.co/api/films/?search=The%20Phantom%20Menace&format=json')
  .then(function (response) {
    console.log("Getting all the films having the title Phantom Menace");
    var result = response.data.results;
    result.forEach((item,index)=> {
        console.log(item.title)
    })
  })
  .catch(function (error) {
    console.log("Error in fetching data. Error: " + error);
  });


