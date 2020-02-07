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
      if(slides.length==0 || dots.length==0)return;
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
          let imgs = dots[i].getElementsByTagName("img");
          for(j=0;j<imgs.length;++j)
          {
            imgs[j].style.display='none';
          }
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

    //Toggles the all tours, blue arrow
    function myFunction() {
      document.getElementById("myDropdown").classList.toggle("show");
      let img = document.getElementById("dropIndicatorTour");
      let src = img.src.split("/");
      src = src[src.length-1];
      if(src=="icon1.jpg")
      {
        img.src="images/icon2.jpg";
      }
      else img.src="images/icon1.jpg";
    }

    function cruiseFunction(){
      document.getElementById("cruiseDropdown").classList.toggle("show");
      let img=document.getElementById("dropIndicatorCruise");
      let src = img.src.split("/");
      src = src[src.length-1];
      if(src=="icon1.jpg")
      {
        img.src="images/icon2.jpg";
      }
      else img.src="images/icon1.jpg";
    }

    //Toggles the menu, green arrow
    function dropFunction() {
      document.getElementById("mainDropdown").classList.toggle("show");
      let img = document.getElementById("dropIndicator");
      let src = img.src.split("/");
      src = src[src.length-1];
      if(src=="icon1.jpg")
      {
        img.src="images/icon2.jpg";
      }//We want both of our dropdown arrows toggled down if we click out of the main dropdown
      else reduceMenu();
    }

    //Should reduce both the dropdown arrows. Called when the user clicks outside of the mobile menu
    function reduceMenu()
    {
      document.getElementById("dropIndicator").src="images/icon1.jpg";
      document.getElementById("dropIndicatorTour").src="images/icon1.jpg";
      document.getElementById("dropIndicatorCruise").src="images/icon1.jpg";
        if(document.getElementById("myDropdown").classList.contains("show"))
          document.getElementById("myDropdown").classList.toggle("show");
        if(document.getElementById("mainDropdown").classList.contains("show"))
          document.getElementById("myDropdown").classList.toggle("show");
        if(document.getElementById("cruiseDropdown").classList.contains("show"))
          document.getElementById("cruiseDropdown").classList.toggle("show");
    }

    function setIconSrc(){
      document.getElementById("dropIndicator").src="images/icon1.jpg";
      document.getElementById("dropIndicatorTour").src="images/icon1.jpg";
      document.getElementById("dropIndicatorCruise").src="images/icon1.jpg";
    }

    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
      if (!event.target.matches('.dropbtn')&& !(event.target.id==="dropIndicatorTour"))
      {
        reduceMenu();
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

    function addGridStripes()
    {
      let itms = document.getElementsByClassName("grid-item");
      if (itms.length==0)itms=document.getElementsByClassName("grid-item-pic");
      for(let i=0;i<itms.length;++i)
      {
        //For our cruise and hotel logos we don't want them to change
        if(itms[i].parentElement.parentElement.getAttribute("class")=="grid-two")continue;
        let stripe = document.createElement("DIV");
        stripe.setAttribute("class","stripe");
        itms[i].insertBefore(stripe, itms[i].firstChild);
      }
    }

      setIconSrc();
      addGridStripes();
