function cetakPolaSegitigaPascalCustom() {
    var kode = {
        '1': 'x',
        '2': 'y',
        '3': 'z',
        '4': 'a',
        '5': 'b',
        '6': 'c',
        '10': 'd'
    }

    var barisSegitiga = [
        ['1'],
        ['1', '1'],
        ['1', '2', '1'],
        ['1', '3', '3', '1'],
        ['1', '4', '6', '4', '1'],
        ['1', '5', '10', '10', '5', '1']
    ]

    for (var i = 0; i < barisSegitiga.length; i++) {
        var baris = ''
        for (var j = 0; j < barisSegitiga[i].length; j++) {
            baris += kode[barisSegitiga[i][j]]
        }
        console.log(baris)
    }
}

cetakPolaSegitigaPascalCustom()