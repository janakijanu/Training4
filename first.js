var message="Welcome to JS"

function simple()
{
    console.log("simple happy day")
}

function Loan(a,b,c)
{
    this.loanAmount=a;
    this.duration=b;
    this.irate=c;
    this.getInterestAmount=function(){
        return this.loanAmount*this.duration*this.irate/100;
    }
}
var PI=3.14;
var circleObj={
    "radius":10,
    "getArea":function(){
        return this.radius*this.radius*PI;
    }
}

/*exports.mymessage=message;
exports.greet=simple;
exports.Loan=Loan;
exports.circle=circleObj;
exports.farewell=function(){
    console.log("BYE");
}*/
module.exports={
    mymessage:message,
    greet:simple,
    Loan:Loan,
    circle:circleObj,
    farewell:function(){
        console.log("BYE");
}
}
