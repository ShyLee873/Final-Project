// slideshow

var slideIndex = 1;
showSlides(slideIndex);

function plusDivs(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  let slides = document.getElementsByClassName('slide');
 // let captions = document.getElementsByClassName('caption');
  
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  } 
  
  slides[slideIndex-1].style.display = "block";   
}