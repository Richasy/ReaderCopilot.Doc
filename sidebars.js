/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: 'category',
      label: 'About Reader Copilot',
      items: ['intro', 'read-library', 'ai-support', 'release-note'],
    },
    {
      type: 'category',
      label: 'Book Reader',
      items: ['import-txt', 'book-management', 'custom-reader', 'book-source', 'write-plugin']
    },
    {
      type: 'category',
      label: 'Rss Reader',
      items: ['rss-overview', 'rss-connect']
    },
    {
      type: 'category',
      label: 'Podcast',
      items: ['podcast-overview']
    }
  ]
};

module.exports = sidebars;
