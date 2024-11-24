let score = 0;

const targetButton = document.getElementById('target-button');
const scoreDisplay = document.getElementById('score');
const message = document.getElementById('message');
const pythonButton = document.getElementById('run-python');
const cppButton = document.getElementById('run-cpp');
const output = document.getElementById('output');

// لعبة النقاط بالـ JavaScript
targetButton.addEventListener('click', () => {
  score++;
  scoreDisplay.textContent = score;

  if (score < 5) {
    message.textContent = "استمر، أنت في البداية!";
  } else if (score < 10) {
    message.textContent = "أنت تتقدم بشكل رائع!";
  } else {
    message.textContent = "مذهل! استمر في اللعب!";
  }
});

// استدعاء لعبة Python
pythonButton.addEventListener('click', async () => {
  const response = await fetch('/run-python');
  const result = await response.text();
  output.textContent = "Python: " + result;
});

// استدعاء لعبة C++
cppButton.addEventListener('click', async () => {
  const response = await fetch('/run-cpp');
  const result = await response.text();
  output.textContent = "C++: " + result;
});
س