import type { AstroInstance } from 'astro';

export type AstroPage = AstroInstance & {
  title: string;
  title_html: string;
  description: string;
  category: string;
};
