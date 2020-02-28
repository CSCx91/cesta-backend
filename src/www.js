#!/usr/bin/env node

import app from './express';
import Server from './server';

console.log(typeof(Server));
const myServer=new Server(app);
myServer.init();