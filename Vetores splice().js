//Método .splice()
//O método Splice (que significa "emendar") funciona com um, dois ou três argumentos (parâmetros): O primeiro é o índex onde COMEÇAM as alterações no vetor, o segundo argumento é a QUANTIDADE de elementos que serão EXCLUÍDOS a partir do índex definido no primeiro argumento e o terceiro é um novo valor que será inserido dentro do vetor ocupando o índice definido no primeiro argumento.   

//Se o método .splice() contiver apenas UM único argumento, ele servirá como índice para excluir TODOS os elementos do vetor a partir dele em diante.

const nomes = ['Baleia', 'Polvo', 'Golfinho', 'Tubarão',];

nomes.splice(1);
// nomes.splice(3, 2, 'Dori');
console.log(nomes);

animaisDoAquario = ['🐋', '🐙', '🐬', '🦈']

animaisDoAquario.splice(1,0,'🐠')
animaisDoAquario.splice(3,2,'🐟')

console.log(animaisDoAquario)

