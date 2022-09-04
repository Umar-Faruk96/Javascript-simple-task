// Grade Exercise Script

/* 
 Student's Grade Calculated from Average Number over the Subjects. Grade Systems are:
 1. Grade F: 1 to 59
 2. Grade D: 60 to 69
 3. Grade C: 70 to 79
 4. Grade B: 80 to 89
 5. Grade A: 90 to 100
*/

const marks = [40, 60, 60, 70, 70, 40];

const calculateAverage = (array) => {
  let sum = 0;

  for (let item of array) sum += item;

  console.log(sum);

  return sum / array.length;
};

const calculateGrade = (marks) => {
  const average = calculateAverage(marks);
  const gradeA = 100;
  const gradeB = 90;
  const gradeC = 80;
  const gradeD = 70;
  const gradeF = 60;

  if (average < gradeF) return `Grade: F`;
  if (average < gradeD) return `Grade: D`;
  if (average < gradeC) return `Grade: C`;
  if (average < gradeB) return `Grade: B`;
  if (average <= gradeA) return `Grade: A`;
  return `Not Possible! Some errors occurred`;
};

console.log(calculateGrade(marks));
