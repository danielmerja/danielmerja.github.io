// Scroll to Top Button
const scrollToTopButton = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    scrollToTopButton.classList.remove('hidden');
  } else {
    scrollToTopButton.classList.add('hidden');
  }
});

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
  const menuList = mobileMenu.querySelector('ul');
  menuList.classList.toggle('hidden');
});

// Close menu when clicking outside
document.addEventListener('click', (event) => {
  const menuList = mobileMenu.querySelector('ul');
  if (!mobileMenu.contains(event.target) && !menuToggle.contains(event.target)) {
    menuList.classList.add('hidden');
  }
});

// Prevent menu from closing when clicking inside it
menu.addEventListener('click', (event) => {
  event.stopPropagation();
});
