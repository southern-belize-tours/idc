function getHeight(dropdownParam) {
    let initialHeight = 0; 
    initialHeight = 100;
    let el = document.getElementById(dropdownParam);
    let numChildren = el.getElementsByTagName('a').length; 
    initialHeight = numChildren * 20; 
    el.style.height = initialHeight; 
    console.log(el); 
    console.log(initialHeight); 

}


document.getElementById("dropdownArea").onclick = function () {
    console.log(event.target); 
    if (event.target == document.getElementById("allTourBtn") ||
        event.target == document.getElementById("landToursText") ||
        event.target == document.getElementById("landBurger"))
    {
        //event.target.classList.toggle("show");
        document.getElementById("idc").classList.toggle("show");
        document.getElementById("landBurger").classList.toggle("hamburger"); 
    }
    else if (event.target == document.getElementById("cruiseTourBtn")   ||
             event.target == document.getElementById("cruiseToursText") || 
             event.target == document.getElementById("cruiseBurger")) {
        console.log("clicked it");
        document.getElementById("cruiseTourDropdown").classList.toggle("show"); 
        document.getElementById("cruiseBurger").classList.toggle("hamburger"); 
    }
    else {
        if (document.getElementById("idc").classList.contains("show")) {
            document.getElementById("idc").classList.toggle("show"); 
           //ocument.getElementById("
        }
        if (document.getElementById("cruiseTourDropdown").classList.contains("show")) {
            document.getElementById("cruiseTourDropdown").classList.toggle("show"); 
            document.getElementById("cruiseBurger").classList.toggle("hamburger"); 
        }
        document.getElementById("dropdownArea").classList.toggle("hamburger");
    }

}

let divs = document.getElementById("dropdownContents").getElementsByTagName("div");
divs[divs.length - 1].classList.add("rounded"); 

//document.getElementById("dropdownArea").classList.toggle("show");
//getHeight("idc"); 