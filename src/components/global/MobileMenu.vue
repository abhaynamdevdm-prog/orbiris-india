<script setup>
import { RouterLink } from 'vue-router'
import { useRoute } from 'vue-router'
import Container from './Container.vue'
import { primaryNavigation, solutionNavigation } from '../../data/navigation'

defineEmits(['navigate'])
const route = useRoute()
</script>

<template>
  <nav class="mobile-menu" id="mobile-navigation" aria-label="Mobile navigation">
    <Container>
      <div class="mobile-menu__links">
        <RouterLink
          v-for="item in primaryNavigation"
          :key="item.to"
          :to="item.to"
          class="mobile-menu__link"
          :class="{ 'mobile-menu__link--active': route.path === item.to || route.path.startsWith(`${item.to}/`) }"
          active-class="mobile-menu__link--active"
          @click="$emit('navigate')"
        >
          {{ item.label }}
        </RouterLink>
        <p class="mobile-menu__group-title">Solutions</p>
        <div class="mobile-menu__solutions">
          <RouterLink
            v-for="item in solutionNavigation"
            :key="item.to"
            :to="item.to"
            class="mobile-menu__solution"
            active-class="mobile-menu__solution--active"
            @click="$emit('navigate')"
          >
            {{ item.label }}
          </RouterLink>
        </div>
        <RouterLink to="/contact" class="mobile-menu__link" @click="$emit('navigate')">Contact</RouterLink>
      </div>
    </Container>
  </nav>
</template>
