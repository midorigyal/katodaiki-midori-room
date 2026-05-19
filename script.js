/* =========================
   RESET SCROLL
========================= */

if ('scrollRestoration' in history) {

  history.scrollRestoration = 'manual';

}

window.addEventListener('load', () => {

  setTimeout(() => {

    window.scrollTo(0,0);

  },10);

});

/* =========================
   FADE UP
========================= */

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

/* =========================
   LOADING
========================= */

window.addEventListener('load', () => {

  const loader =
  document.querySelector('.loader');

  if(loader){

    setTimeout(() => {

      loader.classList.add('hide');

    },1200);

  }

});

/* =========================
   STARS BG
========================= */

const stars =
document.querySelector('.stars');

if(stars){

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

}

/* =========================
   HERO VIDEO
========================= */

const heroVideo =
document.querySelector('.hero-video');

const soundBtn =
document.querySelector('.sound-btn');

/* SOUND BUTTON */

if(heroVideo && soundBtn){

  soundBtn.addEventListener('click',() => {

    heroVideo.muted =
    !heroVideo.muted;

    if(heroVideo.muted){

      soundBtn.innerHTML = "🔇";

    }else{

      soundBtn.innerHTML = "🔊";

    }

  });

}

/* PARALLAX */

if(heroVideo){

  window.addEventListener('scroll', () => {

    const scrollY =
    window.scrollY;

    heroVideo.style.transform =
    `scale(1.05)
     translateY(${scrollY * 0.08}px)`;

  });

}

/* FORCE LOOP */

if(heroVideo){

  heroVideo.addEventListener('ended', () => {

    heroVideo.play();

  });

}

/* =========================
   TAP EFFECT
========================= */

document.addEventListener('touchstart', (e) => {

  const x =
  e.touches[0].clientX;

  const y =
  e.touches[0].clientY;

  /* HEART */

  const heart =
  document.createElement('div');

  heart.className =
  'heart';

  heart.innerHTML =
  '💗';

  heart.style.left =
  x + 'px';

  heart.style.top =
  y + 'px';

  document.body.appendChild(heart);

  /* STAR */

  const star =
  document.createElement('div');

  star.className =
  'tap-effect-star';

  star.innerHTML =
  '✨';

  star.style.left =
  (x + 12) + 'px';

  star.style.top =
  (y - 12) + 'px';

  document.body.appendChild(star);

  setTimeout(() => {

    heart.remove();

    star.remove();

  },900);

});

/* =========================
   GALLERY MODAL
========================= */

const items =
document.querySelectorAll('.gallery-item');

const modal =
document.getElementById('modal');

const modalImg =
document.getElementById('modalImg');

if(items.length > 0 && modal && modalImg){

  items.forEach(item => {

    item.addEventListener('click', () => {

      modal.classList.add('show');

      modalImg.src =
      item.src;

    });

  });

  modal.addEventListener('click', () => {

    modal.classList.remove('show');

  });

}