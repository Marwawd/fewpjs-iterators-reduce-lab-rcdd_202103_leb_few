const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
let totalBatteries=function(g){
let number=g.reduce((a,c)=> a+c);
return number;

}
let res=totalBatteries(batteryBatches);
