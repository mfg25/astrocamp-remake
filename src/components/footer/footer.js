import "./footer.css";

function footer() {
  const foot = document.createElement("footer");
  foot.id = "footer";

  const text = document.createElement("h3");
  text.innerText = "Developed by Matheus Germano";
  text.id = "text";
  foot.appendChild(text);

  return foot;
}

export default footer;
