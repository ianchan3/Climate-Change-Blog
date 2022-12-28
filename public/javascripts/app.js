const div1 = document.querySelector(".circle1");
const div2 = document.querySelector(".circle2");
const div3 = document.querySelector(".circle3");
const div4 = document.querySelector(".circle4");
const div5 = document.querySelector(".circle5");
const div6 = document.querySelector(".circle6");
const showModel1 = document.querySelector(".model1");
const showModel2 = document.querySelector(".model2");
const showModel3 = document.querySelector(".model3");
const showModel4 = document.querySelector(".model4");
const showModel5 = document.querySelector(".model5");
const showModel6 = document.querySelector(".model6");
const close1 = document.querySelector(".close1");
const close2 = document.querySelector(".close2");
const close3 = document.querySelector(".close3");
const close4 = document.querySelector(".close4");
const close5 = document.querySelector(".close5");
const close6 = document.querySelector(".close6");
const modelContent = document.querySelector(".model-content");


div1.addEventListener("click", (e) => {
  e.preventDefault();
  showModel1.style.display = "block";
});

div2.addEventListener("click", (e) => {
  e.preventDefault();
  showModel2.style.display = "block";
});

div3.addEventListener("click", (e) => {
  e.preventDefault();
  showModel3.style.display = "block";
});

div4.addEventListener("click", (e) => {
  e.preventDefault();
  showModel4.style.display = "block";
});

div5.addEventListener("click", (e) => {
  e.preventDefault();
  showModel5.style.display = "block";
});

div6.addEventListener("click", (e) => {
  e.preventDefault();
  showModel6.style.display = "block";
});

close1.addEventListener("click", closeModel1);
close2.addEventListener("click", closeModel2);
close3.addEventListener("click", closeModel3);
close4.addEventListener("click", closeModel4);
close5.addEventListener("click", closeModel5);
close6.addEventListener("click", closeModel6);

console.log(close);

function closeModel1() {
  // modelContent.classList.add("slide-up")
  // setTimeout(() => {
    showModel1.style.display = "none";
  //   modelContent.classList.remove("slide-up")
  // }, 500)
}
function closeModel2() {
  // modelContent.classList.add("slide-up")
  // setTimeout(() => {
    showModel2.style.display = "none";
  //   modelContent.classList.remove("slide-up")
  // }, 500)
}
function closeModel3() {
  // modelContent.classList.add("slide-up")
  // setTimeout(() => {
    showModel3.style.display = "none";
  //   modelContent.classList.remove("slide-up")
  // }, 500)
}
function closeModel4() {
  // modelContent.classList.add("slide-up")
  // setTimeout(() => {
    showModel4.style.display = "none";
  //   modelContent.classList.remove("slide-up")
  // }, 500)
}
function closeModel5() {
  // modelContent.classList.add("slide-up")
  // setTimeout(() => {
    showModel5.style.display = "none";
  //   modelContent.classList.remove("slide-up")
  // }, 500)
}
function closeModel6() {
  // modelContent.classList.add("slide-up")
  // setTimeout(() => {
    showModel6.style.display = "none";
  //   modelContent.classList.remove("slide-up")
  // }, 500)
}




// circles = document.querySelectorAll(".circle");

// circles.forEach((circle) => {
//   circle.addEventListener("click", (e) => {
//     e.target.style.display = "block";
//   })
// })