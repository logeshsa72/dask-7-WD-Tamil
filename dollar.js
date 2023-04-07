var xhr = new XMLHttpRequest();
    xhr.open('GET','https://restcountries.com/v3.1/all');
    xhr.responseType = 'json';
    xhr.send();

    xhr.onload = function() {
        let responObj = xhr.response;
        console.log(responObj);

        let usdcountry = responObj.filter(function(item){
            return item.currencies && item.currencies.USD
            console.log(item.currencies.USD)
        });
       let countryName = usdcountry.map(function (item){
        return item.name.common
       });
       console.log(countryName)
    };