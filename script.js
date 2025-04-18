
// Change theme button
const changeTheme = () => {
    if(document.getElementById("counter").style.color === "black") {
      document.getElementById("counter").style.color = "white";
    }else{
      document.getElementById("counter").style.color = "black";
    }

  // Change theme color based on value of element
  if (document.getElementById("changeTheme").value === "light") {
    document.body.style.backgroundColor = "rgb(34, 33, 33)";
    document.body.style.color = "white";
    document.getElementById("changeTheme").value = "dark";
  } else {
    document.body.style.backgroundColor = "blanchedalmond";
    document.body.style.color = "black";
    document.getElementById("changeTheme").value = "light";
  }
};
let count = 0;
// Display counter on page
const updateCounter = () => {
  document.getElementById("counter").innerText = count;
};
// Increase counter of count
document.getElementById("increaseCounter").addEventListener("click", () => {
  count++;
  if (count > 0) {
    document.getElementById("counter").style.color = "green";
  } else if (count == 0) {
    if (document.getElementById("changeTheme").value === "light") {
      document.getElementById("counter").style.color = "black";
    } else {
      document.getElementById("counter").style.color = "white";
    }
  }
  updateCounter();
});
// Decrease counter of count
document.getElementById("decreaseCounter").addEventListener("click", () => {
  count--;
  if (count < 0) {
    document.getElementById("counter").style.color = "red";
  } else if (count == 0) {
    if (document.getElementById("changeTheme").value === "light") {
      document.getElementById("counter").style.color = "black";
    } else {
      document.getElementById("counter").style.color = "white";
    }
  }
  updateCounter();
});
// Reset counter of count
document.getElementById("resetCounter").addEventListener("click", () => {
  count = 0;
  if (document.getElementById("changeTheme").value === "light") {
    document.getElementById("counter").style.color = "black";
  } else {
    document.getElementById("counter").style.color = "white";
  }
  updateCounter();
});
