function callsplice() {
var kota=['jakarta','medan','malang','cianjur'];
console.log(kota)
kota.splice(2,0,'bandung');
return kota;
}
console.log(callsplice());
