const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// Submenu toggle
document.querySelectorAll('.has-submenu > a').forEach(item => {
  item.addEventListener('click', function(e) {
    if (window.innerWidth <= 768) {
      // Check if the click was on the indicator
      const isIndicatorClick = e.target.tagName === 'path' || e.target.tagName === 'svg';
      
      if (!isIndicatorClick) {
        // If clicking the main link, close the menu
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
        return;
      }
      
      // If clicking the indicator, toggle submenu
      e.preventDefault();
      const parent = this.parentElement;
      const submenu = parent.querySelector('.submenu');
      
      // Close other submenus
      document.querySelectorAll('.has-submenu.active').forEach(activeItem => {
        if (activeItem !== parent) {
          activeItem.classList.remove('active');
          activeItem.querySelector('.submenu').style.maxHeight = '0';
        }
      });
      
      // Toggle current submenu
      parent.classList.toggle('active');
      if (parent.classList.contains('active')) {
        submenu.style.maxHeight = submenu.scrollHeight + 'px';
      } else {
        submenu.style.maxHeight = '0';
      }
    }
  });
});

// Close menu when clicking a subcategory link
document.querySelectorAll('.submenu a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
  });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  console.log('Script loaded');

  const megaMenu = document.querySelector('.mega-menu');
  const categoryImage = document.querySelector('.category-image');

  // Debugging: Check if elements exist
  console.log('Mega menu:', megaMenu);
  console.log('Category image:', categoryImage);

  if (!megaMenu) {
    console.error('Mega menu element not found');
    return;
  }

  if (!categoryImage) {
    console.error('Category image element not found');
    return;
  }

  // Test: Force show first image
  categoryImage.src = 'images/img1.jpg';
  categoryImage.style.opacity = '1';
  setTimeout(() => {
    categoryImage.style.opacity = '0';
  }, 3000);

  // Regular functionality
  megaMenu.addEventListener('mouseover', (e) => {
    const listItem = e.target.closest('li');
    if (listItem && listItem.dataset.image) {
      console.log('Hovering:', listItem.textContent);
      console.log('Image path:', listItem.dataset.image);
      
      categoryImage.src = listItem.dataset.image;
      categoryImage.style.opacity = '1';
    }
  });

  megaMenu.addEventListener('mouseout', () => {
    categoryImage.style.opacity = '0';
  });

  const toggleButton = document.querySelector('.toggle-button');
  
  if (toggleButton) {
    toggleButton.addEventListener('click', function() {
      const quickLinks = document.querySelector('.quick-links');
      const plusSign = this.querySelector('span');
      
      quickLinks.classList.toggle('active');
      plusSign.textContent = quickLinks.classList.contains('active') ? '-' : '+';
    });
  } else {
    console.error('Toggle button not found - check your HTML element with class "toggle-button"');
  }

  // Remove image preview functionality on mobile
  if (window.innerWidth <= 768) {
    if (megaMenu) {
      megaMenu.removeEventListener('mouseover');
      megaMenu.removeEventListener('mouseout');
    }
  }
});
