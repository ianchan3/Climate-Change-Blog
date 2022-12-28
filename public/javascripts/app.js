div1 = document.querySelector(".circle1");
div2 = document.querySelector(".circle2");
div3 = document.querySelector(".circle3");
div4 = document.querySelector(".circle4");
div5 = document.querySelector(".circle5");
div6 = document.querySelector(".circle6");


showModel1 = document.querySelector(".model1");
showModel2 = document.querySelector(".model2");
showModel3 = document.querySelector(".model3");
showModel4 = document.querySelector(".model4");
showModel5 = document.querySelector(".model5");
showModel6 = document.querySelector(".model6");


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




// circles = document.querySelectorAll(".circle");

// circles.forEach((circle) => {
//   circle.addEventListener("click", (e) => {
//     e.target.style.display = "block";
//   })
// })