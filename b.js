 var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
    var data=this.response;
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