document.querySelector('#submitCaseInput').addEventListener('click', searchCountryCases)

function searchCountryCases(){

let userCountry = document.querySelector('#caseInput').value

let slug = ''

fetch(`https://api.covid19api.com/countries`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        let ind = data.findIndex( obj => {
            return(obj.Country === userCountry)
        })
    document.querySelector('#countryName').innerText = `Showing cases for ${userCountry}`
    slug = data[ind].Slug
    console.log(slug)

    })

    fetch(`https://api.covid19api.com/summary`)
    .then(res => res.json())
    .then(data => {

        let index = data.Countries.findIndex( obj => {
            return(obj.Country === userCountry)})

        let countryData = data.Countries[index]
        document.querySelector('#caseCount').innerText = `Total confirmed cases in ${userCountry}: ${countryData.TotalConfirmed}`
    })

// fetch(`https://api.covid19api.com/live/country/${slug}/status/confirmed`)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//         console.log(slug)
//         console.log(`https://api.covid19api.com/live/country/${slug}/status/confirmed`)
//     })
}