import { Produto } from "../models/produtoModel";

export function listarProdutos(estoque: Produto[]): void {
  estoque.forEach(p => {
    console.log(`ID: ${p.id}, Nome: ${p.nome}, Qtd: ${p.quantidade}, Preço: R$ ${p.preco.toFixed(2)}`);
  });
}