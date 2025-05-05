"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adicionar = adicionar;
exports.baixar = baixar;
exports.exibirEstoque = exibirEstoque;
const estoqueService = require("../services/estoqueService");
const estoqueView = require("../views/estoqueView");
let estoque = [];
function adicionar(produto) {
    estoque = estoqueService.adicionarProduto(estoque, produto);
}
function baixar(id, quantidade) {
    estoque = estoqueService.baixarProduto(estoque, id, quantidade);
}
function exibirEstoque(mensagem) {
    console.log(mensagem);
    estoqueView.listarProdutos(estoque);
}
