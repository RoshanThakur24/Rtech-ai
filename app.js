
  document.addEventListener('contextmenu', function(e) {
  e.preventDefault();  // Disable right-click context menu
});

document.addEventListener('keydown', function(e) {
  // Disable F12 and Ctrl+Shift+I (DevTools open shortcuts)
  if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'C'))) {
    e.preventDefault();
  }
});

    const menuToggle = document.getElementById('menuToggle');  
    const sideMenu = document.getElementById('sideMenu');  
    let isOpen = false;  

    menuToggle.addEventListener('click', () => {  
      isOpen = !isOpen;  
      sideMenu.classList.toggle('open');  
      menuToggle.textContent = isOpen ? '×' : '☰';
      menuToggle.classList.toggle('active', isOpen);     
    }); 

    // Close sidebar when clicking outside of it
    document.addEventListener('click', (e) => {
      // If menu is not open, nothing to do
      if (!isOpen) return;

      // If the click target is the toggle button or inside the sidebar, ignore
      if (sideMenu.contains(e.target) || menuToggle.contains(e.target)) return;

      // Otherwise close the sidebar
      isOpen = false;
      sideMenu.classList.remove('open');
      menuToggle.textContent = '☰';
      menuToggle.classList.remove('active');
    });

    // Also close on Escape for accessibility
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isOpen) {
        isOpen = false;
        sideMenu.classList.remove('open');
        menuToggle.textContent = '☰';
        menuToggle.classList.remove('active');
      }
    });

  if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
  }
