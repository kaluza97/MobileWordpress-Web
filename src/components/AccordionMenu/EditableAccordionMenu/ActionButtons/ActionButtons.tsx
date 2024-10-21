"use client"
import { useContext } from 'react';
import { Box, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { fetchRemoveItem, fetchSaveEdit } from '@/services/fetchMenuActions';
import { iconContainer } from '@/components/AccordionMenu/EditableAccordionMenu/ActionButtons/ActionButtons.styles';
import { ActionButtonsType } from '@/components/AccordionMenu/EditableAccordionMenu/ActionButtons/ActionButtons.types';
import { AccordionContext } from '@/context/AccordionMenu/AccordionMenu';

export const ActionButtons = ({ _id, name }: ActionButtonsType) => {
    const { editedItem, setEditedItem, editMode, setEditMode, views, setViews } = useContext(AccordionContext);

    const handleSaveEdit = async (id: string) => {
        if (editedItem) {

            await fetchSaveEdit(id, editedItem);

            setViews(views.map(item =>
                item._id === id ? { ...item, name: editedItem } : item))
            setEditMode(null)
        }
        else {
            console.error('Edited item cannot be empty')
        }
    }

    const handleRemoveItem = async (id: string) => {
        await fetchRemoveItem(id);
        setViews(views.filter(item => item._id !== id));
    }


    const toggleEditMode = (id: string, name: string) => {
        if (editMode) {
            setEditMode(null)
        }
        else {
            setEditMode(id);
            setEditedItem(name)
        }
    }

    const cancelEditMode = () => {
        setEditMode(null);
    }

    return (
        <>
            {editMode === _id ?
                <Box sx={iconContainer}>
                    <IconButton onClick={() => handleSaveEdit(_id)} disabled={!editedItem}>
                        <CheckIcon />
                    </IconButton>
                    <IconButton onClick={cancelEditMode}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                :
                <Box sx={iconContainer}>
                    <IconButton onClick={() => toggleEditMode(_id, name)}>
                        <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => handleRemoveItem(_id)}>
                        <DeleteIcon />
                    </IconButton>
                </Box>
            }
        </>
    );
};
