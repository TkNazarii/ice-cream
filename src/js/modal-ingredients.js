(() => {
  const refs = {
    openFillingBtn: document.querySelector('[data-filling-open]'),
    closeFillingBtn: document.querySelector('[data-filling-close]'),
    filling: document.querySelector('[data-filling]'),
  };
  refs.openFillingBtn.addEventListener('click', toggleModal);
  refs.closeFillingBtn.addEventListener('click', toggleModal);
  function toggleModal() {
    refs.filling.classList.toggle('is-open');
  }
})();
