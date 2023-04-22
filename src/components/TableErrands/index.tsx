import {
  Button,
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import TableBody from "@mui/material/TableBody";
import { useAppDispatch, useAppSelector } from "../../store/types.hooks";
import {
  adicionarTodosRecados,
  atualizarRecado,
  buscarTodosRecados,
  deletarRecado,
} from "../../store/modules/recados";
import { setShowModal } from "../../store/modules/config/ConfigSlice";

export const TableErrands: React.FC = () => {
  const recadosRedux = useAppSelector(buscarTodosRecados);
  const dispatch = useAppDispatch();

  const handleUpdate = (id: string) => {
    dispatch(setShowModal({ open: true, type: "Editar", id: id }));
  };

  const handleDelete = (id: string) => {
    dispatch(setShowModal({ open: true, type: "Apagar", id: id }));
  };
  return (
    <TableContainer
      sx={{ marginTop: "2%", width: "95vw", marginLeft: "1.1%" }}
      component={Paper}
      elevation={5}
    >
      <Table>
        <TableHead>
          <TableRow sx={{ bgcolor: "#a9a9a9" }}>
            <TableCell sx={{ color: "white", fontSize: 25, fontWeight: 900 }}>
              {" "}
              # ID
            </TableCell>
            <TableCell
              align="center"
              sx={{ color: "white", fontSize: 25, fontWeight: 900 }}
            >
              Descrição
            </TableCell>
            <TableCell
              align="center"
              sx={{ color: "white", fontSize: 25, fontWeight: 900 }}
            >
              Detalhamento
            </TableCell>
            <TableCell
              align="center"
              sx={{ color: "white", fontSize: 25, fontWeight: 900 }}
            >
              Ações
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {recadosRedux.map((recado, index) => (
            <TableRow key={recado.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell align="center">{recado.description}</TableCell>
              <TableCell align="center">{recado.detail}</TableCell>
              <TableCell align="center">
                <Button
                  onClick={() => handleUpdate(recado.id)}
                  variant="contained"
                  color="primary"
                >
                  Editar
                </Button>

                <Button
                  onClick={() => handleDelete(recado.id)}
                  variant="contained"
                  color="error"
                  sx={{ ml: 2 }}
                >
                  Apagar
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
