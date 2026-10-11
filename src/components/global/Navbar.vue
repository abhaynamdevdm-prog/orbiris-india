<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import Container from './Container.vue'
import Button from './Button.vue'
import Icon from './Icon.vue'
import MobileMenu from './MobileMenu.vue'
import { primaryNavigation, solutionNavigation } from '../../data/navigation'

const route = useRoute()
const isSolutionsOpen = ref(false)
const isMobileOpen = ref(false)
const solutionsButton = ref(null)
const solutionsMenu = ref(null)

async function openSolutionsMenu(position = 'first') {
  isSolutionsOpen.value = true
  await nextTick()
  const links = solutionsMenu.value?.querySelectorAll('[role="menuitem"]')
  if (!links?.length) return
  links[position === 'last' ? links.length - 1 : 0].focus()
}

function onSolutionsMenuKeydown(event) {
  const items = [...(solutionsMenu.value?.querySelectorAll('[role="menuitem"]') || [])]
  const currentIndex = items.indexOf(document.activeElement)

  if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
    event.preventDefault()
    const direction = event.key === 'ArrowDown' ? 1 : -1
    items[(currentIndex + direction + items.length) % items.length]?.focus()
  } else if (event.key === 'Home') {
    event.preventDefault()
    items[0]?.focus()
  } else if (event.key === 'End') {
    event.preventDefault()
    items[items.length - 1]?.focus()
  }
}

function onGlobalKeydown(event) {
  if (event.key === 'Escape') {
    if (isSolutionsOpen.value) {
      isSolutionsOpen.value = false
      solutionsButton.value?.focus()
    }
    isMobileOpen.value = false
  }
}

function closeMenus() {
  isSolutionsOpen.value = false
  isMobileOpen.value = false
}

watch(() => route.fullPath, closeMenus)
onMounted(() => window.addEventListener('keydown', onGlobalKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', onGlobalKeydown))
</script>

<template>
  <header class="site-header">
    <Container>
      <div class="navbar">
        <RouterLink to="/" class="navbar__brand" aria-label="ORBIRIS INDIA home">
          <img class="navbar__logo-icon" src="/assets/brand/orbiris-logo-icon.png" alt="" width="34" height="34" />
          <span>ORBIRIS INDIA</span>
        </RouterLink>

        <nav class="navbar__links" aria-label="Main navigation">
          <div class="navbar__dropdown">
            <button
              ref="solutionsButton"
              type="button"
              class="navbar__dropdown-trigger"
              :class="{ 'navbar__dropdown-trigger--active': route.path.startsWith('/solutions') }"
              aria-haspopup="true"
              aria-controls="solutions-menu"
              :aria-expanded="isSolutionsOpen"
              @click="isSolutionsOpen = !isSolutionsOpen"
              @keydown.down.prevent="openSolutionsMenu('first')"
              @keydown.up.prevent="openSolutionsMenu('last')"
            >
              Solutions <Icon name="chevron" :size="15" />
            </button>
            <div
              v-show="isSolutionsOpen"
              id="solutions-menu"
              ref="solutionsMenu"
              class="navbar__dropdown-menu"
              role="menu"
              @keydown="onSolutionsMenuKeydown"
            >
              <RouterLink
                v-for="item in solutionNavigation"
                :key="item.to"
                :to="item.to"
                class="navbar__dropdown-item"
                :class="{ 'navbar__dropdown-item--active': route.path === item.to }"
                role="menuitem"
                @click="isSolutionsOpen = false"
              >
                {{ item.label }}
              </RouterLink>
            </div>
          </div>
          <RouterLink
            v-for="item in primaryNavigation"
            :key="item.to"
            :to="item.to"
            class="navbar__link"
            :class="{ 'navbar__link--active': route.path === item.to || route.path.startsWith(`${item.to}/`) }"
            active-class="navbar__link--active"
          >
            {{ item.label }}
          </RouterLink>
        </nav>

        <div class="navbar__actions">
          <Button to="/contact">Let's talk <Icon name="arrow" :size="16" /></Button>
          <button
            type="button"
            class="navbar__menu-button"
            :aria-label="isMobileOpen ? 'Close navigation menu' : 'Open navigation menu'"
            aria-controls="mobile-navigation"
            :aria-expanded="isMobileOpen"
            @click="isMobileOpen = !isMobileOpen"
          >
            <Icon :name="isMobileOpen ? 'close' : 'menu'" :size="21" />
          </button>
        </div>
      </div>
    </Container>
    <MobileMenu v-if="isMobileOpen" @navigate="closeMenus" />
  </header>
</template>
