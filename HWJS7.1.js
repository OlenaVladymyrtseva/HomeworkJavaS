var text = 'Wonderful, Joyful, Happiness, Time, Task, Apple'
var regex = /\b[w][^a]{6,}\b/gi
console.log(text.match(regex))