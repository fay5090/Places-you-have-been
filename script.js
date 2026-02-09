// Constructor
function Place(location, landmark, timeOfYear, notes, imageUrl) {
  this.location = location;
  this.landmark = landmark;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
  this.imageUrl = imageUrl;
}

Place.prototype.getSummary = function () {
  return `${this.location} – ${this.landmark}`;
};

// DOM Elements
const placesList = document.getElementById("places");
const placeDetails = document.getElementById("place-details");
const form = document.getElementById("place-form");

// Global array for all places
const myPlaces = [];

// 
// ------------------------
// Default places
// ------------------------
const defaultPlaces = [
  new Place(
    "Nyali",
    "Beach",
    "July",
    "Went for summer holiday to Nyali with family.",
    "https://shorturl.at/qjTed"
  ),

  new Place(
    "Nyeri",
    "Town",
    "August",
    "Splendid views, amazing food!",
    "https://shorturl.at/yL9L2"
  ),

  new Place(
    "Nakuru",
    "National Animal Park",
    "April",
    "Safari trip, saw lions and elephants!",
    "https://shorturl.at/3Dn0m"
  )
];




// ------------------------
// Display function
// ------------------------
function displayPlace(place) {
  const li = document.createElement("li");
  li.textContent = place.getSummary();
  li.classList.add("place-item");

  li.addEventListener("click", function () {
    placeDetails.innerHTML = `
      <h3>${place.location} 📍</h3>
      <p><strong>Landmark:</strong> ${place.landmark}</p>
      <p><strong>Best time:</strong> ${place.timeOfYear}</p>
      <p>${place.notes}</p>
      ${place.imageUrl ? `<img src="${place.imageUrl}" alt="${place.location}" style="width:100%; border-radius:12px; margin-top:10px;">` : ""}
    `;
  });

  placesList.appendChild(li);
}

// ------------------------
// Display default places on page load
// ------------------------
defaultPlaces.forEach(place => {
  myPlaces.push(place);
  displayPlace(place);
});

// ------------------------
// Form submit for adding new places
// ------------------------
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const location = document.getElementById("location").value;
  const landmark = document.getElementById("landmarks").value;
  const timeOfYear = document.getElementById("timeOfYear").value;
  const notes = document.getElementById("notes").value;
  const imageUrl = document.getElementById("imageUrl").value;

  const newPlace = new Place(location, landmark, timeOfYear, notes, imageUrl);
  myPlaces.push(newPlace);
  displayPlace(newPlace);

  form.reset();
});
