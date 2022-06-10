// Question 2
let array = [];

for (let i = 1; i < 100; i++) {
  let value = i;
  if (i % 3 === 0) {
    value = "Open";
  }
  if (i % 7 === 0) {
    value = "Source";
  }
  if (i % 3 === 0 && i % 7 === 0) {
    value = "OpenSource";
  }
  array.push(value);
}
console.log(array);

// Question 3
const container = document.querySelector("#container");

const firstChild = container.firstChild,
  secondChild = container.secondChild,
  lastChild = container.lastChild;

// Question 4
function Q4() {
  var arinzeArray = ["2.3", "12", "O", "C", "q", "1249", "A", "0\n"];

  arinze = arinzeArray
    .map(function (elt) {
      // assure the value can be converted into a number
      return /^\d+$/.test(elt) ? parseInt(elt) : 0;
    })
    .reduce(function (a, b) {
      // sum all resulting numbers
      return a + b;
    });

  console.log(arinze);
  document.getElementById("q4").innerHTML = arinze;
}

// Question 5
function fetchApi() {
  const jsonApi = fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
    headers: { "Content-type": "application/json;charset=UTF-8" },
  })
    .then((response) => response.json())
    .then((json) => {
      localStorage.setItem("id", json[4].id);
      console.log("id = ", json[4].id);
    })
    .catch((err) => console.log(err));

  const getId = localStorage.getItem("id");
  let q5 = `id = ${getId}`;
  document.getElementById("fetchapi").innerHTML = q5;
}

// Question 6
function number6() {
  const paragraph = "Softeq has #good rules and regulations";
  const regex = /.*Softeq|#good/gi;
  const check = paragraph.match(regex);

  console.log(check);
  document.getElementById("q6").innerHTML = check;
}

// Question 7
function alphabets() {
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x));
  alert(alphabet);
  console.log(alphabet);
  document.getElementById("alphabet").innerHTML = alphabet;
}

// Question 8
var number = Math.ceil(Math.random() * 1000000);

function verify() {
  var guess = Number(this.elements.guess.value),
    output = document.getElementById("output");

  if (isNaN(guess)) {
    output.innerHTML = "Enter a number.";
  } else if (number === guess) {
    output.innerHTML = "You guessed right!";
  } else if (guess > 1000000) {
    output.innerHTML = "Your guess is out of the 1 to 1000000 range.";
  } else if (guess > number) {
    output.innerHTML = "Your guess is too high.";
  } else if (guess < number) {
    output.innerHTML = "Your guess is too low.";
  }
  return false;
}

document.getElementById("guessNumber").onsubmit = verify;
