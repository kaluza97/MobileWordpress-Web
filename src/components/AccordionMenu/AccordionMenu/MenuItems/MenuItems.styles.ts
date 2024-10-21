import { Colors } from "@/variables/Colors";
import { SxProps } from "@mui/material";

export const container: SxProps = {
    display: 'flex',
    alignItems: 'center',
    marginTop: '2rem'
};

export const draggableBox: SxProps = {
    display: 'flex',
    width: '100%',
    backgroundColor: Colors.main,
    padding: '0.3rem',
    cursor: 'pointer',
    borderRadius: '1rem'
};

export const text: SxProps = {
    width: '14rem',
    marginLeft: '1rem',
}

