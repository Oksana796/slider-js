const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");

let picNum = 1;

right.addEventListener("click", () => {
  if (picNum < images.length) {
    slider.style.transform = `translateX(-${picNum * 800}px)`;
    picNum++;
  } else {
    slider.style.transform = "translateX(0px)";
    picNum = 1;
  }
});

left.addEventListener("click", () => {
  if (picNum > 1) {
    slider.style.transform = `translateX(-${(picNum - 2) * 800}px)`;
    picNum--;
  } else {
    slider.style.transform = `translateX(-${(images.length - 1) * 800}px)`;
    picNum = images.length;
  }
});
