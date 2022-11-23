;(function () {
  const menu = document.getElementById('menu')
  window.addEventListener('scroll', function () {
    if (window.scrollY > 0) menu.classList.add('scroll')
    else menu.classList.remove('scroll')
  })
})()

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#about .text, #about .img,

  `,
  { interval: 100 }
)
