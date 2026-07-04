import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isUserPage = repositoryName?.endsWith('.github.io');

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: process.env.GITHUB_REPOSITORY
    ? isUserPage
      ? '/'
      : `/${repositoryName}/`
    : '/',
});
