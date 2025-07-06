"use client";

import Accordian from "@/components/Accordian";
import Coat from "@/components/Coat";
import Bio from "@/components/Bio";

import { 
  Section,
  Stained,
  Container,
  Row,
  RowItem,
  Center,
  Spacer,
  Heading,
  SubHeading,
  Text,
  List,
  ListItem
} from "@/style/elements";


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
      "Interpretation of myth, history, and philosophy as instruments of self transformation.",
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

const profileSections = [
  {
    title: "Craft",
    items: [
      "Software Engineering",
      "3D Modeling",
      "Inquiry & Writing",
      "Analysis",
      "Research",
      "Carpentry",
      "Videography",
      "Photography"
    ]
  },
  {
    title: "Research",
    items: [
      "Occultism",
      "Philology",
      "Alchemy",
      "Acoustics",
      "Mythology",
      "Symbolism",
      "Hermeneutics",
      "Architecture",
      "Folklore",
      "Metallurgy",
      "Optics",
      "Eugenics",
      "Behaviorial Psychology",
      "Analytical Psychology",
      "Psychoanalysis",
      "Geology",
      "Biomimicry"
    ]
  },
  {
    title: "Reverence & Inspiration",
    items: [
      "Roger Bacon",
      "Gustave Doré",
      "Odilon Redon",
      "Carl Gustav Jung",
      "Johann Wolfgang von Goethe",
      "Carl Gustav Carus",
      "Johannes Trithemius",
      "Julius Evola",
      "Robert Louis Moore",
      "Konstantin Leontiev",
      "Ernst Jünger",
      "Friedrich Wilhelm Nietzsche"
    ]
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

          <SubHeading color="light">
            Wielding the gifts that Nature, in her wisdom, hath bestowed.
          </SubHeading>

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

      <Section color="foreground">
      <Container>
        <Bio src="/me.jpg" alt="Portrait of Engilore">
          <SubHeading color="light">
            Each dawn finds me unmoored among shifting patterns of belief, where what I once held fast dissolves like mist at sunrise and new tremors of thought surge beneath 
            the surface, unseen yet insistent. I trace the slender line where certainty meets its shadow, probing definitions that crumble at my touch and gathering the shards 
            of insight they reveal. By mid day, I drift through corridors of doubt, listening to the quiet resonance of questions that refuse easy answers—each one a glinting 
            fragment in the vast mosaic of the unknown. As dusk deepens, I map the constellations of uncertainty overhead, weighing each flicker of possibility without tallying 
            victory or defeat. In the spaces between decisions, I discover entire landscapes of nuance, where hesitation becomes its own guide and the weight of inherited norms 
            falls away like autumn leaves. I collect the residue of restless wonder—those fleeting hesitations, the electric charge before revelation—and hold them close, for 
            they are the true measure of what remains undone. No catalogue of triumphs binds me, nor ledger of regrets; instead, I dwell in the fertile tension of not knowing, 
            cultivating that abrasion of curiosity against every barrier. And when silence descends, I follow the faint echo of my own uncertainty, trusting that within its 
            persistent murmur lies the faintest outlines of what the world might yet become.
          </SubHeading>
        </Bio>

      </Container>
      </Section>

      <Section>
      <Container>

        <Stained color="golden">
          <Center>

            {profileSections.map((section) => (
            <div key={section.title}>
              <Spacer />

              <SubHeading color="light">
                {section.title}
              </SubHeading>
              <Text color="light">
                {section.items.join(", ") + "."}
              </Text>

              <Spacer />
            </div>
            ))}

          </Center>
        </Stained>

      </Container>
      </Section>

    <Section>
      <Container>
        <Heading>Luminous Composure in White Women</Heading>

        <SubHeading>Preface</SubHeading>
        <Text>
          In these pages, I set forth my observations and affections—unvarnished and earnest—toward those women of northern hue whose quiet strength and crystalline presence stir both admiration and a yearning for order. This is neither a paeon of myth nor an exercise in hyperbole, but a deliberate reflection on qualities I deem essential to beauty unostentatious yet profound.
        </Text>

        <SubHeading>I. Of the First Light</SubHeading>
        <Text>
          At the break of dawn, they appear not as legends conjured by fancy, but as living verities—an alloy of serene purpose and mindful restraint. Their emergence is measured; each gesture precise, each motion a testament to self-possession. Here, the very notion of dawn finds its mirror in their ascent: inevitable, foundational, and luminous beneath the world’s veils of mist.
        </Text>

        <SubHeading>II. Of Austerity and Substance</SubHeading>
        <Text>
          Their bearing eschews the shrill and the ornamental. There is an austerity in their passage through space—as if they were the bedrock beneath an early-morning landscape, shaping contours unnoticed yet indispensable. To behold them is to recognize that true elegance lies not in flourish, but in that silent insistence upon purpose.
        </Text>

        <SubHeading>III. Of Gentleness Wedded to Clarity</SubHeading>
        <Text>
          What draws me most is the sharp poetry of their gentleness, bound to a cold clarity that brooks no compromise. Beneath their still surface lies an inner realm jealously guarded, revealed only in deliberate measure. Affection, in this courtship, transcends dalliance; it becomes a covenant, an unspoken dare, an anchor against the tumult of passing fancies.
        </Text>

        <SubHeading>IV. Of Words as Legacy</SubHeading>
        <Text>
          Their discourse bears the weight of lineage—sometimes brittle with history’s fractures, often alive with the tremor of inquiry, yet never adrift in aimlessness. Tradition and rebellion walk hand in hand upon their tongues, each tempered by reflection rather than broadcast as creed. In their speech I hear both the echo of ancient halls and the murmur of futures yet uncharted.
        </Text>

        <SubHeading>V. Of Resonance and Reflection</SubHeading>
        <Text>
          In the perfect symmetry of their image, I discern a reflection of my own deepest pursuits: the hunger for order sculpted with restraint, the silent accumulation of strength that seeks neither applause nor acclaim. Such qualities abide beyond the fickle tides of fashion or favor, persisting as the immutable bones of true vitality.
        </Text>

        <SubHeading>Conclusion</SubHeading>
        <Text>
          Thus, in their light I find both guide and mirror—a testament to beauty that dares to be austere, to speak in measured tones, and to root itself in enduring strength. May this treatise serve as both homage and honest inquiry, challenging readers to see beyond ornament, to the quiet crucible where form and purpose converge.
        </Text>
      </Container>
    </Section>

    </>
  );
}
