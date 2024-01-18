function getHole(index) {
    return document.getElementById("hole" + index);
  }
  
  let deadCounter = 0;
  let lostCounter = 0;
  
  for (let i = 1; i <= 9; i++) {
    getHole(i).onclick = function() {
        if (this.classList.contains("hole_has-mole")) {
          deadCounter++;
          document.getElementById("dead").textContent = deadCounter;
  
        if (deadCounter === 10) {
          alert("You win!");
          deadCounter = 0;
          lostCounter = 0;
        }
      } else {
        lostCounter++;
        document.getElementById("lost").textContent = lostCounter;
  
        if (lostCounter === 5) {
          alert("Game over!");
          deadCounter = 0;
          lostCounter = 0;
        }
      }
    };
  }