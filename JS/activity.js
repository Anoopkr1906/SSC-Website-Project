window.onload = () => {
  AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true,
  });
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
};
