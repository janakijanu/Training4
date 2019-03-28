var myfs=require("fs");   //inbuilt==>fs
var rectangle={
    "width":20,
    "height":30
}

var str=JSON.stringify(rectangle);

//myfs.writeFileSync("myinfo.txt",str);

myfs.writeFileSync("rect.txt",str);
