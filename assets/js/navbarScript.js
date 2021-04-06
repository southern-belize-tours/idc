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
    if (event.target == document.getElementById("allTourBtn")) {
        //event.target.classList.toggle("show");
        document.getElementById("idc").classList.toggle("show");
    }
    else if (event.target == document.getElementById("cruiseTourBtn")) {
        document.getElementById("cruiseTourDropdown").classList.toggle("show"); 
    }
    else {
        if (document.getElementById("idc").classList.contains("show")) {
            document.getElementById("idc").classList.toggle("show"); 
        }
        if (document.getElementById("cruiseTourDropdown").classList.contains("show")) {
            document.getElementById("cruiseTourDropdown").classList.toggle("show"); 
        }
        document.getElementById("dropdownArea").classList.toggle("hamburger");
    }

}

//document.getElementById("dropdownArea").classList.toggle("show");
//getHeight("idc"); 