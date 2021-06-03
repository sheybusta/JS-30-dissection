import { toggleOpen, toggleActive } from "../handlers/handlers.js";

const panels = document.querySelectorAll(".panel");
panels.forEach((panel) => panel.addEventListener("click", toggleOpen));
panels.forEach((panel) =>
  panel.addEventListener("transitionend", toggleActive)
);

// panels.forEach((panel) => panel.addEventListener("click", toggleOpen));
// panels.forEach((panel) =>
//   panel.addEventListener("transitionend", toggleActive)
// );
