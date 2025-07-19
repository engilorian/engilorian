"use client";

import { Section, Container, Heading, Quote } from "@/style/elements";
import { SideBySide, CoatImage, Content } from "./styles";


export default function CoatofArms({
  imageSrc = "/arms.svg",
  imageAlt = "The Edict of Engilore",
  heading = "The Edict of Engilore",
  description = `This is no heirloom, but a reckoning—cast in form.

  The pale parchment speaks Kleos: renown wrested by deed. Yet glory refuses stasis; it seeks the subtlest medium, and so ascends into Aether, the clear quintessence where memory is sewn into the fabric of being.

  The wine‑dark crescent whispers Ordeal: the willing plunge into pressure and bruise. Only in that furnace can matter transmute; suffering thickens to the aureate wisdom of Chrysopoeia, the soul’s perfected gold.

  The twin obsidian pillars declare Duality: two uncompromising truths held face‑to‑face. Their unresolved tension hums, storing charge until it flowers as Dynamis, the raw power that sets all motion in play.

  The ember‑bright star embodies Fervor: a flame that feeds upon itself. When heat outruns fuel, the fire turns inward, refining will into Apotheosis, a clarity that stands just shy of divine.

  None are idle emblems; each is a passage. They insist: you begin in the lower estate and wrestle upward—through acclaim, trial, conflict, and consuming zeal—until the higher term becomes your own.` 
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
