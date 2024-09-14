// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const menuList = document.querySelector('#mobile-menu ul');

menuToggle.addEventListener('click', (event) => {
  event.stopPropagation();
  menuList.classList.toggle('hidden');
});

// Close menu when clicking outside
document.addEventListener('click', () => {
  if (!menuList.classList.contains('hidden')) {
    menuList.classList.add('hidden');
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
