//  Constructor 
function Place(location, landmark, timeOfYear, notes, imageUrl) {
  this.location = location;
  this.landmark = landmark;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
  this.imageUrl = imageUrl;
}

//  Prototype Method 
Place.prototype.getSummary = function () {
  return `${this.location} – ${this.landmark}`;
};

//  DOM Elements
const form = document.getElementById("place-form");
const placesList = document.getElementById("places");

//  Form Submit Event 
form.addEventListener("submit", function (event) {
  event.preventDefault(); // prevent page reload

  // Get values from inputs
  const location = document.getElementById("location").value;
  const landmark = document.getElementById("landmarks").value;
  const timeOfYear = document.getElementById("timeOfYear").value;
  const notes = document.getElementById("notes").value;
  const imageUrl = document.getElementById("imageUrl").value;

  // Create new Place object
  const newPlace = new Place(location, landmark, timeOfYear, notes, imageUrl);

  // Display the place
  displayPlace(newPlace);

  // Reset the form
  form.reset();
});

// Function to Display Place
function displayPlace(place) {
  const li = document.createElement("li");
  li.textContent = place.getSummary();

  // When you click the place, show details + image
  li.addEventListener("click", function () {
    li.innerHTML = `
      <h3>${place.location} 📍</h3>
      <p><strong>Landmark:</strong> ${place.landmark}</p>
      <p><strong>Best time:</strong> ${place.timeOfYear}</p>
      <p>${place.notes}</p>
      <img src="${place.imageUrl}" alt="${place.location}" style="width:100%; border-radius:12px; margin-top:10px;">
    `;
  });

  // Add to the list
  placesList.appendChild(li);
}
