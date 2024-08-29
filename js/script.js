window.onload = function () {
  inputNamePrompt();
  changeBackground();
};

// Inout name prompt
function inputNamePrompt() {
  var name = prompt("Please enter your name:");
  if (name) {
    document.querySelector(".name").textContent = name;
    document.querySelector('[name="name"]').value = name;
  } else {
    document.querySelector(".name").textContent = "Anonymous";
  }
}

// Form validation
document.querySelector("form").addEventListener('submit', function (event) {
  event.preventDefault();

  let getName = document.querySelector('[name="name"]').value;
  let getBornDate = document.querySelector('[name="born-date"]').value;
  let getGender = document.querySelector('[name="gender"]').value;
  let getMessage = document.querySelector('[name="message"]').value;

  if (getName == "" || getBornDate == "" || getGender == "" || getMessage == "") {
    alert("Please fill all your identities!");
  } else {
    document.getElementById("display-current-time").textContent = new Date().toLocaleString();
    document.getElementById("display-name").textContent = getName;
    document.getElementById("display-born-date").textContent = getBornDate;
    document.getElementById("display-gender").textContent = getGender;
    document.getElementById("display-message").textContent = getMessage;
  }

})

// Banner images slider
var images = [
  'url("https://picsum.photos/id/101/1366/576?grayscale")',
  'url("https://picsum.photos/id/58/1366/576?grayscale")',
  'url("https://picsum.photos/id/144/1366/576?grayscale")'
];

var currentIndex = 0;

function changeBackground() {
  var slider = document.getElementById("banner");
  slider.style.backgroundImage = images[currentIndex];
  currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeBackground, 3000);