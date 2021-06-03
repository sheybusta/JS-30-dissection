import { handleUpdate } from "../handlers/handlers.js";

const inputs = document.querySelectorAll(".controls input");
inputs.forEach((input) => input.addEventListener("change", handleUpdate));
inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));
