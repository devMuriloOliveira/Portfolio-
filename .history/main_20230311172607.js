
<script>
window.addEventListener('scroll', function () {
  const menu = document.querySelector('.menu')
  menu.classList.toggle('sticky', window.scrollY > 50)
})
</script>

/*window.onscroll = () => {
  let header = document.querySelector('.header')

  header.classList.toggle('sticky', window.scrollY > 100)
}*/ 