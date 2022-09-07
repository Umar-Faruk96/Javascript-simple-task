// Moving an Element Exercise Script

const numbers = [1, 2, 3, 4];

const moveElement = (array, index, offset) => {
  const newArray = [...array];
  const position = index + offset;

  if (position >= newArray.length || position < 0) {
    console.error("Invalid Offset");
    return;
  }

  const element = newArray.splice(index, 1)[0];

  console.log(newArray);

  newArray.splice(position, 0, element);

  return newArray;
};

// positive input

console.log(moveElement(numbers, 1, 2));

// negative input

console.log(moveElement(numbers, 2, -2));