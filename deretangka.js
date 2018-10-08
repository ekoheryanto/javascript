function deret(n){
var hasil = ''
for(var i=1;i<=n;i++){
if(i%3 === 0){
  hasil += 'NIO '
}else if(i%5 === 0){
  hasil += 'MIC '
}else{
  hasil += i+ ' '
}
}
return hasil;
}
console.log(deret(10));
console.log(deret(20));
console.log(deret(30));
