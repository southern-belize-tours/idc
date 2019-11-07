    
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      if(slides==null || dots==null || slides.length==0 || dots.length==0)
      {
          return; 
      }
      if (n > slides.length) {slideIndex = 1}    
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
    }

    var slideIndex = 1;
    showSlides(slideIndex);


document.addEventListener('keyup', (e) => {
    if(e.code=="ArrowRight")//right 
    {
        plusSlides(1);
    }
    else if(e.code=="ArrowLeft")//left
    {
        plusSlides(-1);
    }
});

