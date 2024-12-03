const htmlElement = document.getElementById('htmlElement');
    const langButtons = document.querySelectorAll('.lang-button');
    const translatableElements = document.querySelectorAll('[data-lang-ar], [data-lang-fr]');

    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedLang = button.id;
            htmlElement.setAttribute('lang', selectedLang);

            translatableElements.forEach(element => {
                element.textContent = element.getAttribute(`data-lang-${selectedLang}`);
            });
        });
    });

    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('header ul');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show'); 
    });


    document.querySelectorAll('.swiper').forEach((swiperContainer, index) => {
    
      const prevButton = swiperContainer.parentElement.querySelector('.swiper-button-prev');
      const nextButton = swiperContainer.parentElement.querySelector('.swiper-button-next');
      const pagination = swiperContainer.querySelector('.swiper-pagination');
    
   
      new Swiper(swiperContainer, {
        slidesPerView: 1,
        spaceBetween: 7,
        navigation: {
          prevEl: prevButton,
          nextEl: nextButton,
        },
        pagination: {
          el: pagination,
          clickable: true,
        },
        breakpoints: {
          640: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        },
      });
    });

    // Add this to your main.js

document.addEventListener("DOMContentLoaded", function() {
  const elements = document.querySelectorAll('.fade-in, .slide-in');

  const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
          }
      });
  }, options);

  elements.forEach(element => {
      observer.observe(element);
  });
});


  
