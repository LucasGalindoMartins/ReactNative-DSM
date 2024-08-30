enum categoria{
    "ração",
    "brinquedos"
}

export default interface Produto{
    nome:string,
    descricao: string,
    foto: string,
    preco: number,
    categoria: categoria
}