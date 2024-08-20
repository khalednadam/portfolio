import { createClient } from "@sanity/client";
import { toHtml } from '@sanity/block-content-to-html'
import imageUrlBuilder from "@sanity/image-url";

const sanity = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  useCdn: import.meta.env.VITE_SANITY_USE_CDN,
  apiVersion: import.meta.env.VITE_SANITY_API_VERSION,
});

const builder = imageUrlBuilder(sanity);
export const urlFor = (source) => builder.image(source);

export default sanity;
