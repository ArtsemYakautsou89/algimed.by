$(document).ready(function() {

    if ($(window).width() < 1240) {
        $('h1').append(`
        <div class="header-btn-src">
        <form class="form-src" action="https://algimed.com/katalog/search/" method="post" name="search">
            <input class="input-src" type="text" name="q" value="" placeholder="Поиск...">
            <button type="submit"><svg class="srch-svg" width="20" height="20"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 339.921 339.921">
            <path
                d="M335.165 292.071l-81.385-84.077c-5.836-6.032-13.13-8.447-16.29-5.363-3.171 3.062-10.47.653-16.306-5.379l-1.164-1.207c36.425-47.907 32.89-116.499-10.851-160.24-47.739-47.739-125.142-47.739-172.875 0-47.739 47.739-47.739 125.131 0 172.87 44.486 44.492 114.699 47.472 162.704 9.045l.511.533c5.825 6.032 7.995 13.402 4.814 16.469-3.166 3.068-1.012 10.443 4.83 16.464l81.341 84.11c5.836 6.016 15.452 6.195 21.49.354l22.828-22.088c6.015-5.827 6.178-15.437.353-21.491zM182.306 181.81c-32.852 32.857-86.312 32.857-119.159.011-32.852-32.852-32.847-86.318 0-119.164 32.847-32.852 86.307-32.847 119.148.005 32.857 32.847 32.857 86.302.011 119.148z" />
            </svg></button>
            </form>
        </div>`);
    }
    // Up btn
    $('body').append('<div class="upbtn"></div>');
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.upbtn').css({
                transform: 'scale(1)'
            });
        } else {
            $('.upbtn').css({
                transform: 'scale(0)'
            });
        }

        $('.upbtn').on('click', function() {
            $('html, body').animate({
                scrollTop: 0
            }, 500);
            return false;
        });
    });
    // header sticky
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky');
        }
    });
    // Acc
    $(document).on("click", ".naccs .menu div", function() {
        var numberIndex = $(this).index();
        if (!$(this).is("active")) {
            $(".naccs .menu div").removeClass("active");
            $(".naccs ul li").removeClass("active");

            $(this).addClass("active");
            $(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");

            var listItemHeight = $(".naccs ul")
                .find("li:eq(" + numberIndex + ")")
                .innerHeight();
            $(".naccs ul").height(listItemHeight + "px");
        }
    });
    // accordion
    (function($) {
        $('.accordion-list:eq(0) h3').addClass('active').next().slideDown();

        $('.accordion-list h3').click(function(j) {
            var dropDown = $(this).closest('.accordion-list').find('p');

            $(this).closest('.accordion-list').find('p').not(dropDown).slideUp();

            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
            } else {
                $(this).closest('.accordion-list').find('h3.active').removeClass('active');
                $(this).addClass('active');
            }

            dropDown.stop(false, true).slideToggle();

            j.preventDefault();
        });
    })(jQuery);

});



// slider
var slideIndex = 0;
showSlides(slideIndex);
autoSlider();

function plusSlide() {
    showSlides(slideIndex += 1);
}

function minusSlide() {
    showSlides(slideIndex -= 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function autoSlider() {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(autoSlider, 5000);
}