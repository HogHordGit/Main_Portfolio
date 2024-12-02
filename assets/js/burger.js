$(".burger-holder__menu").on("click", function () {
    $(this).toggleClass("active");
    $(".header-nav__buttons").slideToggle(300);
});
