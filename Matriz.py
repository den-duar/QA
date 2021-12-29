from QAProgramação import matrizQuadradoMagico


def somalinhacoluna(matriz):
    linhaanterior = 0
    colunaanterior = 0
    for i in range(len(matriz)):
        somalinha = 0
        somacoluna = 0
        for j in range(len(matriz)):
            somalinha+=matriz[i][j]
            somacoluna+=matriz[j][i]
        print(somalinha)
        print(somacoluna)

def somadiagonal(matriz):
    somadiagonal = 0
    somadiagonalsec = 0
    for i in range(len(matriz)):
        somadiagonal += matriz[i][i]
        somadiagonalsec += matriz[i][len(matriz)-i-1]
    print(somadiagonal)
    print(somadiagonalsec)


matriz = [[5,12,7],[10,8,6],[9,4,11]]
somalinhacoluna(matriz)

