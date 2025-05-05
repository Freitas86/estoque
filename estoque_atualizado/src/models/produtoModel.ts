export interface Produto {
  id: string;
  nome: string;
  quantidade: number;
  preco: number;
}

export function criarProduto(id: string, nome: string, quantidade: number, preco: number): Produto {
  return { id, nome, quantidade, preco };
}