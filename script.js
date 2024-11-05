// const API_KEY = 'LCc8yC3V8qH2zpKDNlqx2G9jEKIw2kwPOhuNCX2a';
// const apiUrl = 'https://api.nasa.gov/planetary/apod';

// async function getCurrentImageOfTheDay() {
//   const currentDate = new Date().toISOString().split("T")[0];
//   await getImageOfTheDay(currentDate);
// }

// // Fetch image data for a given date
// async function getImageOfTheDay(date) {
//   const requestUrl = `${apiUrl}?date=${date}&api_key=${API_KEY}`;
//   try {
//     const response = await fetch(requestUrl);
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();

//     if (data.media_type === "image") {
//       displayImage(data);
//       saveSearch(date);
//       addSearchToHistory();
//     } else if (data.media_type === "video") {
//       displayVideo(data);
//       saveSearch(date);
//       addSearchToHistory();
//     } else {
//       displayError("No image or video found for this date.");
//     }
//   } catch (error) {
//     console.error("Error fetching data from NASA API:", error);
//     displayError("Failed to fetch data from NASA API. Please try again later.");
//   }
// }


// // Display image data
// function displayImage(data) {
//   const container = document.getElementById("current-image-container");
//   const description = document.getElementById("description");
//   const img = document.getElementById("spacePic");

//   description.textContent = data.explanation;
//   img.src = data.url;
//   img.alt = data.title;
// }

// // Display video link for video media types
// function displayVideo(data) {
//   const container = document.getElementById("current-image-container");
//   const description = document.getElementById("description");

//   description.innerHTML = `${data.explanation} <br><a href="${data.url}" target="_blank">Watch Video</a>`;
//   const img = document.getElementById("spacePic");
//   img.src = '';  // Clear any previous image
// }

// // Display error message
// function displayError(message) {
//   const container = document.getElementById("current-image-container");
//   container.innerHTML = `<p style="color: red;">${message}</p>`;
// }

// // Save search to local storage
// function saveSearch(date) {
//   const searches = JSON.parse(localStorage.getItem("searches")) || [];
//   if (!searches.includes(date)) {
//     searches.push(date);
//     localStorage.setItem("searches", JSON.stringify(searches));
//   }
// }

// // Display search history
// function addSearchToHistory() {
//   const searchHistory = document.getElementById("search-history");
//   const searches = JSON.parse(localStorage.getItem("searches")) || [];

//   searchHistory.innerHTML = '';
//   searches.forEach(date => {
//     const listItem = document.createElement("li");
//     listItem.textContent = date;
//     listItem.addEventListener("click", () => getImageOfTheDay(date));
//     searchHistory.appendChild(listItem);
//   });
// }

// // Event listener for form submission
// document.getElementById("search-form").addEventListener("submit", event => {
//   event.preventDefault();
//   const selectedDate = document.getElementById("search-input").value;
//   if (selectedDate) {
//     getImageOfTheDay(selectedDate);
//   }
// });

// // Initialize the page
// window.addEventListener("DOMContentLoaded", () => {
//   getCurrentImageOfTheDay();
//   addSearchToHistory();
// });


const API_KEY = 'LCc8yC3V8qH2zpKDNlqx2G9jEKIw2kwPOhuNCX2a';
const apiUrl = 'https://api.nasa.gov/planetary/apod';

async function getCurrentImageOfTheDay() {
  const currentDate = new Date().toISOString().split("T")[0];
  const requestUrl = `${apiUrl}?date=${currentDate}&api_key=${API_KEY}`;

  try {
    const response = await fetch(requestUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    displayImage(data);
  } catch (error) {
    console.error("Error fetching data from NASA API:", error);
    displayError("Failed to fetch data from NASA API. Please check your API key and network connection.");
  }
}

function displayImage(data) {
  const imageContainer = document.getElementById("current-image-container");
  imageContainer.innerHTML = `
    <h3>${data.title}</h3>
    <img src="${data.url}" alt="${data.title}">
    <p>${data.explanation}</p>
  `;
}

function displayError(message) {
  const imageContainer = document.getElementById("current-image-container");
  imageContainer.innerHTML = `<p style="color: red;">${message}</p>`;
}

// Call function when page loads
document.addEventListener("DOMContentLoaded", getCurrentImageOfTheDay);
