// Change theme button
const changeTheme = () => {
    // Change theme color based on value of element
    if (document.getElementById("changeTheme").value === "light") {
      document.body.style.backgroundColor = "rgb(34, 33, 33)";
      document.body.style.color = "white";
      document.getElementById("changeTheme").value = "dark";
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document.getElementById("changeTheme").value = "light";
    }
  };

  // Change value of counter based on value of counter
  let count = 0;
  // Display counter on page
  const updateCounter = () => {
    document.getElementById("counter").innerText = count;
  };
  // Increase counter of count
  document.getElementById("increaseCounter").addEventListener("click", () => {
    count++;
    updateCounter();
  });
 // Decrease counter of count
  document.getElementById("decreaseCounter").addEventListener("click", () => {
    count--;
    updateCounter();
  });
 // Reset counter of count
  document.getElementById("resetCounter").addEventListener("click", () => {
    count = 0;
    updateCounter();
  });
  
