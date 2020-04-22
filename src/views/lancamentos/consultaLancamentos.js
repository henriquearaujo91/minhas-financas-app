import React from "react";
import { withRouter } from "react-router-dom";
import Card from "../../components/card";
import FormGroup from "../../components/form-group";
import SelectMenu from "../../components/selectMenu";
import LancamentosTable from "./lancamentosTable";

class ConsultaLancamentos extends React.Component {
  render() {
    const meses = [
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

    const tipos = [
      { label: "Selecione...", value: "" },
      { label: "Despesa", value: "DESPESA" },
      { label: "Receita", value: "RECEITA" },
    ];

    const lancamentos = [
      {
        id: 1,
        descricao: "salario",
        valor: 5000,
        tipo: "Receita",
        mes: 1,
        status: "Efetivado",
      },
    ];

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
                  aria-describedby="emailHelp"
                  placeholder="Digite o Ano"
                />
              </FormGroup>
              <FormGroup label="Mês: *" htmlFor="inputMes">
                <SelectMenu className="form-control" lista={meses} />
              </FormGroup>
              <FormGroup label="Tipo de Lançamento: " htmlFor="inputTipo">
                <SelectMenu className="form-control" lista={tipos} />
              </FormGroup>
              <button type="button" className="btn btn-success">
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
            <LancamentosTable lancamentos={lancamentos} />
          </div>
        </div>
      </Card>
    );
  }
}

export default withRouter(ConsultaLancamentos);
