/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};
  
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1591939557003_4688';

  // add your middleware config here
  config.middleware = ['errorHandler','interceptHttp']
  config.cluster = {
    listen: {
      port: 7001
    }
  }
  config.security = {
    csrf: {
      enable: false
    },
    xframe: {
      enable: true,
      value: 'ALLOW-FROM http://chp.jclps.com'
    }
  }
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: '127.0.0.1',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: 'password',
      // 数据库名
      database: 'blog',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  }
  return {
    ...config,
    ...userConfig
  };
};