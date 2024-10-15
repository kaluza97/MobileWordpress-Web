"use client"
import { ChangeEvent, useState } from 'react';
import { Box, Accordion, AccordionSummary, Typography, AccordionDetails, Button, TextField } from '@mui/material';
import { AccordionMenuItems } from './AccordionMenuItems/AccordionMenuItems';
import { AccordionMenuType } from './AccordionMenu.types';
import { addButtonStyles } from './AccordionMenu.styles';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AddIcon from '@mui/icons-material/Add';


export const AccordionMenu = ({ title, addButton, menuItems, setMenuItems }: AccordionMenuType) => {
    const [newItem, setNewItem] = useState('');
    const endpoint = 'http://localhost:9000/api/views'

    const handleAddItem = async () => {
        if (newItem) {

            const result = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: newItem })
            })
            const data = await result.json();
            setMenuItems([...menuItems, { _id: data._id, name: data.name }]);
            setNewItem('')
        }
        else {
            console.error('New item cannot be empty')
        }
    }

    const onNewItemChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNewItem(event.target.value)
    }

    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls={`panel-content-${title}`}
                id={`panel-content-${title}`}
            >
                <Typography>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {addButton &&
                    <Box>
                        <TextField
                            value={newItem}
                            onChange={onNewItemChange}
                            label="New item name"
                            variant="outlined"
                            size='small'
                        />
                        <Button variant="contained" startIcon={<AddIcon />} onClick={handleAddItem} disabled={!newItem} sx={addButtonStyles}>
                            Add
                        </Button>
                    </Box>
                }
                <AccordionMenuItems addButton={addButton} menuItems={menuItems} setMenuItems={setMenuItems} />
            </AccordionDetails>
        </Accordion>
    );
};
