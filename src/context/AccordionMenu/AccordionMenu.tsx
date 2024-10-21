import React, { createContext, useState, ReactNode, useEffect } from "react";
import { AccordionContextType } from "@/context/AccordionMenu/AccordionMenu.types";
import { fetchViews } from "@/services/fetchViews";


export const AccordionContext = createContext<AccordionContextType>({
    editedItem: '',
    setEditedItem: () => { },
    editMode: null,
    setEditMode: () => { },
    views: [],
    setViews: () => { },
});

interface AccordionContextProviderProps {
    children: ReactNode;
}

const AccordionContextProvider = ({ children }: AccordionContextProviderProps) => {
    const [editedItem, setEditedItem] = useState<string>('');
    const [editMode, setEditMode] = useState<string | null>(null);
    const [views, setViews] = useState<Array<{ _id: string, name: string }>>([]);

    useEffect(() => {
        const fetchData = async () => {
            const fetchedViews = await fetchViews();
            setViews(fetchedViews);
        };

        fetchData();
    }, []);

    return (
        <AccordionContext.Provider value={{ editedItem, setEditedItem, editMode, setEditMode, views: views, setViews: setViews }}>
            {children}
        </AccordionContext.Provider>
    );
};

export { AccordionContextProvider };