const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  centeredSlidesBounds: true,
  spaceBetween: 1,
  slideToClickedSlide: true,
  loopAdditionalSlides: 1,
  loopFillGroupWithBlank: true,
  autoHeight: true,
  slideShadows: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: false,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 1.268,
      spaceBetween: 20,
    },
  },
});
// Lấy ra nút dừng và gán sự kiện click
const stopButton = document.querySelector(".stop-button");
if (stopButton) {
  stopButton.addEventListener("click", function () {
    swiper.autoplay.stop(); // Dừng autoplay
  });
}

// Lấy ra nút bắt đầu và gán sự kiện click
const startButton = document.querySelector(".start-button");
if (startButton) {
  startButton.addEventListener("click", function () {
    swiper.autoplay.start(); // Bắt đầu autoplay
  });
}

window.onload = function () {
  const video = document.querySelector(".video-apple");
  if (video) {
    video.play();
  }
};

let header = document.querySelector(".header");

let hoverChung = document.getElementsByClassName("chung");

let subNav = document.getElementsByClassName("subnav1");

let firstHoverDone = false;

for (let i = 0; i < hoverChung.length; i++) {
  hoverChung[i].addEventListener("mouseover", function () {
    if (!firstHoverDone) {
      firstHoverDone = true; // Đánh dấu đã hover lần đầu
    } else {
      // Nếu đã hover lần đầu, đặt animation của tất cả các phần tử 'subnav1' thành 'none'
      for (let j = 0; j < subNav.length; j++) {
        subNav[j].style.animation = "none";
      }
    }
  });
  hoverChung[i].addEventListener("mouseout", function () {
    for (let j = 0; j < subNav.length; j++) {
      subNav[j].style.animation = "growDown 0.5s ease-in-out forwards";
    }
  });
}

// Duyệt qua tất cả các phần tử có class 'chung' để thêm sự kiện 'mouseover' cho chúng
for (let i = 0; i < hoverChung.length; i++) {
  hoverChung[i].addEventListener("mouseover", function () {
    let phuWeb = document.querySelector(".phuWeb");
    if (phuWeb) {
      phuWeb.style.display = "block";
    }
  });
  hoverChung[i].addEventListener("mouseout", function () {
    let phuWeb = document.querySelector(".phuWeb");
    if (phuWeb) {
      phuWeb.style.display = "none";
    }
  });
}






