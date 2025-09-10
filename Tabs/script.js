// Select the parent element that contains all the tab buttons
const tabs = document.querySelector(".tabs");

// Select all buttons inside the tabs (these will act as the clickable tabs)
const btns = document.querySelectorAll(".button");

// Select all articles/sections that correspond to each tab
const articles = document.querySelectorAll(".content");

// Add a click event listener to the parent container (.tabs)
// This is event delegation → instead of adding listeners to each button separately
tabs.addEventListener("click", function (e) {
  
  // Get the data-id of the clicked button
  // (This ID matches the content section we want to display)
  const id = e.target.dataset.id;

  // Check if the clicked element actually has a data-id (to avoid errors)
  if (id) {
    // 🔹 1. Remove the "live" (active) class from all buttons
    btns.forEach(function (btn) {
      btn.classList.remove("live");
    });

    // Add "live" to the clicked button → highlight the active tab
    e.target.classList.add("live");

    // 🔹 2. Hide all content sections by removing "live" from them
    articles.forEach(function (article) {
      article.classList.remove("live");
    });

    // 🔹 3. Find the article whose id matches the clicked button's data-id
    const element = document.getElementById(id);

    // Show that article by adding "live" class
    element.classList.add("live");
  }
});
