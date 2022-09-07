// Events Skill Test Script

// Events: Task 1 Script

const btnTask1 = document.querySelector(".off");

// task script here

btnTask1.addEventListener("click", (e) => {
  if (e.target.textContent.includes("off")) {
    e.target.textContent = "Machine is on";
  } else {
    e.target.textContent = "Machine is off";
  }
});

// Events: Task 2 script

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

function drawCircle(x, y, size) {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fill();
}

let x = 50;
let y = 50;
const size = 30;

drawCircle(x, y, size);

// task script here

const handleMovement = (e) => {
  switch (e.code) {
    case "KeyW":
      y -= 5;
      drawCircle(x, y, size);
      break;
    case "KeyS":
      y += 5;
      drawCircle(x, y, size);
      break;
    case "KeyA":
      x -= 5;
      drawCircle(x, y, size);
      break;
    case "KeyD":
      x += 5;
      drawCircle(x, y, size);
      break;
    default:
      drawCircle(x, y, size);
  }
};
window.addEventListener("keydown", handleMovement);

// Events: Task 3 script here

const buttonBar = document.querySelector(".button-bar");

// task 3 script here

const makeBgColor = (e) => {
  switch (e.target.dataset.color) {
    case "red":
      e.currentTarget.style.backgroundColor = e.target.dataset.color;
      break;
    case "yellow":
      e.currentTarget.style.backgroundColor = e.target.dataset.color;
      break;
    case "green":
      e.currentTarget.style.backgroundColor = e.target.dataset.color;
      break;
    case "purple":
      e.currentTarget.style.backgroundColor = e.target.dataset.color;
      break;
    default:
      e.currentTarget.style.backgroundColor = "white";
  }
};
buttonBar.addEventListener("click", makeBgColor);
