let results = [];
let buttons = document.querySelectorAll(".myButton");
let valueCounts = {};
let lastOccurrences = {};

buttons.forEach(button => {
  let buttonValue = button.value;
  valueCounts[buttonValue] = 0; // Initialize with zero count
  lastOccurrences[buttonValue] = 0; // Initialize with zero count

  button.addEventListener('click',
    function() {
      results.push(buttonValue);
      updateCounts(buttonValue);
      updateLastOccurrences(buttonValue);
      displayArray();
    }
  );
});

function updateCounts(chosenValue) {
  for (const value in valueCounts) {
    if (value === chosenValue) {
      valueCounts[value]++;
    }
  }
}

function updateLastOccurrences(chosenValue) {
  for (const value in lastOccurrences) {
    if (value !== chosenValue) {
      lastOccurrences[value]++;
    } else {
      lastOccurrences[value] = 0;
    }
  }
}

function displayArray() {
  let display = document.getElementById('resultsDisplay');
  display.textContent = results.join(', ');

  let tableRows = document.querySelectorAll("#valuesTable tbody tr");

  tableRows.forEach(row => {
    let value = row.querySelector("td:first-child").textContent;
    let countCell = row.querySelector("td:nth-child(2)");
    let lastOccurrenceCell = row.querySelector("td:last-child");

    countCell.textContent = valueCounts[value];
    lastOccurrenceCell.textContent = lastOccurrences[value];
  });
}
