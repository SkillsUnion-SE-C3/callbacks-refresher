/* Define callbacks for processUserInput */
function logName(name) {
  console.log('Hello ' + name);
}

function alertAge(age) {
  alert('You are ' + age);
}

function displayMovie(name) {
  document.querySelector("#fav-movie").innerText = 'Favourite movie is:' + name;
}

function displayColor(color) {
  document.body.style.backgroundColor = color;
}
/*
  Define processUserInput function which prompts the user
  and invokes the callback with the input
*/

function processUserInput(text, callback) {
  let name = prompt(text);
  callback(name);
}

/* Get access to button elements */
const logButton = document.querySelector('#log-button')
const alertButton = document.querySelector('#alert-button')
const displayButton = document.querySelector('#display-button')
const colorButton = document.querySelector("#color-button")

/* 
  Define event listeners for buttons which invoke 
  processUserInput with appropriate callback
*/

logButton.addEventListener('click', () => {
  processUserInput("Please enter your name", logName)
})

alertButton.addEventListener('click', () => {
  processUserInput("Please enter your age", alertAge)
})

displayButton.addEventListener('click', () => {
  processUserInput("Please enter your favourite movie", displayMovie)
})

colorButton.addEventListener('click', () => {
  processUserInput("Please enter a color", displayColor)
})