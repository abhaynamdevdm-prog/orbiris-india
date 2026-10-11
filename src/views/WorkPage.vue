<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import Container from '../components/global/Container.vue'
import Button from '../components/global/Button.vue'
import SectionHeading from '../components/global/SectionHeading.vue'
import Icon from '../components/global/Icon.vue'

const capabilities = [
  { number: '01', title: 'Strategy & Discovery', route: '/solutions/strategy', description: 'Clarify business goals, audience needs, positioning, and priorities before choosing what to do.' },
  { number: '02', title: 'Brand & Digital Experience', route: '/solutions/brand-digital-experience', description: 'Connect messaging, website structure, and digital touchpoints around the customer journey.' },
  { number: '03', title: 'Performance & Growth', route: '/solutions/performance-growth', description: 'Align acquisition, landing experiences, measurement, and learning to defined objectives.' },
  { number: '04', title: 'Technology Solutions', route: '/solutions/technology', description: 'Shape digital platforms and technology decisions around business and user requirements.' },
  { number: '05', title: 'Automation & Systems', route: '/solutions/automation', description: 'Explore workflow coordination and automation where they fit the operating context.' },
]

const scenarios = [
  {
    number: '01',
    title: 'Digital Experience Clarity',
    challenge: 'A business website makes its offerings difficult to understand.',
    approach: 'Review information architecture, messaging, user journeys, and conversion paths.',
    deliverables: ['Revised structure', 'Page priorities', 'Improvement roadmap'],
    motif: 'experience',
  },
  {
    number: '02',
    title: 'Performance and Enquiry Quality',
    challenge: 'A business attracts attention but struggles to assess enquiry quality.',
    approach: 'Review audience intent, landing pages, conversion tracking, and enquiry handling.',
    deliverables: ['Measurement plan', 'Landing-page recommendations', 'Testing priorities'],
    motif: 'performance',
  },
  {
    number: '03',
    title: 'Disconnected Business Workflows',
    challenge: 'Enquiries and tasks are handled across disconnected tools.',
    approach: 'Map the workflow, identify friction, clarify ownership, and assess suitable automation.',
    deliverables: ['Workflow map', 'Automation feasibility assessment', 'Implementation plan'],
    motif: 'workflow',
  },
  {
    number: '04',
    title: 'Unclear Business Positioning',
    challenge: 'Prospective customers struggle to distinguish a business from alternatives.',
    approach: 'Assess customer needs, value proposition, messaging, and digital touchpoints.',
    deliverables: ['Positioning framework', 'Message hierarchy', 'Experience recommendations'],
    motif: 'positioning',
  },
]

const framework = [
  { number: '01', title: 'Understand the context', description: 'Learn about the business, audience, goals, constraints, and current systems.' },
  { number: '02', title: 'Identify the real bottleneck', description: 'Separate visible symptoms from the issue most relevant to the objective.' },
  { number: '03', title: 'Prioritize the opportunity', description: 'Choose a practical focus based on evidence, readiness, and available resources.' },
  { number: '04', title: 'Design the connected solution', description: 'Plan the right combination of communication, experience, technology, or workflow.' },
  { number: '05', title: 'Measure, learn, and improve', description: 'Agree on useful indicators, review what is learned, and refine where appropriate.' },
]

const industries = [
  { name: 'Healthcare', route: '/industries/healthcare' },
  { name: 'Manufacturing', route: '/industries/manufacturing' },
  { name: 'Retail', route: '/industries/retail' },
  { name: 'Real Estate', route: '/industries/real-estate' },
  { name: 'Education', route: '/industries/education' },
  { name: 'Professional Services', route: '/industries/professional-services' },
  { name: 'Technology', route: '/industries/technology' },
]

const collaboration = [
  { title: 'Agreed objectives and scope', description: 'Define what the work is intended to address and what is included.' },
  { title: 'Relevant context and access', description: 'Share the information, tools, and stakeholders needed for the agreed work.' },
  { title: 'Clear decision-makers', description: 'Identify who reviews, approves, and owns key decisions.' },
  { title: 'Realistic timelines', description: 'Account for dependencies, approvals, resources, and implementation readiness.' },
  { title: 'Measurement based on available data', description: 'Set expectations around baselines, access, tracking, and attribution limits.' },
  { title: 'Transparent progress and limitations', description: 'Communicate decisions, risks, changes, and what the evidence can support.' },
]

const questions = [
  {
    question: 'Does this page show completed client projects?',
    answer: 'No. The scenarios on this page are explicitly illustrative frameworks, not completed client engagements. No verified and approved client case studies were available for publication in the project materials reviewed.',
  },
  {
    question: 'How do you approach a new business challenge?',
    answer: 'We start by understanding the business context, audience, objectives, and constraints. From there, we identify the most relevant issue, agree priorities and scope, and plan practical work with an appropriate way to review progress.',
  },
  {
    question: 'Can ORBIRIS support only one part of a project?',
    answer: 'Yes. Work can focus on a single agreed capability or connect several where that serves the objective. The right scope depends on discovery, resources, dependencies, and what the business needs.',
  },
  {
    question: 'How do you assess project success?',
    answer: 'Success criteria should follow the agreed objective and available evidence. We discuss relevant indicators, baseline information, measurement access, and limitations; outcomes can also depend on factors outside the agreed scope or our control.',
  },
]

const openQuestion = ref(null)

function toggleQuestion(index) {
  openQuestion.value = openQuestion.value === index ? null : index
}

function onQuestionKeydown(event, index) {
  if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return

  event.preventDefault()
  const buttons = [...event.currentTarget.closest('.work-faq__list').querySelectorAll('.work-faq__trigger')]
  const nextIndex = event.key === 'Home'
    ? 0
    : event.key === 'End'
      ? buttons.length - 1
      : (index + (event.key === 'ArrowDown' ? 1 : -1) + buttons.length) % buttons.length
  buttons[nextIndex]?.focus()
}
</script>

<template>
  <div class="work-page">
    <section class="work-hero">
      <Container class="work-hero__layout">
        <div class="work-hero__copy">
          <p class="work-eyebrow"><span></span> WORK / HOW WE THINK</p>
          <h1>Good work starts with the right problem.</h1>
          <p class="work-hero__description">
            We approach work by understanding business context, identifying the underlying challenge, and connecting strategy with practical implementation.
          </p>
          <div class="work-hero__actions">
            <Button to="/contact">Discuss a Project <Icon name="arrow" :size="16" /></Button>
            <Button to="/how-we-work" variant="outline">Explore Our Approach</Button>
          </div>
          <p class="work-hero__tagline">Turning Business Challenges into Digital Growth.</p>
        </div>

        <div class="work-hero-visual" role="img" aria-label="A business challenge moving through strategy, experience, technology, and measurement into a connected solution">
          <div class="work-hero-visual__top"><span>BUSINESS CHALLENGE</span><span>CONNECTED RESPONSE</span></div>
          <div class="work-hero-visual__map">
            <svg viewBox="0 0 620 330" preserveAspectRatio="none" aria-hidden="true">
              <path class="work-hero-visual__path" d="M106 164h122m0 0 82-90m-82 90 82 92m0-182h105m-105 182h105m0-182 83 90m-83 92 83-92h28" />
              <circle cx="310" cy="164" r="122" />
              <circle class="work-hero-visual__orbit" cx="310" cy="164" r="83" />
            </svg>
            <div class="work-hero-visual__challenge"><span>START WITH</span><strong>THE<br>PROBLEM</strong></div>
            <div class="work-hero-visual__node work-hero-visual__node--strategy"><i></i><span>Strategy</span></div>
            <div class="work-hero-visual__node work-hero-visual__node--experience"><i></i><span>Experience</span></div>
            <div class="work-hero-visual__node work-hero-visual__node--technology"><i></i><span>Technology</span></div>
            <div class="work-hero-visual__node work-hero-visual__node--measurement"><i></i><span>Measurement</span></div>
            <div class="work-hero-visual__outcome"><span>BUILD TOWARD</span><strong>A CLEAR NEXT STEP</strong></div>
          </div>
          <div class="work-hero-visual__foot"><span><i></i> CONTEXT</span><span><i></i> PRIORITIES</span><span><i></i> ACTION</span></div>
        </div>
      </Container>
      <div class="work-hero__grid" aria-hidden="true"></div>
    </section>

    <section class="work-connected work-section">
      <Container>
        <div class="work-section__header">
          <SectionHeading
            eyebrow="What meaningful work looks like"
            title="Not disconnected deliverables. A connected solution."
            description="Strategy, brand and digital experience, performance, technology, and automation may each support a shared business objective. Their role depends on the challenge, and not every project needs every capability."
          />
          <RouterLink to="/solutions" class="work-text-link">Explore all solutions <Icon name="arrow" :size="16" /></RouterLink>
        </div>
        <ol class="work-connected__list">
          <li v-for="(capability, index) in capabilities" :key="capability.route">
            <span>0{{ index + 1 }}</span>
            <RouterLink :to="capability.route">{{ capability.title }} <Icon name="arrow" :size="16" /></RouterLink>
          </li>
        </ol>
      </Container>
    </section>

    <section class="work-scenarios work-section">
      <Container>
        <div class="work-section__header">
          <SectionHeading
            eyebrow="Illustrative problem-solving frameworks"
            title="Every challenge deserves its own approach."
            description="The examples below show how a challenge might be framed and explored. They are illustrative scenarios, not completed client engagements or claims of delivered results."
          />
          <span class="work-illustrative-label"><i></i> ILLUSTRATIVE — NOT CLIENT CASE STUDIES</span>
        </div>
        <div class="work-scenario-grid">
          <article v-for="scenario in scenarios" :key="scenario.number" class="work-scenario" :class="`work-scenario--${scenario.motif}`">
            <div class="work-scenario__top"><span>SCENARIO / {{ scenario.number }}</span><span class="work-scenario__mark" aria-hidden="true"></span></div>
            <h3>{{ scenario.title }}</h3>
            <div class="work-scenario__block">
              <span>ILLUSTRATIVE CHALLENGE</span>
              <p>{{ scenario.challenge }}</p>
            </div>
            <div class="work-scenario__block">
              <span>POSSIBLE APPROACH</span>
              <p>{{ scenario.approach }}</p>
            </div>
            <div class="work-scenario__deliverables">
              <span>POTENTIAL OUTPUTS — DEPEND ON SCOPE</span>
              <ul><li v-for="deliverable in scenario.deliverables" :key="deliverable">{{ deliverable }}</li></ul>
            </div>
          </article>
        </div>
        <p class="work-scenarios__note">These scenarios are frameworks for discussion only. They do not describe work completed for a real client.</p>
      </Container>
    </section>

    <section class="work-framework work-section">
      <Container>
        <div class="work-section__header">
          <SectionHeading
            eyebrow="How we think through a challenge"
            title="From observation to an actionable plan."
            description="A clear sequence helps keep discovery connected to decisions, implementation, and learning."
          />
          <RouterLink to="/how-we-work" class="work-text-link">See how we work <Icon name="arrow" :size="16" /></RouterLink>
        </div>
        <ol class="work-framework__steps">
          <li v-for="step in framework" :key="step.number">
            <span>{{ step.number }}</span><i aria-hidden="true"></i>
            <h3>{{ step.title }}</h3>
            <p>{{ step.description }}</p>
          </li>
        </ol>
      </Container>
    </section>

    <section class="work-capabilities work-section">
      <Container>
        <div class="work-section__header">
          <SectionHeading
            eyebrow="Capability explorer"
            title="The right capability follows the need."
            description="Each area is designed to address a different part of a business challenge. Suitability depends on discovery, objectives, and agreed scope—not a predefined package."
          />
        </div>
        <div class="work-capabilities__grid">
          <RouterLink v-for="capability in capabilities" :key="capability.route" :to="capability.route" class="work-capability">
            <span>{{ capability.number }}</span>
            <h3>{{ capability.title }}</h3>
            <p>{{ capability.description }}</p>
            <span class="work-capability__link">Explore capability <Icon name="arrow" :size="16" /></span>
          </RouterLink>
        </div>
      </Container>
    </section>

    <section class="work-industries work-section">
      <Container>
        <div class="work-industries__layout">
          <div>
            <SectionHeading
              eyebrow="Industries"
              title="Context changes the challenge."
              description="Buying decisions, customer journeys, and operational realities vary. We start with the business in front of us rather than assume an industry-wide template."
            />
            <RouterLink to="/industries" class="work-text-link">Explore all industries <Icon name="arrow" :size="16" /></RouterLink>
          </div>
          <ul class="work-industries__list">
            <li v-for="industry in industries" :key="industry.route">
              <RouterLink :to="industry.route">{{ industry.name }} <Icon name="arrow" :size="16" /></RouterLink>
            </li>
          </ul>
        </div>
      </Container>
    </section>

    <section class="work-transparency work-section">
      <Container>
        <div class="work-section__header">
          <SectionHeading
            eyebrow="Transparency and collaboration"
            title="Clear scope. Honest communication. Shared responsibility."
            description="Good work depends on how we collaborate as much as what we create. Clear agreements help teams make informed decisions and understand what progress means."
          />
          <RouterLink to="/how-we-work" class="work-text-link">Our working process <Icon name="arrow" :size="16" /></RouterLink>
        </div>
        <ul class="work-transparency__grid">
          <li v-for="(item, index) in collaboration" :key="item.title">
            <span>0{{ index + 1 }}</span><div><h3>{{ item.title }}</h3><p>{{ item.description }}</p></div>
          </li>
        </ul>
        <p class="work-transparency__note">We do not guarantee outcomes outside the agreed scope or factors beyond our control. Progress and limitations are discussed transparently.</p>
      </Container>
    </section>

    <section class="work-faq work-section">
      <Container class="work-faq__layout">
        <div>
          <SectionHeading
            eyebrow="Frequently asked questions"
            title="A transparent view of the work."
            description="We believe useful project conversations start with clear expectations."
          />
        </div>
        <div class="work-faq__list">
          <article v-for="(item, index) in questions" :key="item.question" class="work-faq__item">
            <h3>
              <button
                :id="`work-question-${index}`"
                class="work-faq__trigger"
                type="button"
                :aria-expanded="openQuestion === index"
                :aria-controls="`work-answer-${index}`"
                @click="toggleQuestion(index)"
                @keydown="onQuestionKeydown($event, index)"
              >
                <span>0{{ index + 1 }}</span><span>{{ item.question }}</span><span aria-hidden="true">{{ openQuestion === index ? '−' : '+' }}</span>
              </button>
            </h3>
            <div v-show="openQuestion === index" :id="`work-answer-${index}`" class="work-faq__answer" role="region" :aria-labelledby="`work-question-${index}`">
              <p>{{ item.answer }}</p>
            </div>
          </article>
        </div>
      </Container>
    </section>

    <section class="work-cta">
      <Container class="work-cta__layout">
        <div>
          <p class="work-eyebrow"><span></span> START WITH THE CHALLENGE</p>
          <h2>Have a challenge worth solving?</h2>
          <p>Tell us where your business is today, what is getting in the way, and what you want to improve.</p>
        </div>
        <div class="work-cta__actions">
          <Button to="/contact">Discuss a Project <Icon name="arrow" :size="16" /></Button>
          <RouterLink to="/how-we-work">How We Work <Icon name="arrow" :size="16" /></RouterLink>
        </div>
      </Container>
    </section>
  </div>
</template>

<style scoped>
.work-page { color: var(--color-text); }
.work-section { padding-block: clamp(4rem, 8vw, 7rem); }

.work-hero {
  position: relative;
  overflow: hidden;
  padding-block: clamp(4.25rem, 8vw, 7.25rem);
  background: var(--color-navy);
  color: white;
}

.work-hero__layout {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 0.92fr) minmax(400px, 1.08fr);
  align-items: center;
  gap: clamp(2rem, 5vw, 5rem);
}

.work-hero__copy { min-width: 0; }

.work-eyebrow {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  margin: 0;
  color: #c0d2df;
  font-size: 0.69rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.work-eyebrow > span {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--color-teal);
  box-shadow: 0 0 0 5px rgba(0, 209, 167, 0.14);
}

.work-hero h1 {
  max-width: 640px;
  margin: 1.25rem 0 0;
  color: white;
  font-family: var(--font-display);
  font-size: clamp(2.8rem, 5.4vw, 4.8rem);
  font-weight: 700;
  letter-spacing: -0.065em;
  line-height: 1.03;
}

.work-hero__description {
  max-width: 580px;
  margin: 1.4rem 0 0;
  color: #bdcdda;
  font-size: 1rem;
  line-height: 1.8;
}

.work-hero__actions { display: flex; flex-wrap: wrap; gap: 0.8rem; margin-top: 1.8rem; }
.work-hero :deep(.button--outline) { border-color: rgba(207, 228, 240, 0.38); background: transparent; color: white; }
.work-hero :deep(.button--outline:hover) { border-color: var(--color-teal); }
.work-hero__tagline { margin: 1.15rem 0 0; color: #91aabd; font-size: 0.78rem; }

.work-hero__grid {
  position: absolute;
  inset: 0;
  opacity: 0.12;
  pointer-events: none;
  background-image: linear-gradient(rgba(133, 180, 208, 0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(133, 180, 208, 0.16) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: linear-gradient(90deg, transparent, black 72%);
}

.work-hero-visual {
  min-width: 0;
  border: 1px solid rgba(160, 197, 219, 0.24);
  border-radius: 1.1rem;
  padding: clamp(0.85rem, 2vw, 1.35rem);
  background: linear-gradient(145deg, rgba(21, 53, 83, 0.96), rgba(9, 29, 52, 0.97));
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.2);
}

.work-hero-visual__top,
.work-hero-visual__foot {
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  color: #91aec2;
  font-size: 0.55rem;
  font-weight: 700;
  letter-spacing: 0.09em;
}

.work-hero-visual__map { position: relative; width: 100%; height: clamp(250px, 28vw, 340px); margin-block: 0.55rem; }
.work-hero-visual__map > svg { position: absolute; inset: 0; width: 100%; height: 100%; fill: none; stroke: rgba(0, 180, 255, 0.42); stroke-width: 1; }
.work-hero-visual__map > svg circle { stroke: rgba(0, 209, 167, 0.2); stroke-dasharray: 4 7; }
.work-hero-visual__map > svg .work-hero-visual__orbit { stroke: rgba(0, 180, 255, 0.23); stroke-dasharray: none; }

.work-hero-visual__challenge {
  position: absolute;
  top: 50%;
  left: 17%;
  z-index: 1;
  display: grid;
  width: clamp(88px, 10vw, 118px);
  aspect-ratio: 1;
  align-content: center;
  justify-items: center;
  border: 1px solid rgba(255, 176, 32, 0.65);
  border-radius: 50%;
  background: #243a51;
  box-shadow: 0 0 0 9px rgba(255, 176, 32, 0.06);
  transform: translate(-50%, -50%);
}

.work-hero-visual__challenge span,
.work-hero-visual__outcome span { color: #a9c0d0; font-size: 0.49rem; letter-spacing: 0.1em; }
.work-hero-visual__challenge strong { margin-top: 0.28rem; color: #fff; font-family: var(--font-display); font-size: 0.83rem; line-height: 1.1; text-align: center; }

.work-hero-visual__node {
  position: absolute;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  border: 1px solid rgba(155, 191, 213, 0.3);
  border-radius: 999px;
  padding: 0.55rem 0.7rem;
  background: #102845;
  color: #e7f1f6;
  font-size: clamp(0.6rem, 0.85vw, 0.72rem);
  white-space: nowrap;
}

.work-hero-visual__node i,
.work-hero-visual__foot i { width: 6px; height: 6px; flex: 0 0 6px; border-radius: 50%; background: var(--color-blue); }
.work-hero-visual__node--strategy { top: 9%; left: 51%; }
.work-hero-visual__node--experience { top: 32%; left: 69%; }
.work-hero-visual__node--technology { bottom: 29%; left: 57%; }
.work-hero-visual__node--measurement { top: 17%; left: 3%; }
.work-hero-visual__node--experience i { background: var(--color-teal); }
.work-hero-visual__node--technology i { background: var(--color-orange); }
.work-hero-visual__node--measurement i { background: var(--color-teal); }

.work-hero-visual__outcome {
  position: absolute;
  right: 2%;
  bottom: 7%;
  z-index: 1;
  display: grid;
  gap: 0.25rem;
  border-left: 2px solid var(--color-teal);
  padding: 0.4rem 0 0.4rem 0.65rem;
}

.work-hero-visual__outcome strong { color: white; font-family: var(--font-display); font-size: 0.63rem; letter-spacing: 0.04em; }
.work-hero-visual__foot { align-items: center; justify-content: flex-start; gap: 1rem; color: #bdd0dd; letter-spacing: 0.04em; }
.work-hero-visual__foot span { display: inline-flex; align-items: center; gap: 0.42rem; }
.work-hero-visual__foot i { width: 5px; height: 5px; flex-basis: 5px; background: var(--color-teal); }

.work-section__header { display: flex; align-items: end; justify-content: space-between; gap: 2rem; margin-bottom: 2.2rem; }
.work-section__header .section-heading { max-width: 760px; }
.work-text-link { display: inline-flex; flex: 0 0 auto; align-items: center; gap: 0.45rem; color: var(--color-link); font-size: 0.84rem; font-weight: 700; text-decoration: none; }
.work-text-link:hover { color: var(--color-navy); }

.work-connected { background: white; }

.work-connected__list {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  margin: 0;
  padding: 0;
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  list-style: none;
}

.work-connected__list li { min-width: 0; padding: 1.2rem 1rem; border-right: 1px solid var(--color-border); }
.work-connected__list li:first-child { padding-left: 0; }
.work-connected__list li:last-child { border-right: 0; }
.work-connected__list li > span { color: var(--color-teal); font-size: 0.65rem; font-weight: 700; }
.work-connected__list a { display: flex; align-items: center; justify-content: space-between; gap: 0.5rem; margin-top: 0.7rem; color: var(--color-navy); font-family: var(--font-display); font-size: 0.85rem; font-weight: 700; line-height: 1.4; text-decoration: none; }
.work-connected__list a:hover { color: var(--color-link); }

.work-scenarios { background: var(--color-background); }
.work-illustrative-label { display: inline-flex; flex: 0 0 auto; align-items: center; gap: 0.5rem; color: #53667c; font-size: 0.62rem; font-weight: 700; letter-spacing: 0.08em; }
.work-illustrative-label i { width: 7px; height: 7px; border-radius: 50%; background: var(--color-orange); }

.work-scenario-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; }

.work-scenario {
  position: relative;
  overflow: hidden;
  min-width: 0;
  border: 1px solid var(--color-border);
  border-radius: 0.9rem;
  padding: clamp(1.15rem, 2.4vw, 1.75rem);
  background: white;
}

.work-scenario::after {
  position: absolute;
  top: -50px;
  right: -50px;
  width: 155px;
  height: 155px;
  border: 1px solid var(--scenario-color, rgba(0, 180, 255, 0.2));
  border-radius: 50%;
  box-shadow: 0 0 0 18px color-mix(in srgb, var(--scenario-color, #00b4ff) 6%, transparent), 0 0 0 38px color-mix(in srgb, var(--scenario-color, #00b4ff) 4%, transparent);
  content: '';
  pointer-events: none;
}

.work-scenario--experience { --scenario-color: rgba(0, 180, 255, 0.35); }
.work-scenario--performance { --scenario-color: rgba(0, 209, 167, 0.35); }
.work-scenario--workflow { --scenario-color: rgba(255, 176, 32, 0.42); }
.work-scenario--positioning { --scenario-color: rgba(11, 31, 59, 0.28); }

.work-scenario__top { position: relative; z-index: 1; display: flex; align-items: center; justify-content: space-between; gap: 0.8rem; color: var(--color-muted); font-size: 0.62rem; font-weight: 700; letter-spacing: 0.1em; }
.work-scenario__mark { width: 9px; height: 9px; border-radius: 50%; background: var(--scenario-color); }
.work-scenario h3 { position: relative; z-index: 1; max-width: 500px; margin: 1.25rem 0 1.45rem; color: var(--color-navy); font-family: var(--font-display); font-size: clamp(1.25rem, 2vw, 1.65rem); letter-spacing: -0.03em; line-height: 1.25; }
.work-scenario__block { position: relative; z-index: 1; margin-top: 1rem; }
.work-scenario__block > span,
.work-scenario__deliverables > span { color: #66798d; font-size: 0.59rem; font-weight: 700; letter-spacing: 0.1em; }
.work-scenario__block p { max-width: 590px; margin: 0.35rem 0 0; color: var(--color-text); font-size: 0.85rem; line-height: 1.65; }
.work-scenario__deliverables { position: relative; z-index: 1; margin-top: 1.2rem; border-top: 1px solid var(--color-border); padding-top: 1rem; }
.work-scenario__deliverables ul { display: flex; flex-wrap: wrap; gap: 0.4rem; margin: 0.65rem 0 0; padding: 0; list-style: none; }
.work-scenario__deliverables li { border: 1px solid var(--color-border); border-radius: 999px; padding: 0.35rem 0.58rem; color: #42556a; font-size: 0.68rem; }
.work-scenarios__note { margin: 1.2rem 0 0; color: var(--color-muted); font-size: 0.75rem; line-height: 1.6; }

.work-framework { background: white; }
.work-framework__steps { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 1.2rem; margin: 0; padding: 0; list-style: none; }
.work-framework__steps li { position: relative; min-width: 0; border-top: 2px solid var(--color-blue); padding-top: 1rem; }
.work-framework__steps li > span { color: var(--color-link); font-size: 0.67rem; font-weight: 700; }
.work-framework__steps li > i { position: absolute; top: -5px; right: 0; width: 8px; height: 8px; border: 2px solid white; border-radius: 50%; background: var(--color-teal); }
.work-framework__steps h3 { margin: 1rem 0 0; color: var(--color-navy); font-family: var(--font-display); font-size: 0.96rem; line-height: 1.45; }
.work-framework__steps p { margin: 0.55rem 0 0; color: var(--color-muted); font-size: 0.78rem; line-height: 1.7; }

.work-capabilities { background: var(--color-background); }
.work-capabilities__grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0.8rem; }
.work-capability { display: flex; min-height: 215px; flex-direction: column; align-items: flex-start; border: 1px solid var(--color-border); border-radius: 0.85rem; padding: 1.3rem; background: white; color: inherit; text-decoration: none; transition: border-color 160ms ease, transform 160ms ease; }
.work-capability:hover { transform: translateY(-2px); border-color: var(--color-blue); }
.work-capability > span:first-child { color: var(--color-link); font-size: 0.67rem; font-weight: 700; }
.work-capability h3 { margin: 1rem 0 0; color: var(--color-navy); font-family: var(--font-display); font-size: 1rem; }
.work-capability p { margin: 0.55rem 0 1.2rem; color: var(--color-muted); font-size: 0.8rem; line-height: 1.65; }
.work-capability__link { display: inline-flex; align-items: center; gap: 0.4rem; margin-top: auto; color: var(--color-link); font-size: 0.72rem; font-weight: 700; }
.work-capability__link .icon { transition: transform 160ms ease; }
.work-capability:hover .work-capability__link .icon { transform: translateX(3px); }
.work-capability:nth-child(4) { grid-column: 1 / span 1; }
.work-capability:nth-child(5) { grid-column: 2 / span 1; }

.work-industries { background: white; }
.work-industries__layout { display: grid; grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr); gap: clamp(2rem, 7vw, 7rem); }
.work-industries__layout > div .work-text-link { margin-top: 1.4rem; }
.work-industries__list { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0 1.4rem; margin: 0; padding: 0; list-style: none; }
.work-industries__list li { border-bottom: 1px solid var(--color-border); }
.work-industries__list li:nth-child(-n+2) { border-top: 1px solid var(--color-border); }
.work-industries__list a { display: flex; min-height: 58px; align-items: center; justify-content: space-between; gap: 0.6rem; color: var(--color-navy); font-family: var(--font-display); font-size: 0.87rem; font-weight: 700; text-decoration: none; }
.work-industries__list a:hover { color: var(--color-link); }
.work-industries__list a .icon { flex: 0 0 auto; color: var(--color-teal); }

.work-transparency { background: var(--color-navy); color: white; }
.work-transparency .section-heading__title { color: white; }
.work-transparency .section-heading__description { color: #adc2d1; }
.work-transparency .section-heading__eyebrow { border-color: rgba(0, 209, 167, 0.25); background: rgba(0, 209, 167, 0.1); color: #c4f6e9; }
.work-transparency .work-text-link { color: #aee9dc; }
.work-transparency .work-text-link:hover { color: white; }
.work-transparency__grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0 1.5rem; margin: 0; padding: 0; list-style: none; }
.work-transparency__grid li { display: grid; grid-template-columns: 32px minmax(0, 1fr); gap: 0.8rem; border-top: 1px solid rgba(169, 197, 214, 0.25); padding: 1.15rem 0; }
.work-transparency__grid li > span { color: var(--color-teal); font-size: 0.66rem; font-weight: 700; }
.work-transparency__grid h3 { margin: 0; color: #f1f7fb; font-family: var(--font-display); font-size: 0.88rem; }
.work-transparency__grid p { margin: 0.4rem 0 0; color: #aebfcd; font-size: 0.76rem; line-height: 1.65; }
.work-transparency__note { max-width: 850px; margin: 1rem 0 0; border-left: 2px solid var(--color-teal); padding-left: 1rem; color: #c2d1dc; font-size: 0.78rem; line-height: 1.7; }

.work-faq { background: var(--color-background); }
.work-faq__layout { display: grid; grid-template-columns: minmax(0, 0.75fr) minmax(0, 1.25fr); gap: clamp(2rem, 7vw, 7rem); }
.work-faq__list { border-top: 1px solid var(--color-border); }
.work-faq__item { border-bottom: 1px solid var(--color-border); }
.work-faq__item h3 { margin: 0; font-size: inherit; }
.work-faq__trigger { display: grid; width: 100%; min-height: 70px; grid-template-columns: 30px minmax(0, 1fr) 24px; align-items: center; gap: 0.8rem; border: 0; padding: 1rem 0; background: transparent; color: var(--color-navy); cursor: pointer; font-family: var(--font-display); font-size: 0.92rem; font-weight: 700; text-align: left; }
.work-faq__trigger:hover { color: var(--color-link); }
.work-faq__trigger > span:first-child { color: var(--color-link); font-family: var(--font-body); font-size: 0.64rem; }
.work-faq__trigger > span:last-child { justify-self: end; color: var(--color-link); font-size: 1.25rem; font-weight: 400; }
.work-faq__answer { padding: 0 2.5rem 1.2rem; }
.work-faq__answer p { max-width: 680px; margin: 0; color: var(--color-muted); font-size: 0.84rem; line-height: 1.75; }

.work-cta { padding-block: clamp(3.5rem, 7vw, 6rem); background: var(--color-navy); color: white; }
.work-cta__layout { display: grid; grid-template-columns: minmax(0, 1fr) auto; align-items: center; gap: 2rem; }
.work-cta h2 { max-width: 760px; margin: 1rem 0 0; color: white; font-family: var(--font-display); font-size: clamp(2.2rem, 4.5vw, 3.8rem); letter-spacing: -0.055em; line-height: 1.1; }
.work-cta__layout > div:first-child > p:last-child { max-width: 640px; margin: 1rem 0 0; color: #b8cad8; line-height: 1.7; }
.work-cta__actions { display: grid; justify-items: start; gap: 1rem; }
.work-cta__actions > a:last-child { display: inline-flex; align-items: center; gap: 0.4rem; color: #d6e5ee; font-size: 0.83rem; text-decoration: none; }
.work-cta__actions > a:last-child:hover { color: white; }

@media (max-width: 950px) {
  .work-hero__layout { grid-template-columns: minmax(0, 1fr); }
  .work-hero__copy { max-width: 760px; }
  .work-hero-visual { width: min(100%, 700px); margin-inline: auto; }
  .work-connected__list { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .work-connected__list li:nth-child(3) { border-right: 0; }
  .work-connected__list li:nth-child(n+4) { border-top: 1px solid var(--color-border); }
  .work-framework__steps { grid-template-columns: repeat(3, minmax(0, 1fr)); row-gap: 2rem; }
  .work-capabilities__grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .work-capability:nth-child(4), .work-capability:nth-child(5) { grid-column: auto; }
  .work-industries__layout, .work-faq__layout { grid-template-columns: minmax(0, 1fr); gap: 2.5rem; }
  .work-cta__layout { grid-template-columns: minmax(0, 1fr); }
}

@media (max-width: 620px) {
  .work-hero { padding-block: 3.5rem; }
  .work-hero h1 { font-size: clamp(2.55rem, 11.5vw, 3.7rem); }
  .work-hero-visual__map { height: 290px; }
  .work-hero-visual__challenge { left: 20%; width: 86px; }
  .work-hero-visual__node { padding: 0.42rem 0.5rem; font-size: 0.59rem; }
  .work-hero-visual__node--strategy { top: 10%; left: 53%; }
  .work-hero-visual__node--experience { top: 37%; left: 67%; }
  .work-hero-visual__node--technology { bottom: 20%; left: 53%; }
  .work-hero-visual__node--measurement { top: 22%; left: 2%; }
  .work-hero-visual__outcome { right: 2%; bottom: 4%; }
  .work-hero-visual__foot { flex-wrap: wrap; gap: 0.5rem 0.8rem; font-size: 0.5rem; }
  .work-section__header { align-items: flex-start; flex-direction: column; gap: 1rem; }
  .work-connected__list { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .work-connected__list li { border-top: 1px solid var(--color-border); }
  .work-connected__list li:nth-child(odd) { border-right: 1px solid var(--color-border); padding-left: 0; }
  .work-connected__list li:nth-child(even) { border-right: 0; }
  .work-connected__list li:last-child { border-right: 0; }
  .work-scenario-grid, .work-capabilities__grid, .work-industries__list { grid-template-columns: minmax(0, 1fr); }
  .work-framework__steps { grid-template-columns: minmax(0, 1fr); gap: 1.4rem; }
  .work-framework__steps li { min-height: 0; }
  .work-framework__steps h3 { margin-top: 0.65rem; }
  .work-scenario::after { width: 120px; height: 120px; }
  .work-transparency__grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0 1rem; }
  .work-cta__actions { justify-items: stretch; }
  .work-cta__actions :deep(.button) { width: 100%; }
}

@media (max-width: 380px) {
  .work-hero__actions { align-items: stretch; flex-direction: column; }
  .work-hero__actions :deep(.button) { width: 100%; }
  .work-hero-visual__top { font-size: 0.46rem; letter-spacing: 0.04em; }
  .work-hero-visual__map { height: 250px; }
  .work-hero-visual__node { gap: 0.3rem; padding: 0.38rem; font-size: 0.53rem; }
  .work-hero-visual__node--experience { left: 65%; }
  .work-hero-visual__node--measurement { left: 2%; }
  .work-hero-visual__challenge { left: 19%; width: 75px; }
  .work-hero-visual__challenge strong { font-size: 0.7rem; }
  .work-hero-visual__outcome { right: 0; }
  .work-hero-visual__outcome strong { font-size: 0.53rem; }
  .work-transparency__grid { grid-template-columns: minmax(0, 1fr); }
  .work-faq__trigger { grid-template-columns: 25px minmax(0, 1fr) 20px; gap: 0.5rem; font-size: 0.84rem; }
  .work-faq__answer { padding-inline: 2rem 0.4rem; }
}

@media (prefers-reduced-motion: reduce) {
  .work-page *, .work-page *::before, .work-page *::after { scroll-behavior: auto !important; transition-duration: 0.01ms !important; }
}
</style>
