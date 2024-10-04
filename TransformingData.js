/**
 * 
 * 
 */
// Input data
const data = [
    ["ID", "Name", "Occupation", "Age"],
    ["42", "Bruce", "Knight", "41"],
    ["57", "Bob", "Fry Cook", "19"],
    ["63", "Blaine", "Quiz Master", "58"],
    ["98", "Bill", "Doctor’s Assistant", "26"]
  ];
  
  // Function to transform the data into an array of objects
  function transformData(data) {
    // Extract the header row and convert it to lowercase
    const headers = data[0].map(header => header.toLowerCase());
  
    // Initialize an array to hold the transformed data
    const transformedData = [];
  
    // Loop through each row (excluding the header row)
    for (let i = 1; i < data.length; i++) {
      const row = data[i];
      const obj = {};
  
      // For each row, create an object where keys are headers and values are row data
      for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = row[j];
      }
  
      // Push the object to the transformed data array
      transformedData.push(obj);
    }
  
    return transformedData;
  }
  
  // Call the function with the data
  const result = transformData(data);
  console.log(result);
  