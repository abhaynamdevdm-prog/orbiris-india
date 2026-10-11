<script setup>
import { ref } from 'vue'
import Container from '../components/global/Container.vue'
import Button from '../components/global/Button.vue'
import SectionHeading from '../components/global/SectionHeading.vue'
import Icon from '../components/global/Icon.vue'

const contextDimensions = [
  { title: 'Customer and buyer behaviour', description: 'Who is involved, what they need, and how they make decisions.' },
  { title: 'Trust and purchase decisions', description: 'What information, assurance, or experience helps a decision progress.' },
  { title: 'Sales and enquiry journey', description: 'How discovery becomes a conversation, evaluation, or purchase.' },
  { title: 'Operational complexity', description: 'The people, processes, and systems involved in delivering value.' },
  { title: 'Measurement and business priorities', description: 'What progress means for the organization and how it can be assessed.' },
]

const industries = [
  {
    number: '01',
    name: 'Healthcare',
    route: '/industries/healthcare',
    descriptor: 'Trust, care, and clear communication shape how people discover and engage with healthcare services.',
    challenges: ['Building trust and service awareness', 'Communicating clearly with patients', 'Managing enquiries and follow-up'],
    solutions: ['/solutions/strategy', '/solutions/brand-digital-experience', '/solutions/performance-growth', '/solutions/technology', '/solutions/automation'],
    mark: 'healthcare',
  },
  {
    number: '02',
    name: 'Manufacturing',
    route: '/industries/manufacturing',
    descriptor: 'Complex offers and considered B2B buying journeys call for useful product information and connected sales support.',
    challenges: ['Communicating technical value', 'Generating qualified B2B enquiries', 'Supporting distributor and sales journeys'],
    solutions: ['/solutions/strategy', '/solutions/brand-digital-experience', '/solutions/performance-growth', '/solutions/technology'],
    mark: 'manufacturing',
  },
  {
    number: '03',
    name: 'Retail',
    route: '/industries/retail',
    descriptor: 'Product discovery and customer experience can span multiple digital touchpoints and business priorities.',
    challenges: ['Making product discovery clear', 'Connecting customer experiences', 'Aligning repeat engagement with objectives'],
    solutions: ['/solutions/brand-digital-experience', '/solutions/performance-growth', '/solutions/technology', '/solutions/automation'],
    mark: 'retail',
  },
  {
    number: '04',
    name: 'Real Estate',
    route: '/industries/real-estate',
    descriptor: 'Property decisions often involve substantial consideration, multiple questions, and responsive enquiry handling.',
    challenges: ['Supporting project discovery', 'Understanding enquiry quality', 'Coordinating lead routing and follow-up'],
    solutions: ['/solutions/strategy', '/solutions/brand-digital-experience', '/solutions/performance-growth', '/solutions/automation'],
    mark: 'real-estate',
  },
  {
    number: '05',
    name: 'Education',
    route: '/industries/education',
    descriptor: 'Prospective students and families need clear information to compare options and understand the next step.',
    challenges: ['Communicating course value', 'Helping people compare options', 'Managing admissions enquiries and follow-up'],
    solutions: ['/solutions/strategy', '/solutions/brand-digital-experience', '/solutions/performance-growth', '/solutions/automation'],
    mark: 'education',
  },
  {
    number: '06',
    name: 'Professional Services',
    route: '/industries/professional-services',
    descriptor: 'Services built on expertise benefit from clear positioning and a credible path from discovery to consultation.',
    challenges: ['Explaining expertise and value', 'Establishing credibility and differentiation', 'Turning enquiries into consultations'],
    solutions: ['/solutions/strategy', '/solutions/brand-digital-experience', '/solutions/performance-growth', '/solutions/technology'],
    mark: 'professional',
  },
  {
    number: '07',
    name: 'Technology',
    route: '/industries/technology',
    descriptor: 'Complex products need an understandable value proposition and a considered path from discovery to opportunity.',
    challenges: ['Communicating complex products', 'Clarifying value propositions', 'Supporting product discovery and qualified opportunities'],
    solutions: ['/solutions/strategy', '/solutions/brand-digital-experience', '/solutions/performance-growth', '/solutions/technology', '/solutions/automation'],
    mark: 'technology',
  },
]

const solutions = [
  { number: '01', name: 'Strategy & Discovery', route: '/solutions/strategy', description: 'Understand the business context, priorities, audience, and opportunities.' },
  { number: '02', name: 'Brand & Digital Experience', route: '/solutions/brand-digital-experience', description: 'Connect positioning, communication, websites, and customer touchpoints.' },
  { number: '03', name: 'Performance & Growth', route: '/solutions/performance-growth', description: 'Align acquisition, conversion experience, measurement, and learning.' },
  { number: '04', name: 'Technology Solutions', route: '/solutions/technology', description: 'Shape digital platforms and systems around business and user needs.' },
  { number: '05', name: 'Automation & Systems', route: '/solutions/automation', description: 'Explore workflow and operational coordination where appropriate.' },
]

const approach = [
  { number: '01', title: 'Understand the business model and audience.', description: 'Clarify who the business serves, how it creates value, and what it is trying to achieve.' },
  { number: '02', title: 'Identify the important constraint or opportunity.', description: 'Look beyond symptoms to the issue most relevant to the business objective.' },
  { number: '03', title: 'Map the customer journey and operational workflow.', description: 'See how customer decisions and internal delivery connect in the current context.' },
  { number: '04', title: 'Prioritize relevant digital interventions.', description: 'Consider suitable actions in light of resources, dependencies, and business readiness.' },
  { number: '05', title: 'Define how progress will be assessed and improved.', description: 'Agree on useful indicators and a practical way to review what is learned.' },
]

const startingPoints = [
  { title: 'We need clarity on the problem.', route: '/solutions/strategy', link: 'Explore Strategy & Discovery', accent: 'clarity' },
  { title: 'We need a stronger digital experience.', route: '/solutions/brand-digital-experience', link: 'Explore Brand & Digital Experience', accent: 'experience' },
  { title: 'We need to improve growth or operations.', route: '/solutions', link: 'Explore All Solutions', accent: 'growth' },
]

const questions = [
  {
    question: 'Does ORBIRIS work with businesses across different industries?',
    answer: 'The approach is designed to start with the business context rather than assume one industry template. Suitability depends on the organization, challenge, project requirements, and the work that can be agreed.',
  },
  {
    question: 'How do you adapt your approach to an industry?',
    answer: 'We learn about the business model, audience, buying decisions, customer journey, operations, constraints, and priorities. That context informs which questions and capabilities are relevant; industry labels alone do not define the solution.',
  },
  {
    question: 'Does every industry need the same digital solutions?',
    answer: 'No. Businesses have different customers, processes, needs, and levels of readiness. Recommendations depend on the specific context, and not every business needs every capability.',
  },
  {
    question: 'Can multiple capabilities be combined in one project?',
    answer: 'They can be combined when that makes sense for an agreed objective. The capabilities, responsibilities, and deliverables are scoped around the business need rather than bundled as a required package.',
  },
  {
    question: 'What if our industry is not listed?',
    answer: 'The list is not exhaustive. We can discuss your business context and requirements to determine whether there is a suitable way to work together.',
  },
]

const solutionNames = {
  '/solutions/strategy': 'Strategy',
  '/solutions/brand-digital-experience': 'Brand & Experience',
  '/solutions/performance-growth': 'Performance',
  '/solutions/technology': 'Technology',
  '/solutions/automation': 'Systems',
}

const openQuestion = ref(null)

function toggleQuestion(index) {
  openQuestion.value = openQuestion.value === index ? null : index
}

function onQuestionKeydown(event, index) {
  if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return

  event.preventDefault()
  const buttons = [...event.currentTarget.closest('.industries-faq__list').querySelectorAll('.industries-faq__trigger')]
  const nextIndex = event.key === 'Home'
    ? 0
    : event.key === 'End'
      ? buttons.length - 1
      : (index + (event.key === 'ArrowDown' ? 1 : -1) + buttons.length) % buttons.length
  buttons[nextIndex]?.focus()
}
</script>

<template>
  <div class="industries-page">
    <section class="industries-hero">
      <Container class="industries-hero__layout">
        <div class="industries-hero__copy">
          <p class="industries-eyebrow"><span></span> INDUSTRIES WE SUPPORT</p>
          <h1>Different industries. Different challenges. One business-first approach.</h1>
          <p class="industries-hero__description">
            Business growth depends on understanding the industry, audience, buying process, operations, and the company's current stage. We adapt the work to that context rather than sell the same package to every business.
          </p>
          <div class="industries-hero__actions">
            <Button to="/contact">Discuss Your Business <Icon name="arrow" :size="17" /></Button>
            <Button to="/solutions" variant="secondary" class="industries-button--outline">Explore Our Solutions</Button>
          </div>
          <p class="industries-hero__note">Turning Business Challenges into Digital Growth.</p>
        </div>

        <div class="industries-ecosystem" role="img" aria-label="Different industry contexts connected to a central business growth framework">
          <div class="industries-ecosystem__head"><span>BUSINESS CONTEXTS</span><span>ONE CONNECTED FRAMEWORK</span></div>
          <div class="industries-ecosystem__canvas">
            <svg viewBox="0 0 560 430" preserveAspectRatio="none" aria-hidden="true">
              <path d="M280 215 120 80M280 215 280 58M280 215 440 80M280 215 470 215M280 215 440 350M280 215 280 372M280 215 120 350M280 215 90 215" />
              <circle cx="280" cy="215" r="153" />
              <circle class="industries-ecosystem__orbit" cx="280" cy="215" r="103" />
            </svg>
            <div class="industries-ecosystem__core"><span>BUSINESS</span><strong>GROWTH</strong><small>context first</small></div>
            <span class="industries-ecosystem__node industries-ecosystem__node--health">Healthcare</span>
            <span class="industries-ecosystem__node industries-ecosystem__node--manufacturing">Manufacturing</span>
            <span class="industries-ecosystem__node industries-ecosystem__node--retail">Retail</span>
            <span class="industries-ecosystem__node industries-ecosystem__node--real-estate">Real Estate</span>
            <span class="industries-ecosystem__node industries-ecosystem__node--education">Education</span>
            <span class="industries-ecosystem__node industries-ecosystem__node--professional">Professional Services</span>
            <span class="industries-ecosystem__node industries-ecosystem__node--technology">Technology</span>
          </div>
          <div class="industries-ecosystem__foot"><span><i></i> AUDIENCE</span><span><i></i> OPERATIONS</span><span><i></i> PRIORITIES</span></div>
        </div>
      </Container>
      <div class="industries-hero__grid" aria-hidden="true"></div>
    </section>

    <section class="industries-context industries-section">
      <Container>
        <div class="industries-section-head">
          <SectionHeading
            eyebrow="Industry context matters"
            title="Your industry changes the problem you need to solve."
            description="A healthcare provider, manufacturer, retailer, property business, educational institution, and technology company do not share identical growth barriers. And businesses within the same sector can have very different needs."
          />
          <p class="industries-section-head__aside">Understand the conditions around the business before deciding what to change.</p>
        </div>
        <ol class="industries-dimensions">
          <li v-for="(dimension, index) in contextDimensions" :key="dimension.title">
            <span>{{ String(index + 1).padStart(2, '0') }}</span>
            <div><h3>{{ dimension.title }}</h3><p>{{ dimension.description }}</p></div>
            <i aria-hidden="true"><b></b><b></b></i>
          </li>
        </ol>
      </Container>
    </section>

    <section class="industries-list-section industries-section">
      <Container>
        <div class="industries-section-head">
          <SectionHeading
            eyebrow="Industries we work with"
            title="Different contexts. Relevant questions."
            description="These examples illustrate challenges a business might explore—not claims about specific companies or guaranteed industry outcomes."
          />
          <p class="industries-section-head__aside">Explore an industry, then start a conversation about your particular business.</p>
        </div>
        <div class="industry-list">
          <article v-for="(industry, index) in industries" :key="industry.route" class="industry-entry" :class="[`industry-entry--${industry.mark}`, { 'industry-entry--reverse': index % 2 === 1 }]">
            <div class="industry-entry__visual" aria-hidden="true">
              <div class="industry-entry__motif"><i></i><i></i><i></i><b></b></div>
              <span class="industry-entry__visual-index">INDUSTRY / {{ industry.number }}</span>
              <span class="industry-entry__visual-name">{{ industry.name }}</span>
            </div>
            <div class="industry-entry__content">
              <div class="industry-entry__heading"><span>{{ industry.number }} / INDUSTRY CONTEXT</span><RouterLink :to="industry.route">{{ industry.name }} <Icon name="arrow" :size="17" /></RouterLink></div>
              <p class="industry-entry__description">{{ industry.descriptor }}</p>
              <div class="industry-entry__challenge-group">
                <h3>Illustrative challenges</h3>
                <ul><li v-for="challenge in industry.challenges" :key="challenge">{{ challenge }}</li></ul>
              </div>
              <div class="industry-entry__solutions">
                <span>RELATED CAPABILITIES</span>
                <RouterLink v-for="route in industry.solutions" :key="route" :to="route">{{ solutionNames[route] }}</RouterLink>
              </div>
            </div>
          </article>
        </div>
        <p class="industries-list__disclaimer"><i></i> Industry examples are illustrative. The relevant challenge and approach depend on each business's circumstances.</p>
      </Container>
    </section>

    <section class="industries-system industries-section">
      <Container>
        <div class="industries-system__intro">
          <SectionHeading
            eyebrow="A connected solution system"
            title="Start with the business need, not a predefined package."
            description="Capabilities can work together where useful, but each engagement starts with the objective and the specific work that can be agreed."
          />
          <p class="industries-system__aside">Not every business needs every capability.</p>
        </div>
        <div class="industries-system-map" role="img" aria-label="Five connected ORBIRIS capabilities around a central business need: strategy and discovery, brand and digital experience, performance and growth, technology solutions, and automation and systems">
          <svg viewBox="0 0 900 440" preserveAspectRatio="none" aria-hidden="true">
            <path d="M450 220 155 75M450 220 450 65M450 220 745 75M450 220 250 365M450 220 650 365" />
            <circle cx="450" cy="220" r="152" />
          </svg>
          <div class="industries-system-map__core"><span>START WITH</span><strong>THE NEED</strong><small>then connect what fits</small></div>
          <div v-for="(solution, index) in solutions" :key="solution.route" class="industries-system-map__node" :class="`industries-system-map__node--${index + 1}`">
            <span>{{ solution.number }}</span><strong>{{ solution.name }}</strong><small>{{ solution.description }}</small>
          </div>
        </div>
        <ol class="industries-solution-links">
          <li v-for="solution in solutions" :key="solution.route"><RouterLink :to="solution.route">{{ solution.name }} <Icon name="arrow" :size="15" /></RouterLink></li>
        </ol>
      </Container>
    </section>

    <section class="industries-approach industries-section">
      <Container>
        <div class="industries-section-head">
          <SectionHeading
            eyebrow="How we approach industry challenges"
            title="Context first. Solutions second."
            description="A practical sequence keeps industry insight connected to business priorities and the realities of implementation."
          />
          <RouterLink class="industries-approach__link" to="/how-we-work">See how we work <Icon name="arrow" :size="16" /></RouterLink>
        </div>
        <ol class="industries-approach-list">
          <li v-for="(step, index) in approach" :key="step.number">
            <span>{{ step.number }}</span><i aria-hidden="true"></i>
            <div><h3>{{ step.title }}</h3><p>{{ step.description }}</p></div>
            <Icon v-if="index < approach.length - 1" name="arrow" :size="17" />
          </li>
        </ol>
      </Container>
    </section>

    <section class="industries-start industries-section">
      <Container>
        <div class="industries-start__intro">
          <SectionHeading
            eyebrow="Choose your starting point"
            title="Begin with what needs attention now."
            description="These are entry points for discussion, not rigid service packages. The right next step depends on the context."
          />
        </div>
        <div class="industries-start-list">
          <RouterLink v-for="(path, index) in startingPoints" :key="path.route" :to="path.route" class="industries-start-item" :class="`industries-start-item--${path.accent}`">
            <span>{{ String(index + 1).padStart(2, '0') }}</span>
            <strong>{{ path.title }}</strong>
            <small>{{ path.link }}</small>
            <Icon name="arrow" :size="18" />
          </RouterLink>
        </div>
      </Container>
    </section>

    <section class="industries-faq industries-section">
      <Container class="industries-faq__layout">
        <div>
          <SectionHeading
            eyebrow="Frequently asked questions"
            title="Your context shapes the conversation."
            description="Industry can inform the questions, but it does not prescribe the answer."
          />
          <p class="industries-faq__aside">Let’s discuss what is specific to your business.</p>
          <Button to="/contact">Discuss Your Business <Icon name="arrow" :size="16" /></Button>
        </div>
        <div class="industries-faq__list">
          <article v-for="(item, index) in questions" :key="item.question" class="industries-faq__item">
            <h3>
              <button
                :id="`industries-question-${index}`"
                class="industries-faq__trigger"
                type="button"
                :aria-expanded="openQuestion === index"
                :aria-controls="`industries-answer-${index}`"
                @click="toggleQuestion(index)"
                @keydown="onQuestionKeydown($event, index)"
              >
                <span class="industries-faq__number">{{ String(index + 1).padStart(2, '0') }}</span>
                <span>{{ item.question }}</span>
                <span class="industries-faq__toggle" aria-hidden="true">{{ openQuestion === index ? '−' : '+' }}</span>
              </button>
            </h3>
            <div v-show="openQuestion === index" :id="`industries-answer-${index}`" class="industries-faq__answer" role="region" :aria-labelledby="`industries-question-${index}`">
              <p>{{ item.answer }}</p>
            </div>
          </article>
        </div>
      </Container>
    </section>

    <section class="industries-cta industries-section">
      <Container class="industries-cta__layout">
        <div>
          <p class="industries-eyebrow"><span></span> BUSINESS FIRST</p>
          <h2>Let's understand your industry before deciding what comes next.</h2>
          <p>Tell us about your business, your current challenges, and the growth you want to pursue.</p>
        </div>
        <div class="industries-cta__actions">
          <Button to="/contact">Start a Conversation <Icon name="arrow" :size="17" /></Button>
          <RouterLink to="/how-we-work">How We Work <Icon name="arrow" :size="16" /></RouterLink>
        </div>
      </Container>
      <div class="industries-cta__orbit industries-cta__orbit--outer" aria-hidden="true"></div>
      <div class="industries-cta__orbit industries-cta__orbit--inner" aria-hidden="true"></div>
    </section>
  </div>
</template>

<style scoped>
.industries-page {
  overflow: hidden;
  background: var(--color-background);
}

.industries-section {
  position: relative;
  padding-block: clamp(4rem, 8vw, 7rem);
}

.industries-hero {
  position: relative;
  overflow: hidden;
  padding-block: clamp(4.5rem, 8vw, 7.5rem);
  background: var(--color-navy);
  color: white;
}

.industries-hero__layout {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 0.94fr) minmax(390px, 1.06fr);
  align-items: center;
  gap: clamp(2rem, 5vw, 4.5rem);
}

.industries-hero__copy {
  max-width: 650px;
}

.industries-eyebrow {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  margin: 0 0 1.35rem;
  color: #a9def2;
  font-size: 0.69rem;
  font-weight: 700;
  letter-spacing: 0.15em;
}

.industries-eyebrow > span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-teal);
  box-shadow: 0 0 0 5px rgba(0, 209, 167, 0.1);
}

.industries-hero h1 {
  max-width: 700px;
  margin: 0;
  color: white;
  font-family: var(--font-display);
  font-size: clamp(2.55rem, 5.2vw, 4.5rem);
  font-weight: 700;
  letter-spacing: -0.065em;
  line-height: 1.05;
}

.industries-hero__description {
  max-width: 590px;
  margin: 1.45rem 0 0;
  color: #b9cad9;
  font-size: clamp(1rem, 1.4vw, 1.1rem);
  line-height: 1.75;
}

.industries-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 2rem;
}

.industries-button--outline {
  border-color: rgba(207, 228, 240, 0.35);
  background: transparent;
  color: white;
}

.industries-button--outline:hover {
  border-color: var(--color-blue);
  background: rgba(255, 255, 255, 0.05);
}

.industries-hero__note {
  margin: 1.25rem 0 0;
  color: #94abc0;
  font-size: 0.8rem;
}

.industries-hero__grid {
  position: absolute;
  inset: 0;
  opacity: 0.15;
  pointer-events: none;
  background-image: linear-gradient(rgba(133, 180, 208, 0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(133, 180, 208, 0.16) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: linear-gradient(90deg, transparent, black 70%);
}

.industries-ecosystem {
  position: relative;
  z-index: 1;
  min-width: 0;
  border: 1px solid rgba(160, 197, 219, 0.24);
  border-radius: 1.1rem;
  padding: 1rem clamp(0.65rem, 2vw, 1.3rem);
  background: linear-gradient(145deg, rgba(21, 53, 83, 0.94), rgba(9, 29, 52, 0.95));
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.18);
}

.industries-ecosystem__head,
.industries-ecosystem__foot {
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  color: #89abc2;
  font-size: 0.52rem;
  font-weight: 700;
  letter-spacing: 0.09em;
}

.industries-ecosystem__canvas {
  position: relative;
  width: 100%;
  max-width: 560px;
  aspect-ratio: 560 / 430;
  margin-inline: auto;
}

.industries-ecosystem__canvas > svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  fill: none;
  stroke: rgba(0, 180, 255, 0.36);
  stroke-width: 1;
}

.industries-ecosystem__canvas > svg circle {
  stroke: rgba(0, 209, 167, 0.22);
  stroke-dasharray: 4 7;
}

.industries-ecosystem__canvas > svg .industries-ecosystem__orbit {
  stroke: rgba(0, 180, 255, 0.24);
  stroke-dasharray: none;
}

.industries-ecosystem__core {
  position: absolute;
  top: 50%;
  left: 50%;
  display: grid;
  width: clamp(88px, 13vw, 118px);
  aspect-ratio: 1;
  align-content: center;
  justify-items: center;
  border: 1px solid rgba(0, 180, 255, 0.58);
  border-radius: 50%;
  background: #143454;
  box-shadow: 0 0 0 9px rgba(0, 180, 255, 0.055);
  transform: translate(-50%, -50%);
}

.industries-ecosystem__core span {
  color: #a7c5d8;
  font-size: 0.48rem;
  letter-spacing: 0.13em;
}

.industries-ecosystem__core strong {
  color: white;
  font-family: var(--font-display);
  font-size: 0.79rem;
}

.industries-ecosystem__core small {
  margin-top: 0.25rem;
  color: #91adc0;
  font-size: 0.55rem;
}

.industries-ecosystem__node {
  position: absolute;
  display: inline-flex;
  align-items: center;
  min-height: 30px;
  border: 1px solid rgba(150, 187, 210, 0.35);
  border-radius: 999px;
  padding: 0.38rem 0.65rem;
  background: #102b49;
  color: #eef7fc;
  font-size: clamp(0.57rem, 0.9vw, 0.7rem);
  font-weight: 600;
  white-space: nowrap;
}

.industries-ecosystem__node::before {
  width: 6px;
  height: 6px;
  flex: 0 0 auto;
  margin-right: 0.4rem;
  border-radius: 50%;
  background: var(--color-blue);
  content: '';
}

.industries-ecosystem__node--health {
  top: 7%;
  left: 2%;
}

.industries-ecosystem__node--manufacturing {
  top: 2%;
  left: 50%;
  transform: translateX(-50%);
}

.industries-ecosystem__node--manufacturing::before,
.industries-ecosystem__node--education::before {
  background: var(--color-teal);
}

.industries-ecosystem__node--retail {
  top: 7%;
  right: 2%;
}

.industries-ecosystem__node--real-estate {
  top: 50%;
  right: 0;
  transform: translateY(-50%);
}

.industries-ecosystem__node--real-estate::before {
  background: var(--color-orange);
}

.industries-ecosystem__node--education {
  bottom: 7%;
  right: 5%;
}

.industries-ecosystem__node--professional {
  bottom: 2%;
  left: 50%;
  transform: translateX(-50%);
}

.industries-ecosystem__node--technology {
  bottom: 7%;
  left: 3%;
}

.industries-ecosystem__foot {
  justify-content: center;
  gap: clamp(0.65rem, 3vw, 1.5rem);
  border-top: 1px solid rgba(166, 197, 217, 0.16);
  padding-top: 0.8rem;
}

.industries-ecosystem__foot span {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
}

.industries-ecosystem__foot i {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-blue);
}

.industries-ecosystem__foot span:nth-child(2) i {
  background: var(--color-teal);
}

.industries-ecosystem__foot span:nth-child(3) i {
  background: var(--color-orange);
}

.industries-context {
  background: white;
}

.industries-section-head,
.industries-system__intro,
.industries-approach .industries-section-head,
.industries-start__intro {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 2rem;
}

.industries-section-head .section-heading,
.industries-system__intro .section-heading,
.industries-start__intro .section-heading {
  max-width: 760px;
}

.industries-section-head__aside,
.industries-system__aside {
  max-width: 265px;
  flex: 0 0 auto;
  margin: 0 0 0.35rem;
  color: var(--color-muted);
  font-size: 0.8rem;
  line-height: 1.65;
}

.industries-dimensions {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  margin: 3rem 0 0;
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  padding: 0;
  list-style: none;
}

.industries-dimensions li {
  position: relative;
  min-height: 190px;
  border-right: 1px solid var(--color-border);
  padding: 1.15rem 1rem 1.2rem 0;
}

.industries-dimensions li + li {
  padding-left: 1rem;
}

.industries-dimensions li:last-child {
  border-right: 0;
}

.industries-dimensions li > span {
  color: var(--color-link);
  font-size: 0.64rem;
  font-weight: 700;
}

.industries-dimensions li h3 {
  margin: 1rem 0 0;
  color: var(--color-navy);
  font-family: var(--font-display);
  font-size: clamp(0.91rem, 1.4vw, 1.08rem);
  letter-spacing: -0.025em;
  line-height: 1.4;
}

.industries-dimensions li p {
  margin: 0.5rem 0 0;
  color: var(--color-muted);
  font-size: 0.75rem;
  line-height: 1.55;
}

.industries-dimensions li > i {
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  display: flex;
  gap: 4px;
}

.industries-dimensions li > i b {
  width: 5px;
  height: 5px;
  border: 1px solid #91a5b5;
  border-radius: 50%;
}

.industries-dimensions li:nth-child(2n) > i b:first-child {
  border-color: var(--color-teal);
  background: var(--color-teal);
}

.industries-list-section {
  background: #f0f4f8;
}

.industry-list {
  margin-top: clamp(2.5rem, 5vw, 4rem);
  border-top: 1px solid #cbd6df;
}

.industry-entry {
  display: grid;
  grid-template-columns: minmax(240px, 0.72fr) minmax(0, 1.28fr);
  align-items: stretch;
  gap: clamp(1.5rem, 4.5vw, 4rem);
  border-bottom: 1px solid #cbd6df;
  padding-block: 1.7rem;
}

.industry-entry--reverse .industry-entry__visual {
  order: 2;
}

.industry-entry--reverse .industry-entry__content {
  order: 1;
}

.industry-entry__visual {
  position: relative;
  display: grid;
  min-height: 255px;
  overflow: hidden;
  place-items: center;
  background:
    linear-gradient(rgba(11, 31, 59, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(11, 31, 59, 0.05) 1px, transparent 1px),
    #e5edf3;
  background-size: 30px 30px;
}

.industry-entry:nth-child(3n) .industry-entry__visual {
  background-color: #e6efed;
}

.industry-entry:nth-child(3n + 2) .industry-entry__visual {
  background-color: #e9edf5;
}

.industry-entry__motif {
  position: relative;
  display: grid;
  width: min(55%, 170px);
  aspect-ratio: 1;
  place-items: center;
}

.industry-entry__motif i {
  position: absolute;
  width: 100%;
  aspect-ratio: 1;
  border: 1px solid rgba(11, 31, 59, 0.32);
  border-radius: 50%;
}

.industry-entry__motif i:nth-child(2) {
  width: 70%;
  border-color: rgba(0, 180, 255, 0.65);
  border-style: dashed;
}

.industry-entry__motif i:nth-child(3) {
  width: 36%;
  border-color: rgba(0, 209, 167, 0.85);
}

.industry-entry__motif b {
  z-index: 1;
  width: 12%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: var(--color-blue);
  box-shadow: 0 0 0 7px rgba(0, 180, 255, 0.13);
}

.industry-entry--healthcare .industry-entry__motif i:first-child {
  transform: scaleX(0.66) rotate(45deg);
}

.industry-entry--manufacturing .industry-entry__motif i:first-child {
  border-radius: 12%;
  transform: rotate(30deg);
}

.industry-entry--retail .industry-entry__motif i:nth-child(2) {
  border-radius: 12%;
  transform: rotate(45deg);
}

.industry-entry--real-estate .industry-entry__motif i:first-child {
  border-radius: 0;
  transform: scaleX(0.65);
}

.industry-entry--education .industry-entry__motif i:nth-child(3) {
  width: 28%;
  border-style: dotted;
}

.industry-entry--professional .industry-entry__motif i:nth-child(2) {
  transform: scaleY(0.58) rotate(35deg);
}

.industry-entry--technology .industry-entry__motif i:first-child {
  border-style: dashed;
  transform: rotate(22deg);
}

.industry-entry__visual-index,
.industry-entry__visual-name {
  position: absolute;
  right: 0.9rem;
  left: 0.9rem;
}

.industry-entry__visual-index {
  top: 0.85rem;
  color: #74899a;
  font-size: 0.57rem;
  font-weight: 700;
  letter-spacing: 0.11em;
}

.industry-entry__visual-name {
  bottom: 0.8rem;
  color: rgba(11, 31, 59, 0.1);
  font-family: var(--font-display);
  font-size: clamp(1.7rem, 4vw, 3.2rem);
  font-weight: 800;
  letter-spacing: -0.07em;
  text-align: right;
}

.industry-entry__content {
  align-self: center;
  min-width: 0;
  padding-block: 0.3rem;
}

.industry-entry__heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.industry-entry__heading > span {
  color: #71869a;
  font-size: 0.59rem;
  font-weight: 700;
  letter-spacing: 0.11em;
}

.industry-entry__heading > a {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  color: var(--color-link);
  font-family: var(--font-display);
  font-size: clamp(1.18rem, 2vw, 1.5rem);
  font-weight: 700;
  letter-spacing: -0.04em;
  text-decoration: none;
}

.industry-entry__heading > a:hover {
  color: var(--color-navy);
}

.industry-entry__description {
  max-width: 700px;
  margin: 0.75rem 0 0;
  color: #53677b;
  font-size: 0.86rem;
  line-height: 1.7;
}

.industry-entry__challenge-group {
  margin-top: 1.15rem;
}

.industry-entry__challenge-group h3 {
  margin: 0;
  color: #71869a;
  font-size: 0.58rem;
  font-weight: 700;
  letter-spacing: 0.11em;
  text-transform: uppercase;
}

.industry-entry__challenge-group ul {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.45rem 1.1rem;
  margin: 0.65rem 0 0;
  padding: 0;
  list-style: none;
}

.industry-entry__challenge-group li {
  position: relative;
  padding-left: 0.9rem;
  color: #43566b;
  font-size: 0.74rem;
  line-height: 1.5;
}

.industry-entry__challenge-group li::before {
  position: absolute;
  top: 0.55em;
  left: 0;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--color-teal);
  content: '';
}

.industry-entry__solutions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.45rem;
  margin-top: 1rem;
  border-top: 1px solid #d7e0e7;
  padding-top: 0.75rem;
}

.industry-entry__solutions > span {
  flex: 0 0 100%;
  margin-bottom: 0.1rem;
  color: #71869a;
  font-size: 0.54rem;
  font-weight: 700;
  letter-spacing: 0.1em;
}

.industry-entry__solutions > a {
  border: 1px solid #d2dde5;
  border-radius: 999px;
  padding: 0.3rem 0.55rem;
  background: rgba(255, 255, 255, 0.55);
  color: #425b70;
  font-size: 0.62rem;
  text-decoration: none;
  transition: border-color 160ms ease, color 160ms ease;
}

.industry-entry__solutions > a:hover {
  border-color: var(--color-blue);
  color: var(--color-link);
}

.industries-list__disclaimer {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  margin: 1.1rem 0 0;
  color: var(--color-muted);
  font-size: 0.74rem;
  line-height: 1.55;
}

.industries-list__disclaimer i {
  width: 6px;
  height: 6px;
  flex: 0 0 auto;
  border-radius: 50%;
  background: var(--color-orange);
}

.industries-system {
  overflow: hidden;
  background: var(--color-navy);
  color: white;
}

.industries-system .section-heading__title {
  color: white;
}

.industries-system .section-heading__description {
  color: #b6c5d5;
}

.industries-system .section-heading__eyebrow {
  border-color: rgba(0, 180, 255, 0.35);
  background: rgba(0, 180, 255, 0.12);
  color: #b8eaff;
}

.industries-system__intro,
.industries-system-map,
.industries-solution-links {
  position: relative;
  z-index: 1;
}

.industries-system__aside {
  border-left: 2px solid var(--color-teal);
  padding-left: 0.9rem;
  color: #c2d4e1;
}

.industries-system-map {
  position: relative;
  width: min(100%, 900px);
  height: 440px;
  margin: 2.5rem auto 0;
}

.industries-system-map > svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  fill: none;
  stroke: rgba(0, 180, 255, 0.36);
  stroke-width: 1;
}

.industries-system-map > svg circle {
  stroke: rgba(0, 209, 167, 0.24);
  stroke-dasharray: 4 7;
}

.industries-system-map__core {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  display: grid;
  width: 142px;
  aspect-ratio: 1;
  align-content: center;
  justify-items: center;
  border: 1px solid rgba(0, 180, 255, 0.6);
  border-radius: 50%;
  background: #112d4c;
  box-shadow: 0 0 0 12px rgba(0, 180, 255, 0.05);
  transform: translate(-50%, -50%);
}

.industries-system-map__core span {
  color: #9ebbd0;
  font-size: 0.54rem;
  letter-spacing: 0.12em;
}

.industries-system-map__core strong {
  color: white;
  font-family: var(--font-display);
  font-size: 0.88rem;
}

.industries-system-map__core small {
  margin-top: 0.3rem;
  color: #8ca9be;
  font-size: 0.6rem;
}

.industries-system-map__node {
  position: absolute;
  z-index: 1;
  display: grid;
  width: 205px;
  min-height: 78px;
  grid-template-columns: 27px minmax(0, 1fr);
  align-content: center;
  gap: 0.2rem 0.5rem;
  border: 1px solid rgba(155, 191, 213, 0.3);
  border-radius: 0.65rem;
  padding: 0.7rem 0.8rem;
  background: #102845;
}

.industries-system-map__node > span {
  grid-row: span 2;
  align-self: start;
  color: #70c7ea;
  font-size: 0.62rem;
  font-weight: 700;
}

.industries-system-map__node strong {
  color: #f2f8fc;
  font-family: var(--font-display);
  font-size: 0.78rem;
  line-height: 1.35;
}

.industries-system-map__node small {
  color: #9db3c4;
  font-size: 0.64rem;
  line-height: 1.4;
}

.industries-system-map__node::after {
  position: absolute;
  top: 50%;
  right: -4px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--color-blue);
  content: '';
  transform: translateY(-50%);
}

.industries-system-map__node--1 {
  top: 2%;
  left: 2%;
}

.industries-system-map__node--2 {
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}

.industries-system-map__node--3 {
  top: 2%;
  right: 2%;
}

.industries-system-map__node--4 {
  bottom: 2%;
  left: 19%;
}

.industries-system-map__node--5 {
  right: 19%;
  bottom: 2%;
}

.industries-system-map__node--2::after,
.industries-system-map__node--5::after {
  background: var(--color-teal);
}

.industries-system-map__node--3::after {
  background: var(--color-orange);
}

.industries-solution-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.55rem;
  margin: 1rem 0 0;
  padding: 0;
  list-style: none;
}

.industries-solution-links a {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  border: 1px solid rgba(157, 191, 213, 0.32);
  border-radius: 999px;
  padding: 0.4rem 0.65rem;
  color: #c4d7e4;
  font-size: 0.67rem;
  text-decoration: none;
}

.industries-solution-links a:hover {
  border-color: var(--color-blue);
  color: white;
}

.industries-approach {
  background: white;
}

.industries-approach__link {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  gap: 0.45rem;
  margin-bottom: 0.35rem;
  color: var(--color-link);
  font-size: 0.82rem;
  font-weight: 700;
  text-decoration-thickness: 1px;
  text-underline-offset: 4px;
}

.industries-approach-list {
  margin: 2.7rem 0 0;
  border-top: 1px solid var(--color-border);
  padding: 0;
  list-style: none;
}

.industries-approach-list li {
  display: grid;
  min-height: 92px;
  grid-template-columns: 42px 18px minmax(0, 1fr) 24px;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid var(--color-border);
}

.industries-approach-list li > span {
  color: var(--color-link);
  font-size: 0.66rem;
  font-weight: 700;
}

.industries-approach-list li > i {
  width: 13px;
  height: 13px;
  border: 1px solid var(--color-blue);
  border-radius: 50%;
  box-shadow: 0 0 0 5px rgba(0, 180, 255, 0.07);
}

.industries-approach-list li:nth-child(3n) > i {
  border-color: var(--color-teal);
}

.industries-approach-list h3 {
  margin: 0;
  color: var(--color-navy);
  font-family: var(--font-display);
  font-size: clamp(0.98rem, 1.8vw, 1.18rem);
  letter-spacing: -0.025em;
}

.industries-approach-list p {
  margin: 0.3rem 0 0;
  color: var(--color-muted);
  font-size: 0.77rem;
  line-height: 1.55;
}

.industries-approach-list .icon {
  color: var(--color-link);
}

.industries-start {
  background: #f0f4f8;
}

.industries-start-list {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 2.5rem;
  border-top: 1px solid #cbd6df;
  border-bottom: 1px solid #cbd6df;
}

.industries-start-item {
  position: relative;
  display: grid;
  min-height: 205px;
  grid-template-columns: 33px minmax(0, 1fr) 22px;
  align-content: start;
  gap: 0.75rem;
  padding: 1.25rem 1.3rem 1.25rem 0;
  color: inherit;
  text-decoration: none;
}

.industries-start-item + .industries-start-item {
  border-left: 1px solid #cbd6df;
  padding-left: 1.3rem;
}

.industries-start-item > span {
  color: #8293a5;
  font-size: 0.64rem;
  font-weight: 700;
}

.industries-start-item > strong {
  color: var(--color-navy);
  font-family: var(--font-display);
  font-size: clamp(1rem, 1.7vw, 1.25rem);
  letter-spacing: -0.03em;
  line-height: 1.35;
}

.industries-start-item > small {
  grid-column: 2;
  color: var(--color-link);
  font-size: 0.73rem;
  font-weight: 700;
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 4px;
}

.industries-start-item > .icon {
  grid-column: 3;
  grid-row: 1 / span 2;
  justify-self: end;
  color: var(--color-link);
  transition: transform 160ms ease;
}

.industries-start-item:hover > .icon {
  transform: translateX(3px);
}

.industries-start-item::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 35px;
  height: 2px;
  background: var(--color-blue);
  content: '';
}

.industries-start-item--experience::after {
  background: var(--color-teal);
}

.industries-start-item--growth::after {
  background: var(--color-orange);
}

.industries-faq {
  background: white;
}

.industries-faq__layout {
  display: grid;
  grid-template-columns: minmax(250px, 0.72fr) minmax(0, 1.28fr);
  align-items: start;
  gap: clamp(2.5rem, 7vw, 6rem);
}

.industries-faq__aside {
  max-width: 350px;
  margin: 1.3rem 0;
  color: var(--color-muted);
  font-size: 0.83rem;
  line-height: 1.65;
}

.industries-faq__list {
  border-top: 1px solid var(--color-border);
}

.industries-faq__item {
  border-bottom: 1px solid var(--color-border);
}

.industries-faq__item h3 {
  margin: 0;
  font-size: inherit;
}

.industries-faq__trigger {
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
  font-size: 0.95rem;
  font-weight: 700;
  text-align: left;
}

.industries-faq__trigger:hover {
  color: var(--color-link);
}

.industries-faq__number {
  color: #8293a5;
  font-family: var(--font-body);
  font-size: 0.65rem;
}

.industries-faq__toggle {
  justify-self: end;
  color: var(--color-link);
  font-size: 1.3rem;
  font-weight: 400;
}

.industries-faq__answer {
  padding: 0 2.5rem 1.25rem;
}

.industries-faq__answer p {
  max-width: 680px;
  margin: 0;
  color: var(--color-muted);
  font-size: 0.85rem;
  line-height: 1.75;
}

.industries-cta {
  position: relative;
  overflow: hidden;
  background: var(--color-navy);
  color: white;
}

.industries-cta__layout {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: 2rem;
}

.industries-cta h2 {
  max-width: 780px;
  margin: 0;
  color: white;
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3.35rem);
  letter-spacing: -0.055em;
  line-height: 1.12;
}

.industries-cta__layout > div:first-child > p:last-child {
  max-width: 640px;
  margin: 1rem 0 0;
  color: #b6c5d5;
  font-size: 0.97rem;
  line-height: 1.7;
}

.industries-cta__actions {
  display: grid;
  justify-items: start;
  gap: 1rem;
}

.industries-cta__actions > a:last-child {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #b8eaff;
  font-size: 0.82rem;
  font-weight: 650;
  text-decoration-thickness: 1px;
  text-underline-offset: 4px;
}

.industries-cta__actions > a:last-child:hover {
  color: white;
}

.industries-cta__orbit {
  position: absolute;
  top: 50%;
  right: -145px;
  width: 430px;
  aspect-ratio: 1;
  border: 1px solid rgba(0, 180, 255, 0.24);
  border-radius: 50%;
  transform: translateY(-50%);
}

.industries-cta__orbit--inner {
  right: -65px;
  width: 270px;
  border-color: rgba(0, 209, 167, 0.22);
}

@media (max-width: 1000px) {
  .industries-hero__layout {
    grid-template-columns: minmax(0, 0.9fr) minmax(340px, 1.1fr);
    gap: 2rem;
  }

  .industries-dimensions {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .industries-dimensions li:nth-child(3n) {
    border-right: 0;
  }

  .industries-dimensions li:nth-child(4),
  .industries-dimensions li:nth-child(5) {
    border-top: 1px solid var(--color-border);
  }

  .industries-system-map__node {
    width: 185px;
  }
}

@media (max-width: 760px) {
  .industries-hero__layout,
  .industries-faq__layout,
  .industries-cta__layout {
    grid-template-columns: minmax(0, 1fr);
  }

  .industries-hero__layout {
    gap: 2.5rem;
  }

  .industries-section-head,
  .industries-system__intro,
  .industries-approach .industries-section-head,
  .industries-start__intro {
    display: block;
  }

  .industries-section-head__aside,
  .industries-system__aside {
    max-width: 460px;
    margin-top: 1rem;
  }

  .industry-entry {
    grid-template-columns: minmax(190px, 0.65fr) minmax(0, 1.35fr);
    gap: 1.4rem;
  }

  .industry-entry__visual {
    min-height: 275px;
  }

  .industry-entry__challenge-group ul {
    grid-template-columns: minmax(0, 1fr);
    gap: 0.35rem;
  }

  .industries-system-map {
    width: 650px;
    height: 380px;
    left: 50%;
    margin: 2rem 0 0;
    transform: translateX(-50%) scale(0.86);
    transform-origin: top center;
  }

  .industries-system-map > svg {
    width: 650px;
    height: 380px;
  }

  .industries-system-map__node {
    width: 176px;
  }

  .industries-solution-links {
    margin-top: 1rem;
  }

  .industries-approach .industries-section-head {
    display: flex;
    align-items: end;
  }

  .industries-start-list {
    grid-template-columns: minmax(0, 1fr);
  }

  .industries-start-item {
    min-height: 112px;
    grid-template-columns: 32px minmax(0, 1fr) 24px;
    align-content: center;
    padding: 1rem 0;
  }

  .industries-start-item + .industries-start-item {
    border-top: 1px solid #cbd6df;
    border-left: 0;
    padding-left: 0;
  }

  .industries-start-item > strong {
    font-size: 1.12rem;
  }

  .industries-start-item > small {
    grid-column: 2;
  }

  .industries-start-item > .icon {
    grid-column: 3;
    grid-row: 1 / span 2;
  }

  .industries-start-item::after {
    width: 28px;
  }

  .industries-faq__layout {
    gap: 2.5rem;
  }

  .industries-cta__actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem 1.5rem;
  }
}

@media (max-width: 540px) {
  .industries-hero h1 {
    font-size: clamp(2.35rem, 11.5vw, 3.35rem);
  }

  .industries-hero__actions {
    align-items: stretch;
  }

  .industries-hero__actions :deep(.button) {
    width: 100%;
  }

  .industries-ecosystem {
    padding-inline: 0.55rem;
  }

  .industries-ecosystem__head {
    font-size: 0.42rem;
  }

  .industries-ecosystem__node {
    min-height: 24px;
    padding: 0.28rem 0.42rem;
    font-size: 0.49rem;
  }

  .industries-ecosystem__node::before {
    width: 5px;
    height: 5px;
    margin-right: 0.25rem;
  }

  .industries-ecosystem__node--health,
  .industries-ecosystem__node--technology {
    left: 0;
  }

  .industries-ecosystem__node--retail,
  .industries-ecosystem__node--education {
    right: 0;
  }

  .industries-ecosystem__node--real-estate {
    right: -1%;
  }

  .industries-ecosystem__core {
    width: 68px;
  }

  .industries-ecosystem__core span {
    font-size: 0.37rem;
  }

  .industries-ecosystem__core strong {
    font-size: 0.62rem;
  }

  .industries-ecosystem__core small {
    font-size: 0.45rem;
  }

  .industries-ecosystem__foot {
    gap: 0.4rem;
    font-size: 0.42rem;
  }

  .industries-dimensions {
    grid-template-columns: minmax(0, 1fr);
    margin-top: 2rem;
  }

  .industries-dimensions li,
  .industries-dimensions li + li {
    min-height: 120px;
    border-right: 0;
    border-bottom: 1px solid var(--color-border);
    padding: 0.85rem 2.3rem 0.85rem 0;
  }

  .industries-dimensions li:nth-child(4) {
    border-top: 0;
  }

  .industries-dimensions li:last-child {
    border-bottom: 0;
  }

  .industries-dimensions li h3 {
    margin-top: 0.45rem;
    font-size: 0.98rem;
  }

  .industries-dimensions li p {
    max-width: 440px;
    margin-top: 0.25rem;
    font-size: 0.73rem;
  }

  .industry-entry,
  .industry-entry--reverse {
    grid-template-columns: minmax(0, 1fr);
    gap: 1.1rem;
    padding-block: 1.1rem;
  }

  .industry-entry--reverse .industry-entry__visual,
  .industry-entry--reverse .industry-entry__content {
    order: initial;
  }

  .industry-entry__visual {
    min-height: 160px;
  }

  .industry-entry__motif {
    width: 105px;
  }

  .industry-entry__visual-name {
    font-size: clamp(1.8rem, 10vw, 2.6rem);
  }

  .industry-entry__heading {
    align-items: start;
    flex-direction: column;
    gap: 0.45rem;
  }

  .industry-entry__heading > a {
    font-size: 1.3rem;
  }

  .industry-entry__description {
    margin-top: 0.5rem;
    font-size: 0.8rem;
  }

  .industry-entry__challenge-group {
    margin-top: 0.9rem;
  }

  .industry-entry__solutions {
    gap: 0.35rem;
    margin-top: 0.85rem;
  }

  .industry-entry__solutions > a {
    padding: 0.28rem 0.48rem;
    font-size: 0.58rem;
  }

  .industries-list__disclaimer {
    align-items: start;
    font-size: 0.69rem;
  }

  .industries-system-map {
    width: 570px;
    height: 350px;
    margin-top: 2.2rem;
    transform: translateX(-50%) scale(0.68);
  }

  .industries-system-map > svg {
    width: 570px;
    height: 350px;
  }

  .industries-system-map__node {
    width: 155px;
    min-height: 70px;
    grid-template-columns: 22px minmax(0, 1fr);
    gap: 0.15rem 0.3rem;
    padding: 0.55rem;
  }

  .industries-system-map__node strong {
    font-size: 0.68rem;
  }

  .industries-system-map__node small {
    font-size: 0.57rem;
  }

  .industries-system-map__core {
    width: 120px;
  }

  .industries-solution-links {
    margin-top: 1rem;
    gap: 0.4rem;
  }

  .industries-solution-links a {
    padding: 0.35rem 0.5rem;
    font-size: 0.61rem;
  }

  .industries-approach .industries-section-head {
    display: block;
  }

  .industries-approach__link {
    margin-top: 1rem;
  }

  .industries-approach-list {
    margin-top: 2rem;
  }

  .industries-approach-list li {
    min-height: 82px;
    grid-template-columns: 28px 14px minmax(0, 1fr) 17px;
    gap: 0.55rem;
  }

  .industries-approach-list li > i {
    width: 10px;
    height: 10px;
  }

  .industries-approach-list h3 {
    font-size: 0.88rem;
  }

  .industries-approach-list p {
    font-size: 0.7rem;
  }

  .industries-faq__trigger {
    grid-template-columns: 26px minmax(0, 1fr) 22px;
    gap: 0.45rem;
    font-size: 0.86rem;
  }

  .industries-faq__answer {
    padding-right: 0.5rem;
    padding-left: 2rem;
  }

  .industries-cta__actions {
    display: grid;
    justify-items: start;
  }
}

@media (max-width: 400px) {
  .industries-ecosystem__canvas {
    display: grid;
    aspect-ratio: auto;
    gap: 0.35rem;
    padding-block: 0.6rem;
  }

  .industries-ecosystem__canvas > svg {
    display: none;
  }

  .industries-ecosystem__core {
    position: relative;
    top: auto;
    left: auto;
    width: 100%;
    min-height: 37px;
    aspect-ratio: auto;
    grid-template-columns: auto auto auto;
    align-items: center;
    justify-content: center;
    gap: 0.35rem;
    border-radius: 999px;
    transform: none;
  }

  .industries-ecosystem__core span,
  .industries-ecosystem__core strong,
  .industries-ecosystem__core small {
    margin: 0;
    font-size: 0.54rem;
  }

  .industries-ecosystem__node {
    position: relative;
    inset: auto;
    width: 100%;
    min-height: 31px;
    justify-content: center;
    border-radius: 0.4rem;
    transform: none;
    font-size: 0.61rem;
  }

  .industries-ecosystem__node::before {
    margin-right: 0.4rem;
  }

  .industries-system-map {
    display: grid;
    width: 100%;
    height: auto;
    left: auto;
    gap: 0.55rem;
    margin: 2rem 0 0;
    transform: none;
  }

  .industries-system-map > svg {
    display: none;
  }

  .industries-system-map__core,
  .industries-system-map__node {
    position: relative;
    inset: auto;
    width: 100%;
    min-height: 56px;
    grid-template-columns: 31px minmax(0, 1fr);
    align-content: center;
    align-items: center;
    gap: 0.2rem 0.5rem;
    border-radius: 0.55rem;
    padding: 0.55rem 0.65rem;
    transform: none;
    aspect-ratio: auto;
  }

  .industries-system-map__core {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    gap: 0.25rem 0.5rem;
    border-radius: 999px;
    text-align: center;
  }

  .industries-system-map__core span {
    grid-column: 1;
    align-self: end;
    font-size: 0.48rem;
  }

  .industries-system-map__core strong {
    grid-column: 2;
    grid-row: 1 / span 2;
    align-self: center;
    font-size: 0.74rem;
  }

  .industries-system-map__core small {
    grid-column: 1;
    margin: 0;
    font-size: 0.52rem;
  }

  .industries-system-map__node > span {
    grid-row: span 2;
    align-self: start;
  }

  .industries-system-map__node strong {
    font-size: 0.75rem;
  }

  .industries-system-map__node small {
    font-size: 0.6rem;
  }

  .industries-system-map__node::after {
    right: 0.6rem;
    width: 6px;
    height: 6px;
  }

  .industries-solution-links {
    justify-content: flex-start;
    margin-top: 1rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .industries-page *,
  .industries-page *::before,
  .industries-page *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
