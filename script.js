//consts
const h1 = document.querySelector("#h1");
const bday = [
  "F",
  "e",
  "l",
  "i",
  "z",
  " ",
  "A",
  "n",
  "i",
  "v",
  "e",
  "r",
  "s",
  "á",
  "r",
  "i",
  "o",
  "!",
];
const colors1 = ["red", "blue", "green", "yellow", "orange"];

const daysElement = document.querySelector("#days");
const hoursElement = document.querySelector("#hours");
const minutesElement = document.querySelector("#minutes");
const secondsElement = document.querySelector("#seconds");

//bday

const myBirthday = "24 jan 2023";

//bday function

function countdown() {
  const today = new Date();
  const happyBirthday = new Date(myBirthday);

  const birthdaySub = Math.floor((happyBirthday - today) / 1000);

  const dayForm = Math.floor(birthdaySub / 3600 / 24);
  const hoursForm = Math.floor(birthdaySub / 3600) % 24;
  const minutesForm = Math.floor(birthdaySub / 60) % 60;
  const secondsForm = Math.floor(birthdaySub) % 60;
  console.log(dayForm, hoursForm, minutesForm, secondsForm);

  daysElement.innerHTML = dayForm;
  hoursElement.innerHTML = hoursForm;
  minutesElement.innerHTML = minutesForm;
  secondsElement.innerHTML = secondsForm;
}
countdown();
setInterval(countdown, 1000);

// Functions

function changeColors(letters) {
  letters.forEach((letter) => {
    const span = document.createElement("span");
    span.classList.add(random(colors1));
    span.innerHTML = letter;
    h1.appendChild(span);
  });
}

changeColors(bday);

function random(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}


