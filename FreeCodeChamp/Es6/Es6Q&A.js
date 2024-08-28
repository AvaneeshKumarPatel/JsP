// Question ==>>
// Modify the function sum using the rest parameter in such a way that the function sum is able to take any number of arguments and return their sum.

 // Answer =>>

const sum = (...args) => {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
      total += args[i];
    }
    return total;
  }
  
    console.log(sum(0,1,3,5))  // the output will be 9
  

    // Question =>>
    //Copy all contents of arr1 into another array arr2 using the spread operator.

    // Answer =>>

    const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
    let arr2;
    
    arr2 = [...arr1];  // Change this line
    
    console.log(arr2);  // the output will be [ 'JAN', 'FEB', 'MAR', 'APR', 'MAY' ]
    


    //  Question ==>
  //  Replace the two assignments with an equivalent destructuring assignment. 
  //  It should still assign the variables today and tomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object.


  const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
  
  const {today,tomorrow} = HIGH_TEMPERATURES;
  
   console.log(today,tomorrow) // the output will be 77 80 , it is the best feature of the JS Es6
  
  // Only change code above this line

  // Question =>>

  //Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables highToday and highTomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object.

// Answer =>>

const HIGH_TEMPERATURESe = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
    
  const {today:highToday,tomorrow:highTomorrow} = HIGH_TEMPERATURESe;
  
  
  // Only change code above this line

               console.log(highToday)           // the output will be 77



 
 //Question=>>           
//Replace the two assignments with an equivalent destructuring assignment. 
//It should still assign the variables lowToday and highToday the values of today.low and today.high from the LOCAL_FORECAST object.
 
// Answer
const LOCAL_FORECAST = {
   yesterday: { low: 61, high: 75 },
   today: { low: 64, high: 77 },
   tomorrow: { low: 68, high: 80 }
 };
 
 // Only change code below this line
 
   const {today:{ low: lowToday, high: highToday} } = LOCAL_FORECAST;
 
 // Only change code above this line
              
                            
  // Question =>> 
 // Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, and b receives the value stored in a.

// Answer >>
let a = 8, b = 6;
// Only change code below this line
[a,b] = [b,a]


//Question =>>
//Use a destructuring assignment with the rest syntax to emulate the behavior of Array.prototype.slice(). removeFirstTwo() 
//should return a sub-array of the original array list with the first two elements omitted.




function removeFirstTwo(list) {

  const [a,b, ...shorterList] = list;

  return shorterList ;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);

console.log(sourceWithoutFirstTwo)  // the output will be [ 3, 4, 5, 6, 7, 8, 9, 10 ]




// Question =>>
//Use destructuring assignment within the argument to the function half to send only max and min inside the function.

// Answer 

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = ({min,max}) => (max + min) / 2.0;

// Only change code above this line




// Question >>
 
//Use template literal syntax with backticks to create an array of list element (li) strings. Each list element's text should be one of the array elements from the failure property on the result object and have a class attribute with the value text-warning. The makeList function should return the array of list item strings.

//Use an iterator method (any kind of loop) to get the desired output (shown below).

// [
//   '<li class="text-warning">no-var</li>',
//   '<li class="text-warning">var-on-top</li>',
//   '<li class="text-warning">linebreak</li>'
// ]



// Answer =>>

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [];
   for(let i = 0; i < arr.length; i++){

     failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
   }
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);

console.log(failuresList)


// Question =>>

//Use object property shorthand with object literals to create and return an object with name, age and gender properties.

const createPerson = (name, age, gender) => { 
  // Only change code below this line
  return {
    name,
    age ,
    gender
  };
  // Only change code above this line
};


console.log(createPerson("aman",32 ,"male"))
