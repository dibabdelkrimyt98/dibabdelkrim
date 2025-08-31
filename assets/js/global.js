// Active page highlight
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav a");
    links.forEach(link => {
      if (link.href === window.location.href) {
        link.style.fontWeight = "bold";
        link.style.color = "#4cafef";
      }
    });
  });
  