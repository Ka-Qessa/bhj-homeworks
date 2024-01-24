document.addEventListener("DOMContentLoaded", function() {
    const fontSizes = document.querySelectorAll(".font-size");
  
    fontSizes.forEach(function(fontSize) {
      fontSize.addEventListener("click", function(event) {
        event.preventDefault();
  
        fontSizes.forEach(function(fontSize) {
          fontSize.classList.remove("font-size_active");
        });
  
        fontSize.classList.add("font-size_active");
  
        const newSize = fontSize.dataset.size;
        const book = document.getElementById("book");
  
        book.classList.remove("book_fs-small", "book_fs-big");
  
        if (newSize === "small") {
          book.classList.add("book_fs-small");
        } else if (newSize === "big") {
          book.classList.add("book_fs-big");
        }
      });
    });
  });