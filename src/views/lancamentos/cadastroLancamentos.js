import React from "react";

import { withRouter } from "react-router-dom";
import * as messages from "../../components/toastr";

import LancamentoService from "../../app/service/lancamentoService";
import Card from "../../components/card";
import FormGroup from "../../components/form-group";
import SelectMenu from "../../components/selectMenu";
import LocalStorageService from "../../app/service/localStorageService";

class CadastroLancamentos extends React.Component {
  state = {
    id: null,
    descricao: "",
    mes: "",
    ano: "",
    valor: "",
    tipo: "",
    status: "",
  };
  constructor() {
    super();
    this.service = new LancamentoService();
  }

  submit = () => {
    const usuarioLogado = LocalStorageService.obterItem("_usuario_logado");

    const { descricao, mes, ano, valor, tipo } = this.state;
    const lancamento = {
      descricao,
      mes,
      ano,
      valor,
      usuario: usuarioLogado.id,
      tipo,
    };

    this.service
      .salvar(lancamento)
      .then((response) => {
        messages.mensagemSucesso("Lançamento cadastrado com sucesso");
      })
      .catch((error) => {
        messages.mensagemErro(error.response.data);
      });
  };

  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({ [name]: value });
  };

  render() {
    const tipos = this.service.obterListaTipos();
    const meses = this.service.obterListaMeses();

    return (
      <Card title="Cadastro de Lançamentos">
        <div className="row">
          <div className="col-md-12">
            <FormGroup id="inputDescricao" label="Descrição: *">
              <input
                id="inputDescricao"
                type="text"
                className="form-control"
                name="descricao"
                value={this.state.descricao}
                onChange={this.handleChange}
              />
            </FormGroup>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <FormGroup id="inputAno" label="Ano: *">
              <input
                id="inputAno"
                type="text"
                className="form-control"
                name="ano"
                value={this.state.ano}
                onChange={this.handleChange}
              />
            </FormGroup>
          </div>
          <div className="col-md-6">
            <FormGroup id="inputMes" label="Mes: *">
              <SelectMenu
                id="inputMes"
                lista={meses}
                className="form-control"
                name="mes"
                value={this.state.mes}
                onChange={this.handleChange}
              />
            </FormGroup>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <FormGroup id="inputValor" label="Valor: *">
              <input
                id="inputValor"
                type="text"
                className="form-control"
                name="valor"
                value={this.state.valor}
                onChange={this.handleChange}
              />
            </FormGroup>
          </div>
          <div className="col-md-4">
            <FormGroup id="inputTipo" label="Tipo: *">
              <SelectMenu
                id="inputTipo"
                lista={tipos}
                className="form-control"
                name="tipo"
                value={this.state.tipo}
                onChange={this.handleChange}
              />
            </FormGroup>
          </div>
          <div className="col-md-4">
            <FormGroup id="inputStatus" label="Status: ">
              <input
                type="text"
                className="form-control"
                disabled
                name="status"
                value={this.state.status}
              />
            </FormGroup>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div>
              <button className="btn btn-success" onClick={this.submit}>
                Salvar
              </button>
              <button className="btn btn-danger">Cancelar</button>
            </div>
          </div>
        </div>
      </Card>
    );
  }
}

export default withRouter(CadastroLancamentos);