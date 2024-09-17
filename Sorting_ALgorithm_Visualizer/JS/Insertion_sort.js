function displayBars(array, selectedIndexes = []) {
    var barsDiv = document.getElementById("bars");
    barsDiv.innerHTML = "";

    for (var i = 0; i < array.length; i++) {
        var barHeight = array[i] * 5; // Scale factor to make bars visible
        var bar = document.createElement("div");
        bar.className = "bar";
        if (selectedIndexes.includes(i)) {
            bar.style.backgroundColor = "red";
        }
        bar.style.height = barHeight + "px";

        var valueSpan = document.createElement("span");
        valueSpan.textContent = array[i];

        bar.appendChild(valueSpan);
        barsDiv.appendChild(bar);
    }
}

// Function to perform selection sort and update the visualization
async function insertionSort(array) {
    for (var i = 0; i < array.length; i++) {
        var temp = array[i];
        j = i - 1;

        while (j >= 0 && temp < array[j]) {
            array[j + 1] = array[j];
            j--;

            // Update visualization
            displayBars(array, [j + 1]);
            await sleep(2000); // Delay for visualization

        }
        array[j + 1] = temp;

    }
    // Final visualization with sorted array
    displayBars(array);
}

// Helper function for delaying execution
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Function to start the visualization
async function startVisualization(event) {
    event.preventDefault(); // Prevent form submission
    var arrayElementsInput = document.getElementById("arrayElements");

    var array = arrayElementsInput.value
        .split(" ")
        .map(element => parseInt(element));

    await insertionSort(array);

    console.log("Sorted array:", array);
}