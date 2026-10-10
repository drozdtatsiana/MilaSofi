  var swiper = new Swiper('.gallery__slider', {
      loop: true,
        slidesPerView: 3,
        spaceBetween: 30,

       navigation: {
          nextEl: '.gallery__arrow--next',
          prevEl: '.gallery__arrow--prev',
        },

   breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 40,
            
          },
          700: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          930: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
   }
      
        
      });
  
      const openModalHair = document.querySelector('.open-modal-hair');
      const openModalMan = document.querySelector('.open-modal-man');
      const openModalPermanent = document.querySelector('.open-modal-permanent');
      const openModalKids = document.querySelector('.open-modal-kids');
      const closeModalHair = document.querySelector('.close-modal-hair');
      const closeModalMan = document.querySelector('.close-modal-man');
      const closeModalPermanent = document.querySelector('.close-modal-permanent');
      const closeModalKids = document.querySelector('.close-modal-kids');
      const modalOverlay = document.querySelector('.modal__overlay');
      const modalHair = document.querySelector('.modal--hair');
      const modalMan = document.querySelector('.modal--man');
      const  modalPermanent = document.querySelector('.modal--permanent');
      const  modalKids= document.querySelector('.modal--kids');
      const  modal= document.querySelector('.modal');


document.querySelectorAll('.modal__overlay').forEach(overlay => {
  overlay.addEventListener('click', () => {
    const modal = overlay.closest('.modal');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  });
});

       openModalHair.addEventListener('click', ()=> {
        modalHair.setAttribute('aria-hidden', 'false');
       })
        
       openModalMan.addEventListener('click', ()=> {
        modalMan.setAttribute('aria-hidden', 'false');
       })
       openModalPermanent.addEventListener('click', ()=> {
        modalPermanent.setAttribute('aria-hidden', 'false');
       })
      

       openModalKids.addEventListener('click', ()=> {
        modalKids.setAttribute('aria-hidden', 'false');
        
       })

       closeModalHair.addEventListener('click', () => {
       modalHair.setAttribute('aria-hidden', 'true');
        })
       
       closeModalMan.addEventListener('click', () => {
        modalMan.setAttribute('aria-hidden', 'true');
       })

       closeModalPermanent.addEventListener('click', () => {
        modalPermanent.setAttribute('aria-hidden', 'true');
       })

       closeModalKids.addEventListener('click', () => {
        modalKids.setAttribute('aria-hidden', 'true');
       })

       const menuBtn = document.querySelector('.menu__btn');
       const menu = document.querySelector('.menu');
       const menuLinks = document.querySelectorAll('.menu__link');
      
       menuBtn.addEventListener('click', ()=> {
        menu.classList.toggle('menu--active');
       })

       
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('menu--active');
  });
});