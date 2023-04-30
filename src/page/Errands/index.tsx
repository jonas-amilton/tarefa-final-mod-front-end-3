import { Box, Paper } from "@mui/material";
import React, { useEffect } from "react";
import { AddErrand } from "../../components/AddErrand/index";
import Navbar from "../../components/Navbar/index";
import { useAppDispatch, useAppSelector } from "../../store/types.hooks";
import { adicionarTodosRecados } from "../../store/modules/recados";
import { buscarUsuarioPorEmail } from "../../store/modules/users";
import ModalEdit from "../../components/ModalEdit/index";
import ModalDelete from "../../components/ModalDelete/index";
import { useNavigate } from "react-router-dom";
import { TableErrands } from "../../components/TableErrands/index";

export const Errands: React.FC = () => {
  const navigate = useNavigate();
  const userLogged = useAppSelector((state) => state.userLogged);
  const userRedux = useAppSelector((state) =>
    buscarUsuarioPorEmail(state, userLogged.email)
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (userRedux?.recados) {
      dispatch(adicionarTodosRecados(userRedux.recados));
    }
  }, [userRedux?.recados, dispatch]);

  useEffect(() => {
    if (!userLogged) {
      navigate("/");
    }
  }, [userLogged]);

  return (
    <>
      <Navbar />
      <Box
        component={Paper}
        elevation={5}
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "97vw",
          height: "80vh",
          marginLeft: "1.5%",
          marginTop: "2%",
        }}
      >
        <AddErrand />
        <TableErrands />
      </Box>
      <ModalEdit />
      <ModalDelete />
    </>
  );
};
