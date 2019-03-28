var filesystem=require("fs");
var str=filesystem.readFileSync("rect.txt");
var rect=JSON.parse(str);
console.log(rect);