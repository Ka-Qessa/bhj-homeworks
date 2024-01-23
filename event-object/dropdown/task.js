let buttons = document.querySelectorAll(".dropdown");

buttons.forEach(function(button) {
  let valueElement = button.querySelector(".dropdown__value");
  let listElement = button.querySelector(".dropdown__list");

  valueElement.addEventListener("click", function() {
    listElement.classList.toggle("dropdown__list_active");
  });

  let itemElements = button.querySelectorAll(".dropdown__item");
  
  itemElements.forEach(function(item) {
    item.addEventListener("click", function(event) {
      event.preventDefault();
      listElement.classList.remove("dropdown__list_active");

      let value = item.querySelector(".dropdown__link").textContent;

      valueElement.textContent = value;
    });
  });
});

