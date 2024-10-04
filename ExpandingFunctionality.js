/*
 *
Now that you are familiar with your code, and perhaps have improved it, it is time to expand upon its functionality.
Begin with the following task:
Declare a variable that stores the number of columns in each row of data within the CSV.
Instead of hard-coding four columns per row, expand your code to accept any number of columns. This should be calculated dynamically based on the first row of data.
For example, if the first row of data (the headings) has eight entries, your program should create eight entries per row. You can safely assume that all rows that follow will contain the same number of entries per row.
After you have implemented the above:
Store your results in a two-dimensional array.
Each row should be its own array, with individual entries for each column.
Each row should be stored in a parent array, with the heading row located at index 0.
Cache this two-dimensional array in a variable for later use.
 */


const testData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26 "

let myData = testData.split("\n");

let rows = myData.toString();
let sepRows = rows.split(",");

//Initilizing the 2d Array for later use
let ret = []

for(let  i = 0; i < sepRows.length; i++){

    ret.push(sepRows[i] + " " + sepRows[i+1] + " "  + sepRows[i+2] + " " + sepRows[i+3]);
    i = i + 3;
}


console.log('The number of colums is ' + ret.length )


