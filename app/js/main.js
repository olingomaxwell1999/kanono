// variables

//Initial way to declare variables
var foo = "foo";

console.log(foo);

//Modern way to declare variables

let car = "bmw";

console.log(car);

const bus = "Mercedes";

console.log(bus);

//Data Types in Javascript
//Premetive Datatypes

//null
let empty = null;

console.log(empty);

//Number
let num = 10;

console.log(num);

//Boolean
let bull = true;

console.log(bull);

//String
let name = "Nairobits";

console.log(name);

//Undefined
let zero = undefined;

console.log(zero);

//BigInt
let num1 = 10000000000000000000000000000000;

console.log(num1);

//Reference Datatypes in Javascript
//Array
let arr = [1, 2, 3, 4, 5];

console.log(arr);

//how to access array elements
console.log(arr[0]);

//Object
let favorite = {
  name: "bmw",
  color: "blue",
  year: 2023,
  isConvertible: false,
  topSpeed: 360,
};

console.log(favorite);

//how to access object properties
console.log(favorite.name);

//Function
function greetings() {
  console.log("Hello World");
}

greetings();

//String Methods
let team = "Manchester";
//slice - This creates a clone of a sting from the specified index

console.log(team.slice(3, 10));

//length - checks ho many characters are present in a string

console.log(team.length);

//trim - Removers whitespaces from both sides of a string
let team1 = "   Manchester   ";

console.log(team1.trim());

//Concat - Joins two or more strings
let str = "Manchester";
let str1 = "United";

console.log(str.concat(" ", str1));

//Replace - Replaces a string with another string

console.log(str.replace("Manchester", "Arsenal"));

//ChartAt - Returns the character at the specified index

console.log(str.charAt(3));

//Split - Converts a string into an array

console.log(str.split(","));

//IndexOf - Returns the index of the first occurence of a specified value in a string

console.log(str.indexOf("a"));

//ToUppercase - Converts a string to uppercase

console.log(str.toUpperCase());

//ToLowercase - Converts a string to lowercase

let upp = "CAT";

console.log(upp.toLowerCase());

//Array Methods
let teams = ["Man u", "Man City", "Liverpool"];

//Pop - Removes the last element of an array and returns that element

console.log(teams.pop());

//Concat - Joins two or more arrays
let teams1 = ["Aston Villa", "Nottinghum Forest"];

console.log(teams.concat(teams1));

//Splice - Removes elements from an array and, if necessary, inserts new elements in their place

console.log(teams.splice(0, 1, "Chelsea"));

//Unshift - adds an element at the beginning of an array

// console.log(team1.unshift("Chelsea"));

//Shift - removes the first element of an array and returns that element

console.log(teams.shift());

//Join - Joins all elements of an array into a string

console.log(teams.join(" "));

//Length - returns the length of the array

console.log(teams.length);

//IndexOf - returns the index of the first occurence of a specified value in an array

//ForEach -

//Push - Adds an element to the end of an array

console.log(teams.push("Chelsea"));

//Map - Creates a new array with the results of calling a provided function on every element in the array

let nums = [1, 2, 3, 4, 5];

let Teams = ["Man u", "Man City", "Liverpool"];

let People = [
  {
    name: "Moses",
    age: 20,
    color: "green",
    country: "sudan",
    isMarried: true,
  },
  {
    name: "Purity",
    age: 19,
    color: "red",
    country: "uganda",
    isMarried: true,
  },
  {
    name: "Gloria",
    age: 30,
    color: "yellow",
    country: "South Africa",
    isMarried: false,
  },
  {
    name: "Laurence",
    age: 12,
    color: "purple",
    country: "Finland",
    isMarried: false,
  },
];

let newSet = [[1, 2, 3, 4], 3, [5, 6, 7, 8], [9, 10, 11, 12]];

console.log(
  nums.map((num) => {
    return num * 2;
  })
);

console.log(
  Teams.map((Team) => {
    return Team + " United";
  })
);

console.log(
  People.map((Person) => {
    return Person.age;
  })
);

console.log(newSet[3].map((num) => num * 3));

//Filter - Creates a new array with all elements that pass the test implemented by the provided function

//Reduce - Applies a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value
