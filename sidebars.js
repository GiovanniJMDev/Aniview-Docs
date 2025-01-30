// sidebars.js

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: "category",
      label: "Introducción",
      collapsed: false,
      items: ["Introduction/Welcome", "Introduction/News"],
    },
    {
      type: "category",
      label: "Primeros pasos",
      collapsed: false,
      items: ["FirstsSteps/SystemRequired", "FirstsSteps/GetHelp"],
    },
    {
      type: "category",
      label: "Configuración",
      collapsed: false,
      items: [
        "Configuration/LoginAndRegister",
        "Configuration/CustomizationProfile",
        "Configuration/ListManagement",
        "Configuration/Anibot",
        "Configuration/Anipon",
      ],
    },
  ],
};

module.exports = sidebars;
