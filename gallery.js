var gallery = document.querySelector('.gallery');
var images = gallery.querySelectorAll('img');
var currentIndex = 0;

function showImage() {
  images[currentIndex].style.display = 'block';
  currentIndex = (currentIndex + 1) % images.length;
}


setInterval(showImage, 3000);