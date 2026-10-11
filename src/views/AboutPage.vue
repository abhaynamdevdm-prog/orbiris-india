<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import Container from '../components/global/Container.vue'
import Button from '../components/global/Button.vue'
import SectionHeading from '../components/global/SectionHeading.vue'
import Icon from '../components/global/Icon.vue'

const capabilities = [
  { number: '01', title: 'Strategy & Discovery', route: '/solutions/strategy', description: 'Clarify the business context, audience, priorities, and direction.' },
  { number: '02', title: 'Brand & Digital Experience', route: '/solutions/brand-digital-experience', description: 'Connect positioning, communication, websites, and customer touchpoints.' },
  { number: '03', title: 'Performance & Growth', route: '/solutions/performance-growth', description: 'Align campaigns, conversion journeys, measurement, and learning with objectives.' },
  { number: '04', title: 'Technology Solutions', route: '/solutions/technology', description: 'Shape platforms and digital systems around business and user requirements.' },
  { number: '05', title: 'Automation & Systems', route: '/solutions/automation', description: 'Explore workflow coordination and automation where they fit the operating context.' },
]

const principles = [
  { number: '01', title: 'Understand Before Executing', description: 'Identify the business challenge and its context before choosing tactics, tools, or channels.' },
  { number: '02', title: 'Connect Strategy With Execution', description: 'Consider how strategy, brand, marketing, technology, and operations can support a shared objective.' },
  { number: '03', title: 'Measure What Matters', description: 'Relate activity and reporting to relevant business outcomes, with the available evidence and its limitations in view.' },
  { number: '04', title: 'Improve Through Learning', description: 'Use feedback, observations, and suitable evidence to refine the approach as the work develops.' },
]

const reasoning = [
  { number: '01', title: 'Understand the business context', description: 'Learn about goals, customers, operations, current systems, and constraints.' },
  { number: '02', title: 'Identify the important constraint', description: 'Look for the issue most relevant to the desired business change.' },
  { number: '03', title: 'Prioritize the opportunity', description: 'Choose a practical focus based on evidence, resources, and readiness.' },
  { number: '04', title: 'Select an appropriate intervention', description: 'Decide whether strategy, experience, performance, technology, or workflow changes fit the need.' },
  { number: '05', title: 'Measure, learn, and improve', description: 'Agree how to review progress and use what is learned to inform next steps.' },
]

const distinctions = [
  { number: '01', title: 'Business problem before channel selection', description: 'Clarify the objective and constraint before choosing a platform or tactic.' },
  { number: '02', title: 'Connected thinking over isolated activity', description: 'Consider how customer experience, communication, systems, and operations meet.' },
  { number: '03', title: 'Clear priorities over unnecessary complexity', description: 'Focus on work that is relevant to the situation, rather than adding activity by default.' },
  { number: '04', title: 'Relevant measurement over activity alone', description: 'Use indicators that help answer a business question and acknowledge what they cannot show.' },
  { number: '05', title: 'Practical execution alongside strategy', description: 'Turn a direction into scoped work, owners, and review points where implementation is appropriate.' },
]

const supportedNeeds = [
  { title: 'Clarifying growth direction', description: 'For businesses working through priorities, positioning, audience understanding, or the next strategic decision.', route: '/solutions/strategy', label: 'Strategy & Discovery' },
  { title: 'Improving brand and digital experience', description: 'For teams reviewing how clearly their value is communicated across websites and customer touchpoints.', route: '/solutions/brand-digital-experience', label: 'Brand & Digital Experience' },
  { title: 'Improving lead quality and conversion journeys', description: 'For businesses examining audience intent, enquiry paths, measurement, and follow-up.', route: '/solutions/performance-growth', label: 'Performance & Growth' },
  { title: 'Connecting fragmented tools and workflows', description: 'For teams exploring platform needs, handoffs, repetitive work, or suitable automation.', route: '/solutions/technology', label: 'Technology & Systems' },
]

const industries = [
  { label: 'Healthcare', route: '/industries/healthcare' },
  { label: 'Manufacturing', route: '/industries/manufacturing' },
  { label: 'Retail', route: '/industries/retail' },
  { label: 'Real Estate', route: '/industries/real-estate' },
  { label: 'Education', route: '/industries/education' },
  { label: 'Professional Services', route: '/industries/professional-services' },
  { label: 'Technology', route: '/industries/technology' },
]

const collaboration = [
  'Understand the goal before defining the work.',
  'Agree on priorities, responsibilities, and scope.',
  'Communicate assumptions, dependencies, and constraints clearly.',
  'Make decisions using available evidence and relevant context.',
  'Review progress and refine the approach where appropriate.',
]

const questions = [
  {
    question: 'What does ORBIRIS INDIA do?',
    answer: 'ORBIRIS is a business-first digital growth and transformation partner. The work connects strategy and discovery, brand and digital experience, performance and growth, technology, and automation where they are relevant to an agreed business challenge.',
  },
  {
    question: 'How is ORBIRIS different from a traditional digital marketing agency?',
    answer: 'The intended starting point is the business problem, not a preselected channel or activity. Strategy, customer experience, marketing, technology, and operations may be considered together before deciding what work is appropriate. The exact scope depends on the business and its needs.',
  },
  {
    question: 'Does every business need all five capabilities?',
    answer: 'No. Capabilities are areas of work, not a required bundle. A business may need one focused intervention, a combination of capabilities, or a different starting point after the context is understood.',
  },
  {
    question: 'How does ORBIRIS approach a new business challenge?',
    answer: 'The approach begins with business context, objectives, customers, current systems, and constraints. From there, the important constraint or opportunity can be prioritized, an appropriate intervention scoped, and relevant measures discussed.',
  },
  {
    question: 'How can a business start a conversation with ORBIRIS?',
    answer: 'Use the Start a Conversation link to prepare a message for WhatsApp. Review the message there and choose whether to send it; this page does not confirm delivery.',
  },
]

const openQuestion = ref(null)

function toggleQuestion(index) {
  openQuestion.value = openQuestion.value === index ? null : index
}

function onQuestionKeydown(event, index) {
  if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return

  event.preventDefault()
  const buttons = [...event.currentTarget.closest('.about-faq__list').querySelectorAll('.about-faq__trigger')]
  const nextIndex = event.key === 'Home'
    ? 0
    : event.key === 'End'
      ? buttons.length - 1
      : (index + (event.key === 'ArrowDown' ? 1 : -1) + buttons.length) % buttons.length
  buttons[nextIndex]?.focus()
}
</script>

<template>
  <div class="about-page">
    <section class="about-hero">
      <Container class="about-hero__layout">
        <div class="about-hero__copy">
          <p class="about-eyebrow"><span></span> ABOUT ORBIRIS INDIA</p>
          <h1>Business Growth Starts With Understanding the Problem.</h1>
          <p class="about-hero__description">
            We start by understanding business goals, customer experience, operational challenges, and digital opportunities—before recommending what to change.
          </p>
          <div class="about-hero__actions">
            <Button to="/contact">Start a Conversation <Icon name="arrow" :size="16" /></Button>
            <Button to="/solutions" variant="outline">Explore Our Solutions</Button>
          </div>
          <p class="about-hero__tagline">Turning Business Challenges into Digital Growth.</p>
        </div>
        <div class="about-hero-visual" role="img" aria-label="A 360-degree business view connecting strategy, customers, experience, technology, and operations">
          <div class="about-hero-visual__label"><span>ONE BUSINESS</span><span>CONNECTED PERSPECTIVE</span></div>
          <div class="about-hero-visual__canvas">
            <svg viewBox="0 0 620 430" aria-hidden="true">
              <path d="M310 213 150 86M310 213 310 48M310 213 470 86M310 213 530 213M310 213 470 340M310 213 310 378M310 213 150 340M310 213 90 213" />
              <circle cx="310" cy="213" r="154" />
              <ellipse cx="310" cy="213" rx="205" ry="87" transform="rotate(-25 310 213)" />
              <ellipse cx="310" cy="213" rx="205" ry="87" transform="rotate(25 310 213)" />
            </svg>
            <div class="about-hero-visual__core"><span>BUSINESS</span><strong>CONTEXT</strong><small>before tactics</small></div>
            <span class="about-hero-visual__node about-hero-visual__node--strategy">Strategy</span>
            <span class="about-hero-visual__node about-hero-visual__node--customer">Customers</span>
            <span class="about-hero-visual__node about-hero-visual__node--experience">Experience</span>
            <span class="about-hero-visual__node about-hero-visual__node--technology">Technology</span>
            <span class="about-hero-visual__node about-hero-visual__node--operations">Operations</span>
            <span class="about-hero-visual__node about-hero-visual__node--evidence">Evidence</span>
          </div>
          <div class="about-hero-visual__foot"><span><i></i> SEE THE WHOLE SYSTEM</span><span><i></i> FIND THE NEXT STEP</span></div>
        </div>
      </Container>
      <div class="about-hero__grid" aria-hidden="true"></div>
    </section>

    <section class="about-exists about-section">
      <Container class="about-exists__layout">
        <SectionHeading
          eyebrow="Why ORBIRIS exists"
          title="The tool is not the same as the solution."
          description="A website, campaign, software platform, or automation can be useful—but only when it addresses a real need in the business."
        />
        <div class="about-exists__copy">
          <p>Businesses can invest in marketing activities, websites, software, and tools without resolving the underlying constraint. The individual tactic may be valuable, but its contribution is harder to understand when it is disconnected from a clear business objective.</p>
          <p>ORBIRIS exists to start with the situation: what the business is trying to achieve, what customers experience, how the work currently happens, and where progress may be limited. From there, appropriate digital interventions can be considered in context.</p>
          <p class="about-exists__note">These are challenges the approach is designed to examine—not a claim that every business faces them or that ORBIRIS has solved them for named clients.</p>
        </div>
      </Container>
    </section>

    <section class="about-name about-section">
      <Container>
        <div class="about-section__header">
          <SectionHeading
            eyebrow="What ORBIRIS stands for"
            title="A wider view. A clearer next step."
            description="The name reflects two ideas that shape how business challenges are approached: look across the system, then find the insight that helps decisions move forward."
          />
        </div>
        <div class="about-name__grid">
          <article class="about-name-card about-name-card--orb">
            <div class="about-name-card__mark" aria-hidden="true"><span>360°</span><i></i><i></i><i></i></div>
            <span>ORB / PERSPECTIVE</span>
            <h3>A 360° Perspective</h3>
            <p>Understand a business as a connected system—its goals, customers, brand, operations, data, and technology—rather than viewing one channel in isolation.</p>
          </article>
          <article class="about-name-card about-name-card--iris">
            <div class="about-name-card__mark about-name-card__mark--iris" aria-hidden="true"><span>INSIGHT</span><i></i><i></i><i></i></div>
            <span>IRIS / CLARITY</span>
            <h3>Insight and clarity</h3>
            <p>Find a clearer understanding of the problem, the priorities, and the next practical step—grounded in context rather than assumption.</p>
          </article>
        </div>
        <p class="about-name__conclusion">Together, perspective and insight connect strategic thinking to practical digital execution.</p>
      </Container>
    </section>

    <section class="about-philosophy about-section">
      <Container>
        <div class="about-section__header">
          <SectionHeading
            eyebrow="Our core philosophy"
            title="Principles for making better decisions."
            description="These principles guide the way we frame a challenge and consider what should happen next."
          />
        </div>
        <ol class="about-principles">
          <li v-for="principle in principles" :key="principle.number">
            <span>{{ principle.number }}</span><h3>{{ principle.title }}</h3><p>{{ principle.description }}</p>
          </li>
        </ol>
      </Container>
    </section>

    <section class="about-system about-section">
      <Container>
        <div class="about-section__header">
          <SectionHeading
            eyebrow="One connected growth system"
            title="Different capabilities. A shared business context."
            description="The capability areas can connect around an objective where useful. The right combination depends on discovery; no business is expected to need every service."
          />
        </div>
        <div class="about-system__diagram" role="group" aria-label="Five connected ORBIRIS capabilities">
          <svg viewBox="0 0 900 400" aria-hidden="true">
            <path d="M140 200H760M220 200 340 100m110 100V100m110 100 120-100M220 200l120 100m110-100v100m110-100L780 300" />
            <circle cx="450" cy="200" r="98" />
          </svg>
          <div class="about-system__core"><span>START WITH</span><strong>THE BUSINESS NEED</strong><small>then connect what fits</small></div>
          <RouterLink v-for="(capability, index) in capabilities" :key="capability.route" :to="capability.route" class="about-system-node" :class="`about-system-node--${index + 1}`">
            <span>{{ capability.number }}</span><strong>{{ capability.title }}</strong><small>{{ capability.description }}</small>
            <Icon name="arrow" :size="15" />
          </RouterLink>
        </div>
        <ul class="about-system__mobile">
          <li v-for="capability in capabilities" :key="capability.route">
            <RouterLink :to="capability.route"><span>{{ capability.number }}</span><div><strong>{{ capability.title }}</strong><small>{{ capability.description }}</small></div><Icon name="arrow" :size="16" /></RouterLink>
          </li>
        </ul>
      </Container>
    </section>

    <section class="about-reasoning about-section">
      <Container>
        <div class="about-section__header">
          <SectionHeading
            eyebrow="How we think about business problems"
            title="A practical path from context to learning."
            description="This reasoning framework adapts to the situation. It does not assume that every business needs every service or follows an identical sequence."
          />
          <RouterLink to="/how-we-work" class="about-text-link">How We Work <Icon name="arrow" :size="16" /></RouterLink>
        </div>
        <ol class="about-reasoning__steps">
          <li v-for="step in reasoning" :key="step.number"><span>{{ step.number }}</span><i aria-hidden="true"></i><h3>{{ step.title }}</h3><p>{{ step.description }}</p></li>
        </ol>
      </Container>
    </section>

    <section class="about-difference about-section">
      <Container class="about-difference__layout">
        <SectionHeading
          eyebrow="What makes the approach different"
          title="A different order of operations."
          description="The distinction is in how the work is framed: understand the need, make choices deliberately, and connect implementation to the reason for doing it."
        />
        <ol class="about-difference__list">
          <li v-for="item in distinctions" :key="item.number"><span>{{ item.number }}</span><div><h3>{{ item.title }}</h3><p>{{ item.description }}</p></div></li>
        </ol>
      </Container>
    </section>

    <section class="about-help about-section">
      <Container>
        <div class="about-section__header">
          <SectionHeading
            eyebrow="Who we work to help"
            title="For teams working through a meaningful business question."
            description="ORBIRIS is designed to support these kinds of challenges. Suitability depends on the context, requirements, and scope that can be agreed."
          />
          <RouterLink to="/industries" class="about-text-link">Explore industries <Icon name="arrow" :size="16" /></RouterLink>
        </div>
        <ul class="about-help__grid">
          <li v-for="need in supportedNeeds" :key="need.route">
            <h3>{{ need.title }}</h3><p>{{ need.description }}</p><RouterLink :to="need.route">{{ need.label }} <Icon name="arrow" :size="15" /></RouterLink>
          </li>
        </ul>
        <div class="about-industries">
          <span>INDUSTRY CONTEXTS</span>
          <ul><li v-for="industry in industries" :key="industry.route"><RouterLink :to="industry.route">{{ industry.label }}</RouterLink></li></ul>
        </div>
      </Container>
    </section>

    <section class="about-collaboration about-section">
      <Container class="about-collaboration__layout">
        <SectionHeading
          eyebrow="Principles of working together"
          title="Clarity is a shared responsibility."
          description="Useful work depends on a shared understanding of the goal, what is included, and what the available information can support."
        />
        <ol>
          <li v-for="(item, index) in collaboration" :key="item"><span>0{{ index + 1 }}</span><p>{{ item }}</p></li>
        </ol>
      </Container>
    </section>

    <section class="about-faq about-section">
      <Container class="about-faq__layout">
        <SectionHeading
          eyebrow="Frequently asked questions"
          title="About ORBIRIS INDIA."
          description="A little more about the philosophy, capabilities, and starting point."
        />
        <div class="about-faq__list">
          <article v-for="(item, index) in questions" :key="item.question" class="about-faq__item">
            <h3>
              <button
                :id="`about-question-${index}`"
                class="about-faq__trigger"
                type="button"
                :aria-expanded="openQuestion === index"
                :aria-controls="`about-answer-${index}`"
                @click="toggleQuestion(index)"
                @keydown="onQuestionKeydown($event, index)"
              >
                <span>0{{ index + 1 }}</span><span>{{ item.question }}</span><span aria-hidden="true">{{ openQuestion === index ? '−' : '+' }}</span>
              </button>
            </h3>
            <div v-show="openQuestion === index" :id="`about-answer-${index}`" class="about-faq__answer" role="region" :aria-labelledby="`about-question-${index}`"><p>{{ item.answer }}</p></div>
          </article>
        </div>
      </Container>
    </section>

    <section class="about-cta">
      <Container class="about-cta__layout">
        <div>
          <p class="about-eyebrow"><span></span> START WITH THE BUSINESS CONTEXT</p>
          <h2>Every Business Challenge Deserves a Clearer Starting Point.</h2>
          <p>Tell us about your business situation and what you want to improve. Together, we can explore an appropriate next step.</p>
        </div>
        <div class="about-cta__actions">
          <Button to="/contact">Start a Conversation <Icon name="arrow" :size="16" /></Button>
          <RouterLink to="/how-we-work">See How We Work <Icon name="arrow" :size="15" /></RouterLink>
          <a class="about-cta__instagram" href="https://www.instagram.com/orbirisindia" target="_blank" rel="noopener noreferrer" aria-label="Visit ORBIRIS INDIA on Instagram, @orbirisindia (opens in a new tab)">Instagram @orbirisindia</a>
        </div>
      </Container>
    </section>
  </div>
</template>

<style scoped>
.about-page { color: var(--color-text); }
.about-section { padding-block: clamp(4rem, 8vw, 7rem); }

.about-hero { position: relative; overflow: hidden; padding-block: clamp(4.25rem, 8vw, 7.25rem); background: var(--color-navy); color: white; }
.about-hero__layout { position: relative; z-index: 1; display: grid; grid-template-columns: minmax(0, 0.95fr) minmax(400px, 1.05fr); align-items: center; gap: clamp(2rem, 5vw, 5rem); }
.about-hero__copy { min-width: 0; }
.about-eyebrow { display: flex; align-items: center; gap: 0.65rem; margin: 0; color: #bfd1de; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; }
.about-eyebrow > span { width: 7px; height: 7px; border-radius: 50%; background: var(--color-teal); box-shadow: 0 0 0 5px rgba(0, 209, 167, 0.14); }
.about-hero h1 { max-width: 720px; margin: 1.25rem 0 0; color: white; font-family: var(--font-display); font-size: clamp(2.65rem, 5.2vw, 4.65rem); letter-spacing: -0.065em; line-height: 1.04; }
.about-hero__description { max-width: 590px; margin: 1.4rem 0 0; color: #bdcdda; font-size: 1rem; line-height: 1.8; }
.about-hero__actions { display: flex; flex-wrap: wrap; gap: 0.8rem; margin-top: 1.8rem; }
.about-hero :deep(.button--outline) { border-color: rgba(207, 228, 240, 0.38); background: transparent; color: white; }
.about-hero :deep(.button--outline:hover) { border-color: var(--color-teal); }
.about-hero__tagline { margin: 1.15rem 0 0; color: #91aabd; font-size: 0.78rem; }
.about-hero__grid { position: absolute; inset: 0; opacity: 0.12; pointer-events: none; background-image: linear-gradient(rgba(133, 180, 208, 0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(133, 180, 208, 0.16) 1px, transparent 1px); background-size: 48px 48px; mask-image: linear-gradient(90deg, transparent, black 72%); }

.about-hero-visual { min-width: 0; border: 1px solid rgba(160, 197, 219, 0.24); border-radius: 1.1rem; padding: clamp(0.85rem, 2vw, 1.35rem); background: linear-gradient(145deg, rgba(21, 53, 83, 0.96), rgba(9, 29, 52, 0.97)); box-shadow: 0 24px 70px rgba(0, 0, 0, 0.2); }
.about-hero-visual__label, .about-hero-visual__foot { display: flex; justify-content: space-between; gap: 0.5rem; color: #9bb6c9; font-size: 0.55rem; font-weight: 700; letter-spacing: 0.09em; }
.about-hero-visual__canvas { position: relative; width: 100%; height: clamp(280px, 31vw, 390px); margin-block: 0.55rem; }
.about-hero-visual__canvas > svg { position: absolute; inset: 0; width: 100%; height: 100%; fill: none; stroke: rgba(0, 180, 255, 0.4); stroke-width: 1; }
.about-hero-visual__canvas > svg circle, .about-hero-visual__canvas > svg ellipse { stroke: rgba(0, 209, 167, 0.24); stroke-dasharray: 4 7; }
.about-hero-visual__core { position: absolute; top: 50%; left: 50%; z-index: 1; display: grid; width: clamp(92px, 11vw, 122px); aspect-ratio: 1; align-content: center; justify-items: center; border: 1px solid rgba(0, 209, 167, 0.6); border-radius: 50%; background: #122e4b; box-shadow: 0 0 0 10px rgba(0, 209, 167, 0.055); transform: translate(-50%, -50%); }
.about-hero-visual__core span { color: #a7bfce; font-size: 0.49rem; letter-spacing: 0.12em; }
.about-hero-visual__core strong { margin-top: 0.2rem; color: white; font-family: var(--font-display); font-size: 0.78rem; }
.about-hero-visual__core small { margin-top: 0.2rem; color: #8eabba; font-size: 0.57rem; }
.about-hero-visual__node { position: absolute; z-index: 1; border: 1px solid rgba(155, 191, 213, 0.3); border-radius: 999px; padding: 0.46rem 0.68rem; background: #102845; color: #e4eef4; font-size: clamp(0.58rem, 0.85vw, 0.72rem); white-space: nowrap; }
.about-hero-visual__node::before { display: inline-block; width: 6px; height: 6px; margin-right: 0.4rem; border-radius: 50%; background: var(--color-blue); content: ''; vertical-align: 1px; }
.about-hero-visual__node--strategy { top: 9%; left: 42%; }
.about-hero-visual__node--customer { top: 25%; right: 2%; }
.about-hero-visual__node--experience { top: 53%; right: 0; }
.about-hero-visual__node--technology { right: 11%; bottom: 8%; }
.about-hero-visual__node--operations { bottom: 8%; left: 24%; }
.about-hero-visual__node--evidence { top: 29%; left: 1%; }
.about-hero-visual__node--customer::before, .about-hero-visual__node--operations::before { background: var(--color-teal); }
.about-hero-visual__node--technology::before { background: var(--color-orange); }
.about-hero-visual__foot { justify-content: flex-start; gap: 1rem; color: #c0d1dc; font-size: 0.51rem; letter-spacing: 0.04em; }
.about-hero-visual__foot span { display: inline-flex; align-items: center; gap: 0.4rem; }
.about-hero-visual__foot i { width: 5px; height: 5px; border-radius: 50%; background: var(--color-teal); }

.about-exists { background: white; }
.about-exists__layout { display: grid; grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr); align-items: start; gap: clamp(2.5rem, 7vw, 7rem); }
.about-exists__copy p { margin: 0 0 1rem; color: #40546a; font-size: 0.93rem; line-height: 1.8; }
.about-exists__copy .about-exists__note { margin-top: 1.4rem; border-left: 2px solid var(--color-teal); padding-left: 1rem; color: var(--color-muted); font-size: 0.77rem; }

.about-name { background: var(--color-background); }
.about-section__header { display: flex; align-items: end; justify-content: space-between; gap: 2rem; margin-bottom: 2.2rem; }
.about-section__header .section-heading { max-width: 780px; }
.about-name__grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; }
.about-name-card { position: relative; overflow: hidden; min-height: 320px; border: 1px solid var(--color-border); border-radius: 0.9rem; padding: clamp(1.35rem, 3vw, 2rem); background: white; }
.about-name-card::after { position: absolute; top: -90px; right: -60px; width: 250px; height: 250px; border: 1px solid var(--orb-accent); border-radius: 50%; box-shadow: 0 0 0 22px var(--orb-soft), 0 0 0 48px color-mix(in srgb, var(--orb-accent) 6%, transparent); content: ''; }
.about-name-card--orb { --orb-accent: rgba(0, 180, 255, 0.35); --orb-soft: rgba(0, 180, 255, 0.07); }
.about-name-card--iris { --orb-accent: rgba(0, 209, 167, 0.42); --orb-soft: rgba(0, 209, 167, 0.07); }
.about-name-card > span { position: relative; z-index: 1; color: #60758a; font-size: 0.62rem; font-weight: 700; letter-spacing: 0.12em; }
.about-name-card h3 { position: relative; z-index: 1; max-width: 430px; margin: 1.15rem 0 0; color: var(--color-navy); font-family: var(--font-display); font-size: clamp(1.5rem, 3vw, 2.2rem); letter-spacing: -0.04em; }
.about-name-card p { position: relative; z-index: 1; max-width: 500px; margin: 0.7rem 0 0; color: var(--color-muted); font-size: 0.86rem; line-height: 1.75; }
.about-name-card__mark { position: relative; z-index: 1; display: grid; width: 74px; height: 74px; place-items: center; margin-bottom: 1.5rem; border: 1px solid rgba(0, 180, 255, 0.55); border-radius: 50%; color: var(--color-link); font-family: var(--font-display); font-size: 0.82rem; font-weight: 800; }
.about-name-card__mark i { position: absolute; inset: -8px 8px; border: 1px solid rgba(0, 180, 255, 0.32); border-radius: 50%; transform: rotate(35deg); }
.about-name-card__mark i:nth-of-type(2) { transform: rotate(-35deg); }
.about-name-card__mark i:nth-of-type(3) { inset: -15px 15px; border-style: dashed; opacity: 0.7; }
.about-name-card__mark--iris { border-color: rgba(0, 169, 138, 0.55); color: #087b68; }
.about-name-card__mark--iris i { border-color: rgba(0, 169, 138, 0.3); }
.about-name__conclusion { margin: 1.2rem 0 0; color: #52677d; font-size: 0.83rem; line-height: 1.65; }

.about-philosophy { background: white; }
.about-principles { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 1rem; margin: 0; padding: 0; list-style: none; }
.about-principles li { min-height: 210px; border-top: 2px solid var(--color-teal); padding: 1rem 0.3rem 0; }
.about-principles li > span { color: var(--color-link); font-size: 0.67rem; font-weight: 700; }
.about-principles h3 { margin: 1.2rem 0 0; color: var(--color-navy); font-family: var(--font-display); font-size: 0.98rem; line-height: 1.4; }
.about-principles p { margin: 0.55rem 0 0; color: var(--color-muted); font-size: 0.79rem; line-height: 1.65; }

.about-system { background: var(--color-navy); color: white; }
.about-system .section-heading__title { color: white; }
.about-system .section-heading__description { color: #afc1cf; }
.about-system .section-heading__eyebrow { border-color: rgba(0, 180, 255, 0.3); background: rgba(0, 180, 255, 0.1); color: #c6edfb; }
.about-system__diagram { position: relative; width: min(100%, 1000px); height: 410px; margin: 0 auto; }
.about-system__diagram > svg { position: absolute; inset: 0; width: 100%; height: 100%; fill: none; stroke: rgba(0, 180, 255, 0.38); stroke-width: 1; }
.about-system__diagram > svg circle { stroke: rgba(0, 209, 167, 0.22); stroke-dasharray: 4 7; }
.about-system__core { position: absolute; top: 50%; left: 50%; z-index: 1; display: grid; width: 150px; aspect-ratio: 1; align-content: center; justify-items: center; border: 1px solid rgba(0, 209, 167, 0.5); border-radius: 50%; background: #112d4b; box-shadow: 0 0 0 12px rgba(0, 209, 167, 0.05); transform: translate(-50%, -50%); }
.about-system__core span { color: #a5bdcc; font-size: 0.54rem; letter-spacing: 0.12em; }
.about-system__core strong { margin-top: 0.25rem; color: white; font-family: var(--font-display); font-size: 0.77rem; text-align: center; }
.about-system__core small { margin-top: 0.3rem; color: #9ab1c0; font-size: 0.57rem; }
.about-system-node { position: absolute; z-index: 1; display: grid; width: 210px; min-height: 103px; grid-template-columns: 28px minmax(0, 1fr) 18px; align-content: center; align-items: start; gap: 0.4rem 0.55rem; border: 1px solid rgba(160, 197, 219, 0.28); border-radius: 0.72rem; padding: 0.8rem; background: #102845; color: inherit; text-decoration: none; }
.about-system-node:hover { border-color: var(--color-teal); background: #153452; }
.about-system-node > span { grid-row: span 2; color: #7bcbe9; font-size: 0.63rem; font-weight: 700; }
.about-system-node strong { color: #f0f6fa; font-family: var(--font-display); font-size: 0.77rem; line-height: 1.35; }
.about-system-node small { grid-column: 2 / 4; color: #a7bac8; font-size: 0.64rem; line-height: 1.45; }
.about-system-node .icon { color: var(--color-teal); }
.about-system-node--1 { top: 3%; left: 2%; }
.about-system-node--2 { top: 0; left: 50%; transform: translateX(-50%); }
.about-system-node--3 { top: 3%; right: 2%; }
.about-system-node--4 { bottom: 2%; left: 18%; }
.about-system-node--5 { right: 18%; bottom: 2%; }
.about-system__mobile { display: none; }

.about-reasoning { background: var(--color-background); }
.about-text-link { display: inline-flex; flex: 0 0 auto; align-items: center; gap: 0.4rem; color: var(--color-link); font-size: 0.82rem; font-weight: 700; text-decoration: none; }
.about-text-link:hover { color: var(--color-navy); }
.about-reasoning__steps { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 1rem; margin: 0; padding: 0; list-style: none; }
.about-reasoning__steps li { position: relative; border-top: 2px solid var(--color-blue); padding-top: 0.9rem; }
.about-reasoning__steps li > span { color: var(--color-link); font-size: 0.67rem; font-weight: 700; }
.about-reasoning__steps li > i { position: absolute; top: -5px; right: 0; width: 8px; height: 8px; border: 2px solid var(--color-background); border-radius: 50%; background: var(--color-teal); }
.about-reasoning__steps h3 { margin: 1rem 0 0; color: var(--color-navy); font-family: var(--font-display); font-size: 0.9rem; line-height: 1.45; }
.about-reasoning__steps p { margin: 0.5rem 0 0; color: var(--color-muted); font-size: 0.76rem; line-height: 1.65; }

.about-difference { background: white; }
.about-difference__layout { display: grid; grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr); align-items: start; gap: clamp(2.5rem, 7vw, 7rem); }
.about-difference__list { display: grid; margin: 0; padding: 0; list-style: none; }
.about-difference__list li { display: grid; grid-template-columns: 36px minmax(0, 1fr); gap: 0.85rem; border-top: 1px solid var(--color-border); padding: 1rem 0; }
.about-difference__list li > span { color: var(--color-link); font-size: 0.66rem; font-weight: 700; }
.about-difference__list h3 { margin: 0; color: var(--color-navy); font-family: var(--font-display); font-size: 0.9rem; }
.about-difference__list p { margin: 0.35rem 0 0; color: var(--color-muted); font-size: 0.78rem; line-height: 1.65; }

.about-help { background: var(--color-background); }
.about-help__grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.85rem; margin: 0; padding: 0; list-style: none; }
.about-help__grid li { display: flex; min-height: 195px; flex-direction: column; align-items: flex-start; border: 1px solid var(--color-border); border-radius: 0.8rem; padding: 1.2rem; background: white; }
.about-help__grid h3 { margin: 0; color: var(--color-navy); font-family: var(--font-display); font-size: 0.97rem; line-height: 1.4; }
.about-help__grid p { margin: 0.55rem 0 1rem; color: var(--color-muted); font-size: 0.79rem; line-height: 1.65; }
.about-help__grid a { display: inline-flex; align-items: center; gap: 0.35rem; margin-top: auto; color: var(--color-link); font-size: 0.72rem; font-weight: 700; text-decoration: none; }
.about-help__grid a:hover { color: var(--color-navy); }
.about-industries { margin-top: 2.4rem; border-top: 1px solid var(--color-border); padding-top: 1.2rem; }
.about-industries > span { color: #65798c; font-size: 0.61rem; font-weight: 700; letter-spacing: 0.1em; }
.about-industries ul { display: flex; flex-wrap: wrap; gap: 0.5rem; margin: 0.9rem 0 0; padding: 0; list-style: none; }
.about-industries a { display: inline-flex; border: 1px solid var(--color-border); border-radius: 999px; padding: 0.45rem 0.68rem; background: white; color: #43586e; font-size: 0.7rem; text-decoration: none; }
.about-industries a:hover { border-color: var(--color-blue); color: var(--color-navy); }

.about-collaboration { background: white; }
.about-collaboration__layout { display: grid; grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr); gap: clamp(2.5rem, 7vw, 7rem); }
.about-collaboration__layout > ol { display: grid; margin: 0; padding: 0; list-style: none; }
.about-collaboration__layout > ol li { display: grid; grid-template-columns: 35px minmax(0, 1fr); gap: 0.85rem; border-top: 1px solid var(--color-border); padding: 0.9rem 0; }
.about-collaboration__layout > ol li > span { color: var(--color-link); font-size: 0.65rem; font-weight: 700; }
.about-collaboration__layout > ol p { margin: 0; color: var(--color-text); font-size: 0.87rem; line-height: 1.6; }

.about-faq { background: var(--color-background); }
.about-faq__layout { display: grid; grid-template-columns: minmax(0, 0.75fr) minmax(0, 1.25fr); align-items: start; gap: clamp(2rem, 7vw, 7rem); }
.about-faq__list { border-top: 1px solid var(--color-border); }
.about-faq__item { border-bottom: 1px solid var(--color-border); }
.about-faq__item h3 { margin: 0; font-size: inherit; }
.about-faq__trigger { display: grid; width: 100%; min-height: 70px; grid-template-columns: 30px minmax(0, 1fr) 22px; align-items: center; gap: 0.75rem; border: 0; padding: 1rem 0; background: transparent; color: var(--color-navy); cursor: pointer; font-family: var(--font-display); font-size: 0.9rem; font-weight: 700; text-align: left; }
.about-faq__trigger:hover { color: var(--color-link); }
.about-faq__trigger > span:first-child { color: var(--color-link); font-family: var(--font-body); font-size: 0.64rem; }
.about-faq__trigger > span:last-child { justify-self: end; color: var(--color-link); font-size: 1.25rem; font-weight: 400; }
.about-faq__answer { padding: 0 2.5rem 1.2rem; }
.about-faq__answer p { max-width: 680px; margin: 0; color: var(--color-muted); font-size: 0.83rem; line-height: 1.75; }

.about-cta { padding-block: clamp(3.5rem, 7vw, 6rem); background: var(--color-navy); color: white; }
.about-cta__layout { display: grid; grid-template-columns: minmax(0, 1fr) auto; align-items: center; gap: 2rem; }
.about-cta h2 { max-width: 800px; margin: 1rem 0 0; color: white; font-family: var(--font-display); font-size: clamp(2.1rem, 4vw, 3.5rem); letter-spacing: -0.05em; line-height: 1.12; }
.about-cta__layout > div:first-child > p:last-child { max-width: 650px; margin: 0.9rem 0 0; color: #b9cad8; line-height: 1.7; }
.about-cta__actions { display: grid; justify-items: start; gap: 0.9rem; }
.about-cta__actions > a:not(.about-cta__instagram) { display: inline-flex; align-items: center; gap: 0.4rem; color: #d8e7ef; font-size: 0.8rem; text-decoration: none; }
.about-cta__actions > a:not(.about-cta__instagram):hover { color: white; }
.about-cta__instagram { color: #d8e7ef; font-size: 0.78rem; text-decoration: none; }
.about-cta__instagram:hover { color: var(--color-teal); text-decoration: underline; }

@media (max-width: 1000px) {
  .about-hero__layout { grid-template-columns: minmax(0, 1fr); }
  .about-hero__copy { max-width: 760px; }
  .about-hero-visual { width: min(100%, 720px); margin-inline: auto; }
  .about-exists__layout, .about-difference__layout, .about-collaboration__layout, .about-faq__layout { grid-template-columns: minmax(0, 1fr); gap: 2.5rem; }
  .about-system__diagram { width: 780px; left: 50%; transform: translateX(-50%); }
  .about-system-node { width: 185px; }
  .about-reasoning__steps { grid-template-columns: repeat(3, minmax(0, 1fr)); row-gap: 1.8rem; }
  .about-cta__layout { grid-template-columns: minmax(0, 1fr); }
}

@media (max-width: 700px) {
  .about-hero { padding-block: 3.5rem; }
  .about-hero h1 { font-size: clamp(2.45rem, 11vw, 3.7rem); }
  .about-hero-visual__canvas { height: 300px; }
  .about-hero-visual__node { padding: 0.4rem 0.52rem; font-size: 0.57rem; }
  .about-hero-visual__node--strategy { top: 6%; left: 41%; }
  .about-hero-visual__node--customer { top: 24%; right: 0; }
  .about-hero-visual__node--experience { top: 53%; right: 0; }
  .about-hero-visual__node--technology { right: 2%; bottom: 8%; }
  .about-hero-visual__node--operations { bottom: 8%; left: 20%; }
  .about-hero-visual__node--evidence { top: 29%; left: 0; }
  .about-name__grid { grid-template-columns: minmax(0, 1fr); }
  .about-name-card { min-height: 290px; }
  .about-principles { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .about-principles li { min-height: 190px; }
  .about-system__diagram { display: none; }
  .about-system__mobile { display: grid; gap: 0.65rem; margin: 0; padding: 0; list-style: none; }
  .about-system__mobile a { display: grid; grid-template-columns: 32px minmax(0, 1fr) 20px; align-items: start; gap: 0.75rem; border: 1px solid rgba(160, 197, 219, 0.26); border-radius: 0.7rem; padding: 0.9rem; background: #102845; color: white; text-decoration: none; }
  .about-system__mobile a:hover { border-color: var(--color-teal); }
  .about-system__mobile a > span { color: #7bcbe9; font-size: 0.66rem; font-weight: 700; }
  .about-system__mobile strong { display: block; font-family: var(--font-display); font-size: 0.85rem; }
  .about-system__mobile small { display: block; margin-top: 0.3rem; color: #a7bac8; font-size: 0.71rem; line-height: 1.55; }
  .about-system__mobile .icon { color: var(--color-teal); }
  .about-reasoning__steps { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .about-help__grid { grid-template-columns: minmax(0, 1fr); }
  .about-help__grid li { min-height: 165px; }
  .about-section__header { align-items: flex-start; flex-direction: column; gap: 1rem; }
  .about-cta__actions { justify-items: stretch; }
  .about-cta__actions :deep(.button) { width: 100%; }
}

@media (max-width: 850px) {
  .about-system__diagram { display: none; }
  .about-system__mobile { display: grid; }
}

@media (max-width: 390px) {
  .about-hero__actions { align-items: stretch; flex-direction: column; }
  .about-hero__actions :deep(.button) { width: 100%; }
  .about-hero-visual__label { font-size: 0.45rem; letter-spacing: 0.04em; }
  .about-hero-visual__canvas { height: 265px; }
  .about-hero-visual__core { width: 76px; }
  .about-hero-visual__core span { font-size: 0.41rem; }
  .about-hero-visual__core strong { font-size: 0.65rem; }
  .about-hero-visual__core small { font-size: 0.49rem; }
  .about-hero-visual__node { padding: 0.35rem 0.4rem; font-size: 0.51rem; }
  .about-hero-visual__node::before { width: 5px; height: 5px; margin-right: 0.25rem; }
  .about-hero-visual__node--strategy { top: 5%; left: 38%; }
  .about-hero-visual__node--customer { top: 24%; right: 0; }
  .about-hero-visual__node--experience { top: 52%; right: 0; }
  .about-hero-visual__node--technology { right: 0; bottom: 7%; }
  .about-hero-visual__node--operations { bottom: 7%; left: 18%; }
  .about-hero-visual__node--evidence { top: 29%; left: 0; }
  .about-hero-visual__foot { flex-wrap: wrap; gap: 0.45rem 0.7rem; font-size: 0.46rem; }
  .about-principles, .about-reasoning__steps { grid-template-columns: minmax(0, 1fr); }
  .about-principles li { min-height: auto; padding-bottom: 0.7rem; }
  .about-reasoning__steps { gap: 1.25rem; }
  .about-faq__trigger { grid-template-columns: 25px minmax(0, 1fr) 20px; gap: 0.5rem; font-size: 0.83rem; }
  .about-faq__answer { padding-inline: 2rem 0.4rem; }
}

@media (prefers-reduced-motion: reduce) {
  .about-page *, .about-page *::before, .about-page *::after { scroll-behavior: auto !important; transition-duration: 0.01ms !important; }
}
</style>
