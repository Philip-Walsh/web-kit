export default function run() {
  const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 70%, 80%)`;
  document.body.style.backgroundColor = randomColor;
  alert(`Background changed to ${randomColor}`);
}
