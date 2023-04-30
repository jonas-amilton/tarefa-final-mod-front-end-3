import { useState } from "react";
import {
  Button,
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import TableBody from "@mui/material/TableBody";
import { useAppDispatch, useAppSelector } from "../../store/types.hooks";
import { buscarTodosRecados } from "../../store/modules/recados";
import { setShowModal } from "../../store/modules/config/ConfigSlice";
import Grid from "@mui/material/Grid";

export const TableErrands: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const recadosRedux = useAppSelector(buscarTodosRecados);
  const dispatch = useAppDispatch();

  const handleUpdate = (id: string) => {
    dispatch(setShowModal({ open: true, type: "Editar", id: id }));
  };

  const handleDelete = (id: string) => {
    dispatch(setShowModal({ open: true, type: "Apagar", id: id }));
  };

  // Filtra os recados com base no valor de pesquisa
  const filteredRecados = recadosRedux.filter(
    (recado) =>
      recado.description.toLowerCase().startsWith(searchTerm.toLowerCase()) ||
      recado.detail.toLowerCase().startsWith(searchTerm.toLowerCase()) ||
      recado.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Grid sx={{ justifyContent: "center" }} container spacing={2}>
        <Grid item xs={10}>
          {/* Adiciona o campo de pesquisa */}

          <TextField
            label="Buscar recados"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            variant="standard"
            margin="normal"
            fullWidth
          />
        </Grid>
        <Grid item xs={10}>
          {searchTerm !== "" && filteredRecados.length === 0 && (
            <Typography
              sx={{ textAlign: "center" }}
              variant="h6"
              component="div"
            >
              Recado não encontrado 😞
            </Typography>
          )}
        </Grid>
      </Grid>

      <TableContainer
        sx={{ marginTop: "1em", padding: ".6em", width: "100%" }}
        component={Paper}
        elevation={5}
      >
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: "#b5d212" }}>
              <TableCell sx={{ color: "#000", fontSize: 20 }}> # ID</TableCell>
              <TableCell align="center" sx={{ color: "#000", fontSize: 20 }}>
                Descrição
              </TableCell>
              <TableCell align="center" sx={{ color: "#000", fontSize: 20 }}>
                Detalhamento
              </TableCell>
              <TableCell align="center" sx={{ color: "#000", fontSize: 20 }}>
                Ações
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {filteredRecados.map((recado, index) => (
              <TableRow key={recado.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell align="center">{recado.description}</TableCell>
                <TableCell align="center">{recado.detail}</TableCell>
                <TableCell align="center">
                  <Button
                    onClick={() => handleUpdate(recado.id)}
                    variant="contained"
                    color="primary"
                    sx={{
                      width: { xs: "6vw", md: "10vw", sm: "12vw" },
                      ml: { xs: "2em" },
                      mt: { xs: ".8em", md: "1.2em", sm: ".8em" },
                    }}
                  >
                    Editar
                  </Button>

                  <Button
                    onClick={() => handleDelete(recado.id)}
                    variant="contained"
                    color="error"
                    sx={{
                      width: { xs: "6vw", md: "10vw", sm: "12vw" },
                      ml: { xs: "2em" },
                      mt: { xs: ".8em", md: "1.2em", sm: ".8em" },
                    }}
                  >
                    Apagar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
