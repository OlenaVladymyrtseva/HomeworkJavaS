"use strict"

const prompt = require('prompt-sync')();

let x = prompt("Введіть число, яке потрібно піднести до степеня ");
let y = prompt("Введіть степінь ");
let result = Math.pow (x,y);
console.log ('Число ' + x + ' в ' + y + 'степені' + ' = ' + result);