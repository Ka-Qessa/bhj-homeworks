const rotatorCases = document.querySelectorAll(".rotator__case");

rotatorCases[0].classList.add("rotator__case_active");

function changeActiveCase() {
  const activeCase = document.querySelector(".rotator__case_active");
  activeCase.classList.remove("rotator__case_active");

  const currentIndex = Array.from(rotatorCases).indexOf(activeCase);
  const nextIndex = (currentIndex + 1) % rotatorCases.length;

  rotatorCases[nextIndex].classList.add("rotator__case_active");

}

setInterval(changeActiveCase, 1000);