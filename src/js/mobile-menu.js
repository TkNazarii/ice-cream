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
      openMenuBtn: document.querySelector('[data-menu-open-modal-header]'),
      closeMenuBtn: document.querySelector('[data-menu-close-modal-header]'),
      menu: document.querySelector('[data-menu-modal-header]'),
    };
    refs.openMenuBtn.addEventListener('click', toggleModal);
    refs.closeMenuBtn.addEventListener('click', toggleModal);
    function toggleModal() {
      refs.menu.classList.toggle('is-open');
    }
  })();