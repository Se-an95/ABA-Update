// Select DOM elements
const newsletterForm = document.getElementById('newsletter-form');
const emailInput = document.getElementById('email-input');
const subscribeButton = document.getElementById('subscribe-button');
const contactUsButton = document.getElementById('contact-us-button');
const socialIcons = document.querySelectorAll('.social-icon');
const addressElement = document.getElementById('address');

// Event listeners
newsletterForm.addEventListener('submit', handleSubmit);
subscribeButton.addEventListener('click', handleSubmit);
contactUsButton.addEventListener('click', handleContactUsClick);
socialIcons.forEach(icon => {
  icon.addEventListener('click', handleSocialIconClick);
});

// Functions
function handleSubmit(event) {
  event.preventDefault();
  const email = emailInput.value;
  // TODO: Add code to subscribe user to newsletter
}

function handleContactUsClick() {
  // TODO: Add code to open contact form or link to contact page
}

function handleSocialIconClick(event) {
  const icon = event.currentTarget;
  const socialNetwork = icon.dataset.socialNetwork;
  // TODO: Add code to follow social network
}

// Initialization
addressElement.innerHTML = '123 Main St, Anytown USA'; // Replace with your address


//Social Icons
if (typeof window.FontAwesome !== 'undefined') {
    console.log('Font Awesome is included.');
  } else {
    console.log('Font Awesome is not included.');
  }

//Image functionality
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');
const images = document.querySelectorAll('.image-viewer img');
let currentIndex = 0;

function showImage(index) {
  images.forEach(image => image.style.display = 'none');
  images[index].style.display = 'block';
}

showImage(currentIndex);

prevButton.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  showImage(currentIndex);
});

nextButton.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  showImage(currentIndex);
});
 
