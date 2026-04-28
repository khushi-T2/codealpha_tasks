let buttons = document.querySelectorAll(".buttons button");
let items = document.querySelectorAll(".item");

let lightbox = document.getElementById("lightbox");
let lightboxImg = document.getElementById("lightbox-img");
let images = document.querySelectorAll(".item img");

let currentIndex = 0;
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    let filter = btn.dataset.filter;

    items.forEach(item => {
      if (filter === "all" || item.classList.contains(filter)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    lightbox.style.display = "block";
    lightboxImg.src = img.src;
    currentIndex = index;
  });
});
document.querySelector(".close").onclick = () => {
  lightbox.style.display = "none";
};
document.getElementById("next").onclick = () => {
  currentIndex = (currentIndex + 1) % images.length;
  lightboxImg.src = images[currentIndex].src;
};
document.getElementById("prev").onclick = () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  lightboxImg.src = images[currentIndex].src;
};