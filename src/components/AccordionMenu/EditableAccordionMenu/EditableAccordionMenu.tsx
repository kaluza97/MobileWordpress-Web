'use client';
import { ChangeEvent, useContext, useState } from 'react';
import {
  Box,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Button,
  TextField,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { EditableAccordionMenuType } from '@/components/AccordionMenu/EditableAccordionMenu/EditableAccordionMenu.types';
import { EditableMenuItems } from '@/components/AccordionMenu/EditableAccordionMenu/EditableMenuItems/EditableMenuItems';
import { AccordionContext } from '@/context/AccordionMenu/AccordionMenu';
import { MessageContext } from '@/context/Messages/Message';
import { MessageType } from '@/context/Messages/Message.types';
import {
  addButtonStyles,
  titleText,
} from '@/components/AccordionMenu/EditableAccordionMenu/EditableAccordionMenu.styles';
import { fetchAddItem } from '@/services/Views/fetchViews';

export const EditableAccordionMenu = ({ title }: EditableAccordionMenuType) => {
  const [newItem, setNewItem] = useState('');
  const { views, setViews } = useContext(AccordionContext);
  const { setMessage } = useContext(MessageContext);

  const handleAddItem = async () => {
    if (!newItem) {
      setMessage('New item cannot be empty', MessageType.Error);
      return;
    }

    const isDuplicate = views.some((view) => view.name.toLowerCase() === newItem.toLowerCase());
    if (isDuplicate) {
      setMessage('Item with this name already exists', MessageType.Error);
      return;
    }

    try {
      const data = await fetchAddItem(newItem);
      setViews([...views, { _id: data._id, name: data.name }]);
      setNewItem('');
    } catch {
      setMessage('Failed to add item. Please try again later.', MessageType.Error);
    }
  };

  const onNewItemChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewItem(event.target.value);
  };

  return (
    <Accordion defaultExpanded={true}>
      <AccordionSummary
        expandIcon={<ArrowDropDownIcon />}
        aria-controls={`panel-content-${title}`}
        id={`panel-content-${title}`}
      >
        <Typography sx={titleText}>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box>
          <TextField
            value={newItem}
            onChange={onNewItemChange}
            label="New item name"
            variant="outlined"
            size="small"
          />
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={handleAddItem}
            disabled={!newItem}
            sx={addButtonStyles}
          >
            Add
          </Button>
        </Box>
        <EditableMenuItems />
      </AccordionDetails>
    </Accordion>
  );
};
