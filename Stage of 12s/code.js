let results = [];
let groupCounts = {};
let groupLastOccurrences = {};
let rowCounts = {};
let rowLastOccurrences = {};

// Define the groups and rows
const groups = {
  "1-12": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  "13-24": [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
  "25-36": [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
  "Row1": [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34],
  "Row2": [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35],
  "Row3": [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36],
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
}
