const clock = document.querySelector("#clock");
const amOrpm = document.querySelector("#ampm");

function getClock() {
  const date = new Date();
  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  let ampmText = "AM";
  if (date.getHours() >= 12) {
    ampmText = "PM";
    if (hours > 12) {
      hours -= 12;
    }
  }
  hours = String(hours).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}`;
  amOrpm.innerText = ampmText;
}

getClock();
setInterval(getClock, 1000);
