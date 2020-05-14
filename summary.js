const createInfo = document.getElementById("dynamicText");

// function printResults(information) {
//     div.innerHTML = `${information.Global.NewConfirmed}`
// }
function printResults(info) {
    createInfo.innerHTML = `<div class="rounded mb-5 border border-light py-4">
    <div class="d-inline text-light pl-4">
        New Confirmed: ${info.Global.NewConfirmed}
    </div>
</div>

<div class="rounded mb-5 border border-light py-4">
    <div class="= d-inline text-light pl-4">
        Total Confirmed: ${info.Global.TotalConfirmed}
    </div>
</div>
<div class="rounded mb-5 border border-light py-4">
    <div class="= d-inline text-light pl-4">New Deaths: ${info.Global.NewDeaths}</div>
</div>
<div class="rounded mb-5 border border-light py-4">
    <div class="= d-inline text-light pl-4">Total Deaths: ${info.Global.TotalDeaths}</div>
</div>
<div class="rounded mb-5 border border-light py-4">
    <div class="= d-inline text-light pl-4">New Recovered: ${info.Global.NewRecovered}</div>
</div>

<div class="rounded border border-light py-4">
    <div class="= d-inline text-light pl-4">
        Total Recovered: ${info.Global.TotalRecovered}
    </div>
</div>`;
}

fetch("https://api.covid19api.com/summary")
    .then((res) => res.json())
    .then((data) => printResults(data))
    .catch((error) => {
        throw error;
    });