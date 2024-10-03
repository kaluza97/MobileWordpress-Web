"use client"
import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { fetchViews } from '../../services/fetchViews';
import { AccordionMenu } from '../AccordionMenu/AccordionMenu';
import { container } from './Sidebar.styles';


export const Sidebar = () => {
    const [views, setViews] = useState<Array<{ _id: string, name: string }>>([]);

    useEffect(() => {
        const fetchData = async () => {
            const fetchedViews = await fetchViews();
            setViews(fetchedViews);
        };

        fetchData();
    }, []);

    const mockedComponents = [
        { _id: '1', name: 'component1' },
        { _id: '2', name: 'component2' },
        { _id: '3', name: 'component3' },
    ]

    return (
        <Box sx={container}>
            <AccordionMenu title='Components' menuItems={mockedComponents} setMenuItems={setViews} />
            <AccordionMenu title='Views' addButton menuItems={views} setMenuItems={setViews} />
        </Box>
    );
};
