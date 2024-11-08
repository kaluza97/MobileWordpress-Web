'use client';
import { ChangeEvent, useContext } from 'react';
import { Box, Typography, TextField, IconButton } from '@mui/material';
import { ActionButtons } from '@/components/AccordionMenu/EditableAccordionMenu/ActionButtons/ActionButtons';
import {
  container,
  text,
  textField,
  iconButton,
  viewContainer,
} from '@/components/AccordionMenu/EditableAccordionMenu/EditableMenuItems/EditableMenuItems.styles';
import { AccordionContext } from '@/context/AccordionMenu/AccordionMenu';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useRouter } from 'next/navigation';

export const EditableMenuItems = () => {
  const router = useRouter();
  const { editedItem, setEditedItem, editMode, views } =
    useContext(AccordionContext);

  const onEditItemChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEditedItem(event.target.value);
  };

  const handleNavigate = () => {
    router.push(`/`);
  };

  return (
    <Box sx={container}>
      <Box sx={viewContainer}>
        <Typography sx={text}>MAIN VIEW</Typography>
        <IconButton sx={iconButton} onClick={() => handleNavigate()}>
          <VisibilityIcon />
        </IconButton>
      </Box>
      {views.map(({ _id, name }) => (
        <Box key={_id} sx={viewContainer}>
          {editMode === _id ? (
            <TextField
              sx={textField}
              value={editedItem}
              onChange={onEditItemChange}
              label="Edit item"
              variant="outlined"
              size="small"
            />
          ) : (
            <Typography sx={text}>{name}</Typography>
          )}
          <ActionButtons _id={_id} name={name} />
        </Box>
      ))}
    </Box>
  );
};
