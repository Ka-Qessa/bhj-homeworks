const tabs = document.querySelectorAll(".tab");
const tabContens = document.querySelectorAll(".tab__content");

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        tabs.forEach((tab) => tab.classList.remove("tab_active"));
        tabContens.forEach((tabContent) => tabContent.classList.remove("tab__content_active"));

        tab.classList.add("tab_active");
        tabContens[index].classList.add("tab__content_active");
    });
});