function callfilter(){
// var arr = [1,2,3,4,5,6,7,8,9,10,11]
// var arrganjil = arr.filter(function(item){
// return item % 2 !== 0;
// });
// console.log(arrganjil)

var prov = [
  {kab :'cianjur', provinsi : 'Jabar'},
  {kab :'sukabumi', provinsi : 'Jabar'},
  {kab :'bogor', provinsi : 'Jabar'},
  {kab :'cilacap', provinsi : 'Jateng'},
  {kab :'solo', provinsi : 'Jateng'},
  {kab :'sleman', provinsi : 'Jogja'}]
var newprov = prov.filter(function(vinsi){
  return vinsi.provinsi == 'Jabar'
});
console.log(newprov)
}
callfilter();
