const hamburger = document.getElementById("menu");
const mobileNav = document.getElementById("mobile");

hamburger.addEventListener("click", () => {
  if (mobileNav.classList.contains("hidden")) {
    mobileNav.classList.remove("hidden");
  } else {
    mobileNav.classList.add("hidden");
  }
});

const topBtn = document.getElementById("top");

const scrollFunction = () => {
  // console.log("window scrolled!");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topBtn.style.display = "flex";
  } else {
    topBtn.style.display = "none";
  }
};

const topFunction = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

window.addEventListener("scroll", scrollFunction);
topBtn.addEventListener("click", topFunction);
