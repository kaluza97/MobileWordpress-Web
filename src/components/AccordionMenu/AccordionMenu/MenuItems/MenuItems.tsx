'use client';
import { Box, Typography } from '@mui/material';
import {
  container,
  draggableBox,
  text,
} from '@/components/AccordionMenu/AccordionMenu/MenuItems/MenuItems.styles';
import { Draggable } from '@/components/DragAndDrop/Draggable/Draggable';
import { MenuItemsType } from '@/components/AccordionMenu/AccordionMenu/MenuItems/MenuItems.types';

export const MenuItems = ({ menuItems }: MenuItemsType) => (
  <>
    {menuItems.map(({ _id, name, type }) => (
      <Box key={_id} sx={container}>
        <Draggable id={_id} name={name} type={type}>
          <Box sx={draggableBox}>
            <Typography sx={text}>{name}</Typography>
          </Box>
        </Draggable>
      </Box>
    ))}
  </>
);
