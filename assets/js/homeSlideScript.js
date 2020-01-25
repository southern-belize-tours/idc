var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
x = w.innerWidth || e.clientWidth || g.clientWidth,
y = w.innerHeight|| e.clientHeight|| g.clientHeight;

function setSizedSources(names){
  let mainDiv = document.getElementById("gridImages");
  let imageElements = mainDiv.getElementsByClassName("grid-image");
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

  if(x<=425)
  {
    document.getElementById("cruiseImage").src="images/home/cruiseLogo200.jpg";
    document.getElementById("hotelImage").src="images/home/hotelLogo200.png";
  }
  else{
    document.getElementById("cruiseImage").src="images/home/cruiseLogo300.jpg";
    document.getElementById("hotelImage").src="images/home/hotelLogo300.png";
  }

}

function setSlideImages(){
  x=w.innerWidth || e.clientWidth || g.clientWidth;
  let t = document.getElementById("turtle");
  if(x>375)t.src="images/home/turtle/turtle1024.jpeg";
  else t.src="images/home/turtle/turtle600.jpeg";
  t = document.getElementById("beach2");
  if(x>375)t.src="images/home/beach2/beach21024.jpeg";
  else t.src="images/home/beach2/beach2900.jpeg";
  t = document.getElementById("quetz");
  if(x>700)t.src="images/home/quetz/quetz1024.jpeg";
  else t.src="images/home/quetz/quetz700.jpeg";
  t=document.getElementById("ruins");
  if(x>450)t.src="images/home/ruins/ruins1024.jpeg";
  else t.src="images/home/ruins/ruins450.jpeg";
  t=document.getElementById("coatimundi");
  if(x>800)t.src="images/home/coatimundi/coatimundi1024.jpeg";
  else t.src="images/home/coatimundi/coatimundi450.jpeg";
}

window.onload=function(){
  //This image names list will expand as we add more tour content
  let imageNames = ["nimLiSquare","lubaantunSquare","spiceFarmSquare","southStaanSquare",
    "waterfallsSquare","inlandBlueHoleSquare","blueHoleSquare","southSnorkelSquare","southFishSquare","atmSquare","caveTubingSquare","twinCitiesSquare","zipliningSquare","zooSquare","yachtSquare"];
  setSizedSources(imageNames);
  setSlideImages();
};

window.onresize=setSlideImages();
