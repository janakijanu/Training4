var fm=require("./first.js");  //currest file folder 

console.log(fm.mymessage);

fm.greet()

var MyLoan=fm.Loan;
ml=new MyLoan(10000,5,4);
console.log(ml.loanAmount);
console.log(ml.duration);
console.log(ml.irate);
console.log(ml.getInterestAmount());

var c1=fm.circle;
console.log(c1);

var evening=fm.farewell;
evening();
