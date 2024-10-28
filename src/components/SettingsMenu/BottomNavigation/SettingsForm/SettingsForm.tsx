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
import { useContext, useEffect } from 'react';
import { AccordionContext } from '@/context/AccordionMenu/AccordionMenu';
import { bottomNavigationIcons } from '@/constants/BottomNavigationIcons';
import {
  container,
  selectContainer,
} from '@/components/SettingsMenu/BottomNavigation/SettingsForm/SettingsForm.styles';
import { useFormikContext } from 'formik';
import { fetchGetSettings } from '@/services/fetchSettings';

interface FormValues {
  name: string;
  icon: string;
  view: string;
}

export const SettingsForm = () => {
  const { views } = useContext(AccordionContext);
  const { values, handleChange, setValues } = useFormikContext<FormValues>();


  const loadSettings = async () => {
    const settings = await fetchGetSettings();
    setValues({
      name: settings[0].name,
      icon: settings[0].icon,
      view: settings[0].view,
    });
  }

  useEffect(() => {
    loadSettings()
  }, [])

  return (
    <Box sx={container}>
      <TextField
        name="name"
        value={values.name}
        onChange={handleChange}
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
          size="small"
          label="Icon of the menu item"
          onChange={handleChange}
          required
        >
          {bottomNavigationIcons.map(({ icon, name }) => (
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
          size="small"
          label="View of the menu item"
          onChange={handleChange}
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
