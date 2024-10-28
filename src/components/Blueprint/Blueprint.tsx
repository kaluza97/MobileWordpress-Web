'use client';
import { Box } from '@mui/material';
import { CardMedia } from '@mui/material';
import {
    container,
    content,
    bottomNavigation,
    header,
    phoneContainer,
    phoneContent,
} from '@/components/Blueprint/Blueprint.styles';
import { Droppable } from '@/components/DragAndDrop/Droppable/Droppable';
import Smartphone from '/public/phone.png';
import Image from 'next/image';
import { DraggableComponentType } from '../DragAndDrop/DragAndDrop.types';
import { PhoneSectionOptions } from './PhoneSectionOptions/PhoneSectionOptions';

interface BlueprintInterface {
    droppedItems: {
        headerState: string,
        contentState: string,
        bottomNavigationState: string,
    };
}

export const Blueprint = ({ droppedItems }: BlueprintInterface) => {

    const { headerState, contentState, bottomNavigationState } = droppedItems;

    console.log(droppedItems)


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
                    <Box sx={header}>
                        <Droppable
                            sectionName="Header"
                            item={headerState}
                            type={DraggableComponentType.Header}
                            id={DraggableComponentType.Header}
                            borderRadius='25px 25px 0 0'
                        >
                            <PhoneSectionOptions borderRadius='25px 25px 0 0'
                            />
                        </Droppable>
                    </Box>
                    <Box sx={content}>
                        <Droppable
                            sectionName="Content"
                            item={contentState}
                            type={DraggableComponentType.Content}
                            id={DraggableComponentType.Content}
                        >
                            <PhoneSectionOptions />
                        </Droppable>
                    </Box>
                    <Box sx={bottomNavigation}>
                        <Droppable
                            sectionName="Bottom Navigation"
                            item={bottomNavigationState}
                            type={DraggableComponentType.BottomNavigation}
                            id={DraggableComponentType.BottomNavigation}
                            borderRadius='0 0 25px 25px'
                        >
                            <PhoneSectionOptions borderRadius='0 0 25px 25px'
                            />
                        </Droppable>
                    </Box>
                </Box>
            </Box>
        </CardMedia>
    );
};
