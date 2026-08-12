function openWhatsApp(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const service = document.getElementById("service").value.trim();
  const message = document.getElementById("message").value.trim();

  const text = [
    "Hello, I would like to book an appointment.",
    "",
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Service: ${service}`,
    `Message: ${message || "N/A"}`,
  ].join("\n");

  const whatsappUrl = `https://wa.me/919154366777?text=${encodeURIComponent(text)}`;
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  return false;
}

const menuBtn = document.querySelector(".menu-toggle");
const nav = document.querySelector(".top-nav");

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    const next = !nav.classList.contains("open");
    nav.classList.toggle("open", next);
    menuBtn.setAttribute("aria-expanded", String(next));
  });

  document.addEventListener("click", (event) => {
    if (!nav.classList.contains("open")) {
      return;
    }

    if (menuBtn.contains(event.target) || nav.contains(event.target)) {
      return;
    }

    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.18 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
