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

  if(loader){

    setTimeout(() => {

      loader.classList.add('hide');

    }, 1200);

  }

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

  for(let i = 0; i < 3; i++){

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

    }, 900);

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

  if(Math.random() > 0.965){

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
    `scale(1.05)
    translateY(${scrollY * 0.08}px)`;

  }

});

/* =========================
   RANDOM NOISE DOT
========================= */

for(let i = 0; i < 30; i++){

  const noise =
  document.createElement('div');

  noise.classList.add('noise-dot');

  noise.style.left =
  Math.random() * 100 + 'vw';

  noise.style.top =
  Math.random() * 100 + 'vh';

  noise.style.animationDuration =
  2 + Math.random() * 5 + 's';

  document.body.appendChild(noise);

}

/* =========================
   RANDOM FLASH
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

}, 2400);

/* =========================
   FLOATING STICKERS
========================= */

const stickers =

document.querySelectorAll(

  '.gallery-sticker, .photo-heart, .mini-star'

);

stickers.forEach(sticker => {

  let randomRotate =
  Math.random() * 8 - 4;

  sticker.animate(

    [

      {

        transform:
        `translateY(0px)
        rotate(${randomRotate}deg)`

      },

      {

        transform:
        `translateY(-10px)
        rotate(${randomRotate + 4}deg)`

      }

    ],

    {

      duration:
      2600 + Math.random() * 1800,

      iterations: Infinity,

      direction: 'alternate',

      easing: 'ease-in-out'

    }

  );

});

/* =========================
   CARD HOVER
========================= */

const cards =
document.querySelectorAll(

  '.profile-card, .movie-card, .photo'

);

cards.forEach(card => {

  card.addEventListener(

    'mousemove',

    (e) => {

      if(window.innerWidth < 768) return;

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
      (x - centerX) / 28;

      const rotateX =
      -(y - centerY) / 28;

      card.style.transform =

      `perspective(900px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-8px)`;

    }

  );

  card.addEventListener(

    'mouseleave',

    () => {

      card.style.transform = '';

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
      Math.random() * 10 - 5;

      photo.style.transform =

      `rotate(${random}deg)
      scale(1.08)`;

    }

  );

  photo.addEventListener(

    'mouseleave',

    () => {

      photo.style.transform = '';

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

/* =========================
   FLOATING PHOTO EFFECT
========================= */

const photos =
document.querySelectorAll('.photo');

photos.forEach((photo, index) => {

  photo.animate(

    [

      {

        transform:
        `translateY(0px)`

      },

      {

        transform:
        `translateY(-10px)`

      }

    ],

    {

      duration:
      3500 + (index * 400),

      direction: 'alternate',

      iterations: Infinity,

      easing: 'ease-in-out'

    }

  );

});

/* =========================
   RANDOM SPARKLE
========================= */

setInterval(() => {

  const sparkle =
  document.createElement('div');

  sparkle.className =
  'sparkle';

  sparkle.style.left =
  Math.random() * 100 + 'vw';

  sparkle.style.top =
  Math.random() * 100 + 'vh';

  document.body.appendChild(sparkle);

  setTimeout(() => {

    sparkle.remove();

  }, 1800);

}, 1600);

/* =========================
   SCROLL PARALLAX
========================= */

window.addEventListener('scroll', () => {

  const scrollY =
  window.scrollY;

  const galleryHero =
  document.querySelector('.gallery-hero');

  if(galleryHero){

    galleryHero.style.transform =

    `translateY(${scrollY * 0.08}px)`;

  }

});

/* =========================
   RANDOM PHOTO ROTATION
========================= */

const randomPhotos =
document.querySelectorAll('.photo');

randomPhotos.forEach(photo => {

  const randomRotate =
  Math.random() * 4 - 2;

  photo.style.rotate =
  `${randomRotate}deg`;

});

/* =========================
   LOGO GLOW
========================= */

const logo =
document.querySelector('.logo');

if(logo){

  setInterval(() => {

    logo.classList.add('logo-flash');

    setTimeout(() => {

      logo.classList.remove('logo-flash');

    }, 700);

  }, 5000);

}