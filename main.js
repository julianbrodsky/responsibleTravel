document.querySelector('#submitCaseInput').addEventListener('click', searchCountryCases)

function searchCountryCases(){

let userCountry = document.querySelector('#caseInput').value


function capFirstLetter(country){
return country.split(" ").map(function(word){
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
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
    document.querySelector('#countryName').innerText = `Total confirmed cases in ${userCountry}`
    slug = data[ind].Slug
    console.log(slug)

    })

    fetch(`https://api.covid19api.com/summary`)
    .then(res => res.json())
    .then(data => {

        let index = data.Countries.findIndex( obj => {
            return(obj.Country === userCountry)})

        let countryData = data.Countries[index]
        document.querySelector('#caseCount').innerText = countryData.TotalConfirmed
    })

}