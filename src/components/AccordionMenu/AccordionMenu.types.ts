import { Dispatch, SetStateAction } from "react";

export interface AccordionMenuType {
    title: string;
    addButton?: boolean;
    menuItems: Array<{ _id: string, name: string }>;
    setMenuItems: Dispatch<SetStateAction<Array<{ _id: string, name: string }>>>;
}

export interface AccordionMenuItemsType {
    addButton?: boolean;
    menuItems: Array<{ _id: string, name: string }>;
    setMenuItems: Dispatch<SetStateAction<Array<{ _id: string, name: string }>>>;
}