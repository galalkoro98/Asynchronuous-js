import { handler } from "./handler.js";

export default function () {
  const button = document.getElementById("btn");

  button.addEventListener("click", handler);
}
