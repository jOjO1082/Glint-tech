// Mobile menu reveal
const mobileMenu = document.getElementById('mobile-menu');
const closeIcon = document.getElementById('close-icon');
const menuToggle = document.getElementById('menu-toggle');

// Dropdown menu reveal
const dropdownMenu = document.getElementById('drop-down-link');
const subMenu = document.getElementById('sub-menu')

// faq menu
const faqIcon1 = document.getElementById('toggle1');
const faqText1 = document.getElementById('toggle-content1');

const faqIcon2 = document.getElementById('toggle2');
const faqText2 = document.getElementById('toggle-content2');

const faqIcon3 = document.getElementById('toggle3');
const faqText3 = document.getElementById('toggle-content3');

const faqIcon4 = document.getElementById('toggle4');
const faqText4 = document.getElementById('toggle-content4');

const faqIcon5 = document.getElementById('toggle5');
const faqText5 = document.getElementById('toggle-content5');



menuToggle.addEventListener('click', () => {
  mobileMenu.style.display = "flex";
  mobileMenu.style.opacity = 1;
  mobileMenu.style.transform = "translateY(0)";
});

closeIcon.addEventListener('click', () => {
  mobileMenu.style.display = "none";
});

if (faqIcon1 && faqText1) {
  faqIcon1.addEventListener('click', () => {
    faqText1.style.display = "flex";
  });
  faqText1.addEventListener('click', () => {
    faqText1.style.display = "none";
  });
}

if (faqIcon2 && faqText2) { 
  faqIcon2.addEventListener('click', () => {
    faqText2.style.display = "flex";
  });
  faqText2.addEventListener('click', () => {
    faqText2.style.display = "none";
  });
}

if (faqIcon3 && faqText3) { 
  faqIcon3.addEventListener('click', () => {
    faqText3.style.display = "flex";
  });
  faqText3.addEventListener('click', () => {
    faqText3.style.display = "none";
  });
}

if (faqIcon4 && faqText4) { 
  faqIcon4.addEventListener('click', () => {
    faqText4.style.display = "flex";
  });
  faqText4.addEventListener('click', () => {
    faqText4.style.display = "none";
  });
}

if (faqIcon5 && faqText5) {
  faqIcon5.addEventListener('click', () => {
    faqText5.style.display = "flex";
  });
  faqText5.addEventListener('click', () => {
    faqText5.style.display = "none";
  });
}

// faqIcon1.addEventListener('click', () => {
//   faqText1.style.display = "flex";
//   faqText1.style.opacity = 1;
//   faqText1.style.transform = "translateY(1px)";
// });

// faqText1.addEventListener('click', () => {
//   faqText1.style.display = "none";
// });

// faqIcon2.addEventListener('click', () => {
//   faqText2.style.display = "flex";
// });

// faqText2.addEventListener('click', () => {
//   faqText2.style.display = "none";
// });


// faqIcon3.addEventListener('click', () => {
//   faqText3.style.display = "flex";
// });

// faqText3.addEventListener('click', () => {
//   faqText3.style.display = "none";
// });


// faqIcon4.addEventListener('click', () => {
//   faqText4.style.display = "flex";
// });

// faqText4.addEventListener('click', () => {
//   faqText4.style.display = "none";
// });


// faqIcon5.addEventListener('click', () => {
//   faqText5.style.display = "flex";
// });

// faqText5.addEventListener('click', () => {
//   faqText5.style.display = "none";
// });

// Submenu function
dropdownMenu.addEventListener('mouseenter', () => { 
  subMenu.style.opacity = 1;
  subMenu.style.transform = "translateY(10px)";
  subMenu.style.pointerEvents = "auto";
})

// Close submenu function
subMenu.addEventListener('mouseleave', () => {
  subMenu.style.opacity = 0;
  subMenu.style.transform = "translateY(-20px)";
  subMenu.style.pointerEvents = "none";
})