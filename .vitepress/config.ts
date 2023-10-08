import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Ardeshir Izadi's Blog",
  description: 'Here I write my thoughts and ideas as a software engineer.',
  cleanUrls: true,
  base: '/vue-point-fork/',
  head: [
    ['meta', { name: 'twitter:site', content: '@ArdeshirIzadi' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    [
      'meta',
      {
        name: 'twitter:image',
        content: 'https://aghardeshir.github.io/android-chrome-512x512.png'
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ],
  ],
})
