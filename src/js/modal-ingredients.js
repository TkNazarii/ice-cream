(() => {
  const refs = {
    openFillingBtn: document.querySelector('[data-filling1-open]'),
    closeFillingBtn: document.querySelector('[data-filling-close]'),
    filling: document.querySelector('[data-filling]'),
    body: document.querySelector('.body'),
  };
  refs.openFillingBtn.addEventListener('click', toggleFilling);
  refs.closeFillingBtn.addEventListener('click', toggleFilling);
  function toggleFilling() {
    refs.filling.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();

(() => {
  const refs = {
    openFillingBtn: document.querySelector('[data-filling2-open]'),
    closeFillingBtn: document.querySelector('[data-filling-close]'),
    filling: document.querySelector('[data-filling]'),
    body: document.querySelector('.body'),
  };
  refs.openFillingBtn.addEventListener('click', toggleFilling);
  refs.closeFillingBtn.addEventListener('click', toggleFilling);
  function toggleFilling() {
    refs.filling.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();

(() => {
  const refs = {
    openFillingBtn: document.querySelector('[data-filling3-open]'),
    closeFillingBtn: document.querySelector('[data-filling-close]'),
    filling: document.querySelector('[data-filling]'),
    body: document.querySelector('.body'),
  };
  refs.openFillingBtn.addEventListener('click', toggleFilling);
  refs.closeFillingBtn.addEventListener('click', toggleFilling);
  function toggleFilling() {
    refs.filling.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
