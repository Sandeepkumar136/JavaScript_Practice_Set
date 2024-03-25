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

        console.log(Student_name);
        
    };


    // The reverse() method reverses the elements in an array:

    {
        const numbers=[1,2,23,4,8,65,14,75,974];
        numbers.reverse();
        console.log(numbers)
    };


    /**
     * By combining sort() and reverse(), you can sort an array in descending order:
     */

    {
        const failed_students=['hasan ali', 'ramzan ali', 'bishal saha', 'Raman kumar'];
        console.log(failed_students.sort().reverse());
    };


    // ES2023 added the toSorted() method as a safe way to sort an array without altering the original array.

    {
        const contents=['Sandeep kumar', 'arvind kumar', 'ravi kumar', 'subodh gupta', 'nazim ali'];
        const New_contents=contents.toSorted();
        console.log(New_contents);
    };
    /**
     * NOTE: This feature is not working in ms edge 2024 version march this mathod name is toSorted and toReverse
     */





    /**
     * If numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
     * Because of this, the sort() method will produce incorrect result when sorting numbers.
     */



    {
        const num=[2,4,6,8,10,12,14,16,18,20];
        console.log(num.sort((a, b)=> b-a));
        
    };

    {
        const num=[50,45,40,35,30,25,20,15,10,5];

        num.forEach((index)=>{
            console.log(index)
        })

        console.log(num.sort(function myfunction(a,b){
           return  a-b
        }));

        console.log(num);
    };



    // Using a sort function, like explained above, you can sort an numeric array in random order
    {
        const num=[5,1,4,10,12,24,35,21,74,16,25,46,24,17,19];
        console.log(num.sort(() =>  0.5-Math.random()));

    };



    /**
     * THE FISHER YATES METHOD
     */

    /*
    The points.sort() method in the example above is not accurate. It will favor some numbers over others.

    The most popular correct method, is called the Fisher Yates shuffle, and was introduced in data science as early as 1938!

    In JavaScript the method can be translated to this:
     */

    {

        const num=[3,6,9,12,15,18,21,24,27,30];
        for(let i=num.length -1; i>0; i--){
            let x=Math.floor(Math.random()*(i+1));
            let y=num[i];

            num[i]=num[x];
            num[x]=y;
            
        }
        console.log(num)
    };



    /**
     * WEEKEND WORKS
     */
    // Sort an array of numbers in ascending order.

    {
        const numbers=[2,4,5,1,6,7,9,2,6,4,2,3,4];
        console.log(numbers.sort((a,b)=>a-b));
    }
    // Sort an array of words in alphabetical order.
    {
        const words=['doing', 'coming', 'youtube', 'instagram', 'whatsapp'];
        console.log(words.sort());
    };

    // Sort an array of ages in descending order.
    {
        let Ages=[12,52,13,10,17,18,19,15,18,16,14];
        function myAgeFun(a,b){
            return b-a;
        }
        console.log(Ages.sort(myAgeFun));
    };


    // Find if a specific number exists in an array of numbers.
    {
        function myTaskfunction(){
            let numpy=[5,8,6,1,7,9,2,4,15,46];
            console.log(numpy.indexOf(2));
        }
        myTaskfunction()
    }


    // Search for a specific word in an array of words.

    {
        const user_names=['Raman jha', 'ganga parsad', 'ashok gupta', 'Sandeep kumar'];
        console.log(user_names.indexOf('Sandeep kumar')+1);
    };

    // Calculate the sum of all numbers in an array.
    {
        function MySumFraction(numbers){
        let total =0;
        for(let number of numbers){
            total += number;
        }
        return total;
    }
    const amounts=[25,14,16,18,24,16,14,10,12,18,19];
    console.log(MySumFraction(amounts));
    };

    // Remove any duplicate numbers from an array.
    {
        function myDupifunction(numpy){
            let duplinum=[];
            for(let number of numpy){
                if(!duplinum.includes(number)){
                    duplinum.push(number)
                }
            }
            return duplinum;
        }
        let duplicatenums=[2,1,9,4,6,9,7,2,1,5,4,6];
        function MyAssendFuntion(a,b){
            return a-b;
        }
        let result=duplicatenums.sort(MyAssendFuntion);
        console.log(myDupifunction(duplicatenums))
    };

    // Check if all elements in an array are even numbers.

    {
        function EvenCheckingFunction(Array_Name){
            let result=[];
            for(let i in Array_Name){
                if (i % 2===0){
                    result.push("This is Even Number")
                }else{
                    result.push('This is Odd Number')
                }
            }
            return result;
        }
        let Arr_One=[2,4,6,8,10,20];
        let Arr_Two=[1,2,3,4,5,6,7,8,9,10];
        console.log(EvenCheckingFunction(Arr_One).concat(EvenCheckingFunction(Arr_Two)));
    };

    /**
     * WeekEnd Task Completed
     */
    // Using Math.min() on an Array

    {
        const Qualified_students=[54,35,34,85,62,95,75,35,46,52,85,65,45];
        console.log(`This is Accend Numbers ${Qualified_students.
        sort((a,b)=>a-b)}`);
        function Lowest_factor_func(Arr){
            const Highest_Number='This is Highest Number '+Math.max.apply(null, Arr);
            const Lowest_Number='This is Lowest Number '+Math.min.apply(null, Arr);
            return [Highest_Number, Lowest_Number];
        };
        console.log(Lowest_factor_func(Qualified_students));


    };
    



    /**
     * Array Lteration Mathods
     */