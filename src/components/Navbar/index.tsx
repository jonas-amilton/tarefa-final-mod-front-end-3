import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useAppDispatch, useAppSelector } from "../../store/types.hooks";
import { buscarTodosRecados, deletarTodos } from "../../store/modules/recados";
import { atualizar } from "../../store/modules/users";
import { clearUserLogged } from "../../store/modules/users/userLogged";
import { useNavigate } from "react-router-dom";

const NavBar: React.FC = () => {
  const userLogged = useAppSelector((state) => state.userLogged.id);
  const recadosRedux = useAppSelector(buscarTodosRecados);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(atualizar({ id: userLogged, changes: { recados: recadosRedux } }));
    dispatch(clearUserLogged());
    navigate("/");
    handleMenuClose();
  };

  const handleClearRecados = () => {
    dispatch(deletarTodos());
    handleMenuClose();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          backgroundColor: "#9e12df",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        position="static"
      >
        <Toolbar
          sx={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontSize: { xs: "18px", sm: "24px" },
            }}
          >
            Lista de recados
          </Typography>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              ml: { md: "4em" },
            }}
          >
            <Button
              style={{ backgroundColor: "red" }}
              color="inherit"
              sx={{ fontWeight: "400" }}
              onClick={handleLogout}
            >
              Sair
            </Button>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleLogout}>Sair</MenuItem>
              <MenuItem onClick={handleClearRecados}>Limpar recados</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
