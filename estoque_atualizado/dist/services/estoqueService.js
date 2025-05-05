"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adicionarProduto = adicionarProduto;
exports.removerProduto = removerProduto;
exports.encontrarProduto = encontrarProduto;
exports.baixarProduto = baixarProduto;
function adicionarProduto(estoque, produto) {
    return [...estoque, produto];
}
function removerProduto(estoque, id) {
    return estoque.filter(p => p.id !== id);
}
function encontrarProduto(estoque, id) {
    return estoque.find(p => p.id === id);
}
function baixarProduto(estoque, id, quantidade) {
    return estoque.map(p => {
        if (p.id === id) {
            const novaQuantidade = p.quantidade - quantidade;
            if (novaQuantidade < 0) {
                console.warn(`Estoque insuficiente para o produto "${p.nome}"`);
                return p;
            }
            return Object.assign(Object.assign({}, p), { quantidade: novaQuantidade });
        }
        return p;
    });
}
