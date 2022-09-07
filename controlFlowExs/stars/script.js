// Stars printed every row based on the input Exercise Script

const stars = 10;

const showStars = (rows) => {
  let star = " ";
  for (let row = 1; row <= rows; row++) {
    star += "*";
    console.log(star);
  }
};

console.log(showStars(stars));
