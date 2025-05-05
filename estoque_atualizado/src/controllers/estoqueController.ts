import { Produto } from "../models/produtoModel";
import * as estoqueService from "../services/estoqueService";
import * as estoqueView from "../views/estoqueView";

let estoque: Produto[] = [];

export function adicionar(produto: Produto) {
  estoque = estoqueService.adicionarProduto(estoque, produto);
}

export function baixar(id: string, quantidade: number) {
  estoque = estoqueService.baixarProduto(estoque, id, quantidade);
}

export function exibirEstoque(mensagem: string) {
  console.log(mensagem);
  estoqueView.listarProdutos(estoque);
}