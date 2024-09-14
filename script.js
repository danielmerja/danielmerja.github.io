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
const menuList = mobileMenu.querySelector('ul'); // Added: Define menuList outside for broader scope

menuToggle.addEventListener('click', (event) => {
  event.stopPropagation(); // Prevents the click from bubbling up to the document
  menuList.classList.toggle('hidden');
});

// Close menu when clicking outside
document.addEventListener('click', (event) => {
  if (!mobileMenu.contains(event.target) && !menuToggle.contains(event.target)) {
    menuList.classList.add('hidden');
  }
});

// Prevent menu from closing when clicking inside it
menuList.addEventListener('click', (event) => { // Changed 'menu' to 'menuList'
  event.stopPropagation();
});
