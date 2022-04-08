const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    index: './src/index.js',
    product: './src/product.js',
    addProduct: './src/add-product.js',
    editProduct: './src/edit-product.js',
    category: './src/category.js',
    addCategory: './src/add-category.js',
    editCategory: './src/edit-category.js',
    detailProduct: './src/detail-product.js',
  },
  output: {
    filename: '[name]_bundle.min.js',
    path: path.resolve(__dirname, 'build/script'),
    // clean: true,
  },
  mode: 'development',
  devServer: {
    static: "./build"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Thống kê cửa hàng',
      filename: '../admin/index.html',
      template: "public/admin/index.html",
    }),
    new HtmlWebpackPlugin({
      title: 'Danh sách sản phẩm',
      filename: '../admin/page-list-product.html',
      template: "public/admin/page-list-product.html",
    }),
    new HtmlWebpackPlugin({
      title: 'Thêm sản phẩm',
      filename: '../admin/page-add-product.html',
      template: "public/admin/page-add-product.html",
    }),
    new HtmlWebpackPlugin({
      title: 'Sửa sản phẩm',
      filename: '../admin/page-edit-product.html',
      template: "public/admin/page-edit-product.html",
    }),
    new HtmlWebpackPlugin({
      title: 'Danh sách danh mục',
      filename: '../admin/page-list-category.html',
      template: "public/admin/page-list-category.html",
    }),
    new HtmlWebpackPlugin({
      title: 'Thêm danh mục',
      filename: '../admin/page-add-category.html',
      template: "public/admin/page-add-category.html",
    }),
    new HtmlWebpackPlugin({
      title: 'Sửa danh mục',
      filename: '../admin/page-edit-category.html',
      template: "public/admin/page-edit-category.html",
    }),
    new HtmlWebpackPlugin({
      title: 'Meta Chair | Ghế công thái học',
      filename: '../client/index.html',
      template: "public/client/index.html",
    }),
    new HtmlWebpackPlugin({
      title: 'Chi tiết sản phẩm',
      filename: '../client/product-details.html',
      template: "public/client/product-details.html",
    }),
    // new HtmlWebpackPlugin({
    //   title: 'Danh mục sản phẩm',
    //   filename: '../client/product-grid.html',
    //   template: "public/client/product-grid.html",
    // }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "./src/assets", to: "../assets" }
      ]
    }),

  ],
optimization: {
  splitChunks: {
    chunks: 'all'
  }
},
module: {
  rules: [
    {
      test: /\.(png|jpg|gif)$/i,
      use: [
        {
          loader: "file-loader",
        },
      ],
    },
    {
      test: /\.css$/i,
      use: ["style-loader", "css-loader"],
    },
  ],
  },
};