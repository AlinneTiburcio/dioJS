/*
Faça um algoritmo que dados 3 notas tiradas por um aluno em semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

Média = (nota1 + nota2 + nota3) / 3;

Classificação:
- Média menor que 5, reprovado;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;
*/

let nota1 = 10;
let nota2 = 10;
let nota3 = 10;

let media = (nota1 + nota2 + nota3) / 3;

if (media >= 8){
  console.log('Sua média é ' +media+ ', você passou de semestre!!');
} else if (media >= 5 && media <= 7) {
  console.log('Sua média é ' +media+ ', você esta de recuperação!!')
}else {
  console.log('Sua média é ' +media+ ', você foi reprovado!!')
}