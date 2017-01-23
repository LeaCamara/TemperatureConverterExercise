function toCelsius (userTemp) {
  finalTemp = (userTemp-32) * (5/9);
}
// Fahrenheit to Celsius:   (°F − 32) x 5/9 = °C

function toFahrenheit (userTemp) {
  finalTemp = (userTemp * (9/5)) + 32;
}
// Celsius to Fahrenheit:   (°C × 9/5) + 32 = °F

var userTemperature = document.getElementById("input-field").value;
  // .value returns what is in the input field; gets whatever value the user entered into the input field

// Get a reference to the button element in the DOM
var conversionButton = document.getElementById("convert-button");
// targets & assigns the button on the DOM to a variable

// Assign a function to be executed when the button is clicked
conversionButton.addEventListener("click", determineConversion);
//12 add an event listener to the button that will perform the conversion.
// When the button is clicked, it will run the determineConversion function below, which has an if statement to account for which button is clicked

// 6. Add an event handler to the input field that checks if the user pressed the enter key, and if that happens, perform the conversion.
var tempInputField = document.getElementById("input-field");
// targeting the input field so that we could add the event listener to it
// grabbing the input field from the DOM & storing it in a variable

tempInputField.addEventListener("keypress", pressed);
// adding an event listener to the input field, and assigning it the "pressed" function to fire once the event happens
function pressed(e) {
  console.log("event", e);
    if (e.keycode === 13) {
      determineConversion(e);
    }
}
// checking which key was pressed, and if it was 13, or the enter key, then execute the determineConverter function, and pass along the event

// *****  ANOTHER WAY TO DO THE ENTER KEY EVENT: **********************

// document.getElementById("input-field").onkeypress = function(e) {
//   if(e.key === "Enter") {
//     determineConversion(e);
//   }
// }
// onkeypress is a method of the element you're getting
// P.S. This alerts when you press Enter ANYWHERE on the page b/c "document":
// document.onkeypress = function(e) { if(e.key === "Enter"){ alert('you pressed Enter!')}}


// This function fires once the keypress event is detected & determines which conversion should happen based on which radio button is selected.
function determineConversion(clickEvent) {
  if(document.getElementById("Celsius-button").checked) {
  toCelsius();
  } if(document.getElementById("Fahrenheit-button").checked) {
  toFahrenheit();
  } else {
  alert("Please select which conversion you would like!");
  }
}
// determine converter function - check if the C readio button was checked, and if so run the toCelsius funtion, if not then the F must have been clicked, so run the toFahrenheit funtion. To be more specific, we could check for the f to be checked, and if it's not alert the user to select a converstion to be done



// 5. clear-button: when clicked, clears any text in the input field.
var clearButton = document.getElementById("clear-button");
// variable to hold the clear button
clearButton.addEventListener("click", clearsInputText);
// adding an event listener to clear-button to run the clearsInputText function when clicked

function clearsInputText(clickEvent) {
  if(document.getElementById("clear-button").checked) {
  clearsInputText();
  }
}


7. If the temperature is greater than 90F/32C the color of the converted temperature should be red.
8. If the temperature is less than 32F/0C the color of the converted temperature should be blue.
9. For any other temperature, the color should be green.

if (converted-temp-output > 90F/32C) {
  color: red;
}
if (converted-temp-output < 32F/0C) {
  color: blue;
} else {
  color: green;
}
