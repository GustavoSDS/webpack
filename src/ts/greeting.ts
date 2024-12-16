export const greeting = (name: string) => {
  const $app = document.getElementById("app");
  const h1 = document.createElement("h1");
  h1.innerText = `Hello ${name}`;
  $app?.appendChild(h1);
};
