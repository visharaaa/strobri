// ============================
// 🍓 Floating Strawberries
// ============================

const container = document.querySelector(".strawberries");

function createStrawberry() {
  const s = document.createElement("div");
  s.className = "strawberry";
  s.textContent = "🍓";

  // Random horizontal position
  s.style.left = Math.random() * 100 + "vw";

  // Start BELOW the screen
  s.style.bottom = "-50px";

  // Random size
  s.style.fontSize = 20 + Math.random() * 20 + "px";

  // Random duration
  const duration = 6 + Math.random() * 4;
  s.style.animation = `floatUp ${duration}s linear`;

  container.appendChild(s);

  // Remove after animation finishes
  setTimeout(() => {
    s.remove();
  }, duration * 1000);
}

// Gradually spawn strawberries
setInterval(createStrawberry, 700);


// ============================
// 🟢 Button Interaction
// ============================

// First screen button
document.getElementById("startBtn").addEventListener("click", () => {
  // Replace card content with new prompt
  document.querySelector(".card").innerHTML = `
    <h1>okay… 🍓</h1>
    <p>before i ask you something,<br>can you help me collect strawberries?</p>
    <button id="nextBtn">yes!</button>
  `;

  // Next button placeholder (strawberry game will go here later)
  document.getElementById("nextBtn").addEventListener("click", () => {
    alert("strawberry game coming next 🍓💗");
  });
});
