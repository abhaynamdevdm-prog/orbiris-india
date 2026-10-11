<script setup>
import Container from '../components/global/Container.vue'
import Button from '../components/global/Button.vue'
import SectionHeading from '../components/global/SectionHeading.vue'
import Badge from '../components/global/Badge.vue'
import Icon from '../components/global/Icon.vue'
import HeroOrbit from '../components/home/HeroOrbit.vue'
import ProblemDiagnostic from '../components/home/ProblemDiagnostic.vue'
import GrowthOrbit from '../components/home/GrowthOrbit.vue'

const solutions = [
  {
    number: '01',
    title: 'Strategy & Business Intelligence',
    description: 'Find the signal in your business, understand the opportunity, and set a direction grounded in evidence.',
    to: '/solutions/strategy',
    tag: 'Find direction',
  },
  {
    number: '02',
    title: 'Brand & Digital Experience',
    description: 'Make your value unmistakable across the moments where people discover, consider, and choose you.',
    to: '/solutions/brand-digital-experience',
    tag: 'Shape perception',
  },
  {
    number: '03',
    title: 'Performance Growth',
    description: 'Connect channels, content, and measurement around sustainable demand—not activity for its own sake.',
    to: '/solutions/performance-growth',
    tag: 'Build demand',
  },
  {
    number: '04',
    title: 'Technology & Web Solutions',
    description: 'Create useful, resilient digital foundations that help your business move with less friction.',
    to: '/solutions/technology',
    tag: 'Build capability',
  },
  {
    number: '05',
    title: 'Automation & Retention',
    description: 'Reduce repetitive work and design better, more consistent experiences across the customer journey.',
    to: '/solutions/automation',
    tag: 'Keep momentum',
  },
]

const industries = [
  { title: 'Healthcare & HealthTech', to: '/industries/healthcare', marker: '01' },
  { title: 'Manufacturing', to: '/industries/manufacturing', marker: '02' },
  { title: 'Retail & D2C', to: '/industries/retail', marker: '03' },
  { title: 'Real Estate', to: '/industries/real-estate', marker: '04' },
  { title: 'Education', to: '/industries/education', marker: '05' },
  { title: 'Professional Services', to: '/industries/professional-services', marker: '06' },
  { title: 'Technology', to: '/industries/technology', marker: '07' },
]

const workTeasers = [
  { type: 'Strategy & intelligence', title: 'A clearer view of the opportunity', shape: 'work-shape--rings' },
  { type: 'Digital experience', title: 'Making complexity easier to navigate', shape: 'work-shape--lines' },
  { type: 'Growth systems', title: 'Connecting the parts that move business forward', shape: 'work-shape--nodes' },
]

const principles = [
  { number: '01', title: 'Business-first thinking', copy: 'We start with the business challenge and work backwards to the right digital response.' },
  { number: '02', title: 'A 360° perspective', copy: 'We look across customer, brand, operations, data, and technology—not just one channel.' },
  { number: '03', title: 'Strategy + execution', copy: 'Clear thinking matters most when it translates into work that can be built, launched, and improved.' },
  { number: '04', title: 'Data and intelligence', copy: 'We bring evidence into decisions, then keep learning as the work meets the real world.' },
  { number: '05', title: 'Transparency', copy: 'Shared context, open communication, and visible progress keep good work moving.' },
  { number: '06', title: 'Long-term growth', copy: 'We focus on the foundations and feedback loops that compound—not just short-term activity.' },
]

const insights = [
  { number: '01', title: "Why Businesses Don't Always Have a Marketing Problem", category: 'Business perspective' },
  { number: '02', title: 'Brand Awareness Is an Investment, Not an Expense', category: 'Brand & growth' },
  { number: '03', title: 'Why Digital Growth Requires More Than Running Ads', category: 'Digital strategy' },
]

const stages = ['Understand', 'Audit', 'Diagnose', 'Strategize', 'Build', 'Measure', 'Optimize', 'Scale']
</script>

<template>
  <div class="home-page">
    <section class="home-hero">
      <Container class="home-hero__inner">
        <div class="home-hero__copy">
          <p class="home-eyebrow"><span></span> STRATEGY <i>•</i> DIGITAL <i>•</i> TECHNOLOGY <i>•</i> GROWTH</p>
          <h1>Turning Business Challenges into <span>Digital Growth.</span></h1>
          <p class="home-hero__description">
            ORBIRIS helps businesses identify what is holding them back, build the right digital systems, and turn strategy into measurable growth.
          </p>
          <div class="home-hero__actions">
            <Button to="/contact">Start a Conversation <Icon name="arrow" :size="17" /></Button>
            <Button to="/solutions" variant="secondary" class="home-button--outline">Explore Our Solutions</Button>
          </div>
          <div class="home-hero__footnote">
            <span class="home-hero__footnote-line"></span>
            <span>Business clarity, connected to meaningful action.</span>
          </div>
        </div>
        <HeroOrbit class="home-hero__visual" />
        <div class="home-hero__edge" aria-hidden="true"><span>01</span><span>THINK IN SYSTEMS</span></div>
      </Container>
      <div class="home-hero__grid" aria-hidden="true"></div>
    </section>

    <section class="home-problem home-section">
      <Container>
        <div class="home-problem__intro">
          <SectionHeading
            eyebrow="The real challenge"
            title="Most businesses don't have a marketing problem. They have a system problem."
          />
          <p class="home-problem__lead">
            When the parts of a business work in isolation, effort gets lost between them. Growth becomes harder to understand—and harder to sustain.
          </p>
        </div>
        <div class="home-problem__body">
          <div class="home-problem__text">
            <p>Unclear positioning. Disconnected marketing. Digital experiences that create friction. Data in silos. Processes that rely on too much manual effort.</p>
            <p>Each issue can look separate. Together, they form a bottleneck between the potential of a business and the growth it can actually achieve.</p>
            <RouterLink to="/solutions" class="home-text-link">See how we connect the system <Icon name="arrow" :size="17" /></RouterLink>
          </div>
          <ProblemDiagnostic />
        </div>
      </Container>
    </section>

    <section class="home-solutions home-section">
      <Container>
        <div class="home-section-head home-section-head--split">
          <SectionHeading
            eyebrow="Connected capabilities"
            title="The right levers. Working together."
            description="We bring strategy, brand, technology, and growth into one connected system—shaped around the challenge in front of you."
          />
          <RouterLink to="/solutions" class="home-text-link">Explore all solutions <Icon name="arrow" :size="17" /></RouterLink>
        </div>
        <div class="home-solution-list">
          <RouterLink v-for="solution in solutions" :key="solution.to" :to="solution.to" class="home-solution">
            <span class="home-solution__number">{{ solution.number }}</span>
            <div class="home-solution__main">
              <h3>{{ solution.title }}</h3>
              <p>{{ solution.description }}</p>
            </div>
            <span class="home-solution__tag">{{ solution.tag }}</span>
            <span class="home-solution__arrow" aria-hidden="true"><Icon name="arrow" :size="20" /></span>
          </RouterLink>
        </div>
      </Container>
    </section>

    <section class="home-growth home-section">
      <Container>
        <div class="home-growth__heading">
          <SectionHeading
            eyebrow="The ORBIRIS Growth System"
            title="Progress isn't a straight line. It's a system."
            description="Every stage creates insight for the next. Learning loops back into action, making growth more intentional over time."
          />
          <Badge tone="teal">A continuous cycle</Badge>
        </div>
        <GrowthOrbit />
      </Container>
      <div class="home-growth__grid" aria-hidden="true"></div>
    </section>

    <section class="home-method home-section">
      <Container>
        <div class="home-section-head home-section-head--split">
          <SectionHeading
            eyebrow="How we work"
            title="Make the complex clear. Then make progress."
            description="We move from understanding to action in deliberate stages, staying close to the business question at every step."
          />
          <Button to="/how-we-work" variant="secondary">See How We Work <Icon name="arrow" :size="17" /></Button>
        </div>
        <ol class="home-stage-list">
          <li v-for="(stage, index) in stages" :key="stage" class="home-stage">
            <span class="home-stage__marker">{{ String(index + 1).padStart(2, '0') }}</span>
            <span class="home-stage__label">{{ stage }}</span>
            <span v-if="index < stages.length - 1" class="home-stage__connector" aria-hidden="true"></span>
          </li>
        </ol>
        <div class="home-method__note">
          <span class="home-method__note-dot"></span>
          <p>Built to learn, adapt, and keep moving—not to force every business into the same playbook.</p>
        </div>
      </Container>
    </section>

    <section class="home-industries home-section">
      <Container>
        <div class="home-section-head home-section-head--split">
          <SectionHeading
            eyebrow="Industry perspective"
            title="Context changes everything."
            description="Every sector has its own pressures, customers, and pace of change. Effective digital growth starts with understanding that context."
          />
          <Button to="/industries" variant="secondary">Explore Industries <Icon name="arrow" :size="17" /></Button>
        </div>
        <nav class="home-industry-list" aria-label="Industries">
          <RouterLink v-for="industry in industries" :key="industry.to" :to="industry.to" class="home-industry">
            <span class="home-industry__number">{{ industry.marker }}</span>
            <span class="home-industry__title">{{ industry.title }}</span>
            <Icon name="arrow" :size="18" />
          </RouterLink>
        </nav>
      </Container>
    </section>

    <section class="home-work home-section">
      <Container>
        <div class="home-section-head home-section-head--split">
          <SectionHeading
            eyebrow="Selected work"
            title="Good work deserves a thoughtful story."
            description="We are preparing a considered collection of the challenges, decisions, and systems behind our work."
          />
          <Button to="/work" variant="secondary">View Work <Icon name="arrow" :size="17" /></Button>
        </div>
        <div class="home-work-grid">
          <article v-for="item in workTeasers" :key="item.title" class="home-work-item">
            <div class="home-work-art" :class="item.shape" aria-hidden="true">
              <span class="home-work-art__core"></span>
              <span class="home-work-art__orbit"></span>
              <span class="home-work-art__node"></span>
            </div>
            <div class="home-work-item__meta">
              <span>{{ item.type }}</span>
              <Badge>Coming Soon</Badge>
            </div>
            <h3>{{ item.title }}</h3>
          </article>
        </div>
      </Container>
    </section>

    <section class="home-why home-section">
      <Container class="home-why__layout">
        <div class="home-why__intro">
          <SectionHeading
            eyebrow="Why ORBIRIS"
            title="A partner for the whole picture."
            description="We bring the perspective to see how the pieces connect—and the discipline to help move them forward."
          />
          <Button to="/why-us" variant="secondary">Why ORBIRIS <Icon name="arrow" :size="17" /></Button>
        </div>
        <ol class="home-principles">
          <li v-for="principle in principles" :key="principle.number" class="home-principle">
            <span class="home-principle__number">{{ principle.number }}</span>
            <h3>{{ principle.title }}</h3>
            <p>{{ principle.copy }}</p>
          </li>
        </ol>
      </Container>
    </section>

    <section class="home-insights home-section">
      <Container>
        <div class="home-section-head home-section-head--split">
          <SectionHeading
            eyebrow="Ideas for what's next"
            title="A few questions worth thinking about."
            description="Perspectives we are developing on the decisions and systems behind meaningful digital growth."
          />
          <Button to="/insights" variant="secondary">Visit Insights <Icon name="arrow" :size="17" /></Button>
        </div>
        <div class="home-insight-list">
          <article v-for="insight in insights" :key="insight.number" class="home-insight">
            <span class="home-insight__number">{{ insight.number }}</span>
            <div class="home-insight__body">
              <p class="home-insight__category">{{ insight.category }} <span>·</span> Editorial preview</p>
              <h3>{{ insight.title }}</h3>
              <p class="home-insight__status">In development</p>
            </div>
            <RouterLink to="/insights" class="home-insight__link" :aria-label="`Explore insights: ${insight.title}`">
              <Icon name="arrow" :size="20" />
            </RouterLink>
          </article>
        </div>
      </Container>
    </section>

    <section class="home-cta home-section">
      <Container class="home-cta__inner">
        <div class="home-cta__orbit" aria-hidden="true"><span></span><span></span><span></span></div>
        <p class="home-eyebrow"><span></span> START WITH THE CHALLENGE</p>
        <h2>Have a business challenge<br />worth solving?</h2>
        <p class="home-cta__description">Tell us where your business is today, where you want to go, and what is standing in the way.</p>
        <Button to="/contact">Start a Conversation <Icon name="arrow" :size="17" /></Button>
        <p class="home-cta__reassurance">No hard pitch. Just a conversation about the problem.</p>
      </Container>
    </section>
  </div>
</template>

<style>
.home-page {
  overflow: clip;
}

.home-section {
  position: relative;
  padding-block: clamp(4.5rem, 9vw, 8rem);
}

.home-hero {
  position: relative;
  overflow: hidden;
  background: var(--color-navy);
  color: var(--color-white);
}

.home-hero__inner {
  position: relative;
  display: grid;
  min-height: min(760px, calc(100svh - 84px));
  grid-template-columns: minmax(0, 1.03fr) minmax(380px, 0.97fr);
  align-items: center;
  padding-block: clamp(5rem, 9vw, 8rem);
}

.home-hero__copy {
  position: relative;
  z-index: 2;
  max-width: 690px;
}

.home-eyebrow {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  margin: 0 0 1.5rem;
  color: #b9d4e7;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
}

.home-eyebrow > span,
.home-method__note-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--color-teal);
  box-shadow: 0 0 14px rgba(0, 209, 167, 0.65);
}

.home-eyebrow i {
  color: var(--color-blue);
  font-style: normal;
}

.home-hero h1 {
  max-width: 760px;
  margin: 0;
  color: var(--color-white);
  font-family: var(--font-display);
  font-size: clamp(3.15rem, 6vw, 5.7rem);
  font-weight: 600;
  letter-spacing: -0.065em;
  line-height: 1.02;
}

.home-hero h1 span {
  color: var(--color-blue);
}

.home-hero__description {
  max-width: 590px;
  margin: 1.6rem 0 0;
  color: #c1cede;
  font-size: clamp(1rem, 1.35vw, 1.13rem);
  line-height: 1.8;
}

.home-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  margin-top: 2rem;
}

.home-hero .home-button--outline {
  border-color: rgba(255, 255, 255, 0.32);
  background: transparent;
  color: var(--color-white);
}

.home-hero .home-button--outline:hover {
  border-color: var(--color-blue);
  background: rgba(255, 255, 255, 0.06);
}

.home-hero__footnote {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 3rem;
  color: #91a6bb;
  font-size: 0.8rem;
}

.home-hero__footnote-line {
  width: 35px;
  height: 1px;
  background: var(--color-teal);
}

.home-hero__visual {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 600px;
  justify-self: end;
}

.home-hero__edge {
  position: absolute;
  right: max(var(--container-gutter), calc((100vw - var(--container-width)) / 2));
  bottom: 2rem;
  display: flex;
  gap: 1rem;
  color: #7c91a8;
  font-size: 0.65rem;
  letter-spacing: 0.14em;
}

.home-hero__grid,
.home-growth__grid {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image: linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: linear-gradient(90deg, transparent 10%, #000 85%);
}

.home-problem {
  background: var(--color-white);
}

.home-problem__intro {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  align-items: end;
  gap: clamp(2rem, 6vw, 6rem);
}

.home-problem__intro .section-heading__title {
  max-width: 720px;
}

.home-problem__lead {
  max-width: 440px;
  margin: 0 0 0.3rem;
  color: var(--color-muted);
  font-size: 1.08rem;
  line-height: 1.8;
}

.home-problem__body {
  display: grid;
  grid-template-columns: minmax(230px, 0.72fr) minmax(0, 1.28fr);
  align-items: center;
  gap: clamp(2.5rem, 7vw, 7rem);
  margin-top: clamp(3.5rem, 8vw, 6rem);
}

.home-problem__text {
  max-width: 400px;
  color: var(--color-muted);
  font-size: 0.98rem;
  line-height: 1.8;
}

.home-problem__text p + p {
  margin-top: 1.1rem;
}

.home-text-link {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  margin-top: 1.5rem;
  color: var(--color-navy);
  font-size: 0.92rem;
  font-weight: 700;
  text-decoration: none;
}

.home-text-link:hover {
  color: var(--color-link);
}

.home-text-link .icon,
.home-solution__arrow,
.home-industry > .icon,
.home-insight__link .icon {
  transition: transform 180ms ease;
}

.home-text-link:hover .icon,
.home-solution:hover .home-solution__arrow,
.home-industry:hover > .icon,
.home-insight__link:hover .icon {
  transform: translateX(4px);
}

.home-solutions {
  background: var(--color-background);
}

.home-section-head--split {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 2rem;
}

.home-section-head--split > .button,
.home-section-head--split > .home-text-link {
  flex: 0 0 auto;
  margin-bottom: 0.2rem;
}

.home-section-head .section-heading__description {
  max-width: 620px;
}

.home-solution-list {
  margin-top: clamp(2.5rem, 5vw, 4.5rem);
  border-top: 1px solid var(--color-border);
}

.home-solution {
  display: grid;
  grid-template-columns: 60px minmax(0, 1fr) minmax(120px, 0.3fr) 36px;
  align-items: center;
  gap: clamp(1rem, 2.5vw, 2.25rem);
  border-bottom: 1px solid var(--color-border);
  padding: 1.65rem 0;
  text-decoration: none;
  transition: padding 180ms ease;
}

.home-solution:hover {
  padding-inline: 0.6rem;
}

.home-solution__number,
.home-insight__number {
  color: #8393a6;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.home-solution__main h3,
.home-work-item h3,
.home-insight h3 {
  margin: 0;
  color: var(--color-navy);
  font-family: var(--font-display);
  font-size: clamp(1.2rem, 2.3vw, 1.7rem);
  font-weight: 650;
  letter-spacing: -0.035em;
  line-height: 1.25;
}

.home-solution__main p {
  max-width: 660px;
  margin: 0.55rem 0 0;
  color: var(--color-muted);
  font-size: 0.9rem;
  line-height: 1.65;
}

.home-solution__tag {
  color: #63788d;
  font-size: 0.78rem;
  text-align: right;
}

.home-solution__arrow {
  display: grid;
  width: 36px;
  height: 36px;
  place-items: center;
  border: 1px solid var(--color-border);
  border-radius: 50%;
  color: var(--color-navy);
}

.home-solution:hover .home-solution__arrow {
  border-color: var(--color-blue);
}

.home-growth {
  overflow: hidden;
  background: var(--color-navy);
  color: var(--color-white);
}

.home-growth__heading {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 2rem;
}

.home-growth .section-heading__title {
  color: var(--color-white);
}

.home-growth .section-heading__description {
  max-width: 600px;
  color: #b6c5d5;
}

.home-growth .section-heading__eyebrow {
  border-color: rgba(0, 180, 255, 0.35);
  background: rgba(0, 180, 255, 0.12);
  color: #b8eaff;
}

.home-growth .badge {
  flex: 0 0 auto;
  border-color: rgba(0, 209, 167, 0.32);
  background: rgba(0, 209, 167, 0.1);
  color: #b4ffec;
}

.home-growth__grid {
  mask-image: radial-gradient(ellipse at 50% 65%, #000 0, transparent 68%);
}

.home-method {
  background: var(--color-white);
}

.home-stage-list {
  display: grid;
  grid-template-columns: repeat(8, minmax(0, 1fr));
  gap: 0;
  margin: clamp(3rem, 7vw, 5rem) 0 0;
  padding: 0;
  list-style: none;
}

.home-stage {
  position: relative;
  display: grid;
  justify-items: start;
  gap: 1rem;
}

.home-stage__marker {
  position: relative;
  z-index: 1;
  display: grid;
  width: 46px;
  height: 46px;
  place-items: center;
  border: 1px solid #b8d8e9;
  border-radius: 50%;
  background: var(--color-white);
  color: var(--color-navy);
  font-size: 0.77rem;
  font-weight: 700;
}

.home-stage:nth-child(odd) .home-stage__marker {
  border-color: var(--color-blue);
}

.home-stage__connector {
  position: absolute;
  top: 22px;
  right: 0;
  left: 46px;
  height: 1px;
  background: linear-gradient(90deg, #a6c5d7, #dce3ea);
}

.home-stage__label {
  color: var(--color-text);
  font-size: 0.86rem;
  font-weight: 700;
}

.home-method__note {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-top: 3.5rem;
  border-top: 1px solid var(--color-border);
  padding-top: 1.3rem;
  color: var(--color-muted);
  font-size: 0.86rem;
}

.home-industries {
  background: #f0f4f8;
}

.home-industry-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: clamp(1.5rem, 5vw, 5rem);
  margin-top: 3rem;
}

.home-industry {
  display: grid;
  min-height: 74px;
  grid-template-columns: 42px minmax(0, 1fr) 24px;
  align-items: center;
  gap: 0.75rem;
  border-bottom: 1px solid #d4dee8;
  color: var(--color-navy);
  text-decoration: none;
}

.home-industry__number {
  color: #8293a6;
  font-size: 0.72rem;
  font-weight: 700;
}

.home-industry__title {
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 650;
  letter-spacing: -0.02em;
}

.home-industry > .icon {
  color: #5c768e;
}

.home-industry:hover .home-industry__title,
.home-industry:hover > .icon {
  color: var(--color-link);
}

.home-work {
  background: var(--color-white);
}

.home-work-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.25rem;
  margin-top: 3.25rem;
}

.home-work-item {
  min-width: 0;
}

.home-work-art {
  position: relative;
  display: grid;
  aspect-ratio: 1.38;
  overflow: hidden;
  place-items: center;
  background-color: #edf3f7;
  background-image: linear-gradient(rgba(11, 31, 59, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(11, 31, 59, 0.04) 1px, transparent 1px);
  background-size: 28px 28px;
}

.home-work-art__core {
  z-index: 1;
  width: 17%;
  aspect-ratio: 1;
  border: 1px solid rgba(11, 31, 59, 0.5);
  border-radius: 50%;
  background: var(--color-blue);
  box-shadow: 0 0 55px rgba(0, 180, 255, 0.38);
}

.home-work-art__orbit {
  position: absolute;
  width: 62%;
  aspect-ratio: 1;
  border: 1px solid rgba(11, 31, 59, 0.25);
  border-radius: 50%;
  transform: scaleY(0.43) rotate(-22deg);
}

.home-work-art__node {
  position: absolute;
  width: 9px;
  height: 9px;
  margin: -24% 0 0 27%;
  border-radius: 50%;
  background: var(--color-teal);
}

.work-shape--lines .home-work-art__orbit {
  width: 75%;
  border-radius: 0;
  border-width: 1px 0;
  transform: rotate(-31deg);
}

.work-shape--lines .home-work-art__core {
  width: 28%;
  height: 1px;
  border: 0;
  border-radius: 0;
  background: var(--color-navy);
  box-shadow: 0 9px 0 rgba(11, 31, 59, 0.25), 0 -9px 0 rgba(11, 31, 59, 0.25);
}

.work-shape--nodes .home-work-art__orbit {
  width: 48%;
  border-style: dashed;
  transform: rotate(32deg);
}

.work-shape--nodes .home-work-art__node {
  width: 12px;
  height: 12px;
  margin: 0 0 0 34%;
  box-shadow: 0 0 0 6px rgba(0, 209, 167, 0.13);
}

.home-work-item__meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin: 1rem 0 0.65rem;
  color: var(--color-muted);
  font-size: 0.74rem;
}

.home-work-item .badge {
  font-size: 0.62rem;
  letter-spacing: 0.06em;
}

.home-work-item h3 {
  font-size: clamp(1.1rem, 1.7vw, 1.35rem);
}

.home-why {
  background: var(--color-background);
}

.home-why__layout {
  display: grid;
  grid-template-columns: minmax(250px, 0.8fr) minmax(0, 1.2fr);
  align-items: start;
  gap: clamp(3rem, 9vw, 9rem);
}

.home-why__intro .button {
  margin-top: 1.7rem;
}

.home-principles {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin: 0;
  padding: 0;
  list-style: none;
}

.home-principle {
  min-height: 175px;
  border-top: 1px solid var(--color-border);
  padding: 1.2rem 1rem 1.3rem 0;
}

.home-principle:nth-child(odd) {
  margin-right: 1.2rem;
}

.home-principle__number {
  color: #7a8ca0;
  font-size: 0.7rem;
  font-weight: 700;
}

.home-principle h3 {
  margin: 1rem 0 0.45rem;
  color: var(--color-navy);
  font-family: var(--font-display);
  font-size: 1.05rem;
  letter-spacing: -0.025em;
}

.home-principle p {
  max-width: 300px;
  margin: 0;
  color: var(--color-muted);
  font-size: 0.84rem;
  line-height: 1.65;
}

.home-insights {
  background: var(--color-white);
}

.home-insight-list {
  margin-top: 3rem;
  border-top: 1px solid var(--color-border);
}

.home-insight {
  display: grid;
  grid-template-columns: 58px minmax(0, 1fr) 44px;
  align-items: center;
  gap: 1.5rem;
  border-bottom: 1px solid var(--color-border);
  padding-block: 1.6rem;
}

.home-insight__category {
  margin: 0 0 0.55rem;
  color: #697d91;
  font-size: 0.75rem;
}

.home-insight__category span {
  padding-inline: 0.25rem;
  color: var(--color-teal);
}

.home-insight h3 {
  max-width: 740px;
  font-size: clamp(1.15rem, 2.2vw, 1.6rem);
}

.home-insight__status {
  margin: 0.5rem 0 0;
  color: var(--color-muted);
  font-size: 0.76rem;
  font-style: italic;
}

.home-insight__link {
  display: grid;
  width: 42px;
  height: 42px;
  place-items: center;
  border: 1px solid var(--color-border);
  border-radius: 50%;
  color: var(--color-navy);
}

.home-insight__link:hover {
  border-color: var(--color-blue);
}

.home-cta {
  position: relative;
  overflow: hidden;
  background: #eaf5fa;
  text-align: center;
}

.home-cta__inner {
  position: relative;
  z-index: 1;
}

.home-cta .home-eyebrow {
  justify-content: center;
  color: #526e83;
}

.home-cta h2 {
  margin: 0;
  color: var(--color-navy);
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 5.4vw, 4.6rem);
  font-weight: 650;
  letter-spacing: -0.06em;
  line-height: 1.05;
}

.home-cta__description {
  max-width: 590px;
  margin: 1.3rem auto 1.8rem;
  color: var(--color-muted);
  font-size: 1.05rem;
  line-height: 1.7;
}

.home-cta__reassurance {
  margin: 1rem 0 0;
  color: #667b8e;
  font-size: 0.82rem;
}

.home-cta__orbit {
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 50%;
  width: min(78vw, 760px);
  aspect-ratio: 2.2;
  border: 1px solid rgba(0, 180, 255, 0.2);
  border-radius: 50%;
  transform: translate(-50%, -50%) rotate(-17deg);
}

.home-cta__orbit span {
  position: absolute;
  top: 50%;
  left: 0;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-blue);
}

.home-cta__orbit span:nth-child(2) {
  top: 12%;
  left: 76%;
  background: var(--color-teal);
}

.home-cta__orbit span:nth-child(3) {
  top: 86%;
  left: 88%;
  background: var(--color-orange);
}

@media (min-width: 1500px) {
  .home-hero__inner {
    min-height: 780px;
  }
}

@media (max-width: 980px) {
  .home-hero__inner {
    min-height: auto;
    grid-template-columns: minmax(0, 1fr) minmax(280px, 0.8fr);
  }

  .home-hero h1 {
    font-size: clamp(3rem, 6.8vw, 4.6rem);
  }

  .home-problem__intro {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .home-problem__lead {
    max-width: 680px;
  }

  .home-stage-list {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    row-gap: 2rem;
  }

  .home-stage:nth-child(4) .home-stage__connector {
    display: none;
  }

  .home-why__layout {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

@media (max-width: 700px) {
  .home-hero__inner {
    grid-template-columns: 1fr;
    padding-block: 5rem 4rem;
  }

  .home-hero__copy {
    max-width: 620px;
  }

  .home-hero h1 {
    max-width: 620px;
    font-size: clamp(3.15rem, 11vw, 4.5rem);
  }

  .home-hero__visual {
    width: min(100%, 470px);
    margin: 1rem auto -1rem;
    justify-self: center;
  }

  .home-hero__footnote {
    margin-top: 2rem;
  }

  .home-hero__edge {
    display: none;
  }

  .home-problem__body {
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-top: 2.5rem;
  }

  .home-problem__text {
    max-width: 600px;
  }

  .home-section-head--split,
  .home-growth__heading {
    align-items: start;
    flex-direction: column;
  }

  .home-section-head--split > .button,
  .home-section-head--split > .home-text-link {
    margin-top: 0.25rem;
  }

  .home-solution {
    grid-template-columns: 34px minmax(0, 1fr) 34px;
    gap: 0.75rem;
  }

  .home-solution__tag {
    display: none;
  }

  .home-solution__main h3 {
    font-size: 1.18rem;
  }

  .home-solution__main p {
    font-size: 0.83rem;
  }

  .home-stage-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    row-gap: 1.6rem;
    margin-top: 2.5rem;
  }

  .home-stage:nth-child(even) .home-stage__connector {
    display: none;
  }

  .home-stage:nth-child(4) .home-stage__connector {
    display: block;
  }

  .home-stage:nth-child(8) .home-stage__connector {
    display: none;
  }

  .home-industry-list {
    grid-template-columns: 1fr;
    margin-top: 2rem;
  }

  .home-work-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .home-work-art {
    aspect-ratio: 1.65;
  }

  .home-principles {
    grid-template-columns: 1fr;
  }

  .home-principle {
    min-height: 0;
    padding-block: 1.1rem 1.3rem;
  }

  .home-principle:nth-child(odd) {
    margin-right: 0;
  }

  .home-principle h3 {
    margin-top: 0.55rem;
  }

  .home-insight {
    grid-template-columns: 32px minmax(0, 1fr) 40px;
    gap: 0.65rem;
    padding-block: 1.25rem;
  }

  .home-insight__link {
    width: 36px;
    height: 36px;
  }

  .home-insight h3 {
    font-size: 1.12rem;
  }
}

@media (max-width: 380px) {
  .home-eyebrow {
    gap: 0.32rem;
    font-size: 0.59rem;
    letter-spacing: 0.1em;
  }

  .home-hero h1 {
    font-size: 2.85rem;
  }

  .home-hero__actions {
    align-items: stretch;
    flex-direction: column;
  }

  .home-hero__actions .button {
    width: 100%;
  }

  .home-solution {
    grid-template-columns: 27px minmax(0, 1fr) 30px;
  }

  .home-cta h2 {
    font-size: 2.35rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .home-page *,
  .home-page *::before,
  .home-page *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
