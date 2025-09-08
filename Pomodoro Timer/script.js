//Get references to the html elemnets by their IDs
const startE1 = document.getElementById("start");  //Start button
const stopE1 = document.getElementById("stop");    //Stop button
const resetE1 = document.getElementById("reset");  //Reset button
const timerE1 = document.getElementById("timer");  //Timer display element

//Variables to keep track of the timer
let interval; // will store the setInterval reference so we can stop it later
let timeLeft = 1500;  //Total time in seconds (1500 = 25 minutes)

//Function to update the timer display
function updateTimer(){
    let minutes = Math.floor(timeLeft / 60);  //convert total seconds into minutes
    let seconds = timeLeft % 60; //Get remaining seconds

    //Format minutes and seconds as two digits (e.g., 05:07)
    let formattedTime = `${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`;
    timerE1.innerHTML = formattedTime; //update the timer display in the html
}

//Function to start the countdowm
function startTimer(){
    //use setinterval to decrease the timer every second
    interval = setInterval(() => {
        timeLeft--;            //Decrease time by 1 second
        updateTimer();         //update the display

        //check if time is up
        if(timeLeft === 0){
            clearInterval(interval);     //stop the timer
            alert("Time's up!")          //show alert
            timeLeft = 1500;             //Reset time to 25 minutes
            updateTimer();               //update display after reset
        }
    }, 1000); //Run the function every 1000 miliseconds (1second)
}

//Function to stop/pause the countdown
function stopTimer(){
    clearInterval(interval);  //Stops the setInterval. pausing the timer
}

//Function to reset the countdown
function resetimer(){
    clearInterval(interval);  //stop the timer if running
    timeLeft = 1500;          //reset time to 25 minutes
    updateTimer();            //update display to show reset time
}

//Event listeners to handle button clicks
startE1.addEventListener("click", startTimer);    //start timer on "start" click
stopE1.addEventListener("click", stopTimer);       //stop timer on "Stop" click
resetE1.addEventListener("click", resetimer);      //reset timer on "Reset" click