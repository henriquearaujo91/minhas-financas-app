import React from "react";
import { Route, Switch, HashRouter, Redirect } from "react-router-dom";
import Login from "../views/login";
import CadastroUsuario from "../views/cadastroUsuario";
import Home from "../views/home";
import ConsultaLancamentos from "../views/lancamentos/consultaLancamentos";
import CadastroLancamentos from "../views/lancamentos/cadastroLancamentos";

const isUsuarioAutenticado = () => {
  return false;
};

function RotaAutenticada({ component: Component, ...props }) {
  return (
    <Route
      {...props}
      render={(componentProps) => {
        if (isUsuarioAutenticado()) {
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
