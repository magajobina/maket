const swiper = new Swiper('.swiper', {
  loop: false,
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev',
  },
  slidesPerView: 1,
  spaceBetween: 45,
  breakpoints: {
    // when window width is >= 320px
    900: {
      slidesPerView: 2,
    },
  }
});

const burger = document.querySelector('.burger');
const overlay = document.querySelector('.overlay');
const links = document.querySelectorAll('.header__nav a');

burger.addEventListener('click', (e) => {
  e.preventDefault();
  document.body.classList.toggle('menu_open');
  burger.querySelector('span').classList.toggle('burger--X')
});
overlay.addEventListener('click', (e) => {
  document.body.classList.toggle('menu_open');
  burger.querySelector('span').classList.toggle('burger--X')
});
links.forEach(el => {
  el.addEventListener('click', (e) => {
    document.body.classList.toggle('menu_open');
    burger.querySelector('span').classList.toggle('burger--X')
  });
});

function initCustom () {
  if (window.scrollY > 0) {
    burger.classList.add('burger--follow');
  } else {
    burger.classList.remove('burger--follow');
  }
}
window.addEventListener('scroll', function() {
  
  if (window.scrollY > 0) {
    burger.classList.add('burger--follow');
  } else {
    burger.classList.remove('burger--follow');
  }
});


var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});


initCustom ();