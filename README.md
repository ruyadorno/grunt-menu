# grunt-menu

> Useful menu interface for listing/executing your configured tasks.

version: 0.2.1-rc

[![Build Status](https://travis-ci.org/ruyadorno/grunt-menu.svg?branch=master)](https://travis-ci.org/ruyadorno/grunt-menu)


## About

This plugin is intended to just add a simple menu interface for browsing and eventually executing your configured tasks.

See what it looks like:

![Executing plugin example](http://i.imgur.com/ojC1tXi.png)


## Getting Started

This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

### Setup

```shell
npm install grunt-menu --save-dev
```

If you are using the `load-grunt-tasks` module to automatically load your Grunt plugins, you are good to go. If that is not the case, the menu may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-menu');
```

## Usage Examples

To invoke the menu just run the `grunt menu` task:

```shell
grunt menu
```

That's it, a menu interface should appear and allow you to select which task to run.

### Multi task mode

If you want to invoke more than one task at once, you can activate the multiple tasks mode:

```shell
grunt menu --multi
```

It will behave like a checkbox list, where you select items using **space** and run the selected commands with the **enter** key.


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## License
Copyright (c) 2014 Ruy Adorno. Licensed under the MIT license.

