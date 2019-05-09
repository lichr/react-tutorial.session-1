# Session 1. Setup Project

In this session we will setup a new project for a react application.
You will learn
- Setup node project with npm
- Use webpack to setup a build flow
- write a minimum react application
- Build the application
  - Start a development server
  - Access the application


## Setup GIT
```sh
# create a new directory
mkdir session-1
cd session-1

# initialize git repository
git init
```


## Setup Node Project
```sh
# initialize node project
npm init
```

## Install Needed Packages
These packages are dependencies, which are used by the application.

```sh
# core react library
npm install --save react

# react adaptation for browser (DOM)
npm install --save react-dom
```
#### Questions
- why **react** and **react-dom** are separate packages ?


These packages are development tools, which are used to build the application.

```sh
# babel is the most tool used to trans-compile javascript code.
npm install --save-dev @babel/core

# this babel plugin trans-compile your code into specified envirionment, like chrome v77
npm install --save-dev @babel/preset-env

# this babel plugin trans-compile jsx syntax into normal java-script
npm install --save-dev @babel/preset-react

# this is the most popular bundling tool
npm install --save-dev webpack

# this allows you call webpack from command line
npm install --save-dev webpack-cli

# this is web server with hot-update support, used for developing / testing your application
npm install --save-dev webpack-dev-server

# this webpack plugin used to copy static files like html files, image files into output directory
npm install --save-dev copy-webpack-plugin

# this webpack loader allows webpack to call babel trans-compiler
npm install --save-dev babel-loader
```

#### Questions
- why do we need **bundler** like webpack.
- why do we need **trans-compiler** like babel.


## Write a simple React application

Create a file: src/index.jsx

```jsx
import React from 'react'
import ReactDom from 'react-dom'

class App extends React.Component {
    render() {
        return (<h1>Welcome to My Awesome React Application...</h1>)
    }
}

ReactDom.render(
    <App />,
    document.getElementById('react-root')
)    
```

#### Questions
- What is React Component ?
- What is JSX and what is equivalent JS code ?


## Config webpack

create a file: webpack.config.js

```js
const path = require('path')
const CopyWebPackPlugin = require('copy-webpack-plugin')

// export configuration
module.exports = {
    mode: 'development',
    // the entry point of your application, like main function in some languages
    // path.resolve makes sure we have an absolute path
    entry: path.resolve(__dirname, 'src/index.jsx'),
    // where to put the build output
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    // rule to process different types of source code files
    module: {
        rules: [          
            {
                test: /\.jsx?$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            // config babel trans-compiler
                            presets: [
                                // step 2: convert js to the version supported by target environment.
                                ['@babel/preset-env', {targets: {chrome: 70}}],
                                // step 1: convert jsx to js first
                                '@babel/preset-react'
                            ]    
                        }
                    }
                ],
                exclude: /node_modules/
            }
        ]
    },
    // copy these static resource files to output folder
    plugins: [
        new CopyWebPackPlugin([{from: 'static'}])
    ],
    // generate source-map for better debug experience
    devtool: 'source-map',
    // configure the dev server
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        host: '0.0.0.0',
        port: 9000,
        inline: true,
        index: 'index.html',
        https: false
    }
}
```

Add scripts to package.json, so that we run these scripts by **npm run** 

```json
  "scripts": {
    "build": "webpack",
    "start": "webpack-dev-server --hot"
  },
```


## Start a web server and access the application

```sh
npm start
```

Open a web browser and access the application by

```
http://localhost:9000
```

## References

- https://www.valentinog.com/blog/babel/

