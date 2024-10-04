/*
 *
 * When code is outdated or inefficient, it often goes through a process called “refactoring.”
 *  Refactoring code is the process of restructuring that code without changing its original behavior.
For the first part of this assignment, revisit your code from ALAB 308.3.1, wherein you create a script that parsed CSVs. 
Now that you have knowledge of arrays and objects, how would you change your approach to this problem? 
Take a few minutes to examine and refactor the code before continuing.
 *
 */


const testData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26 "

let myData = testData.split("\n");

let rows = myData.toString();
let sepRows = rows.split(",");

for(let  i = 0; i < sepRows[0].length; i++){
    console.log(sepRows[i] + " " + sepRows[i+1] + " "  + sepRows[i+2] + " " + sepRows[i+3])
    i = i + 3;
}
