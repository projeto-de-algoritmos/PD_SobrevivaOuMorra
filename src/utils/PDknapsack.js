export function knapsack(objetos, capacidade) {
  const n = objetos.length;
  const tabela = new Array(n + 1);
  for (let i = 0; i <= n; i++) {
    tabela[i] = new Array(capacidade + 1).fill(0);
  }

  for (let i = 1; i <= n; i++) {
    const pesoAtual = objetos[i - 1].peso;
    const valorAtual = objetos[i - 1].valor;
    for (let j = 1; j <= capacidade; j++) {
      if (pesoAtual > j) {
        tabela[i][j] = tabela[i - 1][j];
      } else {
        tabela[i][j] = Math.max(
          tabela[i - 1][j],
          valorAtual + tabela[i - 1][j - pesoAtual]
        );
      }
    }
  }

  const resultado = {
    objetosSelecionados: [],
    valorTotal: tabela[n][capacidade]
  };
  let i = n, j = capacidade;
  while (i > 0 && j > 0) {
    if (tabela[i][j] !== tabela[i - 1][j]) {
      resultado.objetosSelecionados.push(objetos[i - 1]);
      j -= objetos[i - 1].peso;
    }
    i--;
  }
  return resultado;
}
