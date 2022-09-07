(() => {
  const refs = {
    openFillingBtn: document.querySelector('[data-filling4-open]'),
    closeFillingBtn: document.querySelector('[data-filling4-close]'),
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
