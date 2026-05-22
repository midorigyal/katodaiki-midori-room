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

/* CURSOR EFFECT */

document.addEventListener('touchstart',(e)=>{

  const x = e.touches[0].clientX;
  const y = e.touches[0].clientY;

  const spark =
  document.createElement('div');

  spark.className =
  'cursor-spark';

  spark.style.left = x + 'px';
  spark.style.top = y + 'px';

  document.body.appendChild(spark);

  setTimeout(()=>{

    spark.remove();

  },800);

});

/* ✨ FLOATING STARS */

const starsContainer =
document.querySelector('.stars');

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