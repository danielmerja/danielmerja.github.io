// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const menuList = mobileMenu.querySelector('ul');

menuToggle.addEventListener('click', (event) => {
  event.stopPropagation();
  menuList.classList.toggle('show');
});

// Close menu when clicking outside
document.addEventListener('click', () => {
  if (menuList.classList.contains('show')) {
    menuList.classList.remove('show');
  }
});

// Prevent menu from closing when clicking inside it
menuList.addEventListener('click', (event) => {
  event.stopPropagation();
});

// Add a personal welcome message
document.addEventListener('DOMContentLoaded', () => {
    const welcome = document.createElement('p');
    welcome.textContent = "Welcome! I'm Daniel, here to help your startup thrive.";
    document.body.prepend(welcome);
});
