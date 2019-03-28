var obj={
    "x":10,
    "y":20
}
console.log(obj.x);
console.log(obj.y);
if(obj.x){
    console.log("HCL");
}
if(!obj.z){
    obj.z=40;
}
obj.print=function(){
    console.log(this.x+","+this.y+","+this.z);
}
console.log(obj);
obj.print();
try{
    obj.z();
}
catch(err)
{
console.log(err)
}
try{
    f1();
}
catch(err)
{
console.log(err)
}
console.log("----------------------")  ///code run until the end if error having in this

