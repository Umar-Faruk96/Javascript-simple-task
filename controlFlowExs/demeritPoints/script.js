// Demerit Points Exercise Implementation

/* 
Exercise Logic:
1. Car Speed Limit: 70
2. every 5 over mandatory 70 speed limit, demerit point 1
3. over 12 demerit points the license is suspended 
*/

const checkSpeed = (speed) => {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed < speedLimit + kmPerPoint) return "ok";

  const points = Math.floor((speed - speedLimit) / kmPerPoint);
  const pointLimit = 12;

  if (points >= pointLimit) return "license suspended";
  else return `Points: ${points}`;
};

console.log(checkSpeed(130));
