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
  flowmeter: [
    {
      type: 'html',
      value: 'KhulnaSoft FlowMeter',
      className: 'sidebar-title',
    },    
  
    "flowmeter/index",
    'flowmeter/quickstart',

    {
      type: 'category',
      label: 'Advanced Usage',
      items: [
        'flowmeter/using/datasets',
        'flowmeter/using/analysis',
      ],
    },
  ],
};

module.exports = sidebars;