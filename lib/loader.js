"use strict";

const assert = require("assert");
const StsClient = require("@alicloud/sts-sdk");

module.exports = (app) => {
  // const config = app.config.sts;
  // app.sts = new STS(config); 这种形式config不需要添加client

  // 用addSingleton时，config.sts = {client: {}}要添加client，并且在初始启动时，不会执行createSTS。在有调用app.sts方法时，才会执行createSTS
  app.addSingleton("sts", createSTS);
};

function createSTS(config, app) {
  const { endpoint, accessKeyId, accessKeySecret, apiVersion } = config;
  assert(
    config.endpoint && config.accessKeyId && config.accessKeySecret,
    "[egg-sts] Must set endpoint/accessKeyId/accessKeySecret in config"
  );

  const sts = new StsClient({
    accessKeyId: accessKeyId,
    accessKeySecret: accessKeySecret,
    endpoint: endpoint,
    apiVersion: apiVersion,
  });

  app.beforeStart(() => {
    app.coreLogger.info(`[egg-sts] status OK`);
  });

  return sts;
}
