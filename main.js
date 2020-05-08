var matr_1 = [
    [2, 5, 1],
    [0, 8, 4],
    [3, 6, 9]
    
]

var matr_2 = [
    [0, 7, 1],
    [2, 8, 9],
    [3, 3, 1]
    
]

// console.log(matr)
// console.log(matr[1].length)

function multMatr(matr_1, matr_2){
    var columMatr_1 = matr_1[0].length
    var columMatr_2= matr_2[0].length
    var lineMatr_1 = matr_1.length
    var lineMatr_2 = matr_2.length
    
    if(columMatr_1 != lineMatr_2){ 
        return console.log('Матрицы не согласованы!')
    }
    var multMatr_3 = []
    for (var y=0; y<lineMatr_1; y++){
        multMatr_3[y] = [];
    }
    for (var k=0; k<columMatr_2; k++){
        for(var i=0; i<lineMatr_1; i++){
            var sum = 0
            for (var l = 0; l<lineMatr_2; l++){
                sum += matr_1[i][l]*matr_2[l][k]
                multMatr_3[i][k] = sum
            }
        }
    }
    return multMatr_3
}
console.log(multMatr(matr_1,matr_2))