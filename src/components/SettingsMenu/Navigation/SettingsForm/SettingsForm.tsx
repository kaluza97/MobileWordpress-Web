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
} from '@/components/SettingsMenu/Navigation/SettingsForm/SettingsForm.styles';
import { SettingsFormProps } from '@/components/SettingsMenu/Navigation/SettingsForm/SettingsForm.types';

export const SettingsForm: FC<SettingsFormProps> = ({
  values,
  onChange,
  index,
  maxSections,
}) => {
  const { views } = useContext(AccordionContext);

  return (
    <Box sx={container}>
      <Typography sx={sectionText}>
        {index + 1}/{maxSections}
      </Typography>
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
          onChange={onChange}
          size="small"
          label="Icon of the menu item"
          // required
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
          onChange={onChange}
          size="small"
          label="View of the menu item"
          // required
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
