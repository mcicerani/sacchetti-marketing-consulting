import { createClient } from '@sanity/client';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.join(__dirname, '..', 'public');

const client = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID,
  dataset: process.env.VITE_SANITY_DATASET || 'production',
  token: process.env.SANITY_WRITE_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false,
});

const LOREM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

// Layout: full / wide / normal / tall / wide / wide
const projects = [
  { title: 'Progetto 1', description: LOREM, image: 'parallax-2.png',  size: 'full',   order: 1 },
  { title: 'Progetto 2', description: LOREM, image: 'parallax.png',    size: 'wide',   order: 2 },
  { title: 'Progetto 3', description: LOREM, image: 'parallax-3.jpg',  size: 'normal', order: 3 },
  { title: 'Progetto 4', description: LOREM, image: 'parallax.png',    size: 'tall',   order: 4 },
  { title: 'Progetto 5', description: LOREM, image: 'parallax-3.jpg',  size: 'wide',   order: 5 },
  { title: 'Progetto 6', description: LOREM, image: 'parallax-2.png',  size: 'wide',   order: 6 },
];

function contentType(filename) {
  if (filename.endsWith('.svg')) return 'image/svg+xml';
  if (filename.endsWith('.png')) return 'image/png';
  return 'image/jpeg';
}

async function uploadImage(filename) {
  const buffer = fs.readFileSync(path.join(PUBLIC_DIR, filename));
  const asset = await client.assets.upload('image', buffer, {
    filename,
    contentType: contentType(filename),
  });
  return asset._id;
}

async function seed() {
  console.log('Seeding portfolio projects...');
  for (const p of projects) {
    console.log(`  Uploading ${p.image} (${p.title})...`);
    const assetId = await uploadImage(p.image);
    await client.createOrReplace({
      _id: `portfolio-${p.order}`,
      _type: 'portfolioProject',
      title: p.title,
      description: p.description,
      size: p.size,
      order: p.order,
      image: { _type: 'image', asset: { _type: 'reference', _ref: assetId } },
    });
    console.log(`  ✓ ${p.title} (${p.size})`);
  }
  console.log('\n✓ Portfolio seeded');
}

seed().catch((err) => { console.error(err); process.exit(1); });
