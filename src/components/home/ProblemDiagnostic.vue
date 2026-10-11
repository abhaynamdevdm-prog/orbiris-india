<template>
  <div class="diagnostic" role="img" aria-label="Five disconnected business issues—positioning, marketing, digital experience, data, and operations—converge into a growth bottleneck">
    <svg class="diagnostic__svg" viewBox="0 0 760 400" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="diagnosticPath" x1="85" y1="60" x2="620" y2="200" gradientUnits="userSpaceOnUse">
          <stop stop-color="#91A9BC" stop-opacity=".4" />
          <stop offset=".78" stop-color="#00B4FF" stop-opacity=".85" />
          <stop offset="1" stop-color="#00D1A7" />
        </linearGradient>
      </defs>
      <path d="M174 64h191l119 136-119 136H174" stroke="#D5E0E8" stroke-dasharray="3 7" />
      <path d="M374 64h-9l119 136-119 136h9" stroke="#B6CAD8" stroke-opacity=".55" />
      <path d="M185 64h180l119 136-119 136H185" stroke="url(#diagnosticPath)" stroke-width="1.5" />
      <path d="M122 64h53M122 132h156M122 200h254M122 268h156M122 336h53" stroke="#A6BBCB" stroke-opacity=".65" />
      <circle cx="122" cy="64" r="5" fill="#FFB020" />
      <circle cx="122" cy="132" r="5" fill="#00B4FF" />
      <circle cx="122" cy="200" r="5" fill="#00D1A7" />
      <circle cx="122" cy="268" r="5" fill="#00B4FF" />
      <circle cx="122" cy="336" r="5" fill="#FFB020" />
      <circle cx="494" cy="200" r="72" fill="#0B1F3B" />
      <circle cx="494" cy="200" r="59" stroke="#00B4FF" stroke-opacity=".5" />
      <circle cx="494" cy="200" r="47" stroke="#00D1A7" stroke-opacity=".4" stroke-dasharray="2 6" />
      <circle cx="494" cy="200" r="5" fill="#00D1A7" />
      <path d="M566 200h91" stroke="#00B4FF" stroke-opacity=".68" />
      <circle cx="657" cy="200" r="5" fill="#00B4FF" />
      <path d="M648 190l10 10-10 10" stroke="#00B4FF" />
    </svg>
    <div class="diagnostic__labels">
      <span class="diagnostic__label" v-for="(label, index) in labels" :key="label" :style="{ '--row': index }">
        <span class="diagnostic__dot"></span>{{ label }}
      </span>
    </div>
    <div class="diagnostic__bottleneck">
      <span>THE SYSTEM GAP</span>
      <strong>Growth<br />Bottleneck</strong>
      <small>Potential meets friction</small>
    </div>
    <div class="diagnostic__outcome">Growth<br />potential</div>
  </div>
</template>

<script setup>
const labels = ['Unclear positioning', 'Disconnected marketing', 'Digital friction', 'Fragmented data', 'Manual processes']
</script>

<style scoped>
.diagnostic {
  position: relative;
  min-width: 0;
  aspect-ratio: 1.9;
  border: 1px solid #e0e8ee;
  border-radius: 1.25rem;
  background:
    linear-gradient(rgba(11, 31, 59, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(11, 31, 59, 0.035) 1px, transparent 1px),
    #f9fbfd;
  background-size: 28px 28px;
}

.diagnostic__svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.diagnostic__labels {
  position: absolute;
  top: 12%;
  bottom: 12%;
  left: 3.5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.diagnostic__label {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  color: #566e83;
  font-size: clamp(0.52rem, 0.88vw, 0.72rem);
  font-weight: 600;
  white-space: nowrap;
}

.diagnostic__dot {
  width: 6px;
  height: 6px;
  flex: 0 0 auto;
  border-radius: 50%;
  background: var(--color-blue);
}

.diagnostic__label:nth-child(odd) .diagnostic__dot {
  background: var(--color-orange);
}

.diagnostic__bottleneck {
  position: absolute;
  top: 50%;
  left: 65%;
  display: grid;
  justify-items: center;
  color: #d1e9f7;
  text-align: center;
  transform: translate(-50%, -50%);
}

.diagnostic__bottleneck > span {
  color: #79bddd;
  font-size: clamp(0.39rem, 0.67vw, 0.56rem);
  font-weight: 700;
  letter-spacing: 0.14em;
}

.diagnostic__bottleneck strong {
  margin-top: 0.3rem;
  font-family: var(--font-display);
  font-size: clamp(0.72rem, 1.35vw, 1.12rem);
  line-height: 1.17;
}

.diagnostic__bottleneck small {
  margin-top: 0.35rem;
  color: #95aabd;
  font-size: clamp(0.4rem, 0.62vw, 0.53rem);
  white-space: nowrap;
}

.diagnostic__outcome {
  position: absolute;
  top: 50%;
  right: 2%;
  color: #08779e;
  font-size: clamp(0.52rem, 0.9vw, 0.72rem);
  font-weight: 700;
  line-height: 1.3;
  transform: translateY(-50%);
}

@media (max-width: 600px) {
  .diagnostic {
    min-height: 0;
    aspect-ratio: 1.48;
  }

  .diagnostic__labels {
    left: 2.5%;
  }

  .diagnostic__label {
    gap: 0.3rem;
    font-size: 0.53rem;
  }

  .diagnostic__bottleneck {
    left: 64%;
  }

  .diagnostic__bottleneck > span {
    font-size: 0.43rem;
  }

  .diagnostic__bottleneck strong {
    font-size: 0.75rem;
  }

  .diagnostic__outcome {
    right: 1%;
    font-size: 0.5rem;
  }
}

@media (max-width: 380px) {
  .diagnostic__label {
    font-size: 0.46rem;
  }

  .diagnostic__bottleneck {
    left: 63%;
  }

  .diagnostic__outcome {
    display: none;
  }
}
</style>
