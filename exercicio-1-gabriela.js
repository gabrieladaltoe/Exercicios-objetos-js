// 1.
// Defina um objeto de
// Javascript que descreva
// um dos pokemons da lista
// de pokemons do Wikipedia.
// ref: https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon

const pokemon = {
    numNacional: 092,
    nome: "Pikachu",
    nomeJapones: "Pikachu",
    numJonto: 022,
    numHoenn: 156,
    numSninooh: 104,
    numUnova: null,
    evoluiDe: "Pichu",
} 


// 2.
// Printe no console a seguinte
// frase: "Hello, my name is < >.
// And my name in Japanese is < >."

function hello(pokemon) {
    console.log(`Hello, my name is ${this.nome} and my name in Japanese is ${this.nomeJapones}`) // this pq está dentro do objeto
} 

// ou 

console.log(`Hello, my name is ${pokemon.nome} and my name in Japanese is ${pokemon.nomeJapones}`)


// 3.
// Adicione uma nova propriedade ao
// seu pokemon chamada `can_fly` 
// (ou algo do tipo) e defina
// ela como `true` ou `false`.

pokemon ["can_fly"] = true
//ou
pokemon.can_fly = true


// 4.
// Adicione um m'étodo ao seu pokemon
// chamado `fly` que retorna "Sorry,
// I can't fly" ou "Flyyy'yiinnngggg!".

pokemon.fly = function() { 
    if (this.can_fly) {
        return "Flyyyyyinnnnnngggg!"

    } else {
        return "Sorry, I can´t fly"
    }
}




// 5.'
// Adicione um método chamado
// `do_something` ao seu pokemon
// que retorna randomicamente uma 
// das Strings "FIGHT", "BAG" ou "RUN".

pokemon.do_something = function() { 
    let acoes = ["Fight", "Bag", "Run"]
    return acoes[Math.floor(Math.random() * acoes.lenght)]
}


// 6.
// Adicione um método chamado
// `ask` ao seu pokemon que printa
// no console "What will < > do?" e
// retorna o resultado do metodo
// `do_something`.

pokemon.ask = function() { 
    console.log(`What will ${this.nome} do?`)
    return this.do_something()
}


// 7.
// Printe todas as propriedades 
// do seu pokemon no console.

console.log(pokemon)


for (const propriedades in pokemon){
    console.log(propriedades) // para acessar a key e o valor da chave
}


// 8. 
// Printe todas as propriedades
// e seus respectivos valores no
// console no seguinte formato:
// <propriedade>: <valor>

for (const propriedades in pokemon){
    console.log(`${propriedades}: ${pokemon[propriedades]}`)
}


// 9. Crie uma função construtora de um pokemon genérico 
// function (nome, nome_japones) {}

function Pokemon(nome, nome_japones, podevoar) {
    this.nome = nome
    this.nome_japones = nome_japones
    console.log(`Hello, my name is ${this.nome} and my name in Japanese is ${this.nome_japones}`)
    this.podevoar = function() { 
        if (this.can_fly) {
            return "Flyyyyyinnnnnngggg!"
    
        } else {
            return "Sorry, I can´t fly"
        }
    }
    
    this.do_something = function() { 
        let acoes = [
            "Fight", 
            "Bag", 
            "Run"
        ]
        return acoes[Math.floor(Math.random() * acoes.lenght)]
    }

    this.ask = function() { 
        console.log(`What will ${this.nome} do?`)
        return this.do_something()
    }

}

