# My Journey to Becoming a Web Developer Project 4 -Calculator
The body of the HTML document contains the structure of the calculator. It has a <div> element with a class of "container", which sets the width, height, background color, and display properties for the calculator. This container has two nested <div> elements: one for the display (with a class of "display") and one for the buttons (with a class of "keys").

The display <div> element contains an input field (<input type="text" id="display" readonly>) that will display the result of the calculation. The "readonly" attribute specifies that the input field cannot be edited directly by the user.

The keys <div> element contains a number of <button> elements, each of which represents a calculator key. The values of these buttons are set to the numbers and symbols they represent (e.g. "7", "+", etc.). The class of each button is set to either "number", "operators", "signs", or "equal" to specify the style of the button.

The CSS stylesheet sets the styles for the various elements in the HTML document. It sets the width, height, background color, border radius, and box shadow for the container, display, and keys elements. It also sets the appearance of the input field and buttons, including their hover and active states.

Finally, the JavaScript adds event listeners to the buttons to listen for clicks and performs the necessary calculations when the buttons are clicked.
