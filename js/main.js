// main.js - ISN Bafoussam Interactive Features
// Modern, performant JS for forms, navigation, WhatsApp

document.addEventListener('DOMContentLoaded', function() {
  

  // Form validation & submission
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    // Skip forms that have custom handlers (contact & inscription)
    if (form.classList.contains('contact-form') || form.classList.contains('inscription-form')) {
      return;
    }
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(form);
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi...';
      submitBtn.disabled = true;
      
      fetch(form.action, {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          alert('Message envoyé! Nous vous contactons sous 24h.');
          form.reset();
        } else {
          alert('Erreur: ' + (data.message || 'Vérifiez vos informations'));
        }
      })
      .catch(error => {
        alert('Erreur connexion. Essayez WhatsApp.');
      })
      .finally(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      });
    });
  });

  // Smooth scrolling for nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // WhatsApp button (if exists)
  const whatsappBtn = document.querySelector('.whatsapp-float');
  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', function(e) {
      e.preventDefault();
      const text = 'Bonjour ISN Bafoussam, je souhaite avoir plus infos sur vos formations';
      window.open('https://wa.me/237659717141?text=' + encodeURIComponent(text), '_blank');
    });
  }

  // Lazy load images observer for performance
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });
    
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
      imageObserver.observe(img);
    });
  }

  // Animate on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const animateObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.card, .feature, .diplome').forEach(el => {
    el.classList.add('animate-ready');
    animateObserver.observe(el);
  });
});
