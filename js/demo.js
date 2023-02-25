// Import the InputManager class
import InputManager from "./input-manager/InputManager.js";

// Create a new instance of InputManager
const inputDemo = new InputManager('section-demo', 'input-demo')

// Get references to the buttons
const buttonEnable = document.querySelector('#section-demo #button-enable')
const buttonDisable = document.querySelector('#section-demo #button-disable')
const buttonClearValue = document.querySelector('#section-demo #button-clear-value')
const buttonSetValue = document.querySelector('#section-demo #button-set-value')
const buttonGetValue = document.querySelector('#section-demo #button-get-value')
const buttonMarkError = document.querySelector('#section-demo #button-mark-error')
const buttonUnmarkError = document.querySelector('#section-demo #button-unmark-error')

// Add event listeners to the buttons to call InputManager methods
buttonEnable.addEventListener('click', () => {
    inputDemo.enabled(true)
})
buttonDisable.addEventListener('click', () => {
    inputDemo.enabled(false)
})
buttonClearValue.addEventListener('click', () => {
    inputDemo.valueClear()
})
buttonSetValue.addEventListener('click', () => {
    inputDemo.valueSet('New input value :)')
})
buttonGetValue.addEventListener('click', () => {
    alert(inputDemo.valueGet())
})
buttonMarkError.addEventListener('click', () => {
    inputDemo.markError(true)
})
buttonUnmarkError.addEventListener('click', () => {
    inputDemo.markError(false)
})

// This code sets up event listeners on the buttons that call methods on the InputManager instance.
// For example, clicking the "buttonEnable" button will call the "enabled" method on the "inputDemo" instance
// with an argument of "true", which will enable the input element with the ID "input-demo".
// Similarly, clicking the "buttonGetValue" button will call the "valueGet" method on the "inputDemo" instance
// and show an alert with the input value. This code demonstrates how the InputManager can be used to handle
// input elements in a more streamlined and efficient manner.