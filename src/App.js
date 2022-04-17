import React, { Component } from "react";
import "./App.css";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import { Container, Typography } from "@material-ui/core";
import "fontsource-roboto";
import { validateCPF, validatePassword } from "./models/registration";
import RegisterValidation from "./contexts/RegisterValidation";

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">
          Formulario de Cadastro
        </Typography>
        <RegisterValidation.Provider
          value={{
            cpf: validateCPF,
            password: validatePassword,
            nome: validatePassword,
          }}
        >
          <RegisterForm onFormSubmit={onFormSubmit} />
        </RegisterValidation.Provider>
      </Container>
    );
  }
}

function onFormSubmit(data) {
  console.log(data);
}

export default App;
