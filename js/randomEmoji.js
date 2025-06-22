const emojis = ["😎", "🤖", "🚀", "🎉", "🔥", "✨"];

export default function run() {
  const emoji = emojis[Math.floor(Math.random() * emojis.length)];
  alert(`Extra.js says: Hello World! ${emoji}`);
}
