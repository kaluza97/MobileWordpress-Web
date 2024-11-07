import { Colors } from '@/variables/Colors';
import { SxProps } from '@mui/material';

export const container: SxProps = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '2rem',
};

export const draggableBox: SxProps = {
  display: 'flex',
  width: '100%',
  backgroundColor: Colors.background,
  padding: '0.3rem',
  cursor: 'pointer',
  borderRadius: '1rem',
  boxShadow: `2px 2px 10px ${Colors.gray}`,
};

export const text: SxProps = {
  width: '14rem',
  marginLeft: '1rem',
};
