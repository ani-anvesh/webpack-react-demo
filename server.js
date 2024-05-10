const Webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const webpackConfig = require("./webpack.development.config.js");

const compiler = Webpack(webpackConfig);
const devServerOptions = { ...webpackConfig.devServer, open: true };
const server = new WebpackDevServer(devServerOptions, compiler);
const localIPv4 = WebpackDevServer.internalIPSync("v4");
const localIPv6 = WebpackDevServer.internalIPSync("v6");

console.log("Local IPv4 address:", localIPv4);
console.log("Local IPv6 address:", localIPv6);

server.startCallback(() => {
  console.log("Successfully started server on http://localhost:8080");
});
