const h1 = document.querySelector(".smooth-scroll");

const div = document.querySelector(".color-change");
h1.addEventListener("mouseenter", function (e) {
  //    alert('addEventListener:Great!')
  h1.style.color = "blue";
  h1.style.display = "none";
});

const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
  
div.addEventListener("click", function (e) {
  div.style.backgroundColor = randomColor();
});
