var divs = ["Menu1", "Menu2", "Menu3", "Menu4"];
var visibleDivId = null;
function toggleVisibility(divId) {
  if(visibleDivId === divId) {
    //visibleDivId = null;
  } else {
    visibleDivId = divId;
  }
  hideNonVisibleDivs();
}
function hideNonVisibleDivs() {
  var i, divId, div;
  for(i = 0; i < divs.length; i++) {
    divId = divs[i];
    div = document.getElementById(divId);
    if(visibleDivId === divId) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }
}

// ----------------------------

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#333",
  "#333",
  "#333",
  "#333",
  "#333",
  "#333",
  "#333",
  "#333",
  "#333",
  "#333",
  "#333",
  "#333",
  "#333",
  "#333",
  "#333",
  "#333",
  "#333",
  "#333",
  "#333",
  "#333",
  "#333",
  "#333",
  "#333"
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});
function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}
animateCircles();


// -------------------


function cardHoverEffect(){
  document.querySelectorAll('.images .cnt')
  .forEach(function(cnt){
      cnt.addEventListener('mousemove',function(dets){
          document.querySelector('.cursor').children[dets.target.dataset.index].style.opacity=1;
          showingImage = dets.target
          document.querySelector('.cursor').children[dets.target.dataset.index].style.transform=`translate(${dets.clientX}px,${dets.clientY}px)`;
          showingImage.style.filter="grayscale(1)";
          document.querySelector('.work ').style.backgroundColor = '#' + dets.target.dataset.color;
      })
      cnt.addEventListener('mouseleave',function(dets){
          document.querySelector('.cursor').children[showingImage.dataset.index].style.opacity=0;
          showingImage.style.filter="grayscale(0)";
          document.querySelector('.work ').style.backgroundColor = '#f0f0f0';
      })
  })
}

cardHoverEffect();

// -------------------

function scrollr(){
  var right=document.querySelector('.blog-section');
  right.scrollBy(350,0);
}

function scrolll(){
  var left=document.querySelector('.blog-section');
  left.scrollBy(-350,0);
}

// -------------------

var before=  document.querySelector('#before');
var after= document.querySelector('#after');

function replace(){
  before.style.display='none';
  after.style.display='block';
}

function replaceAgain(){
  before.style.display='block';
  after.style.display='none';
}


var before2=  document.querySelector('#before2');
var after2= document.querySelector('#after2');

function replace1(){
  before2.style.display='none';
  after2.style.display='block';
}

function replaceAgain2(){
  before2.style.display='block';
  after2.style.display='none';
}


