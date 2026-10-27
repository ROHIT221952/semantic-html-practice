// 1. Select HTML elements
const heading = document.getElementById("main-title");
const colorButton = document.getElementById("change-color-btn");
const consoleButton = document.getElementById("console-btn");
const networkButton = document.getElementById("network-btn");
const result = document.getElementById("result");

// 2. Change heading color
colorButton.addEventListener("click", function () {
    heading.style.color = "#38bdf8";

    console.log("Heading color changed successfully.");
});

// 3. Display a console message
consoleButton.addEventListener("click", function () {
    console.log("Browser DevTools practice is working!");
    console.info("This is an informational message.");
});

// 4. Load sample data using Fetch API
networkButton.addEventListener("click", async function () {
    result.textContent = "Loading data...";

    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos/1"
        );

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();

        result.textContent = `Task: ${data.title}`;

        console.log("API response:", data);
    } catch (error) {
        result.textContent = "Could not load data. Check the Console.";
        console.error("Request failed:", error);
    }
});

console.log("Browser DevTools project loaded.");