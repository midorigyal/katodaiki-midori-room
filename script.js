/* =========================
   RESET SCROLL
========================= */

if ('scrollRestoration' in history) {

  history.scrollRestoration = 'manual';

}

window.addEventListener('load', () => {

  setTimeout(() => {

    window.scrollTo(0, 0);

  }, 10);

});

/* =========================
   FADE UP
========================= */

const fadeElements =
document.querySelectorAll('.fade-up');

const fadeIn = () => {

  fadeElements.forEach(el => {

    const position =
    el.getBoundingClientRect().top;

    if(position < window.innerHeight - 100){

      el.classList.add('show');

    }

  });

};

window.addEventListener('scroll', fadeIn);

window.addEventListener('load', fadeIn);

/* =========================
   LOADING
========================= */

window.addEventListener('load', () => {

  const loader =
  document.querySelector('.loader');

  setTimeout(() => {

    loader.classList.add('hide');

  }, 1200);

});

/* =========================
   HERO STARS
========================= */

const starsContainer =
document.querySelector('.stars');

if(starsContainer){

  for(let i = 0; i < 45; i++){

    const star =
    document.createElement('div');

    star.classList.add('star');

    star.style.top =
    Math.random() * 100 + '%';

    star.style.left =
    Math.random() * 100 + '%';

    star.style.animationDuration =
    2 + Math.random() * 5 + 's';

    star.style.animationDelay =
    Math.random() * 5 + 's';

    starsContainer.appendChild(star);

  }

}

/* =========================
   GLITTER EFFECT
========================= */

const createGlitter = (x, y) => {

  for(let i = 0; i < 6; i++){

    const glitter =
    document.createElement('div');

    glitter.className =
    'glitter';

    glitter.style.left =
    x + (Math.random() * 30 - 15) + 'px';

    glitter.style.top =
    y + (Math.random() * 30 - 15) + 'px';

    glitter.style.transform =
    `rotate(${Math.random() * 360}deg)`;

    document.body.appendChild(glitter);

    setTimeout(() => {

      glitter.remove();

    }, 800);

  }

};

/* MOBILE */

document.addEventListener('touchstart', (e) => {

  const x =
  e.touches[0].clientX;

  const y =
  e.touches[0].clientY;

  createGlitter(x, y);

});

/* PC */

document.addEventListener('mousemove', (e) => {

  if(Math.random() > 0.92){

    createGlitter(
      e.clientX,
      e.clientY
    );

  }

});

/* =========================
   SOUND BUTTON
========================= */

const video =
document.querySelector('.hero-video');

const soundBtn =
document.querySelector('.sound-btn');

if(video && soundBtn){

  video.muted = true;

  soundBtn.addEventListener('click', () => {

    video.muted =
    !video.muted;

    soundBtn.textContent =
    video.muted ? '🔇' : '🔊';

  });

}

/* =========================
   HERO PARALLAX
========================= */

window.addEventListener('scroll', () => {

  const scrollY =
  window.scrollY;

  const heroVideo =
  document.querySelector('.hero-video');

  if(heroVideo){

    heroVideo.style.transform =
    `scale(1.05) translateY(${scrollY * 0.08}px)`;

  }

});

/* =========================
   RANDOM FLASH TEXT
========================= */

const flashTexts = [

  'green addict.',
  'visual shock.',
  'too handsome.',
  'face card never declines.',
  'debut him now.',
  'visual overload.',
  'MIDORI ROOM.',
  '걍 잘생김.'

];

setInterval(() => {

  const flash =
  document.createElement('div');

  flash.className =
  'flash-text';

  flash.innerText =

  flashTexts[
    Math.floor(
      Math.random() *
      flashTexts.length
    )
  ];

  flash.style.top =
  Math.random() * 80 + '%';

  flash.style.left =
  Math.random() * 80 + '%';

  document.body.appendChild(flash);

  setTimeout(() => {

    flash.remove();

  }, 5000);

}, 4000);

/* =========================
   FLOATING NOISE
========================= */

for(let i = 0; i < 18; i++){

  const noise =
  document.createElement('div');

  noise.style.position =
  'fixed';

  noise.style.width =
  '1px';

  noise.style.height =
  '1px';

  noise.style.background =
  'rgba(255,255,255,.08)';

  noise.style.left =
  Math.random() * 100 + 'vw';

  noise.style.top =
  Math.random() * 100 + 'vh';

  noise.style.pointerEvents =
  'none';

  noise.style.zIndex =
  '1';

  noise.style.animation =
  `twinkle ${
    2 + Math.random() * 4
  }s infinite`;

  document.body.appendChild(noise);

}