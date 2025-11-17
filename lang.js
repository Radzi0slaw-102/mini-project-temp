document.addEventListener("DOMContentLoaded", () => {
  const tooltip = document.getElementById("langTooltip");
  const flags = document.querySelectorAll(".flag");

  flags.forEach(flag => {
    flag.addEventListener("mousemove", (e) => {
      const text = flag.getAttribute("lang-level");
      tooltip.textContent = text;

      tooltip.style.left = e.pageX + 15 + "px";
      tooltip.style.top = e.pageY + 15 + "px";
      tooltip.style.opacity = 1;
    });

    flag.addEventListener("mouseleave", () => {
      tooltip.style.opacity = 0;
    });
  });
});
