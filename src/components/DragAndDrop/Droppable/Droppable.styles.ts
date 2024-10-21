import { Colors } from "@/variables/Colors";
import { SxProps } from "@mui/material";

const sharedStylesOfContainer: SxProps = {
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '0 0 25px 25px',
}

export const container: SxProps = {
    ...sharedStylesOfContainer,
    color: Colors.white,
    backgroundColor: Colors.blue
};

export const containerOnOver = {
    ...sharedStylesOfContainer,
    color: 'gray',
    backgroundColor: Colors.gray,
    border: `2px dotted ${Colors.white}`,
    opacity: 0.8
};