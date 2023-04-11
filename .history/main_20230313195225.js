/*==========================acroll sections active link===============================*/
let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('haeader nav a')

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY
    let offset = sec.offsetTop - 150
  })

  /*=========================stick navbar============================== */
  let header = document.querySelector('.header')

  header.classList.toggle('sticky', window.scrollY > 100)
}

/*===================swiper==================*/
var swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
})

/*window.addEventListener('scroll', function () {
  const header = document.querySelector('.header')
  header.classList.toggle('sticky', window.scrollY > 100)
})
*/
