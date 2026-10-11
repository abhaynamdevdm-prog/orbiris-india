<script setup>
import { ref } from 'vue'
import Container from '../components/global/Container.vue'
import Button from '../components/global/Button.vue'
import SectionHeading from '../components/global/SectionHeading.vue'
import BaseCard from '../components/global/BaseCard.vue'
import Icon from '../components/global/Icon.vue'
import SolutionsSystemMap from '../components/solutions/SolutionsSystemMap.vue'

const startingPrinciples = [
  {
    number: '01',
    title: 'Understand the Context',
    description: 'Understand the business model, audience, goals, and current digital presence.',
  },
  {
    number: '02',
    title: 'Identify the Constraint',
    description: 'Find the gap most relevant to the business objective instead of assuming that more activity is always better.',
  },
  {
    number: '03',
    title: 'Prioritize the Next Step',
    description: 'Recommend an appropriate combination of capabilities based on needs, resources, and priorities.',
  },
]

const capabilities = [
  {
    number: '01',
    title: 'Strategy & Discovery',
    route: '/solutions/strategy',
    description: 'Build clarity around business objectives, audiences, positioning, and the priorities that should guide digital decisions.',
    focus: ['Business and digital discovery', 'Audience and competitor analysis', 'Positioning and growth priorities', 'Strategic roadmaps'],
    motif: 'solution-motif--strategy',
    type: 'Clarity',
  },
  {
    number: '02',
    title: 'Brand & Digital Experience',
    route: '/solutions/brand-digital-experience',
    description: 'Create a more coherent experience across brand communication, websites, and the digital touchpoints customers use to evaluate your business.',
    focus: ['Brand positioning and messaging', 'Website and landing-page experience', 'Content direction', 'Customer journey consistency'],
    motif: 'solution-motif--experience',
    type: 'Experience',
  },
  {
    number: '03',
    title: 'Performance & Growth',
    route: '/solutions/performance-growth',
    description: 'Connect paid campaigns, content, measurement, and conversion improvement to clearly defined business objectives.',
    focus: ['Google Ads and paid search', 'Meta advertising', 'Content and campaign strategy', 'Conversion tracking and optimization'],
    motif: 'solution-motif--performance',
    type: 'Momentum',
  },
  {
    number: '04',
    title: 'Technology & Digital Platforms',
    route: '/solutions/technology',
    description: 'Build and improve digital platforms that support customer experience, business requirements, and future development.',
    focus: ['Website planning and development', 'Digital platform improvements', 'Technical performance and usability', 'Measurement and integration requirements'],
    motif: 'solution-motif--technology',
    type: 'Foundation',
  },
  {
    number: '05',
    title: 'Automation & Systems',
    route: '/solutions/automation',
    description: 'Explore practical ways to reduce repetitive tasks, connect workflows, and improve operational consistency.',
    focus: ['Workflow discovery', 'Repetitive-task automation opportunities', 'Process and tool integration', 'Operational efficiency improvements'],
    motif: 'solution-motif--automation',
    type: 'Continuity',
  },
]

const businessNeeds = [
  {
    title: 'We need greater clarity.',
    description: 'For businesses refining objectives, positioning, audience understanding, or priorities.',
    route: '/solutions/strategy',
    number: '01',
  },
  {
    title: 'Our digital presence needs to work harder.',
    description: 'For businesses reviewing their brand experience, website, content, or customer journey.',
    route: '/solutions/brand-digital-experience',
    number: '02',
  },
  {
    title: 'We want to improve campaign performance.',
    description: 'For businesses reviewing paid media, campaign structure, measurement, or conversion journeys.',
    route: '/solutions/performance-growth',
    number: '03',
  },
  {
    title: 'Our systems need to work better together.',
    description: 'For businesses exploring digital platforms, integrations, or automation opportunities.',
    route: '/solutions/technology',
    secondary: { label: 'Explore Automation & Systems', route: '/solutions/automation' },
    number: '04',
  },
]

const workingPrinciples = [
  {
    number: '01',
    title: 'Business Before Channels',
    description: 'Start with business objectives before deciding which digital activities to prioritize.',
  },
  {
    number: '02',
    title: 'Connected Thinking',
    description: 'Consider brand, marketing, customer experience, and technology in context rather than as unrelated tasks.',
  },
  {
    number: '03',
    title: 'Evidence Over Assumptions',
    description: 'Use available research and performance signals to inform decisions, recognizing the limits of the data.',
  },
  {
    number: '04',
    title: 'Iteration With Intent',
    description: 'Review progress against agreed objectives and refine the approach when the evidence supports a change.',
  },
]

const questions = [
  {
    question: 'Do we need all five capabilities?',
    answer: 'No. The right starting point depends on your business objectives, current position, resources, and priorities. Some businesses may begin with one focused area and expand when it makes sense.',
  },
  {
    question: 'How do you decide which solution is right for us?',
    answer: 'We begin by understanding your business, audience, current digital presence, and goals. We then identify relevant gaps and discuss practical priorities.',
  },
  {
    question: 'Can different capabilities work together?',
    answer: 'Yes. Strategy, brand experience, performance marketing, technology, and automation can support one another when they are aligned around a shared business objective.',
  },
  {
    question: 'Do you guarantee specific marketing results?',
    answer: 'No responsible strategy can guarantee a specific outcome in every situation. Results depend on factors such as the offer, market, budget, execution, competition, and customer behavior. Objectives and measurement should be discussed clearly before work begins.',
  },
  {
    question: 'How do we get started?',
    answer: 'Start with a conversation about your business, your current challenges, and what you want to achieve.',
  },
]

const openQuestion = ref(null)

function toggleQuestion(index) {
  openQuestion.value = openQuestion.value === index ? null : index
}

function onQuestionKeydown(event, index) {
  if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp' && event.key !== 'Home' && event.key !== 'End') return

  event.preventDefault()
  const buttons = [...event.currentTarget.closest('.solutions-faq__list').querySelectorAll('.solutions-faq__trigger')]
  const nextIndex = event.key === 'Home'
    ? 0
    : event.key === 'End'
      ? buttons.length - 1
      : (index + (event.key === 'ArrowDown' ? 1 : -1) + buttons.length) % buttons.length
  buttons[nextIndex]?.focus()
}

const flowStages = ['Business Objective', 'Strategy', 'Brand & Experience', 'Reach & Engagement', 'Conversion Journey', 'Measurement & Improvement']
</script>

<template>
  <div class="solutions-page">
    <section class="solutions-hero">
      <Container class="solutions-hero__inner">
        <div class="solutions-hero__copy">
          <p class="solutions-eyebrow"><span></span> OUR SOLUTIONS</p>
          <h1>A connected approach to digital growth.</h1>
          <p class="solutions-hero__description">
            From business strategy and brand experience to performance marketing, technology, and automation, we connect the capabilities that help your business move forward with greater clarity.
          </p>
          <div class="solutions-hero__actions">
            <Button to="/contact">Discuss Your Business <Icon name="arrow" :size="17" /></Button>
            <Button to="/why-us" variant="secondary" class="solutions-button--outline">Why ORBIRIS</Button>
          </div>
        </div>
        <SolutionsSystemMap class="solutions-hero__visual" />
      </Container>
      <div class="solutions-hero__grid" aria-hidden="true"></div>
    </section>

    <section class="solutions-start solutions-section">
      <Container>
        <div class="solutions-start__intro">
          <SectionHeading
            eyebrow="Start with the business"
            title="The right solution starts with the right question."
            description="Not every business needs every service at the same time. The starting point is understanding your objectives, customers, current systems, constraints, and the gap between where you are and where you want to go."
          />
          <Button to="/how-we-work" variant="secondary">Explore Our Approach <Icon name="arrow" :size="17" /></Button>
        </div>
        <div class="solutions-start__principles">
          <article v-for="principle in startingPrinciples" :key="principle.number" class="solutions-start__principle">
            <span>{{ principle.number }}</span>
            <h3>{{ principle.title }}</h3>
            <p>{{ principle.description }}</p>
          </article>
        </div>
      </Container>
    </section>

    <section class="solutions-capabilities solutions-section">
      <Container>
        <div class="solutions-section-heading">
          <SectionHeading
            eyebrow="Five core capabilities"
            title="Five capabilities. One connected perspective."
            description="Each capability addresses a different part of the business. Their greatest value comes from being aligned around shared objectives."
          />
          <span class="solutions-section-heading__aside">A connected capability system <i></i></span>
        </div>
        <div class="solutions-capability-list">
          <article
            v-for="(capability, index) in capabilities"
            :key="capability.route"
            class="solutions-capability"
            :class="{ 'solutions-capability--reverse': index % 2 === 1 }"
          >
            <div class="solutions-capability__visual" :class="capability.motif" aria-hidden="true">
              <div class="solution-motif">
                <span class="solution-motif__ring"></span>
                <span class="solution-motif__ring solution-motif__ring--inner"></span>
                <span class="solution-motif__axis"></span>
                <span class="solution-motif__node"></span>
                <span class="solution-motif__core"></span>
              </div>
              <span class="solutions-capability__visual-label">{{ capability.type }} / {{ capability.number }}</span>
            </div>
            <div class="solutions-capability__content">
              <span class="solutions-capability__number">{{ capability.number }} <i></i> CAPABILITY</span>
              <h3>{{ capability.title }}</h3>
              <p>{{ capability.description }}</p>
              <ul>
                <li v-for="focus in capability.focus" :key="focus">{{ focus }}</li>
              </ul>
              <RouterLink :to="capability.route" class="solutions-text-link">
                Explore {{ capability.title }} <Icon name="arrow" :size="17" />
              </RouterLink>
            </div>
          </article>
        </div>
      </Container>
    </section>

    <section class="solutions-flow solutions-section">
      <Container>
        <div class="solutions-flow__intro">
          <SectionHeading
            eyebrow="How capabilities connect"
            title="Growth rarely happens in isolation."
            description="A campaign may bring visitors to a website. Brand clarity can help those visitors understand the offer. A well-designed journey can make the next step easier. Measurement can reveal where improvements may be needed. Systems and automation can support the work behind the experience."
          />
        </div>
        <div class="solutions-flow__diagram" aria-label="Business Objective leads through Strategy, Brand and Experience, Reach and Engagement, Conversion Journey, then Measurement and Improvement. Technology and Automation support multiple stages.">
          <ol class="solutions-flow__stages">
            <li v-for="(stage, index) in flowStages" :key="stage" class="solutions-flow__stage">
              <span>{{ String(index + 1).padStart(2, '0') }}</span>
              <strong>{{ stage }}</strong>
              <Icon v-if="index < flowStages.length - 1" name="arrow" :size="17" />
            </li>
          </ol>
          <div class="solutions-flow__support">
            <span class="solutions-flow__support-label">SUPPORTING LAYERS</span>
            <span class="solutions-flow__support-line" aria-hidden="true"></span>
            <span class="solutions-flow__support-chip"><i></i> Technology</span>
            <span class="solutions-flow__support-chip"><i></i> Automation</span>
            <span class="solutions-flow__support-copy">Connecting across the journey</span>
          </div>
        </div>
        <p class="solutions-flow__note">The appropriate combination depends on each business's goals, context, and priorities.</p>
      </Container>
    </section>

    <section class="solutions-needs solutions-section">
      <Container>
        <div class="solutions-section-heading">
          <SectionHeading
            eyebrow="Solutions by business need"
            title="What are you trying to move forward?"
            description="Start with the question closest to your business. The right next step should fit the situation—not force it into a preset package."
          />
        </div>
        <div class="solutions-needs__list">
          <article v-for="need in businessNeeds" :key="need.number" class="solutions-need">
            <span class="solutions-need__number">{{ need.number }}</span>
            <div class="solutions-need__content">
              <h3>{{ need.title }}</h3>
              <p>{{ need.description }}</p>
              <RouterLink :to="need.route" class="solutions-text-link">
                Explore a relevant capability <Icon name="arrow" :size="16" />
              </RouterLink>
              <RouterLink v-if="need.secondary" :to="need.secondary.route" class="solutions-need__secondary">
                {{ need.secondary.label }}
              </RouterLink>
            </div>
            <span class="solutions-need__marker" aria-hidden="true"><i></i><i></i></span>
          </article>
        </div>
      </Container>
    </section>

    <section class="solutions-principles solutions-section">
      <Container>
        <div class="solutions-principles__heading">
          <SectionHeading
            eyebrow="Our working principles"
            title="How we approach the work matters."
            description="Our principles shape how we decide what to do, how capabilities connect, and how we learn as work progresses."
          />
          <Button to="/how-we-work" variant="secondary">How We Work <Icon name="arrow" :size="17" /></Button>
        </div>
        <div class="solutions-principles__grid">
          <BaseCard v-for="principle in workingPrinciples" :key="principle.number">
            <span class="solutions-principle__number">{{ principle.number }}</span>
            <h3>{{ principle.title }}</h3>
            <p>{{ principle.description }}</p>
            <span class="solutions-principle__rule" aria-hidden="true"></span>
          </BaseCard>
        </div>
      </Container>
    </section>

    <section class="solutions-faq solutions-section">
      <Container>
        <div class="solutions-faq__layout">
          <div class="solutions-faq__intro">
            <SectionHeading
              eyebrow="Frequently asked questions"
              title="Questions about our solutions"
              description="A few useful starting points for understanding how the capabilities fit together."
            />
            <p class="solutions-faq__aside">If your question is more specific, start a conversation and we can explore it in context.</p>
            <Button to="/contact" variant="secondary">Talk to Us <Icon name="arrow" :size="17" /></Button>
          </div>
          <div class="solutions-faq__list">
            <article v-for="(item, index) in questions" :key="item.question" class="solutions-faq__item">
              <h3>
                <button
                  :id="`solution-question-${index}`"
                  type="button"
                  class="solutions-faq__trigger"
                  :aria-expanded="openQuestion === index"
                  :aria-controls="`solution-answer-${index}`"
                  @click="toggleQuestion(index)"
                  @keydown="onQuestionKeydown($event, index)"
                >
                  <span class="solutions-faq__number">{{ String(index + 1).padStart(2, '0') }}</span>
                  <span>{{ item.question }}</span>
                  <Icon :name="openQuestion === index ? 'close' : 'plus'" :size="19" />
                </button>
              </h3>
              <div
                :id="`solution-answer-${index}`"
                class="solutions-faq__answer"
                role="region"
                :aria-labelledby="`solution-question-${index}`"
                v-show="openQuestion === index"
              >
                <p>{{ item.answer }}</p>
              </div>
            </article>
          </div>
        </div>
      </Container>
    </section>

    <section class="solutions-cta solutions-section">
      <Container class="solutions-cta__inner">
        <div class="solutions-cta__orbit" aria-hidden="true"><span></span><span></span><span></span></div>
        <p class="solutions-eyebrow"><span></span> CONNECT THE NEXT STEP</p>
        <h2>Let's connect the pieces of your next stage of growth.</h2>
        <p class="solutions-cta__description">Tell us where your business is today, what you are working toward, and which challenges you want to solve.</p>
        <div class="solutions-cta__actions">
          <Button to="/contact">Start a Conversation <Icon name="arrow" :size="17" /></Button>
          <Button to="/how-we-work" variant="secondary" class="solutions-button--outline">See How We Work</Button>
        </div>
      </Container>
    </section>
  </div>
</template>

<style scoped>
.solutions-page {
  overflow: clip;
}

.solutions-section {
  position: relative;
  padding-block: clamp(4.5rem, 9vw, 7.75rem);
}

.solutions-hero {
  position: relative;
  overflow: hidden;
  background: var(--color-navy);
  color: var(--color-white);
}

.solutions-hero__inner {
  position: relative;
  display: grid;
  min-height: min(680px, calc(100svh - 84px));
  grid-template-columns: minmax(0, 1fr) minmax(380px, 0.94fr);
  align-items: center;
  gap: 2rem;
  padding-block: clamp(5rem, 9vw, 7.5rem);
}

.solutions-hero__copy {
  position: relative;
  z-index: 1;
  max-width: 670px;
}

.solutions-eyebrow {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  margin: 0 0 1.5rem;
  color: #b9d4e7;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.15em;
}

.solutions-eyebrow > span {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--color-teal);
  box-shadow: 0 0 14px rgba(0, 209, 167, 0.65);
}

.solutions-hero h1 {
  max-width: 690px;
  margin: 0;
  color: var(--color-white);
  font-family: var(--font-display);
  font-size: clamp(3.2rem, 6vw, 5.4rem);
  font-weight: 650;
  letter-spacing: -0.065em;
  line-height: 1.02;
}

.solutions-hero__description {
  max-width: 610px;
  margin: 1.5rem 0 0;
  color: #c1cede;
  font-size: clamp(1rem, 1.3vw, 1.1rem);
  line-height: 1.8;
}

.solutions-hero__actions,
.solutions-cta__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  margin-top: 2rem;
}

.solutions-hero .solutions-button--outline,
.solutions-cta .solutions-button--outline {
  border-color: rgba(255, 255, 255, 0.32);
  background: transparent;
  color: var(--color-white);
}

.solutions-hero .solutions-button--outline:hover,
.solutions-cta .solutions-button--outline:hover {
  border-color: var(--color-blue);
  background: rgba(255, 255, 255, 0.06);
}

.solutions-hero__visual {
  position: relative;
  z-index: 1;
}

.solutions-hero__grid {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image: linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: linear-gradient(90deg, transparent 10%, #000 88%);
}

.solutions-start {
  background: var(--color-white);
}

.solutions-start__intro,
.solutions-section-heading,
.solutions-principles__heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 2rem;
}

.solutions-start__intro .section-heading__description {
  max-width: 740px;
}

.solutions-start__intro > .button,
.solutions-principles__heading > .button {
  flex: 0 0 auto;
  margin-bottom: 0.25rem;
}

.solutions-start__principles {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: clamp(3rem, 6vw, 5rem);
  border-top: 1px solid var(--color-border);
}

.solutions-start__principle {
  padding: 1.4rem clamp(1rem, 3vw, 2.5rem) 0 0;
}

.solutions-start__principle + .solutions-start__principle {
  border-left: 1px solid var(--color-border);
  padding-left: clamp(1rem, 3vw, 2.5rem);
}

.solutions-start__principle > span,
.solutions-capability__number,
.solutions-need__number,
.solutions-principle__number {
  color: var(--color-link);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.solutions-start__principle h3,
.solutions-capability__content h3,
.solutions-need h3,
.solutions-principles__grid h3 {
  margin: 1rem 0 0.55rem;
  color: var(--color-navy);
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: -0.03em;
}

.solutions-start__principle p,
.solutions-capability__content > p,
.solutions-need p,
.solutions-principles__grid p {
  max-width: 360px;
  margin: 0;
  color: var(--color-muted);
  font-size: 0.89rem;
  line-height: 1.7;
}

.solutions-capabilities {
  background: var(--color-background);
}

.solutions-section-heading__aside {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.5rem;
  color: var(--color-muted);
  font-size: 0.78rem;
}

.solutions-section-heading__aside i {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-teal);
}

.solutions-capability-list {
  margin-top: clamp(3rem, 6vw, 5rem);
  border-top: 1px solid var(--color-border);
}

.solutions-capability {
  display: grid;
  min-height: 375px;
  grid-template-columns: 0.9fr 1.1fr;
  align-items: stretch;
  border-bottom: 1px solid var(--color-border);
}

.solutions-capability--reverse .solutions-capability__visual {
  order: 2;
}

.solutions-capability--reverse .solutions-capability__content {
  order: 1;
}

.solutions-capability__visual {
  position: relative;
  display: grid;
  min-height: 320px;
  overflow: hidden;
  place-items: center;
  background:
    linear-gradient(rgba(11, 31, 59, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(11, 31, 59, 0.04) 1px, transparent 1px),
    #eaf0f5;
  background-size: 34px 34px;
}

.solutions-capability:nth-child(2n) .solutions-capability__visual {
  background-color: #e8f2f4;
}

.solutions-capability:nth-child(3n) .solutions-capability__visual {
  background-color: #e9eff7;
}

.solution-motif {
  position: relative;
  display: grid;
  width: min(68%, 280px);
  aspect-ratio: 1;
  place-items: center;
}

.solution-motif__ring,
.solution-motif__ring--inner {
  position: absolute;
  width: 100%;
  aspect-ratio: 1;
  border: 1px solid rgba(11, 31, 59, 0.26);
  border-radius: 50%;
}

.solution-motif__ring--inner {
  width: 68%;
  border-color: rgba(0, 180, 255, 0.55);
  border-style: dashed;
}

.solution-motif__axis {
  position: absolute;
  width: 140%;
  height: 1px;
  background: rgba(11, 31, 59, 0.28);
  transform: rotate(-36deg);
}

.solution-motif__node {
  position: absolute;
  top: 13%;
  right: 22%;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: var(--color-teal);
  box-shadow: 0 0 0 6px rgba(0, 209, 167, 0.12);
}

.solution-motif__core {
  z-index: 1;
  width: 20%;
  aspect-ratio: 1;
  border: 1px solid rgba(11, 31, 59, 0.5);
  border-radius: 50%;
  background: var(--color-blue);
  box-shadow: 0 0 50px rgba(0, 180, 255, 0.25);
}

.solution-motif--strategy .solution-motif__ring {
  border-radius: 15%;
  transform: rotate(30deg);
}

.solution-motif--experience .solution-motif__ring {
  border-radius: 0;
  transform: rotate(45deg) scaleX(0.7);
}

.solution-motif--performance .solution-motif__axis {
  height: 3px;
  background: linear-gradient(90deg, transparent, var(--color-blue), var(--color-teal), transparent);
}

.solution-motif--technology .solution-motif__ring--inner {
  border-style: solid;
  border-radius: 12%;
  transform: rotate(45deg);
}

.solution-motif--automation .solution-motif__ring {
  border-style: dashed;
  transform: scaleY(0.56) rotate(24deg);
}

.solutions-capability__visual-label {
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  color: #667b8e;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.solutions-capability__content {
  align-self: center;
  padding: clamp(2rem, 5vw, 4rem) clamp(1.5rem, 6vw, 5rem);
}

.solutions-capability__number {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  color: #72869a;
  font-size: 0.66rem;
}

.solutions-capability__number i {
  width: 23px;
  height: 1px;
  background: var(--color-teal);
}

.solutions-capability__content h3 {
  max-width: 500px;
  margin-top: 1rem;
  font-size: clamp(1.7rem, 3.2vw, 2.5rem);
  line-height: 1.13;
}

.solutions-capability__content > p {
  max-width: 570px;
}

.solutions-capability__content ul {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.6rem 1.25rem;
  margin: 1.35rem 0 0;
  padding: 0;
  list-style: none;
}

.solutions-capability__content li {
  position: relative;
  padding-left: 0.9rem;
  color: #40566c;
  font-size: 0.8rem;
  line-height: 1.5;
}

.solutions-capability__content li::before {
  position: absolute;
  top: 0.55em;
  left: 0;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--color-teal);
  content: '';
}

.solutions-text-link {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  margin-top: 1.4rem;
  color: var(--color-navy);
  font-size: 0.88rem;
  font-weight: 700;
  text-decoration: none;
}

.solutions-text-link .icon {
  transition: transform 160ms ease;
}

.solutions-text-link:hover {
  color: var(--color-link);
}

.solutions-text-link:hover .icon {
  transform: translateX(3px);
}

.solutions-flow {
  overflow: hidden;
  background: var(--color-navy);
  color: var(--color-white);
}

.solutions-flow .section-heading__title {
  color: var(--color-white);
}

.solutions-flow .section-heading__description {
  max-width: 830px;
  color: #b6c5d5;
}

.solutions-flow .section-heading__eyebrow {
  border-color: rgba(0, 180, 255, 0.35);
  background: rgba(0, 180, 255, 0.12);
  color: #b8eaff;
}

.solutions-flow__diagram {
  margin-top: clamp(3rem, 6vw, 5rem);
  border: 1px solid rgba(184, 210, 227, 0.22);
  border-radius: var(--radius-md);
  padding: clamp(1.25rem, 3vw, 2.5rem);
  background:
    linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px),
    #0d2745;
  background-size: 36px 36px;
}

.solutions-flow__stages {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 0;
  margin: 0;
  padding: 0;
  list-style: none;
}

.solutions-flow__stage {
  position: relative;
  display: grid;
  align-content: start;
  gap: 0.6rem;
  min-height: 92px;
  border-top: 1px solid rgba(106, 203, 240, 0.45);
  padding: 0.85rem 1.2rem 0 0;
}

.solutions-flow__stage::before {
  position: absolute;
  top: -4px;
  left: 0;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--color-teal);
  content: '';
}

.solutions-flow__stage > span {
  color: #6fcdf4;
  font-size: 0.65rem;
  font-weight: 700;
}

.solutions-flow__stage strong {
  color: #edf8ff;
  font-family: var(--font-display);
  font-size: clamp(0.76rem, 1.05vw, 0.92rem);
  line-height: 1.35;
}

.solutions-flow__stage > .icon {
  position: absolute;
  top: 1.15rem;
  right: 0.45rem;
  color: #00d1a7;
}

.solutions-flow__support {
  display: grid;
  grid-template-columns: auto minmax(30px, 1fr) auto auto auto;
  align-items: center;
  gap: 0.85rem;
  border-top: 1px solid rgba(255, 255, 255, 0.14);
  padding-top: 1.25rem;
}

.solutions-flow__support-label {
  color: #9bb2c6;
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.1em;
}

.solutions-flow__support-line {
  height: 1px;
  background: linear-gradient(90deg, rgba(0, 180, 255, 0.65), rgba(0, 209, 167, 0.45));
}

.solutions-flow__support-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  border: 1px solid rgba(144, 191, 218, 0.35);
  border-radius: 999px;
  padding: 0.45rem 0.72rem;
  color: #e2f3fc;
  font-size: 0.75rem;
}

.solutions-flow__support-chip i {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-teal);
}

.solutions-flow__support-copy {
  color: #9bb2c6;
  font-size: 0.7rem;
}

.solutions-flow__note {
  margin: 1.15rem 0 0;
  color: #aebfd0;
  font-size: 0.82rem;
  font-style: italic;
}

.solutions-needs {
  background: var(--color-white);
}

.solutions-needs__list {
  margin-top: 3rem;
  border-top: 1px solid var(--color-border);
}

.solutions-need {
  display: grid;
  grid-template-columns: 54px minmax(0, 1fr) 64px;
  align-items: center;
  gap: 1.5rem;
  border-bottom: 1px solid var(--color-border);
  padding: 1.6rem 0;
}

.solutions-need__number {
  color: #8797a7;
}

.solutions-need h3 {
  margin-top: 0;
  font-size: clamp(1.22rem, 2.5vw, 1.8rem);
}

.solutions-need p {
  max-width: 640px;
}

.solutions-need .solutions-text-link {
  margin-top: 0.8rem;
  font-size: 0.82rem;
}

.solutions-need__secondary {
  display: inline-flex;
  margin-left: 1.15rem;
  color: var(--color-link);
  font-size: 0.8rem;
  font-weight: 650;
  text-decoration-thickness: 1px;
  text-underline-offset: 3px;
}

.solutions-need__marker {
  position: relative;
  display: grid;
  width: 52px;
  height: 52px;
  place-items: center;
  border: 1px solid var(--color-border);
  border-radius: 50%;
}

.solutions-need__marker i {
  position: absolute;
  width: 20px;
  height: 20px;
  border: 1px solid var(--color-blue);
  border-radius: 50%;
}

.solutions-need__marker i + i {
  width: 8px;
  height: 8px;
  margin: 13px 0 0 14px;
  border-color: var(--color-teal);
  background: white;
}

.solutions-principles {
  background: #f0f4f8;
}

.solutions-principles__grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 3rem;
}

.solutions-principles__grid :deep(.base-card) {
  min-height: 230px;
  padding: clamp(1.15rem, 2vw, 1.7rem);
  box-shadow: none;
}

.solutions-principles__grid h3 {
  font-size: 1.08rem;
}

.solutions-principles__grid p {
  font-size: 0.84rem;
}

.solutions-principle__number {
  display: inline-block;
}

.solutions-principle__rule {
  display: block;
  width: 40px;
  height: 2px;
  margin-top: 1.4rem;
  background: var(--color-teal);
}

.solutions-faq {
  background: var(--color-white);
}

.solutions-faq__layout {
  display: grid;
  grid-template-columns: minmax(260px, 0.72fr) minmax(0, 1.28fr);
  align-items: start;
  gap: clamp(3rem, 8vw, 8rem);
}

.solutions-faq__aside {
  max-width: 330px;
  margin: 1.25rem 0 1.5rem;
  color: var(--color-muted);
  font-size: 0.87rem;
  line-height: 1.7;
}

.solutions-faq__list {
  border-top: 1px solid var(--color-border);
}

.solutions-faq__item {
  border-bottom: 1px solid var(--color-border);
}

.solutions-faq__item h3 {
  margin: 0;
  font-size: inherit;
}

.solutions-faq__trigger {
  display: grid;
  width: 100%;
  min-height: 72px;
  grid-template-columns: 36px minmax(0, 1fr) 30px;
  align-items: center;
  gap: 0.9rem;
  border: 0;
  padding: 1rem 0;
  background: transparent;
  color: var(--color-navy);
  cursor: pointer;
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 700;
  text-align: left;
}

.solutions-faq__number {
  color: #8293a5;
  font-family: var(--font-body);
  font-size: 0.68rem;
}

.solutions-faq__trigger > .icon {
  justify-self: end;
  color: var(--color-link);
}

.solutions-faq__trigger:hover {
  color: var(--color-link);
}

.solutions-faq__answer {
  padding: 0 3rem 1.25rem 2.9rem;
}

.solutions-faq__answer p {
  max-width: 680px;
  margin: 0;
  color: var(--color-muted);
  font-size: 0.9rem;
  line-height: 1.75;
}

.solutions-faq__answer[style*="display: none"] {
  padding: 0;
}

.solutions-cta {
  position: relative;
  overflow: hidden;
  background: var(--color-navy);
  color: var(--color-white);
  text-align: center;
}

.solutions-cta__inner {
  position: relative;
  z-index: 1;
}

.solutions-cta .solutions-eyebrow {
  justify-content: center;
}

.solutions-cta h2 {
  max-width: 900px;
  margin: 0 auto;
  color: var(--color-white);
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 5.2vw, 4.35rem);
  font-weight: 650;
  letter-spacing: -0.06em;
  line-height: 1.07;
}

.solutions-cta__description {
  max-width: 610px;
  margin: 1.35rem auto 0;
  color: #c1cede;
  font-size: 1.04rem;
  line-height: 1.75;
}

.solutions-cta__actions {
  justify-content: center;
}

.solutions-cta__orbit {
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 50%;
  width: min(84vw, 860px);
  aspect-ratio: 2.5;
  border: 1px solid rgba(0, 180, 255, 0.22);
  border-radius: 50%;
  transform: translate(-50%, -50%) rotate(-16deg);
}

.solutions-cta__orbit span {
  position: absolute;
  top: 48%;
  left: 0;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-blue);
}

.solutions-cta__orbit span:nth-child(2) {
  top: 12%;
  left: 76%;
  background: var(--color-teal);
}

.solutions-cta__orbit span:nth-child(3) {
  top: 88%;
  left: 90%;
  background: var(--color-orange);
}

@media (max-width: 980px) {
  .solutions-hero__inner {
    min-height: auto;
    grid-template-columns: minmax(0, 1fr) minmax(300px, 0.85fr);
  }

  .solutions-hero h1 {
    font-size: clamp(3rem, 6.2vw, 4.5rem);
  }

  .solutions-start__intro,
  .solutions-section-heading,
  .solutions-principles__heading {
    align-items: start;
    flex-direction: column;
  }

  .solutions-capability {
    min-height: 330px;
  }

  .solutions-capability__content {
    padding-inline: 2rem;
  }

  .solutions-flow__stages {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    row-gap: 1.8rem;
  }

  .solutions-flow__support {
    grid-template-columns: auto minmax(20px, 1fr) auto auto;
  }

  .solutions-flow__support-copy {
    display: none;
  }

  .solutions-principles__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .solutions-faq__layout {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
}

@media (max-width: 700px) {
  .solutions-hero__inner {
    grid-template-columns: 1fr;
    gap: 0.6rem;
    padding-block: 4.5rem 4rem;
  }

  .solutions-hero h1 {
    font-size: clamp(3.1rem, 10.5vw, 4.4rem);
  }

  .solutions-hero__description {
    font-size: 1rem;
  }

  .solutions-hero__visual {
    margin-top: 0.5rem;
  }

  .solutions-start__principles {
    grid-template-columns: 1fr;
  }

  .solutions-start__principle,
  .solutions-start__principle + .solutions-start__principle {
    border-left: 0;
    border-bottom: 1px solid var(--color-border);
    padding: 1.1rem 0;
  }

  .solutions-start__principle h3 {
    margin-top: 0.55rem;
  }

  .solutions-capability {
    grid-template-columns: 1fr;
  }

  .solutions-capability--reverse .solutions-capability__visual,
  .solutions-capability--reverse .solutions-capability__content {
    order: initial;
  }

  .solutions-capability__visual {
    min-height: 230px;
  }

  .solution-motif {
    width: min(45%, 190px);
  }

  .solutions-capability__content {
    padding: 1.6rem 0 2rem;
  }

  .solutions-capability__content h3 {
    margin-top: 0.75rem;
    font-size: 1.75rem;
  }

  .solutions-flow__diagram {
    padding: 1.2rem;
  }

  .solutions-flow__stages {
    grid-template-columns: 1fr;
    gap: 0;
    padding-left: 0.4rem;
  }

  .solutions-flow__stage {
    min-height: 68px;
    grid-template-columns: 32px minmax(0, 1fr);
    align-content: center;
    align-items: center;
    gap: 0.5rem;
    border-top: 0;
    border-left: 1px solid rgba(106, 203, 240, 0.45);
    padding: 0.2rem 0.8rem 0.2rem 1rem;
  }

  .solutions-flow__stage::before {
    top: 50%;
    left: -4px;
    transform: translateY(-50%);
  }

  .solutions-flow__stage > .icon {
    top: auto;
    right: 0.3rem;
    bottom: -0.45rem;
    transform: rotate(90deg);
  }

  .solutions-flow__support {
    grid-template-columns: 1fr 1fr;
    gap: 0.65rem;
    margin-top: 1rem;
  }

  .solutions-flow__support-label {
    grid-column: 1 / -1;
  }

  .solutions-flow__support-line {
    display: none;
  }

  .solutions-flow__support-chip {
    justify-content: center;
    font-size: 0.7rem;
  }

  .solutions-need {
    grid-template-columns: 32px minmax(0, 1fr);
    gap: 0.8rem;
    padding-block: 1.3rem;
  }

  .solutions-need__marker {
    display: none;
  }

  .solutions-need h3 {
    font-size: 1.25rem;
  }

  .solutions-need p {
    font-size: 0.85rem;
  }

  .solutions-need__secondary {
    display: flex;
    width: fit-content;
    margin: 0.5rem 0 0 0;
  }

  .solutions-principles__grid {
    grid-template-columns: 1fr;
  }

  .solutions-principles__grid :deep(.base-card) {
    min-height: auto;
  }

  .solutions-faq__trigger {
    grid-template-columns: 28px minmax(0, 1fr) 24px;
    gap: 0.6rem;
    font-size: 0.92rem;
  }

  .solutions-faq__answer {
    padding: 0 1.8rem 1.1rem 2.4rem;
  }

  .solutions-faq__answer p {
    font-size: 0.85rem;
  }

  .solutions-cta__actions {
    align-items: stretch;
    flex-direction: column;
  }

  .solutions-cta__actions .button {
    width: 100%;
  }
}

@media (max-width: 390px) {
  .solutions-hero h1 {
    font-size: 2.85rem;
  }

  .solutions-hero__actions {
    align-items: stretch;
    flex-direction: column;
  }

  .solutions-hero__actions .button {
    width: 100%;
  }

  .solutions-capability__content ul {
    grid-template-columns: 1fr;
    gap: 0.4rem;
  }

  .solutions-flow__diagram {
    padding: 1rem 0.8rem;
  }

  .solutions-flow__support-chip {
    padding-inline: 0.45rem;
    font-size: 0.66rem;
  }

  .solutions-cta h2 {
    font-size: 2.35rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .solutions-page *,
  .solutions-page *::before,
  .solutions-page *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
