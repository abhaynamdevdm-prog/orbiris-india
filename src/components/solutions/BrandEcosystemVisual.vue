<template>
  <div
    class="brand-ecosystem"
    role="img"
    aria-label="Brand identity, messaging, website, content, and customer touchpoints connected as one consistent experience"
  >
    <svg class="brand-ecosystem__svg" viewBox="0 0 640 520" fill="none" aria-hidden="true">
      <defs>
        <radialGradient id="brandEcosystemGlow">
          <stop stop-color="#00B4FF" stop-opacity=".2" />
          <stop offset="1" stop-color="#00B4FF" stop-opacity="0" />
        </radialGradient>
        <linearGradient id="brandEcosystemLine" x1="119" y1="104" x2="518" y2="398" gradientUnits="userSpaceOnUse">
          <stop stop-color="#00D1A7" stop-opacity=".35" />
          <stop offset=".5" stop-color="#00B4FF" stop-opacity=".72" />
          <stop offset="1" stop-color="#FFB020" stop-opacity=".4" />
        </linearGradient>
      </defs>
      <circle cx="322" cy="258" r="247" fill="url(#brandEcosystemGlow)" />
      <path d="M139 117 314 78l187 86 44 163-164 123-205-54-78-173 41-106Z" stroke="#A3BACC" stroke-opacity=".32" stroke-dasharray="3 8" />
      <path d="m139 117 117 131 245-84M256 248l125 202m120-286 0 246m-245-162L97 332m159-84 120 117" stroke="#A4BDCE" stroke-opacity=".23" />
      <path d="M139 117c77-81 223-93 326-19 106 76 106 210 3 282-103 71-257 56-329-26" stroke="url(#brandEcosystemLine)" />
      <ellipse cx="320" cy="260" rx="205" ry="95" transform="rotate(-29 320 260)" stroke="#00D1A7" stroke-opacity=".4" />
      <ellipse cx="320" cy="260" rx="230" ry="137" transform="rotate(27 320 260)" stroke="#00B4FF" stroke-opacity=".25" stroke-dasharray="2 8" />
      <circle cx="320" cy="260" r="88" fill="#102B49" stroke="#00B4FF" stroke-opacity=".58" />
      <circle cx="320" cy="260" r="68" stroke="#00D1A7" stroke-opacity=".38" stroke-dasharray="2 7" />
      <circle cx="320" cy="260" r="43" fill="#17395A" stroke="#C4E9F8" stroke-opacity=".38" />
      <circle cx="320" cy="260" r="11" fill="#00B4FF" />
      <circle cx="139" cy="117" r="6" fill="#00D1A7" />
      <circle cx="256" cy="248" r="6" fill="#FFB020" />
      <circle cx="501" cy="164" r="6" fill="#00B4FF" />
      <circle cx="501" cy="327" r="6" fill="#00D1A7" />
      <circle cx="381" cy="450" r="6" fill="#FFB020" />
      <circle cx="176" cy="396" r="6" fill="#00B4FF" />
      <path d="M320 27v45m0 375v45M82 260h44m432 0h43" stroke="#B8D0E0" stroke-opacity=".2" />
    </svg>
    <span class="brand-ecosystem__node brand-ecosystem__node--identity"><i></i>IDENTITY</span>
    <span class="brand-ecosystem__node brand-ecosystem__node--message"><i></i>MESSAGING</span>
    <span class="brand-ecosystem__node brand-ecosystem__node--website"><i></i>WEBSITE</span>
    <span class="brand-ecosystem__node brand-ecosystem__node--content"><i></i>CONTENT</span>
    <span class="brand-ecosystem__node brand-ecosystem__node--touchpoint"><i></i>TOUCHPOINTS</span>
    <span class="brand-ecosystem__center">ONE CONNECTED<br /><strong>EXPERIENCE</strong></span>
  </div>
</template>

<style scoped>
.brand-ecosystem {
  position: relative;
  width: min(100%, 590px);
  aspect-ratio: 1.23;
  justify-self: end;
}

.brand-ecosystem__svg {
  display: block;
  width: 100%;
  height: 100%;
}

.brand-ecosystem__node {
  position: absolute;
  display: inline-flex;
  min-height: 35px;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid rgba(173, 209, 230, 0.34);
  border-radius: 999px;
  padding: 0.45rem 0.72rem;
  background: #102b49;
  color: #e9f5fd;
  font-size: clamp(0.55rem, 0.8vw, 0.66rem);
  font-weight: 700;
  letter-spacing: 0.12em;
  white-space: nowrap;
}

.brand-ecosystem__node i {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-blue);
}

.brand-ecosystem__node--identity {
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
}

.brand-ecosystem__node--identity i,
.brand-ecosystem__node--content i {
  background: var(--color-teal);
}

.brand-ecosystem__node--message {
  top: 30%;
  right: 0;
}

.brand-ecosystem__node--website {
  right: 8%;
  bottom: 10%;
}

.brand-ecosystem__node--website i {
  background: var(--color-orange);
}

.brand-ecosystem__node--content {
  bottom: 10%;
  left: 8%;
}

.brand-ecosystem__node--touchpoint {
  top: 30%;
  left: 0;
}

.brand-ecosystem__node--touchpoint i {
  background: var(--color-orange);
}

.brand-ecosystem__center {
  position: absolute;
  top: 50%;
  left: 50%;
  color: #c3d9e8;
  font-size: clamp(0.54rem, 0.78vw, 0.65rem);
  letter-spacing: 0.12em;
  line-height: 1.5;
  text-align: center;
  transform: translate(-50%, -50%);
}

.brand-ecosystem__center strong {
  color: white;
  font-family: var(--font-display);
  font-size: 1.16em;
}

@media (max-width: 700px) {
  .brand-ecosystem {
    width: min(100%, 470px);
    margin-inline: auto;
  }

  .brand-ecosystem__node {
    min-height: 31px;
    gap: 0.35rem;
    padding: 0.35rem 0.55rem;
    font-size: clamp(0.51rem, 2.3vw, 0.62rem);
  }
}

@media (max-width: 370px) {
  .brand-ecosystem {
    aspect-ratio: 1.08;
  }

  .brand-ecosystem__node--message,
  .brand-ecosystem__node--touchpoint {
    top: 27%;
  }

  .brand-ecosystem__node {
    letter-spacing: 0.08em;
  }
}
</style>
