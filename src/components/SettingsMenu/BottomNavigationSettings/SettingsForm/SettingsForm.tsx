"use client";
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ChangeEvent, useContext, useState } from 'react';
import { AccordionContext } from '@/context/AccordionMenu/AccordionMenu';
import { bottomNavigationIcons } from '@/constants/BottomNavigationIcons';
import { container, selectContainer } from '@/components/SettingsMenu/BottomNavigationSettings/SettingsForm/SettingsForm.styles';


export const SettingsForm = () => {
    const [newItemName, setNewItemName] = useState('');
    const [newItemIcon, setNewItemIcon] = useState('');
    const [newItemView, setNewItemView] = useState('');
    const { views } = useContext(AccordionContext);

    const onNewItemNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNewItemName(event.target.value)
    }

    const selectIcon = (event: SelectChangeEvent) => {
        setNewItemIcon(event.target.value);
    };

    const selectView = (event: SelectChangeEvent) => {
        setNewItemView(event.target.value);
    };

    return (
        <Box sx={container}>
            <TextField
                value={newItemName}
                onChange={onNewItemNameChange}
                label="Name of the menu item"
                variant="outlined"
                size='small'
            />
            <FormControl sx={selectContainer}>
                <InputLabel size='small' id="icon-select-label">Icon of the menu item</InputLabel>
                <Select
                    labelId="icon-select-label"
                    id="icon-select"
                    value={newItemIcon}
                    size='small'
                    label="Icon of the menu item"
                    onChange={selectIcon}
                >
                    {bottomNavigationIcons.map(({ icon, name }) => (
                        <MenuItem value={name}>
                            <FontAwesomeIcon icon={icon} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl sx={selectContainer}>
                <InputLabel size='small' id="view-select-label">View of the menu item</InputLabel>
                <Select
                    labelId="view-select-label"
                    id="view-select"
                    value={newItemView}
                    size='small'
                    label="View of the menu item"
                    onChange={selectView}
                >
                    {views.map(({ _id, name }) => (
                        <MenuItem value={_id}>
                            <Typography>{name}</Typography>
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
};
