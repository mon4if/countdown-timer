let countdownInterval;

function startCountdown() {
  let timeLeft = 60;
  clearInterval(countdownInterval);

  countdownInterval = setInterval(function() {
    let minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
    let seconds = String(timeLeft % 60).padStart(2, '0');
    document.getElementById("countdown").textContent = minutes + ":" + seconds;

    if (timeLeft === 0) {
      clearInterval(countdownInterval);
      alert("⏰ Time's up!");
    } else {
      timeLeft--;
    }
  }, 1000);
}
