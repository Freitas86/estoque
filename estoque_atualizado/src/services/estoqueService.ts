import { Produto } from "../models/produtoModel";

export function adicionarProduto(estoque: Produto[], produto: Produto): Produto[] {
  return [...estoque, produto];
}

export function removerProduto(estoque: Produto[], id: string): Produto[] {
  return estoque.filter(p => p.id !== id);
}

export function encontrarProduto(estoque: Produto[], id: string): Produto | undefined {
  return estoque.find(p => p.id === id);
}

export function baixarProduto(estoque: Produto[], id: string, quantidade: number): Produto[] {
  return estoque.map(p => {
    if (p.id === id) {
      const novaQuantidade = p.quantidade - quantidade;
      if (novaQuantidade < 0) {
        console.warn(`Estoque insuficiente para o produto "${p.nome}"`);
        return p;
      }
      return { ...p, quantidade: novaQuantidade };
    }
    return p;
  });
}