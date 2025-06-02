// Highlight nav menu sesuai halaman
const navLinks = document.querySelectorAll("nav a");
const currentPage = window.location.pathname.split("/").pop();

navLinks.forEach(link => {
  if (link.getAttribute("href") === currentPage || (link.getAttribute("href") === "index.html" && currentPage === "")) {
    link.classList.add("active");
  }
});