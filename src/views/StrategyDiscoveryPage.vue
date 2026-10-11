<script setup>
import { ref } from 'vue'
import Container from '../components/global/Container.vue'
import Button from '../components/global/Button.vue'
import SectionHeading from '../components/global/SectionHeading.vue'
import BaseCard from '../components/global/BaseCard.vue'
import Icon from '../components/global/Icon.vue'
import StrategySignalMap from '../components/solutions/StrategySignalMap.vue'

const challenges = [
  {
    number: '01',
    title: 'Unclear Priorities',
    description: 'Multiple ideas compete for attention without a clear order of importance.',
    motif: 'challenge-motif--priorities',
  },
  {
    number: '02',
    title: 'Assumptions About Customers',
    description: 'Decisions are made without enough understanding of audience needs, objections, and behavior.',
    motif: 'challenge-motif--audience',
  },
  {
    number: '03',
    title: 'Disconnected Efforts',
    description: 'Marketing, brand communication, digital platforms, and business objectives do not always support one another.',
    motif: 'challenge-motif--efforts',
  },
  {
    number: '04',
    title: 'No Clear Definition of Progress',
    description: 'Teams struggle to evaluate whether activities are moving the business toward its intended goals.',
    motif: 'challenge-motif--progress',
  },
]

const meaningPrinciples = [
  {
    number: '01',
    title: 'Understand the Context',
    description: 'Explore the business model, objectives, audience, market, offer, existing digital presence, and available resources.',
  },
  {
    number: '02',
    title: 'Identify the Constraint',
    description: 'Examine gaps and dependencies that may be preventing progress. Distinguish symptoms from issues that warrant further investigation.',
  },
  {
    number: '03',
    title: 'Define the Next Move',
    description: 'Turn findings into practical priorities and a direction that can inform marketing, brand experience, technology, and operational decisions.',
  },
]

const examinationAreas = [
  {
    number: '01',
    title: 'Business & Objectives',
    focus: ['Business model and offer', 'Current objectives', 'Growth ambitions and constraints', 'Existing priorities'],
    mark: 'examine-mark--business',
  },
  {
    number: '02',
    title: 'Audience & Customer Journey',
    focus: ['Intended audiences', 'Customer needs and questions', 'Purchase considerations and objections', 'Journey from discovery to enquiry or purchase'],
    mark: 'examine-mark--audience',
  },
  {
    number: '03',
    title: 'Market & Competition',
    focus: ['Relevant competitors', 'Market positioning and messaging', "Competitors' publicly visible digital activity", 'Potential areas of differentiation'],
    mark: 'examine-mark--market',
  },
  {
    number: '04',
    title: 'Brand & Digital Presence',
    focus: ['Brand clarity and consistency', 'Website and landing pages', 'Content and social channels', 'Existing campaign and conversion journeys'],
    mark: 'examine-mark--presence',
  },
  {
    number: '05',
    title: 'Measurement & Systems',
    focus: ['Available performance data', 'Existing tracking and reporting', 'Relevant tools and workflows', 'Gaps in visibility or coordination'],
    mark: 'examine-mark--systems',
  },
]

const discoverySteps = [
  {
    number: '01',
    title: 'Discover',
    description: 'Understand the business, goals, audience, current digital presence, and context.',
  },
  {
    number: '02',
    title: 'Research',
    description: "Review relevant market information, competitors' publicly visible activity, customer journey signals, and available business data.",
  },
  {
    number: '03',
    title: 'Diagnose',
    description: 'Identify gaps, dependencies, potential constraints, and areas requiring further validation.',
  },
  {
    number: '04',
    title: 'Prioritize',
    description: 'Evaluate potential actions in relation to business objectives, impact, effort, resources, and urgency.',
  },
  {
    number: '05',
    title: 'Roadmap',
    description: 'Document recommended priorities, reasoning, dependencies, and practical next steps.',
  },
]

const deliverables = [
  {
    number: '01',
    title: 'Business & Digital Assessment',
    description: 'A structured overview of the current position, objectives, and relevant gaps.',
    marker: 'deliverable-mark--assessment',
  },
  {
    number: '02',
    title: 'Audience & Positioning Insights',
    description: "A clearer view of intended customers, their needs, and the business's market positioning.",
    marker: 'deliverable-mark--audience',
  },
  {
    number: '03',
    title: 'Competitive Landscape Review',
    description: 'A review of relevant, publicly observable competitor positioning and digital activity.',
    marker: 'deliverable-mark--landscape',
  },
  {
    number: '04',
    title: 'Opportunity & Priority Map',
    description: 'A structured view of potential improvements and their relative importance.',
    marker: 'deliverable-mark--opportunity',
  },
  {
    number: '05',
    title: 'Digital Growth Roadmap',
    description: 'Recommended next steps across relevant strategic, brand, marketing, or technology areas.',
    marker: 'deliverable-mark--roadmap',
  },
  {
    number: '06',
    title: 'Measurement Recommendations',
    description: 'Suggestions for the indicators and tracking needed to evaluate progress against agreed objectives.',
    marker: 'deliverable-mark--measurement',
  },
]

const nextPaths = [
  {
    number: '01',
    title: 'Brand & Digital Experience',
    route: '/solutions/brand-digital-experience',
    note: 'When consistency across communication and digital touchpoints is a priority.',
    marker: 'next-path--brand',
  },
  {
    number: '02',
    title: 'Performance & Growth',
    route: '/solutions/performance-growth',
    note: 'When campaigns and conversion journeys need to connect to objectives.',
    marker: 'next-path--performance',
  },
  {
    number: '03',
    title: 'Technology & Digital Platforms',
    route: '/solutions/technology',
    note: 'When digital platforms need to support customer or business needs.',
    marker: 'next-path--technology',
  },
  {
    number: '04',
    title: 'Automation & Systems',
    route: '/solutions/automation',
    note: 'When workflows and operational consistency need attention.',
    marker: 'next-path--automation',
  },
]

const useCases = [
  'You are planning a new digital initiative and want to define the right starting point.',
  'You are investing in marketing but need to understand where the main opportunities or gaps may be.',
  'Your website, brand communication, and campaigns feel disconnected.',
  'You need a more structured way to prioritize competing growth ideas.',
]

const questions = [
  {
    question: 'What is Strategy & Discovery?',
    answer: 'It is a structured process for understanding business objectives, customers, market context, existing digital activity, and potential opportunities before deciding which actions to prioritize.',
  },
  {
    question: 'Is this the same as a marketing plan?',
    answer: 'Not necessarily. A marketing plan may be one outcome, but discovery can also examine positioning, customer experience, digital platforms, measurement, and broader business constraints that affect digital growth.',
  },
  {
    question: 'Do we need to have all our data ready?',
    answer: 'No. Begin with the information you have. We can identify what is available, where gaps exist, and which additional information would be useful. The depth of analysis depends on the agreed scope and access to relevant information.',
  },
  {
    question: 'Will you recommend advertising?',
    answer: 'Only when advertising appears relevant to the business objectives and findings. Depending on the situation, priorities may instead involve positioning, website experience, content, measurement, technology, or other improvements.',
  },
  {
    question: 'What happens after the discovery process?',
    answer: 'The findings can be used to agree on priorities and practical next steps. Depending on the scope, this may lead to a roadmap, further planning, or execution through relevant capabilities.',
  },
]

const openQuestion = ref(null)

function toggleQuestion(index) {
  openQuestion.value = openQuestion.value === index ? null : index
}

function onQuestionKeydown(event, index) {
  if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return

  event.preventDefault()
  const buttons = [...event.currentTarget.closest('.strategy-faq__list').querySelectorAll('.strategy-faq__trigger')]
  const nextIndex = event.key === 'Home'
    ? 0
    : event.key === 'End'
      ? buttons.length - 1
      : (index + (event.key === 'ArrowDown' ? 1 : -1) + buttons.length) % buttons.length
  buttons[nextIndex]?.focus()
}
</script>

<template>
  <div class="strategy-page">
    <section class="strategy-hero">
      <Container class="strategy-hero__inner">
        <div class="strategy-hero__copy">
          <p class="strategy-eyebrow"><span></span> STRATEGY &amp; DISCOVERY</p>
          <h1>Before you decide what to do next, understand what matters most.</h1>
          <p class="strategy-hero__description">
            Every business has different goals, constraints, customers, and opportunities. We help bring those moving parts into focus so digital decisions start with a clearer understanding of the business.
          </p>
          <div class="strategy-hero__actions">
            <Button to="/contact">Discuss Your Business <Icon name="arrow" :size="17" /></Button>
            <Button to="/solutions" variant="secondary" class="strategy-button--outline">Explore All Solutions</Button>
          </div>
          <p class="strategy-hero__note">A clear view of the question comes before a recommendation.</p>
        </div>
        <StrategySignalMap class="strategy-hero__visual" />
      </Container>
      <div class="strategy-hero__grid" aria-hidden="true"></div>
    </section>

    <section class="strategy-challenge strategy-section">
      <Container>
        <div class="strategy-section-head">
          <SectionHeading
            eyebrow="The strategic challenge"
            title="More activity does not always mean more progress."
            description="Businesses may invest in campaigns, content, websites, or new tools without first identifying the issue those activities are intended to solve."
          />
          <p class="strategy-section-head__aside">Possible challenges to investigate, not assumptions about every business.</p>
        </div>
        <div class="strategy-challenge-list">
          <article v-for="challenge in challenges" :key="challenge.number" class="strategy-challenge">
            <div class="strategy-challenge__visual" :class="challenge.motif" aria-hidden="true">
              <span></span><span></span><span></span>
            </div>
            <div class="strategy-challenge__copy">
              <span>{{ challenge.number }}</span>
              <h3>{{ challenge.title }}</h3>
              <p>{{ challenge.description }}</p>
            </div>
            <Icon name="arrow" :size="17" class="strategy-challenge__arrow" />
          </article>
        </div>
      </Container>
    </section>

    <section class="strategy-meaning strategy-section">
      <Container>
        <div class="strategy-meaning__intro">
          <SectionHeading
            eyebrow="What Strategy & Discovery means"
            title="Understand the business before prescribing the solution."
            description="Strategy & Discovery creates a clearer view of where a business stands, what it is trying to achieve, what may be limiting progress, and which opportunities deserve attention first."
          />
          <span class="strategy-meaning__index">A useful direction begins with better questions.</span>
        </div>
        <div class="strategy-meaning__principles">
          <article v-for="principle in meaningPrinciples" :key="principle.number" class="strategy-meaning__principle">
            <span>{{ principle.number }}</span>
            <h3>{{ principle.title }}</h3>
            <p>{{ principle.description }}</p>
          </article>
        </div>
        <div class="strategy-sequence" aria-label="Observe, Understand, Diagnose, Prioritize, Plan">
          <span v-for="(step, index) in ['Observe', 'Understand', 'Diagnose', 'Prioritize', 'Plan']" :key="step">
            <i>{{ String(index + 1).padStart(2, '0') }}</i>{{ step }}
            <Icon v-if="index < 4" name="arrow" :size="15" />
          </span>
        </div>
      </Container>
    </section>

    <section class="strategy-examine strategy-section">
      <Container>
        <div class="strategy-section-head">
          <SectionHeading
            eyebrow="What we examine"
            title="A wider view. A more useful diagnosis."
            description="Discovery can connect business context with customer, market, digital, and operational signals."
          />
          <p class="strategy-section-head__aside">Scope depends on the agreed objectives and the information available.</p>
        </div>
        <div class="strategy-examine__grid">
          <article v-for="area in examinationAreas" :key="area.number" class="strategy-examine-card">
            <div class="strategy-examine-card__head">
              <span>{{ area.number }}</span>
              <div class="examine-mark" :class="area.mark" aria-hidden="true"><i></i><i></i><i></i></div>
            </div>
            <h3>{{ area.title }}</h3>
            <ul>
              <li v-for="item in area.focus" :key="item">{{ item }}</li>
            </ul>
          </article>
        </div>
        <p class="strategy-examine__scope">
          Public research is limited to information that can be observed publicly. Private or restricted business data is considered only when supplied or authorized by the client.
        </p>
      </Container>
    </section>

    <section class="strategy-framework strategy-section">
      <Container>
        <SectionHeading
          eyebrow="Our discovery framework"
          title="From business questions to actionable priorities."
          description="A structured progression turns what we learn into a direction the business can use."
        />
        <ol class="strategy-framework__steps">
          <li v-for="(step, index) in discoverySteps" :key="step.number" class="strategy-framework__step">
            <div class="strategy-framework__marker"><span>{{ step.number }}</span><i v-if="index < discoverySteps.length - 1"></i></div>
            <div class="strategy-framework__content">
              <h3>{{ step.title }}</h3>
              <p>{{ step.description }}</p>
            </div>
          </li>
        </ol>
        <p class="strategy-framework__scope">The research depth and outputs are shaped around the agreed engagement scope.</p>
      </Container>
    </section>

    <section class="strategy-deliverables strategy-section">
      <Container>
        <div class="strategy-section-head">
          <SectionHeading
            eyebrow="Strategy deliverables"
            title="Clarity you can use to make decisions."
            description="Depending on the engagement scope, findings may take shape in practical outputs that help teams evaluate their next steps."
          />
          <span class="strategy-section-head__aside">Possible outputs, tailored to the work.</span>
        </div>
        <div class="strategy-deliverables__grid">
          <BaseCard v-for="item in deliverables" :key="item.number" class="strategy-deliverable">
            <div class="deliverable-mark" :class="item.marker" aria-hidden="true">
              <i></i><i></i><i></i>
            </div>
            <span class="strategy-deliverable__number">{{ item.number }}</span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </BaseCard>
        </div>
        <p class="strategy-deliverables__note">Deliverables are tailored to the agreed scope, available information, and business objectives.</p>
      </Container>
    </section>

    <section class="strategy-after strategy-section">
      <Container>
        <div class="strategy-after__intro">
          <SectionHeading
            eyebrow="What happens after strategy?"
            title="Strategy connects the direction to the work."
            description="Strategy is most useful when it informs real decisions and coordinated execution. The next step may involve one capability or several, depending on the findings and priorities."
          />
          <Button to="/solutions" variant="secondary">Explore Our Solutions <Icon name="arrow" :size="17" /></Button>
        </div>
        <div class="strategy-paths">
          <RouterLink v-for="path in nextPaths" :key="path.route" :to="path.route" class="strategy-path">
            <span class="strategy-path__number">{{ path.number }}</span>
            <span class="strategy-path__content"><strong>{{ path.title }}</strong><small>{{ path.note }}</small></span>
            <span class="strategy-path__arrow"><Icon name="arrow" :size="18" /></span>
          </RouterLink>
        </div>
        <p class="strategy-after__note">A strategy engagement does not imply that every capability is required.</p>
      </Container>
    </section>

    <section class="strategy-fit strategy-section">
      <Container class="strategy-fit__layout">
        <div>
          <SectionHeading
            eyebrow="Who this is for"
            title="Useful when the next move needs more clarity."
            description="Strategy & Discovery may be helpful when the business has a meaningful question to investigate before choosing actions."
          />
          <p class="strategy-fit__qualification">
            Most useful when there is a clear business question to investigate and a willingness to evaluate findings before choosing actions.
          </p>
        </div>
        <ul class="strategy-fit__list">
          <li v-for="(useCase, index) in useCases" :key="useCase">
            <span>{{ String(index + 1).padStart(2, '0') }}</span>{{ useCase }}<Icon name="arrow" :size="16" />
          </li>
        </ul>
      </Container>
    </section>

    <section class="strategy-faq strategy-section">
      <Container class="strategy-faq__layout">
        <div class="strategy-faq__intro">
          <SectionHeading
            eyebrow="Frequently asked questions"
            title="Strategy & Discovery questions"
            description="A few helpful details about the process and what it can inform."
          />
          <Button to="/contact" variant="secondary">Discuss Your Business <Icon name="arrow" :size="16" /></Button>
        </div>
        <div class="strategy-faq__list">
          <article v-for="(item, index) in questions" :key="item.question" class="strategy-faq__item">
            <h3>
              <button
                :id="`strategy-question-${index}`"
                type="button"
                class="strategy-faq__trigger"
                :aria-expanded="openQuestion === index"
                :aria-controls="`strategy-answer-${index}`"
                @click="toggleQuestion(index)"
                @keydown="onQuestionKeydown($event, index)"
              >
                <span class="strategy-faq__number">{{ String(index + 1).padStart(2, '0') }}</span>
                <span>{{ item.question }}</span>
                <Icon :name="openQuestion === index ? 'close' : 'plus'" :size="19" />
              </button>
            </h3>
            <div
              :id="`strategy-answer-${index}`"
              v-show="openQuestion === index"
              class="strategy-faq__answer"
              role="region"
              :aria-labelledby="`strategy-question-${index}`"
            >
              <p>{{ item.answer }}</p>
            </div>
          </article>
        </div>
      </Container>
    </section>

    <section class="strategy-cta strategy-section">
      <Container class="strategy-cta__inner">
        <div class="strategy-cta__orbit" aria-hidden="true"><span></span><span></span><span></span></div>
        <p class="strategy-eyebrow"><span></span> BEGIN WITH THE CONTEXT</p>
        <h2>Let's make your next decision<br />a more informed one.</h2>
        <p class="strategy-cta__description">Tell us about your business, the challenges you are facing, and what you want to achieve. We can start by understanding the context.</p>
        <div class="strategy-cta__actions">
          <Button to="/contact">Start a Conversation <Icon name="arrow" :size="17" /></Button>
          <Button to="/how-we-work" variant="secondary" class="strategy-button--outline">See How We Work</Button>
        </div>
      </Container>
    </section>
  </div>
</template>

<style scoped>
.strategy-page {
  overflow: clip;
}

.strategy-section {
  position: relative;
  padding-block: clamp(4.5rem, 9vw, 7.75rem);
}

.strategy-hero {
  position: relative;
  overflow: hidden;
  background: var(--color-navy);
  color: white;
}

.strategy-hero__inner {
  position: relative;
  display: grid;
  min-height: min(690px, calc(100svh - 84px));
  grid-template-columns: minmax(0, 1.05fr) minmax(350px, 0.95fr);
  align-items: center;
  gap: 1rem;
  padding-block: clamp(5rem, 9vw, 7.5rem);
}

.strategy-hero__copy {
  position: relative;
  z-index: 1;
  max-width: 690px;
}

.strategy-eyebrow {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  margin: 0 0 1.5rem;
  color: #b9d4e7;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.15em;
}

.strategy-eyebrow > span {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--color-teal);
  box-shadow: 0 0 14px rgba(0, 209, 167, 0.65);
}

.strategy-hero h1 {
  max-width: 760px;
  margin: 0;
  color: white;
  font-family: var(--font-display);
  font-size: clamp(3rem, 5.5vw, 5.15rem);
  font-weight: 650;
  letter-spacing: -0.065em;
  line-height: 1.03;
}

.strategy-hero__description {
  max-width: 610px;
  margin: 1.5rem 0 0;
  color: #c1cede;
  font-size: clamp(1rem, 1.3vw, 1.1rem);
  line-height: 1.8;
}

.strategy-hero__actions,
.strategy-cta__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  margin-top: 2rem;
}

.strategy-hero .strategy-button--outline,
.strategy-cta .strategy-button--outline {
  border-color: rgba(255, 255, 255, 0.32);
  background: transparent;
  color: white;
}

.strategy-hero .strategy-button--outline:hover,
.strategy-cta .strategy-button--outline:hover {
  border-color: var(--color-blue);
  background: rgba(255, 255, 255, 0.06);
}

.strategy-hero__note {
  margin: 2rem 0 0;
  color: #94abc0;
  font-size: 0.79rem;
}

.strategy-hero__visual {
  position: relative;
  z-index: 1;
}

.strategy-hero__grid {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image: linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: linear-gradient(90deg, transparent 10%, #000 88%);
}

.strategy-section-head {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 2rem;
}

.strategy-section-head .section-heading__description {
  max-width: 720px;
}

.strategy-section-head__aside {
  max-width: 260px;
  flex: 0 0 auto;
  margin: 0 0 0.35rem;
  color: var(--color-muted);
  font-size: 0.8rem;
  line-height: 1.6;
}

.strategy-challenge {
  background: white;
}

.strategy-challenge-list {
  margin-top: clamp(2.7rem, 6vw, 4.5rem);
  border-top: 1px solid var(--color-border);
}

.strategy-challenge {
  display: grid;
  grid-template-columns: 110px minmax(0, 1fr) 44px;
  align-items: center;
  gap: clamp(1rem, 3vw, 2.5rem);
  border-bottom: 1px solid var(--color-border);
  padding-block: 1.35rem;
}

.strategy-challenge__visual {
  position: relative;
  display: grid;
  width: 72px;
  height: 58px;
  place-items: center;
}

.strategy-challenge__visual span {
  position: absolute;
  width: 35px;
  height: 35px;
  border: 1px solid rgba(0, 180, 255, 0.65);
  border-radius: 50%;
}

.strategy-challenge__visual span:nth-child(1) {
  margin-left: -19px;
}

.strategy-challenge__visual span:nth-child(2) {
  border-color: rgba(0, 209, 167, 0.8);
}

.strategy-challenge__visual span:nth-child(3) {
  margin-left: 19px;
  border-color: rgba(255, 176, 32, 0.85);
}

.challenge-motif--priorities span {
  width: 24px;
  height: 24px;
  border-radius: 3px;
  transform: rotate(45deg);
}

.challenge-motif--audience span:nth-child(1),
.challenge-motif--audience span:nth-child(3) {
  width: 9px;
  height: 9px;
  background: var(--color-blue);
}

.challenge-motif--audience span:nth-child(2) {
  width: 44px;
  height: 44px;
  border-style: dashed;
}

.challenge-motif--efforts span:nth-child(1) {
  transform: translate(-10px, -9px);
}

.challenge-motif--efforts span:nth-child(2) {
  transform: translate(10px, -9px);
}

.challenge-motif--efforts span:nth-child(3) {
  transform: translateY(10px);
}

.challenge-motif--progress span:nth-child(1) {
  width: 46px;
  height: 1px;
  border: 0;
  background: #9bb2c4;
}

.challenge-motif--progress span:nth-child(2) {
  width: 11px;
  height: 11px;
  background: var(--color-teal);
}

.challenge-motif--progress span:nth-child(3) {
  width: 29px;
  height: 29px;
  border-style: dashed;
}

.strategy-challenge__copy > span {
  color: #8293a5;
  font-size: 0.68rem;
  font-weight: 700;
}

.strategy-challenge__copy h3,
.strategy-meaning__principle h3,
.strategy-framework__content h3 {
  margin: 0.35rem 0;
  color: var(--color-navy);
  font-family: var(--font-display);
  font-size: clamp(1.15rem, 2vw, 1.45rem);
  font-weight: 700;
  letter-spacing: -0.03em;
}

.strategy-challenge__copy p,
.strategy-meaning__principle p,
.strategy-framework__content p {
  max-width: 710px;
  margin: 0;
  color: var(--color-muted);
  font-size: 0.9rem;
  line-height: 1.65;
}

.strategy-challenge__arrow {
  justify-self: end;
  color: #8396a8;
}

.strategy-meaning {
  overflow: hidden;
  background: var(--color-navy);
  color: white;
}

.strategy-meaning .section-heading__title {
  color: white;
}

.strategy-meaning .section-heading__description {
  max-width: 760px;
  color: #b6c5d5;
}

.strategy-meaning .section-heading__eyebrow {
  border-color: rgba(0, 180, 255, 0.35);
  background: rgba(0, 180, 255, 0.12);
  color: #b8eaff;
}

.strategy-meaning__intro {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 2rem;
}

.strategy-meaning__index {
  max-width: 230px;
  flex: 0 0 auto;
  border-left: 2px solid var(--color-teal);
  padding-left: 0.9rem;
  color: #c5d7e4;
  font-family: var(--font-display);
  font-size: 0.9rem;
  line-height: 1.55;
}

.strategy-meaning__principles {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: clamp(3rem, 6vw, 5rem);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.strategy-meaning__principle {
  padding: 1.35rem clamp(1rem, 3vw, 2.5rem) 0 0;
}

.strategy-meaning__principle + .strategy-meaning__principle {
  border-left: 1px solid rgba(255, 255, 255, 0.16);
  padding-left: clamp(1rem, 3vw, 2.5rem);
}

.strategy-meaning__principle > span {
  color: #75cfee;
  font-size: 0.7rem;
  font-weight: 700;
}

.strategy-meaning__principle h3 {
  margin-top: 0.95rem;
  color: white;
  font-size: 1.13rem;
}

.strategy-meaning__principle p {
  max-width: 360px;
  color: #b6c5d5;
}

.strategy-sequence {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.7rem;
  margin-top: 3.2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  padding-top: 1.2rem;
}

.strategy-sequence > span {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  color: #e1edf5;
  font-size: 0.8rem;
  font-weight: 650;
}

.strategy-sequence i {
  color: #71cbed;
  font-size: 0.65rem;
  font-style: normal;
}

.strategy-sequence .icon {
  margin-left: clamp(0.2rem, 1.7vw, 1.2rem);
  color: var(--color-teal);
}

.strategy-examine {
  background: #f0f4f8;
}

.strategy-examine__grid {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 3rem;
}

.strategy-examine-card {
  grid-column: span 2;
  min-height: 260px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 1.35rem;
  background: white;
}

.strategy-examine-card:nth-child(4) {
  grid-column: 2 / span 2;
}

.strategy-examine-card__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #778b9e;
  font-size: 0.68rem;
  font-weight: 700;
}

.examine-mark {
  position: relative;
  display: grid;
  width: 40px;
  height: 36px;
  place-items: center;
}

.examine-mark i {
  position: absolute;
  width: 17px;
  height: 17px;
  border: 1px solid var(--color-blue);
  border-radius: 50%;
}

.examine-mark i:nth-child(2) {
  margin: 10px 0 0 10px;
  border-color: var(--color-teal);
}

.examine-mark i:nth-child(3) {
  margin: -10px 0 0 10px;
  border-color: var(--color-orange);
}

.examine-mark--audience i {
  border-radius: 3px;
  transform: rotate(45deg);
}

.examine-mark--market i:nth-child(1) {
  width: 29px;
  height: 29px;
  border-style: dashed;
}

.examine-mark--presence i:nth-child(2) {
  width: 8px;
  height: 8px;
  background: var(--color-teal);
}

.examine-mark--systems i:nth-child(1) {
  width: 25px;
  height: 25px;
}

.strategy-examine-card h3 {
  margin: 1rem 0 0.8rem;
  color: var(--color-navy);
  font-family: var(--font-display);
  font-size: 1.1rem;
  letter-spacing: -0.025em;
}

.strategy-examine-card ul {
  display: grid;
  gap: 0.5rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.strategy-examine-card li {
  position: relative;
  padding-left: 0.8rem;
  color: #586d81;
  font-size: 0.8rem;
  line-height: 1.45;
}

.strategy-examine-card li::before {
  position: absolute;
  top: 0.55em;
  left: 0;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--color-teal);
  content: '';
}

.strategy-examine__scope {
  margin: 1.4rem 0 0;
  border-left: 2px solid var(--color-blue);
  padding-left: 0.9rem;
  color: var(--color-muted);
  font-size: 0.83rem;
  line-height: 1.6;
}

.strategy-framework {
  background: white;
}

.strategy-framework__steps {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 1.5rem;
  margin: clamp(3rem, 6vw, 5rem) 0 0;
  padding: 0;
  list-style: none;
}

.strategy-framework__step {
  min-width: 0;
}

.strategy-framework__marker {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.strategy-framework__marker > span {
  position: relative;
  z-index: 1;
  display: grid;
  width: 46px;
  height: 46px;
  flex: 0 0 auto;
  place-items: center;
  border: 1px solid #b9d6e5;
  border-radius: 50%;
  background: white;
  color: var(--color-navy);
  font-size: 0.72rem;
  font-weight: 700;
}

.strategy-framework__step:nth-child(3) .strategy-framework__marker > span {
  border-color: var(--color-teal);
}

.strategy-framework__marker > i {
  height: 1px;
  flex: 1;
  background: linear-gradient(90deg, #8ccce3, #dce3ea);
}

.strategy-framework__content h3 {
  margin-top: 1.15rem;
  font-size: 1.12rem;
}

.strategy-framework__content p {
  font-size: 0.84rem;
}

.strategy-framework__scope {
  margin: 2rem 0 0;
  color: var(--color-muted);
  font-size: 0.79rem;
  font-style: italic;
}

.strategy-deliverables {
  background: var(--color-background);
}

.strategy-deliverables__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 3rem;
}

.strategy-deliverables__grid :deep(.base-card) {
  min-height: 245px;
  padding: 1.35rem;
  box-shadow: none;
}

.strategy-deliverable {
  display: flex;
  flex-direction: column;
}

.deliverable-mark {
  position: relative;
  width: 45px;
  height: 42px;
  margin-bottom: 0.5rem;
}

.deliverable-mark i {
  position: absolute;
  top: 8px;
  left: 3px;
  width: 30px;
  height: 23px;
  border: 1px solid rgba(0, 180, 255, 0.7);
  border-radius: 2px;
  transform: rotate(-8deg);
}

.deliverable-mark i:nth-child(2) {
  top: 12px;
  left: 8px;
  border-color: rgba(0, 209, 167, 0.8);
  transform: rotate(5deg);
}

.deliverable-mark i:nth-child(3) {
  top: 16px;
  left: 13px;
  width: 8px;
  height: 8px;
  border-color: var(--color-orange);
  border-radius: 50%;
}

.deliverable-mark--audience i {
  border-radius: 50%;
}

.deliverable-mark--landscape i:nth-child(1) {
  transform: rotate(45deg) scale(0.8);
}

.deliverable-mark--opportunity i:nth-child(3) {
  width: 21px;
  height: 1px;
  top: 27px;
  border: 0;
  background: var(--color-orange);
  border-radius: 0;
}

.deliverable-mark--roadmap i {
  border-radius: 50%;
}

.deliverable-mark--measurement i:nth-child(1) {
  width: 37px;
  height: 1px;
  top: 21px;
  border: 0;
  background: #86a4b8;
  transform: none;
}

.strategy-deliverable__number {
  color: var(--color-link);
  font-size: 0.66rem;
  font-weight: 700;
}

.strategy-deliverable h3 {
  margin: 0.6rem 0 0.5rem;
  color: var(--color-navy);
  font-family: var(--font-display);
  font-size: 1.1rem;
  letter-spacing: -0.025em;
}

.strategy-deliverable p {
  margin: 0;
  color: var(--color-muted);
  font-size: 0.84rem;
  line-height: 1.65;
}

.strategy-deliverables__note {
  margin: 1.3rem 0 0;
  color: var(--color-muted);
  font-size: 0.79rem;
  font-style: italic;
}

.strategy-after {
  background: white;
}

.strategy-after__intro {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 2rem;
}

.strategy-after__intro .section-heading__description {
  max-width: 760px;
}

.strategy-after__intro > .button {
  flex: 0 0 auto;
  margin-bottom: 0.3rem;
}

.strategy-paths {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-top: 3rem;
  border-top: 1px solid var(--color-border);
}

.strategy-path {
  display: grid;
  min-height: 120px;
  grid-template-columns: 40px minmax(0, 1fr) 38px;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid var(--color-border);
  padding: 1.1rem 1.4rem 1.1rem 0;
  color: inherit;
  text-decoration: none;
}

.strategy-path:nth-child(odd) {
  margin-right: 1.5rem;
}

.strategy-path:nth-child(even) {
  border-left: 1px solid var(--color-border);
  padding-left: 1.5rem;
}

.strategy-path__number {
  color: #7e91a3;
  font-size: 0.7rem;
  font-weight: 700;
}

.strategy-path__content {
  display: grid;
  gap: 0.45rem;
}

.strategy-path__content strong {
  color: var(--color-navy);
  font-family: var(--font-display);
  font-size: 1.06rem;
  letter-spacing: -0.025em;
}

.strategy-path__content small {
  max-width: 450px;
  color: var(--color-muted);
  font-size: 0.8rem;
  line-height: 1.55;
}

.strategy-path__arrow {
  display: grid;
  width: 36px;
  height: 36px;
  place-items: center;
  border: 1px solid var(--color-border);
  border-radius: 50%;
  color: var(--color-navy);
  transition: transform 160ms ease, border-color 160ms ease;
}

.strategy-path:hover .strategy-path__arrow {
  border-color: var(--color-blue);
  transform: translateX(3px);
}

.strategy-after__note {
  margin: 1.2rem 0 0;
  color: var(--color-muted);
  font-size: 0.8rem;
  font-style: italic;
}

.strategy-fit {
  background: #f0f4f8;
}

.strategy-fit__layout {
  display: grid;
  grid-template-columns: minmax(260px, 0.8fr) minmax(0, 1.2fr);
  align-items: start;
  gap: clamp(3rem, 8vw, 8rem);
}

.strategy-fit__qualification {
  max-width: 420px;
  margin: 1.4rem 0 0;
  border-left: 2px solid var(--color-teal);
  padding-left: 1rem;
  color: #526a7e;
  font-size: 0.86rem;
  line-height: 1.7;
}

.strategy-fit__list {
  display: grid;
  margin: 0;
  border-top: 1px solid #cbd8e1;
  padding: 0;
  list-style: none;
}

.strategy-fit__list li {
  display: grid;
  grid-template-columns: 32px minmax(0, 1fr) 24px;
  align-items: center;
  gap: 0.75rem;
  min-height: 75px;
  border-bottom: 1px solid #cbd8e1;
  color: var(--color-text);
  font-size: 0.9rem;
  line-height: 1.55;
}

.strategy-fit__list li > span {
  color: var(--color-link);
  font-size: 0.68rem;
  font-weight: 700;
}

.strategy-fit__list .icon {
  color: #6f899e;
}

.strategy-faq {
  background: white;
}

.strategy-faq__layout {
  display: grid;
  grid-template-columns: minmax(260px, 0.72fr) minmax(0, 1.28fr);
  align-items: start;
  gap: clamp(3rem, 8vw, 8rem);
}

.strategy-faq__intro > .button {
  margin-top: 1.5rem;
}

.strategy-faq__list {
  border-top: 1px solid var(--color-border);
}

.strategy-faq__item {
  border-bottom: 1px solid var(--color-border);
}

.strategy-faq__item h3 {
  margin: 0;
  font-size: inherit;
}

.strategy-faq__trigger {
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
  font-size: 0.98rem;
  font-weight: 700;
  text-align: left;
}

.strategy-faq__trigger > span:first-child {
  color: #8293a5;
  font-family: var(--font-body);
  font-size: 0.68rem;
}

.strategy-faq__trigger .icon {
  justify-self: end;
  color: var(--color-link);
}

.strategy-faq__answer {
  padding: 0 3rem 1.25rem 2.9rem;
}

.strategy-faq__answer p {
  max-width: 680px;
  margin: 0;
  color: var(--color-muted);
  font-size: 0.88rem;
  line-height: 1.75;
}

.strategy-faq__answer[style*="display: none"] {
  padding: 0;
}

.strategy-cta {
  position: relative;
  overflow: hidden;
  background: var(--color-navy);
  color: white;
  text-align: center;
}

.strategy-cta__inner {
  position: relative;
  z-index: 1;
}

.strategy-cta .strategy-eyebrow {
  justify-content: center;
}

.strategy-cta h2 {
  margin: 0;
  color: white;
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 5.2vw, 4.45rem);
  font-weight: 650;
  letter-spacing: -0.06em;
  line-height: 1.07;
}

.strategy-cta__description {
  max-width: 650px;
  margin: 1.3rem auto 0;
  color: #c1cede;
  font-size: 1.03rem;
  line-height: 1.75;
}

.strategy-cta__actions {
  justify-content: center;
}

.strategy-cta__orbit {
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

.strategy-cta__orbit span {
  position: absolute;
  top: 48%;
  left: 0;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-blue);
}

.strategy-cta__orbit span:nth-child(2) {
  top: 12%;
  left: 76%;
  background: var(--color-teal);
}

.strategy-cta__orbit span:nth-child(3) {
  top: 88%;
  left: 90%;
  background: var(--color-orange);
}

@media (max-width: 980px) {
  .strategy-hero__inner {
    min-height: auto;
    grid-template-columns: minmax(0, 1fr) minmax(280px, 0.8fr);
  }

  .strategy-hero h1 {
    font-size: clamp(2.8rem, 6vw, 4.2rem);
  }

  .strategy-section-head,
  .strategy-meaning__intro,
  .strategy-after__intro {
    align-items: start;
    flex-direction: column;
  }

  .strategy-examine__grid {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }

  .strategy-examine-card {
    grid-column: span 3;
  }

  .strategy-examine-card:nth-child(4) {
    grid-column: auto / span 3;
  }

  .strategy-examine-card:nth-child(5) {
    grid-column: 2 / span 4;
  }

  .strategy-framework__steps {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    row-gap: 2rem;
  }

  .strategy-framework__step:nth-child(3) .strategy-framework__marker > i {
    display: none;
  }

  .strategy-fit__layout,
  .strategy-faq__layout {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
}

@media (max-width: 700px) {
  .strategy-hero__inner {
    grid-template-columns: 1fr;
    gap: 0.5rem;
    padding-block: 4.5rem 4rem;
  }

  .strategy-hero h1 {
    font-size: clamp(3rem, 10.5vw, 4.35rem);
  }

  .strategy-hero__visual {
    margin-top: 0.5rem;
  }

  .strategy-hero__actions {
    align-items: stretch;
    flex-direction: column;
  }

  .strategy-hero__actions .button {
    width: 100%;
  }

  .strategy-section-head__aside {
    max-width: 500px;
  }

  .strategy-challenge {
    grid-template-columns: 62px minmax(0, 1fr) 22px;
    gap: 0.8rem;
    padding-block: 1rem;
  }

  .strategy-challenge__visual {
    transform: scale(0.75);
    transform-origin: left center;
  }

  .strategy-challenge__copy h3 {
    font-size: 1.08rem;
  }

  .strategy-challenge__copy p {
    font-size: 0.82rem;
  }

  .strategy-meaning__principles {
    grid-template-columns: 1fr;
  }

  .strategy-meaning__principle,
  .strategy-meaning__principle + .strategy-meaning__principle {
    border-left: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
    padding: 1.1rem 0;
  }

  .strategy-meaning__principle h3 {
    margin-top: 0.55rem;
  }

  .strategy-sequence {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }

  .strategy-sequence > span {
    font-size: 0.75rem;
  }

  .strategy-sequence .icon {
    display: none;
  }

  .strategy-examine__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }

  .strategy-examine-card,
  .strategy-examine-card:nth-child(4),
  .strategy-examine-card:nth-child(5) {
    grid-column: auto;
    min-height: 0;
    padding: 1.2rem;
  }

  .strategy-examine-card h3 {
    margin-top: 0.7rem;
  }

  .strategy-framework__steps {
    grid-template-columns: 1fr;
    gap: 0;
    margin-top: 2.7rem;
  }

  .strategy-framework__step {
    display: grid;
    grid-template-columns: 48px minmax(0, 1fr);
    gap: 1rem;
    min-height: 115px;
  }

  .strategy-framework__marker {
    display: block;
    height: 100%;
  }

  .strategy-framework__marker > span {
    width: 42px;
    height: 42px;
  }

  .strategy-framework__marker > i {
    position: absolute;
    top: 43px;
    bottom: 0;
    left: 20px;
    width: 1px;
    height: auto;
    background: linear-gradient(#8ccce3, #dce3ea);
  }

  .strategy-framework__step:last-child .strategy-framework__marker > i {
    display: none;
  }

  .strategy-framework__content h3 {
    margin-top: 0.25rem;
  }

  .strategy-deliverables__grid {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }

  .strategy-deliverables__grid :deep(.base-card) {
    min-height: 0;
    padding: 1.15rem;
  }

  .strategy-paths {
    grid-template-columns: 1fr;
    margin-top: 2rem;
  }

  .strategy-path {
    min-height: 100px;
    grid-template-columns: 32px minmax(0, 1fr) 34px;
    gap: 0.7rem;
    padding-right: 0;
  }

  .strategy-path:nth-child(odd) {
    margin-right: 0;
  }

  .strategy-path:nth-child(even) {
    border-left: 0;
    padding-left: 0;
  }

  .strategy-path__content strong {
    font-size: 0.97rem;
  }

  .strategy-path__content small {
    font-size: 0.76rem;
  }

  .strategy-fit__list li {
    grid-template-columns: 26px minmax(0, 1fr) 20px;
    gap: 0.55rem;
    font-size: 0.83rem;
  }

  .strategy-faq__trigger {
    grid-template-columns: 28px minmax(0, 1fr) 24px;
    gap: 0.6rem;
    font-size: 0.91rem;
  }

  .strategy-faq__answer {
    padding: 0 1.8rem 1rem 2.4rem;
  }

  .strategy-faq__answer p {
    font-size: 0.84rem;
  }

  .strategy-cta h2 {
    font-size: clamp(2.45rem, 9vw, 3.5rem);
  }

  .strategy-cta__actions {
    align-items: stretch;
    flex-direction: column;
  }

  .strategy-cta__actions .button {
    width: 100%;
  }
}

@media (max-width: 390px) {
  .strategy-hero h1 {
    font-size: 2.8rem;
  }

  .strategy-hero__actions .button {
    padding-inline: 0.9rem;
    font-size: 0.87rem;
  }

  .strategy-challenge {
    grid-template-columns: 48px minmax(0, 1fr) 18px;
    gap: 0.5rem;
  }

  .strategy-challenge__visual {
    transform: scale(0.63);
  }

  .strategy-challenge__copy p {
    font-size: 0.78rem;
  }

  .strategy-challenge__arrow {
    width: 15px;
  }

  .strategy-sequence > span {
    gap: 0.4rem;
    font-size: 0.69rem;
  }

  .strategy-cta h2 {
    font-size: 2.28rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .strategy-page *,
  .strategy-page *::before,
  .strategy-page *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
