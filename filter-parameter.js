function callfilpar(arrbenua){
  var arr = [
  {negara : 'Indonesia', benua :'Asia'},
  {negara : 'Korea', benua : 'Asia'},
  {negara : 'Spanyol', benua : 'Eropa'},
  {negara : 'Italy', benua : 'Eropa'}]
  var arrbenua = arr.filter(function(ben){
   return ben.benua == 'Eropa'
  });
  console.log(arrbenua)
}
callfilpar();
