const startMenu = document.querySelector("#start-menu");
const startBtn = document.querySelector("#start-bar button");

function onStartMenuShow() {
  let startMenuHeight = startMenu.style.height;
  if (startMenuHeight === "0px" || startMenuHeight === "") {
    startMenu.style.height = "415px";
  } else {
    startMenu.style.height = "0px";
  }
}

startBtn.addEventListener("click", onStartMenuShow);
