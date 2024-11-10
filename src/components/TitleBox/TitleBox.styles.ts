import { Colors } from '@/variables/Colors';
import { SxProps } from '@mui/material';

export const container: SxProps = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
  backgroundColor: Colors.background,
  padding: '20px',
};

export const titleText: SxProps = {
  color: Colors.black,
  fontSize: '1.4rem',
  fontWeight: 'bold',
  textAlign: 'center',
};