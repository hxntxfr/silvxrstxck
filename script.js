(function() {
    const workItems = document.querySelectorAll('.work-item');
    
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.style.opacity = '0';
      aboutSection.style.transition = 'opacity 0.8s ease';
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });
      observer.observe(aboutSection);
    }

    window.addEventListener('load', () => {
      document.body.style.animation = 'none';
      if (aboutSection) aboutSection.style.opacity = '1';
    });

    document.querySelector('.copyright').innerHTML = `<i class="far fa-copyright"></i> ${new Date().getFullYear()} mono::work — all grey areas reserved`;
  })();