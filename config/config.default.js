"use strict";

/**
 * egg-sts default config
 * @member Config#sts
 * @property {String} SOME_KEY - some description
 */
exports.sts = {
  client: {
    endpoint: "",
    accessKeyId: "",
    accessKeySecret: "",
    apiVersion: "2015-04-01",
  },
  app: true,
  agent: false,
};
