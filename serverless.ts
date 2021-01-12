import type { AWS } from "@serverless/typescript";

const serverlessConfiguration: AWS = {
  service: "hello-ts-layer",
  frameworkVersion: "2",
  custom: {
    webpack: {
      webpackConfig: "./webpack.config.js",
      includeModules: true,
    },
  },
  plugins: ["serverless-webpack-layers"],
  provider: {
    name: "aws",
    region: "eu-west-1",
    runtime: "nodejs12.x",
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
    },
    lambdaHashingVersion: "20201221",
  },
  layers: {
    HelloTsLayer: {
      path: "hello_ts_layer",
    },
  },
};

module.exports = serverlessConfiguration;
