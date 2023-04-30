import React, { useState } from "react";
import { Button, Grid, TextField } from "@mui/material";
import { useAppDispatch } from "../../store/types.hooks";
import { v4 as uuidv4 } from "uuid";
import { adicionarRecado } from "../../store/modules/recados";
import Swal from "sweetalert2";

export const AddErrand = () => {
  const [detail, setDetail] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useAppDispatch();

  const handleSave = () => {
    if (!detail || !description) {
      Swal.fire({
        title: "Existem campos vazios, favor preencher",
        icon: "warning",
        confirmButtonText: "Confirmar",
        timer: 3000,
      });
      return false;
    }

    Swal.fire({
      title: "Sucesso!",
      text: "Recado cadastrado com sucesso.",
      icon: "success",
      confirmButtonText: "Confirmar",
      timer: 2000,
    });

    dispatch(
      adicionarRecado({
        id: uuidv4(),
        description,
        detail,
      })
    );

    clearInput();
  };

  const clearInput = () => {
    setDetail("");
    setDescription("");
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} md={5}>
        <TextField
          value={detail}
          required
          label="Detalhamento"
          variant="outlined"
          fullWidth
          onChange={(ev) => setDetail(ev.target.value)}
          sx={{
            width: { xs: "80vw", md: "40vw", sm: "90vw" },
            ml: { xs: "2em" },
            mt: { xs: ".8em", md: "1.2em", sm: ".8em" },
          }}
        />
      </Grid>

      <Grid item xs={12} md={5}>
        <TextField
          value={description}
          required
          label="Descrição"
          variant="outlined"
          fullWidth
          onChange={(ev) => setDescription(ev.target.value)}
          sx={{
            width: { xs: "80vw", md: "40vw", sm: "90vw" },
            ml: { xs: "2em" },
            mt: { xs: ".8em", md: "1.2em", sm: ".8em" },
          }}
        />
      </Grid>

      <Grid item xs={12} md={2}>
        <Button
          sx={{
            bgcolor: "#0d8911",
            color: "white",
            "&:hover": {
              bgcolor: "#12791c",
            },
            ml: { xs: "2em", md: "2em", sm: "2.2em" },
            mt: { xs: ".2em", md: "2em", sm: ".2em" },
          }}
          variant="contained"
          onClick={handleSave}
        >
          Adicionar
        </Button>
      </Grid>
    </Grid>
  );
};
