// Скрипт для плавной прокрутки
$(".slow-scroll").on("click", function (event) {
    event.preventDefault();
    const blockID = $(this).attr("href");
    $(blockID)[0].scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

// Скрипт для стрелки вверх
$(document).ready(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('.up-arrow').fadeIn();
        } else {
            $('.up-arrow').fadeOut();
        }
    });
    $('.up-arrow').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});

// Скрипт для айтемов портфолио
$(function () {
    // Подія при наведенні мишки на елемент
    $(".trigger-item").hover(
        function () {
            // Коли миша наведена, показати інший елемент з анімацією
            $(this).find(".show-item").css("display", "flex").hide().fadeIn(300); // Анімація появи
        },
        function () {
            // Коли миша забрана, сховати інший елемент
            $(this).find(".show-item").fadeOut(300); // Анімація зникнення
        }
    );
});
