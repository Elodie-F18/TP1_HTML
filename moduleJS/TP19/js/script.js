function calculerSommeDiagonal(matrice) {
    let sommeDiagonal1 =0;
    let sommeDiagonal2 =0;

    for(let i=0;i<matrice.length;i++) {
        sommeDiagonal1 += matrice[i][i]
        sommeDiagonal2 += matrice[i][matrice.length - i - 1]
    }
    return sommeDiagonal1 + sommeDiagonal2
}

