"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debug = exports.ucfirst = exports.sleep = exports.flipStatus = exports.PENDING = exports.UP = exports.DOWN = exports.appName = void 0;
exports.appName = "Uptime Kuma";
exports.DOWN = 0;
exports.UP = 1;
exports.PENDING = 2;
function flipStatus(s) {
    if (s === exports.UP) {
        return exports.DOWN;
    }
    if (s === exports.DOWN) {
        return exports.UP;
    }
    return s;
}
exports.flipStatus = flipStatus;
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
exports.sleep = sleep;
function ucfirst(str) {
    if (!str) {
        return str;
    }
    const firstLetter = str.substr(0, 1);
    return firstLetter.toUpperCase() + str.substr(1);
}
exports.ucfirst = ucfirst;
function debug(msg) {
    if (process.env.NODE_ENV === "development") {
        console.debug(msg);
    }
}
exports.debug = debug;