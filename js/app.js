document
  .querySelector(".nav-bar-open-slide-click")
  .addEventListener("click", (e) => {
    e.preventDefault;
    const sideNav = document.querySelector(".side-nav");

    document.querySelector(".btn-close").style.cssText = "display: block;";
    sideNav.style.cssText = "width: 35rem;";
  });

document.querySelector(".btn-close").addEventListener("click", (e) => {
  e.preventDefault;

  const sideNav = document.querySelector(".side-nav");

  sideNav.style.cssText = "width: 0";

  e.target.style.display = "none";
});

AOS.init({
  offset: 200,
  duration: 800,
});
