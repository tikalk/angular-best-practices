# Echoes Player ~(EMC)
Echoes is a great youtube player developed by [Oren Farhi](http://orizens.com).
It's fun & easy to listen or watch videos from youtube with Echoes.
What if youtube was designed to be used as music player?

Echoes Player is also available as a [Chrome Application](https://chrome.google.com/webstore/detail/echoes-player/aaenpaopfebcmdaegggjbkhaedlbbkde)

It can be regarded as the Media Player experience for youtube listening pleasure.
Other than that - it's a sample web app built with Angular.js & Bootstrap.

## Requirements

1. Install NodeJS - http://nodejs.org/ or via [command line](https://github.com/joyent/node/wiki/installing-node.js-via-package-manager)
2. Gulpjs, Bower & Karma Runner: ```npm install -g gulp bower karma```
3. Phantomjs (client testing): ```npm install phantomjs```
4. (optional) for Node Debugging using [node inspector](https://github.com/node-inspector/node-inspector): ```npm install -g node-inspector```
(? install less ```npm install -g less```) 

### Development mode
First, run this **ONCE** to install depenencies:  
```npm install && bower install```  

Then, to run the project, please use:
```npm start```

## Tests  
Tests are invoked via terminal

### UI Unit Tests
Running unit tests ```npm test```  
Running unit tests in debug mode (will be opened in chrome) - ```npm run testd```  

### End To End Tests  
1. Protractor - ```npm run e2e```
1. Protractor with Debug Mode - ```npm run e2ed```  