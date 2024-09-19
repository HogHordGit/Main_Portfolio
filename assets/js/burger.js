document.querySelector(".burger-holder__menu").addEventListener("click", function () {
    this.classList.toggle("active");
    document.querySelector(".header-nav__buttons").classList.toggle("open");
})