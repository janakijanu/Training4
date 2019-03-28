var account={
    "id":12345,
    "name":"sheela",
    "balance":25000.00
};
var str=JSON.stringify(account,null,2);
console.log(str);

var account2=JSON.parse(str);
console.log(account2);
