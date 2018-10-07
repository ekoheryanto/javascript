function calldata(){
var datalama = ['cianjur','sukabumi','bogor']
var databaru = datalama.map((item, index, array)=>{
return 'kota '+item;
});
console.log(databaru)
}
calldata();
