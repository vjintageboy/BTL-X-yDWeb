const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    centeredSlidesBounds: true,
    spaceBetween: 1,
    slideToClickedSlide: true,
    loopAdditionalSlides: 1,
    loopFillGroupWithBlank: true,
    autoHeight: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: false,
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        640: {
            slidesPerView: 1.268,
            spaceBetween: 20
        }
    }
});
// Lấy ra nút dừng và gán sự kiện click
// const stopButton = document.querySelector('.stop-button');
// stopButton.addEventListener('click', function() {
//     swiper.autoplay.stop(); // Dừng autoplay
// });

// // Lấy ra nút bắt đầu và gán sự kiện click
// const startButton = document.querySelector('.start-button');
// startButton.addEventListener('click', function() {
//     swiper.autoplay.start(); // Bắt đầu autoplay
// });

window.onload = function() {
    document.getElementsByClassName('video-apple').play();
}

