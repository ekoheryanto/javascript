function callkelipatan(){
var kelipatan = [];
for (var i=1;i<100;i++){
if(i%10 === 0){
  kelipatan.push(i);
     }
  }
return kelipatan;
}
console.log(callkelipatan());
