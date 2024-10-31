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
  marginBottom: '1rem',
};

export const addButtonStyles: SxProps = {
  backgroundColor: Colors.blue,
  fontWeight: 'bold',
};

export const titleText: SxProps = {
  fontSize: '1.4rem',
  padding: '0.4rem',
  fontWeight: 'bold',
  marginBottom: '2rem',
  backgroundColor: Colors.main,
};
