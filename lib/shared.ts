import { createGetUrl } from 'fumadocs-core/source';

export const appName = 'My Brain';
export const docsRoute = '/docs';
export const docsImageRoute = '/og/docs';

export const gitConfig = {
  user: 'your-username',
  repo: 'my-brain',
  branch: 'main',
};

const getImageUrl = createGetUrl(docsImageRoute);

export function getPageImageUrl(page: { slugs: string[]; locale?: string }) {
  const segments = [...page.slugs, 'image.png'];

  return { segments, url: getImageUrl(segments, page.locale) };
}
