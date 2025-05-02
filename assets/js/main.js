var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    effect: 'fade',  // fade 효과 활성화
    fadeEffect: {
      crossFade: true  // 부드러운 전환 효과
    },
    speed: 2000,  // 전환 속도 (1초)
    autoplay: {
        delay: 2500, // 3초 간격으로 자동 전환
        disableOnInteraction: false, // 사용자 상호작용 후에도 자동재생 유지
        pauseOnMouseEnter: true
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });