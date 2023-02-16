const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

let xhr = new XMLHttpRequest();
xhr.open("POST", "https://localhost:3000/Users");
xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    console.log(xhr.status);
    console.log(xhr.responseText);
  }};

let data = `{
  "Id": 78912,
  "Customer": "Jason Sweet",
  "Quantity": 1,
  "Price": 18.00
}`;

xhr.send(data);
