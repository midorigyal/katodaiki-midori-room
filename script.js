/* =========================================
   MIDORI ROOM - script.js
   FULL REBUILD VERSION
   index / gallery / archive 対応
========================================= */

/* =========================================
   RESET SCROLL
========================================= */

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

window.addEventListener("load", () => {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 10);
});

/* =========================================
   LOADER
========================================= */

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  if (!loader) return;

  setTimeout(() => {
    loader.classList.add("hide");
  }, 1200);
});

/* =========================================
   FADE UP
========================================= */

const fadeElements = document.querySelectorAll(".fade-up");

const fadeIn = () => {
  fadeElements.forEach((el) => {
    const position = el.getBoundingClientRect().top;

    if (position < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
};

window.addEventListener("scroll", fadeIn);
window.addEventListener("load", fadeIn);

/* =========================================
   HERO STARS
========================================= */

const starsContainer = document.querySelector(".stars");

if (starsContainer) {
  for (let i = 0; i < 50; i++) {
    const star = document.createElement("div");

    star.classList.add("star");

    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";

    star.style.animationDuration =
      2 + Math.random() * 4 + "s";

    star.style.animationDelay =
      Math.random() * 5 + "s";

    starsContainer.appendChild(star);
  }
}

/* =========================================
   HERO SOUND BUTTON
========================================= */

const heroVideo = document.querySelector(".hero-video");
const soundBtn = document.querySelector(".sound-btn");

if (heroVideo && soundBtn) {
  heroVideo.muted = true;

  soundBtn.addEventListener("click", () => {
    heroVideo.muted = !heroVideo.muted;

    soundBtn.textContent =
      heroVideo.muted ? "🔇" : "🔊";
  });
}

/* =========================================
   HERO PARALLAX
========================================= */

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  if (heroVideo) {
    heroVideo.style.transform =
      `scale(1.05) translateY(${scrollY * 0.08}px)`;
  }

  const galleryHero =
    document.querySelector(".gallery-hero");

  if (galleryHero) {
    galleryHero.style.transform =
      `translateY(${scrollY * 0.05}px)`;
  }
});

/* =========================================
   HERO LIGHT EFFECT
========================================= */

const hero = document.querySelector(".hero");

if (hero && window.innerWidth > 768) {
  hero.addEventListener("mousemove", (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    hero.style.background =
      `
      radial-gradient(
        circle at ${x * 100}% ${y * 100}%,
        rgba(255,107,203,.08),
        transparent 40%
      )
    `;
  });
}

/* =========================================
   GLITTER EFFECT
========================================= */

const createGlitter = (x, y) => {
  for (let i = 0; i < 3; i++) {
    const glitter = document.createElement("div");

    glitter.className = "glitter";

    glitter.style.left =
      x + (Math.random() * 30 - 15) + "px";

    glitter.style.top =
      y + (Math.random() * 30 - 15) + "px";

    glitter.style.transform =
      `rotate(${Math.random() * 360}deg)`;

    document.body.appendChild(glitter);

    setTimeout(() => {
      glitter.remove();
    }, 900);
  }
};

/* MOBILE */

document.addEventListener("touchstart", (e) => {
  const x = e.touches[0].clientX;
  const y = e.touches[0].clientY;

  createGlitter(x, y);
});

/* PC */

document.addEventListener("mousemove", (e) => {
  if (Math.random() > 0.975) {
    createGlitter(e.clientX, e.clientY);
  }
});

/* =========================================
   RANDOM FLASH
========================================= */

setInterval(() => {
  const flash = document.createElement("div");

  flash.className = "random-flash";

  flash.style.left =
    Math.random() * 100 + "vw";

  flash.style.top =
    Math.random() * 100 + "vh";

  document.body.appendChild(flash);

  setTimeout(() => {
    flash.remove();
  }, 1200);
}, 2600);

/* =========================================
   RANDOM SPARKLE
========================================= */

setInterval(() => {
  const sparkle = document.createElement("div");

  sparkle.className = "sparkle";

  sparkle.style.left =
    Math.random() * 100 + "vw";

  sparkle.style.top =
    Math.random() * 100 + "vh";

  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 1800);
}, 1800);

/* =========================================
   FLOATING STICKERS
========================================= */

const stickers = document.querySelectorAll(
  ".gallery-sticker, .photo-heart, .mini-star, .doodle-star, .doodle-heart"
);

stickers.forEach((sticker) => {
  let randomRotate = Math.random() * 8 - 4;

  sticker.animate(
    [
      {
        transform:
          `translateY(0px) rotate(${randomRotate}deg)`
      },

      {
        transform:
          `translateY(-10px) rotate(${randomRotate + 4}deg)`
      }
    ],
    {
      duration: 2600 + Math.random() * 1800,
      iterations: Infinity,
      direction: "alternate",
      easing: "ease-in-out"
    }
  );
});

/* =========================================
   CARD 3D HOVER
========================================= */

const cards = document.querySelectorAll(
  `
  .profile-card,
  .movie-card,
  .photo,
  .edit-card,
  .archive-card,
  .quote-box
`
);

cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    if (window.innerWidth < 768) return;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = (x - centerX) / 28;
    const rotateX = -(y - centerY) / 28;

    card.style.transform =
      `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-8px)
    `;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
});

/* =========================================
   MINI PHOTO RANDOM ROTATE
========================================= */

const miniPhotos =
  document.querySelectorAll(".mini-photo");

miniPhotos.forEach((photo) => {
  photo.addEventListener("mouseenter", () => {
    const random =
      Math.random() * 10 - 5;

    photo.style.transform =
      `
      rotate(${random}deg)
      scale(1.08)
    `;
  });

  photo.addEventListener("mouseleave", () => {
    photo.style.transform = "";
  });
});

/* =========================================
   FLOATING PHOTO EFFECT
========================================= */

const photos =
  document.querySelectorAll(".photo");

photos.forEach((photo, index) => {
  photo.animate(
    [
      {
        transform: `translateY(0px)`
      },

      {
        transform: `translateY(-10px)`
      }
    ],
    {
      duration: 3500 + index * 400,
      direction: "alternate",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});

/* =========================================
   RANDOM PHOTO ROTATION
========================================= */

const randomPhotos =
  document.querySelectorAll(".photo");

randomPhotos.forEach((photo) => {
  const randomRotate =
    Math.random() * 4 - 2;

  photo.style.rotate =
    `${randomRotate}deg`;
});

/* =========================================
   MIDORI EDIT VIDEO AUTOPLAY FIX
========================================= */

const editVideos =
  document.querySelectorAll(".edit-card video");

editVideos.forEach((video) => {
  video.muted = true;
  video.loop = true;
  video.playsInline = true;

  const playPromise = video.play();

  if (playPromise !== undefined) {
    playPromise.catch(() => {});
  }
});

/* =========================================
   ARCHIVE QUOTE RANDOM FLOAT
========================================= */

const quotes =
  document.querySelectorAll(".quote-box");

quotes.forEach((quote, index) => {
  quote.animate(
    [
      {
        transform: "translateY(0px)"
      },

      {
        transform: "translateY(-8px)"
      }
    ],
    {
      duration: 3000 + index * 300,
      direction: "alternate",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});

/* =========================================
   LOGO GLOW
========================================= */

const logo = document.querySelector(".logo");

if (logo) {
  setInterval(() => {
    logo.classList.add("logo-flash");

    setTimeout(() => {
      logo.classList.remove("logo-flash");
    }, 700);
  }, 5000);
}

/* =========================================
   NAV SMOOTH ACTIVE
========================================= */

const navLinks =
  document.querySelectorAll('nav a[href^="#"]');

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetId =
      link.getAttribute("href");

    const target =
      document.querySelector(targetId);

    if (!target) return;

    e.preventDefault();

    target.scrollIntoView({
      behavior: "smooth"
    });
  });
});

/* =========================================
   MOBILE MENU SAFETY
========================================= */

window.addEventListener("resize", () => {
  document.body.style.overflowX = "hidden";
});

/* =========================================
   PERFORMANCE OPTIMIZE
========================================= */

window.addEventListener(
  "scroll",
  () => {},
  {
    passive: true
  }
);

/* =========================================
   END
========================================= */