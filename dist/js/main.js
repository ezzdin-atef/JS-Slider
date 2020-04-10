// Get Slideritems Array.form
var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));

// Get Number Of Slides
var slidesCount = sliderImages.length;

// Set Current Slide
var currentSlide = 1;

// Slide Number String Element
var slideNumberElement = document.getElementById('slide-number');

// Prev And Next Buttons
var nextBtn = document.getElementById('next');
var prevBtn = document.getElementById('prev');

// Handle Click Prev And Next Button
nextBtn.onclick = nextSlide;
prevBtn.onclick = prevSlide;


// Create Main Ul Element
var paginationElement = document.createElement('ul');
paginationElement.setAttribute('id', 'pagination-ul');

// Create li Based On Slider Count
for (var i=1; i<= slidesCount; i++) {
  var paginationItem = document.createElement('li');
  paginationItem.setAttribute('data-index', i);
  
  paginationElement.appendChild(paginationItem);
}

// Appent The Ul To The Page
document.getElementById('indicators').appendChild(paginationElement);

// Get The New Ul
var paginationUl = document.getElementById('pagination-ul');

var paginationBullets = Array.from(document.querySelectorAll('#pagination-ul li'));


// Loop Through All Bullet Item

for (var i = 0; i < paginationBullets.length; i++) {
  paginationBullets[i].onclick = function () {
    currentSlide = parseInt(this.getAttribute('data-index'));

    theChecker();
  }
}

// Auto Navigation
theChecker();
window.setInterval(nextSlide, 4000);


function nextSlide() {
  if (nextBtn.classList.contains('disabled')) {
    return false;
  } else {
    currentSlide++;
    theChecker();
  }

}

function prevSlide() {
  if (prevBtn.classList.contains('disabled')) {
    return false;
  } else {
    currentSlide--;
    theChecker();
  }
}

// Create The Checker Function

function theChecker() {

  slideNumberElement.textContent = 'Slide #' + (currentSlide) + ' Of ' + (slidesCount);

  removeAllActive();

  // Set Active In Current Slide
  sliderImages[(currentSlide-1)%slidesCount].classList.add('active');

  // Set Active Class In Current Pagination Items
  paginationUl.children[(currentSlide-1)%slidesCount].classList.add('active');

  /*
  // Check If The Current Slide Is The First
  if (currentSlide == 1) {
    prevBtn.classList.add('disabled');
  } else {
    prevBtn.classList.remove('disabled');
  }

  // Check If The Current Slide Is The Lirst
  if (currentSlide == slidesCount) {
    nextBtn.classList.add('disabled');
  } else {
    nextBtn.classList.remove('disabled');
  }*/

}

// Remove Al Active Classes
function removeAllActive() {

  sliderImages.forEach(function (img) {
    img.classList.remove('active');
  });

  paginationBullets.forEach(function (li) {
    li.classList.remove('active');
  });

}