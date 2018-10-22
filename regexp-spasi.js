function regexp(spasi){
var ini = spasi.match(/\s/g) //untuk mengambil semua data terkecuali menggunakan /W /D /S
console.log(ini)
console.log("Spasi ada :",ini.length)
}

regexp("jumlah pada Spasi pad kalimat ini bisa kita lihat dengan regexp" )
