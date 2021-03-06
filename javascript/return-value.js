/* Return a Value from a Function with Return */

function plusThree(num) {
  return num + 3;
}
var answer = plusThree(5); // 8

// plusThree takes an argument for num and returns a value equal to num + 3.

/**
We can pass values into a function with arguments.
We can use a return statement to send a value back out of a function.
**/

/* Understanding Undefined Value returned from a Function */

var sum = 0;
function addSum(num) {
  sum = sum + num;
}
addSum(3); // sum will be modified but returned value is undefined

//addSum is a function without a return statement. The function will change the global sum variable but the returned value of the function is undefined.

/**
A function can include the return statement but it does not have to.
In the case that the function doesn't have a return statement, when you call it, the function processes the inner code but the returned value is undefined.
**/
