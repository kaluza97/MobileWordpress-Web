"use client"
import { ChangeEvent, useContext } from 'react';
import { Box, Typography, TextField } from '@mui/material';
import { ActionButtons } from '@/components/AccordionMenu/EditableAccordionMenu/ActionButtons/ActionButtons';
import { container, text, textField } from '@/components/AccordionMenu/EditableAccordionMenu/EditableMenuItems/EditableMenuItems.styles';
import { AccordionContext } from '@/context/AccordionMenu/AccordionMenu';


export const EditableMenuItems = () => {
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
                        : <Typography sx={text}>{name}</Typography>
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
