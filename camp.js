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
 
//Registration form
// Subscription form JS
const subscriptionForm = document.querySelector('.subscription-form-container form');

subscriptionForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = subscriptionForm.email.value;
  const subscribe = subscriptionForm.subscribe.checked;

  // Send data to server-side script for handling
  console.log('Email:', email);
  console.log('Subscribe:', subscribe);
});

// Registration form JS
const registrationForm = document.querySelector('.registration-form-container form');

registrationForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const firstname = registrationForm.firstname.value;
  const lastname = registrationForm.lastname.value;
  const email = registrationForm.email.value;
  const phone = registrationForm.phone.value;
  const age = registrationForm.age.value;
  const size = registrationForm.size.value;

  // Send data to server-side script for handling
  console.log('First Name:', firstname);
  console.log('Last Name:', lastname);
  console.log('Email:', email);
  console.log('Phone:', phone);
  console.log('Age:', age);
  console.log('T-Shirt Size:', size);
});
