import { Colors } from '@/variables/Colors';
import { SxProps } from '@mui/material';

export const container: SxProps = {
  display: 'flex',
  flexDirection: 'column',
};

export const titleText: SxProps = {
  fontSize: '1.4rem',
  padding: '0.4rem',
  fontWeight: 'bold',
  marginBottom: '2rem',
  backgroundColor: Colors.main,
};
