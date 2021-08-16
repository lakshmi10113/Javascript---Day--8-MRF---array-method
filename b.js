
const getCountries = () => {
    const xhr = new XMLHttpRequest();
    
    xhr.open('GET', 'https://restcountries.eu/rest/v2/all');
    xhr.responeType = 'json';
    
    xhr.send();
    
    xhr.onload = () => {
      const data = xhr.response;
      
      let countries = JSON.parse(data)
            .filter( e => e.population < 2_00_000)
            .map( function(i){
            return {
              name: i.name,
              population:i.population
            }
          });
  
      console.log(countries);
      
    }
  }
  
  getCountries();