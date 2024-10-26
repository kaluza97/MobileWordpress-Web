import { Colors } from '@/variables/Colors';
import { SxProps } from '@mui/material';

export const container: SxProps = {
  display: 'flex',
  flex: 2,
  height: '700px',
  position: 'relative',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 100,
};

export const phoneContainer: SxProps = {
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export const phoneContent: SxProps = {
  position: 'absolute',
  right: '5px',
  width: '220px',
  height: '470px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '10px',
};

const phoneSection: SxProps = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export const header: SxProps = {
  ...phoneSection,
  height: '10%',
  backgroundColor: Colors.green,
  borderRadius: '25px 25px 0 0',
};

export const content: SxProps = {
  ...phoneSection,
  height: '80%',
  backgroundColor: Colors.orange,
  overflowY: 'auto',
};

export const bottomNavigation: SxProps = {
  ...phoneSection,
  height: '10%',
  backgroundColor: Colors.blue,
  borderRadius: '0 0 25px 25px',
};
