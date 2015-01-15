# Suit-lite generator [![Build Status](https://secure.travis-ci.org/ImBobby/generator-suit-lite.png?branch=master)](https://travis-ci.org/ImBobby/generator-suit-lite)

> Suit-lite is a lite version of [Suit-baze](https://github.com/ImBobby/suit-baze)

## Purpose

I made this generator in case I need quick boilerplate to test/experiment something new. Since the purpose is just for test/experiment, no build system and preprocessing needed. That's why it called **Suit-lite**

## Getting Started

Make sure you have **[node](http://nodejs.org/download/)** and **[yeoman](http://yeoman.io/)** installed.

Install generator by running
```
npm install generator-suit-lite -g
```
if it doesn't work, you might need `sudo` command

## Usage

Run:
```
yo suit-lite
```

By default it will generate:

* index.html
* bower.json
* css/
    - normalize.css
    - main.css
* img/
* js/
    - main.js

This generator also provide jQuery and Bootstrap in case you need it.

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
