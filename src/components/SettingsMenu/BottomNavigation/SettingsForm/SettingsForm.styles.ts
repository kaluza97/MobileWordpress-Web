import { Colors } from '@/variables/Colors';
import { SxProps } from '@mui/material';

export const container: SxProps = {
  display: 'flex',
  flexDirection: 'column',
};

export const selectContainer: SxProps = {
  marginTop: '2rem',
  display: 'flex',
  justifyContent: 'center',
};

export const checkButtonStyles: SxProps = {
  marginTop: '2rem',
  marginBottom: '4rem',
  backgroundColor: Colors.green,
  fontWeight: 'bold',
};
