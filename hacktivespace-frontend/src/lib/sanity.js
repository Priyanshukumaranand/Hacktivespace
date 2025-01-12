// filepath: src/sanityClient.js
import createClient from '@sanity/client';

export default createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID, // Your project ID from env
  dataset: 'production', // Your dataset name
  apiVersion: '2023-10-01',
  useCdn: true, // `false` if you want to ensure fresh data
  // token: import.meta.env.VITE_SANITY_TOKEN, // Your read token from env
});