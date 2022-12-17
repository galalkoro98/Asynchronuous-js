// import stocks from "./data.js";
import { production } from "./util.js";

export const buttonHandler = () => {
  const start = production();
  document.getElementById("display").innerHTML = start;
};
