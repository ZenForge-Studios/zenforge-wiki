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
              label: 'ZenRewards',
              items: [
                { label: 'Introducción', link: '/plugins/zenrewards/01-introduction/' },
                { label: 'Funciones', link: '/plugins/zenrewards/02-functions/' },
                { label: 'Recompensas', link: '/plugins/zenrewards/03-rewards/' },
                { label: 'Menu', link: '/plugins/zenrewards/04-menu/' },
                { label: 'Comandos', link: '/plugins/zenrewards/05-commands/' },
                { label: 'Permisos', link: '/plugins/zenrewards/06-permissions/' },
                { label: 'Placeholders', link: '/plugins/zenrewards/07-placeholders/' },
                { label: 'Acciones', link: '/plugins/zenrewards/08-actions/' },
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
              label: 'ZenRewards',
              items: [
                { label: 'Introducción', link: '/plugins/zenrewards/01-introduction/' },
                { label: 'Funciones', link: '/plugins/zenrewards/02-functions/' },
                { label: 'Recompensas', link: '/plugins/zenrewards/03-rewards/' },
                { label: 'Menu', link: '/plugins/zenrewards/04-menu/' },
                { label: 'Comandos', link: '/plugins/zenrewards/05-commands/' },
                { label: 'Permisos', link: '/plugins/zenrewards/06-permissions/' },
                { label: 'Placeholders', link: '/plugins/zenrewards/07-placeholders/' },
                { label: 'Acciones', link: '/plugins/zenrewards/08-actions/' },
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