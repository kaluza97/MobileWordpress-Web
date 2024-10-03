"use client"
import { ChangeEvent, useState } from 'react';
import { Box, Typography, TextField, IconButton } from '@mui/material';
import { AccordionMenuItemsType } from '../AccordionMenu.types';
import { container, iconContainer, text, textField } from './AccordionMenuItems.styles';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';


export const AccordionMenuItems = ({ addButton, menuItems, setMenuItems }: AccordionMenuItemsType) => {
    const [editedItem, setEditedItem] = useState('');
    const [editMode, setEditMode] = useState<string | null>(null);
    const endpoint = 'http://localhost:9000/api/views'


    const handleSaveEdit = async (id: string) => {
        if (editedItem) {

            await fetch(`${endpoint}/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: editedItem })
            })

            setMenuItems(menuItems.map(item =>
                item._id === id ? { ...item, name: editedItem } : item))
            setEditMode(null)
        }
        else {
            console.error('Edited item cannot be empty')
        }
    }

    const handleRemoveItem = async (id: string) => {
        await fetch(`${endpoint}/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        })
        setMenuItems(menuItems.map(item =>
            item._id === id ? { ...item, name: editedItem } : item))

        setMenuItems(menuItems.filter(item => item._id !== id));
    }


    const toggleEditMode = (id: string) => {
        editMode ? setEditMode(null) : setEditMode(id);
    }


    const onEditItemChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEditedItem(event.target.value)
    }


    const cancelEditMode = () => {
        setEditMode(null);
    }

    return (
        <>
            {menuItems.map((item) => (
                <Box key={item._id} sx={container}>
                    {editMode === item._id ?
                        <TextField
                            sx={textField}
                            value={editedItem}
                            onChange={onEditItemChange}
                            label="Edit item"
                            variant="outlined"
                            size="small"
                        />
                        :
                        <Typography sx={text}>{item.name}</Typography>
                    }
                    {addButton &&
                        <>
                            {editMode === item._id ?
                                <Box sx={iconContainer}>
                                    <IconButton onClick={() => handleSaveEdit(item._id)} disabled={!editedItem}>
                                        <CheckIcon />
                                    </IconButton>
                                    <IconButton onClick={cancelEditMode}>
                                        <CloseIcon />
                                    </IconButton>
                                </Box>
                                :

                                <Box sx={iconContainer}>
                                    <IconButton onClick={() => toggleEditMode(item._id)}>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton onClick={() => handleRemoveItem(item._id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </Box>
                            }
                        </>
                    }
                </Box>
            ))}
        </>
    );
};
