/*==========================menu inone navbar===============================*/

let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x')
  navbar.classList.toggle('active')
}

/*==========================acroll sections active link===============================*/
let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY
    let offset = sec.offsetTop - 150
    let height = sec.offsetHeight
    let id = sec.getAttribute('id')

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active')
        document
          .querySelector('header nav a[href*=' + id + ']')
          .classList.add('active')
      })
    }
  })

  /*=========================stick navbar============================== */
  let header = document.querySelector('.header')

  header.classList.toggle('sticky', window.scrollY > 100)

  /*======remove menu icon navbar when click navbar link (scroll)===== */
  menuIcon.classList.remove('bx-x')
  navbar.classList.remove('active')
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

/*===================dark light mode==================*/
let darkModeIcon = document.querySelector('#darkMode-icon')

darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle('bx-sun')
  document.body.classList.toggle('dark-mode')
}

/*==========scroll reveal===========*/

ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
})

ScrollReveal().reveal('.inicio-content, .heading', { origin: 'top' })
ScrollReveal().reveal(
  '.inicio-img img, .projetos-wrapper, .contato-container',
  {
    origin: 'bottom'
  }
)

ScrollReveal().reveal('.inicio-content h1, .sobre-img img', { origin: 'left' })

ScrollReveal().reveal('.inicio-content h3, .inicio-content p, .sobre-content', {
  origin: 'right'
})
