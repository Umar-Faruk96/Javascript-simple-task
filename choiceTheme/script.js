// choice page theme color JS

const themeColors = document.getElementById("themeColors");
const output = document.querySelector("html");

themeColors.addEventListener("change", () => {
  const choice = themeColors.value;
  const color = "white";

  // ADD SWITCH STATEMENT
  switch (choice) {
    case "black":
      update(choice, color);
      break;

    case "purple":
      update(choice, color);
      break;

    case "yellow":
      update(choice, "darkred");
      break;

    case "psychedelic":
      update("lime", "purple");
      break;

    default:
      update(choice, "black");
  }
});

function update(bgColor, textColor) {
  output.style.backgroundColor = bgColor;
  output.style.color = textColor;
}
