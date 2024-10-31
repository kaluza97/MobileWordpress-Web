import { Colors } from '@/variables/Colors';
import { SxProps } from '@mui/material';

export const appBar: SxProps = {
  backgroundColor: Colors.main,
};

export const container: SxProps = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  margin: 0,
};

export const text: SxProps = {
  color: 'black',
  marginLeft: '1rem',
  fontSize: '1.1rem',
  fontFamily: 'Arial',
  fontWeight: 'bold',
};
