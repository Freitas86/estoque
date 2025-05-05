"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listarProdutos = listarProdutos;
function listarProdutos(estoque) {
    estoque.forEach(p => {
        console.log(`ID: ${p.id}, Nome: ${p.nome}, Qtd: ${p.quantidade}, Preço: R$ ${p.preco.toFixed(2)}`);
    });
}
