export const scripts = [
  "utils",
  "extra"
];

console.log("🚀 manifest.js loaded. Scripts available:", scripts);

export async function asyncRun() {
  for (const script of scripts) {
    try {
      await import(`https://cdn.jsdelivr.net/gh/Philip-Walsh/web-kit@main/js/${script}.js`);
      console.log(`✅ Loaded ${script}`);
    } catch (e) {
      console.error(`❌ Failed to load ${script}`, e);
    }
  }
}
