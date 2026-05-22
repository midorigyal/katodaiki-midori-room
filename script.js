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

  for(let i = 0; i < 4; i++){

    const glitter =
    document.createElement('div');

    glitter.className =
    'glitter';

    glitter.style.left =
    x + (Math.random() * 26 - 13) + 'px';

    glitter.style.top =
    y + (Math.random() * 26 - 13) + 'px';

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

  if(Math.random() > 0.94){

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
   RANDOM NOISE
========================= */

for(let i = 0; i < 24; i++){

  const noise =
  document.createElement('div');

  noise.classList.add('noise-dot');

  noise.style.left =
  Math.random() * 100 + 'vw';

  noise.style.top =
  Math.random() * 100 + 'vh';

  noise.style.animationDuration =
  2 + Math.random() * 4 + 's';

  document.body.appendChild(noise);

}

/* =========================
   RANDOM GLITTER FLASH
========================= */

setInterval(() => {

  const flash =
  document.createElement('div');

  flash.className =
  'random-flash';

  flash.style.left =
  Math.random() * 100 + 'vw';

  flash.style.top =
  Math.random() * 100 + 'vh';

  document.body.appendChild(flash);

  setTimeout(() => {

    flash.remove();

  }, 1200);

}, 1800);

/* =========================
   FLOATING MINI STICKER
========================= */

const stickers =

document.querySelectorAll(
  '.gallery-sticker, .gallery-heart'
);

stickers.forEach(sticker => {

  let randomRotate =
  Math.random() * 6 - 3;

  sticker.animate(

    [

      {

        transform:
        `translateY(0px)
        rotate(${randomRotate}deg)`

      },

      {

        transform:
        `translateY(-8px)
        rotate(${randomRotate + 3}deg)`

      }

    ],

    {

      duration:
      2500 + Math.random() * 1500,

      iterations:Infinity,

      direction:'alternate',

      easing:'ease-in-out'

    }

  );

});

/* =========================
   CARD HOVER
========================= */

const cards =
document.querySelectorAll(

  '.profile-card, .movie-card'

);

cards.forEach(card => {

  card.addEventListener(

    'mousemove',

    (e) => {

      const rect =
      card.getBoundingClientRect();

      const x =
      e.clientX - rect.left;

      const y =
      e.clientY - rect.top;

      const centerX =
      rect.width / 2;

      const centerY =
      rect.height / 2;

      const rotateY =
      (x - centerX) / 22;

      const rotateX =
      -(y - centerY) / 22;

      card.style.transform =

      `perspective(800px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-6px)`;

    }

  );

  card.addEventListener(

    'mouseleave',

    () => {

      card.style.transform =

      'perspective(800px) rotateX(0) rotateY(0)';

    }

  );

});

/* =========================
   MINI PHOTO RANDOM
========================= */

const miniPhotos =
document.querySelectorAll('.mini-photo');

miniPhotos.forEach(photo => {

  photo.addEventListener(

    'mouseenter',

    () => {

      const random =
      Math.random() * 8 - 4;

      photo.style.transform =

      `rotate(${random}deg)
      scale(1.08)`;

    }

  );

});

/* =========================
   HERO LIGHT
========================= */

const hero =
document.querySelector('.hero');

if(hero){

  hero.addEventListener(

    'mousemove',

    (e) => {

      const x =
      e.clientX / window.innerWidth;

      const y =
      e.clientY / window.innerHeight;

      hero.style.background =

      `radial-gradient(
        circle at
        ${x * 100}% ${y * 100}%,
        rgba(255,107,203,.08),
        transparent 40%
      )`;

    }

  );

}