
console.log("INVITE JS LOADED");

// Block scrolling

  document.body.classList.add('lock-scroll');
  //requestAnimationFrame(() => {
    // document.body.classList.add('lock-scroll');
  //});

  // Click Handler

  const envelope = document.querySelector('.envelope-wrapper');
  const seal = document.querySelector('.wax-seal');
  const card_inner = document.querySelector('.card-inner');

  function openEnvelope() {
    envelope.classList.add('flap');
    // envelope.classList.add('pinned');
    seal.classList.add('break');


    setTimeout(() => {
      document.body.classList.remove('lock-scroll');

      setTimeout(() => {
          card_inner.classList.add('text-visible');
      }, 1600)
    }, 1600); // match waxbreak / flap timing
  };

  function closeEnvelope () {
    envelope.classList.remove('flap');
  }

  // Click to open (Only place this happens)

  envelope.addEventListener('click', () => {
    if(envelope.classList.contains('flap')) {
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

    if (entry.target.classList.contains('stage-rsvp')) {
      document.querySelector('.rsvp')?.classList.add('show');
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

    const petalCount = 30; // Adjust for more/less petals

    for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        
        // Randomize size, position, and speed
        const size = Math.random() * 15 + 10 + 'px';
        petal.style.width = size;
        petal.style.height = size;
        petal.style.left = Math.random() * 100 + 'vw';
        petal.style.animationDuration = Math.random() * 5 + 5 + 's'; // 5-10 seconds
        petal.style.animationDelay = Math.random() * 5 + 's';
        
        container.appendChild(petal);
    }
}

// Start the animation when the page loads
window.addEventListener('load', createPetals);
