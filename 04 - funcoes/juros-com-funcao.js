/*
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código condição de pagamento:
- À vista Débito, recebe 10% de desconto
- À vista Dinheiro ou Pix, recebe 15% de desconto
- Em duas vezes, preço norma de etiqueta sem juros
- Acima de duas vezes, preço de etiqueta + juros de 10%
*/

function aplicarDesconto(valor, desconto){
  return (valor - (valor * (desconto / 100)));
}

function acrescentarJuros(valor, juros){
  return (valor + (valor * (juros / 100)));
}

const precoEtiqueta = 100;
let formaDePagamento = 4;

if (formaDePagamento === 1){
  console.log(aplicarDesconto(precoEtiqueta, 10))
} else if (formaDePagamento === 2){
  console.log(aplicarDesconto(precoEtiqueta, 15))
} else if (formaDePagamento === 3){
  console.log(precoEtiqueta)
} else {
  console.log(acrescentarJuros(precoEtiqueta, 10))
}