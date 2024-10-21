import { Dispatch, SetStateAction } from "react";

export interface SettingsContextType {
    isSettingsActive: boolean;
    setIsSettingsActive: Dispatch<SetStateAction<boolean>>;
}
