const title = document.querySelector(".title");
const video = document.querySelector(".intro");

function updateScrollPosition() {
	const offset = `${window.scrollY * -0.5}px`;
	title?.style.setProperty("--scroll-offset", offset);
	video?.style.setProperty("--scroll-offset", offset);
}

window.addEventListener("scroll", updateScrollPosition, { passive: true });
updateScrollPosition();


const boxes = document.querySelectorAll(".lb, .rb");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.25,
  }
);

boxes.forEach((box) => observer.observe(box));