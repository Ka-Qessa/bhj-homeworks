const countElement = document.getElementById("timer");
let count = 59;

function countDown() {
  count--;
  countElement.textContent = count;

  if (count === 0) {
    alert("Вы победили в конкурсе!");
    clearInterval(timerInterval);
  }

}

const timerInterval = setInterval(countDown, 1000);

countDown();