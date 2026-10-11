<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import Container from '../components/global/Container.vue'
import Breadcrumb from '../components/global/Breadcrumb.vue'
import Icon from '../components/global/Icon.vue'

const route = useRoute()

const documents = {
  'privacy-policy': {
    eyebrow: 'Privacy Policy',
    title: 'Information and your choices.',
    introduction: 'This page describes how the ORBIRIS INDIA website handles information you choose to provide while browsing the site or using its contact options.',
    sections: [
      {
        title: '1. Scope',
        paragraphs: [
          'This policy concerns interactions with the ORBIRIS INDIA website. It describes the contact form currently provided on the site and the choices involved when you use its WhatsApp link.',
          'This page is informational and is not a statement about systems, records, or processes that have not been verified.',
        ],
      },
      {
        title: '2. Information you may provide',
        paragraphs: ['The contact form asks for the following details. Some are required to prepare a message; others are optional:'],
        items: [
          'Full name and work email address.',
          'Company or brand name and website URL, if you choose to provide them.',
          'Area of interest and project stage.',
          'Preferred contact method and optional phone number.',
          'A description of the business challenge or improvement you want to discuss.',
        ],
      },
      {
        title: '3. Contact form and WhatsApp',
        paragraphs: [
          'When you submit the contact form, the website prepares a message in your browser using the details you entered and offers to open WhatsApp. The site does not submit those form values to an ORBIRIS website API or save them in browser local storage or session storage.',
          'WhatsApp opens only after you choose to submit the form or follow a WhatsApp link. Review the prepared message in WhatsApp and decide whether to send it. Opening WhatsApp does not mean ORBIRIS INDIA has received your enquiry.',
          'If you send the message, WhatsApp/Meta processes it under its own terms and privacy practices. This website does not control that service or its handling of information.',
        ],
      },
      {
        title: '4. How information may be used',
        paragraphs: [
          'If you choose to send an enquiry, the information in your message may be used to understand and respond to your business request and to discuss services relevant to that request.',
          'The website does not claim to use an automated CRM or marketing database to process contact-form details.',
        ],
      },
      {
        title: '5. Browser handling, storage, and retention',
        paragraphs: [
          'Before you choose to send a WhatsApp message, the contact details you enter are used by the page to prepare the message in your browser. The page does not store those values in local storage or session storage. If you send the message, it is then handled by WhatsApp and the recipient account.',
          'Website hosting and network infrastructure may process technical request information. The hosting configuration and any server-log retention periods have not been verified for this policy, so no retention period or storage arrangement is stated here.',
        ],
      },
      {
        title: '6. Third-party services',
        paragraphs: [
          'The site loads the DM Sans and Manrope typefaces through Google Fonts. A browser may make requests to Google to retrieve those font files; Google handles those requests under its own applicable terms and privacy practices.',
          'WhatsApp is an external service used only when you choose to open it. The site may also be delivered through hosting or network providers whose deployment configuration is outside the information available on this page.',
        ],
      },
      {
        title: '7. Security',
        paragraphs: [
          'Reasonable care should be taken when deciding what information to include in an enquiry. No specific security control or absolute security guarantee is represented by this page.',
        ],
      },
      {
        title: '8. Your choices and questions',
        paragraphs: [
          'You can choose not to complete the form, leave optional fields blank, or review and edit the prepared WhatsApp message before sending it. If you have a question about an enquiry you chose to send, contact ORBIRIS INDIA using the available contact page.',
        ],
      },
      {
        title: '9. Children',
        paragraphs: [
          'The website and contact form are intended for business enquiries, not for children. Please do not submit a child’s personal information through the site.',
        ],
      },
      {
        title: '10. Policy updates',
        paragraphs: [
          'This page may be updated when the website or its information-handling practices change. No last-updated date is shown until an approved revision date is available.',
        ],
      },
    ],
    closing: 'For questions about this policy or an enquiry, use the contact options below.',
  },
  terms: {
    eyebrow: 'Terms of Use',
    title: 'Using this website.',
    introduction: 'These terms describe access to and use of the ORBIRIS INDIA website. They are website terms, not a service proposal or signed agreement for professional services.',
    sections: [
      {
        title: '1. Acceptance and scope',
        paragraphs: [
          'By accessing or using this website, you agree to use it in accordance with these website terms and applicable requirements. If you do not agree, do not use the website.',
          'Any work ORBIRIS INDIA may undertake for a business would be subject to separately discussed and agreed scope, responsibilities, and commercial terms.',
        ],
      },
      {
        title: '2. Website information',
        paragraphs: [
          'Website copy, examples, frameworks, and descriptions are provided for general informational purposes. They are not a substitute for advice tailored to your business, technical environment, or circumstances.',
          'Consider your own requirements and obtain appropriate professional advice before making decisions based on general website information.',
        ],
      },
      {
        title: '3. No guaranteed results',
        paragraphs: [
          'Strategy, marketing, brand, technology, and automation outcomes depend on many factors, including business context, implementation, customer behavior, data quality, resources, and external conditions.',
          'The website does not guarantee revenue, traffic, enquiries, conversion, growth, or any other specific result.',
        ],
      },
      {
        title: '4. Content and intellectual property',
        paragraphs: [
          'Unless otherwise stated, website text, layouts, and original visual material are presented as content associated with ORBIRIS INDIA. Names, marks, software, fonts, and other material belonging to third parties remain subject to their respective rights.',
          'You may view and use the site for ordinary, personal or internal business reference. Do not reproduce, redistribute, or commercially exploit website material in a way that infringes applicable rights or misrepresents its source. Rights and permissions remain subject to the actual ownership and any third-party terms that apply.',
        ],
      },
      {
        title: '5. Permitted use',
        paragraphs: ['You must not use the website to:'],
        items: [
          'Break the law, infringe another person’s rights, or submit content you are not entitled to share.',
          'Introduce malicious code, attempt unauthorized access, or interfere with the website or its infrastructure.',
          'Disrupt availability, probe systems without authorization, or misuse the site in a way that could harm other visitors or services.',
        ],
      },
      {
        title: '6. Third-party links and services',
        paragraphs: [
          'The website may link to external services, including WhatsApp and Instagram. Those services are operated independently and are governed by their own terms and privacy practices. ORBIRIS INDIA does not control their availability or content.',
        ],
      },
      {
        title: '7. Enquiries and communications',
        paragraphs: [
          'Preparing or submitting an enquiry does not itself create a client relationship, signed agreement, or purchase commitment. The contact form prepares a WhatsApp message for you to review; you must choose to send it yourself.',
          'An enquiry is not confirmed as received merely because a WhatsApp page or application opens.',
        ],
      },
      {
        title: '8. Availability and changes',
        paragraphs: [
          'Website content, links, and functionality may change, be updated, or become temporarily unavailable. No uninterrupted availability is promised.',
        ],
      },
      {
        title: '9. Responsibility',
        paragraphs: [
          'To the extent permitted by applicable requirements, website information and functionality are provided without a representation that they will be error-free, suitable for every purpose, or available at all times.',
          'You remain responsible for decisions made using general website information. Nothing in these terms is intended to exclude a responsibility that cannot lawfully be excluded or to replace rights that apply under relevant requirements.',
        ],
      },
      {
        title: '10. Changes to these terms',
        paragraphs: [
          'These terms may be revised when the website or its operation changes. Any approved revision date will be reflected on this page; no unverified effective date is stated.',
        ],
      },
    ],
    closing: 'For questions about the website terms, use the contact page.',
  },
  'cookie-policy': {
    eyebrow: 'Cookie Policy',
    title: 'Cookies and website technologies.',
    introduction: 'This page explains the cookie and related technology behavior identified in the current website application. Hosting and deployment services are not fully described by the application source alone.',
    sections: [
      {
        title: '1. Cookies used by this website',
        paragraphs: [
          'The current website application code does not intentionally set cookies or include an analytics or advertising tracker. It does not use a cookie-consent platform.',
          'This describes the application code inspected for this site; it is not a guarantee about cookies or technical logs that may be used by the hosting or network configuration, which has not been verified here.',
        ],
      },
      {
        title: '2. External fonts and services',
        paragraphs: [
          'The site requests the DM Sans and Manrope typefaces from Google Fonts. A browser may make requests to Google to retrieve these files, and Google’s own services and policies govern its handling of those requests.',
          'If you follow a WhatsApp or Instagram link, your browser connects to that external service. Its technologies and privacy practices are governed by that provider, not this website.',
        ],
      },
      {
        title: '3. Your choices',
        paragraphs: [
          'Browser settings can provide controls for cookies and site data. Blocking certain external resources may affect how a third-party service or typeface loads. Browser controls do not change how the provider handles a request after you choose to visit its service.',
        ],
      },
      {
        title: '4. Policy updates',
        paragraphs: [
          'This page may be revised if the website application or verified deployment configuration changes. No last-updated date is shown until an approved revision date is available.',
        ],
      },
    ],
    closing: 'For questions about this page, use the contact page.',
  },
}

const documentContent = computed(() => documents[route.name] || documents['privacy-policy'])
const breadcrumbs = computed(() => [
  { label: 'Home', to: '/' },
  { label: documentContent.value.eyebrow },
])
</script>

<template>
  <div class="legal-page">
    <section class="legal-hero">
      <Container class="legal-hero__inner">
        <Breadcrumb :items="breadcrumbs" />
        <p class="legal-eyebrow"><span></span>{{ documentContent.eyebrow }}</p>
        <h1>{{ documentContent.title }}</h1>
        <p class="legal-hero__intro">{{ documentContent.introduction }}</p>
      </Container>
      <div class="legal-hero__grid" aria-hidden="true"></div>
    </section>

    <section class="legal-content">
      <Container narrow>
        <article v-for="section in documentContent.sections" :key="section.title" class="legal-section">
          <h2>{{ section.title }}</h2>
          <p v-for="paragraph in section.paragraphs" :key="paragraph">{{ paragraph }}</p>
          <ul v-if="section.items" class="legal-section__list">
            <li v-for="item in section.items" :key="item">{{ item }}</li>
          </ul>
        </article>

        <div class="legal-contact">
          <p>{{ documentContent.closing }}</p>
          <RouterLink to="/contact">Contact ORBIRIS INDIA <Icon name="arrow" :size="16" /></RouterLink>
          <a
            v-if="route.name === 'privacy-policy'"
            href="https://wa.me/917489589225"
            target="_blank"
            rel="noopener noreferrer"
          >WhatsApp: +91 74895 89225 <Icon name="arrow" :size="15" /></a>
        </div>
      </Container>
    </section>
  </div>
</template>

<style scoped>
.legal-page { color: var(--color-text); }
.legal-hero { position: relative; overflow: hidden; padding-block: clamp(3rem, 7vw, 5.5rem); background: var(--color-navy); color: white; }
.legal-hero__inner { position: relative; z-index: 1; }
.legal-hero :deep(.breadcrumb) { color: #b6c5d5; }
.legal-hero :deep(.breadcrumb a:hover), .legal-hero :deep(.breadcrumb__current) { color: white; }
.legal-eyebrow { display: flex; align-items: center; gap: 0.6rem; margin: 2.3rem 0 0; color: #c5d5df; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.13em; text-transform: uppercase; }
.legal-eyebrow span { width: 7px; height: 7px; border-radius: 50%; background: var(--color-teal); box-shadow: 0 0 0 5px rgba(0, 209, 167, 0.13); }
.legal-hero h1 { max-width: 780px; margin: 1rem 0 0; color: white; font-family: var(--font-display); font-size: clamp(2.5rem, 6vw, 4.5rem); letter-spacing: -0.06em; line-height: 1.05; }
.legal-hero__intro { max-width: 760px; margin: 1.2rem 0 0; color: #c0ced9; font-size: 1rem; line-height: 1.8; }
.legal-hero__grid { position: absolute; inset: 0; opacity: 0.09; pointer-events: none; background-image: linear-gradient(rgba(133, 180, 208, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(133, 180, 208, 0.2) 1px, transparent 1px); background-size: 48px 48px; mask-image: linear-gradient(90deg, transparent, black 75%); }
.legal-content { padding-block: clamp(3rem, 7vw, 6rem); background: var(--color-background); }
.legal-section { border-bottom: 1px solid var(--color-border); padding-block: 1.35rem; }
.legal-section:first-child { padding-top: 0; }
.legal-section h2 { margin: 0; color: var(--color-navy); font-family: var(--font-display); font-size: clamp(1.1rem, 2.3vw, 1.35rem); letter-spacing: -0.025em; line-height: 1.4; }
.legal-section p, .legal-section__list { color: #40546a; font-size: 0.9rem; line-height: 1.8; }
.legal-section p { margin: 0.7rem 0 0; }
.legal-section__list { display: grid; gap: 0.4rem; margin: 0.65rem 0 0; padding-left: 1.25rem; }
.legal-section__list li::marker { color: var(--color-link); }
.legal-contact { display: grid; justify-items: start; gap: 0.85rem; padding-top: 1.7rem; }
.legal-contact p { max-width: 680px; margin: 0; color: #40546a; font-size: 0.9rem; line-height: 1.7; }
.legal-contact a { display: inline-flex; min-height: 44px; align-items: center; gap: 0.4rem; color: var(--color-link); font-size: 0.85rem; font-weight: 700; text-decoration: none; }
.legal-contact a:hover { color: var(--color-navy); text-decoration: underline; }

@media (max-width: 430px) {
  .legal-eyebrow { margin-top: 1.8rem; }
  .legal-section p, .legal-section__list, .legal-contact p { font-size: 0.84rem; }
}
</style>
