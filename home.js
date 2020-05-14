const btn = document.querySelector(".btn");
const div = document.querySelector("#append");
const input = document.querySelector("input");
const nameAndFlag = document.querySelector(".resultedSearch");

///Event Listener which waits the input from the user before clicking search button

countryName = "";
input.addEventListener("input", function() {
    btn.addEventListener("click", function() {
        let countryName = input.value;

        fetchData(input.value);
    });
});
let output = `<div class="bg-dark">Amr</div>`;

function printResults(dataOfCountry) {
    nameAndFlag.innerHTML = `<img src="https://cdn.ipwhois.io/flags/${dataOfCountry.CountryCode.toLowerCase()}.svg" width="80px" height="50px" class="border border-dark" alt="">
    <h1 class="d-inline align-middle display-4 text-danger pl-3">${
      dataOfCountry.Country
    }</h1>
    <div id="append" class="information my-5 ">
     <div class="border border-dark rounded text-light py-4 ">
    <h3 class="d-inline pl-4">Date:</h3>
    <div class="d-inline display ml-2 numbersSize">${dataOfCountry.Date.slice(
      0,
      10
    )}</div>
</div>
<br>
<div class="border border-dark rounded text-light py-4 ">
    <h3 class="d-inline pl-4">New Confirmed:</h3>
    <div class="d-inline display ml-2 numbersSize">${
      dataOfCountry.NewConfirmed
    }</div>
</div>
<br>
<div class="border border-dark rounded text-light py-4 ">
    <h3 class="d-inline pl-4">Total Confirmed:</h3>
    <div class="d-inline display ml-2 numbersSize">${
      dataOfCountry.TotalConfirmed
    }</div>
</div>
<br>
<div class="border border-dark rounded text-light py-4 ">
    <h3 class="d-inline pl-4">New Deaths:</h3>
    <div class="d-inline display ml-2 numbersSize">${
      dataOfCountry.NewDeaths
    }</div>
</div>
<br>
<div class="border border-dark rounded text-light py-4 ">
    <h3 class="d-inline pl-4">Total Deaths:</h3>
    <div class="d-inline display ml-2 numbersSize">${
      dataOfCountry.TotalDeaths
    }</div>
</div>
<br>
<div class="border border-dark rounded text-light py-4 ">
    <h3 class="d-inline pl-4">New Recovered:</h3>
    <div class="d-inline display ml-2 numbersSize">${
      dataOfCountry.NewRecovered
    }</div>
</div>
<br>
<div class="border border-dark rounded text-light py-4 ">
    <h3 class="d-inline pl-4">Total Recovered:</h3>
    <div class="d-inline display ml-2 numbersSize">${
      dataOfCountry.TotalRecovered
    }</div>
</div>
<br>
</div>
</div>
`;
}

//// Search Function that returns the full data per Country
function search(data, countryFromList) {
    let obj = data.find((o) => o.Country === countryFromList);
    printResults(obj);
}

function fetchData(name) {
    fetch("https://api.covid19api.com/summary")
        .then((res) => res.json())
        .then((data) => search(data.Countries, name));
}