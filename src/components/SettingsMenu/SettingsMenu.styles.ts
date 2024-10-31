import { Colors } from '@/variables/Colors';
import { SxProps } from '@mui/material';

export const container: SxProps = {
  display: 'flex',
  flex: 1,
  height: '50rem',
  padding: '1rem',
  backgroundColor: Colors.background,
  flexDirection: 'column',
  overflowY: 'scroll',
};

export const titleText: SxProps = {
  fontSize: '1.6rem',
  fontWeight: 'bold',
  marginBottom: '1rem',
};
