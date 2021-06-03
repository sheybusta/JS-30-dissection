import { handleCheck } from "../handlers/handlers.js";

// const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handleCheck)
);

//  checkboxes.forEach((checkbox) =>
//    checkbox.addEventListener("click", handleCheck)
//  );
