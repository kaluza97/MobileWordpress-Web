import { Colors } from '@/variables/Colors';
import { SxProps } from '@mui/material';

export const container: SxProps = {
  display: 'flex',
  flexDirection: 'column',
};

export const formContainer: SxProps = {
  marginTop: '2rem',
};

export const checkButtonStyles: SxProps = {
  backgroundColor: Colors.green,
  fontWeight: 'bold',
};

export const addButtonStyles: SxProps = {
  marginTop: '1rem',
  backgroundColor: Colors.blue,
  fontWeight: 'bold',
};
