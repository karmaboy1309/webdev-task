/**
 * Task 4: Responsive Navigation Menu & Micro-interactions
 * Author: Darshan Makwana (Web Development Intern)
 */

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  const header = document.getElementById('header');

  // Toggle mobile navigation menu
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('active');

      // Prevent background scrolling when mobile menu is open
      if (navMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    });

    // Close menu when clicking on any nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });

    // Close menu when pressing Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      }
    });

    // Close menu if window is resized above 768px
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // Active navigation link tracking on scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });

    // Header elevation shadow on scroll
    if (window.scrollY > 20) {
      header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
    } else {
      header.style.boxShadow = 'none';
    }
  });
});
