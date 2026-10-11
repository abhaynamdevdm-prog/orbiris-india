<script setup>
import Container from '../components/global/Container.vue'
import Button from '../components/global/Button.vue'
import SectionHeading from '../components/global/SectionHeading.vue'
import Icon from '../components/global/Icon.vue'

const problems = [
  {
    number: '01',
    title: 'Disconnected Strategy',
    description: 'Marketing activities happen without a shared business direction.',
    motif: 'problem-motif--strategy',
  },
  {
    number: '02',
    title: 'Unclear Positioning',
    description: 'Customers struggle to understand why the business is different.',
    motif: 'problem-motif--position',
  },
  {
    number: '03',
    title: 'Fragmented Experience',
    description: 'The journey from discovery to enquiry or purchase feels inconsistent.',
    motif: 'problem-motif--experience',
  },
  {
    number: '04',
    title: 'Activity Without Insight',
    description: 'Teams focus on outputs without enough clarity about what is working and why.',
    motif: 'problem-motif--insight',
  },
]

const principles = [
  {
    number: '01',
    title: 'See the Whole Picture',
    description: 'Understand the business, its audience, positioning, competition, customer journey, and objectives before recommending activity.',
  },
  {
    number: '02',
    title: 'Find the Real Constraint',
    description: 'Identify the gap that is limiting progress instead of assuming that more advertising or more content is always the answer.',
  },
  {
    number: '03',
    title: 'Build for the Next Stage',
    description: "Connect the right strategy, brand experience, marketing, and technology to support the business's next stage of growth.",
  },
]

const comparison = [
  {
    label: 'Planning',
    disconnected: 'Individual channels planned separately',
    connected: 'Business objectives inform channel decisions',
  },
  {
    label: 'Time horizon',
    disconnected: 'Decisions driven by short-term activity alone',
    connected: 'Short-term actions considered alongside long-term positioning',
  },
  {
    label: 'Experience',
    disconnected: 'Brand, marketing, and website treated independently',
    connected: 'Brand, marketing, customer experience, and technology considered together',
  },
  {
    label: 'Measurement',
    disconnected: 'Reporting focused on isolated metrics',
    connected: 'Performance reviewed in the context of business goals',
  },
  {
    label: 'Recommendations',
    disconnected: 'Recommendations made before understanding the wider business',
    connected: 'Recommendations grounded in discovery and diagnosis',
  },
]

const capabilities = [
  {
    number: '01',
    title: 'Strategy & Discovery',
    description: 'Clarify business objectives, audience, positioning, and priorities.',
    to: '/solutions/strategy',
    marker: 'capability-mark--strategy',
  },
  {
    number: '02',
    title: 'Brand & Digital Experience',
    description: 'Build consistency across brand communication and digital touchpoints.',
    to: '/solutions/brand-digital-experience',
    marker: 'capability-mark--experience',
  },
  {
    number: '03',
    title: 'Performance & Growth',
    description: 'Connect paid campaigns, content, and conversion improvement to business goals.',
    to: '/solutions/performance-growth',
    marker: 'capability-mark--growth',
  },
  {
    number: '04',
    title: 'Technology & Digital Platforms',
    description: 'Build and improve digital experiences that support customer and operational needs.',
    to: '/solutions/technology',
    marker: 'capability-mark--technology',
  },
  {
    number: '05',
    title: 'Automation & Systems',
    description: 'Identify suitable opportunities to reduce repetitive work and improve processes.',
    to: '/solutions/automation',
    marker: 'capability-mark--systems',
  },
]

const framework = [
  {
    number: '01',
    title: 'Discover',
    description: 'Understand the business model, objectives, audience, current digital presence, and constraints.',
  },
  {
    number: '02',
    title: 'Diagnose',
    description: 'Identify gaps, opportunities, dependencies, and the most relevant priorities.',
  },
  {
    number: '03',
    title: 'Align',
    description: 'Connect recommendations with business goals, available resources, and the customer journey.',
  },
  {
    number: '04',
    title: 'Build & Improve',
    description: 'Implement the agreed priorities, assess available performance signals, and refine the approach.',
  },
]

const industries = [
  { title: 'Healthcare', to: '/industries/healthcare' },
  { title: 'Manufacturing', to: '/industries/manufacturing' },
  { title: 'Retail & E-commerce', to: '/industries/retail' },
  { title: 'Real Estate', to: '/industries/real-estate' },
  { title: 'Education', to: '/industries/education' },
  { title: 'Professional Services', to: '/industries/professional-services' },
  { title: 'Technology', to: '/industries/technology' },
]

const trustPrinciples = [
  {
    number: '01',
    title: 'Clear Priorities',
    description: 'Understand what matters now and what can wait.',
  },
  {
    number: '02',
    title: 'Honest Recommendations',
    description: 'Recommend work based on the identified need, not simply because a service is available.',
  },
  {
    number: '03',
    title: 'Visible Progress',
    description: 'Agree on relevant measures and review progress against the intended objectives.',
  },
]
</script>

<template>
  <div class="why-page">
    <section class="why-hero">
      <Container class="why-hero__inner">
        <div class="why-hero__copy">
          <p class="why-eyebrow"><span></span> WHY ORBIRIS</p>
          <h1>Your business deserves more than disconnected digital activities.</h1>
          <p class="why-hero__description">
            Growth becomes difficult when strategy, brand, marketing, technology, and customer experience work in separate directions. ORBIRIS brings these moving parts into one clearer, more connected growth system.
          </p>
          <div class="why-hero__actions">
            <Button to="/contact">Start a Conversation <Icon name="arrow" :size="17" /></Button>
            <Button to="/how-we-work" variant="secondary" class="why-button--outline">Explore Our Approach</Button>
          </div>
          <p class="why-hero__belief">A business-first digital growth and transformation partner.</p>
        </div>
        <div class="why-alignment" role="img" aria-label="Separate business disciplines connect around one shared direction">
          <svg viewBox="0 0 620 520" fill="none" aria-hidden="true">
            <defs>
              <radialGradient id="alignmentGlow">
                <stop stop-color="#00B4FF" stop-opacity=".2" />
                <stop offset="1" stop-color="#00B4FF" stop-opacity="0" />
              </radialGradient>
              <linearGradient id="alignmentPath" x1="110" y1="120" x2="500" y2="390" gradientUnits="userSpaceOnUse">
                <stop stop-color="#9CB2C5" stop-opacity=".28" />
                <stop offset=".55" stop-color="#00B4FF" stop-opacity=".75" />
                <stop offset="1" stop-color="#00D1A7" stop-opacity=".42" />
              </linearGradient>
            </defs>
            <circle cx="318" cy="260" r="236" fill="url(#alignmentGlow)" />
            <path d="M120 167 253 117l161 31 89 113-66 127-153 29-140-72-41-128Z" stroke="#84A4BD" stroke-opacity=".4" stroke-dasharray="3 8" />
            <path d="m128 176 131 61 155-91m-155 91 26 180m129-271 20 181m-175-90-159 52m159-52 153 99" stroke="#9DB8CC" stroke-opacity=".22" />
            <path d="M137 173c71-94 221-104 321-17 99 86 77 223-24 285-105 64-260 40-318-48" stroke="url(#alignmentPath)" />
            <ellipse cx="317" cy="259" rx="158" ry="73" transform="rotate(-28 317 259)" stroke="#00D1A7" stroke-opacity=".42" />
            <ellipse cx="317" cy="259" rx="188" ry="109" transform="rotate(27 317 259)" stroke="#00B4FF" stroke-opacity=".3" stroke-dasharray="2 8" />
            <circle cx="317" cy="259" r="87" fill="#102B49" stroke="#00B4FF" stroke-opacity=".66" />
            <circle cx="317" cy="259" r="68" stroke="#00D1A7" stroke-opacity=".34" stroke-dasharray="2 7" />
            <circle cx="317" cy="259" r="42" fill="#15395B" stroke="#BCEBFF" stroke-opacity=".4" />
            <circle cx="317" cy="259" r="12" fill="#00B4FF" />
            <circle cx="137" cy="173" r="6" fill="#FFB020" />
            <circle cx="259" cy="237" r="5" fill="#00D1A7" />
            <circle cx="414" cy="146" r="6" fill="#00B4FF" />
            <circle cx="440" cy="327" r="5" fill="#FFB020" />
            <circle cx="286" cy="417" r="6" fill="#00D1A7" />
            <circle cx="128" cy="289" r="5" fill="#00B4FF" />
            <path d="M317 22v43m0 388v44M79 259h45m388 0h43" stroke="#B8D2E3" stroke-opacity=".24" />
          </svg>
          <span class="why-alignment__label why-alignment__label--strategy">STRATEGY</span>
          <span class="why-alignment__label why-alignment__label--brand">BRAND</span>
          <span class="why-alignment__label why-alignment__label--technology">TECHNOLOGY</span>
          <span class="why-alignment__label why-alignment__label--growth">GROWTH</span>
          <span class="why-alignment__center">ONE SHARED<br />DIRECTION</span>
        </div>
        <p class="why-hero__philosophy">See the business from every angle. Find what others miss. Build what moves it forward.</p>
      </Container>
      <div class="why-hero__grid" aria-hidden="true"></div>
    </section>

    <section class="why-problem why-section">
      <Container>
        <div class="why-section-heading">
          <SectionHeading
            eyebrow="The real problem"
            title="The problem is rarely just one channel."
            description="A business can invest in advertising, social media, a website, content, and technology yet still struggle when those activities are not aligned with its business goals."
          />
          <p class="why-section-aside">These are possibilities to explore—not assumptions about every business.</p>
        </div>
        <div class="why-problem-grid">
          <article v-for="problem in problems" :key="problem.number" class="why-problem-item">
            <div class="why-problem-item__top">
              <span class="why-index">{{ problem.number }}</span>
              <div class="problem-motif" :class="problem.motif" aria-hidden="true">
                <i></i><i></i><i></i>
              </div>
            </div>
            <h3>{{ problem.title }}</h3>
            <p>{{ problem.description }}</p>
          </article>
        </div>
      </Container>
    </section>

    <section class="why-viewpoint why-section">
      <Container>
        <div class="why-viewpoint__intro">
          <SectionHeading
            eyebrow="Our point of view"
            title="Better growth starts with a better view of the business."
            description="ORB reflects a 360-degree perspective. IRIS represents insight and vision. Together, they shape how we make sense of the whole and find a useful way forward."
          />
          <p class="why-viewpoint__manifesto">See the business from every angle.<br /><span>Find what others miss.</span><br />Build what moves it forward.</p>
        </div>
        <ol class="why-principle-list">
          <li v-for="principle in principles" :key="principle.number" class="why-principle">
            <span class="why-principle__number">{{ principle.number }}</span>
            <h3>{{ principle.title }}</h3>
            <p>{{ principle.description }}</p>
          </li>
        </ol>
        <div class="why-progression" aria-label="Understand, Diagnose, Align, Build, Improve">
          <span v-for="(step, index) in ['Understand', 'Diagnose', 'Align', 'Build', 'Improve']" :key="step" class="why-progression__step">
            <i>{{ String(index + 1).padStart(2, '0') }}</i>{{ step }}
            <Icon v-if="index < 4" name="arrow" :size="15" />
          </span>
        </div>
      </Container>
    </section>

    <section class="why-comparison why-section">
      <Container>
        <div class="why-section-heading why-section-heading--comparison">
          <SectionHeading
            eyebrow="A different way to connect the work"
            title="Not more activity. Better-connected activity."
            description="This is a comparison of approaches, not a judgment about any particular team or partner."
          />
        </div>
        <div class="why-compare-table" role="table" aria-label="Comparison of disconnected and connected approaches">
          <div class="why-compare-row why-compare-row--head" role="row">
            <span role="columnheader">Area</span>
            <span role="columnheader">A disconnected approach</span>
            <span role="columnheader">The ORBIRIS approach</span>
          </div>
          <div v-for="item in comparison" :key="item.label" class="why-compare-row" role="row">
            <span class="why-compare-row__label" role="rowheader">{{ item.label }}</span>
            <span class="why-compare-row__value why-compare-row__value--muted" role="cell">
              <span class="why-compare-row__mark" aria-hidden="true">—</span>{{ item.disconnected }}
            </span>
            <span class="why-compare-row__value why-compare-row__value--connected" role="cell">
              <span class="why-compare-row__mark" aria-hidden="true">+</span>{{ item.connected }}
            </span>
          </div>
        </div>
      </Container>
    </section>

    <section class="why-capabilities why-section">
      <Container>
        <div class="why-section-heading">
          <SectionHeading
            eyebrow="Our integrated perspective"
            title="One business. Multiple connected growth levers."
            description="The right combination depends on the challenge. Each capability is stronger when it works in context with the others."
          />
          <p class="why-capabilities__note"><span></span>Connected by the business objective</p>
        </div>
        <div class="why-capability-list">
          <RouterLink
            v-for="capability in capabilities"
            :key="capability.to"
            :to="capability.to"
            class="why-capability"
          >
            <span class="why-capability__number">{{ capability.number }}</span>
            <span class="capability-mark" :class="capability.marker" aria-hidden="true"><i></i><i></i></span>
            <span class="why-capability__content">
              <strong>{{ capability.title }}</strong>
              <small>{{ capability.description }}</small>
            </span>
            <span class="why-capability__link"><Icon name="arrow" :size="18" /></span>
          </RouterLink>
        </div>
      </Container>
    </section>

    <section class="why-framework why-section">
      <Container>
        <div class="why-section-heading why-section-heading--split">
          <SectionHeading
            eyebrow="How we think before we recommend"
            title="Understand first. Recommend second."
            description="A useful recommendation starts with context. We work through the question before prescribing a response."
          />
          <Button to="/how-we-work" variant="secondary">See How We Work <Icon name="arrow" :size="17" /></Button>
        </div>
        <ol class="why-framework-list">
          <li v-for="step in framework" :key="step.number" class="why-framework-step">
            <span class="why-framework-step__number">{{ step.number }}</span>
            <div class="why-framework-step__line" aria-hidden="true"><i></i></div>
            <h3>{{ step.title }}</h3>
            <p>{{ step.description }}</p>
          </li>
        </ol>
      </Container>
    </section>

    <section class="why-industries why-section">
      <Container class="why-industries__inner">
        <div class="why-industries__copy">
          <SectionHeading
            eyebrow="Who we work with"
            title="Built around real business contexts."
            description="The right growth approach depends on a company's stage, industry, customer, and operating model. Context comes before a template."
          />
        </div>
        <nav class="why-industry-list" aria-label="Industries">
          <RouterLink v-for="industry in industries" :key="industry.to" :to="industry.to" class="why-industry">
            <span>{{ industry.title }}</span><Icon name="arrow" :size="16" />
          </RouterLink>
        </nav>
      </Container>
    </section>

    <section class="why-trust why-section">
      <Container>
        <div class="why-trust__intro">
          <SectionHeading
            eyebrow="Trust through transparency"
            title="Clarity is part of the work."
            description="Good collaboration makes the reasoning visible: what matters, why it matters, and how we will learn from the work."
          />
          <div class="why-trust__rule" aria-hidden="true"><span></span><i></i><span></span></div>
        </div>
        <div class="why-trust-list">
          <article v-for="principle in trustPrinciples" :key="principle.number" class="why-trust-item">
            <span>{{ principle.number }}</span>
            <h3>{{ principle.title }}</h3>
            <p>{{ principle.description }}</p>
          </article>
        </div>
      </Container>
    </section>

    <section class="why-cta why-section">
      <Container class="why-cta__inner">
        <div class="why-cta__orbit" aria-hidden="true"><span></span><span></span><span></span></div>
        <p class="why-eyebrow"><span></span> THE NEXT STEP STARTS WITH A QUESTION</p>
        <h2>Let's find what will move<br />your business forward.</h2>
        <p class="why-cta__description">Start with a conversation about your business, your current challenges, and where you want to go next.</p>
        <div class="why-cta__actions">
          <Button to="/contact">Start a Conversation <Icon name="arrow" :size="17" /></Button>
          <Button to="/solutions" variant="secondary">Explore Our Solutions</Button>
        </div>
      </Container>
    </section>
  </div>
</template>

<style scoped>
.why-page {
  overflow: clip;
}

.why-section {
  position: relative;
  padding-block: clamp(4.5rem, 9vw, 7.75rem);
}

.why-hero {
  position: relative;
  overflow: hidden;
  background: var(--color-navy);
  color: var(--color-white);
}

.why-hero__inner {
  position: relative;
  display: grid;
  min-height: min(690px, calc(100svh - 84px));
  grid-template-columns: minmax(0, 1.05fr) minmax(360px, 0.95fr);
  align-items: center;
  gap: 1rem;
  padding-block: clamp(5rem, 9vw, 7.5rem);
}

.why-hero__copy {
  position: relative;
  z-index: 2;
  max-width: 690px;
}

.why-eyebrow {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  margin: 0 0 1.5rem;
  color: #b9d4e7;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.15em;
}

.why-eyebrow > span {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--color-teal);
  box-shadow: 0 0 14px rgba(0, 209, 167, 0.65);
}

.why-hero h1 {
  max-width: 740px;
  margin: 0;
  color: var(--color-white);
  font-family: var(--font-display);
  font-size: clamp(3rem, 5.55vw, 5.15rem);
  font-weight: 650;
  letter-spacing: -0.065em;
  line-height: 1.035;
}

.why-hero__description {
  max-width: 610px;
  margin: 1.5rem 0 0;
  color: #c1cede;
  font-size: clamp(1rem, 1.3vw, 1.1rem);
  line-height: 1.8;
}

.why-hero__actions,
.why-cta__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  margin-top: 2rem;
}

.why-hero .why-button--outline {
  border-color: rgba(255, 255, 255, 0.32);
  background: transparent;
  color: var(--color-white);
}

.why-hero .why-button--outline:hover {
  border-color: var(--color-blue);
  background: rgba(255, 255, 255, 0.06);
}

.why-hero__belief {
  margin: 2.3rem 0 0;
  color: #91a6bb;
  font-size: 0.82rem;
}

.why-alignment {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 570px;
  aspect-ratio: 1.2;
  justify-self: end;
}

.why-alignment svg {
  width: 100%;
  height: 100%;
}

.why-alignment__label {
  position: absolute;
  color: #9ab5c9;
  font-size: clamp(0.52rem, 0.82vw, 0.68rem);
  font-weight: 700;
  letter-spacing: 0.14em;
}

.why-alignment__label--strategy {
  top: 27%;
  left: 16%;
}

.why-alignment__label--brand {
  top: 13%;
  right: 24%;
}

.why-alignment__label--technology {
  right: 5%;
  bottom: 28%;
}

.why-alignment__label--growth {
  bottom: 12%;
  left: 38%;
}

.why-alignment__center {
  position: absolute;
  top: 50%;
  left: 51%;
  color: #e1f6ff;
  font-size: clamp(0.55rem, 0.86vw, 0.69rem);
  font-weight: 700;
  letter-spacing: 0.13em;
  line-height: 1.5;
  text-align: center;
  transform: translate(-50%, -50%);
}

.why-hero__philosophy {
  position: absolute;
  right: var(--container-gutter);
  bottom: 1.8rem;
  max-width: 360px;
  margin: 0;
  color: #91a6bb;
  font-family: var(--font-display);
  font-size: 0.78rem;
  font-style: italic;
  text-align: right;
}

.why-hero__grid {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image: linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: linear-gradient(90deg, transparent 12%, #000 88%);
}

.why-section-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 2rem;
}

.why-section-heading .section-heading__description {
  max-width: 700px;
}

.why-section-aside {
  max-width: 270px;
  margin: 0 0 0.35rem;
  color: var(--color-muted);
  font-size: 0.82rem;
  line-height: 1.6;
}

.why-problem {
  background: var(--color-white);
}

.why-problem-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin-top: clamp(2.8rem, 6vw, 4.5rem);
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
}

.why-problem-item {
  min-height: 240px;
  padding: 1.35rem clamp(1rem, 2.4vw, 2rem) 1.8rem;
}

.why-problem-item:first-child {
  padding-left: 0;
}

.why-problem-item + .why-problem-item {
  border-left: 1px solid var(--color-border);
}

.why-problem-item__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 44px;
}

.why-index,
.why-principle__number,
.why-framework-step__number {
  color: #73869a;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.problem-motif {
  position: relative;
  display: flex;
  width: 52px;
  height: 40px;
  align-items: center;
  justify-content: center;
}

.problem-motif i {
  position: absolute;
  width: 22px;
  height: 22px;
  border: 1px solid rgba(0, 180, 255, 0.65);
  border-radius: 50%;
}

.problem-motif i:nth-child(1) {
  left: 2px;
}

.problem-motif i:nth-child(2) {
  left: 15px;
  border-color: rgba(0, 209, 167, 0.8);
}

.problem-motif i:nth-child(3) {
  left: 28px;
  border-color: rgba(255, 176, 32, 0.8);
}

.problem-motif--position i {
  border-radius: 3px;
  transform: rotate(45deg) scale(0.8);
}

.problem-motif--experience i:nth-child(1),
.problem-motif--experience i:nth-child(3) {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.problem-motif--experience i:nth-child(2) {
  width: 34px;
  height: 1px;
  border: 0;
  border-radius: 0;
  background: var(--color-blue);
}

.problem-motif--insight i:nth-child(1) {
  width: 7px;
  height: 7px;
  background: var(--color-teal);
}

.problem-motif--insight i:nth-child(2) {
  width: 28px;
  height: 28px;
}

.problem-motif--insight i:nth-child(3) {
  width: 42px;
  height: 36px;
  border-style: dashed;
}

.why-problem-item h3,
.why-principle h3,
.why-framework-step h3,
.why-trust-item h3 {
  margin: 1.45rem 0 0.55rem;
  color: var(--color-navy);
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: -0.025em;
}

.why-problem-item p,
.why-principle p,
.why-framework-step p,
.why-trust-item p {
  max-width: 280px;
  margin: 0;
  color: var(--color-muted);
  font-size: 0.88rem;
  line-height: 1.7;
}

.why-viewpoint {
  overflow: hidden;
  background: var(--color-navy);
  color: var(--color-white);
}

.why-viewpoint .section-heading__title {
  color: var(--color-white);
}

.why-viewpoint .section-heading__description {
  max-width: 630px;
  color: #b6c5d5;
}

.why-viewpoint .section-heading__eyebrow {
  border-color: rgba(0, 180, 255, 0.35);
  background: rgba(0, 180, 255, 0.12);
  color: #b8eaff;
}

.why-viewpoint__intro {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(260px, 0.8fr);
  align-items: end;
  gap: 3rem;
}

.why-viewpoint__manifesto {
  margin: 0 0 0.35rem;
  color: #e2f1f9;
  font-family: var(--font-display);
  font-size: clamp(1rem, 1.8vw, 1.45rem);
  font-weight: 550;
  letter-spacing: -0.03em;
  line-height: 1.55;
}

.why-viewpoint__manifesto span {
  color: #56ceff;
}

.why-principle-list {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin: clamp(3rem, 6vw, 5rem) 0 0;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0;
  list-style: none;
}

.why-principle {
  padding: 1.4rem clamp(1rem, 3vw, 2.5rem) 0 0;
}

.why-principle + .why-principle {
  padding-left: clamp(1rem, 3vw, 2.5rem);
  border-left: 1px solid rgba(255, 255, 255, 0.15);
}

.why-principle__number {
  color: #7fcbee;
}

.why-principle h3 {
  margin-top: 1rem;
  color: var(--color-white);
}

.why-principle p {
  max-width: 340px;
  color: #b6c5d5;
}

.why-progression {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.7rem;
  margin-top: 3.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.16);
  padding-top: 1.4rem;
}

.why-progression__step {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  color: #d6e6f0;
  font-size: 0.82rem;
  font-weight: 650;
}

.why-progression__step i {
  color: #6cccf2;
  font-size: 0.66rem;
  font-style: normal;
  font-weight: 700;
}

.why-progression__step .icon {
  margin-left: clamp(0.35rem, 2vw, 1.5rem);
  color: #00d1a7;
}

.why-comparison {
  background: #f0f4f8;
}

.why-section-heading--comparison {
  margin-bottom: 3rem;
}

.why-compare-table {
  overflow: hidden;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-white);
}

.why-compare-row {
  display: grid;
  grid-template-columns: 0.52fr 1fr 1fr;
}

.why-compare-row > span {
  display: flex;
  align-items: start;
  gap: 0.75rem;
  border-top: 1px solid var(--color-border);
  padding: 1.15rem 1.4rem;
  color: var(--color-text);
  font-size: 0.9rem;
  line-height: 1.6;
}

.why-compare-row > span + span {
  border-left: 1px solid var(--color-border);
}

.why-compare-row--head > span {
  border-top: 0;
  background: #e8eef3;
  color: var(--color-navy);
  font-size: 0.78rem;
  font-weight: 700;
}

.why-compare-row__label {
  color: var(--color-navy) !important;
  font-weight: 700;
}

.why-compare-row__value--muted {
  color: #66798b !important;
}

.why-compare-row__value--connected {
  background: rgba(0, 209, 167, 0.045);
}

.why-compare-row__mark {
  flex: 0 0 auto;
  color: #90a0af;
  font-weight: 700;
}

.why-compare-row__value--connected .why-compare-row__mark {
  color: #009d7e;
}

.why-capabilities {
  background: var(--color-white);
}

.why-capabilities__note {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  gap: 0.6rem;
  margin: 0 0 0.4rem;
  color: var(--color-muted);
  font-size: 0.78rem;
}

.why-capabilities__note span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-teal);
}

.why-capability-list {
  position: relative;
  margin-top: 3.2rem;
  border-top: 1px solid var(--color-border);
}

.why-capability-list::before {
  position: absolute;
  top: 38px;
  bottom: 38px;
  left: 54px;
  width: 1px;
  background: linear-gradient(var(--color-blue), var(--color-teal), var(--color-orange));
  content: '';
  opacity: 0.55;
}

.why-capability {
  position: relative;
  display: grid;
  min-height: 112px;
  grid-template-columns: 36px 56px minmax(0, 1fr) 44px;
  align-items: center;
  gap: 1.4rem;
  border-bottom: 1px solid var(--color-border);
  padding-block: 1rem;
  color: inherit;
  text-decoration: none;
}

.why-capability__number {
  color: #8091a3;
  font-size: 0.72rem;
  font-weight: 700;
}

.capability-mark {
  position: relative;
  z-index: 1;
  display: grid;
  width: 42px;
  height: 42px;
  place-items: center;
  border: 1px solid #c8dbe7;
  border-radius: 50%;
  background: var(--color-white);
}

.capability-mark i {
  position: absolute;
  width: 19px;
  height: 19px;
  border: 1px solid var(--color-blue);
  border-radius: 50%;
}

.capability-mark i + i {
  width: 10px;
  height: 10px;
  margin: 12px 0 0 12px;
  border-color: var(--color-teal);
  background: var(--color-white);
}

.capability-mark--experience i {
  border-radius: 3px;
  transform: rotate(45deg);
}

.capability-mark--growth i:first-child {
  width: 23px;
  height: 12px;
  border-radius: 50%;
  transform: rotate(-35deg);
}

.capability-mark--technology i:first-child {
  border-radius: 5px;
}

.capability-mark--systems i:first-child {
  border-style: dashed;
}

.why-capability__content {
  display: grid;
  gap: 0.4rem;
}

.why-capability__content strong {
  color: var(--color-navy);
  font-family: var(--font-display);
  font-size: clamp(1.05rem, 2vw, 1.35rem);
  letter-spacing: -0.03em;
}

.why-capability__content small {
  max-width: 650px;
  color: var(--color-muted);
  font-size: 0.87rem;
  line-height: 1.6;
}

.why-capability__link {
  display: grid;
  width: 40px;
  height: 40px;
  place-items: center;
  border: 1px solid var(--color-border);
  border-radius: 50%;
  color: var(--color-navy);
  transition: transform 160ms ease, border-color 160ms ease;
}

.why-capability:hover .why-capability__link {
  border-color: var(--color-blue);
  transform: translateX(3px);
}

.why-framework {
  background: var(--color-background);
}

.why-section-heading--split > .button {
  flex: 0 0 auto;
  margin-bottom: 0.3rem;
}

.why-framework-list {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.4rem;
  margin: clamp(3rem, 6vw, 5rem) 0 0;
  padding: 0;
  list-style: none;
}

.why-framework-step {
  min-width: 0;
}

.why-framework-step__number {
  color: var(--color-link);
}

.why-framework-step__line {
  position: relative;
  height: 1px;
  margin-top: 1.1rem;
  background: #cad7e0;
}

.why-framework-step__line i {
  position: absolute;
  top: -4px;
  left: 0;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--color-blue);
}

.why-framework-step:nth-child(3) .why-framework-step__line i {
  background: var(--color-teal);
}

.why-framework-step h3 {
  margin-top: 1.2rem;
  font-size: 1.2rem;
}

.why-industries {
  background: var(--color-white);
}

.why-industries__inner {
  display: grid;
  grid-template-columns: minmax(230px, 0.8fr) minmax(0, 1.2fr);
  align-items: start;
  gap: clamp(3rem, 8vw, 8rem);
}

.why-industry-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 2rem;
  margin-top: 0.5rem;
}

.why-industry {
  display: flex;
  min-height: 60px;
  align-items: center;
  justify-content: space-between;
  gap: 0.7rem;
  border-bottom: 1px solid var(--color-border);
  color: var(--color-navy);
  font-size: 0.92rem;
  font-weight: 650;
  text-decoration: none;
}

.why-industry .icon {
  flex: 0 0 auto;
  color: #71879a;
  transition: transform 160ms ease;
}

.why-industry:hover {
  color: var(--color-link);
}

.why-industry:hover .icon {
  color: var(--color-link);
  transform: translateX(3px);
}

.why-trust {
  background: #f0f4f8;
}

.why-trust__intro {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 2rem;
}

.why-trust__rule {
  display: flex;
  width: min(32%, 310px);
  flex: 0 0 auto;
  align-items: center;
  gap: 0.65rem;
  margin-bottom: 0.7rem;
}

.why-trust__rule span {
  height: 1px;
  flex: 1;
  background: #b7c8d4;
}

.why-trust__rule i {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-teal);
}

.why-trust-list {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 3.5rem;
  border-top: 1px solid #ccd7df;
}

.why-trust-item {
  padding: 1.4rem 2rem 0 0;
}

.why-trust-item + .why-trust-item {
  border-left: 1px solid #ccd7df;
  padding-left: 2rem;
}

.why-trust-item > span {
  color: var(--color-link);
  font-size: 0.72rem;
  font-weight: 700;
}

.why-trust-item h3 {
  margin-top: 1rem;
}

.why-cta {
  position: relative;
  overflow: hidden;
  background: var(--color-navy);
  color: var(--color-white);
  text-align: center;
}

.why-cta__inner {
  position: relative;
  z-index: 1;
}

.why-cta .why-eyebrow {
  justify-content: center;
  color: #b9d4e7;
}

.why-cta h2 {
  margin: 0;
  color: var(--color-white);
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 5.2vw, 4.5rem);
  font-weight: 650;
  letter-spacing: -0.06em;
  line-height: 1.07;
}

.why-cta__description {
  max-width: 620px;
  margin: 1.35rem auto 0;
  color: #c1cede;
  font-size: 1.04rem;
  line-height: 1.75;
}

.why-cta__actions {
  justify-content: center;
}

.why-cta .button--secondary {
  border-color: rgba(255, 255, 255, 0.32);
  background: transparent;
  color: var(--color-white);
}

.why-cta .button--secondary:hover {
  border-color: var(--color-blue);
}

.why-cta__orbit {
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

.why-cta__orbit span {
  position: absolute;
  top: 48%;
  left: 0;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-blue);
}

.why-cta__orbit span:nth-child(2) {
  top: 12%;
  left: 76%;
  background: var(--color-teal);
}

.why-cta__orbit span:nth-child(3) {
  top: 88%;
  left: 90%;
  background: var(--color-orange);
}

@media (max-width: 980px) {
  .why-hero__inner {
    min-height: auto;
    grid-template-columns: minmax(0, 1fr) minmax(280px, 0.82fr);
  }

  .why-hero h1 {
    font-size: clamp(2.9rem, 6.1vw, 4.4rem);
  }

  .why-problem-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .why-problem-item {
    min-height: 210px;
    padding-left: 1.2rem;
  }

  .why-problem-item:first-child {
    padding-left: 0;
  }

  .why-problem-item:nth-child(3) {
    padding-left: 0;
  }

  .why-problem-item:nth-child(3),
  .why-problem-item:nth-child(4) {
    border-top: 1px solid var(--color-border);
  }

  .why-problem-item:nth-child(4) {
    border-left: 1px solid var(--color-border);
  }

  .why-viewpoint__intro {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .why-viewpoint__manifesto {
    padding-left: 1rem;
    border-left: 2px solid var(--color-teal);
  }

  .why-progression {
    flex-wrap: wrap;
    justify-content: flex-start;
    row-gap: 1rem;
  }

  .why-progression__step {
    flex: 1 0 28%;
  }

  .why-progression__step:nth-child(3) .icon {
    display: none;
  }

  .why-framework-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    row-gap: 2.2rem;
  }

  .why-industries__inner {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

@media (max-width: 700px) {
  .why-hero__inner {
    grid-template-columns: 1fr;
    gap: 0;
    padding-block: 4.5rem 5.5rem;
  }

  .why-hero h1 {
    font-size: clamp(3rem, 10.5vw, 4.4rem);
  }

  .why-hero__description {
    font-size: 1rem;
  }

  .why-alignment {
    width: min(100%, 450px);
    margin: 1rem auto -1.2rem;
    justify-self: center;
  }

  .why-hero__philosophy {
    right: var(--container-gutter);
    bottom: 1.5rem;
    left: var(--container-gutter);
    max-width: none;
    font-size: 0.73rem;
    text-align: left;
  }

  .why-section-heading,
  .why-trust__intro {
    align-items: start;
    flex-direction: column;
  }

  .why-section-aside {
    max-width: 480px;
  }

  .why-problem-item {
    min-height: 220px;
  }

  .why-principle-list {
    grid-template-columns: 1fr;
  }

  .why-principle,
  .why-principle + .why-principle {
    border-left: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
    padding: 1.2rem 0;
  }

  .why-principle:first-child {
    padding-top: 1.3rem;
  }

  .why-principle h3 {
    margin-top: 0.55rem;
  }

  .why-progression {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }

  .why-progression__step {
    flex: initial;
    font-size: 0.75rem;
  }

  .why-progression__step .icon {
    display: none;
  }

  .why-compare-table {
    border-radius: var(--radius-sm);
  }

  .why-compare-row--head {
    display: none;
  }

  .why-compare-row {
    grid-template-columns: 1fr 1fr;
  }

  .why-compare-row__label {
    grid-column: 1 / -1;
    padding-bottom: 0.6rem !important;
    background: #f8fafc;
  }

  .why-compare-row__value {
    position: relative;
    display: block !important;
    padding: 0.8rem 0.9rem 1rem !important;
    font-size: 0.8rem !important;
  }

  .why-compare-row__value--muted::before,
  .why-compare-row__value--connected::before {
    display: block;
    margin-bottom: 0.45rem;
    color: #718497;
    font-size: 0.64rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  .why-compare-row__value--muted::before {
    content: 'Disconnected';
  }

  .why-compare-row__value--connected::before {
    content: 'ORBIRIS approach';
  }

  .why-capabilities__note {
    margin-top: 0.2rem;
  }

  .why-capability {
    min-height: 100px;
    grid-template-columns: 27px 40px minmax(0, 1fr) 36px;
    gap: 0.7rem;
  }

  .why-capability-list::before {
    left: 47px;
  }

  .capability-mark {
    width: 36px;
    height: 36px;
  }

  .why-capability__content small {
    font-size: 0.8rem;
  }

  .why-capability__link {
    width: 34px;
    height: 34px;
  }

  .why-section-heading--split > .button {
    margin-top: 0.1rem;
  }

  .why-framework-list {
    grid-template-columns: 1fr;
    gap: 1.7rem;
    margin-top: 2.7rem;
  }

  .why-framework-step__line {
    margin-top: 0.7rem;
  }

  .why-framework-step h3 {
    margin-top: 0.9rem;
  }

  .why-industry-list {
    grid-template-columns: 1fr;
  }

  .why-trust__rule {
    width: 100%;
    margin-bottom: 0;
  }

  .why-trust-list {
    grid-template-columns: 1fr;
    margin-top: 2rem;
  }

  .why-trust-item,
  .why-trust-item + .why-trust-item {
    border-left: 0;
    border-bottom: 1px solid #ccd7df;
    padding: 1.2rem 0;
  }

  .why-trust-item h3 {
    margin-top: 0.55rem;
  }

  .why-cta h2 {
    font-size: clamp(2.5rem, 9vw, 3.5rem);
  }

  .why-cta__actions {
    align-items: stretch;
    flex-direction: column;
  }

  .why-cta__actions .button {
    width: 100%;
  }
}

@media (max-width: 390px) {
  .why-hero h1 {
    font-size: 2.8rem;
  }

  .why-hero__actions {
    align-items: stretch;
    flex-direction: column;
  }

  .why-hero__actions .button {
    width: 100%;
  }

  .why-compare-row {
    grid-template-columns: 1fr 1fr;
  }

  .why-compare-row__value {
    padding-inline: 0.65rem !important;
    font-size: 0.74rem !important;
  }

  .why-progression__step {
    gap: 0.4rem;
    font-size: 0.7rem;
  }

  .why-cta h2 {
    font-size: 2.3rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .why-page *,
  .why-page *::before,
  .why-page *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
