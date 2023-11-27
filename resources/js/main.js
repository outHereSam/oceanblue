const hamburger = document.getElementById("menu");
const mobileNav = document.getElementById("mobile");

hamburger.addEventListener("click", () => {
  if (mobileNav.classList.contains("hidden")) {
    mobileNav.classList.remove("hidden");
  } else {
    mobileNav.classList.add("hidden");
  }
});
