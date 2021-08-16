
const getCountries = () => {
    const xhr = new XMLHttpRequest();
    
    xhr.open('GET', 'https://restcountries.eu/rest/v2/all');
    xhr.responeType = 'json';
    
    xhr.send();
    
    xhr.onload = () => {
      const data = xhr.response;
      
      let countries = JSON.parse(data)
            .filter( e => e.region == 'Asia')
            .map( function(i){
            return {
              name: i.name,
              region:i.region
            }
          });
  
      console.log(countries);
      
    }
  }
  
  getCountries();