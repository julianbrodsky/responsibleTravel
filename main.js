fetch(`https://api.covid19api.com/countries`)
    .then(res => res.json())
    .then(data => {
        console.log(data)

    })