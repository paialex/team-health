# Deployment Instructions for GitHub Pages

## Prerequisites

Before deploying the application to GitHub Pages, ensure you have the following:

- A GitHub account
- Git installed on your local machine
- Node.js and npm installed on your local machine

## Steps to Deploy

1. **Clone the Repository**: Clone the repository to your local machine using the following command:
   ```bash
   git clone https://github.com/your-username/team-health.git
   ```

2. **Navigate to the Project Directory**: Change to the project directory:
   ```bash
   cd team-health
   ```

3. **Install Dependencies**: Install the project dependencies using npm:
   ```bash
   npm install
   ```

4. **Build the Project**: Build the project using the following command:
   ```bash
   npm run build
   ```

5. **Deploy to GitHub Pages**: Deploy the project to GitHub Pages using the following command:
   ```bash
   npm run deploy
   ```

6. **Configure GitHub Pages**: Go to the repository settings on GitHub, scroll down to the "GitHub Pages" section, and select the `gh-pages` branch as the source.

7. **Update Base URL**: Ensure that the `<base href="/team-health/">` tag is present in the `<head>` section of your `index.html` file.

8. **Update Webpack Configuration**: Make sure the `publicPath` in the `output` section of your `webpack.config.js` is set to `/team-health/`.

## Automated Deployment with GitHub Actions

To automate the deployment process using GitHub Actions, follow these steps:

1. **Create GitHub Actions Workflows**: Add the following workflow files to the `.github/workflows` directory in your repository:

   - **ci.yml**: This workflow runs tests on each commit or pull request.
     ```yaml
     name: CI

     on: [push, pull_request]

     jobs:
       build:
         runs-on: ubuntu-latest

         steps:
           - name: Checkout code
             uses: actions/checkout@v2

           - name: Set up Node.js
             uses: actions/setup-node@v2
             with:
               node-version: '14'

           - name: Install dependencies
             run: npm install

           - name: Run tests
             run: npm test
     ```

   - **deploy.yml**: This workflow automates the deployment to GitHub Pages upon successful builds.
     ```yaml
     name: Deploy

     on:
       push:
         branches:
           - main

     jobs:
       deploy:
         runs-on: ubuntu-latest

         steps:
           - name: Checkout code
             uses: actions/checkout@v2

           - name: Set up Node.js
             uses: actions/setup-node@v2
             with:
               node-version: '14'

           - name: Install dependencies
             run: npm install

           - name: Build project
             run: npm run build

           - name: Deploy to GitHub Pages
             uses: peaceiris/actions-gh-pages@v3
             with:
               github_token: ${{ secrets.GITHUB_TOKEN }}
               publish_dir: ./dist
     ```

2. **Commit and Push Changes**: Commit and push the changes to your repository. The GitHub Actions workflows will automatically run and deploy the application upon successful builds.

## Testing the Deployment

After deploying the application, visit the live application URL (e.g., `https://your-username.github.io/team-health/`) to ensure everything is working correctly.

## Troubleshooting

If you encounter any issues during the deployment process, consider the following troubleshooting steps:

- **Check Build Logs**: Review the build logs for any errors or warnings.
- **Verify GitHub Pages Settings**: Ensure that the `gh-pages` branch is correctly set as the source in the GitHub Pages settings.
- **Update Dependencies**: Ensure that all project dependencies are up to date by running `npm update`.
- **Clear Cache**: Clear your browser cache and refresh the page to see the latest changes.

For further assistance, refer to the [GitHub Pages documentation](https://docs.github.com/en/pages) or seek help from the community.
