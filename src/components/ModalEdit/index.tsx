import { Box, Button, Modal, Paper, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  configSliceSelectAll,
  setShowModal,
} from "../../store/modules/config/ConfigSlice";
import { useEffect, useState } from "react";
import {
  atualizarRecado,
  buscarTodosRecados,
} from "../../store/modules/recados";

const ModalEdit: React.FC = () => {
  const dispatch = useDispatch();
  const { showModal } = useSelector(configSliceSelectAll);
  const recadosRedux = useSelector(buscarTodosRecados);
  const [open, setOpen] = useState(true);
  const [detail, setDetail] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (showModal.open) setOpen(showModal.open);
  }, [showModal.open]);

  useEffect(() => {
    if (showModal.type === "Editar") {
      const buscaRecado = recadosRedux.find(
        (recado) => recado.id === showModal.id
      );

      if (buscaRecado) {
        setDetail(buscaRecado.detail || "");
        setDescription(buscaRecado.description || "");
      }
    }
  }, [showModal.type]);

  function handleClose(): void {
    setOpen(false);
    dispatch(setShowModal({ open: false, type: null }));
  }

  function handleEdit(): void {
    if (showModal.id) {
      dispatch(
        atualizarRecado({ id: showModal.id, changes: { description, detail } })
      );
      handleClose();
    }
  }

  return (
    <>
      {showModal.type === "Editar" && (
        <Modal
          open={open}
          onClose={handleClose}
          sx={{ display: "flex", justifyContent: "center", mt: "10%" }}
        >
          <Paper
            elevation={5}
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "600px",
              height: "300px",
            }}
          >
            <Box>
              <TextField
                required
                label="Detalhamento"
                variant="filled"
                sx={{ mt: "10%", ml: "5%", width: "40vw" }}
                fullWidth
                value={detail}
                onChange={(e) => setDetail(e.target.value)}
                onClick={() => setDetail("")}
              />
            </Box>
            <Box>
              <TextField
                required
                label="Descrição"
                variant="filled"
                sx={{ mt: "5%", ml: "5%", width: "40vw" }}
                fullWidth
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                onClick={() => setDescription("")}
              />
            </Box>

            <Box sx={{ display: "flex", mt: "5%", ml: "55%" }}>
              <Button onClick={handleClose} variant="contained" sx={{ mr: 1 }}>
                Cancelar
              </Button>
              <Button onClick={handleEdit} variant="contained" color="success">
                Salvar
              </Button>
            </Box>
          </Paper>
        </Modal>
      )}
    </>
  );
};

export default ModalEdit;
