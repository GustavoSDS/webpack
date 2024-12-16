import "./css/styles.css";
import { greeting } from "./ts/greeting";

const $app = document.getElementById("app");

const name = "Simon S. Dos Santos";
greeting(name);

const $images = document.createElement("div");
$images.classList.add("images");
$images.innerHTML = `
  <img src="./assets/images/1.jpg" alt="Foto 1">
  <img src="./assets/images/2.jpg" alt="Foto 2">
  <img src="./assets/images/3.jpg" alt="Foto 3">
  <img src="./assets/images/4.jpg" alt="Foto 4">
`;
$app?.appendChild($images);
