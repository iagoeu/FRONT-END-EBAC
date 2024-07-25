# Operadores


## Aritiméticos: retornam o resultado de uma operação
- Soma +
- Subtração -
- Multiplicar *
- Dividir /
- Módulo% (resto da divisão)
- Math: randon(), round(),sqrt()


## Comparadores matemáticos:teste lógico,retorno booleano (true / false);
< menor que
> maior que
<= menor ou igual
>= maior ou igual


## Comparadores Lógicos: teste lógico, retorno booleano (true / false);

- == igualdade entre sentenças (valor)
- != Diferença entre sentenças (Valor)
- === igualdade entre sentenças (Valor e Tipo)
- !== Diferença entre sentenças (Valor e Tipo)


## Operadores de lógica e junção logica
- !       NÃO(NOT)
- &&      E (AND)
- ||      OU(OR)


#### Exemplod;
- a != b // o valor de a é diferente de b
- x !== y //o valor e o tipo de x são diferentes de y
- !a == b //o valor de a não é igual ao valor de b

#### As condições lógicas são convertidas em numeros binarios

- true é equivalente a 1
- false é equivalente a 0


### Operador lógico de atribuição

tem a capacidade de atribuir valor a uma variavel a partir de uma condição lógica, economiza IPs

Exemplo:

var meuCarro = cor == "preto" ? "preto" : "branco"


## Condicionais


## Laços de Repetição
For([ExpresãoInicial];[condição];[incremento/decremento]) {
    [Resultado]
}

````
//Fazer revisão de carro com 10km
var km;
var revisao = 10;
for ( km = 0;km < 10; km++) {
    console.log("O carro rodou apenas " + km + "kms não precisa de revisão")
}
````

### Cálculo de média de alunos
for([expresãoInicial;[condição];[incremento/decremento]])

While ( [condição] ) {
    [execução]
}
var c = 0


while ( c < 10 ) {
    c++
}
var hora = 23

while(hora > 0) {
    hora--
    console.log(hora)
}
````
do  {
 [execução]
} while (condição)
````

````
var alunos = [
    [6,7,8,6],
    [8,5,6,8],
    [10,6,8,7],
    [8,8,8,8],
    [6,6,6,6,6]

    ]

    var nota = 0
for (var i=0;i < alunos.length;i++) {
    notasaluno = alunos[i]
    nota = 0
    console.log("Aluno " + parseInt(i+1) )
    console.log("Notas; " + notasaluno)
    for (c = 0;c < notasaluno.length;c++) {
        nota += notasaluno[c]
    }

    media = nota / 4

    if(media >= 7) {
        resultado = "aprovado"
    } else {
        resultado = "reprovado"
    }
    console.log("Média " + media + " - " + resultado)
}

````