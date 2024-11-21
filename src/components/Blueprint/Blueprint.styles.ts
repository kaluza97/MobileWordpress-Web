import { Colors } from '@/variables/Colors';
import { ZIndex } from '@/variables/ZIndex';
import { SxProps } from '@mui/material';

export const container: SxProps = {
  display: 'flex',
  flex: 2,
  height: '700px',
  position: 'relative',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: ZIndex.default,
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
  flex: 1,
  backgroundColor: Colors.green,
};

export const content: SxProps = {
  ...phoneSection,
  flex: 8,
  backgroundColor: Colors.orange,
  overflowY: 'auto',
};

export const navigation: SxProps = {
  ...phoneSection,
  flex: 1,
  backgroundColor: Colors.blue,
};
