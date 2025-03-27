"use client";

import { Section, Container, Heading, Quote } from "@/style/elements";
import { SideBySide, CoatImage, Content } from "./styles";


export default function CoatofArms({
  imageSrc = "/arms.svg",
  imageAlt = "The Edict of Engilore",
  heading = "The Edict of Engilore",
  description = `This is no heirloom, but a reckoning—cast in form.

  The pale sky speaketh of Kleos: the dawning of self not by inheritance, but by rupture.  
  The deep blue field, the Ordeal: the descent wherein gold is not found, but forged.  
  The twin pillars stand as Duality: not reconciled, but harnessed—defiance become strength.  
  And the star—Fervor made Apotheosis: not a light to follow, but a will that dares to blaze.
  
  Here, no symbol is passive. Each declareth: thou art not born whole.  
  Thou art made—in fire, in fracture, and in choosing to rise regardless.`  
}) {
  return (
    <Section color="accent">
      <Container>
        <SideBySide>

          <Content>
            <Heading>{heading}</Heading>
            <Quote>{description}</Quote>
          </Content>

          <CoatImage src={imageSrc} alt={imageAlt} />

        </SideBySide>
      </Container>
    </Section>
  );
}
