import { Colors } from '@/variables/Colors';
import { ZIndex } from '@/variables/ZIndex';
import { SxProps } from '@mui/material';

export const container: SxProps = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  backgroundColor: Colors.background,
  zIndex: ZIndex.navbar,
};
