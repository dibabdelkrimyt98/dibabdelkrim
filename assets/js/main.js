// ===== Toggle Sidebar on Mobile =====
const sidebar = document.querySelector(".sidebar");
const toggleBtn = document.createElement("button");
toggleBtn.innerText = "☰";
toggleBtn.classList.add("toggle-btn");
document.querySelector(".navbar").prepend(toggleBtn);

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

// ===== Dropdowns in Navbar =====
const dropdowns = document.querySelectorAll(".navbar ul li");

dropdowns.forEach(li => {
  li.addEventListener("mouseenter", () => {
    const drop = li.querySelector(".dropdown");
    if (drop) drop.style.display = "block";
  });

  li.addEventListener("mouseleave", () => {
    const drop = li.querySelector(".dropdown");
    if (drop) drop.style.display = "none";
  });
});
