const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");
const bottom = document.querySelector(".bottom");

let picNum = 1;

////////////////// create buttons
for (let i = 0; i < images.length; i++) {
  const div = document.createElement("div");
  div.className = "button";
  bottom.appendChild(div);
}

const buttons = document.querySelectorAll(".button");
buttons[0].style.backgroundColor = "grey";

const resetBg = () => {
  buttons.forEach((button) => {
    button.style.backgroundColor = "transparent";
  });
};

buttons.forEach((button, i) => {
  button.addEventListener("click", () => {
    resetBg();
    slider.style.transform = `translateX(-${i * 800}px)`;
    picNum = i + 1;
    button.style.backgroundColor = "grey";
  });
});

right.addEventListener("click", () => {
  if (picNum < images.length) {
    slider.style.transform = `translateX(-${picNum * 800}px)`;
    picNum++;
  } else {
    slider.style.transform = "translateX(0px)";
    picNum = 1;
  }
  resetBg();
  buttons[picNum - 1].style.backgroundColor = "grey";
});

left.addEventListener("click", () => {
  if (picNum > 1) {
    slider.style.transform = `translateX(-${(picNum - 2) * 800}px)`;
    picNum--;
  } else {
    slider.style.transform = `translateX(-${(images.length - 1) * 800}px)`;
    picNum = images.length;
  }
  resetBg();
  buttons[picNum - 1].style.backgroundColor = "grey";
});
