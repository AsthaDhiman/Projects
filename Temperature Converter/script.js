const celsiusValue = document.getElementById("celsius");
const fahrenheitValue = document.getElementById("fahrenheit");
const kelvinValue = document.getElementById("kelvin");

//function to calculate and update temperatue and values
//'event' tells us which input was chnagedby the user
function computeTemp(event) {
  //convert the input vaue to a number
  const currentValue = +event.target.value;

  switch (event.target.name) {
    case "celsius":
      kelvinValue.value = (currentValue + 273.32).toFixed(2); //convert celsius -> kelvin
      fahrenheitValue.value = (currentValue * 1.8 + 32).toFixed(2); //convert celsius -> Fahrenheit
      break;
    case "fahrenheit":
      celsiusValue.value = ((currentValue - 32) / 1.8).toFixed(2); //convert fahrenheit -> celsius
      kelvinValue.value = ((currentValue - 32) / 1.8 + 273.32).toFixed(2); //convert fahrenheit -> kelvin
      break;
    case "kelvin":
      celsiusValue.value = (currentValue - 273.32).toFixed(2); //convert kelvin -> celsius
      fahrenheitValue.value = ((currentValue - 273.32) * 1.8 + 32).toFixed(2); //convert kelvin -> fahrenheit
      break;
    default:
      break;
  }
}
