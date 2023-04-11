window.onscroll = function () {
  let header = document.querySelector('.header')

  header.classList.toggle('sticky', window.scrollY > 100)
}
