let count = 0;

const counterText = document.getElementById("counterText");
const increaseBtn = document.getElementById("increaseCounter");
const decreaseBtn = document.getElementById("decreaseCounter");
const resetBtn = document.getElementById("resetCounter");
const themeBtn = document.getElementById("changeTheme");


const updateCounter = () => {
  counterText.innerText = count;

  if (count > 0) {
    counterText.style.color = "green";
  } else if (count < 0) {
    counterText.style.color = "red";
  } else {
    counterText.style.color = themeBtn.value === "dark" ? "white" : "black";
  }
};


const handleResize = () => {
  const screenWidth = window.innerWidth;
  if (screenWidth < 600) {
    counterText.style.fontSize = "5rem";
    increaseBtn.style.fontSize = decreaseBtn.style.fontSize = "3rem";
    resetBtn.style.fontSize = "2rem";
  } else {
    counterText.style.fontSize = "10rem";
    increaseBtn.style.fontSize = decreaseBtn.style.fontSize = "7rem";
    resetBtn.style.fontSize = "4rem";
  }
};


const toggleTheme = () => {
  const navBar = document.getElementById("navBar");
  const allButtons = document.querySelectorAll(".Button");

  if (themeBtn.value === "light") {

    document.body.style.backgroundColor = "rgb(34, 33, 33)";
    document.body.style.color = "white";
    navBar.style.backgroundColor = "#444";
    themeBtn.value = "dark";
    themeBtn.innerHTML = "🌙";

    allButtons.forEach(btn => {
      btn.style.backgroundColor = "black";
      btn.style.color = "white";
    });
  } else {
    document.body.style.backgroundColor = "blanchedalmond";
    document.body.style.color = "black";
    navBar.style.backgroundColor = "burlywood";
    themeBtn.value = "light";
    themeBtn.innerHTML = "☀️";

    allButtons.forEach(btn => {
      btn.style.backgroundColor = "";
      btn.style.color = "black";
    });
  }

  updateCounter();
};

increaseBtn.addEventListener("click", () => {
  count++;
  updateCounter();
});

decreaseBtn.addEventListener("click", () => {
  count--;
  updateCounter();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  updateCounter();
});

themeBtn.addEventListener("click", toggleTheme);
window.addEventListener("resize", handleResize);
window.addEventListener("load", () => {
  themeBtn.value = "light";
  updateCounter();
  handleResize();
});
