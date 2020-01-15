var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
x = w.innerWidth || e.clientWidth || g.clientWidth,
y = w.innerHeight|| e.clientHeight|| g.clientHeight;

function setSlideImages(){
  x=w.innerWidth || e.clientWidth || g.clientWidth;
  let t = document.getElementById("turtle");
  if(x>370)t.src="images/home/turtle/turtle1024.jpeg";
  else t.src="images/home/turtle/turtle600.jpeg";
}

window.onload=function(){
  setSlideImages();
};

window.onresize=setSlideImages();
