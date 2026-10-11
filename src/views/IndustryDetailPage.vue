<script setup>
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import Container from '../components/global/Container.vue'
import Button from '../components/global/Button.vue'
import SectionHeading from '../components/global/SectionHeading.vue'
import Icon from '../components/global/Icon.vue'
import { industryDetails } from '../data/industryDetails.js'

const props = defineProps({
  industryKey: { type: String, required: true },
})

const industry = computed(() => industryDetails[props.industryKey])
const openQuestion = ref(null)

function toggleQuestion(index) {
  openQuestion.value = openQuestion.value === index ? null : index
}

function onQuestionKeydown(event, index) {
  if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return

  event.preventDefault()
  const buttons = [...event.currentTarget.closest('.industry-faq__list').querySelectorAll('.industry-faq__trigger')]
  const nextIndex = event.key === 'Home'
    ? 0
    : event.key === 'End'
      ? buttons.length - 1
      : (index + (event.key === 'ArrowDown' ? 1 : -1) + buttons.length) % buttons.length
  buttons[nextIndex]?.focus()
}
</script>

<template>
  <article v-if="industry" class="industry-detail" :class="`industry-detail--${industry.variant}`">
    <section class="industry-hero">
      <Container class="industry-hero__layout">
        <div class="industry-hero__copy">
          <div class="industry-breadcrumb">
            <RouterLink to="/industries">Industries</RouterLink>
            <Icon name="chevron" :size="14" />
            <span>{{ industry.name }}</span>
          </div>
          <p class="industry-eyebrow"><span></span>{{ industry.eyebrow }}</p>
          <h1>{{ industry.heroTitle }}</h1>
          <p class="industry-hero__description">{{ industry.heroDescription }}</p>
          <div class="industry-hero__actions">
            <Button to="/contact">Discuss Your Business <Icon name="arrow" :size="16" /></Button>
            <Button to="/industries" variant="outline">All Industries</Button>
          </div>
          <p class="industry-hero__tagline">Turning Business Challenges into Digital Growth.</p>
        </div>

        <div class="industry-journey" role="img" :aria-label="`${industry.name} journey: ${industry.visual.join(', ')}`">
          <div class="industry-journey__heading">
            <span>THE {{ industry.name.toUpperCase() }} JOURNEY</span>
            <span>CONTEXT BEFORE SOLUTIONS</span>
          </div>
          <div class="industry-journey__flow">
            <svg viewBox="0 0 600 160" preserveAspectRatio="none" aria-hidden="true">
              <path d="M72 80h456" />
              <circle cx="300" cy="80" r="43" />
            </svg>
            <div v-for="(step, index) in industry.visual" :key="step" class="industry-journey__step">
              <span class="industry-journey__number">0{{ index + 1 }}</span>
              <strong>{{ step }}</strong>
              <small>{{ index === 0 ? 'Understand' : index === 1 ? 'Clarify' : 'Connect' }}</small>
            </div>
          </div>
          <div class="industry-journey__foot">
            <span>Audience needs</span><i></i><span>Business priorities</span><i></i><span>Agreed next step</span>
          </div>
        </div>
      </Container>
      <div class="industry-hero__grid" aria-hidden="true"></div>
    </section>

    <section class="industry-section industry-context">
      <Container class="industry-context__layout">
        <SectionHeading
          eyebrow="Business context"
          :title="industry.contextTitle"
          :description="industry.contextDescription"
        />
        <ol class="industry-context__journey" :aria-label="`${industry.name} customer journey considerations`">
          <li v-for="(step, index) in industry.journey" :key="step">
            <span>0{{ index + 1 }}</span>
            <strong>{{ step }}</strong>
            <Icon v-if="index < industry.journey.length - 1" name="arrow" :size="18" />
          </li>
        </ol>
      </Container>
    </section>

    <section class="industry-section industry-challenges">
      <Container>
        <div class="industry-section__header">
          <SectionHeading
            eyebrow="Illustrative business challenges"
            title="Start with what is getting in the way."
            description="These are examples to help frame a conversation, not assumptions about every organization in the industry."
          />
          <span class="industry-section__index">01 — {{ industry.name }}</span>
        </div>
        <ol class="industry-challenges__list">
          <li v-for="(challenge, index) in industry.challenges" :key="challenge">
            <span>0{{ index + 1 }}</span>
            <p>{{ challenge }}</p>
            <i aria-hidden="true"></i>
          </li>
        </ol>
      </Container>
    </section>

    <section class="industry-section industry-approach">
      <Container class="industry-approach__layout">
        <div>
          <SectionHeading
            eyebrow="A business-first approach"
            :title="industry.approachTitle"
            :description="industry.approachDescription"
          />
          <RouterLink class="industry-text-link" to="/how-we-work">Explore how we work <Icon name="arrow" :size="16" /></RouterLink>
        </div>
        <ol class="industry-approach__steps">
          <li v-for="(step, index) in industry.approachSteps" :key="step">
            <span>0{{ index + 1 }}</span><p>{{ step }}</p>
          </li>
        </ol>
      </Container>
    </section>

    <section class="industry-section industry-capabilities">
      <Container>
        <div class="industry-section__header">
          <SectionHeading
            eyebrow="Relevant capabilities"
            title="Choose the capabilities that fit the challenge."
            description="These areas may be relevant depending on discovery, objectives, and agreed scope. Not every organization needs every capability."
          />
          <RouterLink class="industry-text-link" to="/solutions">All solutions <Icon name="arrow" :size="16" /></RouterLink>
        </div>
        <ul class="industry-capability-list">
          <li v-for="(capability, index) in industry.capabilities" :key="capability.route">
            <span class="industry-capability-list__number">0{{ index + 1 }}</span>
            <div><h3>{{ capability.title }}</h3><p>{{ capability.reason }}</p></div>
            <RouterLink :to="capability.route" :aria-label="`Explore ${capability.title}`">
              <Icon name="arrow" :size="18" />
            </RouterLink>
          </li>
        </ul>
      </Container>
    </section>

    <section class="industry-section industry-use-cases">
      <Container>
        <div class="industry-section__header">
          <SectionHeading
            eyebrow="Illustrative use cases"
            title="Practical ways to apply the thinking."
            description="Examples are starting points for discussion; actual work depends on business context and project scope."
          />
          <span class="industry-section__index">02 — {{ industry.name }}</span>
        </div>
        <div class="industry-use-cases__grid">
          <article v-for="(useCase, index) in industry.useCases" :key="useCase">
            <span>USE CASE / 0{{ index + 1 }}</span>
            <h3>{{ useCase }}</h3>
            <Icon name="arrow" :size="17" />
          </article>
        </div>
      </Container>
    </section>

    <section class="industry-section industry-process">
      <Container>
        <div class="industry-section__header">
          <SectionHeading
            eyebrow="A practical engagement process"
            title="From understanding to learning."
            description="The sequence adapts to the business need. Scope, responsibilities, timing, and deliverables are agreed before implementation."
          />
          <RouterLink class="industry-text-link" to="/how-we-work">How We Work <Icon name="arrow" :size="16" /></RouterLink>
        </div>
        <ol class="industry-process__steps">
          <li><span>01</span><strong>Understand</strong><p>Share the business context, audience, current journey, and objectives.</p></li>
          <li><span>02</span><strong>Prioritize</strong><p>Identify the challenge or opportunity most relevant to the agreed goal.</p></li>
          <li><span>03</span><strong>Plan & deliver</strong><p>Agree the appropriate work, ownership, requirements, and next steps.</p></li>
          <li><span>04</span><strong>Review & improve</strong><p>Assess available signals, learn from the work, and discuss what comes next.</p></li>
        </ol>
      </Container>
    </section>

    <section class="industry-section industry-measurement">
      <Container class="industry-measurement__layout">
        <SectionHeading
          eyebrow="Measurement and learning"
          title="Define progress around the objective."
          description="Useful indicators depend on the business question, baseline information, available tracking, and what can be measured reliably."
        />
        <div>
          <ul class="industry-measurement__list">
            <li v-for="measure in industry.measures" :key="measure.title">
              <span></span><div><h3>{{ measure.title }}</h3><p>{{ measure.description }}</p></div>
            </li>
          </ul>
          <p class="industry-measurement__note">{{ industry.metricNote }}</p>
        </div>
      </Container>
    </section>

    <section class="industry-section industry-faq">
      <Container class="industry-faq__layout">
        <div>
          <SectionHeading
            eyebrow="Frequently asked questions"
            :title="`Questions about ${industry.name.toLowerCase()}.`"
            description="The right approach depends on your organization, objectives, and the work you choose to scope."
          />
          <RouterLink class="industry-text-link" to="/industries">Explore all industries <Icon name="arrow" :size="16" /></RouterLink>
        </div>
        <div class="industry-faq__list">
          <article v-for="(item, index) in industry.faqs" :key="item.question" class="industry-faq__item">
            <h3>
              <button
                :id="`${industry.variant}-question-${index}`"
                class="industry-faq__trigger"
                type="button"
                :aria-expanded="openQuestion === index"
                :aria-controls="`${industry.variant}-answer-${index}`"
                @click="toggleQuestion(index)"
                @keydown="onQuestionKeydown($event, index)"
              >
                <span class="industry-faq__number">0{{ index + 1 }}</span>
                <span>{{ item.question }}</span>
                <span class="industry-faq__toggle" aria-hidden="true">{{ openQuestion === index ? '−' : '+' }}</span>
              </button>
            </h3>
            <div
              v-show="openQuestion === index"
              :id="`${industry.variant}-answer-${index}`"
              class="industry-faq__answer"
              role="region"
              :aria-labelledby="`${industry.variant}-question-${index}`"
            >
              <p>{{ item.answer }}</p>
            </div>
          </article>
        </div>
      </Container>
    </section>

    <section class="industry-cta">
      <Container class="industry-cta__layout">
        <div>
          <p class="industry-eyebrow"><span></span> START WITH THE BUSINESS CONTEXT</p>
          <h2>Let’s understand your challenge before choosing the solution.</h2>
          <p>Tell us about your {{ industry.name.toLowerCase() }} business, the questions you are working through, and what you want to improve.</p>
        </div>
        <div class="industry-cta__actions">
          <Button to="/contact">Start a Conversation <Icon name="arrow" :size="16" /></Button>
          <RouterLink :to="industry.secondary.route">{{ industry.secondary.label }} <Icon name="arrow" :size="16" /></RouterLink>
        </div>
      </Container>
    </section>
  </article>
</template>

<style scoped>
.industry-detail {
  --industry-accent: var(--color-blue);
  --industry-accent-soft: rgba(0, 180, 255, 0.15);
  color: var(--color-text);
}

.industry-detail--healthcare { --industry-accent: #00d1a7; --industry-accent-soft: rgba(0, 209, 167, 0.14); }
.industry-detail--manufacturing { --industry-accent: #ffb020; --industry-accent-soft: rgba(255, 176, 32, 0.14); }
.industry-detail--retail { --industry-accent: #00b4ff; --industry-accent-soft: rgba(0, 180, 255, 0.14); }
.industry-detail--real-estate { --industry-accent: #f39b6d; --industry-accent-soft: rgba(243, 155, 109, 0.14); }
.industry-detail--education { --industry-accent: #a995ff; --industry-accent-soft: rgba(169, 149, 255, 0.14); }
.industry-detail--professional { --industry-accent: #63c6bb; --industry-accent-soft: rgba(99, 198, 187, 0.14); }
.industry-detail--technology { --industry-accent: #72a9ff; --industry-accent-soft: rgba(114, 169, 255, 0.14); }

.industry-hero {
  position: relative;
  overflow: hidden;
  padding-block: clamp(4rem, 8vw, 7.25rem);
  background: var(--color-navy);
  color: white;
}

.industry-hero__layout {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(400px, 1.05fr);
  align-items: center;
  gap: clamp(2rem, 5vw, 5rem);
}

.industry-hero__copy { min-width: 0; }

.industry-breadcrumb {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  margin-bottom: 2.2rem;
  color: #a8bfd1;
  font-size: 0.78rem;
}

.industry-breadcrumb a { color: #d3e5f0; text-decoration: none; }
.industry-breadcrumb a:hover { color: white; }

.industry-eyebrow {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin: 0;
  color: #c0d2df;
  font-size: 0.69rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.industry-eyebrow > span {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--industry-accent);
  box-shadow: 0 0 0 5px var(--industry-accent-soft);
}

.industry-hero h1 {
  max-width: 700px;
  margin: 1.2rem 0 0;
  color: white;
  font-family: var(--font-display);
  font-size: clamp(2.6rem, 5vw, 4.55rem);
  font-weight: 700;
  letter-spacing: -0.065em;
  line-height: 1.04;
}

.industry-hero__description {
  max-width: 600px;
  margin: 1.4rem 0 0;
  color: #bacbd9;
  font-size: 1rem;
  line-height: 1.8;
}

.industry-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 1.8rem;
}

.industry-detail :deep(.button--outline) {
  border-color: rgba(207, 228, 240, 0.36);
  background: transparent;
  color: white;
}

.industry-detail :deep(.button--outline:hover) { border-color: var(--industry-accent); }

.industry-hero__tagline {
  margin: 1.1rem 0 0;
  color: #90a9bc;
  font-size: 0.78rem;
}

.industry-hero__grid {
  position: absolute;
  inset: 0;
  opacity: 0.13;
  pointer-events: none;
  background-image: linear-gradient(rgba(133, 180, 208, 0.17) 1px, transparent 1px), linear-gradient(90deg, rgba(133, 180, 208, 0.17) 1px, transparent 1px);
  background-size: 46px 46px;
  mask-image: linear-gradient(90deg, transparent, black 75%);
}

.industry-journey {
  min-width: 0;
  border: 1px solid rgba(160, 197, 219, 0.25);
  border-radius: 1.1rem;
  padding: clamp(1rem, 2.2vw, 1.4rem);
  background: linear-gradient(145deg, rgba(21, 53, 83, 0.96), rgba(9, 29, 52, 0.97));
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.2);
}

.industry-journey__heading,
.industry-journey__foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  color: #9bb5c8;
  font-size: 0.58rem;
  font-weight: 700;
  letter-spacing: 0.09em;
}

.industry-journey__flow {
  position: relative;
  display: grid;
  min-height: 220px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: center;
  gap: 0.75rem;
  margin-block: 1rem;
}

.industry-journey__flow > svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  fill: none;
  stroke: color-mix(in srgb, var(--industry-accent) 55%, transparent);
  stroke-width: 1;
}

.industry-journey__flow > svg circle {
  stroke: color-mix(in srgb, var(--industry-accent) 60%, transparent);
  stroke-dasharray: 4 7;
}

.industry-journey__step {
  position: relative;
  z-index: 1;
  display: grid;
  min-height: 104px;
  align-content: center;
  justify-items: start;
  gap: 0.42rem;
  border: 1px solid rgba(155, 191, 213, 0.3);
  border-radius: 0.75rem;
  padding: 0.8rem;
  background: #102845;
}

.industry-journey__number {
  color: var(--industry-accent);
  font-size: 0.61rem;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.industry-journey__step strong {
  color: #f3f8fc;
  font-family: var(--font-display);
  font-size: clamp(0.73rem, 1.05vw, 0.9rem);
  line-height: 1.35;
}

.industry-journey__step small { color: #9db3c4; font-size: 0.65rem; }

.industry-journey__foot {
  justify-content: flex-start;
  gap: 0.6rem;
  color: #adc3d2;
  font-size: 0.6rem;
  letter-spacing: 0.03em;
}

.industry-journey__foot i {
  width: 4px;
  height: 4px;
  flex: 0 0 4px;
  border-radius: 50%;
  background: var(--industry-accent);
}

.industry-section { padding-block: clamp(4rem, 8vw, 7rem); }
.industry-context { background: var(--color-background); }

.industry-context__layout {
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
  align-items: center;
  gap: clamp(2rem, 6vw, 6rem);
}

.industry-context__journey {
  display: grid;
  gap: 0.8rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.industry-context__journey li {
  display: grid;
  grid-template-columns: 34px minmax(0, 1fr) 22px;
  align-items: center;
  gap: 0.85rem;
  border-bottom: 1px solid var(--color-border);
  padding: 1rem 0;
}

.industry-context__journey li > span { color: var(--industry-accent); font-size: 0.69rem; font-weight: 700; }
.industry-context__journey strong { color: var(--color-navy); font-family: var(--font-display); font-size: 0.96rem; }
.industry-context__journey .icon { color: var(--color-muted); }

.industry-section__header {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 2.2rem;
}

.industry-section__header .section-heading { max-width: 720px; }
.industry-section__index { flex: 0 0 auto; padding-bottom: 0.5rem; color: var(--color-muted); font-size: 0.68rem; letter-spacing: 0.12em; }

.industry-challenges { background: white; }

.industry-challenges__list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0 2.5rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.industry-challenges__list li {
  display: grid;
  min-height: 88px;
  grid-template-columns: 36px minmax(0, 1fr) 9px;
  align-items: center;
  gap: 1rem;
  border-top: 1px solid var(--color-border);
  padding-block: 1rem;
}

.industry-challenges__list li > span { color: var(--industry-accent); font-size: 0.7rem; font-weight: 700; }
.industry-challenges__list p { margin: 0; color: var(--color-text); font-size: 0.92rem; line-height: 1.6; }
.industry-challenges__list i { width: 7px; height: 7px; border-radius: 50%; background: var(--industry-accent); }

.industry-approach { background: var(--color-background); }

.industry-approach__layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 0.9fr);
  gap: clamp(2.5rem, 7vw, 7rem);
}

.industry-text-link {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  margin-top: 1.5rem;
  color: var(--color-link);
  font-size: 0.86rem;
  font-weight: 700;
  text-decoration: none;
}

.industry-text-link:hover { color: var(--color-navy); }

.industry-approach__steps {
  display: grid;
  align-content: center;
  margin: 0;
  padding: 0;
  list-style: none;
}

.industry-approach__steps li {
  display: grid;
  grid-template-columns: 40px minmax(0, 1fr);
  gap: 0.9rem;
  border-bottom: 1px solid var(--color-border);
  padding: 1.2rem 0;
}

.industry-approach__steps li:first-child { border-top: 1px solid var(--color-border); }
.industry-approach__steps span { color: var(--industry-accent); font-size: 0.7rem; font-weight: 700; }
.industry-approach__steps p { margin: 0; color: var(--color-text); font-size: 0.92rem; line-height: 1.65; }

.industry-capabilities { background: white; }
.industry-capabilities .industry-section__header { align-items: center; }
.industry-capabilities .industry-text-link { flex: 0 0 auto; margin: 0 0 0.4rem; }

.industry-capability-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.85rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.industry-capability-list li {
  display: grid;
  min-height: 132px;
  grid-template-columns: 32px minmax(0, 1fr) 30px;
  align-items: start;
  gap: 0.9rem;
  border: 1px solid var(--color-border);
  border-radius: 0.85rem;
  padding: 1.25rem;
  background: #fff;
  transition: border-color 160ms ease, transform 160ms ease;
}

.industry-capability-list li:hover { transform: translateY(-2px); border-color: var(--industry-accent); }
.industry-capability-list__number { color: var(--industry-accent); font-size: 0.7rem; font-weight: 700; }
.industry-capability-list h3 { margin: 0; color: var(--color-navy); font-family: var(--font-display); font-size: 0.98rem; }
.industry-capability-list p { margin: 0.55rem 0 0; color: var(--color-muted); font-size: 0.81rem; line-height: 1.6; }

.industry-capability-list a {
  display: grid;
  width: 30px;
  height: 30px;
  place-items: center;
  border-radius: 50%;
  background: var(--industry-accent-soft);
  color: var(--color-navy);
}

.industry-capability-list a:hover { background: var(--industry-accent); color: var(--color-navy); }

.industry-use-cases { background: var(--color-navy); color: white; }
.industry-use-cases .section-heading__title { color: white; }
.industry-use-cases .section-heading__description { color: #aec1d0; }
.industry-use-cases .section-heading__eyebrow { border-color: var(--industry-accent-soft); background: var(--industry-accent-soft); color: #edf6fb; }
.industry-use-cases .industry-section__index { color: #a8bfd1; }

.industry-use-cases__grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.8rem;
}

.industry-use-cases__grid article {
  display: flex;
  min-height: 200px;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid rgba(170, 199, 217, 0.24);
  border-radius: 0.8rem;
  padding: 1.1rem;
  background: rgba(255, 255, 255, 0.035);
}

.industry-use-cases__grid article > span { color: var(--industry-accent); font-size: 0.59rem; font-weight: 700; letter-spacing: 0.09em; }
.industry-use-cases__grid h3 { margin: 1.3rem 0 auto; color: #f1f7fb; font-family: var(--font-display); font-size: 0.95rem; line-height: 1.5; }
.industry-use-cases__grid .icon { margin-top: 1rem; color: var(--industry-accent); }

.industry-process { background: var(--color-background); }
.industry-process .industry-section__header { align-items: center; }
.industry-process .industry-text-link { flex: 0 0 auto; margin: 0 0 0.4rem; }

.industry-process__steps {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.industry-process__steps li {
  min-height: 190px;
  border-top: 2px solid var(--industry-accent);
  padding: 1rem 0.25rem 0;
}

.industry-process__steps span { color: var(--industry-accent); font-size: 0.69rem; font-weight: 700; }
.industry-process__steps strong { display: block; margin-top: 1.1rem; color: var(--color-navy); font-family: var(--font-display); font-size: 1rem; }
.industry-process__steps p { margin: 0.55rem 0 0; color: var(--color-muted); font-size: 0.82rem; line-height: 1.65; }

.industry-measurement { background: white; }

.industry-measurement__layout {
  display: grid;
  grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
  gap: clamp(2rem, 7vw, 7rem);
}

.industry-measurement__list { display: grid; gap: 1rem; margin: 0; padding: 0; list-style: none; }
.industry-measurement__list li { display: grid; grid-template-columns: 10px minmax(0, 1fr); gap: 0.9rem; }
.industry-measurement__list li > span { width: 7px; height: 7px; margin-top: 0.45rem; border-radius: 50%; background: var(--industry-accent); }
.industry-measurement__list h3 { margin: 0; color: var(--color-navy); font-family: var(--font-display); font-size: 0.92rem; }
.industry-measurement__list p { margin: 0.3rem 0 0; color: var(--color-muted); font-size: 0.82rem; line-height: 1.65; }

.industry-measurement__note {
  margin: 1.4rem 0 0;
  border-left: 2px solid var(--industry-accent);
  padding: 0.2rem 0 0.2rem 1rem;
  color: var(--color-muted);
  font-size: 0.79rem;
  line-height: 1.7;
}

.industry-faq { background: var(--color-background); }

.industry-faq__layout {
  display: grid;
  grid-template-columns: minmax(0, 0.75fr) minmax(0, 1.25fr);
  gap: clamp(2rem, 7vw, 7rem);
}

.industry-faq__list { border-top: 1px solid var(--color-border); }
.industry-faq__item { border-bottom: 1px solid var(--color-border); }
.industry-faq__item h3 { margin: 0; font-size: inherit; }

.industry-faq__trigger {
  display: grid;
  width: 100%;
  min-height: 72px;
  grid-template-columns: 32px minmax(0, 1fr) 24px;
  align-items: center;
  gap: 0.8rem;
  border: 0;
  padding: 1rem 0;
  background: transparent;
  color: var(--color-navy);
  cursor: pointer;
  font-family: var(--font-display);
  font-size: 0.92rem;
  font-weight: 700;
  text-align: left;
}

.industry-faq__trigger:hover { color: var(--color-link); }
.industry-faq__number { color: var(--industry-accent); font-family: var(--font-body); font-size: 0.65rem; }
.industry-faq__toggle { justify-self: end; color: var(--color-link); font-size: 1.3rem; font-weight: 400; }
.industry-faq__answer { padding: 0 2.5rem 1.25rem; }
.industry-faq__answer p { max-width: 680px; margin: 0; color: var(--color-muted); font-size: 0.85rem; line-height: 1.75; }

.industry-cta { padding-block: clamp(3.5rem, 7vw, 6rem); background: var(--color-navy); color: white; }

.industry-cta__layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: 2rem;
}

.industry-cta h2 {
  max-width: 780px;
  margin: 1rem 0 0;
  color: white;
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3.5rem);
  letter-spacing: -0.05em;
  line-height: 1.12;
}

.industry-cta__layout > div:first-child > p:last-child { max-width: 650px; margin: 1rem 0 0; color: #b9cad9; line-height: 1.7; }
.industry-cta__actions { display: grid; justify-items: start; gap: 1rem; }
.industry-cta__actions > a:last-child { display: inline-flex; align-items: center; gap: 0.45rem; color: #d9e8f1; font-size: 0.84rem; text-decoration: none; }
.industry-cta__actions > a:last-child:hover { color: white; }

@media (max-width: 900px) {
  .industry-hero__layout { grid-template-columns: minmax(0, 1fr); }
  .industry-hero__copy { max-width: 760px; }
  .industry-journey { width: min(100%, 680px); margin-inline: auto; }
  .industry-context__layout,
  .industry-approach__layout,
  .industry-measurement__layout,
  .industry-faq__layout { grid-template-columns: minmax(0, 1fr); gap: 2.5rem; }
  .industry-use-cases__grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .industry-cta__layout { grid-template-columns: minmax(0, 1fr); }
}

@media (max-width: 620px) {
  .industry-hero { padding-block: 3.5rem; }
  .industry-hero h1 { font-size: clamp(2.45rem, 11vw, 3.7rem); }
  .industry-journey__heading { font-size: 0.48rem; }
  .industry-journey__flow { min-height: auto; grid-template-columns: minmax(0, 1fr); gap: 0.55rem; }
  .industry-journey__flow > svg { display: none; }
  .industry-journey__step { min-height: 70px; grid-template-columns: 38px minmax(0, 1fr); align-items: center; gap: 0 0.6rem; padding: 0.65rem 0.8rem; }
  .industry-journey__step strong { grid-column: 2; grid-row: 1; font-size: 0.82rem; }
  .industry-journey__step small { grid-column: 2; grid-row: 2; }
  .industry-journey__number { grid-column: 1; grid-row: 1 / span 2; }
  .industry-journey__foot { flex-wrap: wrap; font-size: 0.54rem; }
  .industry-section__header { align-items: flex-start; flex-direction: column; gap: 0.8rem; }
  .industry-section__index { padding: 0; }
  .industry-challenges__list,
  .industry-capability-list,
  .industry-use-cases__grid,
  .industry-process__steps { grid-template-columns: minmax(0, 1fr); }
  .industry-challenges__list { gap: 0; }
  .industry-capability-list li { min-height: 110px; }
  .industry-use-cases__grid article { min-height: 150px; }
  .industry-process__steps { gap: 0; }
  .industry-process__steps li { min-height: auto; padding: 1rem 0 1.25rem; }
  .industry-process__steps strong { margin-top: 0.55rem; }
  .industry-cta__actions { justify-items: stretch; }
  .industry-cta__actions :deep(.button) { width: 100%; }
}

@media (max-width: 380px) {
  .industry-breadcrumb { margin-bottom: 1.5rem; }
  .industry-hero__actions { align-items: stretch; flex-direction: column; }
  .industry-hero__actions :deep(.button) { width: 100%; }
  .industry-journey__heading { letter-spacing: 0.04em; }
  .industry-journey__foot { gap: 0.4rem; }
  .industry-context__journey li { grid-template-columns: 28px minmax(0, 1fr) 18px; gap: 0.55rem; }
  .industry-faq__trigger { grid-template-columns: 25px minmax(0, 1fr) 20px; gap: 0.5rem; font-size: 0.84rem; }
  .industry-faq__answer { padding-inline: 2rem 0.5rem; }
}

@media (prefers-reduced-motion: reduce) {
  .industry-detail *,
  .industry-detail *::before,
  .industry-detail *::after { scroll-behavior: auto !important; transition-duration: 0.01ms !important; }
}
</style>
