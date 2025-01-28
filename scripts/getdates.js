document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const mainMenu = document.querySelector('#main-menu ul');
  
    hamburgerMenu.addEventListener('click', () => {
      const isVisible = mainMenu.classList.toggle('visible');
      hamburgerMenu.textContent = isVisible ? 'X' : '☰';
    });
  });