import TextField from "@mui/material/TextField";
import { DataType } from "../../types/DataType";
import { LabelType } from "../../types/LabelType";

interface InputProps {
  type?: string;
  label: LabelType;
  name: DataType;
  onChange: Function;
  value: string;
}

const Input: React.FC<InputProps> = ({
  type,
  label,
  name,
  onChange,
  value,
}) => {
  return (
    <>
      <TextField
        value={value}
        type={type}
        label={label}
        variant="outlined"
        required
        fullWidth
        sx={{ mt: 3 }}
        name={name}
        onChange={(ev) => onChange(name, ev.target.value)}
      />
    </>
  );
};

export default Input;
