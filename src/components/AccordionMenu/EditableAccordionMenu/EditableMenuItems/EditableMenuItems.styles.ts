import { Colors } from '@/variables/Colors';
import { SxProps } from '@mui/material';

export const container: SxProps = {
  marginTop: '2rem',
  width: '18rem',
};

export const viewContainer: SxProps = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  marginTop: '2rem',
  backgroundColor: Colors.main,
  color: Colors.black,
};

export const draggableBox: SxProps = {
  display: 'flex',
  width: '100%',
  backgroundColor: Colors.main,
  padding: '0.3rem',
  cursor: 'pointer',
  borderRadius: '1rem',
};

export const textField: SxProps = {
  width: '100%',
};

export const text: SxProps = {
  marginLeft: '1rem',
  padding: '0.5rem',
};

export const iconButton: SxProps = {
  marginRight: '0.2rem',
};
