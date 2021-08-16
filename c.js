  var request = new XMLHttpRequest();
  request.open('GET','https://restcountries.eu/rest/v2/all',true);
  request.send();
  request.onload=function(){
      var data=this.response;
      let info = JSON.parse(data);
      info.forEach(i =>console.log("Name: "+i.name+", Capital: "+i.capital+", Flag: "+i.flag))
  }