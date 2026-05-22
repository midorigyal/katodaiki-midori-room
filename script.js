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

  for(let i = 0; i < 40; i++){

    const star =
    document.createElement('div');

    star.classList.add('star');

    star.style.top =
    Math.random() * 100 + '%';

    star.style.left =
    Math.random() * 100 + '%';

    star.style.animationDuration =
    2 + Math.random() * 4 + 's';

    star.style.animationDelay =
    Math.random() * 5 + 's';

    starsContainer.appendChild(star);

  }

}

/* =========================
   SPARK EFFECT
========================= */

document.addEventListener('touchstart', (e) => {

  const x = e.touches[0].clientX;
  const y = e.touches[0].clientY;

  for(let i = 0; i < 8; i++){

    const sparkle =
    document.createElement('div');

    sparkle.className = 'sparkle';

    sparkle.style.left =
    x + (Math.random() * 40 - 20) + 'px';

    sparkle.style.top =
    y + (Math.random() * 40 - 20) + 'px';

    document.body.appendChild(sparkle);

    setTimeout(() => {

      sparkle.remove();

    }, 900);

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

    video.muted = !video.muted;

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