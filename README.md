# Scorp - Sample Project 1

This project is a `React Web Application`.

## Used technologies

- node v14.15.3
- npm v6.14.9
- yarn v1.22.5

You need to run `yarn install` command to install necessary dependencies in the project directory.

## Packages

### State Management

`redux`, `react-redux` and `redux-thunk` packages are used for state management.

In daily work, mostly I use `redux-saga`. While I have time, I used `redux-thunk` to learn and apply on this project.

### Localization

`react-redux-i18n` package is used for localization.

### To keep the code clean

- `eslint` is used as the linter
- `prettier` is used for code formatting
- `husky` is used to always keep the code clean in repository

### Styling and CSS Framework

While I have time, I used a responsive CSS framework package named as `bulma` and `SASS` language, which I never used
both of them before, to learn and apply on this project.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more
information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will
remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right
into your project so you have full control over them. All of the commands except `eject` will still work, but they will
point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you
shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t
customize it when you are ready for it.

### `yarn lint`

Runs `eslint` on whole project and shows errors and warnings that needs to be fixed.

Also, you can see eslint errors and warnings on the console that you start the application with `yarn start` command and
on the `Chrome Developer Tools console`.

### `yarn lint:fix`

Same as `yarn lint` command, but it also tries to fix the source code according to eslint rules. For this project I used
default rules of eslint and some custom rules, but we can add custom eslint rules as below.

This one is only used for checking if jsdocs are existing, we can add as many as rule we want.

```
'require-jsdoc': [
    'error', {
        require: {
            FunctionDeclaration: true, 
            MethodDefinition: true, 
            ClassDeclaration: true, 
            ArrowFunctionExpression: true, 
            FunctionExpression: true, 
        },
    },
],
```
