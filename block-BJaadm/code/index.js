let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// Create an array peopleName and store value of sex key from persons array
let peopleName = persons.map((v) => v.name );

// Create an array peopleGrade and store the value of grade key from persons array
let peopleGrade = persons.map((v) => v.grade);

// Create an array peopleSex and store the value of sex key from persons array
let peopleSex = persons.map((v) => v.sex);

// Log the filtered named of people in peopleName that starts with 'J' or 'P'
persons.filter((v)=>v.name.charAt(0)===("J") || v.name.charAt(0) ===("P"))

// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
let peopleNames = persons.filter((v) => {
  if ( v.name.startsWith("A") || v.name.startsWith("C")){
     return true;
  }
})
console.log(peopleName.length);

// Log all the filtered male ('M') in persons array
let malePersons = persons.filter((v) => {
  if ( v.sex === "M" ){
    return true
  }
  else {
    return false
  }
})

// Log all the filtered female ('F') in persons array
let femalePersons = persons.filter((v) => {
  if ( v.sex === "F" ){
    return true
  }
  else {
    return false
  }
})

// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array

let femaleName = persons.filter((v) => (v.name.startsWith("J") || v.name.startsWith("C")) &&  v.sex === "F");

// Log all the even numbers from peopleGrade array
let evenGrade = persons.filter((v) => v.grade % 2 === 0);

// Find the first name that starts with 'J' in persons array and log the object
let firstNameJ = persons.filter((v) => {
  if ( v.name.startsWith('J') ){
    return true
  }
  else {
    return false
  }
})
console.log(firstNameJ);

// Find the first name that starts with 'P' in persons array and log the object
let firstNameP = persons.filter((v) => {
  if ( v.name.startsWith('P') ){
    return true
  }
  else {
    return false
  }
})
console.log(firstNameP);

// Find the first name that starts with 'J', grade is greater than 10 and is a female
let gradeGreat = 0;
function nameWithJ(array){
  array.forEach((v) =>{ 
    if ( v.name.startsWith("J") && gradeGreat < v.grade  ){
        gradeGreat = v.grade
    }
  })
  console.log(gradeGreat);
}

// Filter all the female from persons array and store in femalePersons array
let femalePerson = persons.filter((v)=> v.sex === "F");

// Filter all the male from persons array and store in malePersons array
let malePerson = persons.filter((v)=> v.sex === "F");

// Find the sum of all grades and store in gradeTotal
let gradeTotal = persons.reduce((acc,g) => {
  return acc + g.grade
} ,0)

// Find the average grade
function avgGrade(array){
  let sum = 0;
  let avg;
  for ( let i = 0 ; i < array.length ; i++ ){
    sum = sum + array[i].grade
  }
    avg = sum / array.length
    return parseInt(avg)
}

// Find the average grade of male
function avgGradeOfMale(array){
  let sum = 0;
  let avg;
  array.forEach((v)=>{
    if ( v.sex === "M" ){
    sum = sum + v.grade;
  }
   }
    )
     avg = sum / array.length;
      return avg
}

// Find the average grade of female
let sum = 0;
let avg;
let avgGradeOfFemale = persons.forEach((v)=>{
    if ( v.sex === "F" ){
      sum = sum + v.grade; 
    }  
})
   avg = sum / array.length;
   console.log(avg);

// Find the highest grade
function highestGrade(array){
  return[...array].sort((a,b) => a.grade - b.grade).pop();
}

// Find the highest grade in male
let highestMale = 0;
for ( let  i = 0 ; i < persons.length ; i++ ){
    if ( highestMale < persons[i].grade && persons[i].sex === "M" ){
      highestMale = persons[i].grade
    }
}

// Find the highest grade in female
let highestFemale = 0;
persons.forEach((v)=> {
  if ( highestFemale < v.grade && v.sex === "F" ){
    highestFemale = v.grade
  }
})
console.log(highestFemale);

// Find the highest grade for people whose name starts with 'J' or 'P'
function highestGrade(array){
  let highest = 0;
  array.forEach((v)=>{
    if ( highest < v.grade && v.name.startsWith("P") || v.name.startsWith("J")){
      highest = v.grade
    }
  })
}
console.log(highest);

// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
peopleGrade.sort((a,b)=> a - b);

// Sort the peopleGrade in descending order
peopleGrade.sort((a,b)=> b - a);

// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array

let mutateCloneSort = [...peopleGrade].sort((a,b)=>  b - a);

// Sort the array peopelName in ascending `ABCD..Za....z`
let peopleNameSort = [...peopleName].sort();

// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
let ReversePeopelNameSort = [...peopleName].sort().reverse();
