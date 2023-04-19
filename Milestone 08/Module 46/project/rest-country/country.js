let loadCountry = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountriesData(data));
};

const displayCountriesData = (countries) => {
  const displayAllDataInFrontend = document.querySelector(".display-data");

  console.log(countries);

  let countriesHtmlData = countries.map((countryData) =>
    getCountryHtml(countryData)
  );

  displayAllDataInFrontend.innerHTML = countriesHtmlData.join(" ");

  console.log(countriesHtmlData);
};

let getCountryHtml = ({ name, flags, capital }) => {
  return `
        <div class="country">
            <h1>${name.common}</h1>
            <p>${capital}</p>
            <img src="${flags.png}"/>
        </div>
    `;
};

// call the function
loadCountry();
