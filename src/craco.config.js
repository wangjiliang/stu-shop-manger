
/**
 * antd 按需加载配置步骤
 * 1. 安装 antd @craco/craco craco-antd
 * 2. 修改package.json 文件：
 * "scripts": {
    -   "start": "react-scripts start",
    -   "build": "react-scripts build",
    -   "test": "react-scripts test",
    +   "start": "craco start",
    +   "build": "craco build",
    +   "test": "craco test",
    }
    3. 在项目根目录下创建craco.config.js文件
 * 
 */
const CracoAntDesignPlugin = require("craco-antd");
// const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    { plugin: CracoAntDesignPlugin }
    // {
    //   plugin: CracoLessPlugin,
    //   options: {
    //     // lessLoaderOptions: {
    //       modifyVars: { '@primary-color': '	#FF4500' },
    //       javascriptEnabled: true,
    //     // },
    //   },
    // },
  ]
}
