fetch("api/research.json")
  .then((reply) => {
    if (!reply.ok) throw new Error("Network response was not ok");
    return reply.json();
  })
  .then((data) => {
    console.log("Fetched data:", data); // Log data to the console
    populateDropdown(data);
  })
  .catch((error) => {
    console.error("Failed to fetch data:", error);
    document.querySelector("main").innerHTML =
      "<p>Failed to load data. Please try again later.</p>";
  });

// Populate the dropdown for when the user is selecting country
function populateDropdown(data) {
  const dropdown = document.getElementById("country-select");
  dropdown.innerHTML = '<option value="">Select a country</option>';

  // Add an option for each country
  Object.keys(data).forEach((countryKey) => {
    const option = document.createElement("option");
    option.value = countryKey;
    option.textContent = data[countryKey].name;
    dropdown.appendChild(option);
  });

  // Handle dropdown changes
  dropdown.addEventListener("change", (event) => {
    const selectedCountry = event.target.value;

    if (selectedCountry) {
      const country = data[selectedCountry];
      displayCountryDetails(country);
    } else {
      document.querySelector("main").innerHTML =
        "<p>Select a country from the dropdown to view details.</p>";
    }
  });
}

// Display the country details
function displayCountryDetails(country) {
  const countryDetails = document.querySelector("main");

  // Check if the country has images before attempting to display them
  const flagImage =
    country.images && country.images.flag
      ? `<img src="${country.images.flag}" alt="Flag of ${country.name}" style="width:200px;height:auto;">`
      : "";
  const cityImages =
    country.images && country.images.city
      ? country.images.city
          .map(
            (cityUrl) =>
              `<img src="${cityUrl}" alt="City in ${country.name}" style="width:200px;height:auto;margin-right:10px;">`
          )
          .join("")
      : "";
  const peopleImages =
    country.images && country.images.people
      ? country.images.people
          .map(
            (peopleUrl) =>
              `<img src="${peopleUrl}" alt="People from ${country.name}" style="width:200px;height:auto;margin-right:10px;">`
          )
          .join("")
      : "";
  const leaderImages =
    country.images && country.images.leader
      ? country.images.leader
          .map(
            (leaderUrl) =>
              `<img src="${leaderUrl}" alt="Leader of ${country.name}" style="width:200px;height:auto;margin-right:10px;">`
          )
          .join("")
      : "";

  countryDetails.innerHTML = `
    <h1>${country.name}</h1>
    <p><strong>Population:</strong> ${country.population}</p>
    <p><strong>Capital:</strong> ${country.capital}</p>
    <p><strong>National Animal:</strong> ${country.nationalAnimal}</p>
    <p><strong>Languages:</strong> ${(country.languages || []).join(", ")}</p>
    <p><strong>National Anthem:</strong> <a href="${
      country.nationalAnthem
    }" target="_blank">Listen</a></p>

    <h2>Images</h2>
    <div>
      <h3>Flag</h3>
      ${flagImage}
    </div>
    <div>
      <h3>Cities</h3>
      ${cityImages}
    </div>
    <div>
      <h3>People</h3>
      ${peopleImages}
    </div>
    <div>
      <h3>Leader</h3>
      ${leaderImages}
    </div>
  `;
}
