// VARIABLES:

var tempInputField = document.getElementById("input-field");
// targeting the input field so that we could add the event listener to it
// grabbing the input field from the DOM & storing it in a variable

var conversionButton = document.getElementById("convert-button");
// Get a reference to the button element in the DOM; targets & assigns the button on the DOM to a variable

var output = document.getElementById("converted-temp-output");

// FUNCTIONS:

// Assign a function to be executed when the button is clicked
conversionButton.addEventListener("click", determineConversion);

// 6. Add an event handler to the input field that checks if the user pressed the enter key, and if that happens, perform the conversion.
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

function toCelsius(userTemp) {
  console.log("userTemp in C function", userTemp);
  var finalTemp = Math.ceil((userTemp-32) * (5/9));
  console.log("finalTemp", finalTemp);

  if(finalTemp <= 0){
  output.innerHTML = `<p style="color:blue">${finalTemp}<p>`;
  } else if (finalTemp >= 32){
  output.innerHTML = `<p style="color:red">${finalTemp}<p>`;
  } else {
  output.innerHTML = `<p style="color:green">${finalTemp}<p>`;
  // output.innerHTML = (finalTemp); -- would work but doesn't look as good
  }

}

// 7. If the temperature is greater than 90F/32C the color of the converted temperature should be red.
// 8. If the temperature is less than 32F/0C the color of the converted temperature should be blue.
// 9. For any other temperature, the color should be green.

// Fahrenheit to Celsius:   (°F − 32) x 5/9 = °C

function toFahrenheit (userTemp) {
  console.log("userTemp in F function", userTemp)
  var finalTemp = Math.ceil((userTemp*(9/5)) + 32);
  console.log("finalTemp", finalTemp);

  if(finalTemp <= 32){
  output.innerHTML = `<p style="color:blue">${finalTemp}<p>`;
  } else if (finalTemp >= 90){
  output.innerHTML = `<p style="color:red">${finalTemp}<p>`;
  } else {
  output.innerHTML = `<p style="color:green">${finalTemp}<p>`;
  }

}

// Celsius to Fahrenheit:   (°C × 9/5) + 32 = °F

// Math.ceil gives a whole number rather than a huge long decimal





// This function fires once the keypress event is detected & determines which conversion should happen based on which radio button is selected.
function determineConversion(clickEvent) {
  var userTemp = document.getElementById("input-field").value;
// Placing inside function b/c of scope. Console.log tests show that we definitely need this here.
// .value returns what is in the input field; gets whatever value the user entered into the input field
  if (document.getElementById("Celsius-button").checked) {
  toCelsius(userTemp);
  } else if (document.getElementById("Fahrenheit-button").checked) {
  toFahrenheit(userTemp);
  }
}

// no need to have else, alert to select a button b/c we set one of the buttons to be selected by default

// 5. clear-button: when clicked, clears any text in the input field.
var clearButton = document.getElementById("clear-button").addEventListener("click", function(event) {
  "input-field".value = "";
  "converted-temp-output".innerHTML = "";
  document.getElementById("Celsius-button").checked = false;
  document.getElementById("Fahrenheit-button").checked = false;
});

// you can chain everything together, or you can break event listeners up and call a function. Either way works!
//inside the clearButton function that fires after the click event, the input & output values are set to an empty string
//the radio buttons have an attribute on them called "checked" and when it's checked, it's true, and when it's not, it's false. Both are set to false so they'll be reset when the button is clicked.
