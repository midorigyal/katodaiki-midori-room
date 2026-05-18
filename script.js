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

  },1500);

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

/* VIDEO CHANGE */

const heroVideo =
document.querySelector('.hero-video');

const videos = [

  {
    src:"videos/hero.mp4",
    duration:6000
  },

  {
    src:"videos/hero2.mp4",
    duration:10000
  },

  {
    src:"videos/hero3.mp4",
    duration:10000
  }

];

let current = 0;

function playVideo(index){

  heroVideo.style.opacity = 0;

  setTimeout(() => {

    heroVideo.src =
    videos[index].src;

    heroVideo.load();

    heroVideo.play();

    heroVideo.style.opacity = 1;

    /* FIRST VIDEO */

    if(index === 0){

      heroVideo.style.transform =
      "scale(1.08)";

    }else{

      heroVideo.style.transform =
      "scale(1.03)";
    }

  },700);

  setTimeout(() => {

    current++;

    if(current >= videos.length){

      current = 0;
    }

    playVideo(current);

  },videos[index].duration);

}

playVideo(current);

/* SOUND BUTTON */

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
  `scale(1.08)
   translateY(${scrollY * 0.12}px)`;

});