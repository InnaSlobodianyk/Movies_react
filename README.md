# Movies
<p>Movie search page with features:</p>
<ul>
    <li>when the page loads user sees a daily popular films list (according to the API version);</li>
    <li>user can find a movie by name (by search), after submitting he/she will see a list of films;</li>
    <li>when user clicks on a movie card (on the popular movies list  or on the search results list) he/she is
     redirected to the page with movie description information;</li>
    <li>when user clicks on the favorites icon - this movie adds to favorites list;</li>
    <li>user has an ability to edit the favorite movies list on the Favorites page (delete movies from the list)</li>
</ul>

<h2>Installation</h2>
<ol>
    <li>Clone repository</li>
    <li>From the root directory run command <code>npm install</code> (this'll install node_modules)</li>
    <li>Run command <code>npm run build</code> to compile files to build/ directory</li>
    <li>To start local development with auto-watcher run command <code>npm start</code></li>
    <li>All changes should be done in <code>src</code> folder</li>
</ol>

<h2>Using</h2>
<p>Run <code>npm start</code> and open localhost</p>

<h2>Commands</h2>
<ul>
    <li>Webpack development with watcher: <code>npm start</code></li>
    <li>Webpack production: <code>npm run build</code></li>
</ul>

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.