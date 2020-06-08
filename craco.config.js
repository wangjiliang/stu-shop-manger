

const CracoAntDesignPlugin = require("craco-antd");
const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    { plugin: CracoAntDesignPlugin },
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          modifyVars: { '@primary-color': '	#FF4500' },
          javascriptEnabled: true,
        },
      },
    },
  ]
}
