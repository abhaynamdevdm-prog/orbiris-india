<script setup>
import { RouterLink } from 'vue-router'
import Container from './Container.vue'
import { primaryNavigation, solutionNavigation, industryNavigation, legalNavigation } from '../../data/navigation'

const companyLinks = primaryNavigation.filter((item) => item.to !== '/insights')
</script>

<template>
  <footer class="site-footer">
    <Container>
      <div class="site-footer__main">
        <div class="site-footer__intro">
          <RouterLink to="/" class="site-footer__brand" aria-label="ORBIRIS INDIA home">
            <img
              class="site-footer__logo"
              src="/assets/brand/orbiris-logo-primary.png"
              alt=""
              width="180"
              height="180"
            />
          </RouterLink>
          <p class="site-footer__description">A business-first digital growth and transformation partner.</p>
          <a
            class="site-footer__social"
            href="https://www.instagram.com/orbirisindia"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit ORBIRIS INDIA on Instagram, @orbirisindia (opens in a new tab)"
          >
            Instagram <span>@orbirisindia</span>
          </a>
        </div>
        <div>
          <h2 class="site-footer__heading">Explore</h2>
          <nav class="site-footer__links" aria-label="Explore">
            <RouterLink v-for="item in companyLinks" :key="item.to" :to="item.to" class="site-footer__link" active-class="site-footer__link--active">
              {{ item.label }}
            </RouterLink>
            <RouterLink to="/insights" class="site-footer__link" active-class="site-footer__link--active">Insights</RouterLink>
          </nav>
        </div>
        <div>
          <h2 class="site-footer__heading">Solutions</h2>
          <nav class="site-footer__links" aria-label="Solutions">
            <RouterLink v-for="item in solutionNavigation" :key="item.to" :to="item.to" class="site-footer__link" active-class="site-footer__link--active">
              {{ item.label }}
            </RouterLink>
          </nav>
        </div>
        <div>
          <h2 class="site-footer__heading">Industries</h2>
          <nav class="site-footer__links" aria-label="Industries">
            <RouterLink v-for="item in industryNavigation" :key="item.to" :to="item.to" class="site-footer__link" active-class="site-footer__link--active">
              {{ item.label }}
            </RouterLink>
            <RouterLink to="/contact" class="site-footer__link" active-class="site-footer__link--active">Contact</RouterLink>
          </nav>
        </div>
      </div>
      <div class="site-footer__bottom">
        <span>© {{ new Date().getFullYear() }} ORBIRIS INDIA. All rights reserved.</span>
        <nav class="site-footer__legal" aria-label="Legal">
          <RouterLink v-for="item in legalNavigation" :key="item.to" :to="item.to" class="site-footer__link" active-class="site-footer__link--active">
            {{ item.label }}
          </RouterLink>
        </nav>
      </div>
    </Container>
  </footer>
</template>
