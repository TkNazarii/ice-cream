(() => {
    const refs = {
      openMenuBtn: document.querySelector('[data-menu-open]'),
      closeMenuBtn: document.querySelector('[data-menu-close]'),
      menu: document.querySelector('[data-menu]'),
    };
    refs.openMenuBtn.addEventListener('click', toggleModal);
    refs.closeMenuBtn.addEventListener('click', toggleModal);
    function toggleModal() {
      refs.menu.classList.toggle('is-open');
    }
  })();
  (() => {
    const refs = {
      openModalhtn: document.querySelector('[data-Modalh1-open]'),
      closeModalhtn: document.querySelector('[data-Modalh-close]'),
      Modalh: document.querySelector('[data-Modalh]'),
      body: document.querySelector('.body'),
    };
    refs.openModalhtn.addEventListener('click', toggleModalh);
    refs.closeModalhtn.addEventListener('click', toggleModalh);
    function toggleModalh() {
      refs.Modalh.classList.toggle('is-hidden');
      refs.body.classList.toggle('no-scroll');
    }
  })();