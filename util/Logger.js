/*
Logger class for easy and aesthetically pleasing console logging
*/
const chalk = require("chalk");
const moment = require("moment");
chalk.level = 2;

exports.log = (content, type = "log") => {
  const timestamp = `[${moment().format("YYYY-MM-DD HH:mm:ss")}]`;
  switch (type) {
    case "log": {
      return console.log(`${chalk.cyan(timestamp)} ${chalk.blue.underline(type.toUpperCase())} ${content}`);
    }
    case "warn": {
      return console.log(`${chalk.cyan(timestamp)} ${chalk.yellow.underline(type.toUpperCase())} ${content}`);
    }
    case "error": {
      return console.log(`${chalk.cyan(timestamp)} ${chalk.red.underline(type.toUpperCase())} ${content}`);
    }
    case "debug": {
      return console.log(`${chalk.cyan(timestamp)} ${chalk.yellow.underline(type.toUpperCase())} ${content}`);
    }
    case "cmd": {
      return console.log(`${chalk.cyan(timestamp)} ${chalk.white.underline(type.toUpperCase())} ${content}`);
    }
    case "ready": {
      return console.log(`${chalk.cyan(timestamp)} ${chalk.green.underline(type.toUpperCase())} ${content}`);
    }
    default: throw new TypeError("Logger type must be either warn, debug, log, ready, cmd or error.");
  }
};

exports.error = (...args) => this.log(...args, "error");

exports.warn = (...args) => this.log(...args, "warn");

exports.debug = (...args) => this.log(...args, "debug");

exports.cmd = (...args) => this.log(...args, "cmd");

exports.ready = (...args) => this.log(...args, "ready");
