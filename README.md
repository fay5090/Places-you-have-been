# Places I Have Been To 🌍✈️

**Author:** Faheemah Mohamed

---

## Description

This is a fun and interactive web application to track all the places I have traveled to.  
Each place is stored as a **JavaScript object** with properties such as:

- Location / Name  
- Landmark  
- Time of Year  
- Notes / Description  
- Image URL  

Clicking on a place will reveal its full details along with an image, making it feel like a personal travel journal.  

The project demonstrates **object-oriented JavaScript** using **constructors**, **prototypes**, and **dynamic DOM manipulation**, with **test-driven development (TDD)** practices documented in this README.

---

## Features

- Add a new place with location, landmark, time, notes, and an image.  
- Each place is an object created with the Place constructor.  
- Shared method getSummary() via prototype.  
- Click a place to view detailed information and image.  
- Interactive and visually appealing UI with vibrant colors and hover effects.

---

## How to Use

1. Clone or download the repository.  
2. Open index.html in a browser.  
3. Fill the form with:  
   - **Location** (e.g., Paris)  
   - **Landmark** (e.g., Eiffel Tower)  
   - **Time of Year** (e.g., Spring)  
   - **Notes** (optional description)  
   - **Image URL** (optional, link to an image)  
4. Click **Add Place**.  
5. The place appears in your list. Click the place to see full details and image.

---

## Example Usage

- Add “Paris – Eiffel Tower – Spring – So romantic – [Image URL]”  
- Click the place name → displays full details + image.

---

## Pseudo-Tests (TDD)

```js
// Test 1: Create a Place object
const place = new Place("Paris", "Eiffel Tower", "Spring", "Romantic", "img.jpg");
Expected Output:
Place { location: "Paris", landmark: "Eiffel Tower", timeOfYear: "Spring", notes: "Romantic", imageUrl: "img.jpg" }

// Test 2: Prototype method
place.getSummary();
Expected Output:
"Paris – Eiffel Tower"
