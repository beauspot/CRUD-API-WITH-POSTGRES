few Points to note;

1. install babel whilist working with nodejs/express => "npm i @babel/core @babel/node @babel/preset-env"
2. Create a .babelrc file in the folder and populate with the following:
   {
   "presets": [
   [
   "@babel/preset-env", {
   "targets": {
   "node": "current"
   }
   }
   ]
   ]
   }
3. Install Babel to work with sequelise => "npm i @babel/register"
4. If you look at `src/models/index.js`, it is not written in ES6. Let's refactor
