// Initialize an object to store the pitch counts for each square
let pitchCounts = {};

// Increment the overall count
function incrementCount() {
  let currentCount = parseInt(document.getElementById("pitch-count").innerText);
  document.getElementById("pitch-count").innerText = currentCount + 1;
}

// Decrement the overall count
function decrementCount() {
  let currentCount = parseInt(document.getElementById("pitch-count").innerText);
  if (currentCount > 0) {
    document.getElementById("pitch-count").innerText = currentCount - 1;
  }
}

// Handle when a square in the strike zone is clicked
function logPitch(x, y) {
  // Create a key for each square using its coordinates
  const key = `${x}-${y}`;

  // If the square hasn't been clicked before, initialize its count
  if (!pitchCounts[key]) {
    pitchCounts[key] = 0;
  }

  // Increment the pitch count for the square
  pitchCounts[key]++;

  // Get the corresponding square element and update the displayed count
  const square = document.querySelector(`[data-x="${x}"][data-y="${y}"]`);
  square.innerHTML = `Pitches: ${pitchCounts[key]}`;
}

// Reset the counts when the session ends
function endSession() {
  // Reset all pitch counts
  pitchCounts = {};

  // Reset all squares to their default state
  const squares = document.querySelectorAll('.strikezone-box');
  squares.forEach(square => {
    square.innerHTML = `Pitches: 0`;
  });

  // Reset the overall pitch count
  document.getElementById("pitch-count").innerText = '0';
}

// Attach event listeners to all strike zone squares
document.querySelectorAll('.strikezone-box').forEach(square => {
  square.addEventListener('click', (e) => {
    const x = e.target.getAttribute('data-x');
    const y = e.target.getAttribute('data-y');
    logPitch(x, y);
  });
});
