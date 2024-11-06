import { Colors } from '@/variables/Colors';
import { SxProps } from '@mui/material';

const sharedStylesOfContainer: SxProps = {
  display: 'flex',
  width: '100%',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
};

export const container: SxProps = {
  ...sharedStylesOfContainer,
  color: Colors.white,
};

export const containerOnOver = {
  ...sharedStylesOfContainer,
  color: Colors.white,
  backgroundColor: Colors.gray,
  border: `2px dotted ${Colors.white}`,
  opacity: 0.8,
};
