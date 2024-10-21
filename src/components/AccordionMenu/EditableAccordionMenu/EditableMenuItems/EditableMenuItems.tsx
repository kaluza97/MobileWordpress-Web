"use client"
import { ChangeEvent, useContext } from 'react';
import { Box, Typography, TextField } from '@mui/material';
import { Draggable } from '@/components/DragAndDrop/Draggable/Draggable';
import { ActionButtons } from '@/components/AccordionMenu/EditableAccordionMenu/ActionButtons/ActionButtons';
import { container, text, textField, draggableBox } from '@/components/AccordionMenu/EditableAccordionMenu/EditableMenuItems/EditableMenuItems.styles';
import { EditableMenuItemsType } from '@/components/AccordionMenu/EditableAccordionMenu/EditableMenuItems/EditableMenuItems.types';
import { AccordionContext } from '@/context/AccordionMenu/AccordionMenu';


export const EditableMenuItems = ({ isElementDraggable }: EditableMenuItemsType) => {
    const { editedItem, setEditedItem, editMode, views } = useContext(AccordionContext);

    const onEditItemChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEditedItem(event.target.value);
    };

    return (
        <>
            {views.map(({ _id, name }) => (
                <Box key={_id} sx={container}>
                    {editMode === _id ?
                        <TextField
                            sx={textField}
                            value={editedItem}
                            onChange={onEditItemChange}
                            label="Edit item"
                            variant="outlined"
                            size="small"
                        />
                        :
                        <>
                            {isElementDraggable ?
                                <Draggable id={_id} name={name}>
                                    <Box sx={draggableBox}>
                                        <Typography sx={text}>{name}</Typography>
                                    </Box>
                                </Draggable>
                                :
                                <Typography sx={text}>{name}</Typography>

                            }
                        </>
                    }
                    <ActionButtons
                        _id={_id}
                        name={name}
                    />
                </Box>
            ))}
        </>
    );
};
