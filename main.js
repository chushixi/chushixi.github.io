let currentPage = 1;
const slider = document.querySelector('.simako-exe');
const totalPages = document.querySelectorAll('.page').length;

function slideTo(index) {
  slider.style.transform = `translateX(-${index * 100}vw)`;
}

function goRight() {
  currentPage += 1;
  slideTo(currentPage);
  
  if (currentPage === totalPages - 1) {
    setTimeout(() => {
      slider.style.transition = 'none';
      currentPage = 1;
      slideTo(currentPage);
      setTimeout(() => {
        slider.style.transition = 'transform 0.5s ease';
      }, 50);
    }, 500);
  }
}

function goLeft() {
  currentPage -= 1;
  slideTo(currentPage);
  
  if (currentPage === 0) {
    setTimeout(() => {
      slider.style.transition = 'none';
      currentPage = totalPages - 2;
      slideTo(currentPage);
      setTimeout(() => {
        slider.style.transition = 'transform 0.5s ease';
      }, 50);
    }, 500);
  }
}

slideTo(currentPage);
