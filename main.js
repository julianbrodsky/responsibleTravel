document.querySelector('#submitCaseInput').addEventListener('click', searchCountryCases)

function searchCountryCases(){

let userCountry = document.querySelector('#caseInput').value

fetch(`https://api.covid19api.com/countries`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        let ind = data.findIndex( obj => {
            return(obj.Country === userCountry)
        })
    document.querySelector('#countryName').innerText = `Showing cases for ${userCountry}`
    Window.slug = data[ind].slug
    })

fetch(`https://api.covid19api.com/dayone/country/france`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
}