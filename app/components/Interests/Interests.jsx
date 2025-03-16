"use client";

import { useState } from "react";
import { SubHeading, Text, List, ListItem } from "@/style/elements";
import { 
  AccordionContainer, 
  AccordionItem, 
  AccordionHeader, 
  MotionAccordionContent 
} from "./styles";
import { motion } from "framer-motion";

const groupedInterests = [
  {
    category: "Natural Sciences & Inspiration",
    interests: [
      "Geology",
      "Botany",
      "Ecology",
      "Geophysics",
      "Paleontology",
      "Hydrology",
      "Biomimicry",
    ],
    description: "Discovering the natural laws, Earth's deep history, and nature-inspired innovation.",
  },
  {
    category: "Philosophical & Interpretive Thought",
    interests: [
      "Existentialism",
      "Phenomenology",
      "Aesthetics",
      "Hermeneutics",
      "Semiotics",
    ],
    description: "Exploring profound questions and the art of interpreting the human experience.",
  },
  {
    category: "Human Behavior & Society",
    interests: [
      "Behaviorism",
      "Sociobiology",
      "Eugenics",
      "Anthropology",
    ],
    description: "Examining the intricacies of human behavior, evolution, and societal constructs.",
  },
  {
    category: "Cultural Legacy",
    interests: [
      "Folklore",
      "Mythology",
    ],
    description: "Preserving ancient narratives, shared heritage, and the power of myth.",
  },
  {
    category: "Design & Perception",
    interests: [
      "Architecture",
      "Optics",
    ],
    description: "Shaping spaces and understanding the interplay of light, structure, and form.",
  },
];

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

function InterestsAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <AccordionContainer>
      {groupedInterests.map(({ category, description, interests }, index) => (
        <AccordionItem key={category}>
          <AccordionHeader onClick={() => toggleAccordion(index)}>
            <SubHeading>{category}</SubHeading>
          </AccordionHeader>
          <MotionAccordionContent
            variants={contentVariants}
            animate={openIndex === index ? "open" : "closed"}
            initial="closed"
          >
            <Text>{description}</Text>
            <List>
              {interests.map((item) => (
                <ListItem key={item}>{item}</ListItem>
              ))}
            </List>
          </MotionAccordionContent>
        </AccordionItem>
      ))}
    </AccordionContainer>
  );
}

export default InterestsAccordion;
