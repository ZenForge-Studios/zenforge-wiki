// @ts-nocheck
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    starlight({
      title: 'ZenForge Wiki',
      customCss: ['./src/assets/custom.css'],
      logo: {
        src: './src/assets/logo.svg', 
        replacesTitle: true, 

      },
      
      social: [
        { label: "GitHub", href: "https://github.com/Jossxph", icon: "github" },
        { label: "Discord", href: "https://discord.gg/3UsDs72qMd", icon: "discord" },
      ],

      editLink: {
        baseUrl: "https://github.com/ZenForge-Studios/zenforge-wiki",
      },


      defaultLocale: 'es',
      locales: {
        // --- IDIOMA ESPAÑOL ---
        es: {
          label: 'Español',
          lang: 'es-ES',
          sidebar: [
            {
              label: 'Introducción',
              link: '/'
            },
            {
              label: 'Plugin de Prueba',
              items: [
                { label: 'Introducción a Test', link: '/plugins/test/01-introduction/' },
                { label: 'Ejemplos de Componentes', link: '/plugins/test/02-component-examples/' },
              ]
            },
            {
              label: 'Soporte',
              link: '/support/' 
            },
            {
              label: 'Nosotros',
              link: '/about/'
            },
          ],
        },
        // --- IDIOMA INGLÉS ---
        en: {
          label: 'English',
          lang: 'en-US',
          sidebar: [
            {
              label: 'Introduction',
              link: '/'
            },
            {
              label: 'Test Plugin',
              items: [
                { label: 'Introduction to Test', link: '/plugins/test/01-introduction/' },
                { label: 'Component Examples', link: '/plugins/test/02-component-examples/' },
              ]
            },
            {
              label: 'Support',
              link: '/support/'
            },
            {
              label: 'About Us',
              link: '/about/'
            },

          ],
        }
      }
    }),

  ],
});