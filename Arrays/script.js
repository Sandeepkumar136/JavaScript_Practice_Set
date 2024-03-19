// Arrays

/*


In JavaScript, arrays are used to store multiple values in a single variable. Arrays can contain any data type, including strings, numbers, objects, and even other arrays. You can define an array using square brackets [] and populate it with elements separated by commas.


 */



// Example

let vishual_name=["Ganga","Vishnu",'Ram'];
console.log(vishual_name);


// Array Length
const x=[1,2,3,4,5,6,7,8,9];
console.log(x.length);


// converting string
console.log(x.toString());

// at choosing array

console.log(vishual_name.at(0));


/* The join() method also joins all array elements into a string.

It behaves just like toString(), but in addition you can specify the separator: */


console.log(x.join("-"));



/*

The pop() method removes the last element from an array:

*/

console.log(x.pop());
{
    const x=[85,87,54,25,34,16];
    x.pop();
    console.log(x);
}


/*
The push() method adds a new element to an array (at the end):
*/


{
    const x=[85,87,54,25,34,16];
    x.pop();
    x.push(136)
    console.log(x);
}



/*
 The shift() method removes the first array element and "shifts" all other elements to a lower index.
 */


 {
    const user_name=["Sandeep Kumar", ]
 }