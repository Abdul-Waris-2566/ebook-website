// Add custom JavaScript here

const nav = document.querySelector('.navbar')

function showNavInScoll() {
  const navScroll = window.pageYOffset
  const navHeight = nav.getBoundingClientRect().height

  if (navScroll > navHeight) {
    nav.classList.add('bg-dark')
    nav.classList.add('navbar-sticky')
  } else {
    nav.classList.remove('bg-dark')
    nav.classList.remove('navbar-sticky')
  }
}

showNavInScoll()

window.addEventListener('scroll', showNavInScoll)
