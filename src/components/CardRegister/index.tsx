import React, { useState } from "react";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { BasicButton } from "../BasicButton/index";
import Input from "../../components/Input/Inputs";
import { useNavigate } from "react-router-dom";
import { adicionar, buscarTodosUsuarios } from "../../store/modules/users";
import { useAppDispatch, useAppSelector } from "../../store/types.hooks";
import Swal from "sweetalert2";
import { DataType } from "../../types/DataType";

const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;

export default function CardRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const usersRedux = useAppSelector(buscarTodosUsuarios);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const changeInput = (key: DataType, value: string) => {
    switch (key) {
      case "name":
        setName(value);
        break;

      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;

      case "repassword":
        setRepassword(value);
        break;

      default:
    }
  };

  const handleSave = () => {
    if (!verifyInputs()) {
      return;
    }

    const userFound = usersRedux.find((user) => user.email === email);

    if (userFound) {
      Swal.fire({
        title: "Já existe esse usuário!!",
        icon: "warning",
        confirmButtonText: "Confirmar",
        timer: 2000,
      });
      return;
    }

    dispatch(
      adicionar({
        name,
        email,
        password,
        recados: [],
      })
    );

    clearInput();
    Swal.fire({
      title: "Sucesso!",
      text: "Usuario cadastro com sucesso",
      icon: "success",
      confirmButtonText: "Confirmar",
      timer: 2000,
    });
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  const clearInput = () => {
    setName("");
    setEmail("");
    setPassword("");
    setRepassword("");
  };

  const verifyInputs = (): boolean => {
    if (!name || !email || !password || !repassword) {
      Swal.fire({
        title: "Existem campos vazios, favor preencher",
        icon: "warning",
        confirmButtonText: "Confirmar",
        timer: 3000,
      });
      return false;
    }

    if (!email || !email.match(regexEmail)) {
      Swal.fire({
        title: "E-mail preenchido incorretamente!!",
        icon: "warning",
        confirmButtonText: "Confirmar",
        timer: 3000,
      });
      return false;
    }

    if (password !== repassword) {
      Swal.fire({
        title: "Por favor preencha as senhas corretamente!!",
        icon: "warning",
        confirmButtonText: "Confirmar",
        timer: 3000,
      });
      return false;
    }

    return true;
  };

  return (
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6}>
      <Box
        sx={{
          mt: "20%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          component="h2"
          variant="h2"
          sx={{
            mt: 1,
            fontSize: 30,
            fontWeight: "50",
            width: "100%",
            textAlign: "center",
          }}
        >
          Cadastre-se
        </Typography>

        <Grid
          item
          xs={12}
          sx={{
            width: { xs: "90vw", md: "30vw", sm: "50vw" },
          }}
        >
          <Input
            label="Nome"
            name="name"
            value={name}
            onChange={changeInput}
            type="text"
          />
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            width: { xs: "90vw", md: "30vw", sm: "50vw" },
          }}
        >
          <Input
            label="E-mail"
            type="email"
            name="email"
            value={email}
            onChange={changeInput}
          />
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            width: { xs: "90vw", md: "30vw", sm: "50vw" },
          }}
        >
          <Input
            label="Senha"
            type="password"
            name="password"
            value={password}
            onChange={changeInput}
          />
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            width: { xs: "90vw", md: "30vw", sm: "50vw" },
          }}
        >
          <Input
            label="Repete Senha"
            type="password"
            name="repassword"
            value={repassword}
            onChange={changeInput}
          />
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            width: { xs: "90vw", md: "30vw", sm: "50vw" },
          }}
        >
          <BasicButton tipoBasicButton="button" onClick={handleSave}>
            Cadastre-se
          </BasicButton>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            width: { xs: "90vw", md: "30vw", sm: "50vw" },
          }}
        >
          <Link
            style={{ cursor: "pointer" }}
            variant="body2"
            onClick={() => navigate("/login")}
          >
            Ja tem uma conta ? Voltar para pagina de Login
          </Link>
        </Grid>
      </Box>
    </Grid>
  );
}
