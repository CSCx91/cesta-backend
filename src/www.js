#!/usr/bin/env node

var app = require('./express');
import Server from './server';

console.log(typeof(Server));
const myServer=new Server(app);
myServer.init();