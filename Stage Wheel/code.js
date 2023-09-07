let results = [];
let groupCounts = {};
let groupLastOccurrences = {};
let rowCounts = {};
let rowLastOccurrences = {};

// Define the groups and rows
const groups = {
  "NewMoon": [1, 13, 36, 24],
  "WaxingCresent": [3, 15, 34, 22, 5],
  "FirstQuarter": [17, 32, 20, 7, 11],
  "WaxingGibbous": [30, 26, 9, 28, 0],
  "FullMoon": [2, 14, 35, 23],
  "WaningGibbous": [4, 16, 33, 21, 6],
  "ThirdQuarter": [18, 31, 19, 8, 12],
  "WaningCresent": [29, 25, 10, 27, 37],
  "Group1": [1, 2, 3, 4, 5, 6],
  "Group2": [4, 5, 6, 7, 8, 9],
  "Group3": [7, 8, 9, 10, 11, 12],
  "Group4": [10, 11, 12, 13, 14, 15],
  "Group5": [13, 14, 15, 16, 17, 18],
  "Group6": [16, 17, 18, 19, 20, 21],
  "Group7": [19, 20, 21, 22, 23, 24],
  "Group8": [22, 23, 24, 25, 26, 27],
  "Group9": [25, 26, 27, 28, 29, 30],
  "Group10": [28, 29, 30, 31, 32, 33],
  "Group11": [31, 32, 33, 34, 35, 36],
};

// Initialize counts and last occurrences for groups and rows
for (const key in groups) {
  groupCounts[key] = 0;
  groupLastOccurrences[key] = 0;
  rowCounts[key] = 0;
  rowLastOccurrences[key] = 0;
}

// Add event listeners to buttons
let buttons = document.querySelectorAll(".myButton");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    let buttonValue = this.value;
    results.push(buttonValue);
    updateCounts(buttonValue);
    displayArray();
  });
});

function updateCounts(clickedValue) {
  // Update counts and last occurrences
  for (const group in groups) {
    groupCounts[group]++;
    if (groups[group].includes(parseInt(clickedValue))) {
      groupLastOccurrences[group] = 0;
    } else {
      groupLastOccurrences[group]++;
    }
  }

  for (const row in groups) { // Change 'group' to 'row' here
    if (groups[row].includes(parseInt(clickedValue))) {
        rowCounts[row]++;
        rowLastOccurrences[row] = 0;
        } else {
        rowLastOccurrences[row]++;
        }
    }
}

function displayArray() {
    // Update counts and last occurrences in the DOM
    for (const group in groups) {
      document.querySelector(`[id="${group}"] .count`).textContent = groupCounts[group];
      document.querySelector(`[id="${group}"] .last-occurrence`).textContent = groupLastOccurrences[group];
    }
  
    for (const row in groups) {
      document.querySelector(`[id="${row}"] .count`).textContent = rowCounts[row];
      document.querySelector(`[id="${row}"] .last-occurrence`).textContent = rowLastOccurrences[row];
    }
  
    // Display the array in the resultDisplay element without square brackets and quotation marks
    document.getElementById("resultsDisplay").textContent = results.join(", ");
  }
