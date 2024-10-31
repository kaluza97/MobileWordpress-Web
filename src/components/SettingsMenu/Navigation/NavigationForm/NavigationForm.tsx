'use client';
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, useContext } from 'react';
import { AccordionContext } from '@/context/AccordionMenu/AccordionMenu';
import { navigationIcons } from '@/constants/NavigationIcons';
import {
  container,
  sectionText,
  selectContainer,
} from '@/components/SettingsMenu/Navigation/NavigationForm/NavigationForm.styles';
import { HandleChange, NavigationFormProps } from '@/components/SettingsMenu/Navigation/NavigationForm/NavigationForm.types';

export const NavigationForm: FC<NavigationFormProps> = ({
  values,
  setFormValues,
  index,
  maxSections,
}) => {
  const { views } = useContext(AccordionContext);

  const handleChange: HandleChange = (name) => (event) => {
    const value = event.target.value;

    setFormValues((prevValues) => {
      const updatedValues = [...prevValues];
      updatedValues[index] = { ...updatedValues[index], [name]: value };
      return updatedValues;
    });
  };

  return (
    <Box sx={container}>
      <Typography sx={sectionText}>
        {index + 1}/{maxSections}
      </Typography>

      <TextField
        name="name"
        value={values.name}
        onChange={handleChange('name')}
        label="Name of the menu item"
        variant="outlined"
        size="small"
        required
      />

      <FormControl sx={selectContainer}>
        <InputLabel size="small" id="icon-select-label">
          Icon of the menu item
        </InputLabel>
        <Select
          name="icon"
          labelId="icon-select-label"
          id="icon-select"
          value={values.icon}
          onChange={handleChange('icon')}
          size="small"
          label="Icon of the menu item"
          required
        >
          {navigationIcons.map(({ icon, name }) => (
            <MenuItem value={name} key={name}>
              <FontAwesomeIcon icon={icon} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={selectContainer}>
        <InputLabel size="small" id="view-select-label">
          View of the menu item
        </InputLabel>
        <Select
          name="view"
          labelId="view-select-label"
          id="view-select"
          value={values.view}
          onChange={handleChange('view')}
          size="small"
          label="View of the menu item"
          required
        >
          {views.map(({ _id, name }) => (
            <MenuItem value={_id} key={_id}>
              <Typography>{name}</Typography>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};