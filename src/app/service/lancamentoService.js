import ApiService from "../apiservice";
import ErroValidacao from "../exception/erroValidacao";

export default class LancamentoService extends ApiService {
  constructor() {
    super("/api/lancamentos");
  }

  obterListaTipos() {
    return [
      { label: "Selecione...", value: "" },
      { label: "Despesa", value: "DESPESA" },
      { label: "Receita", value: "RECEITA" },
    ];
  }

  obterListaMeses() {
    return [
      { label: "Selecione...", value: "" },
      { label: "Janeiro", value: 1 },
      { label: "Fevereiro", value: 2 },
      { label: "Março", value: 3 },
      { label: "Abril", value: 4 },
      { label: "Maio", value: 5 },
      { label: "Junho", value: 6 },
      { label: "Julho", value: 7 },
      { label: "Agosto", value: 8 },
      { label: "Setembro", value: 9 },
      { label: "Outubro", value: 10 },
      { label: "Novembro", value: 11 },
      { label: "Dezembro", value: 12 },
    ];
  }

  obterPorId(id) {
    return this.get(`/${id}`);
  }

  validar(lancamento) {
    const erros = [];

    if (!lancamento.ano) {
      erros.push("Informe o Ano.");
    }
    if (!lancamento.mes) {
      erros.push("Informe o Mes.");
    }
    if (!lancamento.descricao) {
      erros.push("Informe a Dscricao.");
    }
    if (!lancamento.valor) {
      erros.push("Informe o Valor.");
    }
    if (!lancamento.tipo) {
      erros.push("Informe o Tipo.");
    }
    if (erros.length > 0) {
      throw new ErroValidacao(erros);
    }
  }

  salvar(lancamento) {
    return this.post("/", lancamento);
  }

  atualizar(lancamento) {
    return this.put(`/${lancamento.id}`, lancamento);
  }

  consultar(lancamentoFiltro) {
    let params = `?ano=${lancamentoFiltro.ano}`;
    if (lancamentoFiltro.mes) {
      params = params.concat(`&mes=${lancamentoFiltro.mes}`);
    }
    if (lancamentoFiltro.tipo) {
      params = params.concat(`&tipo=${lancamentoFiltro.tipo}`);
    }

    if (lancamentoFiltro.status) {
      params = params.concat(`&status=${lancamentoFiltro.status}`);
    }

    if (lancamentoFiltro.usuario) {
      params = params.concat(`&usuario=${lancamentoFiltro.usuario}`);
    }

    if (lancamentoFiltro.descricao) {
      params = params.concat(`&descricao=${lancamentoFiltro.descricao}`);
    }

    return this.get(params);
  }

  deletar(id) {
    return this.delete(`/${id}`);
  }
}
