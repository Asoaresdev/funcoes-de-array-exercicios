const infosPessoa = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}
//1
const transformaValoresCaixaAlta = (obj) =>{
    return {
        nome: obj.nome.toUpperCase(),
        profissao: obj.profissao.toUpperCase(),
        username: obj.username.toUpperCase(),
        senha: obj.senha.toUpperCase()
    }
}
console.log(transformaValoresCaixaAlta(infosPessoa));



// const novoObjeto = transformaValoresCaixaAlta(infosPessoa)
// console.log(novoObjeto);
// console.log(infosPessoa)



//com for...in
// const transformaValoresCaixaAlta = (obj) => {

//     for (const key in obj) {
//         return {
//             nome: obj[key].toUpperCase(),
//             profissao: obj[key].toUpperCase(),
//             username: obj[key].toUpperCase(),
//             senha: obj[key].toUpperCase()
//         }
//     }
// }



//2
const tranformaEmString = (obj) => {
    let fraseString = ""
    for (const key in obj) {
        fraseString += `O valor da propriedade ${key} é ${obj[key]}\n`
    }
    return fraseString
}
console.log(tranformaEmString(infosPessoa));






//3
const imprime = (funcaoCallback, objeto) => {
    console.log(funcaoCallback(objeto) );
    // return funcaoCallback(objeto)
}

imprime(transformaValoresCaixaAlta, infosPessoa)
imprime(tranformaEmString, infosPessoa)






// console.log(imprime(transformaValoresCaixaAlta, infosPessoa));
// console.log(imprime(tranformaEmString, infosPessoa));