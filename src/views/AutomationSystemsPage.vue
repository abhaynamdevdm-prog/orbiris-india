<script setup>
import { ref } from 'vue'
import Container from '../components/global/Container.vue'
import Button from '../components/global/Button.vue'
import SectionHeading from '../components/global/SectionHeading.vue'
import Icon from '../components/global/Icon.vue'

const frictionPoints = [
  'People copy the same information between tools.',
  'Leads are routed and followed up manually.',
  'Approvals wait without clear ownership or status.',
  'Teams track work across scattered updates and messages.',
  'Reports are assembled by hand from multiple sources.',
  'Tasks move forward without a clearly assigned owner.',
]

const workflowStages = ['Understand', 'Simplify', 'Define Rules', 'Automate', 'Monitor', 'Improve']

const capabilities = [
  {
    number: '01',
    title: 'Workflow Mapping',
    description: 'Make the current process visible before changing it: who does what, where information moves, and where work can stall.',
    focus: ['Process steps and handoffs', 'Roles and ownership', 'Inputs, outputs, and exceptions', 'Bottlenecks and repeat work'],
    type: 'mapping',
  },
  {
    number: '02',
    title: 'Task & Notification Automation',
    description: 'Consider rule-based task creation and notifications for defined events, with a clear path for people to review what needs attention.',
    focus: ['Event-based task creation', 'Reminders and notifications', 'Approval prompts', 'Human review points'],
    type: 'tasks',
  },
  {
    number: '03',
    title: 'Lead & Request Routing',
    description: 'Define how incoming enquiries or requests should be validated, assigned, and followed up by the right owner.',
    focus: ['Routing criteria and ownership', 'Enquiry validation', 'Follow-up task definition', 'Status and escalation paths'],
    type: 'routing',
  },
  {
    number: '04',
    title: 'Data Flow & System Coordination',
    description: 'Review how information moves between existing tools and identify feasible ways to reduce unnecessary manual transfers.',
    focus: ['Current data flows', 'Repeated entry points', 'Requirements and dependencies', 'Feasibility subject to access and constraints'],
    type: 'data',
  },
  {
    number: '05',
    title: 'Reporting & Operational Visibility',
    description: 'Clarify what teams need to see about work in progress, ownership, status, and operational activity.',
    focus: ['Status and ownership views', 'Reporting requirements', 'Information definitions', 'Scheduled report opportunities'],
    type: 'visibility',
  },
  {
    number: '06',
    title: 'Governance & Maintenance',
    description: 'Set practical expectations for oversight so workflow rules can be reviewed, maintained, and adjusted as work changes.',
    focus: ['Process and automation ownership', 'Change and access considerations', 'Exception and failure review', 'Documentation and maintenance needs'],
    type: 'governance',
  },
]

const connectedStages = [
  'Incoming Request',
  'Validation',
  'Rule-Based Routing',
  'Assigned Owner',
  'Human Review or Action',
  'Status Update',
  'Reporting & Monitoring',
]

const useCases = [
  { title: 'Lead routing', detail: 'Direct an incoming lead according to agreed criteria and ownership rules.', marker: 'routing' },
  { title: 'Internal task creation', detail: 'Create a follow-up task when a defined event or status change occurs.', marker: 'task' },
  { title: 'Approval notifications', detail: 'Notify the appropriate reviewer when an item is ready for a decision.', marker: 'approval' },
  { title: 'Scheduled reports', detail: 'Prepare and share recurring operational summaries where the source data permits.', marker: 'report' },
  { title: 'Enquiry routing', detail: 'Assign requests to an owner or queue using documented information and rules.', marker: 'enquiry' },
  { title: 'Data synchronization', detail: 'Assess whether selected information can be coordinated across existing tools.', marker: 'sync' },
]

const processStages = [
  { number: '01', title: 'Discover', description: 'Understand the people, business goal, current workflow, tools, data, and exceptions.' },
  { number: '02', title: 'Simplify', description: 'Review unclear steps and remove or clarify unnecessary complexity before automation.' },
  { number: '03', title: 'Design', description: 'Define rules, ownership, permissions, human decisions, status, and failure paths.' },
  { number: '04', title: 'Implement & Test', description: 'Configure or build the agreed workflow where feasible, then test expected and exception cases.' },
  { number: '05', title: 'Monitor & Improve', description: 'Review how the workflow behaves and refine it when needs, evidence, or systems change.' },
]

const reliabilityPrinciples = [
  { title: 'Clear rules and ownership', detail: 'Make the trigger, decision, action, and accountable owner explicit.' },
  { title: 'Permissions and validation', detail: 'Consider who or what can initiate changes and how required information is checked.' },
  { title: 'Status visibility and logs', detail: 'Provide a useful view of progress and retain records where the selected tools support them.' },
  { title: 'Failure alerts and manual fallback', detail: 'Define how people can identify issues and continue work if an automated step cannot proceed.' },
  { title: 'Testing and human approval', detail: 'Test normal and exception paths, and keep a person involved where judgment is required.' },
  { title: 'Privacy and security considerations', detail: 'Review relevant data, access, and handling requirements without implying certification or compliance.' },
]

const suitableScenarios = [
  'Your team repeats administrative work that follows a recognizable process.',
  'Lead or request follow-up is inconsistent between people or systems.',
  'Work moves across multiple tools with unclear ownership or status.',
  'Reports are assembled manually from information held in different places.',
  'You want to clarify a process before investing in workflow automation.',
]

const questions = [
  {
    question: 'What business processes can be automated?',
    answer: 'Processes with clear triggers, rules, information, ownership, and appropriate exception handling may be candidates. Examples can include task creation, routing, notifications, status updates, or recurring reporting. Suitability depends on the process, systems, data, permissions, and agreed scope.',
  },
  {
    question: 'Do we need to replace existing software?',
    answer: 'Not necessarily. Discovery starts with the tools already in use and how they support the workflow. Process clarification or adjustments to existing tools may be more appropriate than replacement; any integration or implementation option must be assessed for feasibility.',
  },
  {
    question: 'Can existing tools be connected?',
    answer: 'Potential connections can be explored after reviewing available access, supported interfaces, data quality, permissions, dependencies, and technical constraints. No particular integration is assumed to be available or feasible before that review.',
  },
  {
    question: 'Should every repetitive task be automated?',
    answer: 'No. Some repeated tasks are better simplified, documented, or kept manual—especially where judgment, sensitive decisions, variable inputs, or exceptions are important. Automate only when the process and controls make it appropriate.',
  },
  {
    question: 'How are errors and exceptions handled?',
    answer: 'The workflow should identify what can go wrong, who is notified, what status is recorded, and how work can return to a human owner. The available alerts, logs, and fallback options depend on the tools and agreed design.',
  },
  {
    question: 'How is project scope determined?',
    answer: 'Scope depends on business goals, process complexity, users, existing systems, data and access, technical feasibility, and responsibilities. Discovery clarifies those factors before implementation work is agreed.',
  },
]

const openQuestion = ref(null)

function toggleQuestion(index) {
  openQuestion.value = openQuestion.value === index ? null : index
}

function onQuestionKeydown(event, index) {
  if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return

  event.preventDefault()
  const buttons = [...event.currentTarget.closest('.automation-faq__list').querySelectorAll('.automation-faq__trigger')]
  const nextIndex = event.key === 'Home'
    ? 0
    : event.key === 'End'
      ? buttons.length - 1
      : (index + (event.key === 'ArrowDown' ? 1 : -1) + buttons.length) % buttons.length
  buttons[nextIndex]?.focus()
}
</script>

<template>
  <div class="automation-page">
    <section class="automation-hero">
      <Container class="automation-hero__layout">
        <div class="automation-hero__copy">
          <p class="automation-eyebrow"><span></span> AUTOMATION &amp; SYSTEMS</p>
          <h1>Make everyday business processes work smarter.</h1>
          <p class="automation-hero__description">
            We help businesses understand the work behind a process, clarify how decisions are made, and explore where thoughtful automation can support people and operations.
          </p>
          <div class="automation-hero__actions">
            <Button to="/contact">Discuss Your Workflow <Icon name="arrow" :size="17" /></Button>
            <Button to="/solutions/strategy" variant="secondary" class="automation-button--outline">Explore Strategy &amp; Discovery</Button>
          </div>
          <p class="automation-hero__note"><strong>Automate the right process,</strong> not the existing confusion.</p>
        </div>

        <div class="automation-hero-visual" role="img" aria-label="Illustrative workflow: trigger leads to a decision, action, human review, and status update">
          <div class="automation-hero-visual__head"><span>WORKFLOW SYSTEM</span><span>ILLUSTRATIVE MODEL / 01</span></div>
          <div class="automation-hero-flow">
            <svg viewBox="0 0 540 360" preserveAspectRatio="none" aria-hidden="true">
              <path d="M90 180H220M320 180H450" />
              <path class="automation-hero-flow__feedback" d="M450 212V300H90V212" />
              <circle cx="270" cy="180" r="115" />
            </svg>
            <div class="automation-hero-node automation-hero-node--trigger"><span>01</span><i></i><strong>Trigger</strong><small>Something happens</small></div>
            <div class="automation-hero-node automation-hero-node--decision"><span>02</span><i></i><strong>Decision</strong><small>Check a clear rule</small></div>
            <div class="automation-hero-node automation-hero-node--action"><span>03</span><i></i><strong>Action</strong><small>Move work forward</small></div>
            <div class="automation-hero-node automation-hero-node--review"><span>04</span><i></i><strong>Human review</strong><small>Handle judgment</small></div>
            <div class="automation-hero-node automation-hero-node--status"><span>05</span><i></i><strong>Status</strong><small>Make progress visible</small></div>
          </div>
          <div class="automation-hero-visual__foot"><span><i></i> RULES</span><span><i></i> PEOPLE</span><span><i></i> VISIBILITY</span></div>
        </div>
      </Container>
      <div class="automation-hero__grid" aria-hidden="true"></div>
    </section>

    <section class="automation-friction automation-section">
      <Container>
        <div class="automation-section-head">
          <SectionHeading
            eyebrow="Operational friction"
            title="Small handoffs can create a lot of repeated work."
            description="Operational friction often appears between tools, roles, and decisions. Understanding the complete process helps distinguish an automation opportunity from a process that needs clarification first."
          />
          <p class="automation-section-head__aside">Automation cannot independently fix an unclear process, poor data, or missing responsibility.</p>
        </div>
        <ol class="automation-friction-list">
          <li v-for="(point, index) in frictionPoints" :key="point">
            <span>{{ String(index + 1).padStart(2, '0') }}</span>
            <p>{{ point }}</p>
            <i aria-hidden="true"><b></b><b></b><b></b></i>
          </li>
        </ol>
      </Container>
    </section>

    <section class="automation-viewpoint automation-section">
      <Container>
        <div class="automation-viewpoint__intro">
          <SectionHeading
            eyebrow="Our point of view"
            title="Start with the workflow. Then decide what to automate."
            description="Understanding the current work can reveal several different responses. A process may need simplification, a clear rule, coordination between systems, or a human decision—not necessarily automation."
          />
          <p class="automation-viewpoint__principle">Automate the right process, not the existing confusion.</p>
        </div>
        <ol class="automation-sequence">
          <li v-for="(stage, index) in workflowStages" :key="stage">
            <span>{{ String(index + 1).padStart(2, '0') }}</span>
            <strong>{{ stage }}</strong>
            <Icon v-if="index < workflowStages.length - 1" name="arrow" :size="16" />
          </li>
        </ol>
        <div class="automation-response-model">
          <article><span>01 / IMPROVE</span><h3>Process improvement</h3><p>Clarify steps, remove unnecessary handoffs, and make ownership explicit.</p></article>
          <article><span>02 / COORDINATE</span><h3>Workflow automation</h3><p>Use defined triggers and rules to move repeatable work to its next step.</p></article>
          <article><span>03 / CONNECT</span><h3>System integration</h3><p>Assess whether tools can exchange the information a process requires.</p></article>
          <article><span>04 / RETAIN</span><h3>Human decisions</h3><p>Keep review and exception handling with people when judgment or context matters.</p></article>
        </div>
      </Container>
      <div class="automation-viewpoint__grid" aria-hidden="true"></div>
    </section>

    <section class="automation-capabilities automation-section">
      <Container>
        <SectionHeading
          eyebrow="Automation & systems capabilities"
          title="Design the conditions for work to move clearly."
          description="Potential support ranges from workflow understanding to system coordination and governance. Feasibility and scope depend on discovery and the tools involved."
        />
        <div class="automation-capability-list">
          <article v-for="(capability, index) in capabilities" :key="capability.number" class="automation-capability" :class="{ 'automation-capability--reverse': index % 2 }">
            <div class="automation-capability__visual" :class="`automation-capability__visual--${capability.type}`" aria-hidden="true">
              <div class="automation-capability__visual-head"><span>OPERATIONAL SYSTEM</span><span>{{ capability.number }}</span></div>
              <div class="automation-capability__motif"><i></i><i></i><i></i><i></i><b></b></div>
              <div class="automation-capability__visual-foot"><span>PROCESS</span><span>→</span><span>VISIBILITY</span></div>
            </div>
            <div class="automation-capability__content">
              <span class="automation-capability__index">{{ capability.number }} <i></i> CAPABILITY</span>
              <h3>{{ capability.title }}</h3>
              <p>{{ capability.description }}</p>
              <ul><li v-for="item in capability.focus" :key="item">{{ item }}</li></ul>
            </div>
          </article>
        </div>
      </Container>
    </section>

    <section class="automation-connected automation-section">
      <Container>
        <div class="automation-connected__intro">
          <SectionHeading
            eyebrow="A connected workflow"
            title="Keep a person in the loop when the process needs judgment."
            description="Clear validation and routing rules can move routine work along, while exceptions return to an owner instead of being processed blindly."
          />
          <p class="automation-connected__aside">Rules move repeatable work; people handle context and exceptions.</p>
        </div>
        <div class="automation-workflow" role="img" aria-label="Workflow from incoming request through validation, rule-based routing, assigned owner, human review or action, status update, and reporting and monitoring. Exceptions return to a human owner.">
          <ol class="automation-workflow__stages">
            <li v-for="(stage, index) in connectedStages" :key="stage">
              <span>{{ String(index + 1).padStart(2, '0') }}</span><i></i><strong>{{ stage }}</strong>
            </li>
          </ol>
          <svg viewBox="0 0 1000 120" preserveAspectRatio="none" aria-hidden="true">
            <path d="M720 30V90H500" />
            <path class="automation-workflow__arrow" d="m512 82-12 8 12 8" />
          </svg>
          <p class="automation-workflow__exception"><i></i><strong>Exception or uncertainty</strong><span>Return to a human owner for review and next action.</span></p>
        </div>
        <p class="automation-connected__note">Status updates and reporting make the process easier to review without assuming every step should run without oversight.</p>
      </Container>
    </section>

    <section class="automation-examples automation-section">
      <Container>
        <div class="automation-examples__intro">
          <SectionHeading
            eyebrow="Illustrative use cases"
            title="Start with a defined task and a real operational need."
            description="These examples illustrate common patterns, not prebuilt integrations or guaranteed capabilities."
          />
          <p class="automation-examples__disclaimer">Feasibility depends on permissions, data quality, existing systems, and agreed scope.</p>
        </div>
        <div class="automation-example-list">
          <article v-for="(useCase, index) in useCases" :key="useCase.title" class="automation-example">
            <span class="automation-example__index">{{ String(index + 1).padStart(2, '0') }}</span>
            <div class="automation-example__motif" :class="`automation-example__motif--${useCase.marker}`" aria-hidden="true"><i></i><i></i><b></b></div>
            <div><h3>{{ useCase.title }}</h3><p>{{ useCase.detail }}</p></div>
            <span class="automation-example__tag">ILLUSTRATIVE</span>
          </article>
        </div>
      </Container>
    </section>

    <section class="automation-process automation-section">
      <Container>
        <div class="automation-section-head">
          <SectionHeading
            eyebrow="Our five-stage process"
            title="Make the workflow clear before making it automatic."
            description="The work moves from understanding the current process to checking whether the agreed approach is usable and feasible."
          />
          <p class="automation-section-head__aside">Implementation scope follows the workflow, tools, and technical constraints.</p>
        </div>
        <ol class="automation-process-list">
          <li v-for="(stage, index) in processStages" :key="stage.number">
            <div class="automation-process-list__marker"><span>{{ stage.number }}</span><i v-if="index < processStages.length - 1"></i></div>
            <div><h3>{{ stage.title }}</h3><p>{{ stage.description }}</p></div>
          </li>
        </ol>
      </Container>
    </section>

    <section class="automation-control automation-section">
      <Container class="automation-control__layout">
        <div>
          <SectionHeading
            eyebrow="Reliability & control"
            title="Keep automation visible, reviewable, and accountable."
            description="Good operational design considers the normal path and the moments when a person needs to intervene."
          />
          <p class="automation-control__note">Controls and reliability depend on the selected tools, implementation, and maintenance arrangements. No system is assumed to be error-free.</p>
        </div>
        <ol class="automation-control-list">
          <li v-for="(principle, index) in reliabilityPrinciples" :key="principle.title">
            <span>{{ String(index + 1).padStart(2, '0') }}</span>
            <div><h3>{{ principle.title }}</h3><p>{{ principle.detail }}</p></div>
            <i aria-hidden="true"></i>
          </li>
        </ol>
      </Container>
    </section>

    <section class="automation-fit automation-section">
      <Container class="automation-fit__layout">
        <div>
          <SectionHeading
            eyebrow="Who this is for"
            title="When repeated work needs a clearer path."
            description="Automation may be worth exploring when a workflow is sufficiently understood and the expected value justifies its setup and ongoing ownership."
          />
          <p class="automation-fit__note">Some workflows should be simplified before they are automated.</p>
        </div>
        <ul class="automation-fit-list">
          <li v-for="(scenario, index) in suitableScenarios" :key="scenario">
            <span>{{ String(index + 1).padStart(2, '0') }}</span><p>{{ scenario }}</p><Icon name="arrow" :size="16" />
          </li>
        </ul>
      </Container>
    </section>

    <section class="automation-faq automation-section">
      <Container class="automation-faq__layout">
        <div>
          <SectionHeading
            eyebrow="Frequently asked questions"
            title="Automation works best with clear expectations."
            description="Feasibility, responsibilities, exceptions, and oversight are part of the conversation—not afterthoughts."
          />
          <p class="automation-faq__aside">Start by describing the process and where work gets stuck.</p>
          <Button to="/contact">Talk with us <Icon name="arrow" :size="16" /></Button>
        </div>
        <div class="automation-faq__list">
          <article v-for="(item, index) in questions" :key="item.question" class="automation-faq__item">
            <h3>
              <button
                :id="`automation-question-${index}`"
                class="automation-faq__trigger"
                type="button"
                :aria-expanded="openQuestion === index"
                :aria-controls="`automation-answer-${index}`"
                @click="toggleQuestion(index)"
                @keydown="onQuestionKeydown($event, index)"
              >
                <span class="automation-faq__number">{{ String(index + 1).padStart(2, '0') }}</span>
                <span>{{ item.question }}</span>
                <span class="automation-faq__toggle" aria-hidden="true">{{ openQuestion === index ? '−' : '+' }}</span>
              </button>
            </h3>
            <div v-show="openQuestion === index" :id="`automation-answer-${index}`" class="automation-faq__answer" role="region" :aria-labelledby="`automation-question-${index}`">
              <p>{{ item.answer }}</p>
            </div>
          </article>
        </div>
      </Container>
    </section>

    <section class="automation-cta automation-section">
      <Container class="automation-cta__layout">
        <div>
          <p class="automation-eyebrow"><span></span> CLARITY BEFORE AUTOMATION</p>
          <h2>Find the friction before you automate the work.</h2>
          <p>Describe the process, the people involved, and where work gets difficult. Start with the problem—not a tool or an assumption.</p>
        </div>
        <div class="automation-cta__actions">
          <Button to="/contact">Start a Conversation <Icon name="arrow" :size="17" /></Button>
          <RouterLink to="/solutions/strategy">Explore Strategy &amp; Discovery <Icon name="arrow" :size="16" /></RouterLink>
        </div>
      </Container>
      <div class="automation-cta__orbit automation-cta__orbit--outer" aria-hidden="true"></div>
      <div class="automation-cta__orbit automation-cta__orbit--inner" aria-hidden="true"></div>
    </section>
  </div>
</template>

<style scoped>
.automation-page {
  overflow: hidden;
  background: var(--color-background);
}

.automation-section {
  position: relative;
  padding-block: clamp(4rem, 8vw, 7rem);
}

.automation-hero {
  position: relative;
  overflow: hidden;
  padding-block: clamp(4.5rem, 8vw, 7.5rem);
  background: var(--color-navy);
  color: white;
}

.automation-hero__layout {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(390px, 1.05fr);
  align-items: center;
  gap: clamp(2rem, 5vw, 4.5rem);
}

.automation-hero__copy {
  max-width: 620px;
}

.automation-eyebrow {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  margin: 0 0 1.35rem;
  color: #a9def2;
  font-size: 0.69rem;
  font-weight: 700;
  letter-spacing: 0.15em;
}

.automation-eyebrow > span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-teal);
  box-shadow: 0 0 0 5px rgba(0, 209, 167, 0.1);
}

.automation-hero h1 {
  max-width: 650px;
  margin: 0;
  color: white;
  font-family: var(--font-display);
  font-size: clamp(2.55rem, 5.3vw, 4.55rem);
  font-weight: 700;
  letter-spacing: -0.065em;
  line-height: 1.04;
}

.automation-hero__description {
  max-width: 570px;
  margin: 1.45rem 0 0;
  color: #b9cad9;
  font-size: clamp(1rem, 1.45vw, 1.12rem);
  line-height: 1.75;
}

.automation-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 2rem;
}

.automation-button--outline {
  border-color: rgba(207, 228, 240, 0.35);
  background: transparent;
  color: white;
}

.automation-button--outline:hover {
  border-color: var(--color-blue);
  background: rgba(255, 255, 255, 0.05);
}

.automation-hero__note {
  margin: 1.3rem 0 0;
  color: #94abc0;
  font-size: 0.81rem;
}

.automation-hero__note strong {
  color: #eaf7fd;
  font-weight: 600;
}

.automation-hero__grid,
.automation-viewpoint__grid {
  position: absolute;
  inset: 0;
  opacity: 0.16;
  pointer-events: none;
  background-image: linear-gradient(rgba(133, 180, 208, 0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(133, 180, 208, 0.16) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: linear-gradient(90deg, transparent, black 70%);
}

.automation-hero-visual {
  position: relative;
  z-index: 1;
  min-width: 0;
  border: 1px solid rgba(160, 197, 219, 0.24);
  border-radius: 1.1rem;
  padding: 1rem clamp(0.7rem, 2vw, 1.3rem);
  background: linear-gradient(145deg, rgba(21, 53, 83, 0.94), rgba(9, 29, 52, 0.95));
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.18);
}

.automation-hero-visual__head,
.automation-hero-visual__foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  color: #89abc2;
  font-size: 0.54rem;
  font-weight: 700;
  letter-spacing: 0.1em;
}

.automation-hero-flow {
  position: relative;
  width: 100%;
  max-width: 540px;
  aspect-ratio: 540 / 360;
  margin-inline: auto;
}

.automation-hero-flow > svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  fill: none;
  stroke: rgba(0, 180, 255, 0.42);
  stroke-width: 1;
}

.automation-hero-flow > svg circle {
  stroke: rgba(0, 209, 167, 0.24);
  stroke-dasharray: 4 8;
}

.automation-hero-flow > svg .automation-hero-flow__feedback {
  stroke: rgba(0, 209, 167, 0.48);
  stroke-dasharray: 5 7;
}

.automation-hero-node {
  position: absolute;
  display: grid;
  width: clamp(92px, 16vw, 130px);
  min-height: 67px;
  grid-template-columns: 13px 1fr;
  align-content: center;
  align-items: center;
  gap: 0.12rem 0.45rem;
  border: 1px solid rgba(150, 187, 210, 0.32);
  border-radius: 0.55rem;
  padding: 0.45rem 0.55rem;
  background: #102b49;
}

.automation-hero-node > span {
  grid-row: span 2;
  align-self: start;
  color: #78a8c4;
  font-size: 0.5rem;
  font-weight: 700;
}

.automation-hero-node > i {
  position: absolute;
  top: 50%;
  left: -4px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--color-blue);
  transform: translateY(-50%);
}

.automation-hero-node strong {
  color: #f0f8fc;
  font-size: clamp(0.6rem, 0.95vw, 0.73rem);
  line-height: 1.25;
}

.automation-hero-node small {
  color: #9bb2c4;
  font-size: clamp(0.48rem, 0.78vw, 0.58rem);
  line-height: 1.3;
}

.automation-hero-node--trigger {
  top: 12%;
  left: 4%;
}

.automation-hero-node--decision {
  top: 12%;
  right: 4%;
}

.automation-hero-node--decision > i,
.automation-hero-node--status > i {
  background: var(--color-teal);
}

.automation-hero-node--action {
  right: 4%;
  bottom: 12%;
}

.automation-hero-node--action > i {
  background: var(--color-orange);
}

.automation-hero-node--review {
  bottom: 12%;
  left: 4%;
}

.automation-hero-node--review > i {
  background: var(--color-teal);
}

.automation-hero-node--status {
  top: 78%;
  right: 50%;
  transform: translate(50%, -50%);
}

.automation-hero-visual__foot {
  justify-content: center;
  gap: clamp(0.7rem, 3vw, 1.5rem);
  border-top: 1px solid rgba(166, 197, 217, 0.16);
  padding-top: 0.8rem;
}

.automation-hero-visual__foot span {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
}

.automation-hero-visual__foot i {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-blue);
}

.automation-hero-visual__foot span:nth-child(2) i {
  background: var(--color-teal);
}

.automation-hero-visual__foot span:nth-child(3) i {
  background: var(--color-orange);
}

.automation-friction {
  background: white;
}

.automation-section-head,
.automation-viewpoint__intro,
.automation-connected__intro,
.automation-examples__intro {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 2rem;
}

.automation-section-head .section-heading,
.automation-viewpoint__intro .section-heading,
.automation-connected__intro .section-heading,
.automation-examples__intro .section-heading {
  max-width: 760px;
}

.automation-section-head__aside,
.automation-viewpoint__principle,
.automation-connected__aside,
.automation-examples__disclaimer {
  max-width: 270px;
  flex: 0 0 auto;
  margin: 0 0 0.35rem;
  color: var(--color-muted);
  font-size: 0.8rem;
  line-height: 1.65;
}

.automation-section-head__aside {
  border-left: 2px solid var(--color-orange);
  padding-left: 0.9rem;
}

.automation-friction-list {
  margin: clamp(2.7rem, 5vw, 4rem) 0 0;
  border-top: 1px solid var(--color-border);
  padding: 0;
  list-style: none;
}

.automation-friction-list li {
  display: grid;
  min-height: 74px;
  grid-template-columns: 46px minmax(0, 1fr) 70px;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid var(--color-border);
}

.automation-friction-list li > span {
  color: #8293a5;
  font-size: 0.67rem;
  font-weight: 700;
}

.automation-friction-list p {
  margin: 0;
  color: var(--color-text);
  font-family: var(--font-display);
  font-size: clamp(1rem, 2vw, 1.2rem);
  font-weight: 600;
  letter-spacing: -0.025em;
}

.automation-friction-list li > i {
  display: flex;
  justify-content: end;
  gap: 5px;
}

.automation-friction-list b {
  width: 6px;
  height: 6px;
  border: 1px solid #96a8b8;
  border-radius: 50%;
}

.automation-friction-list li:nth-child(2n) b:nth-child(2),
.automation-friction-list li:nth-child(3n) b:first-child {
  border-color: var(--color-teal);
  background: var(--color-teal);
}

.automation-viewpoint {
  overflow: hidden;
  background: var(--color-navy);
  color: white;
}

.automation-viewpoint .section-heading__title {
  color: white;
}

.automation-viewpoint .section-heading__description {
  color: #b6c5d5;
}

.automation-viewpoint .section-heading__eyebrow {
  border-color: rgba(0, 180, 255, 0.35);
  background: rgba(0, 180, 255, 0.12);
  color: #b8eaff;
}

.automation-viewpoint__intro,
.automation-sequence,
.automation-response-model {
  position: relative;
  z-index: 1;
}

.automation-viewpoint__principle {
  border-left: 2px solid var(--color-teal);
  padding-left: 0.9rem;
  color: #d0e0eb;
  font-family: var(--font-display);
  font-size: 0.92rem;
  font-weight: 650;
}

.automation-sequence {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 0.7rem;
  margin: 3rem 0 0;
  border-top: 1px solid rgba(255, 255, 255, 0.18);
  padding: 0;
  list-style: none;
}

.automation-sequence li {
  position: relative;
  display: grid;
  min-height: 88px;
  align-content: start;
  gap: 0.55rem;
  border-top: 1px solid rgba(0, 180, 255, 0.5);
  padding: 0.8rem 1rem 0 0;
}

.automation-sequence li::before {
  position: absolute;
  top: -4px;
  left: 0;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--color-teal);
  content: '';
}

.automation-sequence li > span {
  color: #78c8e8;
  font-size: 0.63rem;
  font-weight: 700;
}

.automation-sequence li > strong {
  color: #f0f8fc;
  font-family: var(--font-display);
  font-size: clamp(0.75rem, 1.2vw, 0.95rem);
}

.automation-sequence li > .icon {
  position: absolute;
  top: 0.75rem;
  right: 0.05rem;
  color: var(--color-teal);
}

.automation-response-model {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin-top: 2.6rem;
  border-top: 1px solid rgba(255, 255, 255, 0.17);
}

.automation-response-model article {
  padding: 1.25rem 1.2rem 0 0;
}

.automation-response-model article + article {
  border-left: 1px solid rgba(255, 255, 255, 0.15);
  padding-left: 1.2rem;
}

.automation-response-model article > span {
  color: #7fcbea;
  font-size: 0.59rem;
  font-weight: 700;
  letter-spacing: 0.1em;
}

.automation-response-model h3 {
  margin: 0.75rem 0 0;
  color: white;
  font-family: var(--font-display);
  font-size: 0.98rem;
}

.automation-response-model p {
  margin: 0.45rem 0 0;
  color: #adc0ce;
  font-size: 0.77rem;
  line-height: 1.6;
}

.automation-capabilities {
  background: #f0f4f8;
}

.automation-capability-list {
  margin-top: clamp(3rem, 6vw, 5rem);
  border-top: 1px solid var(--color-border);
}

.automation-capability {
  display: grid;
  min-height: 330px;
  grid-template-columns: 0.84fr 1.16fr;
  align-items: stretch;
  border-bottom: 1px solid var(--color-border);
}

.automation-capability--reverse .automation-capability__visual {
  order: 2;
}

.automation-capability--reverse .automation-capability__content {
  order: 1;
}

.automation-capability__visual {
  position: relative;
  display: grid;
  min-height: 290px;
  overflow: hidden;
  place-items: center;
  background:
    linear-gradient(rgba(11, 31, 59, 0.045) 1px, transparent 1px),
    linear-gradient(90deg, rgba(11, 31, 59, 0.045) 1px, transparent 1px),
    #e6edf3;
  background-size: 30px 30px;
}

.automation-capability__visual--tasks,
.automation-capability__visual--visibility {
  background-color: #e7f0ef;
}

.automation-capability__visual--routing,
.automation-capability__visual--governance {
  background-color: #e9edf5;
}

.automation-capability__visual-head,
.automation-capability__visual-foot {
  position: absolute;
  right: 1rem;
  left: 1rem;
  display: flex;
  justify-content: space-between;
  color: #758a9c;
  font-size: 0.57rem;
  font-weight: 700;
  letter-spacing: 0.12em;
}

.automation-capability__visual-head {
  top: 0.9rem;
}

.automation-capability__visual-foot {
  bottom: 0.9rem;
}

.automation-capability__visual-foot span:nth-child(2) {
  color: #078bb6;
}

.automation-capability__motif {
  position: relative;
  display: grid;
  width: min(55%, 195px);
  aspect-ratio: 1;
  place-items: center;
}

.automation-capability__motif i {
  position: absolute;
  width: 100%;
  aspect-ratio: 1;
  border: 1px solid rgba(11, 31, 59, 0.28);
  border-radius: 50%;
}

.automation-capability__motif i:nth-child(2) {
  width: 70%;
  border-color: rgba(0, 180, 255, 0.65);
  border-style: dashed;
}

.automation-capability__motif i:nth-child(3) {
  width: 42%;
  border-color: rgba(0, 209, 167, 0.82);
}

.automation-capability__motif i:nth-child(4) {
  width: 125%;
  height: 1px;
  border: 0;
  border-radius: 0;
  background: rgba(11, 31, 59, 0.4);
  transform: rotate(-35deg);
}

.automation-capability__motif b {
  z-index: 1;
  width: 15%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: var(--color-blue);
  box-shadow: 0 0 0 8px rgba(0, 180, 255, 0.12);
}

.automation-capability__visual--tasks .automation-capability__motif i:first-child {
  border-radius: 12%;
  transform: rotate(20deg);
}

.automation-capability__visual--routing .automation-capability__motif i:nth-child(2) {
  transform: scaleX(0.56) rotate(35deg);
}

.automation-capability__visual--data .automation-capability__motif i:first-child {
  border-radius: 8%;
}

.automation-capability__visual--visibility .automation-capability__motif i:nth-child(4) {
  height: 3px;
  background: linear-gradient(90deg, transparent, var(--color-blue), var(--color-teal), transparent);
}

.automation-capability__visual--governance .automation-capability__motif i:nth-child(3) {
  width: 28%;
  border-style: dotted;
}

.automation-capability__content {
  align-self: center;
  padding: clamp(1.6rem, 4vw, 3.5rem) clamp(1.4rem, 5vw, 4.5rem);
}

.automation-capability__index {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  color: #778b9d;
  font-size: 0.64rem;
  font-weight: 700;
  letter-spacing: 0.12em;
}

.automation-capability__index i {
  width: 20px;
  height: 1px;
  background: var(--color-teal);
}

.automation-capability__content h3 {
  margin: 0.8rem 0 0;
  color: var(--color-navy);
  font-family: var(--font-display);
  font-size: clamp(1.35rem, 2.4vw, 1.8rem);
  letter-spacing: -0.04em;
  line-height: 1.2;
}

.automation-capability__content > p {
  max-width: 610px;
  margin: 0.7rem 0 0;
  color: var(--color-muted);
  font-size: 0.88rem;
  line-height: 1.7;
}

.automation-capability__content ul {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.6rem 1rem;
  margin: 1.15rem 0 0;
  padding: 0;
  list-style: none;
}

.automation-capability__content li {
  position: relative;
  padding-left: 1rem;
  color: #43566b;
  font-size: 0.76rem;
  line-height: 1.5;
}

.automation-capability__content li::before {
  position: absolute;
  top: 0.55em;
  left: 0;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--color-teal);
  content: '';
}

.automation-connected {
  background: white;
}

.automation-connected__aside {
  max-width: 245px;
  border-left: 2px solid var(--color-teal);
  padding-left: 0.9rem;
}

.automation-workflow {
  position: relative;
  margin-top: 3rem;
  border: 1px solid var(--color-border);
  border-radius: 0.9rem;
  padding: clamp(1.2rem, 3vw, 2rem);
  background: #f9fbfd;
}

.automation-workflow__stages {
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 0.8rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.automation-workflow__stages li {
  position: relative;
  display: grid;
  min-width: 0;
  min-height: 115px;
  align-content: start;
  gap: 0.65rem;
  border-top: 1px solid rgba(0, 180, 255, 0.48);
  padding: 0.8rem 0.5rem 0 0;
}

.automation-workflow__stages li::before {
  position: absolute;
  top: -4px;
  left: 0;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--color-teal);
  content: '';
}

.automation-workflow__stages li > span {
  color: var(--color-link);
  font-size: 0.62rem;
  font-weight: 700;
}

.automation-workflow__stages li > i {
  position: absolute;
  top: 1.65rem;
  right: 0.25rem;
  width: 9px;
  height: 9px;
  border-top: 1px solid var(--color-link);
  border-right: 1px solid var(--color-link);
  transform: rotate(45deg);
}

.automation-workflow__stages li:last-child > i {
  display: none;
}

.automation-workflow__stages li > strong {
  color: var(--color-navy);
  font-family: var(--font-display);
  font-size: clamp(0.68rem, 0.95vw, 0.83rem);
  line-height: 1.4;
}

.automation-workflow > svg {
  position: absolute;
  right: 12%;
  bottom: 3.1rem;
  left: 12%;
  width: 76%;
  height: 62px;
  overflow: visible;
  fill: none;
  stroke: var(--color-orange);
  stroke-width: 1.5;
  stroke-dasharray: 5 6;
}

.automation-workflow > svg .automation-workflow__arrow {
  stroke-dasharray: none;
}

.automation-workflow__exception {
  position: relative;
  display: flex;
  width: min(100%, 510px);
  align-items: center;
  gap: 0.6rem;
  margin: 1rem auto 0;
  border: 1px solid rgba(255, 176, 32, 0.45);
  border-radius: 0.5rem;
  padding: 0.65rem 0.8rem;
  background: #fffaf0;
  color: #584820;
  font-size: 0.72rem;
  line-height: 1.45;
}

.automation-workflow__exception > i {
  width: 7px;
  height: 7px;
  flex: 0 0 auto;
  border-radius: 50%;
  background: var(--color-orange);
}

.automation-workflow__exception strong {
  flex: 0 0 auto;
  font-weight: 700;
}

.automation-workflow__exception span {
  color: #776a4c;
}

.automation-connected__note {
  max-width: 850px;
  margin: 1.2rem auto 0;
  color: var(--color-muted);
  font-size: 0.78rem;
  text-align: center;
}

.automation-examples {
  background: #f0f4f8;
}

.automation-examples__disclaimer {
  border-left: 2px solid var(--color-orange);
  padding-left: 0.9rem;
}

.automation-example-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-top: 2.7rem;
  border-top: 1px solid var(--color-border);
}

.automation-example {
  display: grid;
  min-height: 138px;
  grid-template-columns: 30px 42px minmax(0, 1fr) auto;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid var(--color-border);
  padding: 1.1rem 1rem 1.1rem 0;
}

.automation-example:nth-child(2n) {
  border-left: 1px solid var(--color-border);
  padding-left: 1.2rem;
}

.automation-example__index {
  align-self: start;
  margin-top: 0.15rem;
  color: #8293a5;
  font-size: 0.64rem;
  font-weight: 700;
}

.automation-example__motif {
  position: relative;
  display: grid;
  width: 38px;
  height: 38px;
  place-items: center;
}

.automation-example__motif i {
  position: absolute;
  width: 19px;
  height: 19px;
  border: 1px solid var(--color-blue);
  border-radius: 50%;
}

.automation-example__motif i:nth-child(2) {
  margin: 12px 0 0 12px;
  border-color: var(--color-teal);
}

.automation-example__motif b {
  z-index: 1;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-orange);
}

.automation-example__motif--task i {
  border-radius: 3px;
  transform: rotate(45deg);
}

.automation-example__motif--approval i:nth-child(2),
.automation-example__motif--enquiry i:nth-child(2) {
  border-style: dashed;
}

.automation-example__motif--sync i:first-child {
  transform: scaleX(0.55) rotate(35deg);
}

.automation-example h3 {
  margin: 0;
  color: var(--color-navy);
  font-family: var(--font-display);
  font-size: 1rem;
  letter-spacing: -0.02em;
}

.automation-example p {
  margin: 0.35rem 0 0;
  color: var(--color-muted);
  font-size: 0.78rem;
  line-height: 1.55;
}

.automation-example__tag {
  align-self: start;
  border: 1px solid #d4dee7;
  border-radius: 999px;
  padding: 0.3rem 0.45rem;
  color: #72869a;
  font-size: 0.48rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  white-space: nowrap;
}

.automation-process {
  background: white;
}

.automation-process-list {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  margin: clamp(3rem, 5vw, 4.5rem) 0 0;
  border-top: 1px solid var(--color-border);
  padding: 0;
  list-style: none;
}

.automation-process-list > li {
  position: relative;
  display: grid;
  grid-template-columns: 38px minmax(0, 1fr);
  gap: 0.8rem;
  padding: 1.2rem 1rem 0 0;
}

.automation-process-list > li + li {
  border-left: 1px solid var(--color-border);
  padding-left: 1rem;
}

.automation-process-list__marker {
  position: relative;
  color: var(--color-link);
  font-size: 0.67rem;
  font-weight: 700;
}

.automation-process-list__marker i {
  position: absolute;
  top: -1.25rem;
  left: 0;
  width: calc(100% + 0.8rem);
  height: 1px;
  background: linear-gradient(90deg, var(--color-blue), transparent);
}

.automation-process-list h3 {
  margin: 0;
  color: var(--color-navy);
  font-family: var(--font-display);
  font-size: clamp(1rem, 1.55vw, 1.28rem);
  letter-spacing: -0.03em;
}

.automation-process-list p {
  margin: 0.55rem 0 0;
  color: var(--color-muted);
  font-size: 0.79rem;
  line-height: 1.65;
}

.automation-control {
  background: #f0f4f8;
}

.automation-control__layout,
.automation-fit__layout {
  display: grid;
  grid-template-columns: minmax(0, 0.82fr) minmax(0, 1.18fr);
  gap: clamp(3rem, 8vw, 7rem);
}

.automation-control__note,
.automation-fit__note,
.automation-faq__aside {
  margin: 1.3rem 0 0;
  color: var(--color-muted);
  font-size: 0.83rem;
  line-height: 1.65;
}

.automation-control__note {
  max-width: 450px;
  border-left: 2px solid var(--color-orange);
  padding-left: 0.9rem;
}

.automation-control-list {
  margin: 0;
  border-top: 1px solid #cfd9e2;
  padding: 0;
  list-style: none;
}

.automation-control-list li {
  display: grid;
  grid-template-columns: 30px minmax(0, 1fr) 8px;
  align-items: start;
  gap: 0.75rem;
  border-bottom: 1px solid #cfd9e2;
  padding: 1rem 0;
}

.automation-control-list li > span {
  color: #8293a5;
  font-size: 0.64rem;
  font-weight: 700;
}

.automation-control-list h3 {
  margin: 0;
  color: var(--color-navy);
  font-family: var(--font-display);
  font-size: 0.94rem;
  letter-spacing: -0.02em;
}

.automation-control-list p {
  margin: 0.35rem 0 0;
  color: var(--color-muted);
  font-size: 0.77rem;
  line-height: 1.6;
}

.automation-control-list li > i {
  width: 7px;
  height: 7px;
  margin-top: 0.3rem;
  border-radius: 50%;
  background: var(--color-teal);
}

.automation-control-list li:nth-child(3n) > i {
  background: var(--color-orange);
}

.automation-fit {
  background: white;
}

.automation-fit__note {
  max-width: 420px;
  border-left: 2px solid var(--color-teal);
  padding-left: 0.9rem;
}

.automation-fit-list {
  margin: 0;
  border-top: 1px solid var(--color-border);
  padding: 0;
  list-style: none;
}

.automation-fit-list li {
  display: grid;
  min-height: 75px;
  grid-template-columns: 32px minmax(0, 1fr) 18px;
  align-items: center;
  gap: 0.8rem;
  border-bottom: 1px solid var(--color-border);
}

.automation-fit-list li > span {
  color: #8293a5;
  font-size: 0.64rem;
  font-weight: 700;
}

.automation-fit-list p {
  margin: 0;
  color: var(--color-text);
  font-family: var(--font-display);
  font-size: clamp(0.9rem, 1.6vw, 1.05rem);
  font-weight: 600;
  line-height: 1.45;
}

.automation-fit-list .icon {
  color: var(--color-link);
}

.automation-faq {
  background: #f0f4f8;
}

.automation-faq__layout {
  display: grid;
  grid-template-columns: minmax(250px, 0.72fr) minmax(0, 1.28fr);
  align-items: start;
  gap: clamp(2.5rem, 7vw, 6rem);
}

.automation-faq__aside {
  max-width: 360px;
  margin-bottom: 1.3rem;
}

.automation-faq__list {
  border-top: 1px solid #cfd9e2;
}

.automation-faq__item {
  border-bottom: 1px solid #cfd9e2;
}

.automation-faq__item h3 {
  margin: 0;
  font-size: inherit;
}

.automation-faq__trigger {
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
  font-size: 0.97rem;
  font-weight: 700;
  text-align: left;
}

.automation-faq__trigger:hover {
  color: var(--color-link);
}

.automation-faq__number {
  color: #8293a5;
  font-family: var(--font-body);
  font-size: 0.65rem;
}

.automation-faq__toggle {
  justify-self: end;
  color: var(--color-link);
  font-size: 1.3rem;
  font-weight: 400;
}

.automation-faq__answer {
  padding: 0 2.5rem 1.25rem;
}

.automation-faq__answer p {
  max-width: 680px;
  margin: 0;
  color: var(--color-muted);
  font-size: 0.86rem;
  line-height: 1.75;
}

.automation-cta {
  position: relative;
  overflow: hidden;
  background: var(--color-navy);
  color: white;
}

.automation-cta__layout {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: 2rem;
}

.automation-cta h2 {
  max-width: 740px;
  margin: 0;
  color: white;
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3.3rem);
  letter-spacing: -0.055em;
  line-height: 1.12;
}

.automation-cta__layout > div:first-child > p:last-child {
  max-width: 650px;
  margin: 1rem 0 0;
  color: #b6c5d5;
  font-size: 0.97rem;
  line-height: 1.7;
}

.automation-cta__actions {
  display: grid;
  justify-items: start;
  gap: 1rem;
}

.automation-cta__actions > a:last-child {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #b8eaff;
  font-size: 0.82rem;
  font-weight: 650;
  text-decoration-thickness: 1px;
  text-underline-offset: 4px;
}

.automation-cta__actions > a:last-child:hover {
  color: white;
}

.automation-cta__orbit {
  position: absolute;
  top: 50%;
  right: -145px;
  width: 430px;
  aspect-ratio: 1;
  border: 1px solid rgba(0, 180, 255, 0.24);
  border-radius: 50%;
  transform: translateY(-50%);
}

.automation-cta__orbit--inner {
  right: -65px;
  width: 270px;
  border-color: rgba(0, 209, 167, 0.22);
}

@media (max-width: 1000px) {
  .automation-hero__layout {
    grid-template-columns: minmax(0, 0.9fr) minmax(340px, 1.1fr);
    gap: 2rem;
  }

  .automation-capability__content ul {
    grid-template-columns: 1fr;
    gap: 0.45rem;
  }

  .automation-workflow__stages {
    gap: 0.45rem;
  }
}

@media (max-width: 760px) {
  .automation-hero__layout,
  .automation-control__layout,
  .automation-fit__layout,
  .automation-faq__layout,
  .automation-cta__layout {
    grid-template-columns: minmax(0, 1fr);
  }

  .automation-hero__layout {
    gap: 2.5rem;
  }

  .automation-section-head,
  .automation-viewpoint__intro,
  .automation-connected__intro,
  .automation-examples__intro {
    display: block;
  }

  .automation-section-head__aside,
  .automation-viewpoint__principle,
  .automation-connected__aside,
  .automation-examples__disclaimer {
    max-width: 460px;
    margin-top: 1rem;
  }

  .automation-sequence {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .automation-sequence li {
    min-height: 76px;
  }

  .automation-sequence li > .icon {
    display: none;
  }

  .automation-response-model {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .automation-response-model article {
    min-height: 135px;
  }

  .automation-response-model article:nth-child(3) {
    border-left: 0;
    padding-left: 0;
  }

  .automation-capability__content ul {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .automation-workflow__stages {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .automation-workflow > svg {
    display: none;
  }

  .automation-workflow__exception {
    margin-top: 0.5rem;
  }

  .automation-process-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .automation-process-list > li {
    min-height: 150px;
    border-bottom: 1px solid var(--color-border);
  }

  .automation-process-list > li + li {
    border-left: 0;
    padding-left: 0;
  }

  .automation-process-list > li:nth-child(2n) {
    border-left: 1px solid var(--color-border);
    padding-left: 1rem;
  }

  .automation-process-list__marker i {
    display: none;
  }

  .automation-control__layout,
  .automation-fit__layout,
  .automation-faq__layout {
    gap: 2.5rem;
  }

  .automation-cta__actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem 1.5rem;
  }
}

@media (max-width: 540px) {
  .automation-hero h1 {
    font-size: clamp(2.4rem, 11.7vw, 3.35rem);
  }

  .automation-hero__actions {
    align-items: stretch;
  }

  .automation-hero__actions :deep(.button) {
    width: 100%;
  }

  .automation-hero-visual {
    padding-inline: 0.55rem;
  }

  .automation-hero-visual__head {
    font-size: 0.45rem;
  }

  .automation-hero-node {
    width: 86px;
    min-height: 52px;
    grid-template-columns: 9px 1fr;
    gap: 0.1rem 0.3rem;
    padding: 0.35rem;
  }

  .automation-hero-node strong {
    font-size: 0.56rem;
  }

  .automation-hero-node small {
    font-size: 0.47rem;
  }

  .automation-hero-node > span {
    font-size: 0.42rem;
  }

  .automation-hero-node--trigger,
  .automation-hero-node--review {
    left: 1%;
  }

  .automation-hero-node--decision,
  .automation-hero-node--action {
    right: 1%;
  }

  .automation-hero-visual__foot {
    gap: 0.4rem;
    font-size: 0.44rem;
  }

  .automation-friction-list li {
    grid-template-columns: 28px minmax(0, 1fr) 34px;
    gap: 0.55rem;
    padding-block: 0.75rem;
  }

  .automation-friction-list p {
    font-size: 0.93rem;
    line-height: 1.45;
  }

  .automation-friction-list li > i {
    gap: 3px;
  }

  .automation-friction-list b {
    width: 5px;
    height: 5px;
  }

  .automation-sequence {
    gap: 0.35rem;
    margin-top: 2.2rem;
  }

  .automation-sequence li {
    min-height: 66px;
    padding-right: 0.3rem;
  }

  .automation-sequence li > strong {
    font-size: 0.72rem;
    line-height: 1.35;
  }

  .automation-response-model {
    margin-top: 2rem;
  }

  .automation-response-model article {
    min-height: 150px;
    padding-right: 0.8rem;
  }

  .automation-response-model article + article {
    padding-left: 0.8rem;
  }

  .automation-response-model article:nth-child(3) {
    padding-left: 0;
  }

  .automation-response-model h3 {
    font-size: 0.88rem;
  }

  .automation-response-model p {
    font-size: 0.73rem;
  }

  .automation-capability {
    grid-template-columns: minmax(0, 1fr);
  }

  .automation-capability--reverse .automation-capability__visual,
  .automation-capability--reverse .automation-capability__content {
    order: initial;
  }

  .automation-capability__visual {
    min-height: 205px;
  }

  .automation-capability__motif {
    width: 128px;
  }

  .automation-capability__content {
    padding: 1.4rem 0 1.8rem;
  }

  .automation-capability__content ul {
    gap: 0.45rem 0.7rem;
  }

  .automation-capability__content li {
    font-size: 0.72rem;
  }

  .automation-workflow {
    margin-top: 2rem;
    padding: 1rem;
  }

  .automation-workflow__stages {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0 0.8rem;
  }

  .automation-workflow__stages li {
    min-height: 75px;
    grid-template-columns: 26px minmax(0, 1fr);
    align-content: center;
    align-items: start;
    gap: 0.3rem 0.45rem;
    border-top: 0;
    border-bottom: 1px solid #dce5ed;
    padding: 0.65rem 0;
  }

  .automation-workflow__stages li::before {
    top: 50%;
    left: -1rem;
    width: 5px;
    height: 5px;
    transform: translateY(-50%);
  }

  .automation-workflow__stages li > span {
    grid-row: span 2;
  }

  .automation-workflow__stages li > i {
    display: none;
  }

  .automation-workflow__stages li > strong {
    font-size: 0.74rem;
  }

  .automation-workflow__exception {
    display: grid;
    grid-template-columns: 9px minmax(0, 1fr);
    gap: 0.15rem 0.5rem;
    margin-top: 0.9rem;
    font-size: 0.69rem;
  }

  .automation-workflow__exception > i {
    grid-row: span 2;
    margin-top: 0.2rem;
  }

  .automation-workflow__exception strong {
    white-space: normal;
  }

  .automation-example-list {
    grid-template-columns: minmax(0, 1fr);
    margin-top: 2rem;
  }

  .automation-example,
  .automation-example:nth-child(2n) {
    min-height: 120px;
    grid-template-columns: 23px 34px minmax(0, 1fr);
    gap: 0.65rem;
    border-left: 0;
    padding: 0.9rem 0;
  }

  .automation-example__motif {
    transform: scale(0.82);
    transform-origin: left center;
  }

  .automation-example__tag {
    grid-column: 3;
    justify-self: start;
    margin-top: -0.3rem;
  }

  .automation-example h3 {
    font-size: 0.92rem;
  }

  .automation-example p {
    font-size: 0.74rem;
  }

  .automation-process-list {
    grid-template-columns: minmax(0, 1fr);
  }

  .automation-process-list > li,
  .automation-process-list > li:nth-child(2n) {
    min-height: 0;
    border-left: 0;
    padding: 1rem 0;
  }

  .automation-process-list h3 {
    font-size: 1.1rem;
  }

  .automation-control-list li {
    grid-template-columns: 25px minmax(0, 1fr) 7px;
    gap: 0.55rem;
  }

  .automation-fit-list li {
    grid-template-columns: 27px minmax(0, 1fr) 16px;
    gap: 0.55rem;
  }

  .automation-fit-list p {
    font-size: 0.9rem;
  }

  .automation-faq__trigger {
    grid-template-columns: 26px minmax(0, 1fr) 22px;
    gap: 0.45rem;
    font-size: 0.86rem;
  }

  .automation-faq__answer {
    padding-right: 0.5rem;
    padding-left: 2rem;
  }

  .automation-cta__actions {
    display: grid;
    justify-items: start;
  }
}

@media (prefers-reduced-motion: reduce) {
  .automation-page *,
  .automation-page *::before,
  .automation-page *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
