function checkKalimat(params) {
    // ubah params menjadi array
    var kalimat = params.split(' ')

    // ambil huruf pertama di array pertama
    var hurufAwal = kalimat[0][0]

    // loop array, tambahkan setiap huruf awal ke hurufAwal
    for (var i = 1; i < kalimat.length; i++) {
        hurufAwal += ',' + kalimat[i][0]
    }
    return hurufAwal
}

console.log(checkKalimat("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."))