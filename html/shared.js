/**
 * Loads an HTML file into a specified placeholder element.
 * @param {string} filePath The path to the HTML file (e.g., 'footer.html').
 * @param {string} elementId The ID of the element where the HTML should be loaded.
 */
async function loadHTML(filePath, elementId) {
  try {
    const response = await fetch(filePath);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const html = await response.text();
    document.getElementById(elementId).innerHTML = html;
    console.log(`✅ Loaded ${filePath}`);
  } catch (error) {
    console.error(`❌ Could not load ${filePath}:`, error);
    document.getElementById(elementId).innerHTML = `<p>Error loading ${filePath}</p>`;
  }
}

if (typeof window !== 'undefined') {
  window.loadHTML = loadHTML;
}
