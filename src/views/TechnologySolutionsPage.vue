<script setup>
import { ref } from 'vue'
import Container from '../components/global/Container.vue'
import Button from '../components/global/Button.vue'
import SectionHeading from '../components/global/SectionHeading.vue'
import Icon from '../components/global/Icon.vue'

const technologyGaps = [
  'Tools do not support the workflow people actually follow.',
  'Teams repeat manual tasks to move information between systems.',
  'Website and customer journeys do not connect to internal processes.',
  'Information is scattered and ownership is unclear.',
  'Technology decisions are made without a defined business objective.',
  'Systems become difficult to maintain as needs change.',
]

const systemElements = [
  { number: '01', title: 'Business objective', note: 'Why change?', kind: 'objective' },
  { number: '02', title: 'User & workflow needs', note: 'Who does what?', kind: 'workflow' },
  { number: '03', title: 'Information & data', note: 'What needs to move?', kind: 'data' },
  { number: '04', title: 'System architecture', note: 'What needs to connect?', kind: 'architecture' },
  { number: '05', title: 'Digital experience', note: 'How will people use it?', kind: 'experience' },
  { number: '06', title: 'Measure & improve', note: 'How will it be reviewed?', kind: 'improvement' },
]

const capabilities = [
  {
    number: '01',
    title: 'Website & Digital Platforms',
    description: 'Shape digital experiences around the information people need and the actions a business wants to support.',
    focus: ['Business websites and digital experiences', 'Information architecture and page structure', 'Responsive interface implementation', 'Content, customer journeys, usability, and maintainability'],
    kind: 'platforms',
  },
  {
    number: '02',
    title: 'Business Workflow Design',
    description: 'Make the steps, handoffs, and requirements in a process easier to understand before deciding what should change.',
    focus: ['Workflow mapping', 'Handoff and bottleneck identification', 'Process simplification opportunities', 'Requirements and intended behavior documentation'],
    kind: 'workflow',
  },
  {
    number: '03',
    title: 'System Integration Planning',
    description: 'Understand how existing tools and information flows relate, and identify integration options and constraints to investigate.',
    focus: ['Existing tools and data-flow review', 'Repeated manual transfer identification', 'Integration requirements and dependencies', 'API or connector feasibility where relevant'],
    kind: 'integration',
  },
  {
    number: '04',
    title: 'Data & Reporting Foundations',
    description: 'Clarify where information comes from, who owns it, and how it can support operational decisions.',
    focus: ['Data-source mapping', 'Reporting requirements', 'Information consistency', 'KPI definitions and ownership'],
    kind: 'data',
  },
  {
    number: '05',
    title: 'Technology Assessment & Roadmaps',
    description: 'Turn a review of current tools, processes, and constraints into prioritized, practical next steps.',
    focus: ['Current tools and process review', 'Requirements and priority definition', 'Technical risks and dependency identification', 'Phased planning aligned with business goals'],
    kind: 'roadmap',
  },
  {
    number: '06',
    title: 'Digital Product & Experience Support',
    description: 'Define a product or portal experience around real user needs, journeys, and functional requirements.',
    focus: ['User journeys', 'Interface and usability requirements', 'Product or portal concept definition', 'Experience improvements based on user needs'],
    kind: 'product',
  },
]

const connectionStages = [
  'Business Need',
  'Workflow',
  'Data & Systems',
  'Digital Interface',
  'User Action',
  'Feedback & Improvement',
]

const approach = [
  { number: '01', title: 'Understand', description: 'Business goals, users, current tools, and constraints.' },
  { number: '02', title: 'Map', description: 'Workflows, information flows, and user journeys.' },
  { number: '03', title: 'Define', description: 'Requirements, priorities, dependencies, and success criteria.' },
  { number: '04', title: 'Design', description: 'A practical solution approach and implementation roadmap.' },
  { number: '05', title: 'Validate', description: 'Usability, workflow fit, feasibility, and appropriate next steps.' },
]

const principles = [
  { title: 'Clear ownership', description: 'Make responsibilities and decisions understandable to the people maintaining the system.' },
  { title: 'Accessible, responsive interfaces', description: 'Consider different devices, abilities, and contexts in the experience.' },
  { title: 'Maintainable structures', description: 'Favor clear organization and documentation that supports future updates.' },
  { title: 'Security and privacy considerations', description: 'Discuss relevant risks and requirements as part of technical discovery; no certification is implied.' },
  { title: 'Testing against requirements', description: 'Review the agreed behavior and user needs, not assumptions about success.' },
  { title: 'No unnecessary complexity', description: 'Choose an approach that fits the actual need and available capacity.' },
]

const suitableScenarios = [
  'Your digital tools no longer fit the workflows your team follows.',
  'Your team relies heavily on repetitive manual tasks.',
  'You are planning a website or digital platform improvement.',
  'You need clearer foundations for reporting and operational decisions.',
  'You are exploring system integration or process improvement.',
  'You need a phased technology roadmap before investing.',
]

const questions = [
  {
    question: 'Do you build business websites?',
    answer: 'Website and digital experience work may include planning, structure, responsive interface implementation, and usability considerations. The specific deliverables and implementation responsibilities depend on requirements and agreed project scope.',
  },
  {
    question: 'Can you integrate our existing systems?',
    answer: 'Integration options can be assessed after understanding the systems, data flows, access, dependencies, and technical constraints. Feasibility is not assumed; recommendations and any implementation work are agreed once those factors are clear.',
  },
  {
    question: 'Do we need to replace our current tools?',
    answer: 'Not necessarily. The first step is to understand how existing tools support the workflow and where gaps exist. A replacement is only one option and should be considered alongside process changes, configuration, or integration where appropriate.',
  },
  {
    question: 'Can you help us map a business workflow?',
    answer: 'Workflow mapping can document steps, users, handoffs, information needs, and areas that may warrant further investigation. The level of detail depends on the process and agreed scope.',
  },
  {
    question: 'How do you decide which technology is appropriate?',
    answer: 'Recommendations follow discovery of the business objective, users, workflow, requirements, existing systems, data, constraints, and available capacity. The technology should serve the need rather than drive it.',
  },
  {
    question: 'Does every project include development and implementation?',
    answer: 'No. Some projects may focus on assessment, requirements, experience design, or a roadmap. Build, integration, and implementation depend on technical feasibility, project scope, and agreed responsibilities.',
  },
]

const openQuestion = ref(null)

function toggleQuestion(index) {
  openQuestion.value = openQuestion.value === index ? null : index
}

function onQuestionKeydown(event, index) {
  if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return

  event.preventDefault()
  const buttons = [...event.currentTarget.closest('.technology-faq__list').querySelectorAll('.technology-faq__trigger')]
  const nextIndex = event.key === 'Home'
    ? 0
    : event.key === 'End'
      ? buttons.length - 1
      : (index + (event.key === 'ArrowDown' ? 1 : -1) + buttons.length) % buttons.length
  buttons[nextIndex]?.focus()
}
</script>

<template>
  <div class="technology-page">
    <section class="technology-hero">
      <Container class="technology-hero__layout">
        <div class="technology-hero__copy">
          <p class="technology-eyebrow"><span></span> TECHNOLOGY SOLUTIONS</p>
          <h1>Make technology work around the business.</h1>
          <p class="technology-hero__description">
            Useful technology starts with the business problem, the people using the system, and the workflow that needs to improve. From there, platforms, information, and digital experiences can be considered in context.
          </p>
          <div class="technology-hero__actions">
            <Button to="/contact">Discuss Your Business <Icon name="arrow" :size="17" /></Button>
            <Button to="/solutions/strategy" variant="secondary" class="technology-button--outline">Explore Strategy &amp; Discovery</Button>
          </div>
          <p class="technology-hero__note">People, workflows, information, and systems—considered together.</p>
        </div>

        <div class="technology-ecosystem" role="img" aria-label="Illustration connecting people, workflows, data, digital interfaces, and business outcomes">
          <div class="technology-ecosystem__header"><span>CONNECTED TECHNOLOGY SYSTEM</span><span>BUSINESS CONTEXT / 01</span></div>
          <div class="technology-ecosystem__canvas">
            <svg viewBox="0 0 520 400" preserveAspectRatio="none" aria-hidden="true">
              <path d="M260 200 105 85M260 200 415 85M260 200 105 315M260 200 415 315M105 85 415 85M105 315 415 315" />
              <circle cx="260" cy="200" r="137" />
              <circle class="technology-ecosystem__inner-orbit" cx="260" cy="200" r="91" />
            </svg>
            <div class="technology-ecosystem__core"><span>BUSINESS</span><strong>OUTCOME</strong><i></i></div>
            <div class="technology-ecosystem__node technology-ecosystem__node--people"><i></i><span>01</span><strong>People</strong></div>
            <div class="technology-ecosystem__node technology-ecosystem__node--workflow"><i></i><span>02</span><strong>Workflows</strong></div>
            <div class="technology-ecosystem__node technology-ecosystem__node--data"><i></i><span>03</span><strong>Data &amp; systems</strong></div>
            <div class="technology-ecosystem__node technology-ecosystem__node--interface"><i></i><span>04</span><strong>Digital interface</strong></div>
          </div>
          <div class="technology-ecosystem__footer"><span><i></i> NEED</span><span><i></i> PROCESS</span><span><i></i> EXPERIENCE</span></div>
        </div>
      </Container>
      <div class="technology-hero__grid" aria-hidden="true"></div>
    </section>

    <section class="technology-gaps technology-section">
      <Container>
        <div class="technology-section-head">
          <SectionHeading
            eyebrow="The disconnected-systems problem"
            title="A tool can be useful—and still leave a gap."
            description="When systems, processes, and customer experiences are considered separately, teams may encounter friction that is worth understanding before choosing a technology response."
          />
          <p class="technology-section-head__aside">These are possible situations to explore, not assumptions about every organization.</p>
        </div>
        <ol class="technology-gap-list">
          <li v-for="(gap, index) in technologyGaps" :key="gap">
            <span>{{ String(index + 1).padStart(2, '0') }}</span>
            <p>{{ gap }}</p>
            <i aria-hidden="true"><b></b><b></b><b></b></i>
          </li>
        </ol>
      </Container>
    </section>

    <section class="technology-point technology-section">
      <Container>
        <div class="technology-point__intro">
          <SectionHeading
            eyebrow="Our point of view"
            title="Technology should serve a defined business purpose."
            description="The system only makes sense when it responds to real users and workflows, handles information appropriately, and supports an experience the business can review and improve."
          />
          <p class="technology-point__aside">Begin with the need. Let that guide the system.</p>
        </div>
        <div class="technology-system-map" role="img" aria-label="System diagram linking business objective, user and workflow needs, information and data, system architecture, digital experience, and measurement and improvement">
          <div class="technology-system-map__core"><span>BUSINESS</span><strong>PURPOSE</strong><small>the reason to build</small></div>
          <div v-for="item in systemElements" :key="item.number" class="technology-system-map__item" :class="`technology-system-map__item--${item.kind}`">
            <span>{{ item.number }}</span><strong>{{ item.title }}</strong><small>{{ item.note }}</small><i aria-hidden="true"></i>
          </div>
          <svg viewBox="0 0 900 440" preserveAspectRatio="none" aria-hidden="true">
            <path d="M450 220 160 85M450 220 450 65M450 220 740 85M450 220 160 355M450 220 450 375M450 220 740 355" />
            <circle cx="450" cy="220" r="155" />
          </svg>
        </div>
        <p class="technology-system-caption">People, process, information, experience, and learning are connected parts of the system.</p>
      </Container>
      <div class="technology-point__grid" aria-hidden="true"></div>
    </section>

    <section class="technology-capabilities technology-section">
      <Container>
        <SectionHeading
          eyebrow="Technology capabilities"
          title="Choose the support that fits the need."
          description="These are potential areas of support. Discovery, technical feasibility, available access, and agreed scope determine what is appropriate for a project."
        />
        <div class="technology-capability-list">
          <article v-for="(capability, index) in capabilities" :key="capability.number" class="technology-capability" :class="{ 'technology-capability--reverse': index % 2 }">
            <div class="technology-capability__visual" :class="`technology-capability__visual--${capability.kind}`" aria-hidden="true">
              <div class="technology-capability__visual-head"><span>TECHNOLOGY SYSTEM</span><span>{{ capability.number }}</span></div>
              <div class="technology-capability__motif"><i></i><i></i><i></i><i></i><b></b></div>
              <div class="technology-capability__visual-foot"><span>NEED</span><span>→</span><span>CAPABILITY</span></div>
            </div>
            <div class="technology-capability__content">
              <span class="technology-capability__index">{{ capability.number }} <i></i> CAPABILITY</span>
              <h3>{{ capability.title }}</h3>
              <p>{{ capability.description }}</p>
              <ul><li v-for="item in capability.focus" :key="item">{{ item }}</li></ul>
            </div>
          </article>
        </div>
      </Container>
    </section>

    <section class="technology-connection technology-section">
      <Container>
        <div class="technology-connection__intro">
          <SectionHeading
            eyebrow="How the pieces connect"
            title="The interface is only one part of the experience."
            description="Technology works better in context: the process behind a screen, the information moving through it, and the feedback that helps teams see what to revisit."
          />
          <p class="technology-connection__aside">A connected process supports a more coherent user experience.</p>
        </div>
        <ol class="technology-flow">
          <li v-for="(stage, index) in connectionStages" :key="stage">
            <span>{{ String(index + 1).padStart(2, '0') }}</span>
            <strong>{{ stage }}</strong>
            <Icon v-if="index < connectionStages.length - 1" name="arrow" :size="16" />
          </li>
        </ol>
        <p class="technology-flow__note"><i></i> Feedback can inform the next workflow and experience decision.</p>
      </Container>
    </section>

    <section class="technology-approach technology-section">
      <Container>
        <div class="technology-section-head">
          <SectionHeading
            eyebrow="Our technology approach"
            title="Move from context to a practical next step."
            description="A clear sequence helps teams understand what is needed before deciding how much technology or implementation is appropriate."
          />
          <p class="technology-section-head__aside">Build and integration depend on technical requirements, project scope, and agreed responsibilities.</p>
        </div>
        <ol class="technology-approach-list">
          <li v-for="(stage, index) in approach" :key="stage.number">
            <div class="technology-approach-list__marker"><span>{{ stage.number }}</span><i v-if="index < approach.length - 1"></i></div>
            <div><h3>{{ stage.title }}</h3><p>{{ stage.description }}</p></div>
          </li>
        </ol>
      </Container>
    </section>

    <section class="technology-principles technology-section">
      <Container class="technology-principles__layout">
        <div>
          <SectionHeading
            eyebrow="Usability & maintainability"
            title="Make it understandable and manageable after launch."
            description="A useful system should work for the people who use it and the teams responsible for keeping it current."
          />
          <p class="technology-principles__note">Security and privacy needs should be discussed in context. No certification or compliance status is implied.</p>
        </div>
        <ol class="technology-principles-list">
          <li v-for="(principle, index) in principles" :key="principle.title">
            <span>{{ String(index + 1).padStart(2, '0') }}</span>
            <div><h3>{{ principle.title }}</h3><p>{{ principle.description }}</p></div>
          </li>
        </ol>
      </Container>
    </section>

    <section class="technology-fit technology-section">
      <Container class="technology-fit__layout">
        <div>
          <SectionHeading
            eyebrow="Who this is for"
            title="When the way work happens and the tools no longer fit."
            description="Technology exploration is most useful when grounded in a specific business need, user context, and realistic constraints."
          />
          <p class="technology-fit__note">The right next step may be a process change, clearer requirements, or a technical improvement.</p>
        </div>
        <ul class="technology-fit-list">
          <li v-for="(scenario, index) in suitableScenarios" :key="scenario">
            <span>{{ String(index + 1).padStart(2, '0') }}</span><p>{{ scenario }}</p><Icon name="arrow" :size="16" />
          </li>
        </ul>
      </Container>
    </section>

    <section class="technology-faq technology-section">
      <Container class="technology-faq__layout">
        <div>
          <SectionHeading
            eyebrow="Frequently asked questions"
            title="Technology choices begin with the requirements."
            description="Clear expectations help determine what is practical, feasible, and worth exploring."
          />
          <p class="technology-faq__aside">Discuss the business need and current setup with us.</p>
          <Button to="/contact">Talk with us <Icon name="arrow" :size="16" /></Button>
        </div>
        <div class="technology-faq__list">
          <article v-for="(item, index) in questions" :key="item.question" class="technology-faq__item">
            <h3>
              <button
                :id="`technology-question-${index}`"
                class="technology-faq__trigger"
                type="button"
                :aria-expanded="openQuestion === index"
                :aria-controls="`technology-answer-${index}`"
                @click="toggleQuestion(index)"
                @keydown="onQuestionKeydown($event, index)"
              >
                <span class="technology-faq__number">{{ String(index + 1).padStart(2, '0') }}</span>
                <span>{{ item.question }}</span>
                <span class="technology-faq__toggle" aria-hidden="true">{{ openQuestion === index ? '−' : '+' }}</span>
              </button>
            </h3>
            <div v-show="openQuestion === index" :id="`technology-answer-${index}`" class="technology-faq__answer" role="region" :aria-labelledby="`technology-question-${index}`">
              <p>{{ item.answer }}</p>
            </div>
          </article>
        </div>
      </Container>
    </section>

    <section class="technology-cta technology-section">
      <Container class="technology-cta__layout">
        <div>
          <p class="technology-eyebrow"><span></span> START WITH THE BUSINESS NEED</p>
          <h2>Clarify the need before choosing the technology.</h2>
          <p>Talk through the workflow, user needs, and constraints before deciding what a useful next step could be.</p>
        </div>
        <div class="technology-cta__actions">
          <Button to="/contact">Start a Conversation <Icon name="arrow" :size="17" /></Button>
          <RouterLink to="/solutions/strategy">Explore Strategy &amp; Discovery <Icon name="arrow" :size="16" /></RouterLink>
        </div>
      </Container>
      <div class="technology-cta__orbit technology-cta__orbit--outer" aria-hidden="true"></div>
      <div class="technology-cta__orbit technology-cta__orbit--inner" aria-hidden="true"></div>
    </section>
  </div>
</template>

<style scoped>
.technology-page {
  overflow: hidden;
  background: var(--color-background);
}

.technology-section {
  position: relative;
  padding-block: clamp(4rem, 8vw, 7rem);
}

.technology-hero {
  position: relative;
  overflow: hidden;
  padding-block: clamp(4.5rem, 8vw, 7.5rem);
  background: var(--color-navy);
  color: white;
}

.technology-hero__layout {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 0.96fr) minmax(390px, 1.04fr);
  align-items: center;
  gap: clamp(2rem, 5vw, 4.5rem);
}

.technology-hero__copy {
  max-width: 610px;
}

.technology-eyebrow {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  margin: 0 0 1.35rem;
  color: #a9def2;
  font-size: 0.69rem;
  font-weight: 700;
  letter-spacing: 0.15em;
}

.technology-eyebrow > span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-teal);
  box-shadow: 0 0 0 5px rgba(0, 209, 167, 0.1);
}

.technology-hero h1 {
  max-width: 650px;
  margin: 0;
  color: white;
  font-family: var(--font-display);
  font-size: clamp(2.65rem, 5.4vw, 4.7rem);
  font-weight: 700;
  letter-spacing: -0.065em;
  line-height: 1.04;
}

.technology-hero__description {
  max-width: 570px;
  margin: 1.45rem 0 0;
  color: #b9cad9;
  font-size: clamp(1rem, 1.45vw, 1.12rem);
  line-height: 1.75;
}

.technology-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 2rem;
}

.technology-button--outline {
  border-color: rgba(207, 228, 240, 0.35);
  background: transparent;
  color: white;
}

.technology-button--outline:hover {
  border-color: var(--color-blue);
  background: rgba(255, 255, 255, 0.05);
}

.technology-hero__note {
  margin: 1.25rem 0 0;
  color: #93abc0;
  font-size: 0.8rem;
}

.technology-hero__grid,
.technology-point__grid {
  position: absolute;
  inset: 0;
  opacity: 0.16;
  pointer-events: none;
  background-image: linear-gradient(rgba(133, 180, 208, 0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(133, 180, 208, 0.16) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: linear-gradient(90deg, transparent, black 70%);
}

.technology-ecosystem {
  position: relative;
  z-index: 1;
  min-width: 0;
  border: 1px solid rgba(160, 197, 219, 0.24);
  border-radius: 1.1rem;
  padding: 1rem clamp(0.7rem, 2vw, 1.35rem);
  background: linear-gradient(145deg, rgba(21, 53, 83, 0.94), rgba(9, 29, 52, 0.95));
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.18);
}

.technology-ecosystem__header,
.technology-ecosystem__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  color: #89abc2;
  font-size: 0.55rem;
  font-weight: 700;
  letter-spacing: 0.1em;
}

.technology-ecosystem__canvas {
  position: relative;
  width: 100%;
  max-width: 520px;
  aspect-ratio: 520 / 400;
  margin-inline: auto;
}

.technology-ecosystem__canvas > svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  fill: none;
  stroke: rgba(0, 180, 255, 0.4);
  stroke-width: 1;
}

.technology-ecosystem__canvas > svg circle {
  stroke: rgba(136, 183, 209, 0.2);
}

.technology-ecosystem__canvas > svg .technology-ecosystem__inner-orbit {
  stroke: rgba(0, 209, 167, 0.33);
  stroke-dasharray: 3 7;
}

.technology-ecosystem__core {
  position: absolute;
  top: 50%;
  left: 50%;
  display: grid;
  width: clamp(96px, 15vw, 138px);
  aspect-ratio: 1;
  align-content: center;
  justify-items: center;
  border: 1px solid rgba(0, 180, 255, 0.6);
  border-radius: 50%;
  background: #143454;
  box-shadow: 0 0 0 10px rgba(0, 180, 255, 0.06), 0 0 38px rgba(0, 180, 255, 0.1);
  transform: translate(-50%, -50%);
}

.technology-ecosystem__core span {
  color: #a7c5d8;
  font-size: 0.52rem;
  letter-spacing: 0.14em;
}

.technology-ecosystem__core strong {
  color: white;
  font-family: var(--font-display);
  font-size: clamp(0.7rem, 1.3vw, 0.88rem);
}

.technology-ecosystem__core i {
  width: 5px;
  height: 5px;
  margin-top: 0.4rem;
  border-radius: 50%;
  background: var(--color-teal);
}

.technology-ecosystem__node {
  position: absolute;
  display: grid;
  grid-template-columns: 10px auto;
  align-items: center;
  gap: 0.15rem 0.45rem;
  min-width: 110px;
  border: 1px solid rgba(150, 187, 210, 0.3);
  border-radius: 0.55rem;
  padding: 0.55rem 0.65rem;
  background: #102b49;
}

.technology-ecosystem__node > i {
  grid-row: span 2;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--color-blue);
}

.technology-ecosystem__node > span {
  color: #7ba5c0;
  font-size: 0.52rem;
  font-weight: 700;
}

.technology-ecosystem__node strong {
  color: #f0f8fc;
  font-size: clamp(0.62rem, 1vw, 0.76rem);
}

.technology-ecosystem__node--people {
  top: 7%;
  left: 4%;
}

.technology-ecosystem__node--workflow {
  top: 7%;
  right: 4%;
}

.technology-ecosystem__node--workflow > i,
.technology-ecosystem__node--interface > i {
  background: var(--color-teal);
}

.technology-ecosystem__node--data {
  right: 4%;
  bottom: 7%;
}

.technology-ecosystem__node--data > i {
  background: var(--color-orange);
}

.technology-ecosystem__node--interface {
  bottom: 7%;
  left: 4%;
}

.technology-ecosystem__footer {
  justify-content: center;
  gap: clamp(0.7rem, 3vw, 1.6rem);
  border-top: 1px solid rgba(166, 197, 217, 0.16);
  padding-top: 0.85rem;
  letter-spacing: 0.05em;
}

.technology-ecosystem__footer span {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
}

.technology-ecosystem__footer i {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-blue);
}

.technology-ecosystem__footer span:nth-child(2) i {
  background: var(--color-teal);
}

.technology-ecosystem__footer span:nth-child(3) i {
  background: var(--color-orange);
}

.technology-gaps {
  background: white;
}

.technology-section-head,
.technology-point__intro,
.technology-connection__intro {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 2rem;
}

.technology-section-head .section-heading,
.technology-point__intro .section-heading,
.technology-connection__intro .section-heading {
  max-width: 760px;
}

.technology-section-head__aside,
.technology-point__aside,
.technology-connection__aside {
  max-width: 270px;
  flex: 0 0 auto;
  margin: 0 0 0.35rem;
  color: var(--color-muted);
  font-size: 0.8rem;
  line-height: 1.65;
}

.technology-gap-list {
  margin: clamp(2.6rem, 5vw, 4rem) 0 0;
  border-top: 1px solid var(--color-border);
  padding: 0;
  list-style: none;
}

.technology-gap-list li {
  display: grid;
  min-height: 76px;
  grid-template-columns: 48px minmax(0, 1fr) 74px;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid var(--color-border);
}

.technology-gap-list li > span {
  color: #8293a5;
  font-size: 0.68rem;
  font-weight: 700;
}

.technology-gap-list p {
  margin: 0;
  color: var(--color-text);
  font-family: var(--font-display);
  font-size: clamp(1rem, 2vw, 1.2rem);
  font-weight: 600;
  letter-spacing: -0.025em;
}

.technology-gap-list li > i {
  display: flex;
  justify-content: end;
  gap: 5px;
}

.technology-gap-list b {
  width: 6px;
  height: 6px;
  border: 1px solid #96a8b8;
  border-radius: 50%;
}

.technology-gap-list li:nth-child(2n) b:nth-child(2),
.technology-gap-list li:nth-child(3n) b:first-child {
  border-color: var(--color-teal);
  background: var(--color-teal);
}

.technology-gap-list li:nth-child(3n) b:nth-child(3) {
  border-color: var(--color-orange);
  background: var(--color-orange);
}

.technology-point {
  overflow: hidden;
  background: var(--color-navy);
  color: white;
}

.technology-point .section-heading__title {
  color: white;
}

.technology-point .section-heading__description {
  color: #b6c5d5;
}

.technology-point .section-heading__eyebrow {
  border-color: rgba(0, 180, 255, 0.35);
  background: rgba(0, 180, 255, 0.12);
  color: #b8eaff;
}

.technology-point__intro,
.technology-system-map,
.technology-system-caption {
  position: relative;
  z-index: 1;
}

.technology-point__aside {
  max-width: 235px;
  border-left: 2px solid var(--color-teal);
  padding-left: 0.9rem;
  color: #c2d4e1;
}

.technology-system-map {
  position: relative;
  width: min(100%, 900px);
  height: 440px;
  margin: 2.6rem auto 0;
}

.technology-system-map > svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  fill: none;
  stroke: rgba(0, 180, 255, 0.35);
  stroke-width: 1;
}

.technology-system-map > svg circle {
  stroke: rgba(0, 209, 167, 0.24);
  stroke-dasharray: 4 7;
}

.technology-system-map__core {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  display: grid;
  width: 150px;
  aspect-ratio: 1;
  align-content: center;
  justify-items: center;
  border: 1px solid rgba(0, 180, 255, 0.62);
  border-radius: 50%;
  background: #112d4c;
  box-shadow: 0 0 0 12px rgba(0, 180, 255, 0.055);
  transform: translate(-50%, -50%);
}

.technology-system-map__core span {
  color: #9ebbd0;
  font-size: 0.58rem;
  letter-spacing: 0.14em;
}

.technology-system-map__core strong {
  color: white;
  font-family: var(--font-display);
  font-size: 0.9rem;
}

.technology-system-map__core small {
  margin-top: 0.35rem;
  color: #7ba5c0;
  font-size: 0.64rem;
}

.technology-system-map__item {
  position: absolute;
  z-index: 1;
  display: grid;
  width: 195px;
  min-height: 76px;
  grid-template-columns: 28px minmax(0, 1fr);
  align-content: center;
  gap: 0.15rem 0.5rem;
  border: 1px solid rgba(155, 191, 213, 0.3);
  border-radius: 0.65rem;
  padding: 0.7rem 0.8rem;
  background: #102845;
}

.technology-system-map__item > span {
  grid-row: span 2;
  align-self: start;
  color: #70c7ea;
  font-size: 0.63rem;
  font-weight: 700;
}

.technology-system-map__item strong {
  color: #f2f8fc;
  font-family: var(--font-display);
  font-size: 0.77rem;
}

.technology-system-map__item small {
  color: #9db3c4;
  font-size: 0.65rem;
  line-height: 1.4;
}

.technology-system-map__item > i {
  position: absolute;
  top: 50%;
  right: -4px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--color-blue);
  transform: translateY(-50%);
}

.technology-system-map__item--objective {
  top: 3%;
  left: 3%;
}

.technology-system-map__item--workflow {
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}

.technology-system-map__item--data {
  top: 3%;
  right: 3%;
}

.technology-system-map__item--architecture {
  right: 3%;
  bottom: 3%;
}

.technology-system-map__item--experience {
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}

.technology-system-map__item--improvement {
  bottom: 3%;
  left: 3%;
}

.technology-system-map__item--workflow > i,
.technology-system-map__item--experience > i {
  background: var(--color-teal);
}

.technology-system-map__item--data > i {
  background: var(--color-orange);
}

.technology-system-caption {
  margin: -0.4rem 0 0;
  color: #9eb4c6;
  font-size: 0.76rem;
  text-align: center;
}

.technology-capabilities {
  background: #f0f4f8;
}

.technology-capability-list {
  margin-top: clamp(3rem, 6vw, 5rem);
  border-top: 1px solid var(--color-border);
}

.technology-capability {
  display: grid;
  min-height: 340px;
  grid-template-columns: 0.84fr 1.16fr;
  align-items: stretch;
  border-bottom: 1px solid var(--color-border);
}

.technology-capability--reverse .technology-capability__visual {
  order: 2;
}

.technology-capability--reverse .technology-capability__content {
  order: 1;
}

.technology-capability__visual {
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

.technology-capability__visual--workflow,
.technology-capability__visual--roadmap {
  background-color: #e7f0ef;
}

.technology-capability__visual--integration,
.technology-capability__visual--product {
  background-color: #e9edf5;
}

.technology-capability__visual-head,
.technology-capability__visual-foot {
  position: absolute;
  right: 1rem;
  left: 1rem;
  display: flex;
  justify-content: space-between;
  color: #758a9c;
  font-size: 0.58rem;
  font-weight: 700;
  letter-spacing: 0.12em;
}

.technology-capability__visual-head {
  top: 0.9rem;
}

.technology-capability__visual-foot {
  bottom: 0.9rem;
}

.technology-capability__visual-foot span:nth-child(2) {
  color: #078bb6;
}

.technology-capability__motif {
  position: relative;
  display: grid;
  width: min(55%, 200px);
  aspect-ratio: 1;
  place-items: center;
}

.technology-capability__motif i {
  position: absolute;
  width: 100%;
  aspect-ratio: 1;
  border: 1px solid rgba(11, 31, 59, 0.28);
  border-radius: 50%;
}

.technology-capability__motif i:nth-child(2) {
  width: 72%;
  border-color: rgba(0, 180, 255, 0.62);
  border-style: dashed;
}

.technology-capability__motif i:nth-child(3) {
  width: 43%;
  border-color: rgba(0, 209, 167, 0.8);
}

.technology-capability__motif i:nth-child(4) {
  width: 125%;
  height: 1px;
  border: 0;
  border-radius: 0;
  background: rgba(11, 31, 59, 0.38);
  transform: rotate(-34deg);
}

.technology-capability__motif b {
  z-index: 1;
  width: 15%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: var(--color-blue);
  box-shadow: 0 0 0 8px rgba(0, 180, 255, 0.12);
}

.technology-capability__visual--workflow .technology-capability__motif i:first-child {
  border-radius: 10%;
  transform: rotate(45deg);
}

.technology-capability__visual--integration .technology-capability__motif i:nth-child(2) {
  transform: scaleX(0.56) rotate(34deg);
}

.technology-capability__visual--data .technology-capability__motif i:first-child {
  border-radius: 12%;
}

.technology-capability__visual--roadmap .technology-capability__motif i:nth-child(4) {
  height: 3px;
  background: linear-gradient(90deg, transparent, var(--color-blue), var(--color-teal), transparent);
}

.technology-capability__visual--product .technology-capability__motif i:nth-child(3) {
  width: 30%;
  border-style: dotted;
}

.technology-capability__content {
  align-self: center;
  padding: clamp(1.6rem, 4vw, 3.5rem) clamp(1.4rem, 5vw, 4.5rem);
}

.technology-capability__index {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  color: #778b9d;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.12em;
}

.technology-capability__index i {
  width: 20px;
  height: 1px;
  background: var(--color-teal);
}

.technology-capability__content h3 {
  margin: 0.8rem 0 0;
  color: var(--color-navy);
  font-family: var(--font-display);
  font-size: clamp(1.35rem, 2.5vw, 1.85rem);
  letter-spacing: -0.04em;
  line-height: 1.2;
}

.technology-capability__content > p {
  max-width: 610px;
  margin: 0.7rem 0 0;
  color: var(--color-muted);
  font-size: 0.9rem;
  line-height: 1.7;
}

.technology-capability__content ul {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.65rem 1.2rem;
  margin: 1.2rem 0 0;
  padding: 0;
  list-style: none;
}

.technology-capability__content li {
  position: relative;
  padding-left: 1rem;
  color: #43566b;
  font-size: 0.78rem;
  line-height: 1.5;
}

.technology-capability__content li::before {
  position: absolute;
  top: 0.55em;
  left: 0;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--color-teal);
  content: '';
}

.technology-connection {
  background: white;
}

.technology-connection__aside {
  max-width: 250px;
  border-left: 2px solid var(--color-teal);
  padding-left: 0.9rem;
}

.technology-flow {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 0.75rem;
  margin: clamp(2.8rem, 5vw, 4rem) 0 0;
  border-top: 1px solid var(--color-border);
  padding: 0;
  list-style: none;
}

.technology-flow li {
  position: relative;
  display: grid;
  min-height: 105px;
  align-content: start;
  gap: 0.7rem;
  border-top: 1px solid rgba(0, 180, 255, 0.45);
  padding: 0.9rem 1rem 0 0;
}

.technology-flow li::before {
  position: absolute;
  top: -4px;
  left: 0;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--color-teal);
  content: '';
}

.technology-flow li > span {
  color: #0c8ab5;
  font-size: 0.64rem;
  font-weight: 700;
}

.technology-flow li > strong {
  color: var(--color-navy);
  font-family: var(--font-display);
  font-size: clamp(0.75rem, 1.1vw, 0.91rem);
  line-height: 1.4;
}

.technology-flow li > .icon {
  position: absolute;
  top: 0.85rem;
  right: 0.1rem;
  color: var(--color-teal);
}

.technology-flow__note {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  margin: 1.2rem 0 0;
  color: var(--color-muted);
  font-size: 0.78rem;
  text-align: center;
}

.technology-flow__note i {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-orange);
}

.technology-approach {
  background: #f0f4f8;
}

.technology-approach-list {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  margin: clamp(3rem, 5vw, 4.5rem) 0 0;
  border-top: 1px solid var(--color-border);
  padding: 0;
  list-style: none;
}

.technology-approach-list > li {
  position: relative;
  display: grid;
  grid-template-columns: 36px minmax(0, 1fr);
  align-content: start;
  gap: 0.7rem;
  padding: 1.2rem 1rem 0 0;
}

.technology-approach-list > li + li {
  border-left: 1px solid var(--color-border);
  padding-left: 1rem;
}

.technology-approach-list__marker {
  position: relative;
  color: #0c8ab5;
  font-size: 0.67rem;
  font-weight: 700;
}

.technology-approach-list__marker i {
  position: absolute;
  top: -1.25rem;
  left: 0;
  width: calc(100% + 0.8rem);
  height: 1px;
  background: linear-gradient(90deg, var(--color-blue), transparent);
}

.technology-approach-list h3 {
  margin: 0;
  color: var(--color-navy);
  font-family: var(--font-display);
  font-size: clamp(1.05rem, 1.65vw, 1.32rem);
  letter-spacing: -0.03em;
}

.technology-approach-list p {
  margin: 0.6rem 0 0;
  color: var(--color-muted);
  font-size: 0.8rem;
  line-height: 1.65;
}

.technology-principles {
  background: white;
}

.technology-principles__layout,
.technology-fit__layout {
  display: grid;
  grid-template-columns: minmax(0, 0.82fr) minmax(0, 1.18fr);
  gap: clamp(3rem, 8vw, 7rem);
}

.technology-principles__note,
.technology-fit__note,
.technology-faq__aside {
  margin: 1.3rem 0 0;
  color: var(--color-muted);
  font-size: 0.84rem;
  line-height: 1.65;
}

.technology-principles__note {
  max-width: 450px;
  border-left: 2px solid var(--color-orange);
  padding-left: 0.9rem;
}

.technology-principles-list {
  margin: 0;
  border-top: 1px solid var(--color-border);
  padding: 0;
  list-style: none;
}

.technology-principles-list li {
  display: grid;
  grid-template-columns: 35px minmax(0, 1fr);
  gap: 0.8rem;
  border-bottom: 1px solid var(--color-border);
  padding: 1.1rem 0;
}

.technology-principles-list li > span {
  color: #8293a5;
  font-size: 0.65rem;
  font-weight: 700;
}

.technology-principles-list h3 {
  margin: 0;
  color: var(--color-navy);
  font-family: var(--font-display);
  font-size: 1rem;
  letter-spacing: -0.02em;
}

.technology-principles-list p {
  margin: 0.35rem 0 0;
  color: var(--color-muted);
  font-size: 0.81rem;
  line-height: 1.6;
}

.technology-fit {
  background: #f0f4f8;
}

.technology-fit__note {
  max-width: 430px;
  border-left: 2px solid var(--color-teal);
  padding-left: 0.9rem;
}

.technology-fit-list {
  margin: 0;
  border-top: 1px solid #cfd9e2;
  padding: 0;
  list-style: none;
}

.technology-fit-list li {
  display: grid;
  min-height: 72px;
  grid-template-columns: 34px minmax(0, 1fr) 18px;
  align-items: center;
  gap: 0.8rem;
  border-bottom: 1px solid #cfd9e2;
}

.technology-fit-list li > span {
  color: #8293a5;
  font-size: 0.64rem;
  font-weight: 700;
}

.technology-fit-list p {
  margin: 0;
  color: var(--color-text);
  font-family: var(--font-display);
  font-size: clamp(0.9rem, 1.6vw, 1.05rem);
  font-weight: 600;
  line-height: 1.45;
}

.technology-fit-list .icon {
  color: var(--color-link);
}

.technology-faq {
  background: white;
}

.technology-faq__layout {
  display: grid;
  grid-template-columns: minmax(250px, 0.72fr) minmax(0, 1.28fr);
  align-items: start;
  gap: clamp(2.5rem, 7vw, 6rem);
}

.technology-faq__aside {
  max-width: 350px;
  margin-bottom: 1.3rem;
}

.technology-faq__list {
  border-top: 1px solid var(--color-border);
}

.technology-faq__item {
  border-bottom: 1px solid var(--color-border);
}

.technology-faq__item h3 {
  margin: 0;
  font-size: inherit;
}

.technology-faq__trigger {
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

.technology-faq__trigger:hover {
  color: var(--color-link);
}

.technology-faq__number {
  color: #8293a5;
  font-family: var(--font-body);
  font-size: 0.66rem;
}

.technology-faq__toggle {
  justify-self: end;
  color: var(--color-link);
  font-size: 1.3rem;
  font-weight: 400;
}

.technology-faq__answer {
  padding: 0 2.5rem 1.25rem;
}

.technology-faq__answer p {
  max-width: 680px;
  margin: 0;
  color: var(--color-muted);
  font-size: 0.87rem;
  line-height: 1.75;
}

.technology-cta {
  overflow: hidden;
  background: var(--color-navy);
  color: white;
}

.technology-cta__layout {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: 2rem;
}

.technology-cta h2 {
  max-width: 740px;
  margin: 0;
  color: white;
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3.35rem);
  letter-spacing: -0.055em;
  line-height: 1.12;
}

.technology-cta__layout > div:first-child > p:last-child {
  max-width: 640px;
  margin: 1rem 0 0;
  color: #b6c5d5;
  font-size: 0.97rem;
  line-height: 1.7;
}

.technology-cta__actions {
  display: grid;
  justify-items: start;
  gap: 1rem;
}

.technology-cta__actions > a:last-child {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #b8eaff;
  font-size: 0.82rem;
  font-weight: 650;
  text-decoration-thickness: 1px;
  text-underline-offset: 4px;
}

.technology-cta__actions > a:last-child:hover {
  color: white;
}

.technology-cta__orbit {
  position: absolute;
  top: 50%;
  right: -140px;
  width: 430px;
  aspect-ratio: 1;
  border: 1px solid rgba(0, 180, 255, 0.25);
  border-radius: 50%;
  transform: translateY(-50%);
}

.technology-cta__orbit--inner {
  right: -60px;
  width: 270px;
  border-color: rgba(0, 209, 167, 0.23);
}

@media (max-width: 1000px) {
  .technology-hero__layout {
    grid-template-columns: minmax(0, 0.9fr) minmax(340px, 1.1fr);
    gap: 2rem;
  }

  .technology-capability__content ul {
    grid-template-columns: 1fr;
    gap: 0.45rem;
  }

  .technology-system-map__item {
    width: 175px;
  }
}

@media (max-width: 760px) {
  .technology-hero__layout,
  .technology-principles__layout,
  .technology-fit__layout,
  .technology-faq__layout,
  .technology-cta__layout {
    grid-template-columns: minmax(0, 1fr);
  }

  .technology-hero__layout {
    gap: 2.5rem;
  }

  .technology-section-head,
  .technology-point__intro,
  .technology-connection__intro {
    display: block;
  }

  .technology-section-head__aside,
  .technology-point__aside,
  .technology-connection__aside {
    max-width: 450px;
    margin-top: 1rem;
  }

  .technology-system-map {
    width: 650px;
    height: 380px;
    left: 50%;
    margin: 2rem 0 0;
    transform: translateX(-50%) scale(0.86);
    transform-origin: top center;
  }

  .technology-system-map > svg {
    width: 650px;
    height: 380px;
  }

  .technology-system-map__item {
    width: 176px;
  }

  .technology-system-map__item--objective,
  .technology-system-map__item--improvement {
    left: 2%;
  }

  .technology-system-map__item--data,
  .technology-system-map__item--architecture {
    right: 2%;
  }

  .technology-system-caption {
    margin-top: -53px;
  }

  .technology-flow {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .technology-flow li {
    min-height: 88px;
  }

  .technology-approach-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .technology-approach-list > li {
    min-height: 145px;
    border-bottom: 1px solid var(--color-border);
  }

  .technology-approach-list > li + li {
    border-left: 0;
    padding-left: 0;
  }

  .technology-approach-list > li:nth-child(2n) {
    border-left: 1px solid var(--color-border);
    padding-left: 1rem;
  }

  .technology-approach-list__marker i {
    display: none;
  }

  .technology-principles__layout,
  .technology-fit__layout,
  .technology-faq__layout {
    gap: 2.5rem;
  }

  .technology-cta__actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem 1.5rem;
  }
}

@media (max-width: 540px) {
  .technology-hero h1 {
    font-size: clamp(2.45rem, 12vw, 3.45rem);
  }

  .technology-hero__actions {
    align-items: stretch;
  }

  .technology-hero__actions :deep(.button) {
    width: 100%;
  }

  .technology-ecosystem {
    padding-inline: 0.6rem;
  }

  .technology-ecosystem__header {
    font-size: 0.46rem;
  }

  .technology-ecosystem__node {
    min-width: 82px;
    gap: 0.1rem 0.3rem;
    padding: 0.4rem;
  }

  .technology-ecosystem__node strong {
    font-size: 0.57rem;
  }

  .technology-ecosystem__node > span {
    font-size: 0.44rem;
  }

  .technology-ecosystem__node--people,
  .technology-ecosystem__node--interface {
    left: 1%;
  }

  .technology-ecosystem__node--workflow,
  .technology-ecosystem__node--data {
    right: 1%;
  }

  .technology-ecosystem__core {
    width: 88px;
  }

  .technology-ecosystem__core strong {
    font-size: 0.62rem;
  }

  .technology-ecosystem__core span {
    font-size: 0.43rem;
  }

  .technology-ecosystem__footer {
    gap: 0.5rem;
    font-size: 0.46rem;
  }

  .technology-gap-list li {
    grid-template-columns: 30px minmax(0, 1fr) 38px;
    gap: 0.6rem;
    padding-block: 0.8rem;
  }

  .technology-gap-list p {
    font-size: 0.94rem;
    line-height: 1.45;
  }

  .technology-gap-list li > i {
    gap: 3px;
  }

  .technology-gap-list b {
    width: 5px;
    height: 5px;
  }

  .technology-system-map {
    width: 570px;
    height: 350px;
    margin-top: 2.2rem;
    --diagram-scale: 0.68;
    transform: translateX(-50%) scale(var(--diagram-scale));
  }

  .technology-system-map > svg {
    width: 570px;
    height: 350px;
  }

  .technology-system-map__item {
    width: 155px;
    min-height: 70px;
    grid-template-columns: 22px minmax(0, 1fr);
    gap: 0.15rem 0.3rem;
    padding: 0.55rem;
  }

  .technology-system-map__item strong {
    font-size: 0.69rem;
  }

  .technology-system-map__item small {
    font-size: 0.58rem;
  }

  .technology-system-map__core {
    width: 128px;
  }

  .technology-system-caption {
    margin-top: -112px;
    font-size: 0.68rem;
  }

  .technology-capability {
    grid-template-columns: minmax(0, 1fr);
  }

  .technology-capability--reverse .technology-capability__visual,
  .technology-capability--reverse .technology-capability__content {
    order: initial;
  }

  .technology-capability__visual {
    min-height: 210px;
  }

  .technology-capability__motif {
    width: 130px;
  }

  .technology-capability__content {
    padding: 1.45rem 0 1.8rem;
  }

  .technology-capability__content ul {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.5rem 0.8rem;
  }

  .technology-capability__content li {
    font-size: 0.72rem;
  }

  .technology-flow {
    gap: 0.5rem;
  }

  .technology-flow li {
    min-height: 88px;
    padding-right: 0.45rem;
  }

  .technology-flow li > strong {
    font-size: 0.72rem;
  }

  .technology-flow li > .icon {
    display: none;
  }

  .technology-approach-list {
    grid-template-columns: minmax(0, 1fr);
  }

  .technology-approach-list > li,
  .technology-approach-list > li:nth-child(2n) {
    min-height: 0;
    border-left: 0;
    padding: 1rem 0;
  }

  .technology-approach-list h3 {
    font-size: 1.1rem;
  }

  .technology-faq__trigger {
    grid-template-columns: 26px minmax(0, 1fr) 22px;
    gap: 0.45rem;
    font-size: 0.87rem;
  }

  .technology-faq__answer {
    padding-right: 0.5rem;
    padding-left: 2rem;
  }

  .technology-cta__actions {
    display: grid;
    justify-items: start;
  }
}

@media (max-width: 420px) {
  .technology-system-map {
    --diagram-scale: 0.56;
    transform: translateX(-50%) scale(var(--diagram-scale));
  }

  .technology-system-caption {
    margin-top: -154px;
  }
}

@media (max-width: 360px) {
  .technology-system-map {
    --diagram-scale: 0.48;
    transform: translateX(-50%) scale(var(--diagram-scale));
  }

  .technology-system-caption {
    margin-top: -182px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .technology-page *,
  .technology-page *::before,
  .technology-page *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
