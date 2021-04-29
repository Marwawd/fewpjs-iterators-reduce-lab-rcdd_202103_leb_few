const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
/*
let number,n;
// Code your solution here
function totalBatteries(g){
//let number=
return g.reduce((a,c)=> a+c);
//return number;

}
let res=totalBatteries(batteryBatches);
*/
let totalBatteries;
function reducer(g){
//let number=
 totalBatteries=g.reduce((a,c)=> a+c);
 return totalBatteries
//return number;

}
let res=reducer(batteryBatches);
