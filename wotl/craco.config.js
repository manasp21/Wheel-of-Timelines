const webpack = require("webpack");

module.exports = {
  webpack: {
    configure: {
      resolve: {
        fallback: {
          url: require.resolve("url/"),
        },
      },
      module: {
        rules: [
          {
            test: /\.m?js/,
            resolve: {
              fullySpecified: false,
            },
          },
          {
            test: /\.json$/,
            loader: "json-loader",
            type: "javascript/auto",
          },
        ],
      },
    },
  },
};
