console.log("Script loaded successfully.");

// Function to handle command execution
function executeCommand(target, module) {
  // Placeholder for command execution logic
  console.log("Executing command:", `bbot -t ${target} -m ${module}`);
  // Here you would typically make an API call to a backend server
  // or directly execute the command if possible

  // For now, let's simulate a command execution and update the output
  const simulatedOutput = `Results for ${target} using ${module}\n...`;
  updateOutput(simulatedOutput);
}

// Function to update the output area
function updateOutput(output) {
    const outputArea = document.getElementById("output-area");
    outputArea.textContent = output;
}

document.addEventListener("DOMContentLoaded", () => {
  updateOutput("Welcome to BBot GUI. Enter your commands above.");

  const runButton = document.getElementById("run-button");
  runButton.addEventListener("click", () => {
    const target = document.getElementById("target").value;
    const module = document.getElementById("module").value;
    executeCommand(target, module);
  });
});
