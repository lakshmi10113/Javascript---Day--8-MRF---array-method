
const getCountries = () => {
    const xhr = new XMLHttpRequest();
    
    xhr.open('GET', 'https://restcountries.eu/rest/v2/all');
    xhr.responeType = 'json';
    
    xhr.send();
    
    xhr.onload = () => {
      const data = xhr.response;
      
      let arr = [];
      let countries = JSON.parse(data)
           .forEach(e => arr.push(e.population));
      
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      
      arr = arr.reduce(reducer, 0);
   
      console.log(arr);
      
    }
  }
  
  getCountries();