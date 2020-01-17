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
}

window.onload=function(){
  setSizedSources(imageNames);
};
