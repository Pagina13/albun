let currentIndex = 0;

function moveSlide(direction) {
  const carousel = document.querySelector('.carousel');
  const items = document.querySelectorAll('.carousel-item');
  const totalItems = items.length;
  
  currentIndex += direction;
  
  if (currentIndex >= totalItems) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = totalItems - 1;
  }
  
  const offset = -currentIndex * 100;
  carousel.style.transform = `translateX(${offset}%)`;
}

function toggleDescription(button) {
  const item = button.parentElement;
  const description = item.querySelector('.description');
  
  if (description.style.display === 'none') {
    description.style.display = 'block';
  } else {
    description.style.display = 'none';
  }
}

function showMessage() {
  const message = document.getElementById('message');
  message.style.display = 'block';
}
