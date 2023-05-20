let city = document.getElementById('city')
let country = document.getElementById('country')
let submit = document.getElementById('submit')
let info = document.getElementById('info')

submit.onclick = (x) => { x.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value},${country.value}&appid=f223ce9f3bc2b95a2578f889cc2e7e1b`)
    .then((response) => response.json())
    .then((data) => {
         info.textContent = `${city.value}, ${country.value}, ${((data.main.temp - 273.15) * 9/5 + 32).toFixed(1)}F`;
    })
}



