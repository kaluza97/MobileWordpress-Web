import { Colors } from '@/variables/Colors';
import { SxProps } from '@mui/material';

export const container: SxProps = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  width: '100%',
  height: '100%',
  backgroundColor: Colors.main,
  borderRadius: '0 0 25px 25px',
  opacity: 0.8,
};

export const iconText: SxProps = {
  fontSize: '0.8rem',
  fontWeight: 'bold',
  color: Colors.blue,
  padding: '0.4rem',
  cursor: 'pointer'
};

export const text: SxProps = {
  fontSize: '0.8rem',
  fontWeight: 'bold',
  padding: '0.4rem',
  color: Colors.orange,
  cursor: 'default'

};
