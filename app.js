var obj = require('./simpleModule.js');
var person = require('./functionAsClass.js');

console.log("module msg ::",obj.firstname); 
var personObj = new person("mugdha", "wadhokar");
console.log(" Function as class example ::",personObj.fullname()); 