module.exports = {
  devServer: {
    overlay: false,
    // proxy: {
    //   "/api/owms": {
    //     target: "https://100.100.107.177:9090",
    //     changeOrigin: true,
    //   },
    // },
  },

  runtimeCompiler: true,

  // lintOnSave: false,
  // outputDir: '../src/main/webapp/site/',
  publicPath: "",

  /* configureWebpack: config => {
    config.devtool = 'source-map';
  }, */

  configureWebpack: {
    devtool: "source-map",

    /* plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
      }),
    ], */
  },

  chainWebpack: config => {
    config.optimization.delete("splitChunks");
  },

  css: {
    sourceMap: process.env.NODE_ENV === "development",
  },

  productionSourceMap: false,

  transpileDependencies: ["vuetify"],
};
