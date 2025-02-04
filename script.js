document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu");
  const closeIcon = document.querySelector(".close");
  const navList = document.querySelector("nav ul");

  menuIcon.addEventListener("click", function () {
    navList.classList.add("open");
    closeIcon.style.display = "block";
  });

  closeIcon.addEventListener("click", function () {
    navList.classList.remove("open");
    closeIcon.style.display = "none";
  });
});

document.querySelectorAll(".toggle-faq").forEach((faq) => {
  faq.addEventListener("click", () => {
    const content = faq.nextElementSibling;
    const icon = faq.querySelector(".faq-icon");

    if (content.classList.contains("hidden")) {
      content.classList.remove("hidden");
      icon.classList.add("rotate-180");
    } else {
      content.classList.add("hidden");
      icon.classList.remove("rotate-180");
    }
  });
});
