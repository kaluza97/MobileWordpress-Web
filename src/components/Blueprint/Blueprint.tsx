"use client"
import { Box } from "@mui/material";
import { CardMedia } from '@mui/material';
import { container, content, footer, header, phoneContainer, phoneContent } from "@/components/Blueprint/Blueprint.styles";
import { Droppable } from "@/components/DragAndDrop/Droppable/Droppable";
import Smartphone from "/public/phone.png";
import Image from 'next/image';
import { useContext } from "react";
import { SettingsMenuContext } from "@/context/SettingsMenu/SettingsMenu";

interface BlueprintInterface {
    droppedItemName: string;
}

export const Blueprint = ({ droppedItemName }: BlueprintInterface) => {
    const { setIsSettingsActive } = useContext(SettingsMenuContext);


    const handleActiveSetting = () => {
        setIsSettingsActive(true)
    }

    return (
        <CardMedia image="/blueprint.jpg" sx={container}>
            <Box sx={phoneContainer}>
                <Image
                    priority
                    src={Smartphone}
                    alt="Smartphone frame"
                    width={250}
                    height={500}
                />
                <Box sx={phoneContent}>
                    <Box sx={header}>Header</Box>
                    <Box sx={content}>Content
                    </Box>
                    <Box sx={footer}>
                        <Droppable item={droppedItemName}>
                            <button onClick={handleActiveSetting}>{droppedItemName}</button>
                        </Droppable>
                    </Box>

                </Box>
            </Box>
        </CardMedia>
    );
};
