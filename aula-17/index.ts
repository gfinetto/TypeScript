let numero = 20; // Inferência de tipo -> atribui um tipo de acordo com o seu valor.

const pi = 3.1415; //o tipo é seu próprio valor, pois não conseguimos alterar um constante. 

let nome: String = "Gabriel";

let correta: boolean;

let resultado = numero * pi;

//Exemplo de tipagem em arrays
//Podem ser feitos de duas formas: number [] or Array<number> (essa ultima é uma prática mais antiga, priorizar a primeira)

const numeros: number[] = [1, 2, 3, 4, 5];

//! const misto: any[] = ["Gabriel", 27, 1.77, {}, () => {}, true] -> Podemos utilziar o any é criar um array misto, porém não é o objetivo do TS, então evitar sempre. 

const idades: number[] = [];
idades.push(23);
idades.push(45);
idades.push(10);
idades.push(5);
idades.push(54);
idades.push(17);

const menoresDeIdade = idades.filter((idade) => idade < 18);
console.log(idades);
console.log(menoresDeIdade);
console.clear();

//Tuples

const pessoaTupla: [string, number] = ["Gabriel", 30];

//Object Types

//Interface
//Tipo customizado
interface Person {
    nome: string;
    idade: number;
    profissao: string;
    altura: number;
}

const pessoa: Person = {
    nome: "João",
    idade: 27,
    profissao: "Desenvolvedor",
    altura: 1.77
}









