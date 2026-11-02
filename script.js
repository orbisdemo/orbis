const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  }));
}
document.querySelector("#year").textContent = new Date().getFullYear();

// Keep one FAQ answer open at a time for a cleaner accordion experience.
document.querySelectorAll(".faq-list details").forEach(item => {
  item.addEventListener("toggle", () => {
    if (item.open) {
      document.querySelectorAll(".faq-list details").forEach(other => {
        if (other !== item) other.open = false;
      });
    }
  });
});
