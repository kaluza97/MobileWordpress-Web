import React, { createContext, useState, ReactNode } from "react";
import { SettingsContextType } from "./SettingsMenu.types";


export const SettingsMenuContext = createContext<SettingsContextType>({
    isSettingsActive: false,
    setIsSettingsActive: () => { }
});

interface SettingsContextProviderProps {
    children: ReactNode;
}

const SettingsContextProvider = ({ children }: SettingsContextProviderProps) => {
    const [isSettingsActive, setIsSettingsActive] = useState(false);


    return (
        <SettingsMenuContext.Provider value={{ isSettingsActive, setIsSettingsActive }}>
            {children}
        </SettingsMenuContext.Provider>
    );
};

export { SettingsContextProvider };