const clockTitle = document.querySelector(".js-clock");

function seollalClock() {
  const today = new Date();
  const seollal = new Date("2023-01-22");
  const dayBefore = seollal - today;
  const dday = String(Math.floor(dayBefore / (1000 * 60 * 60 * 24))).padStart(2,"0");
  const dhours = String(
    Math.floor((dayBefore / (1000 * 60 * 60)) % 24)).padStart(2, "0");
  const dminutes = String(Math.floor((dayBefore / (1000 * 60)) % 60)).padStart(2,"0");
  const dseconds = String(Math.floor((dayBefore / 1000) % 60)).padStart(2, "0");
  clockTitle.innerHTML = `${dday}d:${dhours}h:${dminutes}m:${dseconds}s`;
}
seollalClock();
setInterval(seollalClock, 1000);
