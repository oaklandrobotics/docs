import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  title: "ORA Documentation",
  description: "Documentation for Oakland Robotics Association",
  //base: '/docs/',
  cleanUrls: true,
  markdown: {
    math: true,
  },
  lastUpdated: true,
  srcDir: './src',
  themeConfig: { // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { 
        text: 'Projects', 
        items: [
          { text: 'IGVC 2025', link: '/projects/igvc-2025/' },
          { text: 'IGVC 2024', link: '/projects/igvc-2024/' },
          { text: 'Minibot', link: '/projects/minibot/' }
        ]
      },
      { text: 'Documentation Guide', link: '/guide'}
    ],
    logo: '/logo.png',
    sidebar: generateSidebar({ //https://vitepress-sidebar.jooy2.com/api
      documentRootPath: 'src',
      collapsed: true,
      collapseDepth: 2,
      useTitleFromFileHeading: true,
      useFolderTitleFromIndexFile: true,
      useFolderLinkFromIndexFile: true,
      sortMenusByFrontmatterOrder: true,
      //excludeFiles: ['guide.md']
    }),
    socialLinks: [
      { icon: 'github', link: 'https://github.com/oaklandrobotics' },
      { icon: 'discord', link: 'https://discord.gg/X95ua4EWuT'}
    ],
    outline: 'deep',
    footer: {
      copyright: 'Copyright © 2026 Oakland Robotics Association'
    },
    editLink: {
      pattern: 'https://github.com/oaklandrobotics/docs/edit/main/src/:path',
      text: 'Edit this page on GitHub'
    },
    search: {
      provider: 'local',
    },
  },
})
