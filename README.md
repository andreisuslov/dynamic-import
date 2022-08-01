# dynamic-import

Dummy project to test the functionality of dynamic importing of modules in JavaScript. User of one project can re-import modules from another project without restarting the whole project.

The project called 'app' is the main project of the dynamic-import project. It contains the module ./app.ts which gets transpiled to app.js in ./app/dist folder.
The project called 'user' is the project that contains ./user.ts module that uses the module ./dist/app.js copied from the 'app' project.

Using the dynamic import feature, we achieve dynamic reloading of the JS modules without rebuilding and importing the whole project.
