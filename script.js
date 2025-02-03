const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
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
});
