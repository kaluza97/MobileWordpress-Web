'use client';
import { useContext } from 'react';
import { Box, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {
  iconButton,
  iconContainer,
} from '@/components/AccordionMenu/EditableAccordionMenu/ActionButtons/ActionButtons.styles';
import { ActionButtonsType } from '@/components/AccordionMenu/EditableAccordionMenu/ActionButtons/ActionButtons.types';
import { AccordionContext } from '@/context/AccordionMenu/AccordionMenu';
import { MessageContext } from '@/context/Messages/Message';
import { MessageType } from '@/context/Messages/Message.types';
import { fetchSaveEdit, fetchRemoveItem } from '@/services/Views/fetchViews';
import { useRouter } from 'next/navigation';
import { SettingsMenuContext } from '@/context/SettingsMenu/SettingsMenu';

export const ActionButtons = ({ _id, name }: ActionButtonsType) => {
  const router = useRouter();
  const { editedItem, setEditedItem, editMode, setEditMode, views, setViews } =
    useContext(AccordionContext);
  const { setMessage } = useContext(MessageContext);
  const { closeSettingsMenu } = useContext(SettingsMenuContext);

  const handleNavigate = (name: string) => {
    router.push(`/view/${name}`);
    closeSettingsMenu();
  };

  const handleSaveEdit = async (id: string) => {
    if (editedItem) {
      await fetchSaveEdit(id, editedItem);

      setViews(
        views.map((item) =>
          item._id === id ? { ...item, name: editedItem } : item
        )
      );
      setEditMode(null);
    } else {
      setMessage('Edited item cannot be empty', MessageType.Error);
    }
  };

  const handleRemoveItem = async (id: string) => {
    await fetchRemoveItem(id);
    setViews(views.filter((item) => item._id !== id));
    router.push(`/`);
  };

  const toggleEditMode = (id: string, name: string) => {
    if (editMode) {
      setEditMode(null);
    } else {
      setEditMode(id);
      setEditedItem(name);
    }
  };

  const cancelEditMode = () => {
    setEditMode(null);
  };

  return (
    <>
      {editMode === _id ? (
        <Box sx={iconContainer}>
          <IconButton
            onClick={() => handleSaveEdit(_id)}
            disabled={!editedItem}
            sx={iconButton}
          >
            <CheckIcon />
          </IconButton>
          <IconButton onClick={cancelEditMode} sx={iconButton}>
            <CloseIcon />
          </IconButton>
        </Box>
      ) : (
        <Box sx={iconContainer}>
          <IconButton onClick={() => toggleEditMode(_id, name)} sx={iconButton}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => handleRemoveItem(_id)} sx={iconButton}>
            <DeleteIcon />
          </IconButton>
          <IconButton sx={iconButton} onClick={() => handleNavigate(name)}>
            <VisibilityIcon />
          </IconButton>
        </Box>
      )}
    </>
  );
};
