(() => {
  'use strict';


  const gallery = document.querySelector('.gallery__slider');
  if (gallery && typeof Swiper !== 'undefined') {
    new Swiper(gallery, {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 40,
      breakpoints: {
        700: { slidesPerView: 2, spaceBetween: 40 },
        930: { slidesPerView: 3, spaceBetween: 40 },
      },
      navigation: {
        nextEl: '.gallery__arrow--next',
        prevEl: '.gallery__arrow--prev',
      },
    });
  }

  const MODAL_KEYS = ['hair', 'man', 'permanent', 'kids'];
  let activeModal = null;
  let lastFocus = null;
  let savedOverflow = '';

  const getFocusable = (container) =>
    Array.from(
      container.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
    ).filter((el) => el.offsetParent !== null);

  function openModal(modal) {
    if (!modal || activeModal === modal) return;
    if (activeModal) closeModal(activeModal, { restoreFocus: false });

    lastFocus = document.activeElement;
    activeModal = modal;
    savedOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    modal.setAttribute('aria-hidden', 'false');

    const focusTarget =
      modal.querySelector('.modal__btn') || modal.querySelector('.modal__content');
    if (focusTarget) focusTarget.focus();
  }

  function closeModal(modal, { restoreFocus = true } = {}) {
    if (!modal) return;
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = savedOverflow;
    if (activeModal === modal) activeModal = null;

    if (restoreFocus && lastFocus && typeof lastFocus.focus === 'function') {
      lastFocus.focus();
    }
    lastFocus = null;
  }

  MODAL_KEYS.forEach((key) => {
    const modal = document.querySelector(`.modal--${key}`);
    const trigger = document.querySelector(`.open-modal-${key}`);
    if (!modal) return;

    if (trigger) {
      trigger.addEventListener('click', () => openModal(modal));
      trigger.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openModal(modal);
        }
      });
    }

    const closeBtn = modal.querySelector('.modal__btn');
    if (closeBtn) closeBtn.addEventListener('click', () => closeModal(modal));

    const overlay = modal.querySelector('.modal__overlay');
    if (overlay) overlay.addEventListener('click', () => closeModal(modal));
  });

  document.addEventListener('keydown', (e) => {
    if (!activeModal) return;

    if (e.key === 'Escape') {
      closeModal(activeModal);
      return;
    }

  
    if (e.key === 'Tab') {
      const focusable = getFocusable(activeModal);
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });


  const menuBtn = document.querySelector('.menu__btn');
  const menu = document.querySelector('.menu');

  if (menuBtn && menu) {
    const setExpanded = (open) => {
      menuBtn.setAttribute('aria-expanded', String(open));
    };
    setExpanded(false);

    menuBtn.addEventListener('click', () => {
      const open = menu.classList.toggle('menu--active');
      setExpanded(open);
    });

    menu.querySelectorAll('.menu__link').forEach((link) => {
      link.addEventListener('click', () => {
        menu.classList.remove('menu--active');
        setExpanded(false);
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menu.classList.contains('menu--active')) {
        menu.classList.remove('menu--active');
        setExpanded(false);
        menuBtn.focus();
      }
    });
  }
})();
