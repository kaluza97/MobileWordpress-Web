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

export const sectionText: SxProps = {
  marginTop: '2rem',
  marginBottom: '1rem',
  fontSize: '1.6rem',
  fontWeight: 'bold',
};

export const checkButtonStyles: SxProps = {
  backgroundColor: Colors.green,
  fontWeight: 'bold',
};
