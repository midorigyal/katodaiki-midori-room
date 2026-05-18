const fadeElements = document.querySelectorAll('.fade-up');

window.addEventListener('scroll', () => {

  fadeElements.forEach(el => {

    const position = el.getBoundingClientRect().top;

    if(position < window.innerHeight - 100){

      el.classList.add('show');

    }

  });

});
