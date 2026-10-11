<template>
  <div class="system-map" role="img" aria-label="Five connected capabilities—strategy, brand and experience, performance, technology, and automation—support business growth">
    <svg class="system-map__lines" viewBox="0 0 600 500" fill="none" aria-hidden="true">
      <defs>
        <radialGradient id="systemMapGlow">
          <stop stop-color="#00B4FF" stop-opacity=".22" />
          <stop offset="1" stop-color="#00B4FF" stop-opacity="0" />
        </radialGradient>
      </defs>
      <circle cx="300" cy="250" r="240" fill="url(#systemMapGlow)" />
      <ellipse cx="300" cy="250" rx="253" ry="154" transform="rotate(-24 300 250)" stroke="#00B4FF" stroke-opacity=".34" />
      <ellipse cx="300" cy="250" rx="211" ry="110" transform="rotate(30 300 250)" stroke="#00D1A7" stroke-opacity=".2" stroke-dasharray="3 8" />
      <path d="M300 88 481 183 443 374 157 374 119 183 300 88Z" stroke="#A2C1D3" stroke-opacity=".45" />
      <path d="M300 250 300 88m0 162 181-67m-181 67 143 124m-143-124-143 124m143-124-181-67" stroke="#78CFF2" stroke-opacity=".42" />
      <path d="M85 250h102m226 0h102M300 53v88m0 218v88" stroke="#B6D0E0" stroke-opacity=".18" />
      <circle cx="300" cy="250" r="83" fill="#102B49" stroke="#00B4FF" stroke-opacity=".65" />
      <circle cx="300" cy="250" r="66" stroke="#00D1A7" stroke-opacity=".36" stroke-dasharray="2 7" />
      <circle cx="300" cy="250" r="45" fill="#17395A" stroke="#B8E9FF" stroke-opacity=".4" />
      <circle cx="300" cy="250" r="10" fill="#00B4FF" />
      <circle cx="300" cy="88" r="6" fill="#00D1A7" />
      <circle cx="481" cy="183" r="6" fill="#00B4FF" />
      <circle cx="443" cy="374" r="6" fill="#FFB020" />
      <circle cx="157" cy="374" r="6" fill="#00D1A7" />
      <circle cx="119" cy="183" r="6" fill="#00B4FF" />
    </svg>
    <span class="system-map__node system-map__node--strategy"><i></i>Strategy</span>
    <span class="system-map__node system-map__node--brand"><i></i>Brand &amp; Experience</span>
    <span class="system-map__node system-map__node--performance"><i></i>Performance</span>
    <span class="system-map__node system-map__node--technology"><i></i>Technology</span>
    <span class="system-map__node system-map__node--automation"><i></i>Automation</span>
    <span class="system-map__center">Business<br /><strong>Growth</strong></span>
  </div>
</template>

<style scoped>
.system-map {
  position: relative;
  width: min(100%, 590px);
  aspect-ratio: 1.2;
  justify-self: end;
}

.system-map__lines {
  width: 100%;
  height: 100%;
}

.system-map__node {
  position: absolute;
  display: inline-flex;
  min-height: 40px;
  align-items: center;
  gap: 0.55rem;
  border: 1px solid rgba(173, 209, 230, 0.34);
  border-radius: 999px;
  padding: 0.55rem 0.85rem;
  background: #102b49;
  color: #edf8ff;
  font-size: clamp(0.68rem, 1vw, 0.82rem);
  font-weight: 650;
  white-space: nowrap;
}

.system-map__node i {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--color-blue);
}

.system-map__node--strategy {
  top: 9%;
  left: 50%;
  transform: translateX(-50%);
}

.system-map__node--strategy i,
.system-map__node--technology i {
  background: var(--color-teal);
}

.system-map__node--brand {
  top: 31%;
  right: -1%;
}

.system-map__node--performance {
  right: 7%;
  bottom: 8%;
}

.system-map__node--performance i {
  background: var(--color-orange);
}

.system-map__node--technology {
  bottom: 8%;
  left: 7%;
}

.system-map__node--automation {
  top: 31%;
  left: -1%;
}

.system-map__node--automation i {
  background: var(--color-orange);
}

.system-map__center {
  position: absolute;
  top: 50%;
  left: 50%;
  color: #d0e2ef;
  font-size: clamp(0.75rem, 1.2vw, 0.95rem);
  line-height: 1.35;
  text-align: center;
  transform: translate(-50%, -50%);
}

.system-map__center strong {
  color: white;
  font-family: var(--font-display);
  font-size: 1.15em;
}

@media (max-width: 700px) {
  .system-map {
    width: min(100%, 460px);
    margin-inline: auto;
  }

  .system-map__node {
    min-height: 34px;
    gap: 0.35rem;
    padding: 0.4rem 0.6rem;
    font-size: clamp(0.58rem, 2.6vw, 0.72rem);
  }

  .system-map__node--brand {
    right: -0.5%;
  }

  .system-map__node--automation {
    left: -0.5%;
  }
}

@media (max-width: 370px) {
  .system-map {
    aspect-ratio: 1.05;
  }

  .system-map__node--brand {
    top: 28%;
  }

  .system-map__node--automation {
    top: 28%;
  }
}
</style>
