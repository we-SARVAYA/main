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


// ------------Faq----------

const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion, index) => {
  const header = accordion.querySelector(".accordion__header");
  const content = accordion.querySelector(".accordion__content");
  const icon = accordion.querySelector("#accordion-icon");

  header.addEventListener("click", () => {
    const isOpen = content.style.height === `${content.scrollHeight}px`;

    accordions.forEach((a, i) => {
      const c = a.querySelector(".accordion__content");
      const ic = a.querySelector("#accordion-icon");

      c.style.height = i === index && !isOpen ? `${c.scrollHeight}px` : "0px";
      ic.classList.toggle("ri-add-line", i !== index || !isOpen);
      ic.classList.toggle("ri-subtract-fill", i === index && !isOpen);
    });
  });
});

// -------------------------------

function revealToSpan(){
  document.querySelectorAll('.reveal')
  .forEach(function(elem){
      // Element create kiya 
      let parent = document.createElement('span');
      let child = document.createElement('span');
      // usko class di 
      parent.classList.add('parent');
      child.classList.add('child'); 
      // uss class ko appen kiya
      child.innerHTML = elem.innerHTML;
      parent.appendChild(child);
      elem.innerHTML = ""; 
      elem.appendChild(parent);
  })
}

revealToSpan();


let tl = gsap.timeline();

tl
.from(".loader .child span",{
  x: 100,
  dealy:1,
  stagger:.2,
  duration:1.4,
  ease: Power3.easeInOut
})
.to(".loader .reveal .parent .child",{
  y:'-100%',
  duration:1,
  dealy:1,
  ease: Circ.easeInOut,
  onComplete:()=>{
      document.querySelectorAll("#Visual>g>g>path, #Visual>g>g>polyline ").forEach(function(e){
          var character = e
      
          character.style.strokeDasharray = character.getTotalLength() + 'px';
          character.style.strokeDashoffset = character.getTotalLength() + 'px';
      })
  
      gsap.to('#Visual>g>g>path , #Visual>g>g>polyline',{
          strokeDashoffset:0,
          duration:2,
          ease:Expo.easeInOut,
          delay:2
      })
  }
})
.to(".loader",{
  height: 0,
  duration:1,
  ease: Circ.easeInOut
})
.to(".green",{
  height: "100%",
  duration:.8,
  top:0,
  delay: -.5,
  ease: Expo.easeInOut,onComplete: () => {
      let reveal2 = document.querySelector('.reveal-2')
      gsap.to('.char-2',{
          y: 0,
          stagger: 0.1,
          delay: 0.3,
          duration: .1
      })
  }
})
.to(".green",{
  height: 0,
  duration:1,
  delay:-.3,
  ease: Circ.easeInOut,onComplete: () => {
      let reveal2 = document.querySelector('.reveal-2')
      gsap.to('.char', {
          y: 0,
          stagger: 0.02,
          delay: 0.1,
          duration: .01
      }).to('.char-2',{
          y: 0,
          stagger: 0.1,
          delay: 0.3,
          duration: .1
      })
  }
})

// -------------------


// function animateSvg(){
  
// }
// animateSvg();


//function locoInitialize(){
//  const scroll = new LocomotiveScroll({
  //    el: document.querySelector('.hero'),
    //  smooth: true
  //});    
//}

locoInitialize();



