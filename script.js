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

/* STARS */

const stars =
document.querySelector('.stars');

for(let i=0;i<80;i++){

  const star =
  document.createElement('div');

  star.classList.add('star');

  star.style.left =
  Math.random() * 100 + '%';

  star.style.top =
  Math.random() * 100 + '%';

  star.style.animationDuration =
  2 + Math.random() * 4 + 's';

  stars.appendChild(star);
}

/* SOUND BUTTON */

const heroVideo =
document.querySelector('.hero-video');

const soundBtn =
document.querySelector('.sound-btn');

soundBtn.addEventListener('click',() => {

  heroVideo.muted =
  !heroVideo.muted;

  if(heroVideo.muted){

    soundBtn.innerHTML = "🔇";

  }else{

    soundBtn.innerHTML = "🔊";

  }

});

/* PARALLAX */

window.addEventListener('scroll', () => {

  const scrollY =
  window.scrollY;

  heroVideo.style.transform =
  `scale(1.05)
   translateY(${scrollY * 0.08}px)`;

});

/* FORCE LOOP */

heroVideo.addEventListener('ended', () => {

  heroVideo.play();

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

/* GALLERY MODAL */

const items = document.querySelectorAll('.gallery-item');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');

items.forEach(item => {

  item.addEventListener('click', () => {

    modal.classList.add('show');

    modalImg.src = item.src;

  });

});

modal.addEventListener('click', () => {

  modal.classList.remove('show');

});