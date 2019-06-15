/*2.1 We saw that we can pass functions as arguments to other functions. Your task is to write a function that takes another function as an argument and runs it.*/

'use strict';

function foo(func) {
  func();
}

function bar() {
  console.log('Hello, I am bar!');
}

foo(bar);

// Do not change or remove anything below this line
module.exports = foo;



/*2.2 You must write a function that takes 4 arguments.
    A start value
    An end value
    A callback to call if the number is divisible by 3
    A callback to use if the number is divisible by 5
/The function should first generate an array containing values from start value to end value (inclusive).
/Then the function should take the newly created array and iterate over it, and calling the first callback if the array value is divisible by 3.
/The function should call the second callback if the array value is divisible by 5.
/Both functions should be called if the array value is divisible by both 3 and 5.*/

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];

  // Replace this comment and the next line with your code
  //console.log(startIndex, stopIndex, threeCallback, fiveCallback, numbers);

  for (let i = startIndex; i <= stopIndex; i++){
    numbers.push(i);
  }
  console.log(numbers);

  for (let j = 0; j < numbers; j++ ){
    if (numbers[j] % 3 === 0 && numbers[j] % 5 === 0){
      threeCallback(numbers[j]);
      fiveCallback(numbers[j]);
    } else if (numbers[j] % 3 === 0){
      threeCallback(numbers[j]);
    } else if(numbers[j] % 5 === 0){
      fiveCallback(numbers[j]);
    }
  }
}

function sayThree(number) {
  // Replace this comment and the next line with your code
  console.log(number + " is divisible by three");
}

function sayFive(number) {
  // Replace this comment and the next line with your code
  console.log(number + " is divisible by five");
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;




//another way
function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
    const numbers = [];
    if(startIndex<stopIndex && (startIndex!=0 && stopIndex!=0))
    {
        for(j=0,i=startIndex;i<stopIndex;j++,i++)
        numbers[j]=i;
    }
    for(i=0;i<numbers.length;i++)
    {
        if(i%3==0)
        {
            threeCallback();
        }
        if(i%5==0)
        {
            fiveCallback();
        }
    }
  }
  function saysThree()
  {
      console.log("three");
  }
  function sayFive(){
      console.log("five");
      
  }
  threeFive(10, 15, saysThree, sayFive);

/*2.3 Please solve this problem:
    Basic Algorithm Scripting: Repeat a String Repeat a String
2.3.1: with a for loop.
2.3.2: with a while loop.
2.3.3: with a do...while loop */

'use strict';

// Use a 'for' loop
function repeatStringNumTimesWithFor(str, num) {
  // eslint-disable-next-line prefer-const
  let result = '';

  // Replace this comment and the next line with your code
  for (let i = 1; i <= num; i++){
    result += str;
  }
  return result;
}

console.log('for', repeatStringNumTimesWithFor('abc', 3));


// Use a 'while' loop
function repeatStringNumTimesWithWhile(str, num) {
  // eslint-disable-next-line prefer-const
  let result = '';

  // Replace this comment and the next line with your code
  while (num > 0){
    result += str;
    num --;
  }
  return result;
}

console.log('while', repeatStringNumTimesWithWhile('abc', 3));


// Use a 'do...while' loop
function repeatStringNumTimesWithDoWhile(str, num) {
  // eslint-disable-next-line prefer-const
  let result = '';

  // Replace this comment and the next line with your code
  do {
    result += str;
    num --;
  } while (num > 0); 

  return result;
}

console.log('do-while', repeatStringNumTimesWithDoWhile('abc', 3));

// Do not change or remove anything below this line
module.exports = {
  repeatStringNumTimesWithFor,
  repeatStringNumTimesWithWhile,
  repeatStringNumTimesWithDoWhile,
};

/*2.4 Some practice with objects:
    Object Oriented Programming: Define a Constructor Function
    > Object Oriented Programming: Use a Constructor to Create Objects*/



function stars() {
  // add your code here
  this.name = "Rigel";
  this.color = "brown";
  this.type = "terrier";
  this. age = 100005;
};

const hound = new star();
console.log(hound);

// Do not change or remove anything below this line
module.exports = hound;


/* 2.5 Nested loops
    Basic JavaScript: Nesting For Loops*/

'use strict';

function multiplyAll(arr) {
  // eslint-disable-next-line
  let product = 1;

  // Replace this comment and the next line with your code
  for (var i=0; i<arr.length; i++){
    for (var j=0; j<arr[i].length; j++){
        product = product * arr[i][j]
    }
  }

  return product;
}

const result = multiplyAll([[1, 2], [3, 4], [5, 6]]);
console.log(result); // 720

// Do not change or remove anything below this line
module.exports = multiplyAll;


//2.6
const flattenedArr=[];
const arr2d = [[1, 2], [3, 4], [5, 6]];
index=0;
for(i=0;i<arr2d.length;i++)
{
    for(j=0;j<arr2d[i].length;j++)
    {   
        flattenedArr[index]=arr2d[i][j];
        index++;
    }
}
for(i=0;i<flattenedArr.length;i++)
console.log(flattenedArr[i]);

// another way

/*2.6 We did some work with arrays:
const arr = [1, 2, 3];
We can also nest arrays inside arrays like this:
const arr2d = [[1, 2], [3, 4], [5, 6]];
(for math people you can think of this as a matrix)
How would you flatten out all the items of an array with 2 dimensions into a one-dimensional array? Flattening out the arr2d array above would result in:
const flattenedArr = [1, 2, 3, 4, 5, 6];
How about 3 dimensions? How about with K dimensions? What if you didn't know how deep the array was nested? (You don't have to write code for this but think about it.)*/

'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

let my2dArr = [];
function flattenArray2d(arr) {
    // Replace this comment and the next line with your code
    for (let i = 0; i < arr2d.length; i++) {
        for (let j = 0; j < arr2d[i].length; j++) {
        my2dArr.push(arr2d[i][j]);
        }
    }
    return my2dArr;
};


let my3dArr = [];
function flattenArray3d(arr) {
  // Replace this comment and the next line with your code
  for (let i = 0; i < arr3d.length; i++) {
    for (let j = 0; j < arr3d[i].length; j++) {
      for (let k = 0; k < arr3d[j].length; k++) {
        my3dArr.push(arr3d[i][j][k]);
      }
    }
  }
  return my3dArr;
};

console.log(flattenArray2d(arr2d)); // -> [1, 2, 3, 4, 5, 6]
console.log(flattenArray3d(arr3d)); // -> [1, 2, 3, 4, 5, 6, 7, 8]

// Do not change or remove anything below this line
module.exports = {
  flattenArray2d,
  flattenArray3d,

//Write a function that would allow you to do this:


function createBase(val) {
    return function(x) {
        return x + val;
    };
};

const addSix = createBase(6);

console.log (addSix(10)); // returns 16
console.log (addSix(21)); // returns 27

module.exports = createBase;
