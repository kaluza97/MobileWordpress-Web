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
import { EditableAccordionMenuType } from './EditableAccordionMenu.types';
import { addButtonStyles } from '@/components/AccordionMenu/AccordionMenu/AccordionMenu.styles';
import { EditableMenuItems } from '@/components/AccordionMenu/EditableAccordionMenu/EditableMenuItems/EditableMenuItems';
import { fetchAddItem } from '@/services/fetchMenuActions';
import { AccordionContext } from '@/context/AccordionMenu/AccordionMenu';

export const EditableAccordionMenu = ({
  title,
  isElementDraggable,
}: EditableAccordionMenuType) => {
  const [newItem, setNewItem] = useState('');
  const { views, setViews } = useContext(AccordionContext);

  const handleAddItem = async () => {
    if (newItem) {
      const data = await fetchAddItem(newItem);
      setViews([...views, { _id: data._id, name: data.name }]);
      setNewItem('');
    } else {
      console.error('New item cannot be empty');
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
        <Typography>{title}</Typography>
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
        <EditableMenuItems isElementDraggable={isElementDraggable} />
      </AccordionDetails>
    </Accordion>
  );
};
