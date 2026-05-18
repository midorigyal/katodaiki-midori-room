/* RESET SCROLL */

if ('scrollRestoration' in history) {

  history.scrollRestoration = 'manual';

}

window.addEventListener('load', () => {

  setTimeout(() => {

    window.scrollTo(0,0);

  },10);

});

/* FADE UP */

const fadeElements =
document.querySelectorAll('.fade-up');

window.addEventListener('scroll', () => {

  fadeElements.forEach(el => {

    const position =
    el.getBoundingClientRect().top;

    if(position < window.innerHeight - 100){

      el.classList.add('show');

    }

  });

});

/* LOADING */

window.addEventListener('load', () => {

  const loader =
  document.querySelector('.loader');

  setTimeout(() => {

    loader.classList.add('hide');

  },1200);

});

/* TAP STAR EFFECT */

document.addEventListener('touchstart', (e) => {

  const star = document.createElement('div');

  star.className = 'tap-star';

  star.style.left = e.touches[0].clientX + 'px';
  star.style.top = e.touches[0].clientY + 'px';

  document.body.appendChild(star);

  setTimeout(() => {
    star.remove();
  }, 600);

});