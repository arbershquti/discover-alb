const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  if (window.innerWidth <= 768) {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
  }
});

// Simplified mobile toggle
document.querySelectorAll('.has-submenu > a').forEach(item => {
  item.addEventListener('click', function(e) {
    if (window.innerWidth <= 768) {
      const parent = this.parentElement;
      const submenu = parent.querySelector('.submenu');
      
      if (!submenu) return;
      
      e.preventDefault();
      parent.classList.toggle('active');
      submenu.style.maxHeight = parent.classList.contains('active') 
        ? submenu.scrollHeight + 'px' 
        : '0';
    }
  });
});

// Close menu when clicking a subcategory link (mobile only)
document.querySelectorAll('.submenu a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      navMenu.classList.remove('active');
      hamburger.classList.remove('active');
    }
  });
});

// Close menu when clicking outside (mobile only)
document.addEventListener('click', (e) => {
  if (window.innerWidth <= 768 && !hamburger.contains(e.target) && !navMenu.contains(e.target)) {
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
  }
});

// Desktop hover functionality
document.querySelectorAll('.has-submenu').forEach(item => {
  if (window.innerWidth > 768) {
    item.addEventListener('mouseenter', () => {
      const submenu = item.querySelector('.submenu');
      if (submenu) submenu.style.display = 'block';
    });
    
    item.addEventListener('mouseleave', () => {
      const submenu = item.querySelector('.submenu');
      if (submenu) submenu.style.display = 'none';
    });
  }
});

// Fix the mega-menu height adjustment
document.querySelectorAll('.mega-menu').forEach(menu => {
  const viewportHeight = window.innerHeight;
  const menuHeight = menu.scrollHeight;
  
  if (menuHeight > viewportHeight * 0.8) {
    menu.style.maxHeight = '80vh';
  } else {
    menu.style.maxHeight = 'auto';
  }
});

// Carousel functionality
const carousel = () => {
  const carouselInner = document.querySelector('.carousel-inner');
  const items = document.querySelectorAll('.carousel-item');
  let currentIndex = 0;

  const rotateCarousel = () => {
    currentIndex = (currentIndex + 1) % items.length;
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
  };

  // Start auto rotation
  let carouselInterval = setInterval(rotateCarousel, 5000);

  // Pause on hover
  const carouselContainer = document.querySelector('.carousel');
  carouselContainer.addEventListener('mouseenter', () => clearInterval(carouselInterval));
  carouselContainer.addEventListener('mouseleave', () => {
    carouselInterval = setInterval(rotateCarousel, 5000);
  });
};

// Initialize carousel
document.addEventListener('DOMContentLoaded', carousel);
