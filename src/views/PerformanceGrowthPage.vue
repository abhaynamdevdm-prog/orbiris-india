<script setup>
import { ref } from 'vue'
import Container from '../components/global/Container.vue'
import Button from '../components/global/Button.vue'
import SectionHeading from '../components/global/SectionHeading.vue'
import Icon from '../components/global/Icon.vue'

const performanceGaps = [
  'Campaigns run without a defined business objective.',
  'Audience, offer, creative, and landing page are disconnected.',
  'Clicks are optimized without understanding lead quality.',
  'Tracking is incomplete or inconsistent.',
  'Reporting focuses on activity rather than decisions.',
  'Changes are made without a structured learning process.',
]

const systemElements = [
  { number: '01', title: 'Business objectives', note: 'What needs to change?', type: 'objective' },
  { number: '02', title: 'Audience & intent', note: 'Who is ready to act?', type: 'audience' },
  { number: '03', title: 'Offer & message', note: 'Why is it relevant?', type: 'offer' },
  { number: '04', title: 'Channel & creative', note: 'Where and how to connect?', type: 'channel' },
  { number: '05', title: 'Landing experience', note: 'What happens next?', type: 'experience' },
  { number: '06', title: 'Measurement & learning', note: 'What does the evidence say?', type: 'measurement' },
]

const capabilities = [
  {
    number: '01',
    title: 'Performance Strategy',
    purpose: 'Connect campaign choices to business priorities before activity begins, so channel and budget decisions have a clear reason.',
    focus: ['Business and campaign objectives', 'Audience and intent mapping', 'Channel selection and campaign structure', 'Budget allocation principles'],
    motif: 'strategy',
  },
  {
    number: '02',
    title: 'Paid Acquisition',
    purpose: 'Reach relevant audiences through considered paid campaigns, with a structured approach to setup, review, and testing.',
    focus: ['Google Search Ads', 'Meta Ads', 'Campaign setup and optimization', 'Audience, keyword, and creative testing where appropriate'],
    motif: 'acquisition',
  },
  {
    number: '03',
    title: 'Landing Pages & Conversion Experience',
    purpose: 'Help the journey after an ad stay relevant to its promise and make the next step clear, usable, and appropriate.',
    focus: ['Message-to-page consistency', 'Conversion path and calls to action', 'Forms and mobile usability', 'Conversion friction identification'],
    motif: 'experience',
  },
  {
    number: '04',
    title: 'Measurement & Analytics',
    purpose: 'Build a useful view of what is happening across campaigns and conversion journeys, while being clear about data gaps.',
    focus: ['KPI and event planning', 'Conversion tracking requirements', 'Campaign naming and reporting structure', 'Funnel visibility'],
    motif: 'measurement',
  },
  {
    number: '05',
    title: 'Optimization & Experimentation',
    purpose: 'Turn observations into testable ideas, then use what can be learned to guide deliberate improvements.',
    focus: ['Hypothesis-driven testing', 'Creative and message iteration', 'Audience and channel review', 'Learning documentation'],
    motif: 'optimization',
  },
  {
    number: '06',
    title: 'Growth Reporting & Decisions',
    purpose: 'Make reviews useful for people deciding what to keep, adjust, investigate, or prioritize next.',
    focus: ['Campaign performance reviews', 'Lead quality feedback loops', 'Budget and priority discussions', 'Clear recommendations and limitations'],
    motif: 'decisions',
  },
]

const loopStages = ['Define', 'Launch', 'Measure', 'Learn', 'Improve', 'Repeat']

const workStages = [
  { number: '01', title: 'Align', description: 'Agree on business goals, constraints, and success criteria.' },
  { number: '02', title: 'Audit', description: 'Review relevant campaigns, tracking, offers, and conversion journeys.' },
  { number: '03', title: 'Plan', description: 'Define channel priorities, measurement needs, budget assumptions, and tests.' },
  { number: '04', title: 'Execute', description: 'Implement the agreed campaign and conversion improvements.' },
  { number: '05', title: 'Learn', description: 'Evaluate evidence, document findings, and prioritize next actions.' },
]

const measurementStages = [
  { label: 'Visibility', examples: 'Impressions · reach', note: 'Did the message appear?' },
  { label: 'Engagement', examples: 'Clicks · click-through rate', note: 'Did people respond to the ad?' },
  { label: 'Experience', examples: 'Landing-page behavior', note: 'What intent signals are visible?' },
  { label: 'Response', examples: 'Leads · conversion rate', note: 'Did someone take the next step?' },
  { label: 'Business relevance', examples: 'Qualified leads · downstream outcomes', note: 'Where available, what followed?' },
]

const suitableScenarios = [
  'You are investing in ads but lack clear performance visibility.',
  'Your team wants better alignment between ads and landing pages.',
  'You need to understand lead quality, not only lead volume.',
  'Tracking or reporting gaps make decisions difficult.',
  'You want a more structured approach to testing and optimization.',
]

const questions = [
  {
    question: 'Do you manage Google Ads and Meta Ads?',
    answer: 'Paid acquisition can include Google Search Ads and Meta Ads where they fit the business objectives, audience, offer, and available resources. The relevant channels and responsibilities are agreed as part of the engagement scope.',
  },
  {
    question: 'Can you guarantee leads or sales?',
    answer: 'No. Leads, sales, and other commercial outcomes depend on many factors, including market demand, offer, economics, competition, campaign execution, customer experience, and operational capacity. We can agree on objectives and measurement, but cannot guarantee outcomes.',
  },
  {
    question: 'Do we need an existing advertising account?',
    answer: 'Not necessarily. Existing accounts can be reviewed where access is available. If you are starting from scratch, account setup requirements and responsibilities can be discussed and agreed before work begins.',
  },
  {
    question: 'Why are tracking and landing pages important?',
    answer: 'Tracking helps interpret what happens after someone engages, while a relevant landing experience helps them understand the offer and next step. Gaps in either can limit what a team can learn from campaign activity.',
  },
  {
    question: 'Do you work with existing campaigns?',
    answer: 'Yes, existing campaigns may be reviewed in context, including objectives, setup, available data, landing pages, and lead-quality feedback. Recommendations depend on what is accessible and the agreed scope.',
  },
  {
    question: 'How is advertising budget decided?',
    answer: 'Budget assumptions should reflect business goals, audience, offer economics, channel costs, available evidence, and operational capacity. We discuss those constraints and clarify responsibilities; there is no universal budget that suits every business.',
  },
]

const openQuestion = ref(null)

function toggleQuestion(index) {
  openQuestion.value = openQuestion.value === index ? null : index
}

function onQuestionKeydown(event, index) {
  if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return

  event.preventDefault()
  const buttons = [...event.currentTarget.closest('.growth-faq__list').querySelectorAll('.growth-faq__trigger')]
  const nextIndex = event.key === 'Home'
    ? 0
    : event.key === 'End'
      ? buttons.length - 1
      : (index + (event.key === 'ArrowDown' ? 1 : -1) + buttons.length) % buttons.length
  buttons[nextIndex]?.focus()
}
</script>

<template>
  <div class="growth-page">
    <section class="growth-hero">
      <Container class="growth-hero__layout">
        <div class="growth-hero__copy">
          <p class="growth-eyebrow"><span></span> PERFORMANCE &amp; GROWTH</p>
          <h1>Turn marketing activity into measurable business learning.</h1>
          <p class="growth-hero__description">
            Performance marketing should connect business objectives, audience intent, campaign strategy, landing-page experience, and meaningful measurement—not treat each as a separate task.
          </p>
          <div class="growth-hero__actions">
            <Button to="/contact">Discuss Your Business <Icon name="arrow" :size="17" /></Button>
            <Button to="/solutions/strategy" variant="secondary" class="growth-button--outline">Explore Strategy &amp; Discovery</Button>
          </div>
          <p class="growth-hero__note">Acquisition, experience, measurement, and learning—working together.</p>
        </div>

        <div class="growth-hero-map" role="img" aria-label="Illustration connecting business objectives to acquisition channels, conversion experience, and measurement">
          <div class="growth-hero-map__topline"><span>PERFORMANCE SYSTEM</span><span>CONNECTED VIEW / 01</span></div>
          <div class="growth-hero-map__diagram">
            <svg class="growth-hero-map__lines" viewBox="0 0 520 390" aria-hidden="true">
              <path d="M260 195 115 87M260 195 405 87M260 195 405 303M260 195 115 303" />
              <path class="growth-hero-map__line--dash" d="M115 87H405M115 303H405" />
              <circle cx="260" cy="195" r="132" />
              <circle class="growth-hero-map__orbit--inner" cx="260" cy="195" r="86" />
            </svg>
            <div class="growth-hero-map__core"><span>BUSINESS</span><strong>OBJECTIVE</strong><i></i></div>
            <div class="growth-hero-map__node growth-hero-map__node--objectives"><i></i><span>01</span><strong>Objectives</strong></div>
            <div class="growth-hero-map__node growth-hero-map__node--acquisition"><i></i><span>02</span><strong>Acquisition</strong></div>
            <div class="growth-hero-map__node growth-hero-map__node--experience"><i></i><span>03</span><strong>Experience</strong></div>
            <div class="growth-hero-map__node growth-hero-map__node--measurement"><i></i><span>04</span><strong>Measurement</strong></div>
          </div>
          <div class="growth-hero-map__legend"><span><i></i> Intent</span><span><i></i> Action</span><span><i></i> Evidence</span></div>
        </div>
      </Container>
      <div class="growth-hero__grid" aria-hidden="true"></div>
    </section>

    <section class="growth-gap growth-section">
      <Container>
        <div class="growth-section-head">
          <SectionHeading
            eyebrow="The performance gap"
            title="Activity alone does not explain what is working."
            description="When campaign decisions, customer experience, and measurement are disconnected, teams can struggle to see how marketing activity relates to business priorities."
          />
          <p class="growth-section-head__aside">These are possible gaps to investigate, not assumptions about every business.</p>
        </div>
        <ol class="growth-gap-list">
          <li v-for="(gap, index) in performanceGaps" :key="gap">
            <span>{{ String(index + 1).padStart(2, '0') }}</span>
            <p>{{ gap }}</p>
            <i aria-hidden="true"><b></b><b></b><b></b></i>
          </li>
        </ol>
      </Container>
    </section>

    <section class="growth-system growth-section">
      <Container>
        <div class="growth-system__intro">
          <SectionHeading
            eyebrow="Our point of view"
            title="Performance is a system, not a single campaign."
            description="Each decision influences the next. A coherent system connects the reason for marketing with the people it reaches, the experience it creates, and what the team can learn."
          />
          <p class="growth-system__aside">A useful signal gains meaning when it is read in context.</p>
        </div>
        <div class="growth-system-map" role="img" aria-label="Performance system linking business objectives, audience and intent, offer and message, channel and creative, landing-page experience, and measurement and learning">
          <div class="growth-system-map__center"><span>CONNECTED</span><strong>PERFORMANCE</strong><small>one learning system</small></div>
          <div v-for="(element, index) in systemElements" :key="element.number" class="growth-system-map__item" :class="`growth-system-map__item--${element.type}`">
            <span>{{ element.number }}</span><strong>{{ element.title }}</strong><small>{{ element.note }}</small>
            <i aria-hidden="true">{{ String(index + 1).padStart(2, '0') }}</i>
          </div>
          <svg class="growth-system-map__connectors" viewBox="0 0 900 440" aria-hidden="true">
            <path d="M450 220 175 80M450 220 450 72M450 220 725 80M450 220 175 360M450 220 450 370M450 220 725 360" />
            <circle cx="450" cy="220" r="155" />
          </svg>
        </div>
        <p class="growth-system__caption">The system adapts to the business; not every engagement needs every channel or capability.</p>
      </Container>
      <div class="growth-system__grid" aria-hidden="true"></div>
    </section>

    <section class="growth-capabilities growth-section">
      <Container>
        <SectionHeading
          eyebrow="Performance & growth capabilities"
          title="Connect the work from first contact to next decision."
          description="Capabilities can be combined where relevant. Scope depends on your goals, current setup, available information, and agreed responsibilities."
        />
        <div class="growth-capability-list">
          <article v-for="(capability, index) in capabilities" :key="capability.number" class="growth-capability" :class="{ 'growth-capability--reverse': index % 2 }">
            <div class="growth-capability__visual" :class="`growth-capability__visual--${capability.motif}`" aria-hidden="true">
              <div class="growth-capability__visual-top"><span>GROWTH SYSTEM</span><span>{{ capability.number }}</span></div>
              <div class="growth-capability__motif">
                <i></i><i></i><i></i><i></i><b></b>
              </div>
              <div class="growth-capability__visual-foot"><span>INTENT</span><span>→</span><span>EVIDENCE</span></div>
            </div>
            <div class="growth-capability__content">
              <span class="growth-capability__number">{{ capability.number }} <i></i> CAPABILITY</span>
              <h3>{{ capability.title }}</h3>
              <p>{{ capability.purpose }}</p>
              <ul><li v-for="item in capability.focus" :key="item">{{ item }}</li></ul>
            </div>
          </article>
        </div>
      </Container>
    </section>

    <section class="growth-loop growth-section">
      <Container>
        <div class="growth-loop__intro">
          <SectionHeading
            eyebrow="The growth loop"
            title="Every cycle should make the next decision clearer."
            description="A structured cycle makes room to test an idea, review the available evidence, and improve the next action. Learning—not activity for its own sake—is what carries forward."
          />
          <p class="growth-loop__aside">Define → Launch → Measure → Learn → Improve → Repeat</p>
        </div>
        <div class="growth-loop-visual" role="img" aria-label="Continuous growth loop: Define, Launch, Measure, Learn, Improve, Repeat">
          <svg viewBox="0 0 900 310" aria-hidden="true">
            <path d="M98 156H792" />
            <path class="growth-loop-visual__feedback" d="M798 180C760 275 142 275 102 180" />
          </svg>
          <ol>
            <li v-for="(stage, index) in loopStages" :key="stage">
              <span>{{ String(index + 1).padStart(2, '0') }}</span><i></i><strong>{{ stage }}</strong>
            </li>
          </ol>
          <p><span></span>Evidence and context inform what happens next</p>
        </div>
        <p class="growth-loop__note">A cycle creates learning only when objectives and measurement are clear enough to interpret.</p>
      </Container>
    </section>

    <section class="growth-process growth-section">
      <Container>
        <div class="growth-section-head">
          <SectionHeading
            eyebrow="How we approach performance work"
            title="A clear route from alignment to learning."
            description="The sequence keeps business context, execution, and review connected throughout the work."
          />
          <p class="growth-section-head__aside">Scope depends on existing accounts, available data, business needs, and agreed responsibilities.</p>
        </div>
        <ol class="growth-process-list">
          <li v-for="(stage, index) in workStages" :key="stage.number" class="growth-process-step">
            <div class="growth-process-step__marker"><span>{{ stage.number }}</span><i v-if="index < workStages.length - 1"></i></div>
            <div><h3>{{ stage.title }}</h3><p>{{ stage.description }}</p></div>
          </li>
        </ol>
      </Container>
    </section>

    <section class="growth-measure growth-section">
      <Container class="growth-measure__layout">
        <div class="growth-measure__copy">
          <SectionHeading
            eyebrow="Meaningful measurement"
            title="Move from activity metrics toward business-relevant evidence."
            description="Metrics can help answer different questions. Their meaning depends on the objective, customer journey, available data, and what happens beyond the platform."
          />
          <p class="growth-measure__caveat">A click is not a sale. A lead is not automatically a qualified opportunity. Interpret signals in context and be clear about what cannot be measured.</p>
        </div>
        <div class="growth-measure-panel" role="img" aria-label="Conceptual measurement illustration showing visibility, engagement, experience, response, and business relevance. No campaign data or results are shown.">
          <div class="growth-measure-panel__head"><div><span>MEASUREMENT FRAMEWORK</span><strong>From signal to context</strong></div><span class="growth-measure-panel__label">CONCEPTUAL<br>ILLUSTRATION</span></div>
          <div class="growth-measure-panel__axis"><span>ACTIVITY SIGNALS</span><i></i><span>BUSINESS CONTEXT</span></div>
          <ol>
            <li v-for="(stage, index) in measurementStages" :key="stage.label">
              <span class="growth-measure-panel__index">{{ String(index + 1).padStart(2, '0') }}</span>
              <div><strong>{{ stage.label }}</strong><span>{{ stage.examples }}</span><small>{{ stage.note }}</small></div>
              <i :class="`growth-measure-panel__dot--${index + 1}`"></i>
            </li>
          </ol>
          <p><span></span>Illustrative structure only — no campaign results or numerical data.</p>
        </div>
      </Container>
    </section>

    <section class="growth-fit growth-section">
      <Container class="growth-fit__layout">
        <div>
          <SectionHeading
            eyebrow="Who this is for"
            title="A useful fit when the team needs clearer signals."
            description="Paid advertising is not right for every business or every stage. The channel decision should follow the audience, offer, economics, and operational readiness."
          />
          <p class="growth-fit__note">The first question is whether a paid channel is appropriate—not simply which one to use.</p>
        </div>
        <ul class="growth-fit-list">
          <li v-for="(scenario, index) in suitableScenarios" :key="scenario"><span>{{ String(index + 1).padStart(2, '0') }}</span><p>{{ scenario }}</p><Icon name="arrow" :size="16" /></li>
        </ul>
      </Container>
    </section>

    <section class="growth-faq growth-section">
      <Container class="growth-faq__layout">
        <div>
          <SectionHeading
            eyebrow="Frequently asked questions"
            title="Clear expectations before campaign decisions."
            description="Performance work starts with honest discussion about goals, evidence, and constraints."
          />
          <p class="growth-faq__aside">Have a question about your situation? Start with a conversation about the context.</p>
          <Button to="/contact">Talk with us <Icon name="arrow" :size="16" /></Button>
        </div>
        <div class="growth-faq__list">
          <article v-for="(item, index) in questions" :key="item.question" class="growth-faq__item">
            <h3>
              <button
                :id="`growth-question-${index}`"
                class="growth-faq__trigger"
                type="button"
                :aria-expanded="openQuestion === index"
                :aria-controls="`growth-answer-${index}`"
                @click="toggleQuestion(index)"
                @keydown="onQuestionKeydown($event, index)"
              >
                <span class="growth-faq__number">{{ String(index + 1).padStart(2, '0') }}</span>
                <span>{{ item.question }}</span>
                <span class="growth-faq__toggle" aria-hidden="true">{{ openQuestion === index ? '−' : '+' }}</span>
              </button>
            </h3>
            <div v-show="openQuestion === index" :id="`growth-answer-${index}`" class="growth-faq__answer" role="region" :aria-labelledby="`growth-question-${index}`">
              <p>{{ item.answer }}</p>
            </div>
          </article>
        </div>
      </Container>
    </section>

    <section class="growth-cta growth-section">
      <Container class="growth-cta__layout">
        <div>
          <p class="growth-eyebrow"><span></span> GROW WITH CLARITY</p>
          <h2>Make the next growth decision with better context.</h2>
          <p>Start with the business question, then explore what the evidence, customer journey, and available resources can support.</p>
        </div>
        <div class="growth-cta__actions">
          <Button to="/contact">Start a Conversation <Icon name="arrow" :size="17" /></Button>
          <RouterLink to="/solutions/strategy">Explore Strategy &amp; Discovery <Icon name="arrow" :size="16" /></RouterLink>
        </div>
      </Container>
      <div class="growth-cta__orbit growth-cta__orbit--one" aria-hidden="true"></div>
      <div class="growth-cta__orbit growth-cta__orbit--two" aria-hidden="true"></div>
    </section>
  </div>
</template>

<style scoped>
.growth-page {
  overflow: hidden;
  background: var(--color-background);
}

.growth-section {
  position: relative;
  padding-block: clamp(4rem, 8vw, 7rem);
}

.growth-hero {
  position: relative;
  overflow: hidden;
  padding-block: clamp(4.5rem, 8vw, 7.5rem);
  background: var(--color-navy);
  color: var(--color-white);
}

.growth-hero__layout {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(390px, 1.05fr);
  align-items: center;
  gap: clamp(2.5rem, 6vw, 5.5rem);
}

.growth-hero__copy {
  max-width: 620px;
}

.growth-eyebrow {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  margin: 0 0 1.4rem;
  color: #a8dff4;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.16em;
}

.growth-eyebrow > span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-teal);
  box-shadow: 0 0 0 5px rgba(0, 209, 167, 0.1);
}

.growth-hero h1 {
  max-width: 680px;
  margin: 0;
  color: white;
  font-family: var(--font-display);
  font-size: clamp(2.55rem, 5.4vw, 4.85rem);
  font-weight: 700;
  letter-spacing: -0.065em;
  line-height: 1.05;
}

.growth-hero__description {
  max-width: 590px;
  margin: 1.5rem 0 0;
  color: #bacbda;
  font-size: clamp(1rem, 1.4vw, 1.12rem);
  line-height: 1.75;
}

.growth-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 2rem;
}

.growth-button--outline {
  border-color: rgba(207, 228, 240, 0.35);
  background: transparent;
  color: white;
}

.growth-button--outline:hover {
  border-color: var(--color-blue);
  background: rgba(255, 255, 255, 0.05);
}

.growth-hero__note {
  margin: 1.3rem 0 0;
  color: #94abc0;
  font-size: 0.8rem;
}

.growth-hero__grid,
.growth-system__grid {
  position: absolute;
  inset: 0;
  opacity: 0.17;
  pointer-events: none;
  background-image: linear-gradient(rgba(133, 180, 208, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(133, 180, 208, 0.15) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: linear-gradient(90deg, transparent, black 70%);
}

.growth-hero-map {
  position: relative;
  z-index: 1;
  min-width: 0;
  border: 1px solid rgba(160, 197, 219, 0.24);
  border-radius: 1.2rem;
  padding: 1rem clamp(0.7rem, 2vw, 1.4rem) 1rem;
  background: linear-gradient(145deg, rgba(21, 53, 83, 0.92), rgba(9, 29, 52, 0.93));
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.18);
}

.growth-hero-map__topline,
.growth-hero-map__legend {
  display: flex;
  justify-content: space-between;
  gap: 0.6rem;
  color: #89abc2;
  font-size: 0.58rem;
  font-weight: 700;
  letter-spacing: 0.12em;
}

.growth-hero-map__diagram {
  position: relative;
  width: 100%;
  max-width: 520px;
  aspect-ratio: 520 / 390;
  margin-inline: auto;
}

.growth-hero-map__lines {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
  fill: none;
  stroke: rgba(0, 180, 255, 0.4);
  stroke-width: 1;
}

.growth-hero-map__lines .growth-hero-map__line--dash {
  stroke: rgba(0, 209, 167, 0.27);
  stroke-dasharray: 4 7;
}

.growth-hero-map__lines circle {
  stroke: rgba(123, 178, 209, 0.2);
}

.growth-hero-map__lines .growth-hero-map__orbit--inner {
  stroke: rgba(0, 209, 167, 0.32);
  stroke-dasharray: 2 6;
}

.growth-hero-map__core {
  position: absolute;
  top: 50%;
  left: 50%;
  display: grid;
  width: clamp(98px, 15vw, 138px);
  aspect-ratio: 1;
  align-content: center;
  justify-items: center;
  border: 1px solid rgba(0, 180, 255, 0.58);
  border-radius: 50%;
  background: #143454;
  box-shadow: 0 0 0 10px rgba(0, 180, 255, 0.06), 0 0 38px rgba(0, 180, 255, 0.1);
  transform: translate(-50%, -50%);
}

.growth-hero-map__core span {
  color: #a7c5d8;
  font-size: 0.53rem;
  letter-spacing: 0.14em;
}

.growth-hero-map__core strong {
  color: white;
  font-family: var(--font-display);
  font-size: clamp(0.7rem, 1.3vw, 0.88rem);
  letter-spacing: 0.02em;
}

.growth-hero-map__core i {
  width: 5px;
  height: 5px;
  margin-top: 0.4rem;
  border-radius: 50%;
  background: var(--color-teal);
}

.growth-hero-map__node {
  position: absolute;
  display: grid;
  grid-template-columns: 10px auto;
  align-items: center;
  gap: 0.15rem 0.45rem;
  min-width: 104px;
  border: 1px solid rgba(150, 187, 210, 0.3);
  border-radius: 0.55rem;
  padding: 0.55rem 0.65rem;
  background: #102b49;
}

.growth-hero-map__node > i {
  grid-row: span 2;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--color-blue);
}

.growth-hero-map__node > span {
  color: #7ba5c0;
  font-size: 0.52rem;
  font-weight: 700;
}

.growth-hero-map__node strong {
  color: #f0f8fc;
  font-size: clamp(0.65rem, 1vw, 0.77rem);
}

.growth-hero-map__node--objectives {
  top: 8%;
  left: 5%;
}

.growth-hero-map__node--acquisition {
  top: 8%;
  right: 5%;
}

.growth-hero-map__node--acquisition > i,
.growth-hero-map__node--measurement > i {
  background: var(--color-teal);
}

.growth-hero-map__node--experience {
  right: 5%;
  bottom: 8%;
}

.growth-hero-map__node--experience > i {
  background: var(--color-orange);
}

.growth-hero-map__node--measurement {
  bottom: 8%;
  left: 5%;
}

.growth-hero-map__legend {
  justify-content: center;
  gap: clamp(0.8rem, 3vw, 1.7rem);
  padding-top: 0.9rem;
  border-top: 1px solid rgba(166, 197, 217, 0.16);
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.growth-hero-map__legend span {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}

.growth-hero-map__legend i {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-blue);
}

.growth-hero-map__legend span:nth-child(2) i {
  background: var(--color-teal);
}

.growth-hero-map__legend span:nth-child(3) i {
  background: var(--color-orange);
}

.growth-gap {
  background: var(--color-white);
}

.growth-section-head,
.growth-system__intro,
.growth-loop__intro {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 2rem;
}

.growth-section-head .section-heading,
.growth-system__intro .section-heading,
.growth-loop__intro .section-heading {
  max-width: 760px;
}

.growth-section-head__aside,
.growth-system__aside,
.growth-loop__aside {
  max-width: 260px;
  flex: 0 0 auto;
  margin: 0 0 0.35rem;
  color: var(--color-muted);
  font-size: 0.8rem;
  line-height: 1.65;
}

.growth-gap-list {
  margin: clamp(2.7rem, 5vw, 4rem) 0 0;
  border-top: 1px solid var(--color-border);
  padding: 0;
  list-style: none;
}

.growth-gap-list li {
  display: grid;
  min-height: 76px;
  grid-template-columns: 48px minmax(0, 1fr) 74px;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid var(--color-border);
}

.growth-gap-list li > span {
  color: #8293a5;
  font-size: 0.68rem;
  font-weight: 700;
}

.growth-gap-list p {
  margin: 0;
  color: var(--color-text);
  font-family: var(--font-display);
  font-size: clamp(1rem, 2vw, 1.23rem);
  font-weight: 600;
  letter-spacing: -0.025em;
}

.growth-gap-list li > i {
  display: flex;
  justify-content: end;
  gap: 5px;
}

.growth-gap-list b {
  width: 6px;
  height: 6px;
  border: 1px solid #9aaaba;
  border-radius: 50%;
}

.growth-gap-list li:nth-child(3n) b:nth-child(2),
.growth-gap-list li:nth-child(2n) b:first-child {
  border-color: var(--color-teal);
  background: var(--color-teal);
}

.growth-gap-list li:nth-child(3n) b:first-child {
  border-color: var(--color-orange);
  background: var(--color-orange);
}

.growth-system {
  overflow: hidden;
  background: var(--color-navy);
  color: white;
}

.growth-system .section-heading__title,
.growth-loop .section-heading__title {
  color: white;
}

.growth-system .section-heading__description,
.growth-loop .section-heading__description {
  color: #b6c5d5;
}

.growth-system .section-heading__eyebrow,
.growth-loop .section-heading__eyebrow {
  border-color: rgba(0, 180, 255, 0.35);
  background: rgba(0, 180, 255, 0.12);
  color: #b8eaff;
}

.growth-system__intro,
.growth-system-map,
.growth-system__caption,
.growth-loop__intro,
.growth-loop-visual,
.growth-loop__note {
  position: relative;
  z-index: 1;
}

.growth-system__aside {
  border-left: 2px solid var(--color-teal);
  padding-left: 0.9rem;
  color: #c2d4e1;
}

.growth-system-map {
  position: relative;
  width: min(100%, 900px);
  height: 440px;
  margin: 2.5rem auto 0;
}

.growth-system-map__connectors {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  fill: none;
  stroke: rgba(0, 180, 255, 0.35);
  stroke-width: 1;
}

.growth-system-map__connectors circle {
  stroke: rgba(0, 209, 167, 0.25);
  stroke-dasharray: 4 7;
}

.growth-system-map__center {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  display: grid;
  width: 154px;
  aspect-ratio: 1;
  align-content: center;
  justify-items: center;
  border: 1px solid rgba(0, 180, 255, 0.6);
  border-radius: 50%;
  background: #112d4c;
  box-shadow: 0 0 0 13px rgba(0, 180, 255, 0.055);
  transform: translate(-50%, -50%);
}

.growth-system-map__center span {
  color: #9ebbd0;
  font-size: 0.58rem;
  letter-spacing: 0.15em;
}

.growth-system-map__center strong {
  color: white;
  font-family: var(--font-display);
  font-size: 0.9rem;
}

.growth-system-map__center small {
  margin-top: 0.35rem;
  color: #7ba5c0;
  font-size: 0.63rem;
}

.growth-system-map__item {
  position: absolute;
  z-index: 1;
  display: grid;
  width: 196px;
  min-height: 78px;
  grid-template-columns: 28px minmax(0, 1fr);
  align-content: center;
  gap: 0.2rem 0.55rem;
  border: 1px solid rgba(155, 191, 213, 0.3);
  border-radius: 0.65rem;
  padding: 0.7rem 0.8rem;
  background: #102845;
}

.growth-system-map__item > span {
  grid-row: span 2;
  align-self: start;
  color: #70c7ea;
  font-size: 0.63rem;
  font-weight: 700;
}

.growth-system-map__item strong {
  color: #f2f8fc;
  font-family: var(--font-display);
  font-size: 0.79rem;
}

.growth-system-map__item small {
  color: #9db3c4;
  font-size: 0.65rem;
  line-height: 1.4;
}

.growth-system-map__item > i {
  position: absolute;
  top: 50%;
  right: -4px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--color-blue);
  font-size: 0;
  transform: translateY(-50%);
}

.growth-system-map__item--objective {
  top: 3%;
  left: 4%;
}

.growth-system-map__item--audience {
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}

.growth-system-map__item--offer {
  top: 3%;
  right: 4%;
}

.growth-system-map__item--channel {
  right: 4%;
  bottom: 3%;
}

.growth-system-map__item--experience {
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}

.growth-system-map__item--measurement {
  bottom: 3%;
  left: 4%;
}

.growth-system-map__item--audience > i,
.growth-system-map__item--experience > i {
  background: var(--color-teal);
}

.growth-system-map__item--offer > i {
  background: var(--color-orange);
}

.growth-system__caption {
  margin: -0.5rem 0 0;
  color: #9eb4c6;
  font-size: 0.77rem;
  text-align: center;
}

.growth-capabilities {
  background: #f0f4f8;
}

.growth-capability-list {
  margin-top: clamp(3rem, 6vw, 5rem);
  border-top: 1px solid var(--color-border);
}

.growth-capability {
  display: grid;
  min-height: 340px;
  grid-template-columns: 0.84fr 1.16fr;
  align-items: stretch;
  border-bottom: 1px solid var(--color-border);
}

.growth-capability--reverse .growth-capability__visual {
  order: 2;
}

.growth-capability--reverse .growth-capability__content {
  order: 1;
}

.growth-capability__visual {
  position: relative;
  display: grid;
  min-height: 300px;
  overflow: hidden;
  place-items: center;
  background:
    linear-gradient(rgba(11, 31, 59, 0.045) 1px, transparent 1px),
    linear-gradient(90deg, rgba(11, 31, 59, 0.045) 1px, transparent 1px),
    #e6edf3;
  background-size: 30px 30px;
}

.growth-capability__visual--acquisition,
.growth-capability__visual--optimization {
  background-color: #e7f0ef;
}

.growth-capability__visual--experience,
.growth-capability__visual--decisions {
  background-color: #e9edf5;
}

.growth-capability__visual-top,
.growth-capability__visual-foot {
  position: absolute;
  right: 1rem;
  left: 1rem;
  display: flex;
  justify-content: space-between;
  color: #758a9c;
  font-size: 0.59rem;
  font-weight: 700;
  letter-spacing: 0.12em;
}

.growth-capability__visual-top {
  top: 0.9rem;
}

.growth-capability__visual-foot {
  bottom: 0.9rem;
}

.growth-capability__visual-foot span:nth-child(2) {
  color: #0988b4;
}

.growth-capability__motif {
  position: relative;
  display: grid;
  width: min(55%, 200px);
  aspect-ratio: 1;
  place-items: center;
}

.growth-capability__motif i {
  position: absolute;
  width: 100%;
  aspect-ratio: 1;
  border: 1px solid rgba(11, 31, 59, 0.28);
  border-radius: 50%;
}

.growth-capability__motif i:nth-child(2) {
  width: 72%;
  border-color: rgba(0, 180, 255, 0.62);
  border-style: dashed;
}

.growth-capability__motif i:nth-child(3) {
  width: 43%;
  border-color: rgba(0, 209, 167, 0.8);
}

.growth-capability__motif i:nth-child(4) {
  width: 125%;
  height: 1px;
  border: 0;
  border-radius: 0;
  background: rgba(11, 31, 59, 0.38);
  transform: rotate(-34deg);
}

.growth-capability__motif b {
  z-index: 1;
  width: 15%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: var(--color-blue);
  box-shadow: 0 0 0 8px rgba(0, 180, 255, 0.12);
}

.growth-capability__visual--acquisition .growth-capability__motif i:first-child {
  transform: scaleX(0.56) rotate(36deg);
}

.growth-capability__visual--experience .growth-capability__motif i:first-child {
  border-radius: 12%;
  transform: rotate(12deg);
}

.growth-capability__visual--measurement .growth-capability__motif i:nth-child(2) {
  border-radius: 8%;
  transform: rotate(45deg);
}

.growth-capability__visual--optimization .growth-capability__motif i:nth-child(4) {
  height: 3px;
  background: linear-gradient(90deg, transparent, var(--color-blue), var(--color-teal), transparent);
}

.growth-capability__visual--decisions .growth-capability__motif i:nth-child(3) {
  width: 30%;
  border-style: dotted;
}

.growth-capability__content {
  align-self: center;
  padding: clamp(1.6rem, 4vw, 3.5rem) clamp(1.4rem, 5vw, 4.5rem);
}

.growth-capability__number {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  color: #778b9d;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.12em;
}

.growth-capability__number i {
  width: 20px;
  height: 1px;
  background: var(--color-teal);
}

.growth-capability__content h3 {
  margin: 0.8rem 0 0;
  color: var(--color-navy);
  font-family: var(--font-display);
  font-size: clamp(1.4rem, 2.5vw, 1.9rem);
  letter-spacing: -0.04em;
  line-height: 1.2;
}

.growth-capability__content > p {
  max-width: 610px;
  margin: 0.7rem 0 0;
  color: var(--color-muted);
  font-size: 0.9rem;
  line-height: 1.7;
}

.growth-capability__content ul {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.65rem 1.2rem;
  margin: 1.2rem 0 0;
  padding: 0;
  list-style: none;
}

.growth-capability__content li {
  position: relative;
  padding-left: 1rem;
  color: #43566b;
  font-size: 0.79rem;
  line-height: 1.5;
}

.growth-capability__content li::before {
  position: absolute;
  top: 0.55em;
  left: 0;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--color-teal);
  content: '';
}

.growth-loop {
  overflow: hidden;
  background: #0a1b30;
  color: white;
}

.growth-loop__aside {
  border-left: 2px solid var(--color-teal);
  padding-left: 0.9rem;
  color: #c2d4e1;
}

.growth-loop-visual {
  margin-top: 3.2rem;
  border-block: 1px solid rgba(255, 255, 255, 0.16);
  padding-block: 1.7rem;
}

.growth-loop-visual svg {
  position: absolute;
  inset: 0 0 2rem;
  width: 100%;
  height: calc(100% - 2rem);
  fill: none;
  stroke: rgba(0, 180, 255, 0.54);
  stroke-width: 1;
}

.growth-loop-visual svg .growth-loop-visual__feedback {
  stroke: rgba(0, 209, 167, 0.4);
  stroke-dasharray: 5 8;
}

.growth-loop-visual ol {
  position: relative;
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 0.8rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.growth-loop-visual li {
  display: grid;
  min-width: 0;
  justify-items: center;
  gap: 0.6rem;
  text-align: center;
}

.growth-loop-visual li > span {
  color: #80c8e8;
  font-size: 0.63rem;
  font-weight: 700;
}

.growth-loop-visual li > i {
  width: 14px;
  height: 14px;
  border: 1px solid var(--color-blue);
  border-radius: 50%;
  background: #0a1b30;
  box-shadow: 0 0 0 6px rgba(0, 180, 255, 0.08);
}

.growth-loop-visual li:nth-child(3n) > i {
  border-color: var(--color-teal);
}

.growth-loop-visual li:nth-child(5) > i {
  border-color: var(--color-orange);
}

.growth-loop-visual li > strong {
  color: #f0f7fb;
  font-family: var(--font-display);
  font-size: clamp(0.78rem, 1.5vw, 1rem);
}

.growth-loop-visual > p {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  margin: 2rem 0 0;
  color: #a8bece;
  font-size: 0.76rem;
  text-align: center;
}

.growth-loop-visual > p span {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-teal);
}

.growth-loop__note {
  margin: 1rem 0 0;
  color: #8fa7ba;
  font-size: 0.75rem;
  text-align: center;
}

.growth-process {
  background: var(--color-white);
}

.growth-process-list {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  margin: clamp(3rem, 5vw, 4.5rem) 0 0;
  border-top: 1px solid var(--color-border);
  padding: 0;
  list-style: none;
}

.growth-process-step {
  position: relative;
  padding: 1.15rem 1.2rem 0 0;
}

.growth-process-step + .growth-process-step {
  border-left: 1px solid var(--color-border);
  padding-left: 1.2rem;
}

.growth-process-step__marker {
  position: relative;
  display: flex;
  align-items: center;
  min-height: 20px;
  color: #0c8ab5;
  font-size: 0.68rem;
  font-weight: 700;
}

.growth-process-step__marker i {
  position: absolute;
  top: -1.15rem;
  right: 0;
  left: 2rem;
  height: 1px;
  background: linear-gradient(90deg, var(--color-blue), transparent);
}

.growth-process-step h3 {
  margin: 1.2rem 0 0.45rem;
  color: var(--color-navy);
  font-family: var(--font-display);
  font-size: clamp(1.1rem, 1.7vw, 1.35rem);
  letter-spacing: -0.03em;
}

.growth-process-step p {
  margin: 0;
  color: var(--color-muted);
  font-size: 0.82rem;
  line-height: 1.65;
}

.growth-measure {
  background: #f0f4f8;
}

.growth-measure__layout {
  display: grid;
  grid-template-columns: minmax(0, 0.8fr) minmax(400px, 1.2fr);
  align-items: center;
  gap: clamp(2.5rem, 7vw, 6rem);
}

.growth-measure__copy .section-heading__description {
  max-width: 570px;
}

.growth-measure__caveat {
  max-width: 560px;
  margin: 1.5rem 0 0;
  border-left: 2px solid var(--color-orange);
  padding-left: 1rem;
  color: #52677c;
  font-size: 0.86rem;
  line-height: 1.7;
}

.growth-measure-panel {
  min-width: 0;
  border: 1px solid #cbd7e1;
  border-radius: 0.9rem;
  padding: clamp(1rem, 2.5vw, 1.6rem);
  background: white;
  box-shadow: 0 14px 44px rgba(11, 31, 59, 0.06);
}

.growth-measure-panel__head {
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 1rem;
}

.growth-measure-panel__head > div {
  display: grid;
  gap: 0.35rem;
}

.growth-measure-panel__head > div > span {
  color: #6b8296;
  font-size: 0.58rem;
  font-weight: 700;
  letter-spacing: 0.13em;
}

.growth-measure-panel__head strong {
  color: var(--color-navy);
  font-family: var(--font-display);
  font-size: 1.1rem;
  letter-spacing: -0.025em;
}

.growth-measure-panel__label {
  border: 1px solid rgba(255, 176, 32, 0.55);
  border-radius: 0.3rem;
  padding: 0.35rem 0.45rem;
  color: #855f1a;
  font-size: 0.52rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  line-height: 1.45;
  text-align: center;
}

.growth-measure-panel__axis {
  display: grid;
  grid-template-columns: auto minmax(25px, 1fr) auto;
  align-items: center;
  gap: 0.7rem;
  margin-top: 1.3rem;
  color: #8092a3;
  font-size: 0.5rem;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.growth-measure-panel__axis i {
  height: 1px;
  background: linear-gradient(90deg, var(--color-blue), var(--color-teal), var(--color-orange));
}

.growth-measure-panel ol {
  margin: 0.5rem 0 0;
  border-top: 1px solid #e4eaf0;
  padding: 0;
  list-style: none;
}

.growth-measure-panel li {
  position: relative;
  display: grid;
  min-height: 66px;
  grid-template-columns: 30px minmax(0, 1fr) 10px;
  align-items: center;
  gap: 0.7rem;
  border-bottom: 1px solid #e4eaf0;
}

.growth-measure-panel__index {
  color: #92a1af;
  font-size: 0.59rem;
  font-weight: 700;
}

.growth-measure-panel li > div {
  display: grid;
  grid-template-columns: minmax(110px, 0.8fr) minmax(0, 1.2fr);
  align-items: baseline;
  gap: 0.1rem 0.6rem;
}

.growth-measure-panel li strong {
  grid-row: span 2;
  color: var(--color-navy);
  font-family: var(--font-display);
  font-size: 0.75rem;
}

.growth-measure-panel li div > span {
  color: #455b70;
  font-size: 0.66rem;
}

.growth-measure-panel li small {
  color: #8192a2;
  font-size: 0.58rem;
}

.growth-measure-panel li > i {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--color-blue);
}

.growth-measure-panel li:nth-child(2) > i,
.growth-measure-panel li:nth-child(4) > i {
  background: var(--color-teal);
}

.growth-measure-panel li:last-child > i {
  background: var(--color-orange);
}

.growth-measure-panel > p {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0.9rem 0 0;
  color: #74879a;
  font-size: 0.62rem;
  line-height: 1.5;
}

.growth-measure-panel > p span {
  width: 6px;
  height: 6px;
  flex: 0 0 auto;
  border-radius: 50%;
  background: var(--color-orange);
}

.growth-fit {
  background: var(--color-white);
}

.growth-fit__layout {
  display: grid;
  grid-template-columns: minmax(0, 0.82fr) minmax(0, 1.18fr);
  gap: clamp(3rem, 8vw, 7rem);
}

.growth-fit__note,
.growth-faq__aside {
  margin: 1.3rem 0 0;
  color: var(--color-muted);
  font-size: 0.84rem;
  line-height: 1.65;
}

.growth-fit__note {
  max-width: 420px;
  border-left: 2px solid var(--color-teal);
  padding-left: 0.9rem;
}

.growth-fit-list {
  margin: 0;
  border-top: 1px solid var(--color-border);
  padding: 0;
  list-style: none;
}

.growth-fit-list li {
  display: grid;
  min-height: 77px;
  grid-template-columns: 36px minmax(0, 1fr) 20px;
  align-items: center;
  gap: 0.8rem;
  border-bottom: 1px solid var(--color-border);
}

.growth-fit-list li > span {
  color: #8293a5;
  font-size: 0.65rem;
  font-weight: 700;
}

.growth-fit-list p {
  margin: 0;
  color: var(--color-text);
  font-family: var(--font-display);
  font-size: clamp(0.92rem, 1.7vw, 1.1rem);
  font-weight: 600;
  line-height: 1.45;
}

.growth-fit-list .icon {
  color: var(--color-link);
}

.growth-faq {
  background: #f0f4f8;
}

.growth-faq__layout {
  display: grid;
  grid-template-columns: minmax(250px, 0.72fr) minmax(0, 1.28fr);
  align-items: start;
  gap: clamp(2.5rem, 7vw, 6rem);
}

.growth-faq__aside {
  max-width: 350px;
  margin-bottom: 1.3rem;
}

.growth-faq__list {
  border-top: 1px solid #cfd9e2;
}

.growth-faq__item {
  border-bottom: 1px solid #cfd9e2;
}

.growth-faq__item h3 {
  margin: 0;
  font-size: inherit;
}

.growth-faq__trigger {
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

.growth-faq__trigger:hover {
  color: var(--color-link);
}

.growth-faq__number {
  color: #8293a5;
  font-family: var(--font-body);
  font-size: 0.66rem;
}

.growth-faq__toggle {
  justify-self: end;
  color: var(--color-link);
  font-size: 1.3rem;
  font-weight: 400;
}

.growth-faq__answer {
  padding: 0 2.5rem 1.25rem;
}

.growth-faq__answer p {
  max-width: 680px;
  margin: 0;
  color: var(--color-muted);
  font-size: 0.87rem;
  line-height: 1.75;
}

.growth-cta {
  position: relative;
  overflow: hidden;
  background: var(--color-navy);
  color: white;
}

.growth-cta__layout {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: 2rem;
}

.growth-cta h2 {
  max-width: 740px;
  margin: 0;
  color: white;
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3.4rem);
  letter-spacing: -0.055em;
  line-height: 1.12;
}

.growth-cta__layout > div:first-child > p:last-child {
  max-width: 650px;
  margin: 1rem 0 0;
  color: #b6c5d5;
  font-size: 0.98rem;
  line-height: 1.7;
}

.growth-cta__actions {
  display: grid;
  justify-items: start;
  gap: 1rem;
}

.growth-cta__actions > a:last-child {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #b8eaff;
  font-size: 0.83rem;
  font-weight: 650;
  text-decoration-thickness: 1px;
  text-underline-offset: 4px;
}

.growth-cta__actions > a:last-child:hover {
  color: white;
}

.growth-cta__orbit {
  position: absolute;
  right: -150px;
  top: 50%;
  width: 460px;
  aspect-ratio: 1;
  border: 1px solid rgba(0, 180, 255, 0.25);
  border-radius: 50%;
  transform: translateY(-50%);
}

.growth-cta__orbit--two {
  right: -70px;
  width: 300px;
  border-color: rgba(0, 209, 167, 0.22);
}

@media (max-width: 1000px) {
  .growth-hero__layout {
    grid-template-columns: minmax(0, 0.9fr) minmax(340px, 1.1fr);
    gap: 2rem;
  }

  .growth-measure__layout {
    grid-template-columns: minmax(0, 0.8fr) minmax(360px, 1.2fr);
    gap: 2.5rem;
  }

  .growth-system-map {
    transform: scale(0.94);
  }

  .growth-capability__content ul {
    grid-template-columns: 1fr;
    gap: 0.45rem;
  }
}

@media (max-width: 760px) {
  .growth-hero__layout,
  .growth-measure__layout,
  .growth-fit__layout,
  .growth-faq__layout,
  .growth-cta__layout {
    grid-template-columns: minmax(0, 1fr);
  }

  .growth-hero__layout {
    gap: 2.5rem;
  }

  .growth-hero-map {
    width: 100%;
  }

  .growth-section-head,
  .growth-system__intro,
  .growth-loop__intro {
    display: block;
  }

  .growth-section-head__aside,
  .growth-system__aside,
  .growth-loop__aside {
    max-width: 440px;
    margin-top: 1rem;
  }

  .growth-system-map {
    width: 650px;
    height: 380px;
    left: 50%;
    margin: 2rem 0 0;
    transform: translateX(-50%) scale(0.86);
    transform-origin: top center;
  }

  .growth-system-map__connectors {
    width: 650px;
    height: 380px;
  }

  .growth-system-map__item {
    width: 176px;
  }

  .growth-system-map__item--objective,
  .growth-system-map__item--measurement {
    left: 2%;
  }

  .growth-system-map__item--offer,
  .growth-system-map__item--channel {
    right: 2%;
  }

  .growth-system__caption {
    margin-top: -2rem;
  }

  .growth-process-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .growth-process-step {
    min-height: 175px;
    border-bottom: 1px solid var(--color-border);
    padding-bottom: 1.2rem;
  }

  .growth-process-step + .growth-process-step {
    border-left: 0;
    padding-left: 0;
  }

  .growth-process-step:nth-child(2n) {
    border-left: 1px solid var(--color-border);
    padding-left: 1.1rem;
  }

  .growth-process-step__marker i {
    display: none;
  }

  .growth-measure__layout,
  .growth-fit__layout,
  .growth-faq__layout {
    gap: 2.5rem;
  }

  .growth-cta__actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem 1.5rem;
  }
}

@media (max-width: 540px) {
  .growth-hero h1 {
    font-size: clamp(2.45rem, 12vw, 3.5rem);
  }

  .growth-hero__actions {
    align-items: stretch;
  }

  .growth-hero__actions :deep(.button) {
    width: 100%;
  }

  .growth-hero-map {
    padding-inline: 0.65rem;
  }

  .growth-hero-map__topline {
    font-size: 0.48rem;
  }

  .growth-hero-map__node {
    min-width: 82px;
    gap: 0.1rem 0.3rem;
    padding: 0.4rem;
  }

  .growth-hero-map__node strong {
    font-size: 0.58rem;
  }

  .growth-hero-map__node > span {
    font-size: 0.45rem;
  }

  .growth-hero-map__node--objectives,
  .growth-hero-map__node--measurement {
    left: 1%;
  }

  .growth-hero-map__node--acquisition,
  .growth-hero-map__node--experience {
    right: 1%;
  }

  .growth-hero-map__core {
    width: 88px;
  }

  .growth-hero-map__core strong {
    font-size: 0.62rem;
  }

  .growth-hero-map__core span {
    font-size: 0.43rem;
  }

  .growth-hero-map__legend {
    gap: 0.55rem;
    font-size: 0.48rem;
  }

  .growth-gap-list li {
    grid-template-columns: 30px minmax(0, 1fr) 38px;
    gap: 0.6rem;
    padding-block: 0.8rem;
  }

  .growth-gap-list p {
    font-size: 0.95rem;
    line-height: 1.45;
  }

  .growth-gap-list li > i {
    gap: 3px;
  }

  .growth-gap-list b {
    width: 5px;
    height: 5px;
  }

  .growth-system-map {
    width: 570px;
    height: 350px;
    margin-top: 2.2rem;
    transform: translateX(-50%) scale(0.68);
  }

  .growth-system-map__connectors {
    width: 570px;
    height: 350px;
  }

  .growth-system-map__item {
    width: 155px;
    min-height: 70px;
    grid-template-columns: 22px minmax(0, 1fr);
    gap: 0.15rem 0.3rem;
    padding: 0.55rem;
  }

  .growth-system-map__item strong {
    font-size: 0.7rem;
  }

  .growth-system-map__item small {
    font-size: 0.59rem;
  }

  .growth-system-map__center {
    width: 130px;
  }

  .growth-system__caption {
    margin-top: calc(-278px + 35vw);
    font-size: 0.69rem;
  }

  .growth-capability {
    grid-template-columns: minmax(0, 1fr);
  }

  .growth-capability--reverse .growth-capability__visual,
  .growth-capability--reverse .growth-capability__content {
    order: initial;
  }

  .growth-capability__visual {
    min-height: 210px;
  }

  .growth-capability__motif {
    width: 130px;
  }

  .growth-capability__content {
    padding: 1.5rem 0 1.8rem;
  }

  .growth-capability__content ul {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.5rem 0.8rem;
  }

  .growth-capability__content li {
    font-size: 0.73rem;
  }

  .growth-loop-visual {
    margin-top: 2.2rem;
  }

  .growth-loop-visual svg {
    display: none;
  }

  .growth-loop-visual ol {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.5rem 0.5rem;
  }

  .growth-loop-visual li {
    gap: 0.4rem;
  }

  .growth-loop-visual li > strong {
    font-size: 0.82rem;
  }

  .growth-loop-visual > p {
    margin-top: 1.6rem;
    font-size: 0.7rem;
  }

  .growth-process-list {
    grid-template-columns: minmax(0, 1fr);
  }

  .growth-process-step {
    min-height: 0;
    padding: 1rem 0;
  }

  .growth-process-step + .growth-process-step,
  .growth-process-step:nth-child(2n) {
    border-left: 0;
    padding-left: 0;
  }

  .growth-process-step h3 {
    margin-top: 0.6rem;
  }

  .growth-measure-panel li {
    grid-template-columns: 24px minmax(0, 1fr) 8px;
    gap: 0.45rem;
  }

  .growth-measure-panel li > div {
    grid-template-columns: minmax(0, 1fr);
    gap: 0.12rem;
  }

  .growth-measure-panel li strong {
    grid-row: auto;
  }

  .growth-measure-panel li div > span,
  .growth-measure-panel li small {
    font-size: 0.62rem;
    line-height: 1.35;
  }

  .growth-measure-panel__axis {
    gap: 0.4rem;
    font-size: 0.42rem;
  }

  .growth-measure-panel__head strong {
    font-size: 0.95rem;
  }

  .growth-fit-list li {
    grid-template-columns: 28px minmax(0, 1fr) 16px;
    gap: 0.6rem;
  }

  .growth-fit-list p {
    font-size: 0.92rem;
  }

  .growth-faq__trigger {
    grid-template-columns: 26px minmax(0, 1fr) 22px;
    gap: 0.45rem;
    font-size: 0.88rem;
  }

  .growth-faq__answer {
    padding-right: 0.5rem;
    padding-left: 2rem;
  }

  .growth-cta__actions {
    display: grid;
    justify-items: start;
  }
}

@media (max-width: 420px) {
  .growth-system-map {
    transform: translateX(-50%) scale(0.56);
  }
}

@media (max-width: 360px) {
  .growth-system-map {
    transform: translateX(-50%) scale(0.48);
  }
}

@media (prefers-reduced-motion: reduce) {
  .growth-page *,
  .growth-page *::before,
  .growth-page *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
