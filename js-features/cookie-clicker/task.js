const cookieElement = document.getElementById("cookie");
const counterElement = document.getElementById("clicker__counter");
let counter = 0;
let cookieWidth = 200;
let cookieHeight = 200;


function changeSizeAndCounter() {
  counter++;
  counterElement.textContent = counter;

  if (cookieWidth === 200) {
    cookieWidth = 150;
    cookieHeight = 150;
  } else {
    cookieWidth = 200;
    cookieHeight = 200;
  }

  cookieElement.width = cookieWidth;
  cookieElement.height = cookieHeight;
}
cookieElement.addEventListener('click', changeSizeAndCounter);