const fs = require("fs-extra");
module.exports = {
    makers: [
        {
            name: '@electron-forge/maker-squirrel',
            config: {},
        },
        {
            name: '@electron-forge/maker-zip',
            platforms: ['darwin'],
        },
        {
            name: '@electron-forge/maker-deb',
            config: {},
        },
        {
            name: '@electron-forge/maker-rpm',
            config: {},
        },
    ],
    hooks: {
        generateAssets: async () => {
            const fs = require('fs-extra');
            if (fs.existsSync('config.json')) {
                await fs.copy('config.json', 'dist/config.json');
            }
            if (fs.existsSync('llms-config.json')) {
                await fs.copy('llms-config.json', 'dist/llms-config.json');
            }
        },
    },
};