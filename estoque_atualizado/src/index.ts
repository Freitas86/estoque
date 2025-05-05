import { criarProduto } from "./models/produtoModel";
import * as controller from "./controllers/estoqueController";

const prod1 = criarProduto("1", "Teclado", 10, 150.00);
const prod2 = criarProduto("2", "Mouse", 25, 80.00);

controller.adicionar(prod1);
controller.adicionar(prod2);

controller.exibirEstoque("Estoque Inicial:");

controller.baixar("1", 3);

controller.exibirEstoque("\nEstoque Após Baixa:");