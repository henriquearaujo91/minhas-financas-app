import React from "react";
import { withRouter } from "react-router-dom";
import LancamentoService from "../../app/service/lancamentoService";
import LocalStorageService from "../../app/service/localStorageService";
import Card from "../../components/card";
import FormGroup from "../../components/form-group";
import SelectMenu from "../../components/selectMenu";
import LancamentosTable from "./lancamentosTable";

import * as messages from "../../components/toastr";

class ConsultaLancamentos extends React.Component {
  state = {
    ano: "",
    mes: "",
    tipo: "",
    descricao: "",
    lancamentos: [],
  };

  constructor() {
    super();
    this.service = new LancamentoService();
  }

  buscar = () => {
    if (!this.state.ano) {
      messages.mensagemErro("O preenchimento do campo Ano é obrigatório.");
      return false;
    }

    const usuarioLogado = LocalStorageService.obterItem("_usuario_logado");

    const lancamentoFiltro = {
      ano: this.state.ano,
      mes: this.state.mes,
      tipo: this.state.tipo,
      descricao: this.state.descricao,
      usuario: usuarioLogado.id,
    };

    this.service
      .consultar(lancamentoFiltro)
      .then((resposta) => {
        this.setState({ lancamentos: resposta.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const meses = this.service.obterListaMeses();
    const tipos = this.service.obterListaTipos();

    return (
      <Card title="Consulta Lancamentos">
        <div className="row">
          <div className="col-lg-6">
            <div className="bs-component">
              <FormGroup label="Ano: *" htmlFor="inputAno">
                <input
                  type="text"
                  className="form-control"
                  id="inputAno"
                  value={this.state.ano}
                  placeholder="Digite o Ano"
                  onChange={(e) => this.setState({ ano: e.target.value })}
                />
              </FormGroup>

              <FormGroup label="Mês: *" htmlFor="inputMes">
                <SelectMenu
                  className="form-control"
                  lista={meses}
                  value={this.state.mes}
                  onChange={(e) => this.setState({ mes: e.target.value })}
                />
              </FormGroup>

              <FormGroup label="Descrição: *" htmlFor="inputDescricao">
                <input
                  type="text"
                  className="form-control"
                  id="inputDescricao"
                  value={this.state.descricao}
                  placeholder="Digite A Descrição"
                  onChange={(e) => this.setState({ descricao: e.target.value })}
                />
              </FormGroup>

              <FormGroup label="Tipo de Lançamento: " htmlFor="inputTipo">
                <SelectMenu
                  className="form-control"
                  lista={tipos}
                  value={this.state.tipo}
                  onChange={(e) => this.setState({ tipo: e.target.value })}
                />
              </FormGroup>

              <button
                onClick={this.buscar}
                type="button"
                className="btn btn-success"
              >
                Buscar
              </button>
              <button type="button" className="btn btn-danger">
                Cadastrar
              </button>
            </div>
          </div>
        </div>
        <br />
        <div className="rol">
          <div className="bs-component">
            <LancamentosTable lancamentos={this.state.lancamentos} />
          </div>
        </div>
      </Card>
    );
  }
}

export default withRouter(ConsultaLancamentos);
