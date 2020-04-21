import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import Login from "../views/login";
import CadastroUsuario from "../views/cadastroUsuario";
import Home from "../views/home";
import ConsultaLancamentos from "../views/consultaLancamentos";

function Rotas() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/cadastro-usuarios" component={CadastroUsuario} />
        <Route path="/consulta-lancamentos" component={ConsultaLancamentos} />
      </Switch>
    </HashRouter>
  );
}

export default Rotas;
