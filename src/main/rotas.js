import React from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import AuthService from "../app/service/authService";
import CadastroUsuario from "../views/cadastroUsuario";
import Home from "../views/home";
import CadastroLancamentos from "../views/lancamentos/cadastroLancamentos";
import ConsultaLancamentos from "../views/lancamentos/consultaLancamentos";
import Login from "../views/login";

function RotaAutenticada({ component: Component, ...props }) {
  return (
    <Route
      {...props}
      render={(componentProps) => {
        if (AuthService.isUsuarioAutenticado()) {
          return <Component {...componentProps} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: componentProps.location },
              }}
            />
          );
        }
      }}
    />
  );
}

function Rotas() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/cadastro-usuarios" component={CadastroUsuario} />

        <RotaAutenticada path="/home" component={Home} />
        <RotaAutenticada
          path="/consulta-lancamentos"
          component={ConsultaLancamentos}
        />
        <RotaAutenticada
          path="/cadastro-lancamentos/:id?"
          component={CadastroLancamentos}
        />
      </Switch>
    </HashRouter>
  );
}

export default Rotas;
