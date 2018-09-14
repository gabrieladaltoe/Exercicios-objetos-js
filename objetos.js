//Objetos são grupos de informações para acessar dados


//Java
//Script
//Object
//N....

//{
//  beatriz: "professora", // key: "valor"
//  natalya: "aluna"
//  }

// FOR OF e FOR IN

for (const key in nasa) {
  declaração
}

//of - para arrays

//in - objetos


for (const key in nasa){
    console.log(key, nasa[key]) // para acessar a key e o valor da chave
}

// Objetos

// É possível guardar todas as coisas dentro de um objeto


let multiplicador

const rect = {
"lados": 4,
"base": 100,
"altura": 50,
"area": function (){
    return this.base * this.altura // this. é o ojeto em questão.
    },
    scale: function (){
        return this.base * multiplicador
    },
    eQuadrado: false
}

rect. lados // chamar o lado

rect.area() // chama o resultado

rect.area // chama a função de dentro

function React (x,y) {
    return {
        lados: 4,
        base: x,
        altura: y,
        area: function(){
            return this.base * this.altura
        },
    }
}

//toda função que cria um novo objeto é um constructor

const rect1 = new Rect(100,50)

const tweet = {
    imagem = "http://caminho.para.imagem...",
    username: "brizental",
    texto: "lorem ipsum",
    like: function (){ // uma propriedade que tenha como valor uma função é um METODO

    },
    retweet: function (){

    },

}

// como mudar um objeto

tweet ["imagem"]

tweet["favorited"] = falso // favotited: key e falso é o novo valor do objeto

function React(x,y) {
    this.lados = 4
    this.base = x
    this.altura = y
    this.area ()  = function () { return this.base * this.altura}
    }

new React (45,34) 

//

