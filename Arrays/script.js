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
};


/*
The push() method adds a new element to an array (at the end):
*/


{
    const x=[85,87,54,25,34,16];
    x.pop();
    x.push(136)
    console.log(x);
};



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

 };


 /* 
 Array elements are accessed and it can changed using their index number:
  */

 {
    const Roll_number=[235,845,457,254,156,758,544,484,154];
    console.log(Roll_number[2]);

    Roll_number[2]=284;
    console.log(Roll_number[2]);
 };


 /* 
 The length property provides an easy way to append a new element to an array:
  */


 {
    let amounts=[12,54,25,17,19,25,48,54,7,85];
    amounts[amounts.length]=99;
    console.log(amounts);
 };


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
};
         //Merging Multible Arrays

{
    const classes=['Montesry', 'LKG', "UKG"];
    const classes2=[1,2,3,4,5,6,7,8,9];
    const classes3=[10,11,12];
    console.log(classes.concat(classes2,classes3)) ;
};


/* 
copyWithin() copies array elements to another position in an array, overwriting existing values:
 */

//Copy to index 2, all elements from index 0:

{
    const courses=["frontend developer", 'backend developer', 'full stack development', 'web development'];
    courses.map(element=> element.toUpperCase());

    courses.copyWithin(3,0);
    console.log(courses);
};


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
};


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
        };


        /*
        If the end argument is omitted, like in the first examples, the slice() method slices out the rest of the array.
         */


        {
            const Multible_of_Two=[2,4,6,8,10,12,14,16,18,20];
            let Config=Multible_of_Two.slice(4);
            console.log(Config);
        };
// NOTE:  slice() method doesn't modify the original array, it returns a new array with the specified portion of the original array.


                //   SEARCH MATHOD

    /**
     * Note: The first item has position 0, the second item has position 1, and so on.
     */

    // The indexOf() method searches an array for an element value and returns its position.


    {
        const Student_name=["Sandeep Kumar", 'Rahul kumar', 'Ramzan Ali', 'Ram kumar', 'Krishna kumar'];
        let config=Student_name.indexOf('Ram kumar');
        console.log("Which i searched in array is position is "+config);
    };
    

    // Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.


    {
        const Student_name=["Sandeep Kumar", 'Rahul kumar', 'Ramzan ALi', 'Ram kumar', 'Krishna kumar','Raunak kumar','Ramzan ALi'];
        let config=Student_name.lastIndexOf("Ramzan ALi");
        console.log("Which i searched of last occurrence in array "+config);
    };


    /*
    ECMAScript 2016 introduced Array.includes() to arrays. This allows us to check if an element is present in an array (including NaN, unlike indexOf).
     */

    {
        const passes_out_student=[256,148,234,125,856,145,264,125];
        console.log(passes_out_student.includes(125));
    };


    /* JAVASCRIPT ARRAY find()*/
    {
        const invoice_numbers=[10,12,15,17,16,14,21];

        function Find_Index_Value(value, index, array){
            return value>20;
        }
        const shortlisted_invoice_number=invoice_numbers.find(Find_Index_Value);

        console.log(shortlisted_invoice_number);
    };

    

    /**
     * NOTE: that the function takes 3 arguments:
     * The item value
     * The item index
     * The array itself
     */

    {
        const doc_numbers=[241,548,241,654,874,124,124,121];
        console.log(doc_numbers.find(function(value, index, array){return value< 242}));
    };

    {
        const vol_number=[241,215,184,162,245,184,352,146,751,245,154];
        console.log(vol_number.find(myfunction=(value, index)=>{return value<147}));
    };

    /*ES2023 added the findLast() method that will start from the end of an array and return the value of the first element that satisfies a condition.*/


    {
        const celcius=[12,14,15,16,24,12,20,24];
        console.log(celcius.findIndex(value=>value>17));
    };


    /*
    SORTING AN ARRAY
    */

    // The sort() method sorts an array alphabetically:

    {
        const Student_name=['Sandeep Kumar','Shoquat imam', 'Rajat Sarkar', 'Kishan Singh', 'Ravi kumar saha', 'pappu kumar', 'Saurav Sharma'];

        Student_name.sort();
m
        console.log(Student_name);
        
    }


    // The reverse() method reverses the elements in an array:

    {
        
    }