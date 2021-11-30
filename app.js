//Carosal 0
const gap = 16;
const carousel = document.getElementById("carousel"),

  content = document.getElementById("content"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");

next.addEventListener("click", e => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "none";
  }
});
prev.addEventListener("click", e => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.display = "none";
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));

//Carosal 1
const gap1 = 16;
const carousel1 = document.getElementById("carousel1"),

  content1 = document.getElementById("content1"),
  next1 = document.getElementById("next1"),
  prev1 = document.getElementById("prev1");

next1.addEventListener("click", e => {
  carousel1.scrollBy(width1 + gap1, 0);
  if (carousel1.scrollWidth !== 0) {
    prev1.style.display = "flex";
  }
  if (content1.scrollWidth, - width1 - gap1 <= carousel1.scrollLeft + width1) {
    next1.style.display = "none";
  }
});
prev1.addEventListener("click", e => {
  carousel1.scrollBy(-(width1 + gap1), 0);
  if (carousel1.scrollLeft - width1 - gap1 <= 0) {
    prev1.style.display = "none";
  }
  if (!content1.scrollWidth1 - width1 - gap1 <= carousel1.scrollLeft + width1) {
    next1.style.display = "flex";
  }
});

let width1 = carousel1.offsetWidth;
window.addEventListener("resize", e => (width1 = carousel1.offsetWidth));

//Carosal 2
const gap2 = 16;
const carousel2 = document.getElementById("carousel2"),

  content2 = document.getElementById("content2"),
  next2 = document.getElementById("next2"),
  prev2 = document.getElementById("prev2");

next2.addEventListener("click", e => {
  carousel2.scrollBy(width2 + gap2, 0);
  if (carousel2.scrollWidth !== 0) {
    prev2.style.display = "flex";
  }
  if (content2.scrollWidth, - width2 - gap2 <= carousel2.scrollLeft + width2) {
    next2.style.display = "none";
  }
});
prev2.addEventListener("click", e => {
  carousel2.scrollBy(-(width2 + gap2), 0);
  if (carousel2.scrollLeft - width2 - gap2 <= 0) {
    prev2.style.display = "none";
  }
  if (!content2.scrollWidth2 - width2 - gap2 <= carousel2.scrollLeft + width2) {
    next2.style.display = "flex";
  }
});

let width2 = carousel2.offsetWidth;
window.addEventListener("resize", e => (width2 = carousel2.offsetWidth));


//Carosal 3
const gap3 = 16;
const carousel3 = document.getElementById("carousel3"),

  content3 = document.getElementById("content3"),
  next3 = document.getElementById("next3"),
  prev3 = document.getElementById("prev3");

next3.addEventListener("click", e => {
  carousel3.scrollBy(width3 + gap3, 0);
  if (carousel3.scrollWidth !== 0) {
    prev3.style.display = "flex";
  }
  if (content3.scrollWidth, - width3 - gap3 <= carousel3.scrollLeft + width3) {
    next3.style.display = "none";
  }
});
prev3.addEventListener("click", e => {
  carousel3.scrollBy(-(width3 + gap3), 0);
  if (carousel3.scrollLeft - width3 - gap3 <= 0) {
    prev3.style.display = "none";
  }
  if (!content3.scrollWidth2 - width3 - gap3 <= carousel3.scrollLeft + width3) {
    next3.style.display = "flex";
  }
});

let width3 = carousel3.offsetWidth;
window.addEventListener("resize", e => (width3 = carousel3.offsetWidth));


//Carosal 4
const gap4 = 16;
const carousel4 = document.getElementById("carousel4"),

  content4 = document.getElementById("content4"),
  next4 = document.getElementById("next4"),
  prev4 = document.getElementById("prev4");

next4.addEventListener("click", e => {
  carousel4.scrollBy(width4 + gap4, 0);
  if (carousel4.scrollWidth !== 0) {
    prev4.style.display = "flex";
  }
  if (content4.scrollWidth, - width4 - gap4 <= carousel3.scrollLeft + width4) {
    next4.style.display = "none";
  }
});
prev4.addEventListener("click", e => {
  carousel4.scrollBy(-(width4 + gap4), 0);
  if (carousel4.scrollLeft - width4 - gap4 <= 0) {
    prev4.style.display = "none";
  }
  if (!content4.scrollWidth2 - width4 - gap4 <= carousel4.scrollLeft + width4) {
    next4.style.display = "flex";
  }
});

let width4 = carousel4.offsetWidth;
window.addEventListener("resize", e => (width4 = carousel4.offsetWidth));

function myFunction() {
  var input = document.getElementById("Search");
  var filter = input.value.toLowerCase();
  var nodes = document.getElementsByClassName('target');

  for (i = 0; i < nodes.length; i++) {
    if (nodes[i].innerText.toLowerCase().includes(filter)) {
      nodes[i].style.display = "block";
    } else {
      nodes[i].style.display = "none";
    }
  }

  input.onfocus = function() {
    document.getElementById("message").style.display = "block";
  }


  input.onblur = function() {
    document.getElementById("message").style.display = "none";
  }
}






