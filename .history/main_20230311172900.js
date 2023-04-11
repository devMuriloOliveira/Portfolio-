window.addEventListener('scroll', function () {
  const header = document.querySelector('.header')
  header.classList.toggle('sticky', window.scrollY > 50)
})

/*window.onscroll = () => {
  let header = document.querySelector('.header')

  header.classList.toggle('sticky', window.scrollY > 100)
}*/
