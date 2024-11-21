'use client';
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { MenuItems } from '@/components/AccordionMenu/AccordionMenu/MenuItems/MenuItems';
import { AccordionMenuType } from '@/components/AccordionMenu/AccordionMenu/AccordionMenu.types';
import { titleText } from '@/components/AccordionMenu/AccordionMenu/AccordionMenu.styles';

export const AccordionMenu = ({ title, menuItems }: AccordionMenuType) => (
  <Accordion defaultExpanded={true}>
    <AccordionSummary
      expandIcon={<ArrowDropDownIcon />}
      aria-controls={`panel-content-${title}`}
      id={`panel-content-${title}`}
    >
      <Typography sx={titleText}>{title}</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <MenuItems menuItems={menuItems} />
    </AccordionDetails>
  </Accordion>
);
