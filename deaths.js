document.querySelector('#submitDeathInput').addEventListener('click', searchCountryDeaths)

function searchCountryDeaths(){

let userCountry = document.querySelector('#deathInput').value

function capFirstLetter(country){
    return country.split(" ").map(function(word){
          return word.charAt(0).toUpperCase() + lowerLastLetters(word.slice(0))
          
        }).join(" ")
    }
function lowerLastLetters(word){
    let restOfWord = ''
    for(let i = 1; i < word.length; i++){
        restOfWord += word[i].toLowerCase()
    }
    return(restOfWord)
}

    userCountry = capFirstLetter(userCountry)

let slug = ''

fetch(`https://api.covid19api.com/countries`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        let ind = data.findIndex( obj => {
            return(obj.Country === userCountry)
        })
    document.querySelector('#countryNameD').innerText = `Total confirmed deaths in ${userCountry}`
    slug = data[ind].Slug
    console.log(slug)

    })

    fetch(`https://api.covid19api.com/summary`)
    .then(res => res.json())
    .then(data => {

        let index = data.Countries.findIndex( obj => {
            return(obj.Country === userCountry)})

        let countryData = data.Countries[index]
        document.querySelector('#deathCount').innerText = countryData.TotalDeaths
    })

}