export const insightArticles = [
  {
    slug: 'marketing-activity-vs-business-growth',
    category: 'Business Strategy',
    title: 'Marketing Activity vs. Business Growth',
    summary: 'More posts, campaigns, and traffic do not necessarily solve the business problem. Connect activity to the customer journey and the outcome the organization needs.',
    metaTitle: 'Marketing Activity vs. Business Growth | ORBIRIS INDIA',
    metaDescription: 'Learn how to distinguish marketing activity from business outcomes, diagnose the real growth bottleneck, and prioritize a practical next step.',
    accent: 'strategy',
    solution: { title: 'Strategy & Discovery', route: '/solutions/strategy' },
    sections: [
      {
        id: 'activity-is-not-progress',
        heading: 'Activity is visible. Progress needs context.',
        paragraphs: [
          'A busy marketing calendar can create a reassuring sense of momentum. There may be more posts, more campaigns, more website visits, and more reports. Those are signs that work is happening, but they do not explain whether the work is addressing the constraint that matters to the business.',
          'If prospective customers do not understand the offer, more reach may distribute the same confusion. If the enquiry journey is difficult, more visits can create more opportunities to drop off. If follow-up is inconsistent, an increase in leads may not result in more useful conversations. Activity can be necessary, but it needs a reason and a path to an outcome.',
        ],
        callout: 'Before asking “What else should we do?”, ask “What business change are we trying to make, and what is currently preventing it?”',
      },
      {
        id: 'activity-and-outcomes',
        heading: 'Separate activity metrics from business outcomes.',
        paragraphs: [
          'Activity metrics describe what happened within a channel or experience. Impressions, clicks, sessions, video views, and content interactions can help diagnose delivery or audience response. They are not automatically commercial outcomes.',
          'Business outcomes depend on the organization’s objective. A lead-generation business may care about qualified enquiries and the progression of those enquiries. An online retailer may examine product discovery, checkout completion, and order quality. A service business may need to understand whether the right prospects reach a useful consultation. The relevant measure follows the purpose, not the dashboard default.',
        ],
        table: {
          caption: 'Use channel signals to ask better questions about the business journey.',
          headers: ['Signal', 'What it may indicate', 'What to investigate next'],
          rows: [
            ['More impressions', 'A message or campaign is being shown more often.', 'Is the intended audience seeing it, and does the offer make sense to them?'],
            ['More website visits', 'More people reached a digital experience.', 'Are visitors finding relevant information and taking an appropriate next step?'],
            ['More enquiries', 'More people initiated contact.', 'Are enquiries relevant, handled promptly, and progressing through the agreed process?'],
          ],
        },
      },
      {
        id: 'where-growth-gets-stuck',
        heading: 'Look for the point where progress gets stuck.',
        paragraphs: [
          'Growth is influenced by connected decisions. Positioning shapes whether people understand why an offer may be relevant. The customer journey shapes whether they can evaluate it. Conversion design affects how easily they can act. Lead quality, response, and follow-up influence what happens after an enquiry.',
          'These areas are connected, so diagnosing them separately can miss the handoff between them. A campaign may be attracting the intended audience while the landing page leaves key questions unanswered. The page may be clear while the sales team cannot distinguish urgent enquiries from low-fit ones. The investigation should follow the journey from first contact to the business outcome.',
        ],
        listHeading: 'Questions to trace the journey',
        bullets: [
          'Can the intended customer quickly understand the offer and who it is for?',
          'Does the message match what the visitor finds on the landing page?',
          'Is the next step clear, proportionate, and easy to complete?',
          'Do teams have agreed criteria for what makes an enquiry relevant?',
          'Who owns the response, and can the business see what happens next?',
        ],
      },
      {
        id: 'diagnostic-checklist',
        heading: 'A practical diagnostic before adding activity.',
        paragraphs: [
          'Start with the business question rather than the channel. Write down the outcome that matters, the audience involved, and the current evidence. Be specific about what is observed and what is still an assumption. Then trace the journey to find where evidence suggests progress slows or stops.',
        ],
        steps: [
          { title: 'Name the objective', description: 'Describe the business change in plain language. Avoid starting with a platform metric.' },
          { title: 'Define the audience and offer', description: 'Clarify whose need the offer addresses and what they must understand to consider it.' },
          { title: 'Map the journey', description: 'List the steps from discovery to evaluation, enquiry, purchase, or follow-up.' },
          { title: 'Find the constraint', description: 'Use available data and team observations to locate the most consequential gap.' },
          { title: 'Choose one testable next step', description: 'Agree an action, owner, and indicator before expanding activity.' },
        ],
      },
      {
        id: 'next-steps',
        heading: 'Make the next decision smaller and clearer.',
        paragraphs: [
          'The goal is not to dismiss marketing activity. It is to ensure that activity supports a clear objective and that the business can learn from it. A focused change to a proposition, journey, qualification question, or follow-up process may reveal more than simply increasing the volume of work.',
          'Document the reasoning, the information available, and what would change your mind. Review the agreed indicator after enough time and data have accumulated, while recognizing that market conditions, sales execution, and other factors may also influence outcomes. Then decide whether to refine, extend, or stop the activity.',
        ],
        callout: 'More activity is a choice—not a diagnosis. Understand the bottleneck first, then invest in the intervention most relevant to it.',
      },
    ],
    related: ['strategy-before-tactics', 'fix-before-increasing-ad-spend'],
  },
  {
    slug: 'strategy-before-tactics',
    category: 'Business Strategy',
    title: 'Strategy Before Tactics',
    summary: 'Define the business problem and direction before choosing channels, tools, or campaigns. A simple worksheet helps turn assumptions into decisions.',
    metaTitle: 'Strategy Before Tactics | ORBIRIS INDIA',
    metaDescription: 'Distinguish business objectives, strategy, and tactics, then use a practical worksheet to define customers, constraints, value, and direction.',
    accent: 'strategy',
    solution: { title: 'Strategy & Discovery', route: '/solutions/strategy' },
    sections: [
      {
        id: 'three-levels-of-decision',
        heading: 'Objective, strategy, and tactic answer different questions.',
        paragraphs: [
          'An objective describes the business change being sought. A strategy describes the choices and reasoning that connect the current position to that objective. A tactic is a specific action used to carry out part of the strategy.',
          'Confusing these levels can make a chosen tactic sound like the goal. “Launch paid search” is an action, not a business objective. “Increase qualified demand for a priority service” is closer to an objective, but still needs a strategy: which audience, which value proposition, what journey, and what constraints should guide the work?',
        ],
        table: {
          caption: 'A simple way to separate the decision layers.',
          headers: ['Layer', 'Question it answers', 'Illustrative example'],
          rows: [
            ['Objective', 'What business change matters?', 'Improve the number of suitable conversations for a priority service.'],
            ['Strategy', 'What choices will guide us?', 'Focus on a defined audience and make the service value and next step clearer.'],
            ['Tactic', 'What action will we take?', 'Revise a service page or test a campaign against an agreed audience.'],
          ],
        },
      },
      {
        id: 'why-copying-is-risky',
        heading: 'A competitor’s tactic is not evidence of your strategy.',
        paragraphs: [
          'A visible campaign, platform, or website feature can be tempting to copy because it makes a decision feel concrete. But the reasons behind another organization’s choices may be unknown: its audience, economics, internal capacity, existing brand awareness, or measurement setup may differ.',
          'Borrowing an action without understanding its purpose can add another disconnected activity to your plan. Competitor observation can inform questions and reveal category conventions, but your choices should be grounded in your customers, business model, capabilities, and priorities.',
        ],
        callout: 'Treat competitor activity as a prompt to investigate—not as proof that the same move is right for your business.',
      },
      {
        id: 'strategy-worksheet',
        heading: 'A practical strategy worksheet.',
        paragraphs: [
          'Use these prompts to make the strategic conversation specific. If an answer is uncertain, record it as a question to validate rather than filling the gap with confidence.',
        ],
        bullets: [
          'Customer: Who are we trying to serve, and what situation brings them to us?',
          'Need: What problem are they trying to solve, and what alternatives do they consider?',
          'Value: Why might our offer be useful or meaningfully different for that need?',
          'Constraint: What currently limits progress—awareness, clarity, experience, conversion, capacity, or follow-up?',
          'Outcome: What observable business change would indicate movement in the right direction?',
          'Evidence: What do we know from data, conversations, or operations, and what remains unverified?',
          'Boundaries: What resources, systems, approvals, timing, or dependencies shape the choices?',
        ],
      },
      {
        id: 'hypothetical-example',
        heading: 'Hypothetical example: from requested tactic to a clearer question.',
        paragraphs: [
          'Imagine a business asks for a new advertising campaign because enquiries have slowed. That request identifies a possible tactic, but it does not yet explain the cause. The team might discover that enquiry volume is stable while fit has changed, or that the offer is hard to distinguish, or that the form works but responses are delayed.',
          'Each possibility leads to a different strategic choice. The example is hypothetical and does not describe an ORBIRIS client or project; its purpose is to show why diagnosis should precede commitment to an intervention.',
        ],
      },
      {
        id: 'repeatable-decision-framework',
        heading: 'A repeatable decision framework.',
        paragraphs: [
          'Strategy does not require a large document to be useful. A concise statement can capture the objective, audience, choice, rationale, and how the team will learn. Keep it visible so future tactics can be assessed against it.',
        ],
        steps: [
          { title: 'Frame the objective', description: 'State the desired business change and why it matters now.' },
          { title: 'Describe the audience and constraint', description: 'Identify who is affected and where progress appears limited.' },
          { title: 'Make the strategic choice', description: 'Choose where to focus and what not to prioritize yet.' },
          { title: 'Select tactics that serve the choice', description: 'Explain how each proposed action contributes to the strategy.' },
          { title: 'Set a learning signal', description: 'Agree what evidence will inform the next decision and when to review it.' },
        ],
        callout: 'A sound tactic is not automatically a sound decision. First make the objective and reasoning explicit.',
      },
    ],
    related: ['marketing-activity-vs-business-growth', 'customer-journey-friction'],
  },
  {
    slug: 'fix-before-increasing-ad-spend',
    category: 'Performance Marketing',
    title: 'Fix the Funnel Before Increasing Ad Spend',
    summary: 'More budget cannot reliably compensate for unclear offers, weak landing journeys, poor tracking, or slow follow-up. Diagnose the full path before scaling.',
    metaTitle: 'Fix the Funnel Before Increasing Ad Spend | ORBIRIS INDIA',
    metaDescription: 'Diagnose targeting, offers, landing pages, lead capture, response, and conversion before increasing advertising budgets.',
    accent: 'performance',
    solution: { title: 'Performance & Growth', route: '/solutions/performance-growth' },
    sections: [
      {
        id: 'the-whole-conversion-path',
        heading: 'Advertising is one part of a longer conversion path.',
        paragraphs: [
          'A campaign can bring attention to an offer, but the outcome depends on everything that follows: whether the audience is appropriate, the offer is understandable, the landing page answers important questions, the lead capture works, and the response process gives prospects a useful next step.',
          'If one of these links is weak, adding spend can increase exposure to the same weakness. That does not mean advertising is ineffective. It means budget decisions should be made with a view of the complete journey and evidence about where it is underperforming.',
        ],
      },
      {
        id: 'traffic-or-conversion',
        heading: 'First distinguish a traffic problem from a journey problem.',
        paragraphs: [
          'A traffic problem may involve reach, targeting, search intent, delivery, or the relationship between the message and audience. A conversion or follow-up problem appears after people arrive: they do not understand the offer, cannot complete the next step, or receive no timely response.',
          'The distinction is not always obvious. Tracking gaps, long consideration periods, offline conversations, and changes in sales capacity can obscure what is happening. Check the instrumentation and operational context before drawing a conclusion from a single ratio.',
        ],
        table: {
          caption: 'Use these checkpoints to decide what to investigate—not as universal benchmarks.',
          headers: ['Stage', 'Questions', 'Signals to inspect'],
          rows: [
            ['Targeting', 'Are the intended people seeing the message?', 'Audience reach, search terms or placements, exclusions, and qualified-session patterns.'],
            ['Offer and message', 'Is the value clear and relevant?', 'Message consistency, offer engagement, and feedback from sales or customers.'],
            ['Landing experience', 'Can visitors understand and act?', 'Page engagement, key actions, form errors, and device-specific experience.'],
            ['Lead handling', 'What happens after submission?', 'Delivery, ownership, response timing, qualification, and recorded progression.'],
            ['Business outcome', 'Does activity support the agreed goal?', 'Qualified opportunities, conversion progression, or other objective-specific outcomes.'],
          ],
        },
      },
      {
        id: 'diagnose-the-funnel',
        heading: 'Diagnose each handoff, not just the headline conversion rate.',
        paragraphs: [
          'A single conversion rate can hide very different situations. The campaign may be attracting low-intent traffic, or the page may make the next step unclear. Alternatively, enquiries may be arriving but not being assigned, reviewed, or classified consistently.',
          'Use a small number of stage-specific indicators and verify how they are recorded. For each stage, ask whether the data is complete enough to support a decision and whether someone owns the corresponding operational step.',
        ],
        bullets: [
          'Confirm that campaign links, forms, events, and CRM handoffs are functioning as intended.',
          'Review search intent or audience fit against the offer and business priorities.',
          'Check message continuity from ad or referral through to the landing page.',
          'Test the form and follow the submission into the team’s response process.',
          'Agree what constitutes a relevant enquiry before comparing lead volume.',
        ],
      },
      {
        id: 'prioritized-test-sequence',
        heading: 'A sensible sequence before scaling.',
        paragraphs: [
          'Prioritize tests by likely importance, confidence in the evidence, cost, and effort. Avoid changing targeting, creative, landing pages, and qualification at once if you need to learn which change mattered. The exact sequence should fit the campaign and the available volume.',
        ],
        steps: [
          { title: 'Validate measurement', description: 'Make sure the events and handoffs used for decisions are recorded consistently.' },
          { title: 'Check audience and offer alignment', description: 'Compare intent with the promise, eligibility, and business value of the offer.' },
          { title: 'Review the landing experience', description: 'Make key information, proof the business can support, and next steps clear.' },
          { title: 'Inspect lead handling', description: 'Confirm ownership, response expectations, qualification, and recording.' },
          { title: 'Scale cautiously and review', description: 'Increase investment only with an agreed reason, monitoring plan, and decision threshold.' },
        ],
      },
      {
        id: 'budget-decisions',
        heading: 'Treat budget as an investment decision, not a repair tool.',
        paragraphs: [
          'There is no universal spending level that makes a funnel work. Outcomes vary with the offer, market, competition, audience, creative, landing experience, sales process, and execution. A small controlled test may help answer a specific question, but it cannot guarantee a result.',
          'Before increasing spend, document the hypothesis, the evidence behind it, the additional capacity required, and the conditions under which the team would pause or revise. Clear decision rules protect learning as well as budget.',
        ],
        callout: 'Fix what can be diagnosed, measure what is meaningful, and scale only when the business can explain why the next investment is justified.',
      },
    ],
    related: ['marketing-activity-vs-business-growth', 'website-metrics-vs-business-performance'],
  },
  {
    slug: 'customer-journey-friction',
    category: 'Branding & Customer Experience',
    title: 'Customer Journey Friction: Find Where Progress Stalls',
    summary: 'Inconsistent messaging, missing information, complicated forms, and unclear handoffs can make a customer journey harder than it needs to be.',
    metaTitle: 'Customer Journey Friction | ORBIRIS INDIA',
    metaDescription: 'Map discovery through purchase and retention, audit common sources of customer journey friction, and prioritize practical improvements.',
    accent: 'journey',
    solution: { title: 'Brand & Digital Experience', route: '/solutions/brand-digital-experience' },
    sections: [
      {
        id: 'journeys-cross-systems',
        heading: 'A customer journey crosses more than a website.',
        paragraphs: [
          'People may move from discovery to consideration, enquiry, purchase, onboarding, and retention through a mix of channels and conversations. A website can be one important part, but the experience also depends on marketing messages, service information, forms, response processes, and what happens after a decision.',
          'Friction occurs when a person must work harder than necessary to understand the offer or complete a step. It may be visible in analytics, but it can also appear in repeated customer questions, abandoned enquiries, internal rework, or inconsistent explanations across teams.',
        ],
      },
      {
        id: 'common-friction',
        heading: 'Look for disconnects between what people expect and what they find.',
        paragraphs: [
          'Journey issues often form at the boundaries between teams or touchpoints. A campaign promise may not match the page it opens. A service may be described using internal language rather than customer questions. A form may ask for details before explaining why they are needed.',
        ],
        bullets: [
          'Inconsistent messages across ads, social content, pages, and sales conversations.',
          'An unclear offer, eligibility, price context, or next step.',
          'Important information missing when a customer needs it to compare or decide.',
          'Forms that are unnecessarily long, confusing, or difficult to use on mobile.',
          'Slow, duplicate, or unowned follow-up after a person makes contact.',
          'Disconnected systems that force teams to re-enter information or lose context.',
        ],
      },
      {
        id: 'map-the-real-journey',
        heading: 'Map the journey people actually take.',
        paragraphs: [
          'A useful journey map is grounded in observed behavior and team knowledge, not an idealized funnel alone. Choose a specific audience and task, then follow the steps across channels and internal handoffs. Note what the person is trying to understand, what action they take, and what the organization does in response.',
          'Use analytics, support themes, sales feedback, usability observations, and process documentation where available. Mark gaps in evidence clearly. A map should help a team see dependencies and decide what to investigate—not claim certainty about every customer.',
        ],
        steps: [
          { title: 'Choose a journey and audience', description: 'Be specific about whose experience and which goal you are examining.' },
          { title: 'List touchpoints and actions', description: 'Include discovery, evaluation, forms or conversations, and operational handoffs.' },
          { title: 'Record questions and expectations', description: 'What does the person need to know or trust before continuing?' },
          { title: 'Add evidence and uncertainty', description: 'Attach observed signals and label assumptions that need validation.' },
          { title: 'Identify the costly friction', description: 'Prioritize gaps that impede the objective or create avoidable customer and team effort.' },
        ],
      },
      {
        id: 'friction-audit',
        heading: 'A practical friction audit.',
        paragraphs: [
          'Walk through the journey as a customer would, including the follow-up. Check a mobile device as well as desktop, and ask the team responsible for the next step what information they actually receive.',
        ],
        bullets: [
          'Does each touchpoint make the purpose and next step clear?',
          'Does the information answer the questions relevant to that point in the journey?',
          'Are labels, offer details, and expectations consistent across channels?',
          'Can people complete important tasks without avoidable effort or confusion?',
          'Does the handoff preserve enough context for a useful response?',
          'Can the business observe where people progress, hesitate, or stop?',
        ],
      },
      {
        id: 'prioritize-improvements',
        heading: 'Improve the journey in connected, testable steps.',
        paragraphs: [
          'Branding influences expectations; marketing introduces the promise; the website helps people evaluate and act; operations determine how the organization responds. Improvements are more durable when those pieces are considered together rather than optimized in separate silos.',
          'Start with the friction that matters most to the objective and that the team can realistically address. Clarify ownership, change one meaningful element at a time where practical, and agree what signal would indicate a better experience. Then review the result and update the map.',
        ],
        callout: 'The best journey is not necessarily the most elaborate. It is the one that helps the right person make progress with appropriate clarity and effort.',
      },
    ],
    related: ['strategy-before-tactics', 'website-metrics-vs-business-performance'],
  },
  {
    slug: 'when-to-automate-workflows',
    category: 'Automation & Operations',
    title: 'When Should a Business Automate a Workflow?',
    summary: 'Automation can support repeatable work, but digitizing a confusing process may reproduce its problems. Understand and improve the workflow first.',
    metaTitle: 'When to Automate Business Workflows | ORBIRIS INDIA',
    metaDescription: 'Use a practical decision framework to assess workflow repetition, rules, exceptions, impact, and human judgment before automating.',
    accent: 'operations',
    solution: { title: 'Automation & Systems', route: '/solutions/automation' },
    sections: [
      {
        id: 'automation-is-not-the-first-step',
        heading: 'Automation is a design decision, not a starting assumption.',
        paragraphs: [
          'A request to automate often signals a real source of effort: repeated data entry, delayed routing, manual reminders, or inconsistent reporting. But the workflow may also contain unclear ownership, unnecessary approvals, conflicting rules, or exceptions no one has documented.',
          'Automating before understanding the process can make confusion happen faster and at greater scale. First clarify the outcome, inputs, decisions, handoffs, and failure cases. Then decide whether the process should be simplified, standardized, supported by a tool, or automated in part.',
        ],
        callout: 'Make the process understandable before making it automatic.',
      },
      {
        id: 'signs-to-investigate',
        heading: 'Signs a workflow may be worth investigating.',
        paragraphs: [
          'A process may be a candidate when the same well-defined steps recur, inputs are sufficiently consistent, and delays or errors have a meaningful operational impact. The presence of repetitive work alone is not enough; the proposed change must be maintainable and safe for the business context.',
        ],
        bullets: [
          'The same information is copied or checked in multiple places.',
          'A clear event regularly triggers a predictable next action.',
          'Ownership or status is difficult to see across a handoff.',
          'Routine reminders or report assembly consume attention each cycle.',
          'The process has known rules and a manageable set of exceptions.',
        ],
      },
      {
        id: 'decision-framework',
        heading: 'Assess the workflow before choosing the tool.',
        paragraphs: [
          'Use these dimensions to compare possible workflows. A “no” or “unknown” is not an automatic rejection; it identifies what must be clarified before implementation.',
        ],
        table: {
          caption: 'Workflow readiness questions.',
          headers: ['Dimension', 'Ask', 'If the answer is unclear'],
          rows: [
            ['Repetition', 'Does this happen often enough to matter?', 'Measure frequency and effort before estimating value.'],
            ['Rules', 'Can the normal path be described consistently?', 'Standardize the process and define ownership first.'],
            ['Exceptions', 'Are unusual cases known and manageable?', 'Document escalation and human review paths.'],
            ['Business impact', 'What changes if this step is faster or more reliable?', 'Define an observable operational objective.'],
            ['Human judgment', 'Which decisions still need a person?', 'Keep meaningful review and approval in the workflow.'],
            ['Data and access', 'Are inputs reliable and permissions appropriate?', 'Improve data quality and access controls before connecting systems.'],
          ],
        },
      },
      {
        id: 'examples-and-safeguards',
        heading: 'Choose a bounded use case and design for failure.',
        paragraphs: [
          'Potential use cases include routing an enquiry to an agreed owner, sending a reminder after a defined event, assembling routine information for a report, or notifying a team when a handoff needs attention. These are examples, not recommendations for every business.',
          'A robust workflow defines what happens when data is missing, a system is unavailable, a rule cannot classify a case, or a person needs to intervene. Consider permissions, data quality, logging, monitoring, ownership, and how to pause or reverse the automation. Human oversight is part of the design, not a sign that automation failed.',
        ],
      },
      {
        id: 'select-a-first-workflow',
        heading: 'A practical first-workflow exercise.',
        paragraphs: [
          'Pick one process that is visible, limited in scope, and understood by the people who perform it. Avoid beginning with the most complex cross-company system if a smaller workflow can help the team learn requirements and failure modes first.',
        ],
        steps: [
          { title: 'Name the outcome', description: 'Describe what should improve for customers or the operating team.' },
          { title: 'Draw the current process', description: 'Show triggers, inputs, owners, decisions, handoffs, and exceptions.' },
          { title: 'Remove unnecessary steps', description: 'Simplify and standardize before encoding the process in a tool.' },
          { title: 'Define human and system responsibilities', description: 'Specify approvals, exceptions, permissions, and escalation paths.' },
          { title: 'Pilot and monitor', description: 'Test with a bounded workflow, review failures, and decide whether to refine or stop.' },
        ],
        callout: 'Automation does not always save time or money. Evaluate the total effort to build, monitor, maintain, and safely operate the workflow.',
      },
    ],
    related: ['customer-journey-friction', 'website-metrics-vs-business-performance'],
  },
  {
    slug: 'website-metrics-vs-business-performance',
    category: 'Technology & Digital Systems',
    title: 'Website Metrics vs. Business Performance',
    summary: 'Traffic and engagement signals are useful when connected to the website’s purpose, a meaningful business objective, and reliable measurement.',
    metaTitle: 'Website Metrics vs. Business Performance | ORBIRIS INDIA',
    metaDescription: 'Connect website traffic, engagement, and conversion signals to business objectives while accounting for data quality and attribution limits.',
    accent: 'measurement',
    solution: { title: 'Technology Solutions', route: '/solutions/technology' },
    sections: [
      {
        id: 'metrics-need-a-purpose',
        heading: 'A metric is useful when it helps answer a decision.',
        paragraphs: [
          'Visits, page views, time on page, and engagement events describe activity within a website or analytics system. They can help teams notice patterns, but a rise or fall does not explain by itself whether the business is healthier or whether a customer need is being met.',
          'Business performance depends on the site’s role. A lead-generation site may help the right prospect understand a service and start a relevant conversation. An ecommerce site may help customers discover products, evaluate them, and complete an order. A support site may help users find answers. Define the purpose before deciding which metrics matter.',
        ],
      },
      {
        id: 'measurement-levels',
        heading: 'Separate traffic, engagement, conversion, and outcomes.',
        paragraphs: [
          'These measurement layers can inform one another, but they are not interchangeable. Traffic measures describe visits or reach. Engagement signals describe interactions with content or features. Conversion measures describe defined actions. Business outcomes connect those actions to the organization’s objectives, subject to data availability and attribution limits.',
        ],
        table: {
          caption: 'An example measurement hierarchy.',
          headers: ['Layer', 'Example signal', 'Interpret carefully'],
          rows: [
            ['Traffic', 'Sessions to a priority page.', 'Check source, intent, audience, and tracking quality.'],
            ['Engagement', 'Visitors view product details or use a comparison tool.', 'Interaction does not prove comprehension or purchase intent.'],
            ['Conversion', 'A form submission or completed checkout.', 'Validate event implementation, duplicates, and completion quality.'],
            ['Business outcome', 'Qualified opportunity progression or an order relevant to the objective.', 'Consider offline activity, timing, margin, attribution, and other influences.'],
          ],
        },
      },
      {
        id: 'select-by-website-purpose',
        heading: 'Choose measures that match the website’s job.',
        paragraphs: [
          'For a lead-generation website, a useful view might connect relevant service-page engagement to completed enquiries, qualification, and progression where the organization can track those steps. The quality of the conversation may matter more than the raw number of form submissions.',
          'For an ecommerce website, teams may examine product discovery, product detail engagement, add-to-cart, checkout completion, and order signals that fit the business objective. Each event needs a consistent definition; an order count alone may not capture returns, margin, stock constraints, or repeat behavior.',
        ],
        bullets: [
          'What decision will this metric help the team make?',
          'Which audience, page, or journey step does it represent?',
          'Is the event defined consistently and captured reliably?',
          'Can the team connect it to downstream outcomes without overstating attribution?',
          'What contextual factors could explain a change?',
        ],
      },
      {
        id: 'data-quality-and-context',
        heading: 'Data quality and context set the limits of interpretation.',
        paragraphs: [
          'Analytics can be affected by consent choices, blockers, device changes, duplicate events, missing integrations, and inconsistent naming. Sales or purchase outcomes may occur offline or after a longer consideration period. A report can look precise while representing only part of the journey.',
          'Record how a metric is defined, what data it uses, what is missing, and how frequently it is reviewed. Compare like with like where possible, and avoid attributing every change to a single campaign or website release when other factors may be involved.',
        ],
      },
      {
        id: 'practical-measurement-framework',
        heading: 'A practical measurement framework for business owners.',
        paragraphs: [
          'A useful measurement plan can fit on one page. It should help the team understand what it is trying to improve, what signals are available, and what decisions follow from what it learns.',
        ],
        steps: [
          { title: 'State the website objective', description: 'Explain the role the website should play in a wider business or customer journey.' },
          { title: 'Choose a primary outcome', description: 'Identify an outcome the team can define and access with reasonable confidence.' },
          { title: 'Select diagnostic signals', description: 'Use relevant traffic, engagement, and conversion measures to investigate progress.' },
          { title: 'Check collection and limitations', description: 'Validate events, definitions, consent impacts, integrations, and attribution gaps.' },
          { title: 'Set a review and decision', description: 'Agree when to review, what context to include, and what action different findings may support.' },
        ],
        callout: 'A dashboard is not a strategy. Measure the signals that help you make a better business decision, and be explicit about what they cannot tell you.',
      },
    ],
    related: ['fix-before-increasing-ad-spend', 'customer-journey-friction'],
  },
]

export function getInsightArticle(slug) {
  return insightArticles.find((article) => article.slug === slug)
}

export function getInsightWordCount(article) {
  const content = [
    article.title,
    article.summary,
    ...article.sections.flatMap((section) => [
      section.heading,
      ...(section.paragraphs || []),
      section.callout || '',
      section.listHeading || '',
      ...(section.bullets || []),
      ...(section.steps || []).flatMap((step) => [step.title, step.description]),
      ...(section.table
        ? [section.table.caption, ...section.table.headers, ...section.table.rows.flat()]
        : []),
    ]),
  ].join(' ')

  return content.trim().split(/\s+/).filter(Boolean).length
}
