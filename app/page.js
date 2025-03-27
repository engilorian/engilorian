"use client";

import Accordian from "@/components/Accordian";
import Coat from "@/components/Coat";

import { Section, Stained, Container, Center, Spacer, Heading, Text } from "@/style/elements";


const ideology = [
  {
    subject: "Kleos & Thus Aether",
    description: "The ceaseless quest for glory eternal, and the immutable laws governing all existence.",
    catalog: [
      "Kleos (κλέος): Imperishable renown achieved by deeds, wisdom, and lasting legacy.",
      "Aether (αἰθήρ): The celestial essence, the fifth element binding all reality—subtle yet profound.",
      "Mastery of nature’s laws and the celestial forces shaping the cosmos.",
      "Comprehension of Earth's hidden epochs, the layered passage of time, and whispers from antiquity.",
      "Inspiration from nature’s perfected craft—biomimicry, intelligent adaptation, and crafted harmony.",
    ],
  },
  {
    subject: "Ordeal & Thus Chrysopoeia",
    description: "Tribulation as the forge of wisdom; transformation as suffering’s higher purpose.",
    catalog: [
      "Ordeal: The trials borne willingly, tempering mind, flesh, and spirit alike.",
      "Chrysopoeia (χρυσοποιία): The sacred art of transforming base elements into golden wisdom—the soul’s alchemy.",
      "Philosophic tribulation—struggle as the guardian and giver of profound knowledge.",
      "Metaphysical purification—transmuting chaos into cosmos, blindness into illumination.",
      "Interpretation of myth, history, and philosophy as instruments of self-transformation.",
    ],
  },
  {
    subject: "Duality & Thus Dynamis",
    description: "Tension between contraries as the wellspring of power and creative force.",
    catalog: [
      "Duality: The dance of opposing truths—order with chaos, sovereignty with surrender, luminance with shadow.",
      "Dynamis (δύναμις): The latent force residing within opposition; the primal spark of all movement.",
      "Essential paradox—truths inseparable from their contradictions.",
      "Energy manifest as transformation—the friction and resistance from which greatness springs forth.",
      "Doctrine of struggle—conflict as architect of profound identity and purpose.",
    ],
  },
  {
    subject: "Fervor & Thus Apotheosis",
    description: "Unyielding ardor as the path ascending toward transcendence.",
    catalog: [
      "Fervor: The hallowed flame kindling creation, conquest, and enlightenment.",
      "Apotheosis (ἀποθέωσις): Elevation beyond mortal bounds; the ascent to divine clarity.",
      "The relentless impulse to create—manifesting divinity through art, science, architecture, and thought.",
      "The psychology of ambition—unyielding pursuit, defiance of mortal limitation.",
      "The inevitability of sacrifice—the readiness to burn wholly in pursuit of one's destiny.",
    ],
  },
];


export default function Page() {
  return (
    <>
      <Section color="accent">
      <Container>
        <Center>
        <Stained color="amethyst">

          <Spacer />

          <Heading color="light">In Thought</Heading>

          <Text color="light">
            Wielding the gifts that Nature, in her wisdom, hath bestowed.
          </Text>

        </Stained>
        </Center>
      </Container>
      </Section>

      <Section color="foreground">
      <Container>
        <Center>

          <Accordian data={ideology} />

        </Center>
      </Container>
      </Section>

      <Coat />
    </>
  );
}
