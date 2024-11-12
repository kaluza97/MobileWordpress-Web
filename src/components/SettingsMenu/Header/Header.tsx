'use client';
import { Box, Button, TextField, Typography } from '@mui/material';
import {
  checkButtonStyles,
  container,
  titleText,
} from '@/components/SettingsMenu/Header/Header.styles';
import { SettingsMenuContext } from '@/context/SettingsMenu/SettingsMenu';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { fetchHeader, saveHeader } from '@/services/Settings/fetchHeader';
import { usePathname } from 'next/navigation'
import { MessageContext } from '@/context/Messages/Message';
import { MessageType } from '@/context/Messages/Message.types';
import { HeaderObjectType } from '@/services/Settings/fetchSettings.types';
import CheckIcon from '@mui/icons-material/Check';

export const Header = () => {
  const pathname = usePathname()
  const { setMessage } = useContext(MessageContext);
  const { activeSettingsMenu } = useContext(SettingsMenuContext);
  const viewIdUrl = pathname.replace('/view/', '');
  const [headerItems, setHeaderItems] = useState<Array<HeaderObjectType>>([]);
  const [headerTitle, setHeaderTitle] = useState('');

  const findHeaderByViewId = (headerData: Array<HeaderObjectType>) => {
    return headerData.find(item => item.viewId === viewIdUrl);
  }

  useEffect(() => {
    const fetchData = async () => {
      const headerData = await fetchHeader();
      console.log(headerData, 'NEXT_PUBLIC_API_HEADER_ENDPOINT')
      const headerItem = findHeaderByViewId(headerData);
      setHeaderTitle(headerItem?.title || '');
      setHeaderItems(headerData);
    };
    fetchData();
  }, []);


  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newTitle = event.target.value;
    setHeaderTitle(newTitle);

    const updatedItems = headerItems.map((item) =>
      item.viewId === viewIdUrl ? { ...item, title: newTitle } : item
    );
    setHeaderItems(updatedItems);
  };


  const handleConfirm = async () => {
    try {

      console.log(headerItems)
      await saveHeader(headerItems);
      setMessage('Header updated successfully!', MessageType.Success);
    } catch (error) {
      setMessage('Error updating header.', MessageType.Error);
    }
  };


  return (
    <Box sx={container}>
      <Typography sx={titleText}>{activeSettingsMenu.name}</Typography>
      <Button
        variant="contained"
        startIcon={<CheckIcon />}
        onClick={handleConfirm}
        sx={checkButtonStyles}
      >
        Confirm
      </Button>
      <TextField
        name="title"
        value={headerTitle}
        onChange={onChange}
        label="Header title"
        variant="outlined"
        size="small"
        required
      />
    </Box>
  );
};
