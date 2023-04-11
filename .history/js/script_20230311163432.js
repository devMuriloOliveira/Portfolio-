window.onscroll = () => {
  var header = document.querySelector('.header')

  header.classList.toggle('sticky', window.scrollY > 100)
}
