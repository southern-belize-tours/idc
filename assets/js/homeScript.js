/*var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
x = w.innerWidth || e.clientWidth || g.clientWidth,
y = w.innerHeight|| e.clientHeight|| g.clientHeight;

function setSizedSources(names){
  let mainDiv = document.getElementById("gridImages");
  let imageElements=[];
  if(mainDiv==null)
  {
    let mainDivs = document.getElementsByClassName("grid-container");
    for(let i=0;i<mainDivs.length;++i)
    {
      //imageElements=imageElements.push(mainDivs[i].getElementsByClassName("grid-image"));
      Array.prototype.push.apply(imageElements,mainDivs[i].getElementsByClassName("grid-image"));
    }
  }
  else
  {
    imageElements = mainDiv.getElementsByClassName("grid-image");
  }
  let imageSrcEndString = "";
  if(x>=768)imageSrcEndString="300";
  else if(x>=680)imageSrcEndString="200";
  else if(x>=525)imageSrcEndString="240";
  else if(x>=425)imageSrcEndString="160";
  else if(x>=375)imageSrcEndString="150";
  else if(x>=320)imageSrcEndString="130";
  else imageSrcEndString="200";
  imageSrcEndString = imageSrcEndString+".jpg";
  for(let i=0;i<imageElements.length;++i)
 {
    imageElements[i].src="images/square/"+names[i]+"/"+names[i]+imageSrcEndString;
  }
}

window.onload=function(){
  setSizedSources(imageNames);
};

window.onresize=function(){
  x = w.innerWidth || e.clientWidth || g.clientWidth,
  setSizedSources(imageNames);
} */


/* Purpose: Gets the number of columns for grid-item-pic from the #gridImages
 *          element. Rather lengthy function call, decided to make its own
 *
 * Paremeters:
 *  Name        Description
 *  ----        -----------
 *  el          The target element of the click function, the drop icon
 *
 * Returns nothing
 *
 */
function computeGridImageColumns()
{
    return window.getComputedStyle
        (document.getElementById("gridImages")).getPropertyValue
        ("grid-template-columns").split(" ").length;
}


/* Purpose: Toggles the drop arrow along with the hidden text elements on click of the icon
 * 
 * Paremeters: 
 *  Name        Description
 *  ----        -----------
 *  el          The target element of the click function, the drop icon
 *  
 * Returns nothing 
 * 
 */
function toggleOpen(el)
{
    el.classList.toggle("open"); 
    if (el.parentElement.getElementsByClassName("textHidden").length > 0) {
        el.parentElement.getElementsByClassName("textHidden")[0].classList.toggle("visible"); 
    }

}


/* Purpose: Adds a css class to hide elements in the list, starting at the second row
 *          assuming they are grid images
 *
 * Paremeters:
 *  Name        Description
 *  ----        -----------
 *  elList      List of html elements, grid-image-pic in this case
 *  numColumns  Determines when to start hiding grid images, is a pre-computed css property
 *
 * Returns nothing
 *
 */
function hideRows(elList, numColumns) {
    if (!elList || numColumns == null) return; //Best to avoid console errors 
    //A true secret: actually shows grid images that should be shown as well for resize purposes
    for (let i = 0; i < numColumns; ++i) {
        if (elList[i].classList.contains("hidden")) {
            elList[i].classList.toggle("hidden");
        }
    }
    for (let i = numColumns; i < elList.length; ++i) {
        if (!elList[i].classList.contains("hidden")) {
            elList[i].classList.toggle("hidden"); 
        }
    }
    document.getElementById("loadMoreToursBtn").innerHTML = "Load More Tours";
    document.getElementById("loadMoreToursBtn").classList.remove("topMargin");
}


/* Purpose: Removes a css class to hide elements in the list, assuming they are grid images
 *
 * Paremeters:
 *  Name        Description
 *  ----        -----------
 *  elList      List of html elements, grid-image-pic in this case
 *
 * Returns nothing
 *
 */
function showAllRows(elList) {
    if (!elList) return; //Best for now to just avoid console errors 
    for (let i = 0; i < elList.length; ++i) {
        if (elList[i].classList.contains("hidden")) {
            elList[i].classList.toggle("hidden"); 
        }
    }
    document.getElementById("loadMoreToursBtn").innerHTML = "Show Less Tours"; 
    document.getElementById("loadMoreToursBtn").classList.add("topMargin");
}


/* Purpose: Determines whether or not to show rows or to hide them. 
 *
 * Paremeters:
 *  Name        Description
 *  ----        -----------
 *  elList      List of html elements, grid-image-pic in this case
 *  hidden      Boolean value determining which function to call
 *
 * Returns updated variable. Either we are hiding or not. 
 *
 */
function toggleRows(elList, hidden) {
    console.log("in toggle rows"); 
    if (hidden) showAllRows(elList);
    else hideRows(elList, computeGridImageColumns()); 
    return !hidden; 
}

//Adds the toggle open function call to the click function of all grid image arrow icons 
let arrowIcons = document.getElementsByClassName("arrowIcon");
for (let i = 0; i < arrowIcons.length; ++i)
{
    arrowIcons[i].onclick = function () { toggleOpen(arrowIcons[i]) }; 
}

var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth  || e.clientWidth  || g.clientWidth,
    y = w.innerHeight || e.clientHeight || g.clientHeight;

let gridImages = document.getElementById("gridImages").getElementsByClassName("grid-item-pic"); 
let numColumns = computeGridImageColumns(); 
hideRows(gridImages, numColumns); 
let hidden = true; //Keeps track of if we are hiding the rows or not, allows us to avoid a computationally-extensive toggle function handler. 
document.getElementById("loadMoreToursBtn").onclick = function () { hidden = toggleRows(gridImages, hidden) }; 


window.addEventListener('resize', function (event) {
    x = w.innerWidth || e.clientWidth || g.clientWidth; 
    y = w.innerHeight || e.clientHeight || g.clientHeight;
    if (hidden) hideRows(gridImages, computeGridImageColumns()); 
});