<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import Container from '../components/global/Container.vue'
import Button from '../components/global/Button.vue'
import Icon from '../components/global/Icon.vue'
import { getInsightArticle, getInsightWordCount } from '../data/insights.js'

const props = defineProps({
  slug: { type: String, required: true },
})

const article = computed(() => getInsightArticle(props.slug))
const readingMinutes = computed(() => article.value
  ? Math.max(1, Math.ceil(getInsightWordCount(article.value) / 200))
  : 0)
const relatedArticles = computed(() => article.value
  ? article.value.related.map((slug) => getInsightArticle(slug)).filter(Boolean)
  : [])

function articlePath(slug) {
  return `/insights/${slug}`
}
</script>

<template>
  <div v-if="article" class="insight-article-page" :class="`insight-article-page--${article.accent}`">
    <header class="insight-article-hero">
      <Container>
        <nav class="insight-article-breadcrumb" aria-label="Breadcrumb">
          <RouterLink to="/">Home</RouterLink>
          <Icon name="chevron" :size="14" />
          <RouterLink to="/insights">Insights</RouterLink>
          <Icon name="chevron" :size="14" />
          <span aria-current="page">{{ article.title }}</span>
        </nav>
        <div class="insight-article-hero__content">
          <div>
            <span class="insight-article-category">{{ article.category }}</span>
            <h1>{{ article.title }}</h1>
            <p class="insight-article-summary">{{ article.summary }}</p>
            <div class="insight-article-meta">
              <span class="insight-article-draft"><i></i> EDITORIAL DRAFT · NOT PUBLISHED</span>
              <span>{{ readingMinutes }} min read</span>
            </div>
          </div>
          <div class="insight-article-art" role="img" :aria-label="`Editorial illustration for ${article.title}`">
            <svg viewBox="0 0 440 360" aria-hidden="true">
              <path d="M78 260h84v-58h78v-53h78v-67h54" />
              <circle cx="121" cy="260" r="7" /><circle cx="200" cy="202" r="7" />
              <circle cx="278" cy="149" r="7" /><circle cx="356" cy="82" r="7" />
              <circle class="insight-article-art__orbit" cx="220" cy="180" r="139" />
              <circle class="insight-article-art__orbit" cx="220" cy="180" r="99" />
            </svg>
            <span class="insight-article-art__label">BUSINESS CONTEXT / EVIDENCE / DECISION</span>
          </div>
        </div>
        <p class="insight-article-disclosure">
          This is an original educational editorial draft, shown transparently as unpublished content. It does not present client work, research findings, or guaranteed outcomes.
        </p>
      </Container>
    </header>

    <div class="insight-article-main">
      <Container class="insight-article-layout">
        <aside class="insight-article-sidebar">
          <nav class="insight-article-toc" aria-label="On this page">
            <h2>On this page</h2>
            <ol>
              <li v-for="section in article.sections" :key="section.id">
                <a :href="`#${section.id}`">{{ section.heading }}</a>
              </li>
            </ol>
          </nav>
          <div class="insight-article-sidebar__related">
            <span>RELATED CAPABILITY</span>
            <RouterLink :to="article.solution.route">{{ article.solution.title }} <Icon name="arrow" :size="15" /></RouterLink>
          </div>
        </aside>

        <article class="insight-article-content">
          <section v-for="section in article.sections" :id="section.id" :key="section.id" class="insight-article-section" :aria-labelledby="`${section.id}-heading`">
            <h2 :id="`${section.id}-heading`">{{ section.heading }}</h2>
            <p v-for="paragraph in section.paragraphs" :key="paragraph">{{ paragraph }}</p>

            <aside v-if="section.callout" class="insight-article-callout">
              <span>KEY IDEA</span>
              <p>{{ section.callout }}</p>
            </aside>

            <template v-if="section.bullets">
              <h3 v-if="section.listHeading">{{ section.listHeading }}</h3>
              <ul class="insight-article-bullets">
                <li v-for="bullet in section.bullets" :key="bullet">{{ bullet }}</li>
              </ul>
            </template>

            <ol v-if="section.steps" class="insight-article-steps">
              <li v-for="(step, index) in section.steps" :key="step.title">
                <span>0{{ index + 1 }}</span>
                <div><h3>{{ step.title }}</h3><p>{{ step.description }}</p></div>
              </li>
            </ol>

            <div v-if="section.table" class="insight-article-table-wrap" role="region" :aria-label="section.table.caption" tabindex="0">
              <table>
                <caption>{{ section.table.caption }}</caption>
                <thead><tr><th v-for="header in section.table.headers" :key="header" scope="col">{{ header }}</th></tr></thead>
                <tbody>
                  <tr v-for="(row, rowIndex) in section.table.rows" :key="rowIndex">
                    <th scope="row">{{ row[0] }}</th>
                    <td v-for="(cell, cellIndex) in row.slice(1)" :key="cellIndex">{{ cell }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <div class="insight-article-next">
            <span>RELATED CAPABILITY</span>
            <p>Explore how this topic connects to a practical business capability.</p>
            <RouterLink :to="article.solution.route">{{ article.solution.title }} <Icon name="arrow" :size="16" /></RouterLink>
          </div>
        </article>
      </Container>
    </div>

    <section class="insight-related">
      <Container>
        <div class="insight-related__heading">
          <div><span>CONTINUE EXPLORING</span><h2>Related editorial drafts</h2></div>
          <RouterLink to="/insights">All Insights <Icon name="arrow" :size="16" /></RouterLink>
        </div>
        <div class="insight-related__grid">
          <RouterLink v-for="related in relatedArticles" :key="related.slug" :to="articlePath(related.slug)" class="insight-related-card">
            <span>{{ related.category }} · Editorial draft</span>
            <h3>{{ related.title }}</h3>
            <p>{{ related.summary }}</p>
            <span class="insight-related-card__link">Read draft <Icon name="arrow" :size="15" /></span>
          </RouterLink>
        </div>
      </Container>
    </section>

    <section class="insight-article-cta">
      <Container class="insight-article-cta__layout">
        <div>
          <span>TAKE THE THINKING INTO YOUR CONTEXT</span>
          <h2>Every business challenge has its own context.</h2>
          <p>Explore the related capability or start a conversation about the question your business is working through.</p>
        </div>
        <div class="insight-article-cta__actions">
          <Button :to="article.solution.route">Explore {{ article.solution.title }} <Icon name="arrow" :size="16" /></Button>
          <RouterLink to="/contact">Discuss a Business Challenge <Icon name="arrow" :size="15" /></RouterLink>
        </div>
      </Container>
    </section>
    <Container class="insight-back-link"><RouterLink to="/insights"><Icon name="arrow" :size="16" /> Back to Insights</RouterLink></Container>
  </div>

  <section v-else class="insight-not-found">
    <Container class="insight-not-found__content">
      <span>INSIGHT / NOT FOUND</span>
      <h1>This article isn’t available.</h1>
      <p>The article may have moved, or the address may be incorrect. Browse the Insights overview to explore the current editorial library.</p>
      <RouterLink to="/insights">Return to Insights <Icon name="arrow" :size="16" /></RouterLink>
    </Container>
  </section>
</template>

<style scoped>
.insight-article-page { --article-accent: var(--color-link); --article-accent-soft: rgba(0, 180, 255, 0.13); color: var(--color-text); }
.insight-article-page--performance { --article-accent: #a36d00; --article-accent-soft: rgba(255, 176, 32, 0.17); }
.insight-article-page--journey { --article-accent: #008b75; --article-accent-soft: rgba(0, 209, 167, 0.14); }
.insight-article-page--operations { --article-accent: var(--color-link); --article-accent-soft: rgba(0, 180, 255, 0.13); }
.insight-article-page--measurement { --article-accent: #5266a8; --article-accent-soft: rgba(82, 102, 168, 0.13); }

.insight-article-hero { overflow: hidden; padding-block: clamp(2.5rem, 5vw, 4.25rem); background: var(--color-navy); color: white; }
.insight-article-breadcrumb { display: flex; flex-wrap: wrap; align-items: center; gap: 0.45rem; color: #a9bdcc; font-size: 0.75rem; }
.insight-article-breadcrumb a { color: #d1e2ec; text-decoration: none; }
.insight-article-breadcrumb a:hover { color: white; }
.insight-article-breadcrumb > span:last-child { max-width: min(100%, 420px); overflow: hidden; color: #d7e4ec; text-overflow: ellipsis; white-space: nowrap; }

.insight-article-hero__content { display: grid; grid-template-columns: minmax(0, 1fr) minmax(280px, 0.58fr); align-items: center; gap: clamp(2rem, 6vw, 6rem); padding-block: clamp(2.5rem, 5vw, 4.5rem) 2rem; }
.insight-article-category { display: inline-flex; border: 1px solid color-mix(in srgb, var(--article-accent) 40%, transparent); border-radius: 999px; padding: 0.4rem 0.72rem; background: var(--article-accent-soft); color: #d8f2f4; font-size: 0.68rem; font-weight: 700; }
.insight-article-hero h1 { max-width: 840px; margin: 1.15rem 0 0; color: white; font-family: var(--font-display); font-size: clamp(2.5rem, 5vw, 4.5rem); letter-spacing: -0.065em; line-height: 1.05; }
.insight-article-summary { max-width: 760px; margin: 1.2rem 0 0; color: #bacbd8; font-size: clamp(1rem, 1.5vw, 1.13rem); line-height: 1.75; }
.insight-article-meta { display: flex; flex-wrap: wrap; align-items: center; gap: 1rem; margin-top: 1.35rem; color: #b5c7d3; font-size: 0.72rem; }
.insight-article-draft { display: inline-flex; align-items: center; gap: 0.45rem; color: #d6e8ef; font-size: 0.61rem; font-weight: 700; letter-spacing: 0.08em; }
.insight-article-draft i { width: 7px; height: 7px; border-radius: 50%; background: var(--color-orange); }

.insight-article-art { position: relative; display: grid; min-height: 270px; place-items: center; border: 1px solid rgba(160, 197, 219, 0.23); border-radius: 1rem; background: linear-gradient(145deg, rgba(21, 53, 83, 0.88), rgba(9, 29, 52, 0.92)); }
.insight-article-art svg { width: 100%; height: 270px; fill: none; stroke: var(--article-accent); stroke-width: 1.5; }
.insight-article-art svg circle:not(.insight-article-art__orbit) { fill: #132e4a; stroke: var(--color-teal); stroke-width: 2; }
.insight-article-art svg .insight-article-art__orbit { fill: none; stroke: rgba(0, 180, 255, 0.25); stroke-dasharray: 4 7; stroke-width: 1; }
.insight-article-art__label { position: absolute; right: 0.85rem; bottom: 0.8rem; color: #9eb7c8; font-size: 0.53rem; font-weight: 700; letter-spacing: 0.08em; }
.insight-article-disclosure { margin: 0; border-top: 1px solid rgba(170, 198, 215, 0.2); padding-top: 1rem; color: #a8bdcb; font-size: 0.7rem; line-height: 1.6; }

.insight-article-main { background: white; }
.insight-article-layout { display: grid; grid-template-columns: minmax(190px, 0.38fr) minmax(0, 1fr); align-items: start; gap: clamp(2.5rem, 7vw, 7rem); padding-block: clamp(3rem, 7vw, 6rem); }
.insight-article-sidebar { position: sticky; top: 2rem; }
.insight-article-toc { border-left: 2px solid var(--color-border); padding-left: 1rem; }
.insight-article-toc h2 { margin: 0; color: var(--color-navy); font-family: var(--font-display); font-size: 0.84rem; }
.insight-article-toc ol { display: grid; gap: 0.75rem; margin: 1rem 0 0; padding-left: 1rem; color: #8192a2; font-size: 0.72rem; }
.insight-article-toc a { color: #52677d; line-height: 1.5; text-decoration: none; }
.insight-article-toc a:hover { color: var(--color-link); text-decoration: underline; text-underline-offset: 3px; }
.insight-article-sidebar__related { display: grid; gap: 0.65rem; margin-top: 1.5rem; border-top: 1px solid var(--color-border); padding-top: 1rem; }
.insight-article-sidebar__related > span, .insight-article-next > span { color: #75869a; font-size: 0.59rem; font-weight: 700; letter-spacing: 0.09em; }
.insight-article-sidebar__related a, .insight-article-next a { display: inline-flex; align-items: center; gap: 0.45rem; color: var(--color-link); font-size: 0.8rem; font-weight: 700; text-decoration: none; }
.insight-article-sidebar__related a:hover, .insight-article-next a:hover { color: var(--color-navy); }

.insight-article-content { min-width: 0; max-width: 790px; }
.insight-article-section { scroll-margin-top: 2rem; margin-bottom: clamp(2.5rem, 5vw, 4rem); }
.insight-article-section h2 { margin: 0 0 1rem; color: var(--color-navy); font-family: var(--font-display); font-size: clamp(1.45rem, 2.5vw, 2rem); letter-spacing: -0.04em; line-height: 1.24; }
.insight-article-section > p, .insight-article-steps p { margin: 0.85rem 0 0; color: #40546a; font-size: 0.96rem; line-height: 1.85; }
.insight-article-section h3 { margin: 1.5rem 0 0.6rem; color: var(--color-navy); font-family: var(--font-display); font-size: 1rem; }
.insight-article-callout { margin-top: 1.5rem; border-left: 3px solid var(--article-accent); padding: 0.95rem 1.15rem; background: var(--article-accent-soft); }
.insight-article-callout > span { color: var(--article-accent); font-size: 0.6rem; font-weight: 700; letter-spacing: 0.1em; }
.insight-article-callout p { margin: 0.45rem 0 0; color: var(--color-navy); font-family: var(--font-display); font-size: 0.94rem; font-weight: 600; line-height: 1.7; }
.insight-article-bullets { display: grid; gap: 0.65rem; margin: 1rem 0 0; padding-left: 1.25rem; color: #40546a; font-size: 0.91rem; line-height: 1.7; }
.insight-article-bullets li::marker { color: var(--article-accent); }
.insight-article-steps { display: grid; gap: 0; margin: 1.25rem 0 0; padding: 0; list-style: none; }
.insight-article-steps li { display: grid; grid-template-columns: 42px minmax(0, 1fr); gap: 0.75rem; border-top: 1px solid var(--color-border); padding: 1rem 0; }
.insight-article-steps li > span { color: var(--article-accent); font-size: 0.68rem; font-weight: 700; }
.insight-article-steps h3 { margin: 0; font-size: 0.92rem; }
.insight-article-steps p { margin-top: 0.3rem; font-size: 0.84rem; }

.insight-article-table-wrap { overflow-x: auto; margin-top: 1.3rem; border: 1px solid var(--color-border); border-radius: 0.65rem; }
.insight-article-table-wrap:focus-visible { outline: 3px solid var(--color-blue); outline-offset: 3px; }
.insight-article-table-wrap table { width: 100%; min-width: 570px; border-collapse: collapse; font-size: 0.78rem; line-height: 1.6; }
.insight-article-table-wrap caption { padding: 0.8rem 1rem; background: #f2f6f9; color: #52677d; font-size: 0.68rem; text-align: left; }
.insight-article-table-wrap th, .insight-article-table-wrap td { border-top: 1px solid var(--color-border); padding: 0.75rem 0.85rem; text-align: left; vertical-align: top; }
.insight-article-table-wrap thead th { background: #f7f9fc; color: var(--color-navy); font-weight: 700; }
.insight-article-table-wrap tbody th { min-width: 100px; color: var(--color-navy); font-weight: 700; }
.insight-article-table-wrap td { color: #52677d; }

.insight-article-next { margin-top: 3rem; border: 1px solid var(--color-border); border-radius: 0.8rem; padding: 1.2rem; background: #f8fafc; }
.insight-article-next p { margin: 0.45rem 0 0.8rem; color: #52677d; font-size: 0.82rem; line-height: 1.6; }

.insight-related { padding-block: clamp(3.5rem, 7vw, 5rem); background: var(--color-background); }
.insight-related__heading { display: flex; align-items: end; justify-content: space-between; gap: 1.5rem; margin-bottom: 1.5rem; }
.insight-related__heading > div > span { color: #62768b; font-size: 0.61rem; font-weight: 700; letter-spacing: 0.1em; }
.insight-related__heading h2 { margin: 0.5rem 0 0; color: var(--color-navy); font-family: var(--font-display); font-size: clamp(1.5rem, 3vw, 2.2rem); letter-spacing: -0.04em; }
.insight-related__heading > a { display: inline-flex; align-items: center; gap: 0.4rem; color: var(--color-link); font-size: 0.78rem; font-weight: 700; text-decoration: none; }
.insight-related__grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; }
.insight-related-card { display: flex; min-width: 0; flex-direction: column; align-items: flex-start; border: 1px solid var(--color-border); border-radius: 0.8rem; padding: 1.2rem; background: white; text-decoration: none; transition: border-color 160ms ease, transform 160ms ease; }
.insight-related-card:hover { transform: translateY(-2px); border-color: var(--article-accent); }
.insight-related-card > span:first-child { color: #61758a; font-size: 0.62rem; }
.insight-related-card h3 { margin: 0.7rem 0 0; color: var(--color-navy); font-family: var(--font-display); font-size: 1.03rem; line-height: 1.4; }
.insight-related-card p { margin: 0.5rem 0 1rem; color: var(--color-muted); font-size: 0.78rem; line-height: 1.65; }
.insight-related-card .insight-related-card__link { display: inline-flex; align-items: center; gap: 0.4rem; margin-top: auto; color: var(--color-link); font-size: 0.7rem; font-weight: 700; }

.insight-article-cta { padding-block: clamp(3rem, 6vw, 5rem); background: var(--color-navy); color: white; }
.insight-article-cta__layout { display: grid; grid-template-columns: minmax(0, 1fr) auto; align-items: center; gap: 2rem; }
.insight-article-cta__layout > div:first-child > span { color: #a9c4d3; font-size: 0.61rem; font-weight: 700; letter-spacing: 0.1em; }
.insight-article-cta h2 { max-width: 700px; margin: 0.8rem 0 0; color: white; font-family: var(--font-display); font-size: clamp(1.8rem, 3.5vw, 3rem); letter-spacing: -0.05em; line-height: 1.15; }
.insight-article-cta p { max-width: 640px; margin: 0.8rem 0 0; color: #b9cad8; font-size: 0.9rem; line-height: 1.7; }
.insight-article-cta__actions { display: grid; justify-items: start; gap: 0.9rem; }
.insight-article-cta__actions > a:last-child { display: inline-flex; align-items: center; gap: 0.4rem; color: #dce8f0; font-size: 0.77rem; text-decoration: none; }
.insight-article-cta__actions > a:last-child:hover { color: white; }
.insight-back-link { padding-block: 1.4rem; }
.insight-back-link a { display: inline-flex; align-items: center; gap: 0.4rem; color: var(--color-link); font-size: 0.78rem; font-weight: 700; text-decoration: none; }
.insight-back-link a .icon { transform: rotate(180deg); }

.insight-not-found { display: grid; min-height: 65vh; align-items: center; padding-block: 4rem; background: var(--color-background); }
.insight-not-found__content { max-width: 760px; }
.insight-not-found__content > span { color: var(--color-link); font-size: 0.65rem; font-weight: 700; letter-spacing: 0.12em; }
.insight-not-found h1 { margin: 1rem 0 0; color: var(--color-navy); font-family: var(--font-display); font-size: clamp(2.4rem, 6vw, 4rem); letter-spacing: -0.06em; }
.insight-not-found p { max-width: 640px; color: var(--color-muted); line-height: 1.75; }
.insight-not-found a { display: inline-flex; align-items: center; gap: 0.45rem; margin-top: 1rem; color: var(--color-link); font-weight: 700; text-decoration: none; }

@media (max-width: 900px) {
  .insight-article-hero__content { grid-template-columns: minmax(0, 1fr); }
  .insight-article-art { min-height: 230px; }
  .insight-article-art svg { height: 230px; }
  .insight-article-layout { grid-template-columns: minmax(0, 1fr); gap: 2.5rem; }
  .insight-article-sidebar { position: static; display: grid; grid-template-columns: minmax(0, 1fr) auto; align-items: start; gap: 1.5rem; }
  .insight-article-sidebar__related { margin-top: 0; border-top: 0; padding-top: 0.15rem; }
  .insight-article-content { max-width: 800px; }
  .insight-article-cta__layout { grid-template-columns: minmax(0, 1fr); }
}

@media (max-width: 600px) {
  .insight-article-hero { padding-block: 2rem; }
  .insight-article-hero h1 { font-size: clamp(2.3rem, 10vw, 3.5rem); }
  .insight-article-art { min-height: 190px; }
  .insight-article-art svg { height: 190px; }
  .insight-article-art__label { font-size: 0.46rem; }
  .insight-article-sidebar { grid-template-columns: minmax(0, 1fr); }
  .insight-article-toc ol { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.7rem 1rem; }
  .insight-article-table-wrap table { min-width: 540px; }
  .insight-related__heading { align-items: flex-start; flex-direction: column; }
  .insight-related__grid { grid-template-columns: minmax(0, 1fr); }
  .insight-article-cta__actions { justify-items: stretch; }
  .insight-article-cta__actions :deep(.button) { width: 100%; }
}

@media (max-width: 380px) {
  .insight-article-breadcrumb { font-size: 0.68rem; }
  .insight-article-meta { align-items: flex-start; flex-direction: column; gap: 0.55rem; }
  .insight-article-toc ol { grid-template-columns: minmax(0, 1fr); }
  .insight-article-table-wrap table { min-width: 510px; }
  .insight-article-disclosure { font-size: 0.66rem; }
}
</style>
