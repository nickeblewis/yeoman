# README

This project is based on running the following Yeoman commands

npm install -g yo
npm install -g generator-angular

Added some extra Karma modules to the package.json as required and swapped Chrome for PhantomJS to run unit testing within

Livereload turned off but can be turned back on if developer requires it, see Gruntfile.js for details

# Getting started

Once you unzip this, run 

- npm install
- bower install

grunt test - to run Karma tests
grunt serve - to view the site via localhost:3000 (you can change these settings under Gruntfile.js)
grunt - which builds to the dist/ folder