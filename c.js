
const getCountries = () => {
    const xhr = new XMLHttpRequest();
    
    xhr.open('GET', 'https://restcountries.eu/rest/v2/all');
    xhr.responeType = 'json';
    
    xhr.send();
    
    xhr.onload = () => {
      const data = xhr.response;
      
      let info = JSON.parse(data);
      info.forEach(i =>console.log("Name: "+i.name+", Capital: "+i.capital+", Flag: "+i.flag))
      
    }
  }
  
  getCountries();