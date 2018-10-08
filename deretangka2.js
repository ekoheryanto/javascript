function deret2(n){
var hasilnya=''
for (var i=1;i<=n;i++){
  if(i%3 === 0){
    hasilnya += 'NIO '
  }else if(i%5 === 0){
    hasilnya += 'MIC '
  }else if (i%8 === 0) {
    hasilnya += 'NIOMIC '
  }else{
    hasilnya += i+' '
  }
}
return hasilnya;
}
console.log(deret2(10));
console.log(deret2(20));
console.log(deret2(35));
