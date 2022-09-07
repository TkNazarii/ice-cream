(() => {
  const refs = {
    openReadingBtn: document.querySelector('[data-reading-open]'),
    closeReadingBtn: document.querySelector('[data-reading-close]'),
    reading: document.querySelector('[data-reading]'),
    body: document.querySelector('.body'),
  };
  refs.openReadingBtn.addEventListener('click', toggleReading);
  refs.closeReadingBtn.addEventListener('click', toggleReading);
  function toggleReading() {
    refs.reading.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
