import { TextField, Button } from "@material-ui/core";
import React, { useContext, useState } from "react";
import RegisterValidation from "../../contexts/RegisterValidation";
import useErrors from "../../hooks/useErrors";

function UserData({ onFormSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validations = useContext(RegisterValidation);

  const [errors, validateFields, canSend] = useErrors(validations);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (canSend()) {
          onFormSubmit({ email, password });
        }
      }}
    >
      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        id="email"
        name="email"
        label="email"
        type="email"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
        onBlur={validateFields}
        error={!errors.password.valid}
        helperText={errors.password.text}
        id="password"
        name="password"
        label="Senha"
        type="password"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Proximo
      </Button>
    </form>
  );
}

export default UserData;
