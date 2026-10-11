<template>
  <div class="hero-orbit" role="img" aria-label="Abstract connected system representing business strategy, digital experience, technology, and growth">
    <svg class="hero-orbit__svg" viewBox="0 0 600 540" fill="none" aria-hidden="true">
      <defs>
        <radialGradient id="orbitGlow">
          <stop stop-color="#00B4FF" stop-opacity=".28" />
          <stop offset="1" stop-color="#00B4FF" stop-opacity="0" />
        </radialGradient>
        <linearGradient id="orbitLine" x1="82" y1="118" x2="506" y2="406" gradientUnits="userSpaceOnUse">
          <stop stop-color="#00B4FF" stop-opacity=".08" />
          <stop offset=".5" stop-color="#00D1A7" stop-opacity=".65" />
          <stop offset="1" stop-color="#00B4FF" stop-opacity=".12" />
        </linearGradient>
      </defs>
      <circle cx="310" cy="270" r="235" fill="url(#orbitGlow)" />
      <path d="M76 277C120 102 359 63 489 198c100 105 17 260-133 284C229 502 93 427 76 277Z" stroke="url(#orbitLine)" />
      <path d="M123 150c92-75 241-55 333 18 95 75 79 184-1 257" stroke="#00B4FF" stroke-opacity=".2" stroke-dasharray="3 8" />
      <path d="M94 319c63 84 188 111 304 74 88-28 132-101 121-177" stroke="#00D1A7" stroke-opacity=".26" />
      <path d="m126 158 92 70 112-37 98 96-58 110-109-25-80 65" stroke="#91DDF9" stroke-opacity=".38" />
      <path d="m218 228 9 209m103-246 38 211m60-115 76-83" stroke="#91DDF9" stroke-opacity=".14" />
      <circle cx="336" cy="281" r="82" fill="#0B1F3B" fill-opacity=".76" stroke="#00B4FF" stroke-opacity=".4" />
      <circle cx="336" cy="281" r="62" stroke="#00D1A7" stroke-opacity=".3" stroke-dasharray="2 7" />
      <circle cx="336" cy="281" r="42" fill="#102D4F" stroke="#53CFFF" stroke-opacity=".55" />
      <circle cx="336" cy="281" r="15" fill="#00B4FF" fill-opacity=".88" />
      <circle cx="336" cy="281" r="25" stroke="#00B4FF" stroke-opacity=".34" />
      <circle cx="126" cy="158" r="6" fill="#00D1A7" />
      <circle cx="218" cy="228" r="5" fill="#FFB020" />
      <circle cx="330" cy="191" r="6" fill="#00B4FF" />
      <circle cx="428" cy="287" r="5" fill="#00D1A7" />
      <circle cx="370" cy="397" r="6" fill="#FFB020" />
      <circle cx="290" cy="372" r="4" fill="#00B4FF" />
      <circle cx="496" cy="204" r="4" fill="#00B4FF" />
      <circle cx="95" cy="320" r="4" fill="#00B4FF" />
      <path d="M337 55v35m0 330v38M82 281h35m438 0h-35" stroke="#B8D9EB" stroke-opacity=".28" />
      <path d="M172 91 195 114m283 283 24 24m-330 0 24-24m282-283 24-23" stroke="#B8D9EB" stroke-opacity=".16" />
    </svg>
    <span class="hero-orbit__label hero-orbit__label--strategy">STRATEGY</span>
    <span class="hero-orbit__label hero-orbit__label--experience">EXPERIENCE</span>
    <span class="hero-orbit__label hero-orbit__label--technology">TECHNOLOGY</span>
    <span class="hero-orbit__label hero-orbit__label--growth">GROWTH</span>
    <span class="hero-orbit__center-label">CONNECTED<br />SYSTEMS</span>
  </div>
</template>

<style scoped>
.hero-orbit {
  position: relative;
  aspect-ratio: 1.1;
  isolation: isolate;
}

.hero-orbit__svg {
  display: block;
  width: 100%;
  height: 100%;
  overflow: visible;
}

.hero-orbit__label {
  position: absolute;
  color: #9ab5c9;
  font-size: clamp(0.55rem, 0.85vw, 0.68rem);
  font-weight: 700;
  letter-spacing: 0.13em;
}

.hero-orbit__label--strategy {
  top: 24%;
  left: 11%;
}

.hero-orbit__label--experience {
  top: 48%;
  right: 4%;
}

.hero-orbit__label--technology {
  bottom: 16%;
  left: 51%;
}

.hero-orbit__label--growth {
  top: 9%;
  right: 22%;
}

.hero-orbit__center-label {
  position: absolute;
  top: 52%;
  left: 56%;
  color: #e1f6ff;
  font-size: clamp(0.55rem, 0.9vw, 0.7rem);
  font-weight: 700;
  letter-spacing: 0.15em;
  line-height: 1.5;
  text-align: center;
  transform: translate(-50%, -50%);
}

@media (max-width: 700px) {
  .hero-orbit {
    width: min(100%, 440px);
    margin-inline: auto;
  }
}

@media (max-width: 380px) {
  .hero-orbit__label {
    font-size: 0.5rem;
    letter-spacing: 0.09em;
  }
}
</style>
