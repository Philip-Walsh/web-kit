export default function run() {
  const colors = ["#ff4b1f", "#1fddff", "#ffec42", "#42ff73"];
  for (let i = 0; i < 30; i++) {
    const span = document.createElement("span");
    span.textContent = "🎉";
    span.style.position = "fixed";
    span.style.left = Math.random() * window.innerWidth + "px";
    span.style.top = Math.random() * window.innerHeight + "px";
    span.style.fontSize = `${12 + Math.random() * 20}px`;
    span.style.color = colors[Math.floor(Math.random() * colors.length)];
    span.style.userSelect = "none";
    span.style.pointerEvents = "none";
    document.body.appendChild(span);

    setTimeout(() => span.remove(), 3000);
  }
}
