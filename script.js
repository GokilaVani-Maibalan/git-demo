//XML-HTTP Request
//4 steps

//1 create XHR request
var request = new XMLHttpRequest();
//2 API URL , .Open method() , 2parametres
request.open('GET','https://restcountries.com/v3.1/all');
//3 Establishing bridge
request.send();
//4 once the data successfully received from server
// onload is an event
// when to use: once the data/server is showing 200 status code
// conversion of string into object
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);
}