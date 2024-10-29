'use client';
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ChangeEvent, FC, useContext, useEffect } from 'react';
import { AccordionContext } from '@/context/AccordionMenu/AccordionMenu';
import { navigationIcons } from '@/constants/NavigationIcons';
import {
  container,
  selectContainer,
} from '@/components/SettingsMenu/Navigation/SettingsForm/SettingsForm.styles';
import { useFormikContext } from 'formik';
import { fetchGetSettings } from '@/services/Settings/fetchSettings';
import { FormValues } from '@/services/Settings/fetchSettings.types';

interface SettingsFormProps {
  values: FormValues;
  onChange: (
    e:
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent<string>
  ) => void;
}

export const SettingsForm: FC<SettingsFormProps> = ({ values, onChange }) => {
  const { views } = useContext(AccordionContext);
  const { setValues } = useFormikContext<FormValues>();

  const loadSettings = async () => {
    const settings = await fetchGetSettings();
    setValues({
      name: settings[0].name,
      icon: settings[0].icon,
      view: settings[0].view,
    });
  };

  useEffect(() => {
    loadSettings();
  }, []);

  return (
    <Box sx={container}>
      <TextField
        name="name"
        value={values.name}
        onChange={onChange}
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
          onChange={onChange}
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
          size="small"
          label="View of the menu item"
          onChange={onChange}
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
