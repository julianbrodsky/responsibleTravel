document.querySelector('#submitDeathInput').addEventListener('click', searchCountryDeaths)

function searchCountryDeaths(){

let userCountry = document.querySelector('#deathInput').value

let slug = ''

fetch(`https://api.covid19api.com/countries`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        let ind = data.findIndex( obj => {
            return(obj.Country === userCountry)
        })
    document.querySelector('#countryNameD').innerText = `Showing deaths for ${userCountry}`
    slug = data[ind].Slug
    console.log(slug)

    })

    fetch(`https://api.covid19api.com/summary`)
    .then(res => res.json())
    .then(data => {

        let index = data.Countries.findIndex( obj => {
            return(obj.Country === userCountry)})

        let countryData = data.Countries[index]
        document.querySelector('#deathCount').innerText = `Total confirmed deaths in ${userCountry}: ${countryData.TotalDeaths}`
    })

}