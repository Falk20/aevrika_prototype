module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://62.152.55.169:9090",
        pathRewrite: { "^/api": "/rsv_demo/hs/siteAPI/" },
      },
    },
  },
};
