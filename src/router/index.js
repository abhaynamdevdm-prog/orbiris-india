import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import PlaceholderView from '../views/PlaceholderView.vue'
import SolutionPlaceholderView from '../views/solutions/SolutionPlaceholderView.vue'
import HomePage from '../views/HomePage.vue'
import WhyUsPage from '../views/WhyUsPage.vue'
import AboutPage from '../views/AboutPage.vue'
import ContactPage from '../views/ContactPage.vue'
import LegalDocumentPage from '../views/LegalDocumentPage.vue'
import { getInsightArticle } from '../data/insights.js'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: HomePage,
        meta: {
          title: 'ORBIRIS INDIA | Turning Business Challenges into Digital Growth',
          description: 'ORBIRIS helps businesses identify what is holding them back, build the right digital systems, and turn strategy into measurable growth.',
          breadcrumb: 'Home',
        },
      },
      {
        path: 'why-us',
        name: 'why-us',
        component: WhyUsPage,
        meta: {
          title: 'Why ORBIRIS INDIA | A Business-First Digital Growth Partner',
          description: 'Discover the ORBIRIS approach to connecting business strategy, brand experience, marketing, technology, and systems for more coordinated digital growth.',
          breadcrumb: 'Why Us',
        },
      },
      {
        path: 'solutions',
        name: 'solutions',
        component: () => import('../views/SolutionsPage.vue'),
        meta: {
          title: 'Digital Growth Solutions | ORBIRIS INDIA',
          description: "Explore ORBIRIS INDIA's connected approach to business strategy, brand experience, performance marketing, technology, and automation.",
          breadcrumb: 'Solutions',
        },
      },
      {
        path: 'solutions/strategy',
        name: 'strategy',
        component: () => import('../views/StrategyDiscoveryPage.vue'),
        meta: {
          title: 'Strategy & Discovery | ORBIRIS INDIA',
          description: 'Explore a business-first approach to digital strategy, audience understanding, competitive research, opportunity prioritization, and growth roadmaps.',
          breadcrumb: 'Strategy & Discovery',
        },
      },
      {
        path: 'solutions/brand-digital-experience',
        name: 'brand-digital-experience',
        component: () => import('../views/BrandDigitalExperiencePage.vue'),
        meta: {
          title: 'Brand & Digital Experience | ORBIRIS INDIA',
          description: 'Build a more coherent brand through strategic positioning, visual identity, website experience, messaging and connected digital touchpoints.',
          breadcrumb: 'Brand & Digital Experience',
        },
      },
      {
        path: 'solutions/performance-growth',
        name: 'performance-growth',
        component: () => import('../views/PerformanceGrowthPage.vue'),
        meta: {
          title: 'Performance & Growth | ORBIRIS INDIA',
          description: 'Connect paid acquisition, campaign strategy, conversion experience, measurement and continuous optimization through a business-first performance growth approach.',
          breadcrumb: 'Performance & Growth',
        },
      },
      {
        path: 'solutions/technology',
        name: 'technology-solution',
        component: () => import('../views/TechnologySolutionsPage.vue'),
        meta: {
          title: 'Technology Solutions | ORBIRIS INDIA',
          description: 'Connect business workflows, digital platforms, data foundations and technology planning through a practical, business-first approach.',
          breadcrumb: 'Technology Solutions',
        },
      },
      {
        path: 'solutions/automation',
        name: 'automation',
        component: () => import('../views/AutomationSystemsPage.vue'),
        meta: {
          title: 'Automation & Systems | ORBIRIS INDIA',
          description: 'Improve business workflows through process design, task automation, system coordination, operational visibility and practical human oversight.',
          breadcrumb: 'Automation & Systems',
        },
      },
      {
        path: 'how-we-work',
        name: 'how-we-work',
        component: () => import('../views/HowWeWorkPage.vue'),
        meta: {
          title: 'How We Work | ORBIRIS INDIA',
          description: 'Discover how ORBIRIS INDIA approaches business challenges through discovery, strategy, implementation, measurement and continuous improvement.',
          breadcrumb: 'How We Work',
        },
      },
      {
        path: 'industries',
        name: 'industries',
        component: () => import('../views/IndustriesPage.vue'),
        meta: {
          title: 'Industries We Support | ORBIRIS INDIA',
          description: 'Explore how ORBIRIS INDIA approaches business challenges across healthcare, manufacturing, retail, real estate, education, professional services, and technology.',
          breadcrumb: 'Industries',
        },
      },
      {
        path: 'industries/healthcare',
        name: 'healthcare',
        component: () => import('../views/IndustryDetailPage.vue'),
        props: { industryKey: 'healthcare' },
        meta: {
          title: 'Digital Growth for Healthcare | ORBIRIS INDIA',
          description: 'Explore a business-first approach to healthcare service discovery, clear communication, patient enquiries, digital experiences, and responsible workflow planning.',
          breadcrumb: 'Healthcare',
        },
      },
      {
        path: 'industries/manufacturing',
        name: 'manufacturing',
        component: () => import('../views/IndustryDetailPage.vue'),
        props: { industryKey: 'manufacturing' },
        meta: {
          title: 'Digital Growth for Manufacturing | ORBIRIS INDIA',
          description: 'Explore how clearer technical product information, B2B buyer journeys, qualified enquiries, distributor support, and sales handoffs can be approached.',
          breadcrumb: 'Manufacturing',
        },
      },
      {
        path: 'industries/retail',
        name: 'retail',
        component: () => import('../views/IndustryDetailPage.vue'),
        props: { industryKey: 'retail' },
        meta: {
          title: 'Digital Growth for Retail | ORBIRIS INDIA',
          description: 'Explore a business-first approach to retail product discovery, customer journeys, digital touchpoints, campaign measurement, and repeat engagement.',
          breadcrumb: 'Retail',
        },
      },
      {
        path: 'industries/real-estate',
        name: 'real-estate',
        component: () => import('../views/IndustryDetailPage.vue'),
        props: { industryKey: 'real-estate' },
        meta: {
          title: 'Digital Growth for Real Estate | ORBIRIS INDIA',
          description: 'Explore a business-first approach to real estate project discovery, clear information, enquiry quality, sales routing, and campaign measurement.',
          breadcrumb: 'Real Estate',
        },
      },
      {
        path: 'industries/education',
        name: 'education',
        component: () => import('../views/IndustryDetailPage.vue'),
        props: { industryKey: 'education' },
        meta: {
          title: 'Digital Growth for Education | ORBIRIS INDIA',
          description: 'Explore how education providers can approach course discovery, programme information, prospective-student journeys, admissions enquiries, and measurement.',
          breadcrumb: 'Education',
        },
      },
      {
        path: 'industries/professional-services',
        name: 'professional-services',
        component: () => import('../views/IndustryDetailPage.vue'),
        props: { industryKey: 'professional-services' },
        meta: {
          title: 'Digital Growth for Professional Services | ORBIRIS INDIA',
          description: 'Explore a business-first approach to communicating professional expertise, service differentiation, consultation journeys, and enquiry follow-up.',
          breadcrumb: 'Professional Services',
        },
      },
      {
        path: 'industries/technology',
        name: 'technology-industry',
        component: () => import('../views/IndustryDetailPage.vue'),
        props: { industryKey: 'technology' },
        meta: {
          title: 'Digital Growth for Technology Companies | ORBIRIS INDIA',
          description: 'Explore how technology companies can clarify product value, support product evaluation, improve demo journeys, and coordinate marketing and sales.',
          breadcrumb: 'Technology',
        },
      },
      {
        path: 'work',
        name: 'work',
        component: () => import('../views/WorkPage.vue'),
        meta: {
          title: 'Our Work | ORBIRIS INDIA',
          description: 'Explore the ORBIRIS INDIA approach to business challenges, digital strategy, connected experiences, performance improvement, technology, and systems.',
          breadcrumb: 'Work',
        },
      },
      {
        path: 'insights',
        name: 'insights',
        component: () => import('../views/InsightsPage.vue'),
        meta: {
          title: 'Business Insights & Digital Strategy | ORBIRIS INDIA',
          description: 'Explore practical perspectives on business growth, digital strategy, branding, performance marketing, technology, automation, and customer experience.',
          breadcrumb: 'Insights',
        },
      },
      {
        path: 'insights/:slug',
        name: 'insight-article',
        component: () => import('../views/InsightArticlePage.vue'),
        props: (route) => ({ slug: route.params.slug }),
        meta: {
          title: 'Insights | ORBIRIS INDIA',
          description: 'Editorial drafts and practical perspectives on business growth and digital strategy from ORBIRIS INDIA.',
        },
      },
      { path: 'about', name: 'about', component: AboutPage, meta: { title: 'About ORBIRIS INDIA | Business-First Digital Growth', description: 'Learn about the ORBIRIS INDIA philosophy: understand the business challenge, connect strategy with digital execution, and focus on practical growth.', breadcrumb: 'About' } },
      { path: 'contact', name: 'contact', component: ContactPage, meta: { title: 'Start a Conversation | ORBIRIS INDIA', description: 'Tell ORBIRIS INDIA about your business challenge, growth objective, or digital opportunity and start a conversation on WhatsApp.', breadcrumb: 'Contact' } },
      { path: 'privacy-policy', name: 'privacy-policy', component: LegalDocumentPage, meta: { title: 'Privacy Policy | ORBIRIS INDIA', description: 'Read how ORBIRIS INDIA describes the handling of information submitted through its website and contact channels.', breadcrumb: 'Privacy Policy' } },
      { path: 'terms', name: 'terms', component: LegalDocumentPage, meta: { title: 'Terms of Use | ORBIRIS INDIA', description: 'Review the terms governing access to and use of the ORBIRIS INDIA website and its informational content.', breadcrumb: 'Terms of Use' } },
      { path: 'cookie-policy', name: 'cookie-policy', component: LegalDocumentPage, meta: { title: 'Cookie Policy | ORBIRIS INDIA', description: 'Learn about cookies and external technologies used by the ORBIRIS INDIA website.', breadcrumb: 'Cookie Policy' } },
      { path: ':pathMatch(.*)*', name: 'not-found', component: PlaceholderView, meta: { title: 'Page not found', breadcrumb: 'Page not found' } },
    ],
  },
]

const defaultDescription = 'ORBIRIS INDIA is a business-first digital growth and transformation partner.'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

router.afterEach((to) => {
  const insightArticle = to.name === 'insight-article' ? getInsightArticle(to.params.slug) : undefined
  const title = insightArticle?.metaTitle
    || (to.name === 'insight-article' ? 'Insight Not Found | ORBIRIS INDIA' : to.meta.title)
  document.title = title?.includes('|')
    ? title
    : `${title || 'ORBIRIS INDIA'} | ORBIRIS INDIA`

  const description = insightArticle?.metaDescription
    || (to.name === 'insight-article'
      ? 'This insight is unavailable. Browse the ORBIRIS INDIA editorial library for current articles and drafts.'
      : to.meta.description || defaultDescription)
  const descriptionElement = document.querySelector('meta[name="description"]')
  if (descriptionElement) descriptionElement.setAttribute('content', description)
})

export default router
