/* simple calendar JS */

const selectCalendar = document.getElementById("calendar");
const list = document.querySelector(".monthBox");
const monthName = document.querySelector(".monthName");

selectCalendar.addEventListener("change", () => {
  const choiceMonth = selectCalendar.value;

  // ADD CONDITIONAL HERE

  if (
    choiceMonth === "April" ||
    choiceMonth === "June" ||
    choiceMonth === "September" ||
    choiceMonth === "November"
  ) {
    days = 30;
  } else if (choiceMonth === "February") {
    days = 28;
  } else {
    days = 31;
  }

  createCalendar(days, choiceMonth);
});

function createCalendar(days, choiceMonth) {
  list.innerHTML = "";
  monthName.textContent = choiceMonth;
  for (let i = 1; i <= days; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

createCalendar(31, "January");
