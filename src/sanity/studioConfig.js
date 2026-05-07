import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';

export default defineConfig({
  name: 'sacchetti-marketing',
  title: 'Sacchetti Marketing CMS',
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  basePath: '/admin',
  plugins: [structureTool(), visionTool()],
  schema: { types: schemaTypes },
});
