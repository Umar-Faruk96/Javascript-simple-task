// Find String Properties of an Object Exercise Script

const prayer = {
  name: "Prayer Duty",
  amount: 5,
  times: 5,
  prayerName: "Prayer of morning",
  prayerCalling: "5 times",
};

const showProperties = (obj) => {
  for (let key in obj)
    typeof obj[key] === "string" ? console.log(`${key} ${obj[key]}`) : " ";
};

console.log(showProperties(prayer));
