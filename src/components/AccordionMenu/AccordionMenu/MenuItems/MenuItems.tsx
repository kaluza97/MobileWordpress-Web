"use client"
import { Box, Typography } from '@mui/material';
import { container, draggableBox, text } from '@/components/AccordionMenu/AccordionMenu/MenuItems/MenuItems.styles';
import { Draggable } from '@/components/DragAndDrop/Draggable/Draggable';
import { MenuItemsType } from '@/components/AccordionMenu/AccordionMenu/MenuItems/MenuItems.types';


export const MenuItems = ({ menuItems, isElementDraggable }: MenuItemsType) => (
    <>
        {menuItems.map(({ _id, name }) => (
            <Box key={_id} sx={container}>
                {isElementDraggable ?
                    <Draggable id={_id} name={name}>
                        <Box sx={draggableBox}>
                            <Typography sx={text}>{name}</Typography>
                        </Box>
                    </Draggable>
                    :
                    <Typography sx={text}>{name}</Typography>
                }
            </Box>
        ))}
    </>
);
