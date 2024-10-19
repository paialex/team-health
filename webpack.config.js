const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/team-health/',
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
      new CssMinimizerPlugin(),
    ],
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [],
  ci: {
    githubActions: {
      workflows: {
        ci: {
          name: 'CI',
          on: ['push', 'pull_request'],
          jobs: {
            build: {
              'runs-on': 'ubuntu-latest',
              steps: [
                { name: 'Checkout code', uses: 'actions/checkout@v2' },
                { name: 'Set up Node.js', uses: 'actions/setup-node@v2', with: { 'node-version': '14' } },
                { name: 'Install dependencies', run: 'npm install' },
                { name: 'Run tests', run: 'npm test' },
              ],
            },
          },
        },
        deploy: {
          name: 'Deploy',
          on: { push: { branches: ['main'] } },
          jobs: {
            deploy: {
              'runs-on': 'ubuntu-latest',
              steps: [
                { name: 'Checkout code', uses: 'actions/checkout@v2' },
                { name: 'Set up Node.js', uses: 'actions/setup-node@v2', with: { 'node-version': '14' } },
                { name: 'Install dependencies', run: 'npm install' },
                { name: 'Build project', run: 'npm run build' },
                { name: 'Deploy to GitHub Pages', uses: 'peaceiris/actions-gh-pages@v3', with: { github_token: '${{ secrets.GITHUB_TOKEN }}', publish_dir: './dist' } },
              ],
            },
          },
        },
      },
    },
  },
};
