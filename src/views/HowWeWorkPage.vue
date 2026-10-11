<script setup>
import { ref } from 'vue'
import Container from '../components/global/Container.vue'
import Button from '../components/global/Button.vue'
import SectionHeading from '../components/global/SectionHeading.vue'
import Icon from '../components/global/Icon.vue'

const processStages = [
  {
    number: '01',
    title: 'Discover',
    short: 'Understand the context',
    description: 'Understand business goals, customers, current systems, constraints, and challenges.',
    need: 'Business context, audience knowledge, current tools, and what the team wants to change.',
    output: 'A discovery summary that frames the objectives, known constraints, and open questions.',
  },
  {
    number: '02',
    title: 'Diagnose',
    short: 'Find the constraint',
    description: 'Identify bottlenecks, gaps, root causes, and opportunities.',
    need: 'Relevant information and access, team perspectives, and agreement on what requires investigation.',
    output: 'A problem map that distinguishes observed issues, dependencies, and areas to validate.',
  },
  {
    number: '03',
    title: 'Strategize',
    short: 'Set a direction',
    description: 'Define priorities, objectives, recommended actions, and a realistic roadmap.',
    need: 'Priorities, available resources, decision criteria, and the level of ambition the business can support.',
    output: 'Strategic priorities and a roadmap with rationale, dependencies, and suggested next steps.',
  },
  {
    number: '04',
    title: 'Design',
    short: 'Plan the experience',
    description: 'Plan the customer journey, brand experience, digital systems, and operational workflows where relevant.',
    need: 'Agreement on audiences, requirements, user needs, and the elements within the project scope.',
    output: 'An agreed experience or solution plan, such as journey structures, requirements, or workflow definitions.',
  },
  {
    number: '05',
    title: 'Implement',
    short: 'Deliver the agreed work',
    description: 'Deliver agreed solutions, coordinate activities, and test the implementation.',
    need: 'Timely reviews, approvals, access, content, and coordination from the people responsible for decisions.',
    output: 'The agreed implementation, reviewed against requirements and accompanied by relevant launch or handover materials.',
  },
  {
    number: '06',
    title: 'Measure & Improve',
    short: 'Learn and refine',
    description: 'Review relevant indicators, learn from outcomes, and refine the approach.',
    need: 'Agreed objectives, baseline information where available, measurement access, and a review cadence.',
    output: 'A measurement framework or review with findings, limitations, and prioritized opportunities to improve.',
  },
]

const principles = [
  { number: '01', title: 'Business context before tactics', description: 'Understand the business objective and constraints before choosing activities or tools.' },
  { number: '02', title: 'Evidence before assumptions', description: 'Use available information to test what is known, and name the gaps that remain.' },
  { number: '03', title: 'Clear priorities before more activity', description: 'Focus effort on the issues most relevant to agreed business objectives.' },
  { number: '04', title: 'Connected systems, not isolated efforts', description: 'Consider how strategy, brand, customer experience, technology, and operations affect one another.' },
  { number: '05', title: 'Transparent communication and ownership', description: 'Make decisions, responsibilities, dependencies, and changes visible to everyone involved.' },
  { number: '06', title: 'Measurement and learning throughout', description: 'Use relevant signals to inform decisions and refine the work as it develops.' },
]

const challenges = [
  'Businesses invest in tactics before defining the problem.',
  'Teams work in silos with different assumptions and priorities.',
  'Tools and channels are disconnected from the wider journey.',
  'Decisions are made without clear objectives or ownership.',
  'Activity is measured without connecting it to business outcomes.',
]

const indicators = [
  { title: 'Awareness and reach', description: 'Signals related to visibility with the audiences relevant to the objective.' },
  { title: 'Qualified enquiries and conversion', description: 'Responses and progression through an agreed customer or decision journey.' },
  { title: 'Website journey and user behaviour', description: 'How people navigate, understand, and use important digital experiences.' },
  { title: 'Operational efficiency and workflow visibility', description: 'How clearly work, handoffs, ownership, and process status can be understood.' },
  { title: 'Reporting quality and decision speed', description: 'Whether information is useful, available, and timely enough to support decisions.' },
]

const capabilities = [
  { title: 'Strategy & Discovery', route: '/solutions/strategy', note: 'Clarify the business context, priorities, and direction.' },
  { title: 'Brand & Digital Experience', route: '/solutions/brand-digital-experience', note: 'Connect positioning, communication, and customer touchpoints.' },
  { title: 'Performance & Growth', route: '/solutions/performance-growth', note: 'Align acquisition, experience, measurement, and learning.' },
  { title: 'Technology Solutions', route: '/solutions/technology', note: 'Shape digital platforms and systems around business needs.' },
  { title: 'Automation & Systems', route: '/solutions/automation', note: 'Improve workflows and operational coordination where appropriate.' },
]

const questions = [
  {
    question: 'What happens during the first conversation?',
    answer: 'We discuss your business, what you are trying to achieve, what feels difficult today, and any relevant context you can share. The conversation helps clarify whether there is a useful next step; it does not require you to arrive with a finished brief.',
  },
  {
    question: 'Do we need to know exactly what solution we need?',
    answer: 'No. Understanding the challenge is part of the process. We explore the context and possible causes before discussing which capability or combination of work may be relevant.',
  },
  {
    question: 'How is project scope decided?',
    answer: 'Scope is shaped by objectives, findings, requirements, available information, resources, dependencies, and agreed responsibilities. Deliverables, timelines, and assumptions are discussed before work begins.',
  },
  {
    question: 'How involved does our team need to be?',
    answer: 'Your team provides business context, relevant access and approvals, and appropriate decision-makers. The level of involvement depends on the project, but timely input helps keep decisions grounded and work coordinated.',
  },
  {
    question: 'How do you measure progress?',
    answer: 'Measurement follows the objective. We agree on relevant indicators and review what data is available, how reliable it is, and what it can or cannot tell us. Not every outcome can be directly attributed to one activity.',
  },
  {
    question: 'Can the approach change as we learn more?',
    answer: 'Yes. New evidence or changing constraints may affect priorities. Any changes to scope, responsibilities, or agreed work are discussed transparently before proceeding.',
  },
]

const openQuestion = ref(null)

function toggleQuestion(index) {
  openQuestion.value = openQuestion.value === index ? null : index
}

function onQuestionKeydown(event, index) {
  if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return

  event.preventDefault()
  const buttons = [...event.currentTarget.closest('.how-faq__list').querySelectorAll('.how-faq__trigger')]
  const nextIndex = event.key === 'Home'
    ? 0
    : event.key === 'End'
      ? buttons.length - 1
      : (index + (event.key === 'ArrowDown' ? 1 : -1) + buttons.length) % buttons.length
  buttons[nextIndex]?.focus()
}
</script>

<template>
  <div class="how-page">
    <section class="how-hero">
      <Container class="how-hero__layout">
        <div class="how-hero__copy">
          <p class="how-eyebrow"><span></span> HOW WE WORK</p>
          <h1>Good growth starts with understanding the problem.</h1>
          <p class="how-hero__description">
            We start with business context, identify the real bottleneck, and build a practical path forward—rather than recommending disconnected tactics before the challenge is clear.
          </p>
          <div class="how-hero__actions">
            <Button to="/contact">Start a Conversation <Icon name="arrow" :size="17" /></Button>
            <Button to="/solutions" variant="secondary" class="how-button--outline">Explore Our Solutions</Button>
          </div>
          <p class="how-hero__note">Understand the challenge. Agree on a direction. Move with purpose.</p>
        </div>

        <div class="how-hero-visual" role="img" aria-label="Illustration showing a business challenge moving through context, diagnosis, strategy, and design into a clear action plan">
          <div class="how-hero-visual__head"><span>FROM CHALLENGE TO ACTION</span><span>CONNECTED VIEW / 01</span></div>
          <div class="how-challenge-map">
            <svg viewBox="0 0 560 380" preserveAspectRatio="none" aria-hidden="true">
              <path d="M82 190H175M250 190H310M385 190H475" />
              <path class="how-challenge-map__orbit" d="M175 190c0-58 47-105 105-105s105 47 105 105-47 105-105 105-105-47-105-105Z" />
              <path class="how-challenge-map__feedback" d="M480 220v102H80v-98" />
              <circle cx="280" cy="190" r="68" />
            </svg>
            <div class="how-challenge-node how-challenge-node--challenge"><i></i><span>01</span><strong>Business challenge</strong><small>What needs to change?</small></div>
            <div class="how-challenge-node how-challenge-node--context"><i></i><span>02</span><strong>Context</strong><small>Understand the situation</small></div>
            <div class="how-challenge-node how-challenge-node--diagnose"><i></i><span>03</span><strong>Diagnosis</strong><small>Find the constraint</small></div>
            <div class="how-challenge-node how-challenge-node--strategy"><i></i><span>04</span><strong>Strategy</strong><small>Set priorities</small></div>
            <div class="how-challenge-node how-challenge-node--plan"><i></i><span>05</span><strong>Action plan</strong><small>Agree what happens next</small></div>
            <div class="how-challenge-center"><span>BUSINESS</span><strong>GROWTH</strong></div>
          </div>
          <div class="how-hero-visual__foot"><span><i></i> CLARITY</span><span><i></i> DIRECTION</span><span><i></i> ACTION</span></div>
        </div>
      </Container>
      <div class="how-hero__grid" aria-hidden="true"></div>
    </section>

    <section class="how-challenge how-section">
      <Container>
        <div class="how-section-head">
          <SectionHeading
            eyebrow="Why the process matters"
            title="Activity is not the same as progress."
            description="When teams move directly to tactics, effort can become disconnected from the problem it is meant to address. Clarity, ownership, and measurable objectives provide a more useful starting point."
          />
          <p class="how-section-head__aside">A deliberate process makes the reason for action easier to understand.</p>
        </div>
        <ol class="how-challenge-list">
          <li v-for="(challenge, index) in challenges" :key="challenge">
            <span>{{ String(index + 1).padStart(2, '0') }}</span>
            <p>{{ challenge }}</p>
            <i aria-hidden="true"><b></b><b></b><b></b></i>
          </li>
        </ol>
        <p class="how-challenge__conclusion">Define the outcome, agree who owns each decision, then connect execution and measurement to that intent.</p>
      </Container>
    </section>

    <section class="how-principles how-section">
      <Container>
        <div class="how-principles__intro">
          <SectionHeading
            eyebrow="Our operating principles"
            title="Understand first. Build with purpose."
            description="These principles guide the decisions we make together—from the first questions through delivery and ongoing learning."
          />
          <p class="how-principles__aside">A consistent way to think. A flexible way to apply it.</p>
        </div>
        <ol class="how-principles-grid">
          <li v-for="principle in principles" :key="principle.number">
            <span>{{ principle.number }}</span>
            <i aria-hidden="true"></i>
            <h3>{{ principle.title }}</h3>
            <p>{{ principle.description }}</p>
          </li>
        </ol>
      </Container>
    </section>

    <section class="how-process how-section">
      <Container>
        <div class="how-process__intro">
          <SectionHeading
            eyebrow="The ORBIRIS process"
            title="From business challenge to continuous improvement."
            description="Six connected stages provide a shared direction. The level of detail and the work within each stage adapt to the challenge and agreed scope."
          />
          <p class="how-process__aside">The process is connected—not a one-size-fits-all checklist.</p>
        </div>
        <div class="how-process-diagram" role="img" aria-label="Six connected stages: Discover, Diagnose, Strategize, Design, Implement, and Measure and Improve">
          <svg viewBox="0 0 1000 150" preserveAspectRatio="none" aria-hidden="true">
            <path d="M75 52H925" />
            <path class="how-process-diagram__return" d="M925 52v76H75V52" />
          </svg>
          <ol>
            <li v-for="(stage, index) in processStages" :key="stage.number">
              <span>{{ stage.number }}</span><i></i><strong>{{ stage.title }}</strong><small>{{ stage.short }}</small>
              <Icon v-if="index < processStages.length - 1" name="arrow" :size="15" />
            </li>
          </ol>
          <p><i></i> Learning informs the next decision and can return the work to an earlier stage.</p>
        </div>
        <p class="how-process__mobile-note">On smaller screens, each stage follows the previous one in a readable vertical sequence.</p>
      </Container>
    </section>

    <section class="how-stages how-section">
      <Container>
        <div class="how-section-head">
          <SectionHeading
            eyebrow="What happens at each stage?"
            title="Clear expectations from discovery to review."
            description="Each stage starts with the information and decisions needed to move responsibly to the next."
          />
          <p class="how-section-head__aside">Exact deliverables depend on the agreed project scope.</p>
        </div>
        <div class="how-stage-list">
          <article v-for="stage in processStages" :key="stage.number" class="how-stage">
            <div class="how-stage__header">
              <span>{{ stage.number }} / STAGE</span>
              <i aria-hidden="true"></i>
              <h3>{{ stage.title }}</h3>
              <p>{{ stage.description }}</p>
            </div>
            <div class="how-stage__details">
              <div><span>WHAT WE ALIGN ON</span><p>{{ stage.need }}</p></div>
              <div><span>ILLUSTRATIVE OUTPUT</span><p>{{ stage.output }}</p></div>
            </div>
          </article>
        </div>
        <p class="how-stages__note">Illustrative outputs may include a discovery summary, problem map, strategic priorities, roadmap, implementation plan, launch checklist, or measurement framework.</p>
      </Container>
    </section>

    <section class="how-collaboration how-section">
      <Container class="how-collaboration__layout">
        <div>
          <SectionHeading
            eyebrow="Collaboration & responsibilities"
            title="Better outcomes require clear ownership."
            description="Effective collaboration depends on each party understanding what they own and what decisions need to be made together."
          />
          <p class="how-collaboration__note">We can guide and deliver agreed work, but cannot independently control every factor that influences business outcomes.</p>
        </div>
        <div class="how-responsibilities">
          <article class="how-responsibility">
            <div><span>01</span><i></i><strong>ORBIRIS leads</strong></div>
            <p>Agreed discovery, strategy, planning, implementation, and reporting activities.</p>
          </article>
          <article class="how-responsibility">
            <div><span>02</span><i></i><strong>Your team contributes</strong></div>
            <p>Relevant business context, access and approvals where needed, and appropriate decision-makers.</p>
          </article>
          <article class="how-responsibility">
            <div><span>03</span><i></i><strong>We agree together</strong></div>
            <p>Objectives, scope, timelines, responsibilities, and how communication and decisions will work.</p>
          </article>
          <article class="how-responsibility">
            <div><span>04</span><i></i><strong>We discuss changes</strong></div>
            <p>Any change to scope or assumptions is surfaced transparently before the work proceeds differently.</p>
          </article>
        </div>
      </Container>
    </section>

    <section class="how-measure how-section">
      <Container>
        <div class="how-measure__intro">
          <SectionHeading
            eyebrow="Measurement & decision-making"
            title="Measure what matters to the business."
            description="Measurement starts with the objective. The available baseline, tracking, data quality, and project context determine which indicators can be interpreted reliably."
          />
          <p class="how-measure__aside">Indicators are signals to understand—not promises of a specific outcome.</p>
        </div>
        <div class="how-measure-panel" role="group" aria-label="Illustrative categories of business measurement">
          <div class="how-measure-panel__head"><span>OBJECTIVE-LED MEASUREMENT</span><span>ILLUSTRATIVE CATEGORIES</span></div>
          <ol>
            <li v-for="(indicator, index) in indicators" :key="indicator.title">
              <span>{{ String(index + 1).padStart(2, '0') }}</span>
              <div><h3>{{ indicator.title }}</h3><p>{{ indicator.description }}</p></div>
              <i aria-hidden="true"></i>
            </li>
          </ol>
          <p class="how-measure-panel__foot"><i></i> Baselines, tracking availability, and agreed objectives shape what can be measured.</p>
        </div>
      </Container>
    </section>

    <section class="how-adapt how-section">
      <Container>
        <div class="how-adapt__intro">
          <SectionHeading
            eyebrow="Adaptable engagement"
            title="One process. Different business needs."
            description="The framework can focus on a single challenge or connect capabilities when the objective calls for it."
          />
          <p class="how-adapt__aside">Not every project needs every capability.</p>
        </div>
        <ol class="how-capability-list">
          <li v-for="(capability, index) in capabilities" :key="capability.route">
            <span>{{ String(index + 1).padStart(2, '0') }}</span>
            <div><h3>{{ capability.title }}</h3><p>{{ capability.note }}</p></div>
            <RouterLink :to="capability.route" :aria-label="`Explore ${capability.title}`"><Icon name="arrow" :size="18" /></RouterLink>
          </li>
        </ol>
      </Container>
    </section>

    <section class="how-faq how-section">
      <Container class="how-faq__layout">
        <div>
          <SectionHeading
            eyebrow="Frequently asked questions"
            title="A thoughtful process starts with open questions."
            description="Here are a few things people often want to understand before getting started."
          />
          <p class="how-faq__aside">We’ll clarify the approach and expectations together.</p>
          <Button to="/contact">Start a Conversation <Icon name="arrow" :size="16" /></Button>
        </div>
        <div class="how-faq__list">
          <article v-for="(item, index) in questions" :key="item.question" class="how-faq__item">
            <h3>
              <button
                :id="`how-question-${index}`"
                class="how-faq__trigger"
                type="button"
                :aria-expanded="openQuestion === index"
                :aria-controls="`how-answer-${index}`"
                @click="toggleQuestion(index)"
                @keydown="onQuestionKeydown($event, index)"
              >
                <span class="how-faq__number">{{ String(index + 1).padStart(2, '0') }}</span>
                <span>{{ item.question }}</span>
                <span class="how-faq__toggle" aria-hidden="true">{{ openQuestion === index ? '−' : '+' }}</span>
              </button>
            </h3>
            <div v-show="openQuestion === index" :id="`how-answer-${index}`" class="how-faq__answer" role="region" :aria-labelledby="`how-question-${index}`">
              <p>{{ item.answer }}</p>
            </div>
          </article>
        </div>
      </Container>
    </section>

    <section class="how-cta how-section">
      <Container class="how-cta__layout">
        <div>
          <p class="how-eyebrow"><span></span> START WITH THE CHALLENGE</p>
          <h2>Let’s understand the challenge before choosing the solution.</h2>
          <p>Start with a conversation about your business, current challenges, and the direction you want to take.</p>
        </div>
        <div class="how-cta__actions">
          <Button to="/contact">Start a Conversation <Icon name="arrow" :size="17" /></Button>
          <RouterLink to="/solutions">Explore Solutions <Icon name="arrow" :size="16" /></RouterLink>
        </div>
      </Container>
      <div class="how-cta__orbit how-cta__orbit--outer" aria-hidden="true"></div>
      <div class="how-cta__orbit how-cta__orbit--inner" aria-hidden="true"></div>
    </section>
  </div>
</template>

<style scoped>
.how-page {
  overflow: hidden;
  background: var(--color-background);
}

.how-section {
  position: relative;
  padding-block: clamp(4rem, 8vw, 7rem);
}

.how-hero {
  position: relative;
  overflow: hidden;
  padding-block: clamp(4.5rem, 8vw, 7.5rem);
  background: var(--color-navy);
  color: white;
}

.how-hero__layout {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(390px, 1.05fr);
  align-items: center;
  gap: clamp(2rem, 5vw, 4.5rem);
}

.how-hero__copy {
  max-width: 630px;
}

.how-eyebrow {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  margin: 0 0 1.35rem;
  color: #a9def2;
  font-size: 0.69rem;
  font-weight: 700;
  letter-spacing: 0.15em;
}

.how-eyebrow > span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-teal);
  box-shadow: 0 0 0 5px rgba(0, 209, 167, 0.1);
}

.how-hero h1 {
  max-width: 680px;
  margin: 0;
  color: white;
  font-family: var(--font-display);
  font-size: clamp(2.6rem, 5.4vw, 4.75rem);
  font-weight: 700;
  letter-spacing: -0.065em;
  line-height: 1.04;
}

.how-hero__description {
  max-width: 590px;
  margin: 1.45rem 0 0;
  color: #b9cad9;
  font-size: clamp(1rem, 1.45vw, 1.12rem);
  line-height: 1.75;
}

.how-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 2rem;
}

.how-button--outline {
  border-color: rgba(207, 228, 240, 0.35);
  background: transparent;
  color: white;
}

.how-button--outline:hover {
  border-color: var(--color-blue);
  background: rgba(255, 255, 255, 0.05);
}

.how-hero__note {
  margin: 1.3rem 0 0;
  color: #94abc0;
  font-size: 0.8rem;
}

.how-hero__grid,
.how-principles::before {
  position: absolute;
  inset: 0;
  opacity: 0.15;
  pointer-events: none;
  background-image: linear-gradient(rgba(133, 180, 208, 0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(133, 180, 208, 0.16) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: linear-gradient(90deg, transparent, black 70%);
}

.how-hero-visual {
  position: relative;
  z-index: 1;
  min-width: 0;
  border: 1px solid rgba(160, 197, 219, 0.24);
  border-radius: 1.1rem;
  padding: 1rem clamp(0.65rem, 2vw, 1.3rem);
  background: linear-gradient(145deg, rgba(21, 53, 83, 0.94), rgba(9, 29, 52, 0.95));
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.18);
}

.how-hero-visual__head,
.how-hero-visual__foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  color: #89abc2;
  font-size: 0.52rem;
  font-weight: 700;
  letter-spacing: 0.09em;
}

.how-challenge-map {
  position: relative;
  width: 100%;
  max-width: 560px;
  aspect-ratio: 560 / 380;
  margin-inline: auto;
}

.how-challenge-map > svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  fill: none;
  stroke: rgba(0, 180, 255, 0.42);
  stroke-width: 1;
}

.how-challenge-map > svg circle {
  stroke: rgba(0, 209, 167, 0.3);
  stroke-dasharray: 4 7;
}

.how-challenge-map > svg .how-challenge-map__orbit {
  stroke: rgba(0, 180, 255, 0.22);
}

.how-challenge-map > svg .how-challenge-map__feedback {
  stroke: rgba(0, 209, 167, 0.42);
  stroke-dasharray: 5 7;
}

.how-challenge-node {
  position: absolute;
  display: grid;
  width: clamp(94px, 16vw, 128px);
  min-height: 65px;
  grid-template-columns: 13px minmax(0, 1fr);
  align-content: center;
  gap: 0.1rem 0.4rem;
  border: 1px solid rgba(150, 187, 210, 0.32);
  border-radius: 0.55rem;
  padding: 0.45rem 0.55rem;
  background: #102b49;
}

.how-challenge-node > span {
  grid-row: span 2;
  align-self: start;
  color: #78a8c4;
  font-size: 0.5rem;
  font-weight: 700;
}

.how-challenge-node > i {
  position: absolute;
  top: 50%;
  left: -4px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--color-blue);
  transform: translateY(-50%);
}

.how-challenge-node strong {
  color: #f0f8fc;
  font-size: clamp(0.58rem, 0.9vw, 0.72rem);
  line-height: 1.28;
}

.how-challenge-node small {
  color: #9bb2c4;
  font-size: clamp(0.47rem, 0.75vw, 0.57rem);
  line-height: 1.3;
}

.how-challenge-node--challenge {
  top: 42%;
  left: 1%;
  transform: translateY(-50%);
}

.how-challenge-node--context {
  top: 8%;
  left: 50%;
  transform: translateX(-50%);
}

.how-challenge-node--context > i,
.how-challenge-node--strategy > i {
  background: var(--color-teal);
}

.how-challenge-node--diagnose {
  top: 42%;
  right: 1%;
  transform: translateY(-50%);
}

.how-challenge-node--diagnose > i {
  background: var(--color-orange);
}

.how-challenge-node--strategy {
  bottom: 8%;
  left: 18%;
}

.how-challenge-node--plan {
  right: 18%;
  bottom: 8%;
}

.how-challenge-node--plan > i {
  background: var(--color-teal);
}

.how-challenge-center {
  position: absolute;
  top: 50%;
  left: 50%;
  display: grid;
  width: clamp(68px, 10vw, 90px);
  aspect-ratio: 1;
  align-content: center;
  justify-items: center;
  border: 1px solid rgba(0, 180, 255, 0.42);
  border-radius: 50%;
  background: #143454;
  box-shadow: 0 0 0 7px rgba(0, 180, 255, 0.05);
  transform: translate(-50%, -50%);
}

.how-challenge-center span {
  color: #9dbbd0;
  font-size: 0.43rem;
  letter-spacing: 0.12em;
}

.how-challenge-center strong {
  color: white;
  font-family: var(--font-display);
  font-size: 0.61rem;
}

.how-hero-visual__foot {
  justify-content: center;
  gap: clamp(0.7rem, 3vw, 1.5rem);
  border-top: 1px solid rgba(166, 197, 217, 0.16);
  padding-top: 0.8rem;
}

.how-hero-visual__foot span {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
}

.how-hero-visual__foot i {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-blue);
}

.how-hero-visual__foot span:nth-child(2) i {
  background: var(--color-teal);
}

.how-hero-visual__foot span:nth-child(3) i {
  background: var(--color-orange);
}

.how-challenge {
  background: white;
}

.how-section-head,
.how-principles__intro,
.how-process__intro,
.how-measure__intro,
.how-adapt__intro {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 2rem;
}

.how-section-head .section-heading,
.how-principles__intro .section-heading,
.how-process__intro .section-heading,
.how-measure__intro .section-heading,
.how-adapt__intro .section-heading {
  max-width: 760px;
}

.how-section-head__aside,
.how-principles__aside,
.how-process__aside,
.how-measure__aside,
.how-adapt__aside {
  max-width: 265px;
  flex: 0 0 auto;
  margin: 0 0 0.35rem;
  color: var(--color-muted);
  font-size: 0.8rem;
  line-height: 1.65;
}

.how-challenge-list {
  margin: clamp(2.7rem, 5vw, 4rem) 0 0;
  border-top: 1px solid var(--color-border);
  padding: 0;
  list-style: none;
}

.how-challenge-list li {
  display: grid;
  min-height: 74px;
  grid-template-columns: 46px minmax(0, 1fr) 70px;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid var(--color-border);
}

.how-challenge-list li > span {
  color: #8293a5;
  font-size: 0.67rem;
  font-weight: 700;
}

.how-challenge-list p {
  margin: 0;
  color: var(--color-text);
  font-family: var(--font-display);
  font-size: clamp(1rem, 2vw, 1.2rem);
  font-weight: 600;
  letter-spacing: -0.025em;
}

.how-challenge-list li > i {
  display: flex;
  justify-content: end;
  gap: 5px;
}

.how-challenge-list b {
  width: 6px;
  height: 6px;
  border: 1px solid #96a8b8;
  border-radius: 50%;
}

.how-challenge-list li:nth-child(2n) b:nth-child(2),
.how-challenge-list li:nth-child(3n) b:first-child {
  border-color: var(--color-teal);
  background: var(--color-teal);
}

.how-challenge__conclusion {
  max-width: 760px;
  margin: 1.5rem 0 0 auto;
  border-left: 2px solid var(--color-teal);
  padding-left: 1rem;
  color: #53687c;
  font-family: var(--font-display);
  font-size: 0.92rem;
  line-height: 1.65;
}

.how-principles {
  overflow: hidden;
  background: #0a1b30;
  color: white;
}

.how-principles::before {
  content: '';
}

.how-principles .section-heading__title,
.how-process .section-heading__title {
  color: white;
}

.how-principles .section-heading__description,
.how-process .section-heading__description {
  color: #b6c5d5;
}

.how-principles .section-heading__eyebrow,
.how-process .section-heading__eyebrow {
  border-color: rgba(0, 180, 255, 0.35);
  background: rgba(0, 180, 255, 0.12);
  color: #b8eaff;
}

.how-principles__intro,
.how-principles-grid,
.how-process__intro,
.how-process-diagram,
.how-process__mobile-note {
  position: relative;
  z-index: 1;
}

.how-principles__aside,
.how-process__aside {
  border-left: 2px solid var(--color-teal);
  padding-left: 0.9rem;
  color: #c2d4e1;
}

.how-principles-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin: clamp(2.8rem, 5vw, 4rem) 0 0;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  border-left: 1px solid rgba(255, 255, 255, 0.15);
  padding: 0;
  list-style: none;
}

.how-principles-grid li {
  position: relative;
  min-height: 205px;
  border-right: 1px solid rgba(255, 255, 255, 0.15);
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  padding: 1.35rem clamp(1rem, 2vw, 1.7rem);
}

.how-principles-grid li > span {
  color: #78c8e8;
  font-size: 0.65rem;
  font-weight: 700;
}

.how-principles-grid li > i {
  position: absolute;
  top: 1.62rem;
  right: 1.45rem;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-teal);
}

.how-principles-grid li:nth-child(3n) > i {
  background: var(--color-orange);
}

.how-principles-grid h3 {
  max-width: 270px;
  margin: 1.1rem 0 0;
  color: white;
  font-family: var(--font-display);
  font-size: clamp(1.02rem, 1.7vw, 1.3rem);
  letter-spacing: -0.025em;
  line-height: 1.35;
}

.how-principles-grid p {
  max-width: 330px;
  margin: 0.55rem 0 0;
  color: #aebfd0;
  font-size: 0.82rem;
  line-height: 1.6;
}

.how-process {
  overflow: hidden;
  background: var(--color-navy);
  color: white;
}

.how-process-diagram {
  margin-top: 3rem;
  border-top: 1px solid rgba(255, 255, 255, 0.16);
  border-bottom: 1px solid rgba(255, 255, 255, 0.16);
  padding: 1.5rem 0 1.1rem;
}

.how-process-diagram > svg {
  position: absolute;
  inset: 0 0 2.2rem;
  width: 100%;
  height: calc(100% - 2.2rem);
  fill: none;
  stroke: rgba(0, 180, 255, 0.5);
  stroke-width: 1;
}

.how-process-diagram > svg .how-process-diagram__return {
  stroke: rgba(0, 209, 167, 0.4);
  stroke-dasharray: 5 8;
}

.how-process-diagram ol {
  position: relative;
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 0.6rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.how-process-diagram li {
  position: relative;
  display: grid;
  min-width: 0;
  justify-items: center;
  gap: 0.55rem;
  text-align: center;
}

.how-process-diagram li > span {
  color: #7fcbea;
  font-size: 0.62rem;
  font-weight: 700;
}

.how-process-diagram li > i {
  width: 15px;
  height: 15px;
  border: 1px solid var(--color-blue);
  border-radius: 50%;
  background: var(--color-navy);
  box-shadow: 0 0 0 6px rgba(0, 180, 255, 0.07);
}

.how-process-diagram li:nth-child(3n) > i {
  border-color: var(--color-teal);
}

.how-process-diagram li:nth-child(5) > i {
  border-color: var(--color-orange);
}

.how-process-diagram li > strong {
  color: #f2f8fc;
  font-family: var(--font-display);
  font-size: clamp(0.76rem, 1.25vw, 0.96rem);
}

.how-process-diagram li > small {
  max-width: 140px;
  color: #a3b9c9;
  font-size: 0.63rem;
  line-height: 1.45;
}

.how-process-diagram li > .icon {
  position: absolute;
  top: 1.8rem;
  right: -0.32rem;
  color: var(--color-teal);
}

.how-process-diagram > p {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.55rem;
  margin: 1.3rem 0 0;
  color: #aabfce;
  font-size: 0.73rem;
  text-align: center;
}

.how-process-diagram > p i {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-teal);
}

.how-process__mobile-note {
  display: none;
  margin: 0.85rem 0 0;
  color: #a1b8c8;
  font-size: 0.73rem;
}

.how-stages {
  background: #f0f4f8;
}

.how-stage-list {
  margin-top: clamp(2.8rem, 5vw, 4rem);
  border-top: 1px solid var(--color-border);
}

.how-stage {
  display: grid;
  grid-template-columns: minmax(0, 0.78fr) minmax(0, 1.22fr);
  gap: clamp(1.5rem, 5vw, 4rem);
  border-bottom: 1px solid var(--color-border);
  padding-block: 1.8rem;
}

.how-stage__header > span {
  color: #74899b;
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.12em;
}

.how-stage__header > i {
  display: block;
  width: 32px;
  height: 2px;
  margin-top: 1rem;
  background: var(--color-teal);
}

.how-stage__header h3 {
  margin: 0.7rem 0 0;
  color: var(--color-navy);
  font-family: var(--font-display);
  font-size: clamp(1.3rem, 2.3vw, 1.8rem);
  letter-spacing: -0.04em;
}

.how-stage__header > p {
  max-width: 390px;
  margin: 0.5rem 0 0;
  color: var(--color-muted);
  font-size: 0.83rem;
  line-height: 1.65;
}

.how-stage__details {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;
  align-content: center;
}

.how-stage__details > div {
  border-left: 1px solid #cbd6df;
  padding-left: 1rem;
}

.how-stage__details span {
  color: #75899b;
  font-size: 0.57rem;
  font-weight: 700;
  letter-spacing: 0.1em;
}

.how-stage__details p {
  margin: 0.45rem 0 0;
  color: #53677b;
  font-size: 0.78rem;
  line-height: 1.65;
}

.how-stages__note {
  max-width: 850px;
  margin: 1.2rem 0 0 auto;
  color: var(--color-muted);
  font-size: 0.75rem;
  line-height: 1.6;
  text-align: right;
}

.how-collaboration {
  background: white;
}

.how-collaboration__layout,
.how-measure > .container,
.how-faq__layout {
  display: grid;
  grid-template-columns: minmax(0, 0.82fr) minmax(0, 1.18fr);
  gap: clamp(3rem, 8vw, 7rem);
}

.how-collaboration__note {
  max-width: 460px;
  margin: 1.3rem 0 0;
  border-left: 2px solid var(--color-orange);
  padding-left: 0.9rem;
  color: var(--color-muted);
  font-size: 0.83rem;
  line-height: 1.65;
}

.how-responsibilities {
  border-top: 1px solid var(--color-border);
}

.how-responsibility {
  border-bottom: 1px solid var(--color-border);
  padding: 1rem 0;
}

.how-responsibility > div {
  display: flex;
  align-items: center;
  gap: 0.65rem;
}

.how-responsibility > div > span {
  color: #8293a5;
  font-size: 0.63rem;
  font-weight: 700;
}

.how-responsibility > div > i {
  width: 22px;
  height: 1px;
  background: var(--color-teal);
}

.how-responsibility strong {
  color: var(--color-navy);
  font-family: var(--font-display);
  font-size: 0.94rem;
}

.how-responsibility p {
  max-width: 600px;
  margin: 0.45rem 0 0 3.3rem;
  color: var(--color-muted);
  font-size: 0.82rem;
  line-height: 1.6;
}

.how-measure {
  background: #f0f4f8;
}

.how-measure__intro {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 2rem;
  grid-column: 1 / -1;
}

.how-measure__aside {
  border-left: 2px solid var(--color-orange);
  padding-left: 0.9rem;
}

.how-measure-panel {
  grid-column: 1 / -1;
  border: 1px solid #cbd7e1;
  border-radius: 0.9rem;
  padding: clamp(1rem, 2.5vw, 1.6rem);
  background: white;
  box-shadow: 0 14px 44px rgba(11, 31, 59, 0.05);
}

.how-measure-panel__head {
  display: flex;
  justify-content: space-between;
  gap: 0.8rem;
  color: #71869a;
  font-size: 0.58rem;
  font-weight: 700;
  letter-spacing: 0.1em;
}

.how-measure-panel ol {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  margin: 1.3rem 0 0;
  border-top: 1px solid #dce5ec;
  padding: 0;
  list-style: none;
}

.how-measure-panel li {
  position: relative;
  min-height: 142px;
  border-right: 1px solid #e3eaf0;
  padding: 1rem 1rem 0 0;
}

.how-measure-panel li + li {
  padding-left: 1rem;
}

.how-measure-panel li:last-child {
  border-right: 0;
}

.how-measure-panel li > span {
  color: var(--color-link);
  font-size: 0.63rem;
  font-weight: 700;
}

.how-measure-panel li h3 {
  margin: 0.8rem 0 0;
  color: var(--color-navy);
  font-family: var(--font-display);
  font-size: 0.9rem;
  letter-spacing: -0.02em;
  line-height: 1.35;
}

.how-measure-panel li p {
  margin: 0.45rem 0 0;
  color: var(--color-muted);
  font-size: 0.72rem;
  line-height: 1.55;
}

.how-measure-panel li > i {
  position: absolute;
  top: -4px;
  left: 0;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--color-blue);
}

.how-measure-panel li:nth-child(2) > i,
.how-measure-panel li:nth-child(4) > i {
  background: var(--color-teal);
}

.how-measure-panel li:last-child > i {
  background: var(--color-orange);
}

.how-measure-panel__foot {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0;
  border-top: 1px solid #e3eaf0;
  padding-top: 0.9rem;
  color: #71869a;
  font-size: 0.68rem;
  line-height: 1.5;
}

.how-measure-panel__foot i {
  width: 6px;
  height: 6px;
  flex: 0 0 auto;
  border-radius: 50%;
  background: var(--color-orange);
}

.how-adapt {
  background: white;
}

.how-adapt__aside {
  border-left: 2px solid var(--color-teal);
  padding-left: 0.9rem;
}

.how-capability-list {
  margin: 2.5rem 0 0;
  border-top: 1px solid var(--color-border);
  padding: 0;
  list-style: none;
}

.how-capability-list li {
  display: grid;
  min-height: 88px;
  grid-template-columns: 44px minmax(0, 1fr) 44px;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid var(--color-border);
}

.how-capability-list li > span {
  color: #8293a5;
  font-size: 0.66rem;
  font-weight: 700;
}

.how-capability-list h3 {
  margin: 0;
  color: var(--color-navy);
  font-family: var(--font-display);
  font-size: clamp(1rem, 1.8vw, 1.25rem);
  letter-spacing: -0.025em;
}

.how-capability-list p {
  margin: 0.25rem 0 0;
  color: var(--color-muted);
  font-size: 0.78rem;
  line-height: 1.5;
}

.how-capability-list a {
  display: grid;
  width: 38px;
  height: 38px;
  place-items: center;
  border: 1px solid var(--color-border);
  border-radius: 50%;
  color: var(--color-link);
  transition: border-color 160ms ease, background-color 160ms ease;
}

.how-capability-list a:hover {
  border-color: var(--color-blue);
  background: rgba(0, 180, 255, 0.08);
}

.how-faq {
  background: #f0f4f8;
}

.how-faq__layout {
  align-items: start;
}

.how-faq__aside {
  max-width: 350px;
  margin: 1.3rem 0;
  color: var(--color-muted);
  font-size: 0.83rem;
  line-height: 1.65;
}

.how-faq__list {
  border-top: 1px solid #cfd9e2;
}

.how-faq__item {
  border-bottom: 1px solid #cfd9e2;
}

.how-faq__item h3 {
  margin: 0;
  font-size: inherit;
}

.how-faq__trigger {
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
  font-size: 0.96rem;
  font-weight: 700;
  text-align: left;
}

.how-faq__trigger:hover {
  color: var(--color-link);
}

.how-faq__number {
  color: #8293a5;
  font-family: var(--font-body);
  font-size: 0.65rem;
}

.how-faq__toggle {
  justify-self: end;
  color: var(--color-link);
  font-size: 1.3rem;
  font-weight: 400;
}

.how-faq__answer {
  padding: 0 2.5rem 1.25rem;
}

.how-faq__answer p {
  max-width: 680px;
  margin: 0;
  color: var(--color-muted);
  font-size: 0.86rem;
  line-height: 1.75;
}

.how-cta {
  position: relative;
  overflow: hidden;
  background: var(--color-navy);
  color: white;
}

.how-cta__layout {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: 2rem;
}

.how-cta h2 {
  max-width: 770px;
  margin: 0;
  color: white;
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3.35rem);
  letter-spacing: -0.055em;
  line-height: 1.12;
}

.how-cta__layout > div:first-child > p:last-child {
  max-width: 650px;
  margin: 1rem 0 0;
  color: #b6c5d5;
  font-size: 0.97rem;
  line-height: 1.7;
}

.how-cta__actions {
  display: grid;
  justify-items: start;
  gap: 1rem;
}

.how-cta__actions > a:last-child {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #b8eaff;
  font-size: 0.82rem;
  font-weight: 650;
  text-decoration-thickness: 1px;
  text-underline-offset: 4px;
}

.how-cta__actions > a:last-child:hover {
  color: white;
}

.how-cta__orbit {
  position: absolute;
  top: 50%;
  right: -140px;
  width: 430px;
  aspect-ratio: 1;
  border: 1px solid rgba(0, 180, 255, 0.24);
  border-radius: 50%;
  transform: translateY(-50%);
}

.how-cta__orbit--inner {
  right: -60px;
  width: 270px;
  border-color: rgba(0, 209, 167, 0.22);
}

@media (max-width: 900px) {
  .how-hero__layout {
    grid-template-columns: minmax(0, 1fr);
    gap: 2.5rem;
  }

  .how-stage {
    grid-template-columns: minmax(0, 0.7fr) minmax(0, 1.3fr);
    gap: 1.5rem;
  }
}

@media (max-width: 760px) {
  .how-hero__layout,
  .how-collaboration__layout,
  .how-faq__layout,
  .how-cta__layout {
    grid-template-columns: minmax(0, 1fr);
  }

  .how-hero__layout {
    gap: 2.5rem;
  }

  .how-section-head,
  .how-principles__intro,
  .how-process__intro,
  .how-measure__intro,
  .how-adapt__intro {
    display: block;
  }

  .how-section-head__aside,
  .how-principles__aside,
  .how-process__aside,
  .how-measure__aside,
  .how-adapt__aside {
    max-width: 460px;
    margin-top: 1rem;
  }

  .how-principles-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .how-principles-grid li {
    min-height: 190px;
  }

  .how-process-diagram ol {
    grid-template-columns: minmax(0, 1fr);
    gap: 0;
  }

  .how-process-diagram > svg {
    display: none;
  }

  .how-process-diagram li {
    min-height: 74px;
    grid-template-columns: 34px 20px minmax(0, 0.85fr) minmax(0, 1.15fr);
    justify-items: start;
    align-items: center;
    gap: 0.65rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
    padding: 0.75rem 0;
    text-align: left;
  }

  .how-process-diagram li > i {
    width: 12px;
    height: 12px;
  }

  .how-process-diagram li > small {
    max-width: none;
    justify-self: end;
    text-align: right;
  }

  .how-process-diagram li > .icon {
    display: none;
  }

  .how-process-diagram > p {
    margin-top: 1rem;
  }

  .how-process__mobile-note {
    display: block;
  }

  .how-stage {
    grid-template-columns: minmax(0, 1fr);
    gap: 1.2rem;
  }

  .how-stage__header {
    display: grid;
    grid-template-columns: auto 28px minmax(0, 1fr);
    align-items: center;
    gap: 0.45rem 0.65rem;
  }

  .how-stage__header > i {
    width: 24px;
    margin: 0;
  }

  .how-stage__header h3 {
    margin: 0;
    font-size: 1.3rem;
  }

  .how-stage__header > p {
    grid-column: 1 / -1;
    max-width: 620px;
    margin-top: 0.3rem;
  }

  .how-stage__details {
    padding-left: 0.2rem;
  }

  .how-collaboration__layout,
  .how-faq__layout {
    gap: 2.5rem;
  }

  .how-measure-panel ol {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .how-measure-panel li {
    min-height: 115px;
  }

  .how-measure-panel li:nth-child(2n) {
    border-right: 0;
    padding-left: 1rem;
  }

  .how-measure-panel li:last-child {
    grid-column: 1 / -1;
    min-height: 100px;
    border-right: 0;
    border-bottom: 0;
    padding-left: 0;
  }

  .how-cta__actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem 1.5rem;
  }
}

@media (max-width: 540px) {
  .how-hero h1 {
    font-size: clamp(2.4rem, 11.6vw, 3.4rem);
  }

  .how-hero__actions {
    align-items: stretch;
  }

  .how-hero__actions :deep(.button) {
    width: 100%;
  }

  .how-hero-visual {
    padding-inline: 0.55rem;
  }

  .how-hero-visual__head {
    font-size: 0.44rem;
  }

  .how-challenge-node {
    width: 82px;
    min-height: 53px;
    grid-template-columns: 9px minmax(0, 1fr);
    gap: 0.08rem 0.28rem;
    padding: 0.33rem;
  }

  .how-challenge-node strong {
    font-size: 0.54rem;
  }

  .how-challenge-node small {
    font-size: 0.44rem;
  }

  .how-challenge-node > span {
    font-size: 0.41rem;
  }

  .how-challenge-node--challenge {
    left: 0;
  }

  .how-challenge-node--diagnose {
    right: 0;
  }

  .how-challenge-node--strategy {
    left: 12%;
  }

  .how-challenge-node--plan {
    right: 12%;
  }

  .how-challenge-center {
    width: 56px;
  }

  .how-challenge-center span {
    font-size: 0.36rem;
  }

  .how-challenge-center strong {
    font-size: 0.5rem;
  }

  .how-hero-visual__foot {
    gap: 0.4rem;
    font-size: 0.43rem;
  }

  .how-challenge-list li {
    grid-template-columns: 27px minmax(0, 1fr) 32px;
    gap: 0.55rem;
    padding-block: 0.75rem;
  }

  .how-challenge-list p {
    font-size: 0.92rem;
    line-height: 1.45;
  }

  .how-challenge-list li > i {
    gap: 3px;
  }

  .how-challenge-list b {
    width: 5px;
    height: 5px;
  }

  .how-challenge__conclusion {
    font-size: 0.84rem;
  }

  .how-principles-grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .how-principles-grid li {
    min-height: 0;
    padding: 1.05rem;
  }

  .how-principles-grid h3 {
    margin-top: 0.75rem;
    font-size: 1.08rem;
  }

  .how-principles-grid p {
    font-size: 0.78rem;
  }

  .how-process-diagram {
    margin-top: 2rem;
    padding-top: 0.75rem;
  }

  .how-process-diagram li {
    min-height: 69px;
    grid-template-columns: 27px 16px minmax(0, 0.9fr) minmax(0, 1.1fr);
    gap: 0.45rem;
  }

  .how-process-diagram li > strong {
    font-size: 0.83rem;
  }

  .how-process-diagram li > small {
    font-size: 0.58rem;
  }

  .how-process-diagram > p {
    font-size: 0.68rem;
    line-height: 1.5;
  }

  .how-stage__details {
    grid-template-columns: minmax(0, 1fr);
    gap: 0.9rem;
  }

  .how-stage__details > div {
    padding-left: 0.8rem;
  }

  .how-stage__details p {
    font-size: 0.76rem;
  }

  .how-stages__note {
    font-size: 0.71rem;
    text-align: left;
  }

  .how-responsibility p {
    margin-left: 2.8rem;
    font-size: 0.78rem;
  }

  .how-measure-panel {
    padding: 0.85rem;
  }

  .how-measure-panel__head {
    font-size: 0.48rem;
  }

  .how-measure-panel ol {
    grid-template-columns: minmax(0, 1fr);
  }

  .how-measure-panel li,
  .how-measure-panel li:nth-child(2n),
  .how-measure-panel li:last-child {
    display: grid;
    min-height: 0;
    grid-template-columns: 26px minmax(0, 1fr) 8px;
    align-items: start;
    gap: 0.55rem;
    border-right: 0;
    border-bottom: 1px solid #e3eaf0;
    padding: 0.85rem 0;
  }

  .how-measure-panel li > span {
    grid-row: span 2;
  }

  .how-measure-panel li > i {
    position: static;
    grid-column: 3;
    grid-row: 1;
    margin-top: 0.25rem;
  }

  .how-measure-panel li h3 {
    margin: 0;
    font-size: 0.84rem;
  }

  .how-measure-panel li p {
    margin-top: 0.25rem;
    font-size: 0.7rem;
  }

  .how-measure-panel__foot {
    font-size: 0.64rem;
  }

  .how-capability-list li {
    min-height: 78px;
    grid-template-columns: 27px minmax(0, 1fr) 34px;
    gap: 0.55rem;
  }

  .how-capability-list p {
    font-size: 0.72rem;
  }

  .how-capability-list a {
    width: 32px;
    height: 32px;
  }

  .how-faq__trigger {
    grid-template-columns: 26px minmax(0, 1fr) 22px;
    gap: 0.45rem;
    font-size: 0.86rem;
  }

  .how-faq__answer {
    padding-right: 0.5rem;
    padding-left: 2rem;
  }

  .how-cta__actions {
    display: grid;
    justify-items: start;
  }
}

@media (max-width: 400px) {
  .how-challenge-map {
    display: grid;
    max-width: none;
    aspect-ratio: auto;
    gap: 0.45rem;
    padding-block: 0.65rem;
  }

  .how-challenge-map > svg {
    display: none;
  }

  .how-challenge-node {
    position: relative;
    inset: auto;
    display: grid;
    width: 100%;
    min-height: 46px;
    grid-template-columns: 25px minmax(0, 1fr);
    align-content: center;
    align-items: center;
    gap: 0.1rem 0.4rem;
    padding: 0.45rem 0.6rem;
    transform: none;
  }

  .how-challenge-node > span {
    grid-row: span 2;
    align-self: center;
    font-size: 0.53rem;
  }

  .how-challenge-node > i {
    top: 50%;
    left: 9px;
    width: 6px;
    height: 6px;
  }

  .how-challenge-node strong {
    font-size: 0.68rem;
  }

  .how-challenge-node small {
    font-size: 0.56rem;
  }

  .how-challenge-node:not(.how-challenge-node--plan)::after {
    position: absolute;
    bottom: -0.5rem;
    left: 11px;
    width: 1px;
    height: 0.5rem;
    background: rgba(0, 209, 167, 0.7);
    content: '';
  }

  .how-challenge-center {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .how-page *,
  .how-page *::before,
  .how-page *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
