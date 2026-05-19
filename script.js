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

/* 💗 TAP EFFECT */

document.addEventListener('touchstart', (e) => {

  const x = e.touches[0].clientX;
  const y = e.touches[0].clientY;

  // HEART
  const heart = document.createElement('div');

  heart.className = 'heart';

  heart.innerHTML = '💗';

  heart.style.left = x + 'px';
  heart.style.top = y + 'px';

  document.body.appendChild(heart);

  // STAR
  const star = document.createElement('div');

  star.className = 'tap-effect-star';

  star.innerHTML = '✨';

  star.style.left = (x + 12) + 'px';
  star.style.top = (y - 12) + 'px';

  document.body.appendChild(star);

  setTimeout(() => {

    heart.remove();
    star.remove();

  },900);

});