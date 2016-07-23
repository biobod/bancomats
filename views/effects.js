/*(function searchCity() {
    var search = document.getElementById('search');
    var results = document.getElementById('results');
    var valueCity = document.getElementsByName('city')[0];

    search.addEventListener('submit', function () {
        var div = document.createElement('div');
        div.innerHTML = valueCity.value;
        valueCity.value = '';
        results.appendChild(div);
    });
})();
*/
var search = document.getElementById('search');
var url = 'https://api.privatbank.ua/p24api/infrastructure?json&atm&address=&city=Киев';


    fetch(url,
        { mode: 'cors',
            method: 'get',
            headers: {
                'Accept': 'application/json'
            }} )
        .then(function (response) {
            return response.text();
        }).then(function(json) {
        console.log('parsed json', json);
    }).catch(function (ex) {
        console.log('parsing failed', ex);
    });





