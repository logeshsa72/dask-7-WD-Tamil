var xhr = new XMLHttpRequest();
    xhr.open('GET','https://restcountries.com/v3.1/all');
    xhr.responseType = 'json';
    xhr.send();

    xhr.onload = function() {
        let responObj = xhr.response;
        console.log(responObj);

        let country = responObj.filter(function(item){
            return item.population && item.population.common
            console.log(item.population.common)
        });
       let countryName = country.map(function (item){
        return item.name.common
       });
       console.log(countryName)
    };