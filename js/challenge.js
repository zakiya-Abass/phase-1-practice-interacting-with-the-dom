const counterElement = document.getElementById("counter");
const pauseBtn = document.getElementById("pause");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const inputBox = document.querySelector("#comment-form");
let count = 0;

const counter = function () {
  let interval = setInterval(function () {
    count += 1;
    counterElement.innerHTML = count;
  }, 1000);
  function stopCount() {
    const pause = clearInterval(interval);
    pauseBtn.innerHTML = "Resume";
  }
  function plusCounter() {
    counterElement.innerHTML = count += 1;
  }
  function minusCounter() {
    counterElement.innerHTML = count -= 1;
  }
  pauseBtn.addEventListener("click", stopCount);
  plusBtn.addEventListener("click", plusCounter);
  minusBtn.addEventListener("click", minusCounter);
};

window.addEventListener("load", counter);
