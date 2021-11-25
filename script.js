// select value and buttons
const value = document.querySelector("#value");
const buttons = document.querySelectorAll(".btn");
// set inital count
let count = 0;

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const target = e.target;
    if (target.classList.contains("decrease")) {
      count--;
    } else if (target.classList.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    if (count < 0) {
      value.style.color = "#fb7756";
    }
    if (count > 0) {
      value.style.color = "#1ac0c6";
    }
    if (count === 0) {
      value.style.color = "#2a6fdb";
    }
    value.textContent = count;
  });
});
