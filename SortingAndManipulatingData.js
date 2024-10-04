// The initial array of arrays (result from Part 3)
const csvArray = [
    ["ID", "Name", "Occupation", "Age"],
    ["42", "Bruce", "Knight", "41"],
    ["57", "Bob", "Fry Cook", "19"],
    ["63", "Blaine", "Quiz Master", "58"],
    ["98", "Bill", "Doctor’s Assistant", "26"]
];

// Step 1: Convert the 2D array to an array of objects
const arrayOfObjects = csvArray.slice(1).map(row => {
    return {
        id: row[0],
        name: row[1],
        occupation: row[2],
        age: row[3]
    };
});

// Step 2: Remove the last element from the array
arrayOfObjects.pop();

// Step 3: Insert the new object at index 1
arrayOfObjects.splice(1, 0, {
    id: "48",
    name: "Barry",
    occupation: "Runner",
    age: "25"
});

// Step 4: Add the new object to the end of the array
arrayOfObjects.push({
    id: "7",
    name: "Bilbo",
    occupation: "None",
    age: "111"
});

// Display the updated array
console.log(arrayOfObjects);

// Step 5: Calculate the average age
let totalAge = 0;

arrayOfObjects.forEach(person => {
    totalAge += parseInt(person.age); // Convert age from string to number
});

const averageAge = totalAge / arrayOfObjects.length;

// Output the average age
console.log("Average Age:", averageAge);
