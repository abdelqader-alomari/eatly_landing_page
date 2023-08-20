$(document).ready(function () {
    const owl = $(".owl-carousel.programs");
    owl.owlCarousel({
        items: 3,
        margin: 20,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
    });
    $(".next").click(function () {
        owl.trigger('next.owl.carousel');
    })
    $(".prev").click(function () {
        owl.trigger('prev.owl.carousel');
    })
    const owl2 = $(".owl-carousel.recipes");
    owl2.owlCarousel({
        items: 2,
        margin: 20,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
    });
    $(".next2").click(function () {
        owl2.trigger('next.owl.carousel');
    })
    $(".prev2").click(function () {
        owl2.trigger('prev.owl.carousel');
    })
    const owl3 = $(".owl-carousel.testimonials");
    owl3.owlCarousel({
        items: 1,
        margin: 20,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause:true,
    });
    $(".next3").click(function () {
        owl3.trigger('next.owl.carousel');
    })
    $(".prev3").click(function () {
        owl3.trigger('prev.owl.carousel');
    })
});

const slideContainer = document.getElementById("slider"); // Assuming there's a container for your slides
let activeSlide = null;

slideContainer.addEventListener("mouseover", (event) => {
    const newActiveSlide = event.target.closest(".item");
    if (newActiveSlide && newActiveSlide !== activeSlide) {
        if (activeSlide) {
            activeSlide.classList.remove("active-slide");
        }
        newActiveSlide.classList.add("active-slide");
        activeSlide = newActiveSlide;
    }
});

slideContainer.addEventListener("mouseout", () => {
    if (activeSlide) {
        activeSlide.classList.remove("active-slide");
        activeSlide = null;
    }
});
