window.addEventListener("scroll", function() {
    let revealElements = this.document.querySelectorAll(".reveal");
  
    for (let i = 0; i < revealElements.length; i++) {
      let windowHeight = window.innerHeight;
      let revealElementTop = revealElements[i].getBoundingClientRect().top;
      let revealElementBottom = revealElements[i].getBoundingClientRect().bottom;
  
      if (revealElementTop < windowHeight && revealElementBottom >= 0) {
        revealElements[i].classList.add("reveal_active");
      } else {
        revealElements[i].classList.remove("reveal_active");
      }
    }
  });