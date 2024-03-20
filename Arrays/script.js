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


 /* 
 The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
  */


 {
    const user_name=["Sandeep Kumar", "I am a frontend Developer"]
    user_name.shift();
    user_name.unshift("Rahul kumar")
    console.log(user_name);

 }


 /* 
 Array elements are accessed and it can changed using their index number:
  */

 {
    const Roll_number=[235,845,457,254,156,758,544,484,154];
    console.log(Roll_number[2]);

    Roll_number[2]=284;
    console.log(Roll_number[2]);
 }


 /* 
 The length property provides an easy way to append a new element to an array:
  */


 {
    let amounts=[12,54,25,17,19,25,48,54,7,85];
    amounts[amounts.length]=99;
    console.log(amounts);
 }


// NOTE: Using delete() leaves undefined holes in the array.
//       Use pop() or shift() instead.


/* 
The concat() method creates a new array by merging (concatenating) existing arrays:
 */
{
    const student_name_section_A=['Sandeep Kumar', 'Riya Agarwal', 'Nitu Saha'];
    const student_name_section_B=['Rockey','Ganga Ram', 'Mahavir'];
    const student_name_in_all_class=student_name_section_A.concat(student_name_section_B);
    console.log(student_name_in_all_class);
}
         //Merging Multible Arrays

{
    const classes=['Montesry', 'LKG', "UKG"];
    const classes2=[1,2,3,4,5,6,7,8,9];
    const classes3=[10,11,12];
    console.log(classes.concat(classes2,classes3)) ;
}


/* 
copyWithin() copies array elements to another position in an array, overwriting existing values:
 */

//Copy to index 2, all elements from index 0:

{
    const courses=["frontend developer", 'backend developer', 'full stack development', 'web development'];
    courses.map(element=> element.toUpperCase());

    courses.copyWithin(3,0);
    console.log(courses);
}


/*
NOTE: The copyWithin() method overwrites the existing values.

      The copyWithin() method does not add items to the array.

      The copyWithin() method does not change the length of the array.
*/



/* 
The flat() method creates a new array with sub-array elements concatenated to a specified depth.

*/

{
    const multipleArr=[[12,45,87],[48,75,15,17],[78,25,34,16,85]];
    console.log(multipleArr.flat())
}


/*
Splicing and Slicing Arrays
        The splice() method adds new items to an array.
        The slice() method slices out a piece of an array.
 */

        /*
        The splice() method can be used to add new items to an array:
         */
        {
            const Multible_of_Five=[5,10,15,20,25,30,35,40,45,50];
            Multible_of_Five.splice(0,1,2,4);
            console.log(Multible_of_Five);
        }