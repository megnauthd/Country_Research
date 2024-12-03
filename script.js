fetch("api/research.json")
  .then((reply) => reply.json())
  .then((data) => {
    populateDropdown(data)
  });

  // Populate the dropdown for when the user is selecting country
  function populateDropdown(data) {
    const dropdown = document.getElementById("country-select");
     dropdown.innerHTML = '<option value="">Select a country</option>';

     // This arrow function adds an option for each country 
     Object.keys(data).forEach((countryKey) => {
        const option = document.createElement("option");
        option.value = countryKey;
        option.textContent = data[countryKey].name;
        dropdown.appendChild(option);
     });

     // This block of code handles change when the dropdown is changed
     dropdown.addEventListener("change", (event) => {
        const selectedCountry = event.target.value;

        if (selectedCountry) {
            const country = data[selectedCountry];
            displaycountryDetails(country);
        } else {
            document.querySelector("main").innerHTML = "<p>Select a country from the dropdown to view details.</p>";
        }
     });
  }

  // The next step, creating a function to displaying the country details
  function displaycountryDetails(country) {
    const countryDetails = document.querySelector("main");

    countryDetails = `

    `
  }