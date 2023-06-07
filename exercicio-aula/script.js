
 const arrayNUmeros = [1,2,3,4,5,6,7,8,9,10]
 
 const numerosMultiplicadosPorTres = (array)=>{
     const newArray = []
    for (let index = 0; index < array.length; index++) {
        const element = array[index]*3
        newArray.push(element)
    }
    return newArray
}

console.log(numerosMultiplicadosPorTres(arrayNUmeros));

const numerosPares = (array) => {
    const novoArrayPares = []
    for (const numero of array) {
        if(numero % 2 === 0) {
            novoArrayPares.push(numero)
        }
    }
    return novoArrayPares
}

console.log(numerosPares(arrayNUmeros));

const functionCallBack = (callback, array) =>{
    const newArray = callback(array)
    return newArray
}
console.log("callback");
console.log(functionCallBack(numerosMultiplicadosPorTres, arrayNUmeros));
console.log(functionCallBack(numerosPares, arrayNUmeros));


console.log("map😍");
const novoArrayTriplo = arrayNUmeros.map((numero) =>{
    return numero*3
})

// const testeArrayTriplo = arrayNUmeros.map(numerosPares)
// console.log(testeArrayTriplo);


console.log(novoArrayTriplo);

console.log("filter");
const arrayDePares = arrayNUmeros.filter((numero) => {
    return numero % 2 === 0
})
console.log(arrayDePares);


const pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
  { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
  { nome: 'Charmander', tipo: 'fogo', vida: 35 },
  { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
  { nome: 'Squirtle', tipo: 'água', vida: 45 },
  { nome: 'Psyduck', tipo: 'água', vida: 25 }
]

const alteraObjeto = (poke)=>{
    const newObjeto = {
        ...poke, 
        vida: poke.vida = 100,
    }
    return newObjeto
}
//testando a função
console.log(alteraObjeto(pokemons[1]));



// const pokemonsVidaCheia = pokemons.map(alteraObjeto)
// console.log(pokemonsVidaCheia);

const pokemonsVidaCheia = pokemons.map((poke)=>{
    return newObjeto = {
        ...poke,
        vida: 100,
    }
})

console.log(pokemonsVidaCheia);

const pokemonsDeFogo = pokemons.filter((pokemon)=>{
    return pokemon.tipo ==="fogo"
})

console.log(pokemonsDeFogo);

