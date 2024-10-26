import React, { createContext, useState, useEffect } from 'react';
import {
    AccordionContextProviderProps,
    AccordionContextType,
} from '@/context/AccordionMenu/AccordionMenu.types';
import { fetchViews } from '@/services/fetchViews';

export const AccordionContext = createContext<AccordionContextType>({
    editedItem: '',
    setEditedItem: () => { },
    editMode: null,
    setEditMode: () => { },
    views: [],
    setViews: () => { },
});

const AccordionContextProvider = ({
    children,
}: AccordionContextProviderProps) => {
    const [editedItem, setEditedItem] = useState<string>('');
    const [editMode, setEditMode] = useState<string | null>(null);
    const [views, setViews] = useState<Array<{ _id: string; name: string }>>([]);

    useEffect(() => {
        const fetchData = async () => {
            const fetchedViews = await fetchViews();
            setViews(fetchedViews);
        };

        fetchData();
    }, []);

    return (
        <AccordionContext.Provider
            value={{
                editedItem,
                setEditedItem,
                editMode,
                setEditMode,
                views,
                setViews,
            }}
        >
            {children}
        </AccordionContext.Provider>
    );
};

export { AccordionContextProvider };
