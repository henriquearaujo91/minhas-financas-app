import ApiService from "../apiservice";

export default class LancamentoService extends ApiService {
  constructor() {
    super("/api/lancamentos");
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

    return this.get(params);
  }
}
