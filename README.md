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
npm install --save react
npm install --save react-dom
```


These packages are development dependencies, which are used to build the application.

```sh
npm install --save-dev webpack
npm install --save-dev webpack-cli
npm install --save-dev webpack-dev-server
npm install --save-dev copy-webpack-plugin
npm install --save-dev babel-loader
npm install --save-dev @babel/core
npm install --save-dev @babel/preset-env
npm install --save-dev @babel/preset-react
```

- **babel** is a popular tool to trans-compile JS source code to a certain version (trans-compiler).
- **webpack** is a popular tool to build your source code into one single js file. This is needed for a front end web application.
- **webpack-dev-server** is a web-server used to development purpose. You can access your application via it.



## Write a simple React application



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

