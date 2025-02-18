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
            if (fs.existsSync('llms_config.json')) {
                await fs.copy('llms_config.json', 'dist/llms_config.json');
            }
            if (fs.existsSync('agent_config.json')) {
                await fs.copy('agent_config.json', 'dist/agent_config.json');
            }
        },
    },
};