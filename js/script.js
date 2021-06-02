"use strict";

let screen = document.getElementById("screen");
let button = document.querySelectorAll("button");
let screenValue = "";

for (const item of button) {
  item.addEventListener("click", (e) => {
    let buttontext = e.target.innerText;
    if (buttontext == "C") {
      screen.value = "";
      screenValue = screen.value;
    } else if (buttontext == "X") {
      buttontext = "*";
      screenValue += buttontext;
      screen.value = screenValue;
    } else if (buttontext == "=") {
      screen.value = eval(screenValue);
    } else if (buttontext == "^") {
      buttontext = "**";
      screenValue += buttontext;
      screen.value = screenValue;
    } else if (buttontext == "BackSpace") {
      screenValue = screenValue.substring(0, screenValue.length - 1);
      screen.value = screenValue;
    } else {
      screenValue += buttontext;
      screen.value = screenValue;
    }
  });
}
