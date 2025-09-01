//Get the elements with their ids from HTML
const btnE1 = document.getElementById("btn");
const birthdayE1 = document.getElementById("birthday");
const resultE1 = document.getElementById("result");

//function that calculates the age when button is clicked
function calculateAge(){
    //Get the value entered in the bithday input field
    const birthdayValue = birthdayE1.value;

    //If no date is entered, show an alert message
    if(birthdayValue === ""){
        alert("Please enter your birthday");
    }else{
        //call getAge() function to claculate age
        const age = getAge(birthdayValue);

        //Display the result in the "result" element
        //If age >1 use "years", otherwise use "year"
        resultE1.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
    }
}

//Function that calculate age based on birthday
function getAge(birthdayValue){
    //get the current date
    const currentDate = new Date();

    //convert the entered birthday string into a date object
    const birthdayDate = new Date(birthdayValue);

    //calculte the age in years by subtracting birth year form current year
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();

    //calculte the difference in months
    const month = currentDate.getMonth()- birthdayDate.getMonth();

    //if the current month/Day is before the birthday month/day, reduce age by 1
    if(month<0 || (month === 0 && currentDate.getDate()<birthdayDate.getDate())){
            age--;
        }
    return age;
}

//when the button is clicked, it calls calculateAge() function
btnE1.addEventListener("click", calculateAge);
