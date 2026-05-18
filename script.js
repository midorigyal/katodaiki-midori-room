const fadeElements = document.querySelectorAll('.fade-up');

window.addEventListener('scroll', () => {

  fadeElements.forEach(el => {

    const position = el.getBoundingClientRect().top;

    if(position < window.innerHeight - 100){
      el.classList.add('show');
    }

  });

});

const tags = document.querySelectorAll('.floating-tags span');

setInterval(() => {

  tags.forEach(tag => {

    const x = Math.random() * 20 - 10;
    const y = Math.random() * 20 - 10;

    tag.style.transform = `translate(${x}px, ${y}px)`;

  });

}, 1500);
