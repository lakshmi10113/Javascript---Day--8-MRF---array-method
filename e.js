  var request = new XMLHttpRequest();
  request.open('GET','https://restcountries.eu/rest/v2/all',true);
  request.send();
  request.onload=function(){
      var data=this.response;
      let arr = [];
      let countries = JSON.parse(data)
        .map(e => e.currencies.forEach(i => i.code == 'USD'? arr.push(e.name) : null));
  
      console.log(arr);
  }