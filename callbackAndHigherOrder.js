////////// PROBLEM 1 //////////

/*
  Write a function called multiply that takes in three parameters: two numbers and a callback function.  
  Invoke the callback, passing in the product of the two numbers multiplied as the argument. 
*/

let multiply = (num1, num2, answer) => answer(num1 * num2)

function multiply2(num1,num2, answer){
  answer(num1*num2)
  return answer;
}

// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

 multiply(4, 3, answer => { 
  console.log('The answer is ' + answer)
}) 

multiply2(4, 4, answer => { console.log('The answer is ' + answer)}) // 16

////////// PROBLEMS 2 - 6 //////////

// The names array will be used in problems 2 - 6.

// Do not edit the code below.
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler','Tyler', 'Blaine', 'Cahlan']
// Do not edit the code above.



////////// PROBLEM 2 //////////

/*
  Write a function called first that takes in two parameters, an array and a callback function.
  Then invoke the callback function, passing in the first element in the array as it's argument.
*/



let first = (arr, cb) => cb(arr[0])

function first2(array, firstName){
  firstName(names[0]) 
  return firstName;
}


// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

first(names, firstName => {
   console.log('The first name in names is ' + firstName)
 })

 first2(names, firstName => {
  console.log('The first name in names is ' + firstName)
})

////////// PROBLEM 3 //////////

/*
  Write a function called last that takes in an array and a callback function. 
  Then invoke the callback, passing in the last element in the array as the argument.
*/

let last = (arr, lastElem) => lastElem(arr[arr.length -1])


// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

 last(names, lastName => {
  console.log('The last name in names is ' + lastName)
})



////////// PROBLEM 4 //////////

/*
  Write a function called contains that takes in three parameters: an array, a name and a callback.  
  Check if the name exists in the array. 
  If it does, invoke the callback with true as the argument. 
  If the name does not exist, invoke the callback with false as the argument.
*/

let contains2 = (arr, name, cb) => cb(arr.includes(name))

let contains = (arr, name, cb) => {
  if (arr.includes(name)) {
    return cb(true)
    
  } else{
    return cb(false)
  }
}


// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

 contains(names, 'Colt', result => {
   if(result === true){
     console.log('Colt is in the array')
   } else {
    console.log('Colt is not in the array')
   }
 })

 contains2(names, 'Colt', result => {
  if(result === true){
    console.log('Colt is in the array')
  } else {
   console.log('Colt is not in the array')
  }
})




////////// PROBLEM 5 //////////

/*
  Write a function called uniq that takes in an array and a callback function.
  Remove any duplicate values from the array, and invoke the callback with the modified array as an argument.
  Hint: you can use a nested for loop to do this.
*/
           //     i                                 j=4
//var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan']

let uniq = (arr, cb) => {
  for (let i=0; i < arr.length; i++){
    for (let j=i+1; j < arr.length; j++){
      if (arr[i] === arr[j]){          //                        
        arr.splice(j,1) //  ['Tyler', 'Cahlan', 'Ryan', 'Colt' 'Blaine', 'Cahlan']
               j--    ; //  decrement j index to account for the splice.
      }
    }
  }
  cb(arr)             // ['Tyler', 'Cahlan', 'Ryan', 'Colt' 'Blaine']
}

/*
  Invoke the uniq function, passing in the names array from above and a callback function.
  The callback function should take in one parameter called uniqArr.
  The callback should print a string that says:
  'The new names array with all the duplicate items removed is [UNIQARRPARAM].'
*/


uniq(names, uniqArr =>  {
  return console.log(`The new names array with all the duplicate items removed is ${uniqArr}`)
})



////////// PROBLEM 6 //////////

/* 
  Write a function called each that takes in an array of names and a callback function. 
  For each name in the array, invoke the callback and pass in the name and the name's index as arguments.
*/
let each = (arr, cb) => arr.forEach((valueofElem, i) => cb(valueofElem, i))




/*
  Invoke the each function, passing in the names array and a callback function.
  The callback function should take in two parameters, item and index.
  The callback should print a string that says:
  'The item at index [INDEXPARAM] is [ITEMPARAM].'
*/

each(names, (item, index) => {
  return console.log(`The item at index ${index} is ${item}.`)
})

////////// PROBLEM 7 //////////

/*
  Write a function called getUserById that takes in three parameters:
  an array of objects (users), an id and a callback, and searches for the user with a matching id.
  When the correct user object is found, invoke the callback with the user object as an argument.
*/

// Do not edit the code below.
var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
]
// Do not edit the code above.

let getUserById2 = (users_arr, given_id, cb) => {
  let user_obj = {}
  for (let i=0; i < users_arr.length; i++){
    let current_user = users_arr[i];
    if (users_arr[i].id === given_id.id){
      //return cb(users_arr[i]) 
      return cb(current_user)
    }
  }
  return {email: "NA", name: "NA", address: "NA"}
}

let getUserById = (arr, id, cb) => arr.forEach(elem => elem.id === id ? cb(elem) : null)



// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

getUserById(users, '16t', user => {
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address) 
 })

getUserById2(users, '16t', user => {
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address) 
 })
////////// CHALLENGE //////////

/*
  You'll be writing a higher order function that returns
  another function. 

  Create a function called addingFactory that takes in
  one parameter (it will be a number).

  addingFactory should return a function that takes in
  one parameter (this will be another number).

  The (inner) function that's being returned should add
  the two parameters together and return the sum.
*/

let addingFactory = (a) => (b) => a+b;

let addingFactory2 = a => {
  return function(b){
    return a+b
  }
}

/*
  Now that you have addingFactory, you can create other
  functions from it. 

  You're going to invoke addingFactory and save the result
  to a new variable. 

  Create a variable called addTen and set it equal to 
  the invocation of addingFactory passing in the number
  10 as an arguemnt.
*/

let addTen = addingFactory(10)


/*
  Now the inner function is stored in the addTen variable! 

  Call the addTen function passing in another number and
  console log the result.

  Call it a second time, passing in a different number
  to see the different outputs.
*/

console.log(addTen(5))
console.log(addTen(1010))

/*
  Let's make another function from the addingFactory. 

  This time, pass in your favorite number and name
  the variable addNUMBER with the name of the number
  you chose. 

  Once you create that, you can invoke the function
  to add any number to your favorite number!
*/

let addFive = addingFactory(5)

console.log(addFive(50))
console.log(addFive(100))