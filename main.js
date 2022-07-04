



var swiper = new Swiper(".swiper-container", {
    slidesPerView: 3,
    spaceBetween: 20,
    slidesPerGroup: 3,
    loop: true,
    autoplay: true,
    loopFillGroupWithBlank: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {


        300: {
        slidesPerView: 1,
        
      },

      640: {
        slidesPerView: 1,
        
      },

      768: {
        slidesPerView: 2,
       
      },

      1060: {
        slidesPerView: 3,
        spaceBetween: 30,
      },

     
    },


});


const navBar = document.querySelector('.navbar');

window.onscroll = function () {
  if(document.documentElement.scrollTop > 350) {
    navBar.classList.add('down')
  }else {
    navBar.classList.remove('down')
  }
}