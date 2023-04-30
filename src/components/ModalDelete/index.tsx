import { Box, Button, Modal, Paper, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  configSliceSelectAll,
  setShowModal,
} from "../../store/modules/config/ConfigSlice";
import { useEffect, useState } from "react";
import {
  atualizarRecado,
  buscarTodosRecados,
  deletarRecado,
} from "../../store/modules/recados";

const ModalDelete: React.FC = () => {
  const dispatch = useDispatch();
  const { showModal } = useSelector(configSliceSelectAll);
  const recadosRedux = useSelector(buscarTodosRecados);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (showModal.open) setOpen(showModal.open);
  }, [showModal.open]);

  function handleClose(): void {
    setOpen(false);
    dispatch(setShowModal({ open: false, type: null }));
  }

  function handleApagar(): void {
    if (showModal.id) {
      dispatch(deletarRecado(showModal.id));
      handleClose();
    }
  }

  return (
    <>
      {showModal.type === "Apagar" && (
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
              <Typography
                variant="h6"
                sx={{
                  mt: 15,
                  fontWeight: "900",
                  textAlign: "center",
                }}
              >
                Realmente deseja excluir este recado ?
              </Typography>
            </Box>

            <Box sx={{ display: "flex", mt: "15%", ml: "60%" }}>
              <Button onClick={handleClose} variant="contained" sx={{ mr: 1 }}>
                Cancelar
              </Button>
              <Button onClick={handleApagar} variant="contained" color="error">
                Apagar
              </Button>
            </Box>
          </Paper>
        </Modal>
      )}
    </>
  );
};

export default ModalDelete;
