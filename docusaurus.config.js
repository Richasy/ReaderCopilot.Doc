// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Reader Copilot',
  tagline: 'A light and interesting reading tool, please enjoy reading',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://readercopilot.richasy.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Richasy', // Usually your GitHub org/user name.
  projectName: 'ReaderCopilot.Public', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh',
    locales: ['en', 'zh'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      zh: {
        label: '简体中文',
        htmlLang: 'zh-CN'
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Richasy/ReaderCopilot.Doc',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      navbar: {
        hideOnScroll: true,
        title: 'Reader Copilot',
        logo: {
          alt: 'Reader Copilot logo',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/docs', label: 'Documentation', position: 'left'},
          {
            href: 'https://www.microsoft.com/store/apps/9PFZCKRHW0BC',
            label: 'Download',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/Richasy/ReaderCopilot.Public',
            className: 'header-github-link',
            'aria-label': 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Book source',
                to: '/docs/book-source',
              },
              {
                label: 'AI capabilities',
                to: '/docs/ai-support',
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/Richasy',
              },
              {
                label: 'BiliBili',
                href: 'https://space.bilibili.com/5992670',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/RichasyZhang',
              },
            ],
          },
          {
            title: 'Other apps',
            items: [
              {
                label: 'Fantasy Copilot',
                href: 'https://www.microsoft.com/store/apps/9NB0NB3MLQTM'
              },
              {
                label: 'Bili Copilot',
                href: 'https://www.microsoft.com/store/apps/9MVFJLPH517M'
              }
            ],
          },
          {
            title: 'Download',
            items: [
              {
                html: `<p align="left">
                <a title="Get From Microsoft Store" href="https://www.microsoft.com/store/apps/9MVFJLPH517M?launch=true&mode=full" target="_blank">
                  <picture>
                    <source srcset="https://get.microsoft.com/images/en-US%20light.svg" media="(prefers-color-scheme: dark)" />
                    <source srcset="https://get.microsoft.com/images/en-US%20dark.svg" media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)" /><img src="https://get.microsoft.com/images/en-US%20dark.svg" width=144 />
                  </picture>
                </a>
               </p>`,
              },
            ],
          }
        ],
        copyright: `
          <br />
          <strong>© Richasy ${new Date().getFullYear()} | Documentation Distributed under CC-BY-4.0 </strong>
          <br />
          © ${new Date().getFullYear()} Richasy. All rights reserved.`,
      },
      algolia: {
        appId: 'YAEOAISG7A',
        apiKey: '226f8ac1e24d145e693c37672dead467',
        indexName: 'docs',
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
