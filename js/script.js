window.onload = function () {
  var name = prompt("Please enter your name:");
  if (name) {
    document.querySelector(".name").textContent = name;
    document.querySelector('[name="name"]').value = name;
  } else {
    document.querySelector(".name").textContent = "Anonymous";
  }
}

document.querySelector("form").addEventListener('submit', function (event) {
  event.preventDefault();

  document.getElementById("display-current-time").textContent = new Date().toLocaleString();
  document.getElementById("display-name").textContent = document.querySelector('[name="name"]').value;
  document.getElementById("display-born-date").textContent = document.querySelector('[name="born-date"]').value;
  document.getElementById("display-gender").textContent = document.querySelector('[name="gender"]').value;
  document.getElementById("display-message").textContent = document.querySelector('[name="message"]').value;
}) 