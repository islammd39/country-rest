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
// option 1
// const getCountry = country => {
//     const {name,flags} = country;
//     return `
//           <div class = "country">
//               <h2>${name.common}</h2>
//               <img src = "${flags.png}">
//           </div>    

//     `
// }

// option 2
// const getCountry = ({name,flags} )=> {
//     return `
//           <div class = "country">
//               <h2>${name.common}</h2>
//               <img src = "${flags.png}">
//           </div>    

//     `
// }
// loadData()
countrys()