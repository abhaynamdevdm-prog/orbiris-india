<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import Container from '../components/global/Container.vue'
import Button from '../components/global/Button.vue'
import SectionHeading from '../components/global/SectionHeading.vue'
import Icon from '../components/global/Icon.vue'
import { insightArticles } from '../data/insights.js'

const topics = [
  { number: '01', title: 'Business Strategy', description: 'Questions that help clarify business goals, priorities, positioning, and the choices behind growth.', accent: 'strategy' },
  { number: '02', title: 'Branding & Customer Experience', description: 'Perspectives on communicating value and making digital experiences easier to understand and use.', accent: 'experience' },
  { number: '03', title: 'Performance Marketing', description: 'Practical thinking on audience intent, campaign decisions, measurement, and learning.', accent: 'performance' },
  { number: '04', title: 'Technology & Digital Systems', description: 'Ideas for aligning platforms, information, and technology decisions with real business needs.', accent: 'technology' },
  { number: '05', title: 'Automation & Operations', description: 'Ways to examine workflows, ownership, and where systems can support more consistent work.', accent: 'operations' },
  { number: '06', title: 'Business Growth & Decision-Making', description: 'Frameworks for understanding trade-offs, evidence, and the decisions that move work forward.', accent: 'growth' },
]

const previews = insightArticles

const principles = [
  { number: '01', title: 'Understand the problem before recommending tactics', description: 'Business context and objectives should guide the discussion of channels, tools, and activity.' },
  { number: '02', title: 'Separate assumptions from observable evidence', description: 'Make clear what is known, what is inferred, and what still needs to be checked.' },
  { number: '03', title: 'Connect activity to wider business objectives', description: 'Consider how marketing, experience, systems, and operations relate to the outcome in view.' },
  { number: '04', title: 'Explain trade-offs and limitations', description: 'Useful decisions account for constraints, measurement gaps, dependencies, and uncertainty.' },
  { number: '05', title: 'Prefer practical frameworks over empty buzzwords', description: 'Share tools and questions that help teams make clearer choices and take realistic next steps.' },
]

const capabilities = [
  { title: 'Strategy & Discovery', route: '/solutions/strategy', description: 'Clarify business context, audience needs, priorities, and direction.' },
  { title: 'Brand & Digital Experience', route: '/solutions/brand-digital-experience', description: 'Connect brand communication, websites, and customer touchpoints.' },
  { title: 'Performance & Growth', route: '/solutions/performance-growth', description: 'Align campaigns, conversion journeys, and measurement with objectives.' },
  { title: 'Technology Solutions', route: '/solutions/technology', description: 'Plan digital platforms and systems around business requirements.' },
  { title: 'Automation & Systems', route: '/solutions/automation', description: 'Explore workflows and operational coordination where appropriate.' },
]

const questions = [
  {
    question: 'What topics does ORBIRIS cover?',
    answer: 'This editorial overview is organized around business strategy, branding and customer experience, performance marketing, technology and digital systems, automation and operations, and business growth and decision-making. The aim is to connect practical digital topics to business context.',
  },
  {
    question: 'Are the Insights articles educational or promotional?',
    answer: 'The article pages are educational editorial drafts, built around useful questions and frameworks rather than claims of results or product endorsements. They are not yet published.',
  },
  {
    question: 'Where can I find published articles?',
    answer: 'There are no published articles at this time. Six complete editorial drafts are available to read; each is clearly labeled as unpublished and has no publication date or author attribution.',
  },
  {
    question: 'Can I discuss a business challenge with ORBIRIS?',
    answer: 'Yes. You can start a conversation about your business, the challenge you are working through, and what you want to improve. The contact page is currently a placeholder while its full experience is developed.',
  },
]

const openQuestion = ref(null)

function toggleQuestion(index) {
  openQuestion.value = openQuestion.value === index ? null : index
}

function onQuestionKeydown(event, index) {
  if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return

  event.preventDefault()
  const buttons = [...event.currentTarget.closest('.insights-faq__list').querySelectorAll('.insights-faq__trigger')]
  const nextIndex = event.key === 'Home'
    ? 0
    : event.key === 'End'
      ? buttons.length - 1
      : (index + (event.key === 'ArrowDown' ? 1 : -1) + buttons.length) % buttons.length
  buttons[nextIndex]?.focus()
}
</script>

<template>
  <div class="insights-page">
    <section class="insights-hero">
      <Container class="insights-hero__layout">
        <div class="insights-hero__copy">
          <p class="insights-eyebrow"><span></span> INSIGHTS / EDITORIAL</p>
          <h1>Understand the thinking behind better business growth.</h1>
          <p class="insights-hero__description">
            Practical perspectives on the decisions, systems, and digital experiences that help businesses identify challenges and make more informed choices.
          </p>
          <div class="insights-hero__actions">
            <Button to="/contact">Start a Conversation <Icon name="arrow" :size="16" /></Button>
            <RouterLink to="/solutions">Explore Solutions <Icon name="arrow" :size="16" /></RouterLink>
          </div>
          <p class="insights-hero__tagline">Turning Business Challenges into Digital Growth.</p>
        </div>

        <div class="insights-hero-visual" role="img" aria-label="Connected ideas linking business context, evidence, strategy, and informed decisions">
          <div class="insights-hero-visual__top"><span>OBSERVE</span><span>CONNECT</span><span>DECIDE</span></div>
          <div class="insights-hero-visual__canvas">
            <svg viewBox="0 0 600 390" preserveAspectRatio="none" aria-hidden="true">
              <path d="M300 194 152 88M300 194 300 54M300 194 448 88M300 194 488 194M300 194 448 300M300 194 300 336M300 194 152 300M300 194 112 194" />
              <circle cx="300" cy="194" r="134" />
              <circle class="insights-hero-visual__orbit" cx="300" cy="194" r="88" />
            </svg>
            <div class="insights-hero-visual__core"><span>BUSINESS</span><strong>CONTEXT</strong><small>start with why</small></div>
            <span class="insights-hero-visual__node insights-hero-visual__node--strategy">Strategy</span>
            <span class="insights-hero-visual__node insights-hero-visual__node--evidence">Evidence</span>
            <span class="insights-hero-visual__node insights-hero-visual__node--experience">Experience</span>
            <span class="insights-hero-visual__node insights-hero-visual__node--systems">Systems</span>
            <span class="insights-hero-visual__node insights-hero-visual__node--audience">Audience</span>
            <span class="insights-hero-visual__node insights-hero-visual__node--goals">Goals</span>
            <span class="insights-hero-visual__node insights-hero-visual__node--signals">Signals</span>
          </div>
          <div class="insights-hero-visual__foot"><span><i></i> BUSINESS REALITY</span><span><i></i> INFORMED CHOICES</span></div>
        </div>
      </Container>
      <div class="insights-hero__grid" aria-hidden="true"></div>
    </section>

    <section class="insights-featured insights-section">
      <Container class="insights-featured__layout">
        <div class="insights-featured__lead">
          <p class="insights-eyebrow"><span></span> FEATURED / EDITORIAL DRAFT</p>
          <SectionHeading
            eyebrow="Start with the question that matters"
            title="Useful thinking begins before the tactic."
            description="A draft about connecting marketing decisions to the business problem they are meant to address."
          />
          <p class="insights-featured__note">This complete article is an editorial draft and has not been published.</p>
        </div>
        <article class="insights-featured-card">
          <div class="insights-featured-card__art" aria-hidden="true">
            <svg viewBox="0 0 520 300" preserveAspectRatio="xMidYMid slice">
              <path d="M70 235h380M95 202h86v-38h82v-46h82V76h78" />
              <circle cx="138" cy="202" r="7" /><circle cx="222" cy="164" r="7" /><circle cx="304" cy="118" r="7" /><circle cx="386" cy="76" r="7" />
              <circle class="insights-featured-card__orbit" cx="260" cy="150" r="116" />
            </svg>
            <span>QUESTION → BUSINESS CONTEXT → DECISION</span>
          </div>
          <div class="insights-featured-card__body">
            <div class="insights-article-label"><span>{{ previews[0].category }}</span><span>Editorial Draft · Unpublished</span></div>
            <h2><RouterLink :to="`/insights/${previews[0].slug}`">{{ previews[0].title }}</RouterLink></h2>
            <p>{{ previews[0].summary }}</p>
            <RouterLink class="insights-featured-card__availability" :to="`/insights/${previews[0].slug}`">Read the editorial draft <Icon name="arrow" :size="15" /></RouterLink>
          </div>
        </article>
      </Container>
    </section>

    <section class="insights-topics insights-section">
      <Container>
        <div class="insights-section__header">
          <SectionHeading
            eyebrow="Explore by topic"
            title="A connected view of business and digital."
            description="Browse the themes that shape our editorial perspective. These topic guides are descriptive, not interactive filters."
          />
        </div>
        <ul class="insights-topics__grid">
          <li v-for="topic in topics" :key="topic.number" class="insights-topic" :class="`insights-topic--${topic.accent}`">
            <span>{{ topic.number }}</span>
            <div class="insights-topic__motif" aria-hidden="true"><i></i><i></i><i></i></div>
            <h3>{{ topic.title }}</h3>
            <p>{{ topic.description }}</p>
          </li>
        </ul>
      </Container>
    </section>

    <section class="insights-library insights-section">
      <Container>
        <div class="insights-section__header">
          <SectionHeading
            eyebrow="Latest insights / editorial library"
            title="Ideas you can put into practice."
            description="There are no published articles yet. Read these complete editorial drafts as unpublished work-in-progress content."
          />
          <span class="insights-library__status"><i></i> SIX DRAFTS · NOT PUBLISHED</span>
        </div>
        <div class="insights-preview-grid">
          <article v-for="(preview, index) in previews" :key="preview.slug" class="insights-preview" :class="`insights-preview--${preview.accent}`">
            <div class="insights-preview__top">
              <span>EDITORIAL DRAFT / 0{{ index + 1 }}</span>
              <span class="insights-preview__symbol" aria-hidden="true"><i></i></span>
            </div>
            <span class="insights-preview__category">{{ preview.category }}</span>
            <h3>{{ preview.title }}</h3>
            <p>{{ preview.summary }}</p>
            <RouterLink class="insights-preview__availability" :to="`/insights/${preview.slug}`">Read unpublished draft <Icon name="arrow" :size="14" /></RouterLink>
          </article>
        </div>
      </Container>
    </section>

    <section class="insights-point insights-section">
      <Container>
        <div class="insights-section__header">
          <SectionHeading
            eyebrow="Our point of view"
            title="Useful insight starts with the business reality."
            description="Our editorial approach aims to make digital decisions more grounded, clear, and useful to the people making them."
          />
          <div class="insights-point__links">
            <RouterLink to="/why-us">Why ORBIRIS <Icon name="arrow" :size="15" /></RouterLink>
            <RouterLink to="/how-we-work">How We Work <Icon name="arrow" :size="15" /></RouterLink>
          </div>
        </div>
        <ol class="insights-principles">
          <li v-for="principle in principles" :key="principle.number">
            <span>{{ principle.number }}</span><div><h3>{{ principle.title }}</h3><p>{{ principle.description }}</p></div>
          </li>
        </ol>
      </Container>
    </section>

    <section class="insights-solutions insights-section">
      <Container>
        <div class="insights-section__header">
          <SectionHeading
            eyebrow="Explore related solutions"
            title="Ideas connect to practical capabilities."
            description="The topics and capabilities are related, but an individual business may need only some of them. Start from the objective and decide what fits."
          />
          <RouterLink to="/solutions" class="insights-text-link">All solutions <Icon name="arrow" :size="15" /></RouterLink>
        </div>
        <ul class="insights-solutions__list">
          <li v-for="(capability, index) in capabilities" :key="capability.route">
            <span>0{{ index + 1 }}</span>
            <div><h3>{{ capability.title }}</h3><p>{{ capability.description }}</p></div>
            <RouterLink :to="capability.route" :aria-label="`Explore ${capability.title}`"><Icon name="arrow" :size="18" /></RouterLink>
          </li>
        </ul>
      </Container>
    </section>

    <section class="insights-faq insights-section">
      <Container class="insights-faq__layout">
        <SectionHeading
          eyebrow="Frequently asked questions"
          title="About this editorial library."
          description="A clear note on what is available now and how the content is intended to help."
        />
        <div class="insights-faq__list">
          <article v-for="(item, index) in questions" :key="item.question" class="insights-faq__item">
            <h3>
              <button
                :id="`insights-question-${index}`"
                class="insights-faq__trigger"
                type="button"
                :aria-expanded="openQuestion === index"
                :aria-controls="`insights-answer-${index}`"
                @click="toggleQuestion(index)"
                @keydown="onQuestionKeydown($event, index)"
              >
                <span>0{{ index + 1 }}</span><span>{{ item.question }}</span><span aria-hidden="true">{{ openQuestion === index ? '−' : '+' }}</span>
              </button>
            </h3>
            <div v-show="openQuestion === index" :id="`insights-answer-${index}`" class="insights-faq__answer" role="region" :aria-labelledby="`insights-question-${index}`">
              <p>{{ item.answer }}</p>
            </div>
          </article>
        </div>
      </Container>
    </section>

    <section class="insights-cta">
      <Container class="insights-cta__layout">
        <div>
          <p class="insights-eyebrow"><span></span> START WITH A QUESTION</p>
          <h2>Have a business question worth exploring?</h2>
          <p>Tell us what you’re trying to improve, and start a conversation about the problem behind the challenge.</p>
        </div>
        <div class="insights-cta__actions">
          <Button to="/contact">Start a Conversation <Icon name="arrow" :size="16" /></Button>
          <RouterLink to="/solutions">Explore Our Solutions <Icon name="arrow" :size="16" /></RouterLink>
        </div>
      </Container>
    </section>
  </div>
</template>

<style scoped>
.insights-page { color: var(--color-text); }
.insights-section { padding-block: clamp(4rem, 8vw, 7rem); }

.insights-hero {
  position: relative;
  overflow: hidden;
  padding-block: clamp(4.25rem, 8vw, 7.25rem);
  background: var(--color-navy);
  color: white;
}

.insights-hero__layout {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(400px, 1.05fr);
  align-items: center;
  gap: clamp(2rem, 5vw, 5rem);
}

.insights-hero__copy { min-width: 0; }
.insights-eyebrow { display: flex; align-items: center; gap: 0.65rem; margin: 0; color: #bfd1de; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; }
.insights-eyebrow > span { width: 7px; height: 7px; border-radius: 50%; background: var(--color-teal); box-shadow: 0 0 0 5px rgba(0, 209, 167, 0.14); }

.insights-hero h1 {
  max-width: 670px;
  margin: 1.25rem 0 0;
  color: white;
  font-family: var(--font-display);
  font-size: clamp(2.7rem, 5.2vw, 4.7rem);
  font-weight: 700;
  letter-spacing: -0.065em;
  line-height: 1.04;
}

.insights-hero__description { max-width: 585px; margin: 1.4rem 0 0; color: #bdcdda; font-size: 1rem; line-height: 1.8; }
.insights-hero__actions { display: flex; flex-wrap: wrap; align-items: center; gap: 1rem; margin-top: 1.8rem; }
.insights-hero__actions > a:last-child { display: inline-flex; align-items: center; gap: 0.4rem; color: #dceaf2; font-size: 0.85rem; font-weight: 600; text-decoration: none; }
.insights-hero__actions > a:last-child:hover { color: white; }
.insights-hero__tagline { margin: 1.2rem 0 0; color: #91aabd; font-size: 0.78rem; }

.insights-hero__grid { position: absolute; inset: 0; opacity: 0.12; pointer-events: none; background-image: linear-gradient(rgba(133, 180, 208, 0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(133, 180, 208, 0.16) 1px, transparent 1px); background-size: 48px 48px; mask-image: linear-gradient(90deg, transparent, black 72%); }

.insights-hero-visual { min-width: 0; border: 1px solid rgba(160, 197, 219, 0.24); border-radius: 1.1rem; padding: clamp(0.85rem, 2vw, 1.35rem); background: linear-gradient(145deg, rgba(21, 53, 83, 0.96), rgba(9, 29, 52, 0.97)); box-shadow: 0 24px 70px rgba(0, 0, 0, 0.2); }
.insights-hero-visual__top, .insights-hero-visual__foot { display: flex; align-items: center; justify-content: space-between; gap: 0.55rem; color: #9ab4c7; font-size: 0.55rem; font-weight: 700; letter-spacing: 0.09em; }
.insights-hero-visual__canvas { position: relative; width: 100%; max-width: 600px; height: clamp(260px, 29vw, 370px); margin: 0.5rem auto; }
.insights-hero-visual__canvas > svg { position: absolute; inset: 0; width: 100%; height: 100%; fill: none; stroke: rgba(0, 180, 255, 0.4); stroke-width: 1; }
.insights-hero-visual__canvas > svg circle { stroke: rgba(0, 209, 167, 0.2); stroke-dasharray: 4 7; }
.insights-hero-visual__canvas > svg .insights-hero-visual__orbit { stroke: rgba(0, 180, 255, 0.23); stroke-dasharray: none; }

.insights-hero-visual__core {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  display: grid;
  width: clamp(88px, 10vw, 116px);
  aspect-ratio: 1;
  align-content: center;
  justify-items: center;
  border: 1px solid rgba(0, 209, 167, 0.6);
  border-radius: 50%;
  background: #122e4b;
  box-shadow: 0 0 0 9px rgba(0, 209, 167, 0.055);
  transform: translate(-50%, -50%);
}

.insights-hero-visual__core span { color: #a7bfce; font-size: 0.48rem; letter-spacing: 0.12em; }
.insights-hero-visual__core strong { margin-top: 0.2rem; color: white; font-family: var(--font-display); font-size: 0.77rem; }
.insights-hero-visual__core small { margin-top: 0.25rem; color: #8eabba; font-size: 0.56rem; }
.insights-hero-visual__node { position: absolute; z-index: 1; border: 1px solid rgba(155, 191, 213, 0.3); border-radius: 999px; padding: 0.45rem 0.7rem; background: #102845; color: #e4eef4; font-size: clamp(0.57rem, 0.8vw, 0.7rem); white-space: nowrap; }
.insights-hero-visual__node::before { display: inline-block; width: 6px; height: 6px; margin-right: 0.4rem; border-radius: 50%; background: var(--color-blue); content: ''; vertical-align: 1px; }
.insights-hero-visual__node--strategy { top: 9%; left: 39%; }
.insights-hero-visual__node--evidence { top: 22%; right: 5%; }
.insights-hero-visual__node--experience { top: 46%; right: 0; }
.insights-hero-visual__node--systems { right: 11%; bottom: 12%; }
.insights-hero-visual__node--audience { bottom: 10%; left: 29%; }
.insights-hero-visual__node--goals { top: 47%; left: 1%; }
.insights-hero-visual__node--signals { top: 20%; left: 5%; }
.insights-hero-visual__node--decisions { top: 36%; left: 33%; }
.insights-hero-visual__node--evidence::before, .insights-hero-visual__node--audience::before { background: var(--color-teal); }
.insights-hero-visual__node--systems::before { background: var(--color-orange); }
.insights-hero-visual__foot { justify-content: flex-start; gap: 1rem; color: #bfd0dc; font-size: 0.52rem; letter-spacing: 0.04em; }
.insights-hero-visual__foot span { display: inline-flex; align-items: center; gap: 0.4rem; }
.insights-hero-visual__foot i { width: 5px; height: 5px; border-radius: 50%; background: var(--color-teal); }

.insights-featured { background: white; }
.insights-featured__layout { display: grid; grid-template-columns: minmax(0, 0.72fr) minmax(0, 1.28fr); align-items: center; gap: clamp(2rem, 6vw, 6rem); }
.insights-featured__lead > .insights-eyebrow { margin-bottom: 1.5rem; color: #4e647a; }
.insights-featured__lead .section-heading { max-width: 460px; }
.insights-featured__note { max-width: 430px; margin: 1.25rem 0 0; color: var(--color-muted); font-size: 0.78rem; line-height: 1.65; }
.insights-featured-card { overflow: hidden; border: 1px solid var(--color-border); border-radius: 1rem; background: white; box-shadow: var(--shadow-card); }
.insights-featured-card__art { position: relative; height: 205px; background: #0e2945; }
.insights-featured-card__art svg { width: 100%; height: 100%; fill: none; stroke: rgba(0, 180, 255, 0.75); stroke-width: 1.5; }
.insights-featured-card__art svg circle { fill: #0e2945; stroke: var(--color-teal); stroke-width: 2; }
.insights-featured-card__art svg .insights-featured-card__orbit { fill: none; stroke: rgba(0, 209, 167, 0.28); stroke-dasharray: 4 7; stroke-width: 1; }
.insights-featured-card__art > span { position: absolute; right: 1rem; bottom: 1rem; color: #a8c4d6; font-size: 0.58rem; font-weight: 700; letter-spacing: 0.1em; }
.insights-featured-card__body { padding: clamp(1.2rem, 3vw, 2rem); }
.insights-article-label { display: flex; flex-wrap: wrap; align-items: center; gap: 0.6rem; }
.insights-article-label span:first-child { border-radius: 999px; padding: 0.35rem 0.6rem; background: rgba(0, 180, 255, 0.1); color: #075b80; font-size: 0.65rem; font-weight: 700; }
.insights-article-label span:last-child { color: #65788a; font-size: 0.63rem; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; }
.insights-featured-card h2 { margin: 1rem 0 0; color: var(--color-navy); font-family: var(--font-display); font-size: clamp(1.45rem, 2.6vw, 2rem); letter-spacing: -0.04em; line-height: 1.25; }
.insights-featured-card h2 a { color: inherit; text-decoration: none; }
.insights-featured-card h2 a:hover { color: var(--color-link); }
.insights-featured-card__body > p { margin: 0.75rem 0 0; color: var(--color-muted); font-size: 0.88rem; line-height: 1.75; }
.insights-featured-card__availability { display: inline-flex; align-items: center; gap: 0.4rem; margin-top: 1.15rem; color: var(--color-link); font-size: 0.7rem; font-weight: 700; text-decoration: none; }
.insights-featured-card__availability:hover { color: var(--color-navy); }

.insights-topics { background: var(--color-background); }
.insights-section__header { display: flex; align-items: end; justify-content: space-between; gap: 2rem; margin-bottom: 2.2rem; }
.insights-section__header .section-heading { max-width: 760px; }
.insights-topics__grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0.9rem; margin: 0; padding: 0; list-style: none; }
.insights-topic { position: relative; overflow: hidden; min-height: 230px; border: 1px solid var(--color-border); border-radius: 0.85rem; padding: 1.25rem; background: white; }
.insights-topic > span { color: var(--color-link); font-size: 0.67rem; font-weight: 700; }
.insights-topic h3 { position: relative; z-index: 1; margin: 2rem 0 0; color: var(--color-navy); font-family: var(--font-display); font-size: 1.02rem; }
.insights-topic p { position: relative; z-index: 1; max-width: 370px; margin: 0.5rem 0 0; color: var(--color-muted); font-size: 0.8rem; line-height: 1.65; }
.insights-topic__motif { position: absolute; top: 1.1rem; right: 1.1rem; display: flex; align-items: end; gap: 4px; height: 27px; opacity: 0.85; }
.insights-topic__motif i { width: 5px; border-radius: 3px; background: var(--topic-accent); }
.insights-topic__motif i:nth-child(1) { height: 11px; opacity: 0.55; }
.insights-topic__motif i:nth-child(2) { height: 20px; opacity: 0.75; }
.insights-topic__motif i:nth-child(3) { height: 27px; }
.insights-topic--strategy { --topic-accent: var(--color-link); }
.insights-topic--experience { --topic-accent: #00a98a; }
.insights-topic--performance { --topic-accent: #d89000; }
.insights-topic--technology { --topic-accent: #496bc5; }
.insights-topic--operations { --topic-accent: var(--color-link); }
.insights-topic--growth { --topic-accent: #00a98a; }

.insights-library { background: white; }
.insights-library__status { display: inline-flex; flex: 0 0 auto; align-items: center; gap: 0.5rem; color: #586c80; font-size: 0.62rem; font-weight: 700; letter-spacing: 0.08em; }
.insights-library__status i { width: 7px; height: 7px; border-radius: 50%; background: var(--color-orange); }
.insights-preview-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0.9rem; }
.insights-preview { display: flex; min-height: 285px; flex-direction: column; align-items: flex-start; border: 1px solid var(--color-border); border-radius: 0.85rem; padding: 1.2rem; background: #fff; }
.insights-preview__top { display: flex; width: 100%; align-items: center; justify-content: space-between; gap: 0.4rem; color: #728498; font-size: 0.57rem; font-weight: 700; letter-spacing: 0.08em; }
.insights-preview__symbol { display: grid; width: 29px; height: 29px; place-items: center; border-radius: 50%; background: var(--preview-soft, rgba(0, 180, 255, 0.12)); }
.insights-preview__symbol i { width: 7px; height: 7px; border: 1.5px solid var(--preview-accent, var(--color-link)); border-radius: 50%; box-shadow: 0 0 0 5px color-mix(in srgb, var(--preview-accent, var(--color-link)) 13%, transparent); }
.insights-preview__category { margin-top: 1rem; color: var(--preview-accent, var(--color-link)); font-size: 0.65rem; font-weight: 700; }
.insights-preview h3 { margin: 0.55rem 0 0; color: var(--color-navy); font-family: var(--font-display); font-size: 1.02rem; line-height: 1.4; }
.insights-preview p { margin: 0.55rem 0 1rem; color: var(--color-muted); font-size: 0.78rem; line-height: 1.65; }
.insights-preview__availability { display: inline-flex; align-items: center; gap: 0.35rem; margin-top: auto; border-top: 1px solid var(--color-border); padding-top: 0.8rem; color: var(--color-link); font-size: 0.65rem; font-weight: 700; text-decoration: none; }
.insights-preview__availability:hover { color: var(--color-navy); }
.insights-preview--strategy { --preview-accent: var(--color-link); --preview-soft: rgba(0, 180, 255, 0.12); }
.insights-preview--experience, .insights-preview--journey { --preview-accent: #008b75; --preview-soft: rgba(0, 209, 167, 0.12); }
.insights-preview--performance { --preview-accent: #a06b00; --preview-soft: rgba(255, 176, 32, 0.16); }
.insights-preview--operations { --preview-accent: var(--color-link); --preview-soft: rgba(0, 180, 255, 0.12); }
.insights-preview--measurement { --preview-accent: #5266a8; --preview-soft: rgba(82, 102, 168, 0.12); }

.insights-point { background: var(--color-background); }
.insights-point__links { display: grid; flex: 0 0 auto; gap: 0.75rem; padding-bottom: 0.35rem; }
.insights-point__links a, .insights-solutions__list a { display: inline-flex; align-items: center; gap: 0.4rem; color: var(--color-link); font-size: 0.78rem; font-weight: 700; text-decoration: none; }
.insights-point__links a:hover, .insights-solutions__list a:hover { color: var(--color-navy); }
.insights-principles { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 1rem; margin: 0; padding: 0; list-style: none; }
.insights-principles li { border-top: 2px solid var(--color-teal); padding-top: 0.85rem; }
.insights-principles li > span { color: var(--color-link); font-size: 0.66rem; font-weight: 700; }
.insights-principles h3 { margin: 0.8rem 0 0; color: var(--color-navy); font-family: var(--font-display); font-size: 0.9rem; line-height: 1.45; }
.insights-principles p { margin: 0.5rem 0 0; color: var(--color-muted); font-size: 0.74rem; line-height: 1.65; }

.insights-solutions { background: white; }
.insights-text-link { display: inline-flex; flex: 0 0 auto; align-items: center; gap: 0.4rem; color: var(--color-link); font-size: 0.8rem; font-weight: 700; text-decoration: none; }
.insights-text-link:hover { color: var(--color-navy); }
.insights-solutions__list { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0 1.5rem; margin: 0; padding: 0; list-style: none; }
.insights-solutions__list li { display: grid; grid-template-columns: 32px minmax(0, 1fr) 30px; align-items: start; gap: 0.8rem; border-top: 1px solid var(--color-border); padding: 1.1rem 0; }
.insights-solutions__list li > span { color: var(--color-link); font-size: 0.67rem; font-weight: 700; }
.insights-solutions__list h3 { margin: 0; color: var(--color-navy); font-family: var(--font-display); font-size: 0.91rem; }
.insights-solutions__list p { margin: 0.38rem 0 0; color: var(--color-muted); font-size: 0.76rem; line-height: 1.6; }
.insights-solutions__list a { display: grid; width: 28px; height: 28px; place-items: center; border-radius: 50%; background: rgba(0, 180, 255, 0.1); }

.insights-faq { background: var(--color-background); }
.insights-faq__layout { display: grid; grid-template-columns: minmax(0, 0.75fr) minmax(0, 1.25fr); align-items: start; gap: clamp(2rem, 7vw, 7rem); }
.insights-faq__list { border-top: 1px solid var(--color-border); }
.insights-faq__item { border-bottom: 1px solid var(--color-border); }
.insights-faq__item h3 { margin: 0; font-size: inherit; }
.insights-faq__trigger { display: grid; width: 100%; min-height: 70px; grid-template-columns: 30px minmax(0, 1fr) 22px; align-items: center; gap: 0.75rem; border: 0; padding: 1rem 0; background: transparent; color: var(--color-navy); cursor: pointer; font-family: var(--font-display); font-size: 0.9rem; font-weight: 700; text-align: left; }
.insights-faq__trigger:hover { color: var(--color-link); }
.insights-faq__trigger > span:first-child { color: var(--color-link); font-family: var(--font-body); font-size: 0.64rem; }
.insights-faq__trigger > span:last-child { justify-self: end; color: var(--color-link); font-size: 1.25rem; font-weight: 400; }
.insights-faq__answer { padding: 0 2.5rem 1.2rem; }
.insights-faq__answer p { max-width: 700px; margin: 0; color: var(--color-muted); font-size: 0.83rem; line-height: 1.75; }

.insights-cta { padding-block: clamp(3.5rem, 7vw, 6rem); background: var(--color-navy); color: white; }
.insights-cta__layout { display: grid; grid-template-columns: minmax(0, 1fr) auto; align-items: center; gap: 2rem; }
.insights-cta h2 { max-width: 760px; margin: 1rem 0 0; color: white; font-family: var(--font-display); font-size: clamp(2.1rem, 4.2vw, 3.6rem); letter-spacing: -0.05em; line-height: 1.12; }
.insights-cta__layout > div:first-child > p:last-child { max-width: 650px; margin: 0.9rem 0 0; color: #b9cad8; line-height: 1.7; }
.insights-cta__actions { display: grid; justify-items: start; gap: 1rem; }
.insights-cta__actions > a:last-child { display: inline-flex; align-items: center; gap: 0.4rem; color: #d8e7ef; font-size: 0.82rem; text-decoration: none; }
.insights-cta__actions > a:last-child:hover { color: white; }

@media (max-width: 950px) {
  .insights-hero__layout { grid-template-columns: minmax(0, 1fr); }
  .insights-hero__copy { max-width: 760px; }
  .insights-hero-visual { width: min(100%, 700px); margin-inline: auto; }
  .insights-featured__layout, .insights-faq__layout { grid-template-columns: minmax(0, 1fr); gap: 2.5rem; }
  .insights-featured__lead .section-heading { max-width: 680px; }
  .insights-principles { grid-template-columns: repeat(3, minmax(0, 1fr)); row-gap: 1.8rem; }
  .insights-cta__layout { grid-template-columns: minmax(0, 1fr); }
}

@media (max-width: 650px) {
  .insights-hero { padding-block: 3.5rem; }
  .insights-hero h1 { font-size: clamp(2.5rem, 11vw, 3.7rem); }
  .insights-hero-visual__canvas { height: 300px; }
  .insights-hero-visual__node { padding: 0.4rem 0.55rem; font-size: 0.58rem; }
  .insights-hero-visual__node--strategy { top: 5%; left: 38%; }
  .insights-hero-visual__node--evidence { top: 21%; right: 0; }
  .insights-hero-visual__node--experience { top: 47%; right: 0; }
  .insights-hero-visual__node--systems { right: 2%; bottom: 8%; }
  .insights-hero-visual__node--audience { bottom: 5%; left: 27%; }
  .insights-hero-visual__node--goals { top: 48%; left: 0; }
  .insights-hero-visual__node--signals { top: 20%; left: 0; }
  .insights-hero-visual__core { width: 82px; }
  .insights-hero-visual__core strong { font-size: 0.65rem; }
  .insights-hero-visual__foot { flex-wrap: wrap; gap: 0.5rem 0.8rem; font-size: 0.49rem; }
  .insights-section__header { align-items: flex-start; flex-direction: column; gap: 1rem; }
  .insights-topics__grid, .insights-preview-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .insights-topic { min-height: 220px; }
  .insights-principles { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .insights-solutions__list { grid-template-columns: minmax(0, 1fr); }
  .insights-cta__actions { justify-items: stretch; }
  .insights-cta__actions :deep(.button) { width: 100%; }
}

@media (max-width: 400px) {
  .insights-hero__actions { align-items: flex-start; flex-direction: column; }
  .insights-hero-visual__top { font-size: 0.45rem; letter-spacing: 0.04em; }
  .insights-hero-visual__canvas { height: 275px; }
  .insights-hero-visual__node { padding: 0.35rem 0.42rem; font-size: 0.52rem; }
  .insights-hero-visual__node::before { width: 5px; height: 5px; margin-right: 0.25rem; }
  .insights-hero-visual__node--strategy { top: 4%; left: 35%; }
  .insights-hero-visual__node--evidence { top: 20%; right: 0; }
  .insights-hero-visual__node--experience { top: 46%; right: 0; }
  .insights-hero-visual__node--systems { right: 0; bottom: 6%; }
  .insights-hero-visual__node--audience { bottom: 4%; left: 25%; }
  .insights-hero-visual__node--goals { top: 48%; left: 0; }
  .insights-hero-visual__node--signals { top: 20%; left: 0; }
  .insights-hero-visual__core { width: 72px; }
  .insights-hero-visual__core span { font-size: 0.4rem; }
  .insights-hero-visual__core strong { font-size: 0.57rem; }
  .insights-hero-visual__core small { font-size: 0.48rem; }
  .insights-hero-visual__foot { font-size: 0.44rem; }
  .insights-topics__grid, .insights-preview-grid, .insights-principles { grid-template-columns: minmax(0, 1fr); }
  .insights-topic { min-height: 190px; }
  .insights-preview { min-height: 250px; }
  .insights-faq__trigger { grid-template-columns: 25px minmax(0, 1fr) 20px; gap: 0.5rem; font-size: 0.83rem; }
  .insights-faq__answer { padding-inline: 2rem 0.4rem; }
}

@media (prefers-reduced-motion: reduce) {
  .insights-page *, .insights-page *::before, .insights-page *::after { scroll-behavior: auto !important; transition-duration: 0.01ms !important; }
}
</style>
