// let nomeCliente = prompt("Digite o nome do cliente");
// let qtdLitros = parseInt(prompt("Qual o valor do abastecimento?"));

// let valorCompra = parseFloat(qtdLitros / 6.80);

// alert(`O cliente ${nomeCliente} abasteceu: ${valorCompra.toFixed(2)}L`);

// let grausCelsius = prompt("Digite a tampereatura em graus celsius")
// let valorConvertido = parseFloat(((9 * grausCelsius) + 160 )/ 5)

// alert(`O valor ${grausCelsius}°c em Fahrenheit é ${valorConvertido}`)

// let fahrenheit = prompt("Digite a tampereatura em graus fahrenheit")
// let valorConvertido2 = parseFloat(((fahrenheit - 32) * 5)/9)

// alert(`O valor ${fahrenheit} em graus celsius é ${valorConvertido2}`)

// let comprimento = prompt("Digite o comprimento da caixa")
// let largura = prompt("Digite a largura da caixa")
// let altura = prompt("Digite a altura da caixa")

// alert(`O volume é de ${parseFloat(comprimento*largura*altura)}`)

// let numeroInteiro = prompt("Digite o numero que deseja elevar ao quadrado")
// let aoquadrado = parseFloat(numeroInteiro*numeroInteiro)
 
// alert(`O valor ${numeroInteiro} ao quadrado é ${aoquadrado}`)

// let nota1 = parseFloat(prompt("Digite sua 1º nota"))
// let nota2 = parseFloat(prompt("Digite sua 2º nota"))
// let nota3 = parseFloat(prompt("Digite sua 3º nota"))
// let nota4 = parseFloat(prompt("Digite sua 4º nota"))
// let nota5 = parseFloat(prompt("Digite sua 5º nota"))
// let soma  = (nota1+nota2+nota3+nota4+nota5)
// let media = (soma/ 5) 

// alert(`A soma dos valores informados é: ${soma} e a média das notas é: ${media}`)

// let valor1 = parseFloat(prompt("Digite o número a ser dividído"))
// let valor2 = parseFloat(prompt("Digite o número divisor"))
// let resultadoDivisao = valor1 / valor2 

// alert(`O resto da divisão de ${valor1} por ${valor2} é : ${resultadoDivisao}`)

// let palavra =(prompt("Digite a frase ou palavra que deseja contabilizar"))
// let caracteres ="palavra".length

// alert(`Este texto tem ${caracteres} caracteres`)
let string = prompt("digite seu texto aqui")
let retorno1 = string[0].toUpperCase()
let retorno2 = string[string.length - 1]

alert(`A primeira letra deste texto é ${retorno1} e a ultima é ${retorno2.toLowerCase()}`)

let minusculo = prompt("Digite seu nome").toUpperCase()
let minusculo2 = prompt("Digite seu sobrenome").toUpperCase()
let idade = prompt("Digite sua idade")
let setor = prompt("Digite o setor a qual pertence")

alert(`nome:${minusculo} ${minusculo2} - ${idade} - ${setor}`)