"use client";

import DefaultLayout from "@/components/Layout/Default";
import InterestAccordian from "@/components/InterestAccordian";

import { Section, Stained, Container, Center, Spacer, Br, Heading, Text, Bold } from "@/style/elements";


export default function Page() {
  return (
    <DefaultLayout>

      <Section color="accent">
      <Container>
        <Stained color="ruby">

          <Spacer />

          <Heading color="light">In Thought</Heading>
          <Text color="light">
            A man does not think freely unless he is willing to bear the <Bold>wounds</Bold> of his own mind.
            <Br />
            Knowledge is no passive indulgence, no banquet of trivia—it is a <Bold>debt</Bold>, exacted in loneliness, 
            in struggle, in defiance of the world’s anesthetized illusions. Wisdom does not descend as a 
            gift; it is torn from the <Bold>marrow</Bold> of existence, paid for in sleepless nights and the quiet terror 
            of seeing much.
            <Br />
            Reality is no orderly theorem to be solved, no archive to be memorized, but a <Bold>battleground </Bold> 
            where <Bold>truth</Bold> is wrestled from deception, where history does not merely instruct but haunts, 
            here nature—vast, silent, and unyielding—carves its mark upon the soul.
            <Br />
            Thought is no refuge. It is an <Bold>ordeal</Bold>. And I have no intention of seeking shelter.
          </Text>

        </Stained>
      </Container>
      </Section>

      <Section color="foreground">
      <Container>
        <Center>

          <InterestAccordian />

        </Center>
      </Container>
      </Section>

      <Section color="accent">
      <Container>
        <Stained color="amethyst">
          <Center>

            <Text color="light">
              The <Bold>polar bear</Bold> is my amulet because it embodies an existence stripped to its essence—a being without pretense, 
              without illusion, forged by necessity alone. It is not a symbol of mere strength, but of absolute sovereignty over its 
              conditions. In the Arctic, there is no mercy, no indulgence, no falsehood—only the cold, the hunt, and survival. A creature 
              that cannot endure does not exist.
              <Br />
              I align with it not because of some sentimental admiration, but because its nature mirrors my own. The Engilorian ethos is 
              one of <Bold>isolation</Bold>, not as a burden but as a crucible—where one is either shaped into something formidable or broken 
              into nothingness. The bear does not seek approval, nor does it bow to lesser forces. It moves alone, acts without hesitation, 
              and stands as an <Bold>apex</Bold> entity in a world that does not care for its existence. That is not a lesson in power—it is 
              a <Bold>law of being</Bold>.
              <Br />
              To take the <Bold>polar bear</Bold> as my amulet is not to claim strength, but to acknowledge the <Bold>weight of existence</Bold> 
              itself—to bear it without flinching, without retreat, and without the comfort of illusions. It is to embrace reality as it is, 
              to sharpen the will against adversity, and to walk forward—alone if necessary, but never lost.
            </Text>

          </Center>
        </Stained>
      </Container>
      </Section>

    </DefaultLayout>
  );
}
