"use client";

import { useState } from "react";
import { SubHeading, Text, List, ListItem } from "@/style/elements";
import { 
  AccordionContainer, 
  AccordionItem, 
  AccordionHeader, 
  MotionAccordionContent 
} from "./styles";


const contentVariants = {
  open: {
    height: "auto",
    opacity: 1,
    paddingTop: "12px",
    paddingBottom: "12px",
    transition: { duration: 0.2, ease: "easeInOut" },
  },
  closed: {
    height: 0,
    opacity: 0,
    paddingTop: 0,
    paddingBottom: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

function Accordion({ data }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <AccordionContainer>
      {data.map(({ subject, description, catalog }, index) => (
        <AccordionItem key={subject}>
          <AccordionHeader onClick={() => toggleAccordion(index)}>
            <SubHeading color="light" $hovercolor="primary">{subject}</SubHeading>
          </AccordionHeader>
          <MotionAccordionContent
            variants={contentVariants}
            animate={openIndex === index ? "open" : "closed"}
            initial="closed"
          >
            <Text color="light">{description}</Text>

            {Array.isArray(catalog) && catalog.length > 0 && (
              <List>
                {catalog.map((item, index) => (
                  <ListItem color="light" key={`${subject}-${index}`}>{item}</ListItem>
                ))}
              </List>
            )}

          </MotionAccordionContent>
        </AccordionItem>
      ))}
    </AccordionContainer>
  );
}

export default Accordion;
