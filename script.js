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

    document.querySelector('.copyright').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M14.83 14.83a4 4 0 1 1 0-5.66"/></g></svg> ${new Date().getFullYear()} mono::work — все серые зоны закрашены.`;
  })();