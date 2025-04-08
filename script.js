const changeTheme = () => {
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
  
  let count = 0;
  const updateCounter = () => {
    document.getElementById("counter").innerText = count;
  };
  document.getElementById("increaseCounter").addEventListener("click", () => {
    count++;
    updateCounter();
  });
  document.getElementById("decreaseCounter").addEventListener("click", () => {
    count--;
    updateCounter();
  });
  document.getElementById("resetCounter").addEventListener("click", () => {
    count = 0;
    updateCounter();
  });
  