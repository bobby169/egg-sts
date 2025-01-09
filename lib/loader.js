"use strict";

const assert = require("assert");
const StsClient = require("@alicloud/sts-sdk");

module.exports = (app) => {
  // const config = app.config.sts;
  // app.sts = new STS(config); 这种形式config不需要添加client

  // 用addSingleton时，config.sts = {client: {}}要添加client
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

  return sts;
}
