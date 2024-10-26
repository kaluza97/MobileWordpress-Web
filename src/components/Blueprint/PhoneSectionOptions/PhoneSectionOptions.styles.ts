import { Colors } from '@/variables/Colors';
import { SxProps } from '@mui/material';

export const container: SxProps = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  width: '100%',
  height: '100%',
  backgroundColor: Colors.white,
  cursor: 'pointer',
  borderRadius: '0 0 25px 25px',
  opacity: 0.8,
};

export const iconBox: SxProps = {
  display: 'flex',
  flexDirection: 'column',
};

export const iconText: SxProps = {
  fontSize: '0.8rem',
  fontWeight: 'bold',
};

export const text: SxProps = {
  fontSize: '1rem',
  fontWeight: 'bold',
  color: Colors.green,
};
