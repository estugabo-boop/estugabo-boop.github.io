// Año actual en el pie de página
document.getElementById("year").textContent = new Date().getFullYear();

// Animación suave de aparición al hacer scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".card, .project, .steps li").forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(18px)";
  el.style.transition = "opacity .5s ease, transform .5s ease";
  observer.observe(el);
});
