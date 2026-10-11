<script setup>
import { nextTick, ref } from 'vue'
import { RouterLink } from 'vue-router'
import Container from '../components/global/Container.vue'
import Button from '../components/global/Button.vue'
import SectionHeading from '../components/global/SectionHeading.vue'
import Icon from '../components/global/Icon.vue'

const whatsappNumber = '917489589225'
const whatsappDisplayNumber = '+91 74895 89225'

const interestOptions = [
  'Business Strategy & Discovery',
  'Brand & Digital Experience',
  'Performance Marketing & Growth',
  'Technology Solutions',
  'Automation & Systems',
  'Not Sure Yet — Help Me Identify the Right Starting Point',
]

const stageOptions = [
  'Exploring Options',
  'Defining Requirements',
  'Ready to Discuss Implementation',
  'Improving an Existing System',
]

const contactMethodOptions = ['Email', 'Phone']

const form = ref({
  name: '',
  email: '',
  company: '',
  website: '',
  interest: '',
  challenge: '',
  stage: '',
  preferredContact: '',
  phone: '',
})

const errors = ref({})
const statusMessage = ref('')
const whatsappUrl = ref('')
const isSubmitting = ref(false)
const openQuestion = ref(null)

const questions = [
  {
    question: 'Do I need to know which service I need?',
    answer: 'No. Choose “Not Sure Yet” if that is the best fit. You can describe the situation and what you hope to improve; understanding the right starting point is part of the conversation.',
  },
  {
    question: 'What information should I include?',
    answer: 'Share whatever context feels useful: the outcome you are aiming for, what is currently getting in the way, what you have already tried, and what a useful next step might look like. You can leave optional details blank.',
  },
  {
    question: 'Can I discuss an existing website or advertising setup?',
    answer: 'Yes. You can include a website address and describe the existing website, campaigns, tools, or workflow you would like to discuss. A link is optional.',
  },
  {
    question: 'What happens when I submit the form?',
    answer: 'Your browser prepares a message and opens, or offers a link to open, WhatsApp with the ORBIRIS INDIA number. Review the message in WhatsApp and press Send yourself. This page does not send or confirm delivery of the message.',
  },
  {
    question: 'Does contacting ORBIRIS commit me to purchasing a service?',
    answer: 'No. Starting a conversation does not commit you to purchasing a service. Any potential work, scope, and next steps would need to be discussed and agreed separately.',
  },
]

const exploreLinks = [
  { title: 'Explore our solutions', description: 'Review the capabilities that may support a business challenge.', to: '/solutions' },
  { title: 'How we work', description: 'See the principles and stages that can shape an engagement.', to: '/how-we-work' },
  { title: 'Industries', description: 'Explore industry contexts and the challenges they can involve.', to: '/industries' },
  { title: 'About ORBIRIS', description: 'Learn about the business-first approach and its guiding ideas.', to: '/about' },
]

const nextSteps = [
  { number: '01', title: 'Understand', description: 'We start with the context you choose to share.' },
  { number: '02', title: 'Clarify', description: 'We identify the key questions and priorities to explore.' },
  { number: '03', title: 'Explore', description: 'We outline a possible next step if appropriate.' },
]

function validateWebsite(value) {
  const website = value.trim()
  if (!website) return ''

  try {
    const parsed = new URL(/^[a-z][a-z\d+.-]*:/i.test(website) ? website : `https://${website}`)
    const hasValidHost = parsed.hostname === 'localhost' || parsed.hostname.includes('.') || /^\d{1,3}(\.\d{1,3}){3}$/.test(parsed.hostname)
    if (!['http:', 'https:'].includes(parsed.protocol) || !hasValidHost) return 'Enter a valid website URL, such as https://example.com.'
  } catch {
    return 'Enter a valid website URL, such as https://example.com.'
  }

  return ''
}

function validatePhone(value) {
  const phone = value.trim()
  if (!phone) return ''

  const compactPhone = phone.replace(/[\s().-]/g, '')
  return /^\+?\d{7,15}$/.test(compactPhone)
    ? ''
    : 'Enter a valid phone number using 7 to 15 digits; spaces, +, parentheses, dots, and hyphens are accepted.'
}

function validateForm() {
  const current = form.value
  const nextErrors = {}

  if (!current.name.trim()) nextErrors.name = 'Enter your full name.'
  if (!current.email.trim()) nextErrors.email = 'Enter your work email.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(current.email.trim())) nextErrors.email = 'Enter a valid email address.'
  if (current.website.trim()) {
    const websiteError = validateWebsite(current.website)
    if (websiteError) nextErrors.website = websiteError
  }
  if (!current.interest) nextErrors.interest = 'Choose an area of interest, or select “Not Sure Yet”.'
  const phoneError = validatePhone(current.phone)
  if (phoneError) nextErrors.phone = phoneError
  if (!current.challenge.trim()) nextErrors.challenge = 'Tell us what you would like to improve.'

  errors.value = nextErrors
  return Object.keys(nextErrors).length === 0
}

function buildWhatsAppMessage() {
  const current = form.value
  const optionalCompanyAndWebsite = [
    ['Company / Brand', current.company],
    ['Website', current.website],
  ]
    .filter(([, value]) => value.trim())
    .map(([label, value]) => `${label}: ${value.trim()}`)
  const optionalProjectDetails = [
    ['Project Stage', current.stage],
    ['Preferred Contact Method', current.preferredContact],
    ['Phone', current.phone],
  ]
    .filter(([, value]) => value.trim())
    .map(([label, value]) => `${label}: ${value.trim()}`)

  return [
    'Hello ORBIRIS INDIA,',
    '',
    'I would like to start a business conversation.',
    '',
    `Name: ${current.name.trim()}`,
    `Work Email: ${current.email.trim()}`,
    ...optionalCompanyAndWebsite,
    `Area of Interest: ${current.interest}`,
    ...optionalProjectDetails,
    '',
    'Business Challenge:',
    current.challenge.trim(),
    '',
    'Please let me know the appropriate next step.',
  ].join('\n')
}

async function submitForm() {
  if (isSubmitting.value) return
  isSubmitting.value = true
  statusMessage.value = ''
  whatsappUrl.value = ''

  try {
    if (!validateForm()) {
      statusMessage.value = 'Please review the highlighted fields before continuing.'
      await nextTick()
      const firstInvalidField = Object.keys(errors.value)[0]
      document.getElementById(`contact-${firstInvalidField}`)?.focus()
      return
    }

    const message = buildWhatsAppMessage()
    whatsappUrl.value = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    statusMessage.value = 'WhatsApp should open in a new tab. Review the prepared message there and press Send yourself. If a new tab did not open, use the link below. This page does not confirm message delivery.'

    const newWindow = window.open(whatsappUrl.value, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  } finally {
    isSubmitting.value = false
  }
}

function clearFieldError(field) {
  if (errors.value[field]) {
    const nextErrors = { ...errors.value }
    delete nextErrors[field]
    errors.value = nextErrors
  }
}

function toggleQuestion(index) {
  openQuestion.value = openQuestion.value === index ? null : index
}

function onQuestionKeydown(event, index) {
  if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return

  event.preventDefault()
  const buttons = [...event.currentTarget.closest('.contact-faq__list').querySelectorAll('.contact-faq__trigger')]
  const nextIndex = event.key === 'Home'
    ? 0
    : event.key === 'End'
      ? buttons.length - 1
      : (index + (event.key === 'ArrowDown' ? 1 : -1) + buttons.length) % buttons.length
  buttons[nextIndex]?.focus()
}
</script>

<template>
  <div class="contact-page">
    <section class="contact-hero">
      <Container class="contact-hero__layout">
        <div class="contact-hero__copy">
          <p class="contact-eyebrow"><span></span> ORBIRIS INDIA <i></i> BUSINESS CONVERSATION</p>
          <h1>Let's Start With the Challenge.</h1>
          <p class="contact-hero__description">
            You don't need a perfectly defined brief—we can start by understanding your business situation and identifying a useful next step.
          </p>
          <div class="contact-hero__actions">
            <Button href="#contact-form">Start Your Enquiry <Icon name="arrow" :size="16" /></Button>
            <Button to="/solutions" variant="outline">Explore Our Solutions</Button>
          </div>
          <div class="contact-hero__note"><span></span><p>Share as much or as little detail as you feel comfortable sharing.</p></div>
        </div>

        <div class="contact-orbit" role="img" aria-label="Connected points representing a business challenge, shared understanding, and a possible next step">
          <svg viewBox="0 0 540 420" aria-hidden="true">
            <path class="contact-orbit__path contact-orbit__path--outer" d="M78 214c0-92 82-166 184-166s200 63 200 155-89 180-198 180S78 307 78 214Z" />
            <path class="contact-orbit__path contact-orbit__path--inner" d="M129 210c0-66 56-119 129-119s151 45 151 112-69 131-151 131-129-56-129-124Z" />
            <path class="contact-orbit__connector" d="M112 212h160l136-87M272 212l133 95" />
            <circle class="contact-orbit__dot contact-orbit__dot--blue" cx="112" cy="212" r="6" />
            <circle class="contact-orbit__dot contact-orbit__dot--teal" cx="408" cy="125" r="6" />
            <circle class="contact-orbit__dot contact-orbit__dot--orange" cx="405" cy="307" r="5" />
          </svg>
          <div class="contact-orbit__center"><span>START WITH</span><strong>THE CHALLENGE</strong><small>then explore what fits</small></div>
          <span class="contact-orbit__label contact-orbit__label--context">BUSINESS CONTEXT</span>
          <span class="contact-orbit__label contact-orbit__label--clarity">SHARED CLARITY</span>
          <span class="contact-orbit__label contact-orbit__label--next">POSSIBLE NEXT STEP</span>
          <div class="contact-orbit__footer"><span><i></i> LISTEN</span><span><i></i> CLARIFY</span><span><i></i> EXPLORE</span></div>
        </div>
      </Container>
      <div class="contact-hero__grid" aria-hidden="true"></div>
    </section>

    <section id="contact-form" class="contact-form-section">
      <Container>
        <div class="contact-form-section__intro">
          <SectionHeading
            eyebrow="Start a conversation"
            title="Tell us what you are trying to improve."
            description="Share the details that feel relevant. Your browser will prepare a message for you to review and send through WhatsApp."
          />
          <div class="contact-form-section__number">
            <span class="contact-form-section__whatsapp-icon" aria-hidden="true">W</span>
            <div><span>WHATSAPP</span><strong>{{ whatsappDisplayNumber }}</strong></div>
          </div>
        </div>

        <div class="contact-form-layout">
          <form class="contact-form" novalidate @submit.prevent="submitForm">
            <div class="contact-form__grid">
              <div class="contact-field">
                <label for="contact-name">Full Name <span aria-hidden="true">*</span></label>
                <input id="contact-name" v-model="form.name" name="name" autocomplete="name" type="text" required :aria-invalid="Boolean(errors.name)" :aria-describedby="errors.name ? 'contact-name-error' : undefined" @input="clearFieldError('name')">
                <p v-if="errors.name" id="contact-name-error" class="contact-field__error">{{ errors.name }}</p>
              </div>

              <div class="contact-field">
                <label for="contact-email">Work Email <span aria-hidden="true">*</span></label>
                <input id="contact-email" v-model="form.email" name="email" autocomplete="email" type="email" inputmode="email" required :aria-invalid="Boolean(errors.email)" :aria-describedby="errors.email ? 'contact-email-error' : undefined" @input="clearFieldError('email')">
                <p v-if="errors.email" id="contact-email-error" class="contact-field__error">{{ errors.email }}</p>
              </div>

              <div class="contact-field">
                <label for="contact-company">Company / Brand <span class="contact-field__optional">(optional)</span></label>
                <input id="contact-company" v-model="form.company" name="company" autocomplete="organization" type="text">
              </div>

              <div class="contact-field">
                <label for="contact-website">Website URL <span class="contact-field__optional">(optional)</span></label>
                <input id="contact-website" v-model="form.website" name="website" autocomplete="url" type="url" inputmode="url" :aria-invalid="Boolean(errors.website)" :aria-describedby="errors.website ? 'contact-website-error' : undefined" @input="clearFieldError('website')">
                <p v-if="errors.website" id="contact-website-error" class="contact-field__error">{{ errors.website }}</p>
              </div>

              <div class="contact-field">
                <label for="contact-interest">Primary Area of Interest <span aria-hidden="true">*</span></label>
                <select id="contact-interest" v-model="form.interest" name="interest" required :aria-invalid="Boolean(errors.interest)" :aria-describedby="errors.interest ? 'contact-interest-error' : undefined" @change="clearFieldError('interest')">
                  <option disabled value="">Select an area</option>
                  <option v-for="option in interestOptions" :key="option" :value="option">{{ option }}</option>
                </select>
                <p v-if="errors.interest" id="contact-interest-error" class="contact-field__error">{{ errors.interest }}</p>
              </div>

              <div class="contact-field">
                <label for="contact-stage">Project Stage <span class="contact-field__optional">(optional)</span></label>
                <select id="contact-stage" v-model="form.stage" name="stage">
                  <option value="">Choose if known</option>
                  <option v-for="option in stageOptions" :key="option" :value="option">{{ option }}</option>
                </select>
              </div>

              <fieldset class="contact-field contact-field--full">
                <legend>Preferred Contact Method <span class="contact-field__optional">(optional)</span></legend>
                <div class="contact-radio-group">
                  <label v-for="method in contactMethodOptions" :key="method" class="contact-radio">
                    <input v-model="form.preferredContact" type="radio" name="preferredContact" :value="method">
                    <span>{{ method }}</span>
                  </label>
                </div>
              </fieldset>

              <div class="contact-field contact-field--full">
                <label for="contact-phone">Phone Number <span class="contact-field__optional">(optional)</span></label>
                <input id="contact-phone" v-model="form.phone" name="phone" autocomplete="tel" type="tel" inputmode="tel" :aria-invalid="Boolean(errors.phone)" :aria-describedby="errors.phone ? 'contact-phone-error' : undefined" @input="clearFieldError('phone')">
                <p v-if="errors.phone" id="contact-phone-error" class="contact-field__error">{{ errors.phone }}</p>
              </div>

              <div class="contact-field contact-field--full contact-challenge">
                <label for="contact-challenge">What Would You Like to Improve? <span aria-hidden="true">*</span></label>
                <p id="contact-challenge-hint" class="contact-field__hint">You can share as much or as little as you feel comfortable sharing.</p>
                <textarea id="contact-challenge" v-model="form.challenge" name="challenge" rows="6" required :aria-invalid="Boolean(errors.challenge)" :aria-describedby="errors.challenge ? 'contact-challenge-hint contact-challenge-error' : 'contact-challenge-hint'" @input="clearFieldError('challenge')"></textarea>
                <p v-if="errors.challenge" id="contact-challenge-error" class="contact-field__error">{{ errors.challenge }}</p>
                <div class="contact-challenge__prompts">
                  <span>What are you trying to achieve?</span>
                  <span>What is currently preventing progress?</span>
                  <span>What have you already tried?</span>
                  <span>What would a useful next step look like?</span>
                </div>
              </div>
            </div>

            <p class="contact-form__privacy">Submitting prepares a WhatsApp message in your browser. Review it in WhatsApp and choose whether to send it. This page does not transmit your details to an ORBIRIS database or confirm delivery.</p>

            <button class="contact-form__submit" type="submit" :disabled="isSubmitting">
              {{ isSubmitting ? 'Preparing Message…' : 'Prepare WhatsApp Message' }}
              <Icon name="arrow" :size="17" />
            </button>

            <p class="contact-form__status" role="status" aria-live="polite" aria-atomic="true">{{ statusMessage }}</p>
            <a v-if="whatsappUrl" class="contact-form__fallback" :href="whatsappUrl" target="_blank" rel="noopener noreferrer">
              If WhatsApp did not open, open your prepared message <Icon name="arrow" :size="15" />
            </a>
          </form>

          <aside class="contact-form-aside" aria-label="Contact details and what happens next">
            <div class="contact-form-aside__whatsapp">
              <span class="contact-form-aside__eyebrow">PREFER TO OPEN WHATSAPP?</span>
              <strong>WhatsApp: {{ whatsappDisplayNumber }}</strong>
              <p>Open a chat with ORBIRIS INDIA. You can also prepare a message using the form.</p>
              <a :href="`https://wa.me/${whatsappNumber}`" target="_blank" rel="noopener noreferrer">Chat with ORBIRIS on WhatsApp <Icon name="arrow" :size="15" /></a>
            </div>

            <div class="contact-next">
              <h2>What happens next</h2>
              <ol>
                <li v-for="step in nextSteps" :key="step.number"><span>{{ step.number }}</span><div><h3>{{ step.title }}</h3><p>{{ step.description }}</p></div></li>
              </ol>
              <p class="contact-next__note">The steps and timing depend on the details and any next steps agreed together.</p>
            </div>
          </aside>
        </div>
      </Container>
    </section>

    <section class="contact-explore">
      <Container>
        <div class="contact-section-heading">
          <SectionHeading
            eyebrow="Other ways to explore"
            title="Find a little more context."
            description="Explore the approach and capabilities before, or alongside, starting a conversation."
          />
        </div>
        <ul class="contact-explore__grid">
          <li v-for="link in exploreLinks" :key="link.to">
            <RouterLink :to="link.to"><span>{{ link.title }}</span><p>{{ link.description }}</p><Icon name="arrow" :size="17" /></RouterLink>
          </li>
        </ul>
        <a
          class="contact-instagram"
          href="https://www.instagram.com/orbirisindia"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit ORBIRIS INDIA on Instagram, @orbirisindia (opens in a new tab)"
        >Instagram <strong>@orbirisindia</strong></a>
      </Container>
    </section>

    <section class="contact-faq">
      <Container class="contact-faq__layout">
        <SectionHeading
          eyebrow="Frequently asked questions"
          title="Before you get in touch."
          description="A few helpful details about starting a conversation."
        />
        <div class="contact-faq__list">
          <article v-for="(item, index) in questions" :key="item.question" class="contact-faq__item">
            <h3>
              <button
                :id="`contact-question-${index}`"
                class="contact-faq__trigger"
                type="button"
                :aria-expanded="openQuestion === index"
                :aria-controls="`contact-answer-${index}`"
                @click="toggleQuestion(index)"
                @keydown="onQuestionKeydown($event, index)"
              >
                <span>0{{ index + 1 }}</span><span>{{ item.question }}</span><span aria-hidden="true">{{ openQuestion === index ? '−' : '+' }}</span>
              </button>
            </h3>
            <div v-show="openQuestion === index" :id="`contact-answer-${index}`" class="contact-faq__answer" role="region" :aria-labelledby="`contact-question-${index}`"><p>{{ item.answer }}</p></div>
          </article>
        </div>
      </Container>
    </section>

    <section class="contact-close">
      <Container class="contact-close__layout">
        <div><p class="contact-eyebrow"><span></span> ORBIRIS INDIA</p><h2>Clarity Begins With a Conversation.</h2><p>Start with what you know. The next question can be worked out together.</p></div>
        <a :href="`https://wa.me/${whatsappNumber}`" target="_blank" rel="noopener noreferrer">Chat with ORBIRIS on WhatsApp <Icon name="arrow" :size="16" /></a>
      </Container>
    </section>
  </div>
</template>

<style scoped>
.contact-page { color: var(--color-text); }
.contact-eyebrow { display: flex; align-items: center; gap: 0.65rem; margin: 0; color: #c2d2dd; font-size: 0.66rem; font-weight: 700; letter-spacing: 0.14em; }
.contact-eyebrow > span { width: 7px; height: 7px; border-radius: 50%; background: var(--color-teal); box-shadow: 0 0 0 5px rgba(0, 209, 167, 0.13); }
.contact-eyebrow > i { width: 3px; height: 3px; border-radius: 50%; background: var(--color-blue); }

.contact-hero { position: relative; overflow: hidden; padding-block: clamp(4rem, 8vw, 7rem); background: var(--color-dark); color: white; }
.contact-hero__layout { position: relative; z-index: 1; display: grid; grid-template-columns: minmax(0, 1fr) minmax(390px, 0.9fr); align-items: center; gap: clamp(2rem, 6vw, 6rem); }
.contact-hero__copy { min-width: 0; }
.contact-hero__copy h1 { max-width: 680px; margin: 1.3rem 0 0; color: white; font-family: var(--font-display); font-size: clamp(2.8rem, 5.8vw, 5rem); letter-spacing: -0.065em; line-height: 1.02; }
.contact-hero__description { max-width: 600px; margin: 1.35rem 0 0; color: #bdcdda; font-size: 1rem; line-height: 1.8; }
.contact-hero__actions { display: flex; flex-wrap: wrap; gap: 0.8rem; margin-top: 1.8rem; }
.contact-hero :deep(.button--outline) { border-color: rgba(207, 228, 240, 0.36); background: transparent; color: white; }
.contact-hero :deep(.button--outline:hover) { border-color: var(--color-teal); }
.contact-hero__note { display: flex; align-items: flex-start; gap: 0.65rem; margin-top: 1.4rem; }
.contact-hero__note > span { flex: 0 0 auto; width: 7px; height: 7px; margin-top: 0.4rem; border-radius: 50%; background: var(--color-teal); }
.contact-hero__note p { margin: 0; color: #94aaba; font-size: 0.78rem; line-height: 1.6; }
.contact-hero__grid { position: absolute; inset: 0; opacity: 0.09; pointer-events: none; background-image: linear-gradient(rgba(133, 180, 208, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(133, 180, 208, 0.2) 1px, transparent 1px); background-size: 52px 52px; mask-image: linear-gradient(90deg, transparent, black 70%); }

.contact-orbit { position: relative; width: 100%; max-width: 570px; height: clamp(320px, 35vw, 410px); margin-inline: auto; border: 1px solid rgba(160, 197, 219, 0.2); border-radius: 1rem; background: linear-gradient(145deg, rgba(17, 43, 68, 0.82), rgba(8, 21, 37, 0.9)); }
.contact-orbit > svg { position: absolute; inset: 0; width: 100%; height: 100%; fill: none; }
.contact-orbit__path { stroke: rgba(0, 180, 255, 0.42); stroke-width: 1; }
.contact-orbit__path--outer { stroke: rgba(0, 209, 167, 0.35); stroke-dasharray: 3 7; }
.contact-orbit__path--inner { stroke: rgba(0, 180, 255, 0.35); }
.contact-orbit__connector { stroke: rgba(132, 191, 218, 0.4); stroke-dasharray: 4 6; }
.contact-orbit__dot { stroke: #0c233c; stroke-width: 4; }
.contact-orbit__dot--blue { fill: var(--color-blue); }
.contact-orbit__dot--teal { fill: var(--color-teal); }
.contact-orbit__dot--orange { fill: var(--color-orange); }
.contact-orbit__center { position: absolute; top: 50%; left: 50%; display: grid; width: clamp(130px, 16vw, 162px); aspect-ratio: 1; align-content: center; justify-items: center; border: 1px solid rgba(0, 209, 167, 0.55); border-radius: 50%; background: #102b46; box-shadow: 0 0 0 10px rgba(0, 209, 167, 0.045); transform: translate(-50%, -50%); }
.contact-orbit__center > span { color: #a8bfce; font-size: 0.53rem; letter-spacing: 0.12em; }
.contact-orbit__center strong { margin-top: 0.27rem; color: white; font-family: var(--font-display); font-size: 0.82rem; text-align: center; }
.contact-orbit__center small { margin-top: 0.3rem; color: #93aabb; font-size: 0.6rem; }
.contact-orbit__label { position: absolute; border: 1px solid rgba(151, 187, 209, 0.3); border-radius: 999px; padding: 0.45rem 0.6rem; background: #112a43; color: #dbe7ee; font-size: clamp(0.48rem, 0.76vw, 0.6rem); font-weight: 700; letter-spacing: 0.05em; white-space: nowrap; }
.contact-orbit__label--context { top: 18%; left: 4%; }
.contact-orbit__label--clarity { top: 17%; right: 5%; }
.contact-orbit__label--next { right: 5%; bottom: 17%; }
.contact-orbit__footer { position: absolute; right: 1rem; bottom: 0.8rem; left: 1rem; display: flex; flex-wrap: wrap; gap: 0.55rem 1rem; color: #b3c7d4; font-size: 0.53rem; font-weight: 700; letter-spacing: 0.06em; }
.contact-orbit__footer span { display: inline-flex; align-items: center; gap: 0.4rem; }
.contact-orbit__footer i { width: 5px; height: 5px; border-radius: 50%; background: var(--color-teal); }
.contact-hero :deep(.button:focus-visible) { outline-color: var(--color-teal); }

.contact-form-section { padding-block: clamp(4rem, 8vw, 7rem); background: var(--color-background); scroll-margin-top: 5rem; }
.contact-form-section__intro { display: flex; align-items: end; justify-content: space-between; gap: 2rem; margin-bottom: 2rem; }
.contact-form-section__intro .section-heading { max-width: 720px; }
.contact-form-section__number { display: flex; flex: 0 0 auto; align-items: center; gap: 0.75rem; border: 1px solid var(--color-border); border-radius: 0.7rem; padding: 0.8rem 1rem; background: white; }
.contact-form-section__whatsapp-icon { display: grid; width: 36px; height: 36px; place-items: center; border-radius: 50%; background: rgba(0, 209, 167, 0.13); color: #007e67; font-family: var(--font-display); font-weight: 800; }
.contact-form-section__number > div { display: grid; gap: 0.2rem; }
.contact-form-section__number > div span { color: var(--color-muted); font-size: 0.55rem; font-weight: 700; letter-spacing: 0.1em; }
.contact-form-section__number strong { color: var(--color-navy); font-family: var(--font-display); font-size: 0.86rem; }
.contact-form-layout { display: grid; grid-template-columns: minmax(0, 1.45fr) minmax(260px, 0.65fr); align-items: start; gap: 1.2rem; }
.contact-form { min-width: 0; border: 1px solid var(--color-border); border-radius: 0.9rem; padding: clamp(1rem, 3vw, 2rem); background: white; box-shadow: 0 10px 36px rgba(11, 31, 59, 0.045); }
.contact-form__grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.2rem 1rem; }
.contact-field { display: flex; min-width: 0; flex-direction: column; gap: 0.45rem; margin: 0; border: 0; padding: 0; }
.contact-field--full { grid-column: 1 / -1; }
.contact-field > label, .contact-field > legend { color: var(--color-navy); font-size: 0.77rem; font-weight: 700; }
.contact-field > label > span[aria-hidden="true"] { color: #b23b36; }
.contact-field__optional { color: var(--color-muted); font-size: 0.69rem; font-weight: 400; }
.contact-field input:not([type="radio"]), .contact-field select, .contact-field textarea { width: 100%; min-width: 0; min-height: 48px; border: 1px solid #c8d3dd; border-radius: 0.45rem; padding: 0.7rem 0.78rem; background: #fff; color: var(--color-text); font: inherit; font-size: 0.86rem; }
.contact-field textarea { min-height: 150px; resize: vertical; line-height: 1.6; }
.contact-field input::placeholder, .contact-field textarea::placeholder { color: #718397; }
.contact-field input:focus-visible, .contact-field select:focus-visible, .contact-field textarea:focus-visible, .contact-radio input:focus-visible { outline: 3px solid rgba(0, 180, 255, 0.46); outline-offset: 2px; border-color: var(--color-link); }
.contact-field [aria-invalid="true"] { border-color: #b23b36 !important; }
.contact-field__error { margin: 0; color: #a52c28; font-size: 0.75rem; line-height: 1.5; }
.contact-field__hint { margin: 0 0 0.15rem; color: var(--color-muted); font-size: 0.74rem; line-height: 1.55; }
.contact-radio-group { display: flex; flex-wrap: wrap; gap: 0.65rem; }
.contact-radio { display: inline-flex; min-height: 44px; align-items: center; gap: 0.55rem; border: 1px solid var(--color-border); border-radius: 0.45rem; padding: 0.55rem 0.8rem; color: #374e63; font-size: 0.81rem; cursor: pointer; }
.contact-radio:has(input:checked) { border-color: #07856f; background: rgba(0, 209, 167, 0.075); }
.contact-radio input { width: 17px; height: 17px; margin: 0; accent-color: #087b68; }
.contact-challenge { padding-top: 0.1rem; }
.contact-challenge__prompts { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: 0.25rem; }
.contact-challenge__prompts span { border-radius: 999px; padding: 0.4rem 0.58rem; background: #f0f5f8; color: #4e6277; font-size: 0.66rem; line-height: 1.4; }
.contact-form__privacy { margin: 1.2rem 0 0; color: var(--color-muted); font-size: 0.72rem; line-height: 1.65; }
.contact-form__submit { display: inline-flex; min-height: 50px; align-items: center; justify-content: center; gap: 0.6rem; margin-top: 1rem; border: 1px solid var(--color-navy); border-radius: 0.45rem; padding: 0.75rem 1rem; background: var(--color-navy); color: white; cursor: pointer; font-size: 0.83rem; font-weight: 700; }
.contact-form__submit:hover:not(:disabled) { border-color: var(--color-link); background: #102d4d; }
.contact-form__submit:disabled { cursor: wait; opacity: 0.72; }
.contact-form__status { min-height: 0; margin: 0.8rem 0 0; color: #254a5b; font-size: 0.78rem; line-height: 1.65; }
.contact-form__status:empty { display: none; }
.contact-form__fallback { display: inline-flex; align-items: center; gap: 0.4rem; margin-top: 0.4rem; color: var(--color-link); font-size: 0.8rem; font-weight: 700; line-height: 1.55; }
.contact-form__fallback:hover { color: var(--color-navy); }

.contact-form-aside { display: grid; gap: 1rem; }
.contact-form-aside__whatsapp, .contact-next { border: 1px solid var(--color-border); border-radius: 0.8rem; padding: 1.2rem; background: white; }
.contact-form-aside__whatsapp { border-top: 3px solid var(--color-teal); }
.contact-form-aside__eyebrow { color: var(--color-muted); font-size: 0.58rem; font-weight: 700; letter-spacing: 0.11em; }
.contact-form-aside__whatsapp > strong { display: block; margin-top: 0.7rem; color: var(--color-navy); font-family: var(--font-display); font-size: 1rem; }
.contact-form-aside__whatsapp p { margin: 0.5rem 0 0.9rem; color: var(--color-muted); font-size: 0.77rem; line-height: 1.6; }
.contact-form-aside__whatsapp > a { display: inline-flex; align-items: center; gap: 0.4rem; color: var(--color-link); font-size: 0.76rem; font-weight: 700; line-height: 1.5; text-decoration: none; }
.contact-form-aside__whatsapp > a:hover { color: var(--color-navy); text-decoration: underline; }
.contact-next h2 { margin: 0; color: var(--color-navy); font-family: var(--font-display); font-size: 1rem; }
.contact-next ol { display: grid; margin: 1rem 0 0; padding: 0; list-style: none; }
.contact-next li { display: grid; grid-template-columns: 30px minmax(0, 1fr); gap: 0.7rem; border-top: 1px solid #e8edf1; padding: 0.85rem 0; }
.contact-next li > span { color: var(--color-link); font-size: 0.63rem; font-weight: 700; }
.contact-next li h3 { margin: 0; color: var(--color-navy); font-family: var(--font-display); font-size: 0.81rem; }
.contact-next li p { margin: 0.3rem 0 0; color: var(--color-muted); font-size: 0.72rem; line-height: 1.55; }
.contact-next__note { margin: 0.5rem 0 0; color: var(--color-muted); font-size: 0.67rem; line-height: 1.55; }

.contact-explore { padding-block: clamp(4rem, 7vw, 6rem); background: white; }
.contact-section-heading { margin-bottom: 2rem; }
.contact-explore__grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 0.8rem; margin: 0; padding: 0; list-style: none; }
.contact-explore__grid a { position: relative; display: flex; min-height: 160px; flex-direction: column; align-items: flex-start; border: 1px solid var(--color-border); border-radius: 0.7rem; padding: 1rem; background: white; color: inherit; text-decoration: none; }
.contact-explore__grid a:hover { border-color: var(--color-blue); box-shadow: 0 9px 24px rgba(11, 31, 59, 0.06); }
.contact-explore__grid a > span { color: var(--color-navy); font-family: var(--font-display); font-size: 0.87rem; font-weight: 700; }
.contact-explore__grid a p { margin: 0.5rem 1.2rem 1rem 0; color: var(--color-muted); font-size: 0.73rem; line-height: 1.6; }
.contact-explore__grid a .icon { margin-top: auto; color: var(--color-link); }
.contact-instagram { display: inline-flex; min-height: 44px; align-items: center; gap: 0.4rem; margin-top: 1.1rem; color: var(--color-link); font-size: 0.82rem; text-decoration: none; }
.contact-instagram:hover { color: var(--color-navy); text-decoration: underline; }
.contact-instagram strong { font-weight: 700; }

.contact-faq { padding-block: clamp(4rem, 7vw, 6rem); background: var(--color-background); }
.contact-faq__layout { display: grid; grid-template-columns: minmax(0, 0.75fr) minmax(0, 1.25fr); align-items: start; gap: clamp(2rem, 7vw, 7rem); }
.contact-faq__list { border-top: 1px solid var(--color-border); }
.contact-faq__item { border-bottom: 1px solid var(--color-border); }
.contact-faq__item h3 { margin: 0; font-size: inherit; }
.contact-faq__trigger { display: grid; width: 100%; min-height: 68px; grid-template-columns: 30px minmax(0, 1fr) 22px; align-items: center; gap: 0.7rem; border: 0; padding: 0.9rem 0; background: transparent; color: var(--color-navy); cursor: pointer; font-family: var(--font-display); font-size: 0.87rem; font-weight: 700; text-align: left; }
.contact-faq__trigger:hover { color: var(--color-link); }
.contact-faq__trigger > span:first-child { color: var(--color-link); font-family: var(--font-body); font-size: 0.63rem; }
.contact-faq__trigger > span:last-child { justify-self: end; color: var(--color-link); font-size: 1.2rem; font-weight: 400; }
.contact-faq__answer { padding: 0 2.4rem 1rem; }
.contact-faq__answer p { max-width: 680px; margin: 0; color: var(--color-muted); font-size: 0.8rem; line-height: 1.75; }

.contact-close { padding-block: clamp(3.2rem, 6vw, 5rem); background: var(--color-navy); color: white; }
.contact-close__layout { display: flex; align-items: center; justify-content: space-between; gap: 2rem; }
.contact-close h2 { margin: 0.9rem 0 0; color: white; font-family: var(--font-display); font-size: clamp(1.9rem, 4vw, 3rem); letter-spacing: -0.05em; line-height: 1.1; }
.contact-close__layout > div > p:last-child { margin: 0.65rem 0 0; color: #b9cad8; font-size: 0.84rem; line-height: 1.65; }
.contact-close__layout > a { display: inline-flex; flex: 0 0 auto; align-items: center; gap: 0.5rem; border: 1px solid rgba(0, 209, 167, 0.55); border-radius: 0.45rem; padding: 0.8rem 0.95rem; color: white; font-size: 0.78rem; font-weight: 700; line-height: 1.45; text-decoration: none; }
.contact-close__layout > a:hover { border-color: var(--color-teal); background: rgba(0, 209, 167, 0.1); }
.contact-close .contact-eyebrow { color: #c2d2dd; }

@media (max-width: 1050px) {
  .contact-hero__layout { grid-template-columns: minmax(0, 1fr); gap: 2rem; }
  .contact-hero__copy { max-width: 760px; }
  .contact-orbit { width: min(100%, 650px); }
  .contact-form-layout { grid-template-columns: minmax(0, 1fr); }
  .contact-form-aside { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .contact-faq__layout { grid-template-columns: minmax(0, 1fr); gap: 2rem; }
  .contact-explore__grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

@media (max-width: 700px) {
  .contact-hero { padding-block: 3.5rem; }
  .contact-hero__copy h1 { font-size: clamp(2.55rem, 11vw, 4rem); }
  .contact-orbit { height: 300px; }
  .contact-orbit__label { font-size: 0.48rem; padding: 0.38rem 0.45rem; }
  .contact-orbit__label--context { top: 16%; left: 2%; }
  .contact-orbit__label--clarity { top: 16%; right: 2%; }
  .contact-orbit__label--next { right: 2%; bottom: 19%; }
  .contact-form-section__intro { align-items: flex-start; flex-direction: column; gap: 1rem; }
  .contact-form-aside { grid-template-columns: minmax(0, 1fr); }
  .contact-close__layout { align-items: flex-start; flex-direction: column; }
  .contact-close__layout > a { width: 100%; justify-content: center; }
}

@media (max-width: 430px) {
  .contact-hero__actions { align-items: stretch; flex-direction: column; }
  .contact-hero__actions :deep(.button) { width: 100%; }
  .contact-orbit { height: 260px; }
  .contact-orbit__center { width: 112px; }
  .contact-orbit__center > span { font-size: 0.47rem; }
  .contact-orbit__center strong { font-size: 0.7rem; }
  .contact-orbit__center small { font-size: 0.53rem; }
  .contact-orbit__label { font-size: 0.42rem; letter-spacing: 0.025em; }
  .contact-orbit__footer { right: 0.55rem; left: 0.55rem; gap: 0.5rem; font-size: 0.45rem; }
  .contact-form__grid { grid-template-columns: minmax(0, 1fr); }
  .contact-field--full { grid-column: auto; }
  .contact-explore__grid { grid-template-columns: minmax(0, 1fr); }
  .contact-explore__grid a { min-height: 130px; }
  .contact-faq__trigger { grid-template-columns: 25px minmax(0, 1fr) 20px; gap: 0.5rem; font-size: 0.82rem; }
  .contact-faq__answer { padding-inline: 2rem 0.35rem; }
}

@media (prefers-reduced-motion: reduce) {
  .contact-page *, .contact-page *::before, .contact-page *::after { scroll-behavior: auto !important; transition-duration: 0.01ms !important; }
}
</style>
