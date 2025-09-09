// Get references to the timer display and buttons from the HTML
const timerEl = document.getElementById("timer");
const startButtonEl = document.getElementById("start");
const stopButtonEl = document.getElementById("stop");
const resetButtonEl = document.getElementById("reset");

// Variables to track time
let startTime = 0;      // When the timer started
let elapsedTime = 0;    // How much time has passed (in ms)
let timerInterval;      // Stores the setInterval reference (to stop later)

// Function to start the timer
function startTimer() {
  // Set the start time (if resumed, subtract elapsedTime so it continues)
  startTime = Date.now() - elapsedTime;

  // Update the timer every 10 milliseconds
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;          // Update elapsed time
    timerEl.textContent = formatTime(elapsedTime); // Show formatted time
  }, 10);

  // Disable start button (to avoid multiple intervals running)
  startButtonEl.disabled = true;
  // Enable stop button
  stopButtonEl.disabled = false;
}

// Function to format milliseconds into hh:mm:ss.ms
function formatTime(elapsedTime) {
  const milliseconds = Math.floor((elapsedTime % 1000) / 10); // Two-digit ms
  const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000); // 0–59
  const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60)); // 0–59
  const hours = Math.floor(elapsedTime / (1000 * 60 * 60)); // Total hours

  // Return string in format hh:mm:ss.ms
  return (
    (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
    ":" +
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
    ":" +
    (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") +
    "." +
    (milliseconds > 9 ? milliseconds : "0" + milliseconds)
  );
}

// Function to stop the timer (pause)
function stopTimer() {
  clearInterval(timerInterval);   // Stop the setInterval
  startButtonEl.disabled = false; // Allow start again
  stopButtonEl.disabled = true;   // Disable stop button
}

// Function to reset the timer
function resetTimer() {
  clearInterval(timerInterval);   // Stop the timer completely
  elapsedTime = 0;                // Reset elapsed time
  timerEl.textContent = "00:00:00"; // Reset display

  startButtonEl.disabled = false; // Enable start
  stopButtonEl.disabled = true;   // Disable stop
}

// Add event listeners to buttons
startButtonEl.addEventListener("click", startTimer);
stopButtonEl.addEventListener("click", stopTimer);
resetButtonEl.addEventListener("click", resetTimer);
