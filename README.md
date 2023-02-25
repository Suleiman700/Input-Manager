## Input Manager - Documentation

`InputManager` is a JavaScript plugin that offers developers a set of methods to handle input elements in HTML documents. The class provides a simple and consistent way to manage input elements, regardless of their type, and offers features such as enabling/disabling inputs, clearing values, getting and setting input values, and highlighting inputs with an error.

Developers can use this plugin to improve the experience of their web applications by streamlining input handling and reducing the amount of boilerplate code they need to write. By leveraging the `InputManager`, developers can also ensure that input handling is consistent across their web applications and make it easier to maintain codebases. Overall, the `InputManager` can be a valuable tool for developers who want to create more efficient web applications.

### Usage

```html
<html>
    <head></head>
    <body>
        <input type="text" class="form-control" id="input-demo" value="Lorem ipsum dolor sit amet.">
    
        <div style="margin-top: 30px;">
            <div class="row text-center" style="margin-top: 10px;">
                <button class="btn btn-primary" id="button-enable">Enable Input</button>
                <button class="btn btn-primary" id="button-disable">Disable Input</button>
            </div>
            <div class="row text-center" style="margin-top: 10px;">
                <button class="btn btn-primary" id="button-clear-value">Clear Value</button>
                <button class="btn btn-primary" id="button-set-value">Set Value</button>
                <button class="btn btn-primary" id="button-get-value">Get Value</button>
            </div>
            <div class="row text-center" style="margin-top: 10px;">
                <button class="btn btn-primary" id="button-mark-error">Mark Error</button>
                <button class="btn btn-primary" id="button-unmark-error">Unmark Error</button>
            </div>
        </div>
    </body>
</html>
```

```javascript
// Import the InputManager class
import InputManager from "/input-manager/InputManager.js";

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
```