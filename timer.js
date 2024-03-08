document.addEventListener("DOMContentLoaded", function() {
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
  
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");
  
    setInterval(updateTimer, 1000);
  
    function updateTimer() {
      seconds++;
      if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
          minutes = 0;
          hours++;
        }
      }
  
      hoursElement.textContent = padZero(hours);
      minutesElement.textContent = padZero(minutes);
      secondsElement.textContent = padZero(seconds);
    }
  
    function padZero(value) {
      return value < 10 ? "0" + value : value;
    }
  });
  
