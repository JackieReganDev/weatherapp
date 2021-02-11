//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)
let key = '7846d87b775d4c12bcf4b0b743fccfd3'

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://api.weatherbit.io/v2.0/forecast/hourly?city=${choice}&key=${key}&hours=48`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        const desc = data.data[0].weather.description
        let temp = data.data[0].temp
        temp = Math.round(temp * (9/5) + 32)
        document.querySelector('h2').innerText = `The weather for today for ${choice} is ${desc} and it is ${temp}° F`

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
