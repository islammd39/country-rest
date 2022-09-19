const countrys = () => {
    fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => loadData(data))
    // console.log(data[0].capital);
}


const loadData = (countrys) => {
    // console.log(countrys);
    const allCountry = countrys.map(country => getCountry(country))
    // console.log(countrys[0]);
    const display = document.getElementById('display')
    display.innerHTML = allCountry.join(' ')
}
const getCountry = country => {
    return `
          <div class = "country">
              <h2>${country.name.common}</h2>
              <img src = "${country.flags.png}">
          </div>    

    `
}
// loadData()
countrys()