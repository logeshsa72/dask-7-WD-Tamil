
var xhr = new XMLHttpRequest();
xhr.open('GET','https://restcountries.com/v3.1/all');
xhr.responseType = 'json';
xhr.send();
xhr.onload = function() {
    var responObj = xhr.response;
    var res= responObj.filter(function(item){
    return item.continents =='Asia';
});
console.log (res.filter(function(item){
    return item==2lack;
}));
}
