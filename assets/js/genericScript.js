/*Generic script for most pages. Includes slideshow implementation, changing the
   indicator for the dropbtn on media, and toggling showing the dropdown menu*/

    var slideIndex=1;
    showSlides(slideIndex);

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

    //When the user on computer enters the <- or -> keys, the images incrememnt
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

    //Toggles the tours, blue arrow
    function myFunction() {
      document.getElementById("myDropdown").classList.toggle("show");
      let img = document.getElementById("dropIndicatorTour");
      let src = img.src.split("/");
      src = src[src.length-1];
      if(src=="icon3.png")
      {
        img.src="images/icon4.png";
      }
      else img.src="images/icon3.png";
    }

    //Toggles the menu, green arrow
    function dropFunction() {
      document.getElementById("mainDropdown").classList.toggle("show");
      let img = document.getElementById("dropIndicator");
      let src = img.src.split("/");
      src = src[src.length-1];
      if(src=="icon1.png")
      {
        img.src="images/icon2.png";
      }
      else img.src="images/icon1.png";
    }

    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
      if (!event.target.matches('.dropbtn'))
      {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++)
        {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show'))
          {
            openDropdown.classList.remove('show');
          }
        }
      }
    }
