console.log("INVITE JS LOADED");

// Block scrolling
document.body.classList.add('lock-scroll');

// Click Handler
const envelope = document.querySelector('.envelope-wrapper');
const seal = document.querySelector('.wax-seal');
const card_inner = document.querySelector('.card-inner');
const scrollIndicator = document.getElementById('scrollIndicator');
const clickHint = document.getElementById('clickHint');

function openEnvelope() {
  envelope.classList.add('flap');
  seal.classList.add('break');

  // Hide click hint when envelope opens
  if (clickHint) {
    clickHint.classList.add('hide');
  }

  setTimeout(() => {
    document.body.classList.remove('lock-scroll');

    setTimeout(() => {
      card_inner.classList.add('text-visible');

      // Show scroll indicator after card text appears
      setTimeout(() => {
        if (scrollIndicator) {
          scrollIndicator.classList.add('show');
        }
      }, 800);

    }, 1600);
  }, 1600);
}

function closeEnvelope() {
  envelope.classList.remove('flap');

  // Show click hint again when envelope closes
  if (clickHint) {
    clickHint.classList.remove('hide');
  }

  // Hide scroll indicator
  if (scrollIndicator) {
    scrollIndicator.classList.remove('show');
  }
}

// Click to open
envelope.addEventListener('click', () => {
  if (envelope.classList.contains('flap')) {
    closeEnvelope();
  } else {
    openEnvelope();
  }
});

// INTERSECTION OBSERVER (feed-style reveal)
const observer = new IntersectionObserver((entries) => {
  if (document.body.classList.contains('lock-scroll')) return;

  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    // Hide scroll indicator when RSVP section becomes visible
    if (entry.target.classList.contains('stage-rsvp')) {
      document.querySelector('.rsvp')?.classList.add('show');
      if (scrollIndicator) {
        scrollIndicator.classList.remove('show');
      }
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.stage').forEach(stage => {
  observer.observe(stage);
});

/* RECENTLY ADDED */

function createPetals() {
  const container = document.createElement('div');
  container.id = 'petal-container';
  document.body.appendChild(container);

  const petalCount = 30;

  for (let i = 0; i < petalCount; i++) {
    const petal = document.createElement('div');
    petal.className = 'petal';

    const size = Math.random() * 15 + 10 + 'px';
    petal.style.width = size;
    petal.style.height = size;
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.animationDuration = Math.random() * 5 + 5 + 's';
    petal.style.animationDelay = Math.random() * 5 + 's';

    container.appendChild(petal);
  }
}

window.addEventListener('load', createPetals);