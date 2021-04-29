const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
let totalBatteries=function(g){
  return g.reduce((a,c)=> a+c);

}
let res=totalBatteries(batteryBatches);
