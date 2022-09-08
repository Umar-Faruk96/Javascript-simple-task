// Movies Exercise Script

const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2018, rating: 3 },
  { title: "d", year: 2017, rating: 4.5 },
];

/* 
Exercise Logics:
1. Sort all the movies from year 2018 with higher rating than 4 with their rating in descending order and print their title on the console
*/

const sortMovie = (array) => {
  const movieList = [];
  for (let item of array) {
    if (item.year === 2018 && item.rating > 4) {
      movieList.push(item);
      movieList.sort((a, b) => a.rating - b.rating);
      movieList.reverse();
    }
  }
  for (let movie of movieList) console.log(movie.title);
};

const output = sortMovie(movies);
console.log(output);

// Mosh Implementation

const movieTitles = movies
  .filter((e) => e.year === 2018 && e.rating > 4)
  .sort((a, b) => a.rating - b.rating)
  .reverse()
  .map((e) => e.title);

console.log(movieTitles);
