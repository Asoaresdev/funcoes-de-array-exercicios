const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó", categoria: "Limpeza", preco: 10.80 }
 ]
 

const novoArrayProdutosLimpeza = produtos.filter((produto) => {
    return produto.categoria === "Limpeza"
})
    .map((item) => {
        return item.nome
    })

console.log(novoArrayProdutosLimpeza);




//USANDO DOIS ARRAYS
const array1 = produtos.filter((produto) => {
    return produto.categoria === "Limpeza"
})

const array2= array1.map((item) => {
    return item.nome
})

console.log(array2);













// array.filter((item)=>{
//     // bloco de código
// }).map((item)=>{
//     // bloco de código
// })















