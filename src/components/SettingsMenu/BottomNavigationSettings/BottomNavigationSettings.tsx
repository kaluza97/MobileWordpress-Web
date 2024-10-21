"use client";
import { Box, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faUser, faHome, faSearch, faAdd, faEdit, faCamera, faImage, faShop, faMessage, faBell, faBasketShopping, faArchive, faStar, faX, faWallet, faEraser } from '@fortawesome/free-solid-svg-icons';
import { container, menuOption, text } from '@/components/SettingsMenu/BottomNavigationSettings/BottomNavigationSettings.styles';

const menuItems = [
    { icon: faHeart, label: 'Favorites' },
    { icon: faUser, label: 'Profile' },
    { icon: faHome, label: 'Home' },
    { icon: faSearch, label: 'Search' },
    { icon: faAdd, label: 'Add' },
    { icon: faEdit, label: 'Edit' },
    { icon: faCamera, label: 'Camera' },
    { icon: faImage, label: 'Gallery' },
    { icon: faShop, label: 'Shop' },
    { icon: faMessage, label: 'Messages' },
    { icon: faBell, label: 'Notifications' },
    { icon: faBasketShopping, label: 'Cart' },
    { icon: faArchive, label: 'Archive' },
    { icon: faStar, label: 'Favorites' },
    { icon: faX, label: 'Close' },
    { icon: faWallet, label: 'Wallet' },
    { icon: faEraser, label: 'Clear' }
];

export const BottomNavigationSettings = () => {
    return (
        <Box sx={container}>
            {menuItems.map((item, index) => (
                <Box key={index} sx={menuOption}>
                    <FontAwesomeIcon icon={item.icon} />
                    <Typography sx={text}>{item.label}</Typography>
                </Box>
            ))}
        </Box>
    );
};
