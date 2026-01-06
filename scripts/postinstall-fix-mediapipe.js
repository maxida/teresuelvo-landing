const fs = require('fs');
const path = require('path');

// Ruta relativa al proyecto
const mapPath = path.join(__dirname, '..', 'node_modules', '@mediapipe', 'tasks-vision', 'vision_bundle_mjs.js.map');

try {
  const dir = path.dirname(mapPath);
  if (!fs.existsSync(dir)) {
    // node_modules puede no existir cuando se ejecute en CI antes de instalar; solo salimos
    console.log('[postinstall-fix-mediapipe] target directory not found, skipping.');
    process.exit(0);
  }

  if (!fs.existsSync(mapPath)) {
    const content = JSON.stringify({ version: 3, file: 'vision_bundle.mjs', sources: [], names: [], mappings: '' });
    fs.writeFileSync(mapPath, content, 'utf8');
    console.log('[postinstall-fix-mediapipe] Created missing sourcemap:', mapPath);
  } else {
    // existe, nada que hacer
    // console.log('[postinstall-fix-mediapipe] sourcemap already exists.');
  }
} catch (err) {
  console.error('[postinstall-fix-mediapipe] Error creating sourcemap:', err);
  // no fallamos la instalación por esto
  process.exit(0);
}
