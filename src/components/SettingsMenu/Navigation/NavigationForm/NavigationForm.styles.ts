import { Colors } from '@/variables/Colors';
import { SxProps } from '@mui/material';

export const container: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  marginTop: '1rem',
};

export const selectContainer: SxProps = {
  marginTop: '2rem',
  display: 'flex',
  justifyContent: 'center',
};

export const sectionText: SxProps = {
  marginTop: '1rem',
  marginBottom: '1rem',
  fontSize: '1.6rem',
  fontWeight: 'bold',
};

export const removeButtonStyles: SxProps = {
  marginTop: '1rem',
  backgroundColor: Colors.orange,
  fontWeight: 'bold',
};
