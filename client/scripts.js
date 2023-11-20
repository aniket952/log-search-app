function performSearch() {
  const searchInput = document.getElementById("searchInput").value;

  // Get all checkboxes in the filters-container
  const checkboxes = document.querySelectorAll(
    '.filters-container input[type="checkbox"]'
  );

  // Filter the selected checkboxes
  const selectedCheckboxes = Array.from(checkboxes).filter(
    (checkbox) => checkbox.checked
  );

  // Extract the values of the selected checkboxes
  const selectedOptions = selectedCheckboxes.map((checkbox) => checkbox.value);

  // Log the values to the console (you can modify this part based on your use case)
  console.log("Search Input Value:", searchInput);
  console.log("Selected Filters:", selectedOptions);

  // Construct the filterOption parameter by joining selected options with a comma
  const filterOption = selectedOptions.join(",");

  const apiUrl = `http://localhost:3000/api/query?searchInput=${searchInput}&filterOption=${filterOption}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log("Search Results:", data);

      // Convert the data to a formatted string (you can customize the formatting)
      const formattedData = JSON.stringify(data, null, 2);

      // Set the formatted string as the value of the textarea
      document.getElementById("searchResults").value = formattedData;
    })
    .catch((error) => {
      console.error("Error calling the route:", error);
    });
}
