let currentPage = 1;
const slider = document.querySelector('.simako-exe');
const totalPages = document.querySelectorAll('.page').length;

function slideTo(index) {
  slider.style.transform = `translateX(-${index * 100}vw)`;
}

function startIntro(){
  const click = document.querySelector('#clickText')
  const simakoHere = document.querySelector('#introText')
  document.querySelector('.simako-exe').style.display = "flex";
  document.querySelector('.intro-page').style.display = 'none';
  document.querySelectorAll('.nav').forEach(btn => btn.style.display = 'block');
  slideTo(currentPage);
  click.style.display = 'none'
  simakoHere.style.display = 'block'
  //document.querySelector('.Page1avatar').classList.add('animationLeftIntro');
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
