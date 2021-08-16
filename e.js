
const getCountries = () => {
    const xhr = new XMLHttpRequest();
    
    xhr.open('GET', 'https://restcountries.eu/rest/v2/all');
    xhr.responeType = 'json';
    
    xhr.send();
    
    xhr.onload = () => {
      const data = xhr.response;
      
      let arr = [];
      let countries = JSON.parse(data)
        .map(e => e.currencies.forEach(i => i.code == 'USD'? arr.push(e.name) : null));
  
      console.log(arr);
      
    }
  }
  
  getCountries();