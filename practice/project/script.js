"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnClosedModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
const timer = document.getElementById("time");
function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

overlay.addEventListener("click", closeModal);

btnClosedModal.addEventListener("click", closeModal);

let second = 70;
const tick = function () {
  const timerId = setInterval(function () {
    let min = String(Math.trunc(second / 60)).padStart(2, 0);
    let sec = String(second - min * 60).padStart(2, 0);
    timer.innerText = `${min}:${sec}`;
    second--;
    if (second === 50) {
      document.body.style.display = "none";
    } else if (second ===20) {
      clearInterval(timerId);
       document.body.style.display = "block";
    }
  }, 1000);
};
tick();


const element = document.createElement("div");
const tim = document.querySelector(".time");
element.classList.add("div-message");
element.innerText = "This is Progmaticaly added tags";
element.style.backgroundColor = "white";
element.style.margin = "30px";
document.body.append(element);
element.innerHTML = `it is additional inner html <button class="btn"> Got it</button>`;

tim.setAttribute("getu", "add-new"); //adding atribute
console.log(tim.getAttribute("getu"));
