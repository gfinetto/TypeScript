// let numero = 20; // Inferência de tipo -> atribui um tipo de acordo com o seu valor.

// const pi = 3.1415; //o tipo é seu próprio valor, pois não conseguimos alterar um constante. 

// let nome: String = "Gabriel";

// let correta: boolean;

// let resultado = numero * pi;

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
//Tipo customizado -> Os objetos criados deverão obrigatóriamente seguir o padrão do tipo que criamos, com todos os atributos e valores. 
// interface Person {
//     nome: string;
//     idade: number;
//     profissao?: string; //Utilizando o ? setamos que o parametro é opcional. 
//     altura: number;
// }

// Type
//Diferença entre interface e type: 
// interface está muito ligado a objetos, e semanticamente quando vamos tipificar um objeto usamos ele. 
// type pode ser qualquer coisa, definir um tipo para qlq coisa. 

type Person = {
    nome: string;
    idade: number;
    altura: number;
    profissao?: string;
};

type MyString = string;

const pessoa: Person = {
    nome: "João",
    idade: 27,
    profissao: "Desenvolvedor",
    altura: 1.77
}

console.log(pessoa.idade);
console.clear();

//Type aliases//Union Types//Literal Types
type Criterio = "greater" | "lower";

function chooseNumber(numero1: number, numero2: number, criterio?: Criterio): number {
    switch (criterio){
        case "greater": 
            return numero1 > numero2 ? numero1 : numero2;
        case "lower":
            return numero1 < numero2 ? numero1 : numero2;
        default:
            const numeroAleatorio = Math.random();

            if (numeroAleatorio >= 0.5) return numero1;
            return numero2;
    }
}

const numeroEscolhido = chooseNumber(10,20,"lower");
console.log("O numero escolhido é:", numeroEscolhido);

//* Utility Types:  A ideia deles é permitir que você crie novos tipos a partir de tipos já existentes
// 1. Partial

type PersonalPartial = Partial<Person>;

//2. Required 

type PersonRequired = Required<Person>;

// 3. Pick

type PersonPicked = Pick<Person, "nome" | "profissao">;

// 4. Omit
type PersonOmit = Omit<Person, "profissao">;

// 5. Exclude

type CriterioExclude = Exclude<Criterio, "greater">;

// 6. Record











