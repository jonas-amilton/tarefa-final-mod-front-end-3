import { Button } from "@mui/material";
import { ButtonType } from "../../types/ButtonType";

interface IButtonProps {
  tipoBasicButton: ButtonType;
  children: string;
  onClick?: () => void;
}

export const BasicButton: React.FC<IButtonProps> = ({
  tipoBasicButton,
  children,
  onClick,
}) => {
  return (
    <>
      <Button
        sx={{ mt: 3, mb: 2 }}
        type={tipoBasicButton}
        onClick={onClick}
        variant="contained"
        fullWidth
      >
        {children}
      </Button>
    </>
  );
};
