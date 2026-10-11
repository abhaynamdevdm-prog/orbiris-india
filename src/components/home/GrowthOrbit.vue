<script setup>
const steps = [
  { label: 'Understand', position: 'growth-orbit__step--understand' },
  { label: 'Diagnose', position: 'growth-orbit__step--diagnose' },
  { label: 'Strategize', position: 'growth-orbit__step--strategize' },
  { label: 'Build', position: 'growth-orbit__step--build' },
  { label: 'Launch', position: 'growth-orbit__step--launch' },
  { label: 'Measure', position: 'growth-orbit__step--measure' },
  { label: 'Optimize', position: 'growth-orbit__step--optimize' },
  { label: 'Scale', position: 'growth-orbit__step--scale' },
]
</script>

<template>
  <div class="growth-orbit" aria-label="Growth system stages: Understand, Diagnose, Strategize, Build, Launch, Measure, Optimize, Scale">
    <svg class="growth-orbit__svg" viewBox="0 0 900 470" fill="none" aria-hidden="true">
      <ellipse cx="450" cy="235" rx="335" ry="170" stroke="#00B4FF" stroke-opacity=".45" />
      <ellipse cx="450" cy="235" rx="267" ry="130" stroke="#00D1A7" stroke-opacity=".24" stroke-dasharray="3 8" />
      <path d="M115 235h670M450 65v340" stroke="#A6C9DC" stroke-opacity=".12" />
      <circle cx="450" cy="235" r="94" fill="#102D4F" stroke="#00B4FF" stroke-opacity=".62" />
      <circle cx="450" cy="235" r="78" stroke="#00D1A7" stroke-opacity=".4" stroke-dasharray="2 7" />
      <circle cx="450" cy="235" r="4" fill="#00B4FF" />
      <circle cx="450" cy="65" r="5" fill="#00D1A7" />
      <circle cx="687" cy="105" r="5" fill="#00B4FF" />
      <circle cx="785" cy="235" r="5" fill="#FFB020" />
      <circle cx="687" cy="365" r="5" fill="#00D1A7" />
      <circle cx="450" cy="405" r="5" fill="#00B4FF" />
      <circle cx="213" cy="365" r="5" fill="#FFB020" />
      <circle cx="115" cy="235" r="5" fill="#00D1A7" />
      <circle cx="213" cy="105" r="5" fill="#00B4FF" />
    </svg>
    <p class="growth-orbit__center"><strong>Business</strong><span>Growth</span></p>
    <ol class="growth-orbit__steps">
      <li v-for="(step, index) in steps" :key="step.label" class="growth-orbit__step" :class="step.position">
        <span>{{ String(index + 1).padStart(2, '0') }}</span>{{ step.label }}
      </li>
    </ol>
  </div>
</template>

<style scoped>
.growth-orbit {
  position: relative;
  z-index: 1;
  width: min(100%, 950px);
  aspect-ratio: 1.92;
  margin: clamp(2.5rem, 6vw, 4.5rem) auto 0;
}

.growth-orbit__svg {
  display: block;
  width: 100%;
  height: 100%;
}

.growth-orbit__center {
  position: absolute;
  top: 50%;
  left: 50%;
  display: grid;
  justify-items: center;
  margin: 0;
  color: #a8bdd0;
  font-size: clamp(0.78rem, 1.25vw, 1rem);
  line-height: 1.25;
  transform: translate(-50%, -50%);
}

.growth-orbit__center strong {
  color: white;
  font-family: var(--font-display);
  font-size: 1.25em;
}

.growth-orbit__center span {
  color: #73d8ff;
}

.growth-orbit__steps {
  position: absolute;
  inset: 0;
  margin: 0;
  padding: 0;
  list-style: none;
}

.growth-orbit__step {
  position: absolute;
  display: flex;
  min-width: 112px;
  align-items: center;
  gap: 0.55rem;
  border: 1px solid rgba(143, 185, 210, 0.34);
  border-radius: 999px;
  padding: 0.7rem 0.85rem;
  background: #0d2745;
  color: #eef8ff;
  font-size: clamp(0.7rem, 1.03vw, 0.85rem);
  font-weight: 650;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
}

.growth-orbit__step > span {
  color: #68cffa;
  font-size: 0.64rem;
  font-weight: 700;
}

.growth-orbit__step--understand {
  top: 4%;
  left: 50%;
  transform: translateX(-50%);
}

.growth-orbit__step--diagnose {
  top: 20%;
  right: 13%;
}

.growth-orbit__step--strategize {
  top: 46%;
  right: 1%;
}

.growth-orbit__step--build {
  right: 13%;
  bottom: 10%;
}

.growth-orbit__step--launch {
  bottom: 1%;
  left: 50%;
  transform: translateX(-50%);
}

.growth-orbit__step--measure {
  bottom: 10%;
  left: 13%;
}

.growth-orbit__step--optimize {
  top: 46%;
  left: 1%;
}

.growth-orbit__step--scale {
  top: 20%;
  left: 13%;
}

@media (max-width: 700px) {
  .growth-orbit {
    display: grid;
    aspect-ratio: auto;
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 1.4rem;
    margin-top: 2rem;
  }

  .growth-orbit__svg {
    position: absolute;
    top: 0;
    left: 50%;
    width: 100%;
    height: 210px;
    transform: translateX(-50%);
  }

  .growth-orbit__center {
    position: relative;
    top: auto;
    left: auto;
    width: 118px;
    height: 118px;
    align-content: center;
    margin-block: 46px 28px;
    border: 1px solid rgba(0, 180, 255, 0.55);
    border-radius: 50%;
    background: #102d4f;
    font-size: 0.8rem;
    transform: none;
  }

  .growth-orbit__steps {
    position: relative;
    display: grid;
    width: 100%;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.65rem;
  }

  .growth-orbit__step {
    position: static;
    min-width: 0;
    min-height: 47px;
    justify-content: center;
    padding: 0.6rem;
    font-size: 0.75rem;
    transform: none;
  }
}

@media (max-width: 370px) {
  .growth-orbit__step {
    gap: 0.35rem;
    font-size: 0.68rem;
  }
}
</style>
