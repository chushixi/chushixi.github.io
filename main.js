let currentPage = 0;
let totalPages = document.querySelectorAll('.page').length;

function slideTo(index) {
  const slider = document.querySelector('.simako-exe');
  slider.style.transform = `translateX(-${index * 100}vw)`;
}

function goRight() {
  currentPage += 1;
  if (currentPage === totalPages) {
    currentPage = 0;
  }
  slideTo(currentPage);
}

function goLeft() {
  currentPage -= 1;
  if (currentPage < 0) {
    currentPage = totalPages - 1;
  }
  slideTo(currentPage);
}
