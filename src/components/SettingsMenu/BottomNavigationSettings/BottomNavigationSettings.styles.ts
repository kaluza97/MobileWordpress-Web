import { Colors } from "@/variables/Colors";
import { SxProps } from "@mui/material";

export const container: SxProps = {
    display: "flex",
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    height: '100%',
};

export const menuOption: SxProps = {
    display: "flex",
    padding: '0.5rem',
    width: '40%',
    marginBottom: '2rem',
    paddingLeft: '1rem',
    borderRadius: '1rem',
    alignItems: 'center',
    backgroundColor: Colors.gray,
    cursor: 'pointer'
};

export const text: SxProps = {
    marginLeft: '1rem'
};
