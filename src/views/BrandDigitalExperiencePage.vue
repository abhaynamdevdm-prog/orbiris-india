<script setup>
import { ref } from 'vue'
import Container from '../components/global/Container.vue'
import Button from '../components/global/Button.vue'
import SectionHeading from '../components/global/SectionHeading.vue'
import Icon from '../components/global/Icon.vue'
import BrandEcosystemVisual from '../components/solutions/BrandEcosystemVisual.vue'

const consistencyIssues = [
  'Their visual identity changes across platforms.',
  'Their messaging is unclear or inconsistent.',
  'Their website does not reflect their actual value.',
  'Social content and landing pages feel disconnected.',
  'Customers struggle to understand what makes the business different.',
]

const capabilities = [
  {
    number: '01',
    title: 'Brand Strategy & Positioning',
    description: 'Make the business easier to understand by clarifying its value, audience, and meaningful points of difference.',
    focus: ['Brand purpose and value proposition', 'Audience and differentiation', 'Brand messaging foundations', 'Brand architecture where relevant'],
    motif: 'brand-capability--strategy',
    label: 'CLARITY',
  },
  {
    number: '02',
    title: 'Visual Identity Systems',
    description: 'Create a coherent visual language people can recognize and teams can apply consistently across the places the brand appears.',
    focus: ['Logo system and usage', 'Color and typography systems', 'Visual language and design principles', 'Brand guidelines and reusable assets'],
    motif: 'brand-capability--identity',
    label: 'RECOGNITION',
  },
  {
    number: '03',
    title: 'Website & Digital Experience',
    description: 'Help visitors understand the offer, find what matters, and take a relevant next step across devices and journeys.',
    focus: ['Information architecture', 'Page hierarchy and conversion journeys', 'Responsive UI/UX', 'Content structure, accessibility, and usability'],
    motif: 'brand-capability--website',
    label: 'USABILITY',
  },
  {
    number: '04',
    title: 'Content & Communication Systems',
    description: 'Give teams a clearer foundation for communicating with a recognizable voice and relevant messages across channels.',
    focus: ['Tone of voice', 'Messaging frameworks', 'Content pillars and editorial direction', 'Consistent communication across touchpoints'],
    motif: 'brand-capability--content',
    label: 'CONSISTENCY',
  },
  {
    number: '05',
    title: 'Digital Touchpoint Alignment',
    description: 'Bring customer-facing profiles, campaigns, and pages into closer alignment so information and experience feel connected.',
    focus: ['Social profile consistency', 'Landing pages and campaign assets', 'Business listings and relevant digital profiles', 'Consistent customer-facing information'],
    motif: 'brand-capability--touchpoints',
    label: 'CONNECTED',
  },
  {
    number: '06',
    title: 'Brand Governance & Evolution',
    description: 'Make the brand practical to use as teams, channels, and business needs evolve—without losing what makes it recognizable.',
    focus: ['Reusable templates and components', 'Brand consistency checks', 'Practical usage guidelines', 'Systems that can scale as the business grows'],
    motif: 'brand-capability--governance',
    label: 'ADAPTABILITY',
  },
]

const brandFlow = [
  'Business Strategy',
  'Brand Positioning',
  'Identity & Messaging',
  'Website & Content',
  'Customer Experience',
  'Learning & Improvement',
]

const workStages = [
  {
    number: '01',
    title: 'Understand',
    description: 'Business goals, audience, current identity, and challenges.',
  },
  {
    number: '02',
    title: 'Define',
    description: 'Positioning, differentiation, message, and priorities.',
  },
  {
    number: '03',
    title: 'Design',
    description: 'An identity system and digital experience shaped by the brief.',
  },
  {
    number: '04',
    title: 'Align',
    description: 'Apply the system across relevant channels and touchpoints.',
  },
  {
    number: '05',
    title: 'Refine',
    description: 'Review consistency, usability, and opportunities to improve.',
  },
]

const websiteQuestions = [
  'What the business does',
  'Who it serves',
  'Why it is relevant',
  'What makes it different',
  'What to do next',
]

const suitableScenarios = [
  'Your branding feels inconsistent across platforms.',
  'Your company has grown, but its identity no longer reflects its value.',
  'You are launching a new brand or entering a new market.',
  'Your team is rebuilding or improving its website.',
  'You want a more coherent content and customer experience.',
]

const questions = [
  {
    question: 'Is brand identity the same as a logo?',
    answer: 'No. A logo is one part of an identity system. Brand identity also includes visual language, typography, color, messaging, and the experience people encounter across relevant touchpoints.',
  },
  {
    question: 'Do we need to redesign our existing brand?',
    answer: 'Not necessarily. The right scope depends on your business needs and what is already working. Work may focus on clarifying messaging, improving consistency, evolving selected elements, or a broader identity change where appropriate.',
  },
  {
    question: 'Can you help with an existing website?',
    answer: 'The page experience can be reviewed in the context of your brand, audience, content, and business goals. Any recommendations or implementation work would be discussed and scoped around the specific needs.',
  },
  {
    question: 'Does this include website development?',
    answer: 'Website planning and experience design are part of the capability. Development requirements and implementation scope depend on the project, existing platform, and agreed needs.',
  },
  {
    question: 'Can brand and performance marketing work together?',
    answer: 'Yes. A clear brand and consistent experience can support campaign communication and the journey after someone engages. The appropriate relationship depends on the business objectives and priorities.',
  },
  {
    question: 'How is the project scope decided?',
    answer: 'Scope is shaped by business goals, existing assets, audiences, platforms, requirements, and available resources. We clarify the context and agree on the work before implementation.',
  },
]

const openQuestion = ref(null)

function toggleQuestion(index) {
  openQuestion.value = openQuestion.value === index ? null : index
}

function onQuestionKeydown(event, index) {
  if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return

  event.preventDefault()
  const buttons = [...event.currentTarget.closest('.brand-faq__list').querySelectorAll('.brand-faq__trigger')]
  const nextIndex = event.key === 'Home'
    ? 0
    : event.key === 'End'
      ? buttons.length - 1
      : (index + (event.key === 'ArrowDown' ? 1 : -1) + buttons.length) % buttons.length
  buttons[nextIndex]?.focus()
}
</script>

<template>
  <div class="brand-page">
    <section class="brand-hero">
      <Container class="brand-hero__inner">
        <div class="brand-hero__copy">
          <p class="brand-eyebrow"><span></span> BRAND &amp; DIGITAL EXPERIENCE</p>
          <h1>Make every brand interaction feel connected.</h1>
          <p class="brand-hero__description">
            Your identity, message, website, and digital touchpoints should work together to communicate one clear and consistent experience—making your business easier to understand, recognize, and engage with.
          </p>
          <div class="brand-hero__actions">
            <Button to="/contact">Discuss Your Business <Icon name="arrow" :size="17" /></Button>
            <Button to="/solutions" variant="secondary" class="brand-button--outline">Explore All Solutions</Button>
          </div>
          <p class="brand-hero__note">One brand. Many moments. A more coherent experience.</p>
        </div>
        <BrandEcosystemVisual class="brand-hero__visual" />
      </Container>
      <div class="brand-hero__grid" aria-hidden="true"></div>
    </section>

    <section class="brand-consistency brand-section">
      <Container>
        <div class="brand-section-heading">
          <SectionHeading
            eyebrow="The consistency problem"
            title="Trust can weaken when the pieces don't add up."
            description="People meet a business through many signals. When those signals feel unrelated, it can take more effort to understand what the business offers and why it matters."
          />
          <p class="brand-section-heading__aside">These are common points to review, not a checklist every business must have.</p>
        </div>
        <ol class="brand-consistency-list">
          <li v-for="(issue, index) in consistencyIssues" :key="issue">
            <span>{{ String(index + 1).padStart(2, '0') }}</span>
            <p>{{ issue }}</p>
            <span class="brand-consistency-list__signal" aria-hidden="true"><i></i><i></i><i></i></span>
          </li>
        </ol>
      </Container>
    </section>

    <section class="brand-viewpoint brand-section">
      <Container>
        <div class="brand-viewpoint__intro">
          <SectionHeading
            eyebrow="Our point of view"
            title="A brand is more than a logo."
            description="It is the complete experience people encounter when they discover, evaluate, interact with, and remember a business."
          />
          <p class="brand-viewpoint__aside">
            A clear point of view gives the system direction. Consistent expression makes it recognizable. A considered experience helps people engage with confidence.
          </p>
        </div>
        <div class="brand-system" role="img" aria-label="Brand clarity informs visual and message consistency, user experience, and customer confidence">
          <div class="brand-system__orbit brand-system__orbit--outer" aria-hidden="true"></div>
          <div class="brand-system__orbit brand-system__orbit--inner" aria-hidden="true"></div>
          <div class="brand-system__core"><span>BRAND</span><strong>EXPERIENCE</strong></div>
          <div class="brand-system__item brand-system__item--clarity"><i></i><strong>Brand clarity</strong><small>What matters</small></div>
          <div class="brand-system__item brand-system__item--visual"><i></i><strong>Visual consistency</strong><small>What is recognized</small></div>
          <div class="brand-system__item brand-system__item--message"><i></i><strong>Message consistency</strong><small>What is understood</small></div>
          <div class="brand-system__item brand-system__item--experience"><i></i><strong>User experience</strong><small>How it works</small></div>
          <div class="brand-system__item brand-system__item--confidence"><i></i><strong>Customer confidence</strong><small>How it feels</small></div>
        </div>
        <p class="brand-system__caption">Each part supports the others; none has to operate in isolation.</p>
      </Container>
      <div class="brand-viewpoint__grid" aria-hidden="true"></div>
    </section>

    <section class="brand-capabilities brand-section">
      <Container>
        <SectionHeading
          eyebrow="Brand & digital experience capabilities"
          title="Build a system people can recognize and use."
          description="Each capability has a role in making the brand clearer, more consistent, and more useful across real business contexts."
        />
        <div class="brand-capability-list">
          <article
            v-for="(capability, index) in capabilities"
            :key="capability.number"
            class="brand-capability"
            :class="{ 'brand-capability--reverse': index % 2 === 1 }"
          >
            <div class="brand-capability__visual" :class="capability.motif" aria-hidden="true">
              <div class="brand-capability__motif">
                <span class="brand-capability__motif-ring"></span>
                <span class="brand-capability__motif-ring brand-capability__motif-ring--inner"></span>
                <span class="brand-capability__motif-axis"></span>
                <span class="brand-capability__motif-node"></span>
                <span class="brand-capability__motif-core"></span>
              </div>
              <small>{{ capability.label }} / {{ capability.number }}</small>
            </div>
            <div class="brand-capability__content">
              <span class="brand-capability__number">{{ capability.number }} <i></i> CAPABILITY</span>
              <h3>{{ capability.title }}</h3>
              <p>{{ capability.description }}</p>
              <ul>
                <li v-for="focus in capability.focus" :key="focus">{{ focus }}</li>
              </ul>
            </div>
          </article>
        </div>
      </Container>
    </section>

    <section class="brand-connected brand-section">
      <Container>
        <div class="brand-connected__intro">
          <SectionHeading
            eyebrow="The connected brand system"
            title="The experience is built across the whole journey."
            description="Strategy gives the system direction. Every following expression carries that direction into a real interaction—and creates learning for what comes next."
          />
          <span class="brand-connected__index">A connected system, not isolated services.</span>
        </div>
        <ol class="brand-flow">
          <li v-for="(stage, index) in brandFlow" :key="stage" class="brand-flow__step">
            <span>{{ String(index + 1).padStart(2, '0') }}</span>
            <strong>{{ stage }}</strong>
            <Icon v-if="index < brandFlow.length - 1" name="arrow" :size="16" />
          </li>
        </ol>
        <div class="brand-flow__feedback"><span></span>Experience informs learning; learning helps refine the system.</div>
      </Container>
    </section>

    <section class="brand-process brand-section">
      <Container>
        <div class="brand-section-heading">
          <SectionHeading
            eyebrow="How we approach the work"
            title="From business context to a usable system."
            description="A considered process helps translate what the business needs into choices teams can put into practice."
          />
          <p class="brand-section-heading__aside">Scope depends on business goals, existing assets, and agreed requirements.</p>
        </div>
        <ol class="brand-process-list">
          <li v-for="(stage, index) in workStages" :key="stage.number" class="brand-process-step">
            <div class="brand-process-step__marker">
              <span>{{ stage.number }}</span>
              <i v-if="index < workStages.length - 1"></i>
            </div>
            <div>
              <h3>{{ stage.title }}</h3>
              <p>{{ stage.description }}</p>
            </div>
          </li>
        </ol>
      </Container>
    </section>

    <section class="brand-website brand-section">
      <Container class="brand-website__layout">
        <div class="brand-website__copy">
          <SectionHeading
            eyebrow="Website experience matters"
            title="A useful website helps people make sense of the business."
            description="A website is often where people bring together what they have heard, seen, and understood. Its structure and content should help visitors orient themselves and decide what to do next."
          />
          <ol class="brand-website__questions">
            <li v-for="(question, index) in websiteQuestions" :key="question">
              <span>{{ String(index + 1).padStart(2, '0') }}</span>{{ question }}
            </li>
          </ol>
        </div>
        <div class="website-illustration" role="img" aria-label="Illustrative responsive website interface with a clear headline, content structure, and next-step action; not a client project">
          <div class="website-illustration__caption"><span>EXPERIENCE STUDY</span><span>ILLUSTRATIVE ONLY</span></div>
          <div class="website-window">
            <div class="website-window__bar"><span></span><span></span><span></span><small>yourbusiness.example</small></div>
            <div class="website-window__nav"><b>BRAND /</b><span>About</span><span>What we do</span><span>Insights</span><i>Contact ↗</i></div>
            <div class="website-window__hero">
              <small>WHAT YOU DO / WHO IT'S FOR</small>
              <strong>A clear message<br />starts a better<br /><em>conversation.</em></strong>
              <span>Make the value easy to understand.</span>
              <i>Explore what we do <b>→</b></i>
              <div class="website-window__graphic" aria-hidden="true"><span></span><i></i><b></b></div>
            </div>
            <div class="website-window__footer"><span>CLARITY</span><i></i><span>CONSISTENCY</span><i></i><span>NEXT STEP</span></div>
          </div>
          <div class="website-mobile" aria-hidden="true">
            <div class="website-mobile__top"><span></span><i></i></div>
            <small>WHAT YOU DO</small>
            <b>A clear message<br />starts a better<br /><em>conversation.</em></b>
            <span class="website-mobile__line"></span>
            <span class="website-mobile__button">Explore what we do →</span>
          </div>
        </div>
      </Container>
    </section>

    <section class="brand-fit brand-section">
      <Container class="brand-fit__layout">
        <div>
          <SectionHeading
            eyebrow="Who this is for"
            title="Useful when brand and experience need to catch up with the business."
            description="The right scope might be a focused improvement or a broader system. Not every situation calls for a complete rebrand."
          />
        </div>
        <ul class="brand-fit__list">
          <li v-for="(scenario, index) in suitableScenarios" :key="scenario">
            <span>{{ String(index + 1).padStart(2, '0') }}</span>{{ scenario }}<Icon name="arrow" :size="16" />
          </li>
        </ul>
      </Container>
    </section>

    <section class="brand-faq brand-section">
      <Container class="brand-faq__layout">
        <div class="brand-faq__intro">
          <SectionHeading
            eyebrow="Frequently asked questions"
            title="Brand & Digital Experience questions"
            description="Clear answers about how the brand and experience work can be shaped."
          />
          <p>Implementation scope is discussed and agreed according to the business needs.</p>
          <Button to="/contact" variant="secondary">Discuss Your Business <Icon name="arrow" :size="16" /></Button>
        </div>
        <div class="brand-faq__list">
          <article v-for="(item, index) in questions" :key="item.question" class="brand-faq__item">
            <h3>
              <button
                :id="`brand-question-${index}`"
                type="button"
                class="brand-faq__trigger"
                :aria-expanded="openQuestion === index"
                :aria-controls="`brand-answer-${index}`"
                @click="toggleQuestion(index)"
                @keydown="onQuestionKeydown($event, index)"
              >
                <span>{{ String(index + 1).padStart(2, '0') }}</span>
                <span>{{ item.question }}</span>
                <Icon :name="openQuestion === index ? 'close' : 'plus'" :size="18" />
              </button>
            </h3>
            <div
              :id="`brand-answer-${index}`"
              v-show="openQuestion === index"
              class="brand-faq__answer"
              role="region"
              :aria-labelledby="`brand-question-${index}`"
            >
              <p>{{ item.answer }}</p>
            </div>
          </article>
        </div>
      </Container>
    </section>

    <section class="brand-cta brand-section">
      <Container class="brand-cta__inner">
        <div class="brand-cta__orbit" aria-hidden="true"><span></span><span></span><span></span></div>
        <p class="brand-eyebrow"><span></span> MAKE THE EXPERIENCE ADD UP</p>
        <h2>Build a brand experience<br />that feels connected.</h2>
        <p class="brand-cta__description">
          Tell us about your business, the people you want to reach, and where your brand experience could work harder.
        </p>
        <div class="brand-cta__actions">
          <Button to="/contact">Start a Conversation <Icon name="arrow" :size="17" /></Button>
          <RouterLink to="/solutions/strategy" class="brand-cta__secondary">Explore Strategy &amp; Discovery <Icon name="arrow" :size="16" /></RouterLink>
        </div>
      </Container>
    </section>
  </div>
</template>

<style scoped>
.brand-page {
  overflow: clip;
}

.brand-section {
  position: relative;
  padding-block: clamp(4.5rem, 9vw, 7.75rem);
}

.brand-hero {
  position: relative;
  overflow: hidden;
  background: var(--color-navy);
  color: white;
}

.brand-hero__inner {
  position: relative;
  display: grid;
  min-height: min(690px, calc(100svh - 84px));
  grid-template-columns: minmax(0, 1.04fr) minmax(360px, 0.96fr);
  align-items: center;
  gap: 1rem;
  padding-block: clamp(5rem, 9vw, 7.5rem);
}

.brand-hero__copy {
  position: relative;
  z-index: 1;
  max-width: 680px;
}

.brand-eyebrow {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  margin: 0 0 1.5rem;
  color: #b9d4e7;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.15em;
}

.brand-eyebrow > span {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--color-teal);
  box-shadow: 0 0 14px rgba(0, 209, 167, 0.65);
}

.brand-hero h1 {
  max-width: 700px;
  margin: 0;
  color: white;
  font-family: var(--font-display);
  font-size: clamp(3.15rem, 5.8vw, 5.3rem);
  font-weight: 650;
  letter-spacing: -0.065em;
  line-height: 1.03;
}

.brand-hero__description {
  max-width: 610px;
  margin: 1.5rem 0 0;
  color: #c1cede;
  font-size: clamp(1rem, 1.3vw, 1.1rem);
  line-height: 1.8;
}

.brand-hero__actions,
.brand-cta__actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.85rem;
  margin-top: 2rem;
}

.brand-hero .brand-button--outline,
.brand-cta .brand-button--outline {
  border-color: rgba(255, 255, 255, 0.32);
  background: transparent;
  color: white;
}

.brand-hero .brand-button--outline:hover,
.brand-cta .brand-button--outline:hover {
  border-color: var(--color-blue);
  background: rgba(255, 255, 255, 0.06);
}

.brand-hero__note {
  margin: 2rem 0 0;
  color: #94abc0;
  font-size: 0.79rem;
}

.brand-hero__visual {
  position: relative;
  z-index: 1;
}

.brand-hero__grid,
.brand-viewpoint__grid {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image: linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: linear-gradient(90deg, transparent 10%, #000 88%);
}

.brand-section-heading,
.brand-viewpoint__intro,
.brand-connected__intro {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 2rem;
}

.brand-section-heading .section-heading__description,
.brand-viewpoint__intro .section-heading__description,
.brand-connected__intro .section-heading__description {
  max-width: 720px;
}

.brand-section-heading__aside,
.brand-connected__index {
  max-width: 260px;
  flex: 0 0 auto;
  margin: 0 0 0.35rem;
  color: var(--color-muted);
  font-size: 0.8rem;
  line-height: 1.6;
}

.brand-consistency {
  background: white;
}

.brand-consistency-list {
  margin: clamp(2.7rem, 6vw, 4.5rem) 0 0;
  border-top: 1px solid var(--color-border);
  padding: 0;
  list-style: none;
}

.brand-consistency-list li {
  display: grid;
  min-height: 82px;
  grid-template-columns: 54px minmax(0, 1fr) 96px;
  align-items: center;
  gap: 1.2rem;
  border-bottom: 1px solid var(--color-border);
}

.brand-consistency-list li > span:first-child {
  color: #8293a5;
  font-size: 0.7rem;
  font-weight: 700;
}

.brand-consistency-list p {
  margin: 0;
  color: var(--color-text);
  font-family: var(--font-display);
  font-size: clamp(1rem, 2vw, 1.28rem);
  font-weight: 600;
  letter-spacing: -0.025em;
}

.brand-consistency-list__signal {
  display: inline-flex;
  justify-content: flex-end;
  gap: 6px;
}

.brand-consistency-list__signal i {
  width: 6px;
  height: 6px;
  border: 1px solid #94a8b8;
  border-radius: 50%;
}

.brand-consistency-list li:nth-child(2n) .brand-consistency-list__signal i:nth-child(2) {
  border-color: var(--color-orange);
  background: var(--color-orange);
}

.brand-consistency-list li:nth-child(3n) .brand-consistency-list__signal i:nth-child(1) {
  border-color: var(--color-teal);
  background: var(--color-teal);
}

.brand-viewpoint {
  position: relative;
  overflow: hidden;
  background: var(--color-navy);
  color: white;
}

.brand-viewpoint .section-heading__title {
  color: white;
}

.brand-viewpoint .section-heading__description {
  color: #b6c5d5;
}

.brand-viewpoint .section-heading__eyebrow {
  border-color: rgba(0, 180, 255, 0.35);
  background: rgba(0, 180, 255, 0.12);
  color: #b8eaff;
}

.brand-viewpoint__intro {
  position: relative;
  z-index: 1;
}

.brand-viewpoint__aside {
  max-width: 330px;
  margin: 0 0 0.35rem;
  border-left: 2px solid var(--color-teal);
  padding-left: 1rem;
  color: #c0d1df;
  font-family: var(--font-display);
  font-size: 0.92rem;
  line-height: 1.65;
}

.brand-system {
  position: relative;
  z-index: 1;
  width: min(100%, 860px);
  height: 500px;
  margin: 2.5rem auto 0;
}

.brand-system__orbit {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 490px;
  height: 290px;
  border: 1px solid rgba(0, 180, 255, 0.38);
  border-radius: 50%;
  transform: translate(-50%, -50%) rotate(-24deg);
}

.brand-system__orbit--inner {
  width: 390px;
  height: 225px;
  border-color: rgba(0, 209, 167, 0.32);
  border-style: dashed;
  transform: translate(-50%, -50%) rotate(31deg);
}

.brand-system__core {
  position: absolute;
  top: 50%;
  left: 50%;
  display: grid;
  width: 146px;
  height: 146px;
  align-content: center;
  justify-items: center;
  border: 1px solid rgba(0, 180, 255, 0.65);
  border-radius: 50%;
  background: #102b49;
  box-shadow: 0 0 0 13px rgba(0, 180, 255, 0.06);
  color: #c5d8e6;
  font-size: 0.63rem;
  letter-spacing: 0.14em;
  line-height: 1.5;
  transform: translate(-50%, -50%);
}

.brand-system__core strong {
  color: white;
  font-family: var(--font-display);
  font-size: 0.95rem;
  letter-spacing: 0.02em;
}

.brand-system__item {
  position: absolute;
  display: grid;
  min-width: 160px;
  gap: 0.25rem;
  border: 1px solid rgba(151, 190, 215, 0.3);
  border-radius: 0.6rem;
  padding: 0.75rem 0.9rem 0.75rem 1.1rem;
  background: #102744;
}

.brand-system__item > i {
  position: absolute;
  top: 50%;
  left: -4px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--color-blue);
  transform: translateY(-50%);
}

.brand-system__item strong {
  color: #eff8ff;
  font-family: var(--font-display);
  font-size: 0.8rem;
}

.brand-system__item small {
  color: #9fb5c7;
  font-size: 0.68rem;
}

.brand-system__item--clarity {
  top: 8%;
  left: 50%;
  transform: translateX(-50%);
}

.brand-system__item--visual {
  top: 28%;
  right: 1%;
}

.brand-system__item--visual > i,
.brand-system__item--confidence > i {
  background: var(--color-teal);
}

.brand-system__item--message {
  right: 10%;
  bottom: 8%;
}

.brand-system__item--message > i {
  background: var(--color-orange);
}

.brand-system__item--experience {
  bottom: 8%;
  left: 10%;
}

.brand-system__item--confidence {
  top: 28%;
  left: 1%;
}

.brand-system__caption {
  position: relative;
  z-index: 1;
  margin: -0.5rem 0 0;
  color: #9fb4c6;
  font-size: 0.77rem;
  text-align: center;
}

.brand-capabilities {
  background: var(--color-background);
}

.brand-capability-list {
  margin-top: clamp(3rem, 6vw, 5rem);
  border-top: 1px solid var(--color-border);
}

.brand-capability {
  display: grid;
  min-height: 355px;
  grid-template-columns: 0.82fr 1.18fr;
  align-items: stretch;
  border-bottom: 1px solid var(--color-border);
}

.brand-capability--reverse .brand-capability__visual {
  order: 2;
}

.brand-capability--reverse .brand-capability__content {
  order: 1;
}

.brand-capability__visual {
  position: relative;
  display: grid;
  min-height: 310px;
  overflow: hidden;
  place-items: center;
  background:
    linear-gradient(rgba(11, 31, 59, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(11, 31, 59, 0.04) 1px, transparent 1px),
    #e9eff4;
  background-size: 32px 32px;
}

.brand-capability:nth-child(2n) .brand-capability__visual {
  background-color: #e9f1f1;
}

.brand-capability:nth-child(3n) .brand-capability__visual {
  background-color: #e8eef7;
}

.brand-capability__motif {
  position: relative;
  display: grid;
  width: min(62%, 240px);
  aspect-ratio: 1;
  place-items: center;
}

.brand-capability__motif-ring,
.brand-capability__motif-ring--inner {
  position: absolute;
  width: 100%;
  aspect-ratio: 1;
  border: 1px solid rgba(11, 31, 59, 0.27);
  border-radius: 50%;
}

.brand-capability__motif-ring--inner {
  width: 68%;
  border-color: rgba(0, 180, 255, 0.55);
  border-style: dashed;
}

.brand-capability__motif-axis {
  position: absolute;
  width: 135%;
  height: 1px;
  background: rgba(11, 31, 59, 0.25);
  transform: rotate(-33deg);
}

.brand-capability__motif-node {
  position: absolute;
  top: 13%;
  right: 19%;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--color-teal);
  box-shadow: 0 0 0 6px rgba(0, 209, 167, 0.12);
}

.brand-capability__motif-core {
  z-index: 1;
  width: 20%;
  aspect-ratio: 1;
  border: 1px solid rgba(11, 31, 59, 0.48);
  border-radius: 50%;
  background: var(--color-blue);
}

.brand-capability--strategy .brand-capability__motif-ring {
  border-radius: 12%;
  transform: rotate(30deg);
}

.brand-capability--identity .brand-capability__motif-ring {
  border-radius: 0;
  transform: rotate(45deg) scaleX(0.72);
}

.brand-capability--website .brand-capability__motif-ring--inner {
  border-radius: 12px;
  border-style: solid;
  transform: rotate(8deg);
}

.brand-capability--content .brand-capability__motif-axis {
  height: 3px;
  background: linear-gradient(90deg, transparent, var(--color-blue), var(--color-teal), transparent);
}

.brand-capability--touchpoints .brand-capability__motif-ring {
  transform: scaleY(0.62) rotate(35deg);
}

.brand-capability--governance .brand-capability__motif-ring {
  border-style: dashed;
  transform: scale(0.8);
}

.brand-capability__visual > small {
  position: absolute;
  right: 0.9rem;
  bottom: 0.85rem;
  color: #687d90;
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.12em;
}

.brand-capability__content {
  align-self: center;
  padding: clamp(2rem, 4vw, 3.5rem) clamp(1.5rem, 5vw, 4.5rem);
}

.brand-capability__number {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  color: #718599;
  font-size: 0.66rem;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.brand-capability__number i {
  width: 22px;
  height: 1px;
  background: var(--color-teal);
}

.brand-capability__content h3 {
  max-width: 580px;
  margin: 0.85rem 0 0.65rem;
  color: var(--color-navy);
  font-family: var(--font-display);
  font-size: clamp(1.6rem, 3vw, 2.35rem);
  letter-spacing: -0.045em;
  line-height: 1.15;
}

.brand-capability__content > p {
  max-width: 620px;
  margin: 0;
  color: var(--color-muted);
  font-size: 0.91rem;
  line-height: 1.7;
}

.brand-capability__content ul {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.55rem 1rem;
  margin: 1.35rem 0 0;
  padding: 0;
  list-style: none;
}

.brand-capability__content li {
  position: relative;
  padding-left: 0.8rem;
  color: #43596d;
  font-size: 0.79rem;
  line-height: 1.5;
}

.brand-capability__content li::before {
  position: absolute;
  top: 0.56em;
  left: 0;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--color-teal);
  content: '';
}

.brand-connected {
  background: white;
}

.brand-connected__index {
  border-left: 2px solid var(--color-teal);
  padding-left: 0.85rem;
}

.brand-flow {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 0;
  margin: clamp(3rem, 6vw, 5rem) 0 0;
  border-top: 1px solid #c8d7e1;
  padding: 0;
  list-style: none;
}

.brand-flow__step {
  position: relative;
  display: grid;
  min-height: 120px;
  align-content: start;
  gap: 0.8rem;
  padding: 1rem 1rem 0 0;
}

.brand-flow__step::before {
  position: absolute;
  top: -4px;
  left: 0;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--color-teal);
  content: '';
}

.brand-flow__step > span {
  color: var(--color-link);
  font-size: 0.65rem;
  font-weight: 700;
}

.brand-flow__step strong {
  color: var(--color-navy);
  font-family: var(--font-display);
  font-size: clamp(0.77rem, 1vw, 0.9rem);
  line-height: 1.4;
}

.brand-flow__step > .icon {
  position: absolute;
  top: 1.05rem;
  right: 0.35rem;
  color: #009c89;
}

.brand-flow__feedback {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  border-top: 1px solid var(--color-border);
  padding-top: 1rem;
  color: var(--color-muted);
  font-size: 0.8rem;
}

.brand-flow__feedback span {
  width: 8px;
  height: 8px;
  border: 1px solid var(--color-blue);
  border-radius: 50%;
  box-shadow: 0 0 0 5px rgba(0, 180, 255, 0.08);
}

.brand-process {
  background: #f0f4f8;
}

.brand-process-list {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 1.3rem;
  margin: clamp(3rem, 6vw, 5rem) 0 0;
  padding: 0;
  list-style: none;
}

.brand-process-step {
  min-width: 0;
}

.brand-process-step__marker {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.7rem;
}

.brand-process-step__marker > span {
  position: relative;
  z-index: 1;
  display: grid;
  width: 46px;
  height: 46px;
  flex: 0 0 auto;
  place-items: center;
  border: 1px solid #b7d3e2;
  border-radius: 50%;
  background: #f0f4f8;
  color: var(--color-navy);
  font-size: 0.7rem;
  font-weight: 700;
}

.brand-process-step:nth-child(3) .brand-process-step__marker > span {
  border-color: var(--color-teal);
}

.brand-process-step__marker > i {
  height: 1px;
  flex: 1;
  background: linear-gradient(90deg, #88c9df, #ccd9e1);
}

.brand-process-step h3 {
  margin: 1rem 0 0.45rem;
  color: var(--color-navy);
  font-family: var(--font-display);
  font-size: 1.13rem;
  letter-spacing: -0.025em;
}

.brand-process-step p {
  max-width: 240px;
  margin: 0;
  color: var(--color-muted);
  font-size: 0.84rem;
  line-height: 1.65;
}

.brand-website {
  background: white;
}

.brand-website__layout {
  display: grid;
  grid-template-columns: minmax(280px, 0.78fr) minmax(0, 1.22fr);
  align-items: center;
  gap: clamp(2.5rem, 7vw, 6rem);
}

.brand-website__questions {
  display: grid;
  margin: 1.8rem 0 0;
  border-top: 1px solid var(--color-border);
  padding: 0;
  list-style: none;
}

.brand-website__questions li {
  display: flex;
  min-height: 50px;
  align-items: center;
  gap: 0.8rem;
  border-bottom: 1px solid var(--color-border);
  color: var(--color-text);
  font-size: 0.9rem;
  font-weight: 600;
}

.brand-website__questions li span {
  color: var(--color-link);
  font-size: 0.65rem;
  font-weight: 700;
}

.website-illustration {
  position: relative;
  min-height: 430px;
  padding: 1rem 1rem 2rem;
  background:
    linear-gradient(rgba(11, 31, 59, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(11, 31, 59, 0.04) 1px, transparent 1px),
    #edf2f6;
  background-size: 26px 26px;
}

.website-illustration__caption {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.75rem;
  color: #687e90;
  font-size: 0.58rem;
  font-weight: 700;
  letter-spacing: 0.1em;
}

.website-window {
  overflow: hidden;
  border: 1px solid #ccd7df;
  border-radius: 0.5rem;
  background: white;
  box-shadow: 0 18px 44px rgba(11, 31, 59, 0.12);
}

.website-window__bar {
  display: flex;
  height: 30px;
  align-items: center;
  gap: 5px;
  border-bottom: 1px solid #e0e7ec;
  padding-inline: 0.65rem;
  background: #f8fafb;
}

.website-window__bar > span {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #b0bfca;
}

.website-window__bar > span:first-child {
  background: #ecb5a8;
}

.website-window__bar > span:nth-child(2) {
  background: #edd18b;
}

.website-window__bar > span:nth-child(3) {
  background: #9fc9ad;
}

.website-window__bar small {
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #e4e9ed;
  border-radius: 999px;
  padding: 0.15rem 1.5rem;
  color: #74889a;
  font-size: 0.52rem;
}

.website-window__nav {
  display: flex;
  height: 48px;
  align-items: center;
  gap: clamp(0.5rem, 1.5vw, 1.2rem);
  padding-inline: 1.1rem;
  color: #586d80;
  font-size: 0.56rem;
}

.website-window__nav b {
  margin-right: auto;
  color: var(--color-navy);
  font-family: var(--font-display);
  letter-spacing: 0.06em;
}

.website-window__nav i {
  border-radius: 999px;
  padding: 0.4rem 0.65rem;
  background: var(--color-navy);
  color: white;
  font-size: 0.52rem;
  font-style: normal;
}

.website-window__hero {
  position: relative;
  min-height: 250px;
  overflow: hidden;
  padding: clamp(1rem, 3vw, 2rem);
  background: #f4f8fa;
}

.website-window__hero > small {
  color: #658095;
  font-size: 0.52rem;
  font-weight: 700;
  letter-spacing: 0.12em;
}

.website-window__hero > strong {
  position: relative;
  z-index: 1;
  display: block;
  margin-top: 0.7rem;
  color: var(--color-navy);
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 3.2vw, 2.6rem);
  letter-spacing: -0.055em;
  line-height: 0.98;
}

.website-window__hero > strong em,
.website-mobile > b em {
  color: var(--color-link);
  font-style: normal;
}

.website-window__hero > span {
  display: block;
  margin-top: 0.6rem;
  color: #687d8e;
  font-size: 0.62rem;
}

.website-window__hero > i {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  margin-top: 0.8rem;
  border-radius: 999px;
  padding: 0.45rem 0.65rem;
  background: var(--color-blue);
  color: var(--color-navy);
  font-size: 0.54rem;
  font-style: normal;
  font-weight: 700;
}

.website-window__hero > i b {
  font-size: 0.8rem;
}

.website-window__graphic {
  position: absolute;
  top: 18%;
  right: 5%;
  display: grid;
  width: 33%;
  aspect-ratio: 1;
  place-items: center;
}

.website-window__graphic > span {
  position: absolute;
  width: 100%;
  height: 60%;
  border: 1px solid rgba(0, 180, 255, 0.5);
  border-radius: 50%;
  transform: rotate(-35deg);
}

.website-window__graphic > i {
  width: 49%;
  height: 49%;
  border: 1px solid rgba(0, 209, 167, 0.65);
  border-radius: 50%;
  background: rgba(0, 209, 167, 0.1);
}

.website-window__graphic > b {
  position: absolute;
  top: 18%;
  right: 15%;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-orange);
}

.website-window__footer {
  display: flex;
  min-height: 40px;
  align-items: center;
  justify-content: space-around;
  color: #6d8294;
  font-size: 0.49rem;
  font-weight: 700;
  letter-spacing: 0.07em;
}

.website-window__footer i {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--color-teal);
}

.website-mobile {
  position: absolute;
  right: 0;
  bottom: 0.6rem;
  display: grid;
  width: 100px;
  min-height: 174px;
  align-content: start;
  gap: 0.45rem;
  border: 3px solid #102b49;
  border-radius: 0.85rem;
  padding: 0.55rem 0.45rem;
  background: white;
  box-shadow: 0 8px 24px rgba(11, 31, 59, 0.18);
}

.website-mobile__top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.3rem;
}

.website-mobile__top span {
  width: 23px;
  height: 4px;
  border-radius: 99px;
  background: var(--color-navy);
}

.website-mobile__top i {
  width: 12px;
  height: 6px;
  border-block: 1px solid var(--color-navy);
}

.website-mobile > small {
  color: #687d8e;
  font-size: 0.36rem;
  letter-spacing: 0.06em;
}

.website-mobile > b {
  color: var(--color-navy);
  font-family: var(--font-display);
  font-size: 0.75rem;
  letter-spacing: -0.04em;
  line-height: 1.03;
}

.website-mobile__line {
  width: 68%;
  height: 3px;
  margin-top: 0.1rem;
  background: #cad7df;
}

.website-mobile__button {
  margin-top: 0.15rem;
  border-radius: 99px;
  padding: 0.28rem 0.35rem;
  background: var(--color-blue);
  color: var(--color-navy);
  font-size: 0.35rem;
  font-weight: 700;
  text-align: center;
}

.brand-fit {
  background: #f0f4f8;
}

.brand-fit__layout {
  display: grid;
  grid-template-columns: minmax(260px, 0.8fr) minmax(0, 1.2fr);
  align-items: start;
  gap: clamp(3rem, 8vw, 8rem);
}

.brand-fit__list {
  display: grid;
  margin: 0;
  border-top: 1px solid #cbd8e1;
  padding: 0;
  list-style: none;
}

.brand-fit__list li {
  display: grid;
  min-height: 72px;
  grid-template-columns: 30px minmax(0, 1fr) 22px;
  align-items: center;
  gap: 0.7rem;
  border-bottom: 1px solid #cbd8e1;
  color: var(--color-text);
  font-size: 0.87rem;
  line-height: 1.55;
}

.brand-fit__list li > span {
  color: var(--color-link);
  font-size: 0.67rem;
  font-weight: 700;
}

.brand-fit__list .icon {
  color: #758a9d;
}

.brand-faq {
  background: white;
}

.brand-faq__layout {
  display: grid;
  grid-template-columns: minmax(260px, 0.72fr) minmax(0, 1.28fr);
  align-items: start;
  gap: clamp(3rem, 8vw, 8rem);
}

.brand-faq__intro > p {
  max-width: 340px;
  margin: 1.2rem 0 0;
  color: var(--color-muted);
  font-size: 0.86rem;
  line-height: 1.7;
}

.brand-faq__intro > .button {
  margin-top: 1.4rem;
}

.brand-faq__list {
  border-top: 1px solid var(--color-border);
}

.brand-faq__item {
  border-bottom: 1px solid var(--color-border);
}

.brand-faq__item h3 {
  margin: 0;
  font-size: inherit;
}

.brand-faq__trigger {
  display: grid;
  width: 100%;
  min-height: 72px;
  grid-template-columns: 34px minmax(0, 1fr) 28px;
  align-items: center;
  gap: 0.8rem;
  border: 0;
  padding: 1rem 0;
  background: transparent;
  color: var(--color-navy);
  cursor: pointer;
  font-family: var(--font-display);
  font-size: 0.98rem;
  font-weight: 700;
  text-align: left;
}

.brand-faq__trigger > span:first-child {
  color: #8293a5;
  font-family: var(--font-body);
  font-size: 0.67rem;
}

.brand-faq__trigger > .icon {
  justify-self: end;
  color: var(--color-link);
}

.brand-faq__trigger:hover {
  color: var(--color-link);
}

.brand-faq__answer {
  padding: 0 2.8rem 1.2rem;
}

.brand-faq__answer p {
  max-width: 690px;
  margin: 0;
  color: var(--color-muted);
  font-size: 0.88rem;
  line-height: 1.75;
}

.brand-cta {
  position: relative;
  overflow: hidden;
  background: var(--color-navy);
  color: white;
  text-align: center;
}

.brand-cta__inner {
  position: relative;
  z-index: 1;
}

.brand-cta .brand-eyebrow {
  justify-content: center;
}

.brand-cta h2 {
  margin: 0;
  color: white;
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 5.3vw, 4.5rem);
  font-weight: 650;
  letter-spacing: -0.06em;
  line-height: 1.06;
}

.brand-cta__description {
  max-width: 630px;
  margin: 1.3rem auto 0;
  color: #c1cede;
  font-size: 1.02rem;
  line-height: 1.75;
}

.brand-cta__actions {
  justify-content: center;
}

.brand-cta__secondary {
  display: inline-flex;
  min-height: 44px;
  align-items: center;
  gap: 0.55rem;
  color: #e5f3fc;
  font-size: 0.88rem;
  font-weight: 650;
  text-decoration: none;
}

.brand-cta__secondary:hover {
  color: var(--color-blue);
}

.brand-cta__secondary .icon {
  transition: transform 160ms ease;
}

.brand-cta__secondary:hover .icon {
  transform: translateX(3px);
}

.brand-cta__orbit {
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 50%;
  width: min(84vw, 850px);
  aspect-ratio: 2.5;
  border: 1px solid rgba(0, 180, 255, 0.22);
  border-radius: 50%;
  transform: translate(-50%, -50%) rotate(-17deg);
}

.brand-cta__orbit span {
  position: absolute;
  top: 48%;
  left: 0;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-blue);
}

.brand-cta__orbit span:nth-child(2) {
  top: 12%;
  left: 76%;
  background: var(--color-teal);
}

.brand-cta__orbit span:nth-child(3) {
  top: 88%;
  left: 90%;
  background: var(--color-orange);
}

@media (max-width: 980px) {
  .brand-hero__inner {
    min-height: auto;
    grid-template-columns: minmax(0, 1fr) minmax(290px, 0.82fr);
  }

  .brand-hero h1 {
    font-size: clamp(3rem, 6vw, 4.4rem);
  }

  .brand-section-heading,
  .brand-viewpoint__intro,
  .brand-connected__intro {
    align-items: start;
    flex-direction: column;
  }

  .brand-system {
    width: min(100%, 760px);
  }

  .brand-flow {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    row-gap: 1rem;
  }

  .brand-flow__step:nth-child(3) > .icon {
    display: none;
  }

  .brand-process-list {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    row-gap: 2rem;
  }

  .brand-process-step:nth-child(3) .brand-process-step__marker > i {
    display: none;
  }

  .brand-website__layout {
    grid-template-columns: minmax(230px, 0.8fr) minmax(0, 1.2fr);
  }

  .brand-fit__layout,
  .brand-faq__layout {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
}

@media (max-width: 700px) {
  .brand-hero__inner {
    grid-template-columns: 1fr;
    gap: 0.4rem;
    padding-block: 4.5rem 4rem;
  }

  .brand-hero h1 {
    font-size: clamp(3rem, 10.5vw, 4.35rem);
  }

  .brand-hero__visual {
    margin-top: 0.3rem;
  }

  .brand-hero__actions {
    align-items: stretch;
    flex-direction: column;
  }

  .brand-hero__actions .button {
    width: 100%;
  }

  .brand-section-heading__aside {
    max-width: 500px;
  }

  .brand-consistency-list li {
    min-height: 74px;
    grid-template-columns: 34px minmax(0, 1fr) 42px;
    gap: 0.7rem;
  }

  .brand-consistency-list p {
    font-size: 0.96rem;
    line-height: 1.45;
  }

  .brand-consistency-list__signal {
    gap: 4px;
  }

  .brand-consistency-list__signal i {
    width: 5px;
    height: 5px;
  }

  .brand-viewpoint__aside {
    max-width: 520px;
  }

  .brand-system {
    display: grid;
    height: auto;
    min-height: 0;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.65rem;
    margin-top: 2rem;
  }

  .brand-system__orbit {
    display: none;
  }

  .brand-system__core {
    position: relative;
    top: auto;
    left: auto;
    grid-column: 1 / -1;
    width: 110px;
    height: 110px;
    margin: 0 auto 0.6rem;
    transform: none;
  }

  .brand-system__item {
    position: relative;
    top: auto;
    right: auto;
    bottom: auto;
    left: auto;
    min-width: 0;
    min-height: 76px;
    align-content: center;
    padding: 0.65rem 0.55rem 0.65rem 0.9rem;
  }

  .brand-system__item--confidence {
    grid-column: 1 / -1;
    width: min(100%, 260px);
    justify-self: center;
  }

  .brand-system__item strong {
    font-size: 0.72rem;
  }

  .brand-system__item small {
    font-size: 0.63rem;
  }

  .brand-system__caption {
    margin-top: 1.1rem;
    line-height: 1.5;
  }

  .brand-capability {
    grid-template-columns: 1fr;
  }

  .brand-capability--reverse .brand-capability__visual,
  .brand-capability--reverse .brand-capability__content {
    order: initial;
  }

  .brand-capability__visual {
    min-height: 220px;
  }

  .brand-capability__motif {
    width: min(42%, 175px);
  }

  .brand-capability__content {
    padding: 1.5rem 0 2rem;
  }

  .brand-capability__content h3 {
    margin-top: 0.7rem;
    font-size: 1.72rem;
  }

  .brand-flow {
    grid-template-columns: 1fr;
    gap: 0;
    margin-top: 2.5rem;
    padding-left: 0.4rem;
  }

  .brand-flow__step {
    min-height: 67px;
    grid-template-columns: 35px minmax(0, 1fr);
    align-content: center;
    align-items: center;
    gap: 0.5rem;
    border-top: 0;
    border-left: 1px solid #a9c0cf;
    padding: 0.25rem 0.8rem 0.25rem 1rem;
  }

  .brand-flow__step::before {
    top: 50%;
    left: -4px;
    transform: translateY(-50%);
  }

  .brand-flow__step > .icon {
    top: auto;
    right: 0.4rem;
    bottom: -0.4rem;
    transform: rotate(90deg);
  }

  .brand-flow__feedback {
    margin-top: 0.6rem;
    line-height: 1.5;
  }

  .brand-process-list {
    grid-template-columns: 1fr;
    gap: 0;
    margin-top: 2.7rem;
  }

  .brand-process-step {
    display: grid;
    min-height: 106px;
    grid-template-columns: 48px minmax(0, 1fr);
    gap: 1rem;
  }

  .brand-process-step__marker {
    display: block;
    height: 100%;
  }

  .brand-process-step__marker > span {
    width: 42px;
    height: 42px;
  }

  .brand-process-step__marker > i {
    position: absolute;
    top: 43px;
    bottom: 0;
    left: 20px;
    width: 1px;
    height: auto;
    background: linear-gradient(#8ccce3, #dce3ea);
  }

  .brand-process-step:last-child .brand-process-step__marker > i {
    display: none;
  }

  .brand-process-step h3 {
    margin-top: 0.25rem;
  }

  .brand-website__layout {
    grid-template-columns: 1fr;
  }

  .website-illustration {
    min-height: 340px;
  }

  .website-window__hero {
    min-height: 218px;
  }

  .website-mobile {
    right: -0.2rem;
    width: 82px;
    min-height: 150px;
  }

  .website-mobile > b {
    font-size: 0.65rem;
  }

  .brand-fit__list li {
    min-height: 70px;
    grid-template-columns: 25px minmax(0, 1fr) 20px;
    gap: 0.55rem;
    font-size: 0.82rem;
  }

  .brand-faq__trigger {
    min-height: 68px;
    grid-template-columns: 28px minmax(0, 1fr) 24px;
    gap: 0.6rem;
    font-size: 0.9rem;
  }

  .brand-faq__answer {
    padding: 0 1.8rem 1rem 2.4rem;
  }

  .brand-faq__answer p {
    font-size: 0.84rem;
  }

  .brand-cta h2 {
    font-size: clamp(2.45rem, 9vw, 3.5rem);
  }

  .brand-cta__actions {
    align-items: stretch;
    flex-direction: column;
  }

  .brand-cta__actions .button,
  .brand-cta__secondary {
    justify-content: center;
  }
}

@media (max-width: 390px) {
  .brand-hero h1 {
    font-size: 2.8rem;
  }

  .brand-hero__actions .button {
    padding-inline: 0.9rem;
    font-size: 0.87rem;
  }

  .brand-system {
    gap: 0.5rem;
  }

  .brand-system__item {
    padding-inline: 0.7rem 0.35rem;
  }

  .brand-system__item strong {
    font-size: 0.66rem;
  }

  .brand-system__item small {
    font-size: 0.58rem;
  }

  .brand-capability__content ul {
    grid-template-columns: 1fr;
    gap: 0.4rem;
  }

  .website-illustration {
    min-height: 300px;
    padding-inline: 0.65rem;
  }

  .website-window__nav {
    gap: 0.35rem;
    padding-inline: 0.6rem;
    font-size: 0.48rem;
  }

  .website-window__nav i {
    padding-inline: 0.4rem;
  }

  .website-window__hero > strong {
    font-size: 1.35rem;
  }

  .website-mobile {
    width: 72px;
    min-height: 137px;
  }

  .brand-cta h2 {
    font-size: 2.28rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .brand-page *,
  .brand-page *::before,
  .brand-page *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
