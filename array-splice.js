function callsplice() {
var kota=['jakarta','medan','malang','cianjur'];
console.log(kota)
//kota.splice(2,0,'bandung');    //tambah penyisipan data
kota.splice(3,1); //penghapusan data array
return kota;
}
console.log(callsplice());
