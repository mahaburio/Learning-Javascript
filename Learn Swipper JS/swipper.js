const swiper = new Swiper(".mySwiper", {
  cssMode:true,
  pagination:{
    clickable:true,
    el:".swiper-pagination"
  },
  navigation:{
    nextEl:".swiper-button-next",
    prevEl:".swiper-button-prev",
  }
})