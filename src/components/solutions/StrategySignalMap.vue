<template>
  <div
    class="strategy-signal-map"
    role="img"
    aria-label="A business objective considered alongside audience, market, brand, and digital signals, with a priority brought into focus"
  >
    <svg viewBox="0 0 620 500" fill="none" aria-hidden="true">
      <defs>
        <radialGradient id="strategyMapGlow">
          <stop stop-color="#00B4FF" stop-opacity=".2" />
          <stop offset="1" stop-color="#00B4FF" stop-opacity="0" />
        </radialGradient>
        <linearGradient id="strategyMapPath" x1="102" y1="85" x2="514" y2="397" gradientUnits="userSpaceOnUse">
          <stop stop-color="#93AABD" stop-opacity=".25" />
          <stop offset=".58" stop-color="#00B4FF" stop-opacity=".72" />
          <stop offset="1" stop-color="#00D1A7" stop-opacity=".46" />
        </linearGradient>
      </defs>
      <circle cx="311" cy="249" r="238" fill="url(#strategyMapGlow)" />
      <path d="M113 119 283 84l209 94 60 153-163 113-218-44-83-171 25-110Z" stroke="#9DB7CA" stroke-opacity=".3" stroke-dasharray="3 8" />
      <path d="m113 119 119 123 260-64m-260 64 57 158m203-222 1 153m-261-89-136 82m136-82 261 89" stroke="#91AEC2" stroke-opacity=".25" />
      <path d="M132 128c74-88 226-92 333-4 102 83 95 217-10 286-104 69-258 44-325-43" stroke="url(#strategyMapPath)" />
      <ellipse cx="311" cy="249" rx="190" ry="89" transform="rotate(-31 311 249)" stroke="#00D1A7" stroke-opacity=".4" />
      <ellipse cx="311" cy="249" rx="223" ry="132" transform="rotate(28 311 249)" stroke="#00B4FF" stroke-opacity=".23" stroke-dasharray="2 8" />
      <circle cx="311" cy="249" r="91" fill="#102B49" stroke="#00B4FF" stroke-opacity=".65" />
      <circle cx="311" cy="249" r="70" stroke="#00D1A7" stroke-opacity=".34" stroke-dasharray="2 7" />
      <circle cx="311" cy="249" r="46" fill="#17395A" stroke="#C5ECFF" stroke-opacity=".36" />
      <circle cx="311" cy="249" r="12" fill="#00B4FF" />
      <circle cx="311" cy="249" r="24" stroke="#00B4FF" stroke-opacity=".52" />
      <circle cx="113" cy="119" r="6" fill="#00D1A7" />
      <circle cx="232" cy="242" r="6" fill="#FFB020" />
      <circle cx="492" cy="178" r="6" fill="#00B4FF" />
      <circle cx="493" cy="331" r="5" fill="#00D1A7" />
      <circle cx="289" cy="407" r="6" fill="#FFB020" />
      <circle cx="156" cy="363" r="5" fill="#00B4FF" />
      <path d="M311 24v42m0 366v43M78 249h42m382 0h42" stroke="#C2D8E7" stroke-opacity=".2" />
      <path d="M460 94h83m-83 9h56m-56 9h69M70 418h88m-88 9h59m-59 9h74" stroke="#B1C4D3" stroke-opacity=".22" stroke-linecap="round" />
      <circle cx="527" cy="112" r="2" fill="#00D1A7" />
      <circle cx="131" cy="441" r="2" fill="#00B4FF" />
    </svg>
    <span class="strategy-signal-map__label strategy-signal-map__label--audience">AUDIENCE</span>
    <span class="strategy-signal-map__label strategy-signal-map__label--market">MARKET</span>
    <span class="strategy-signal-map__label strategy-signal-map__label--brand">BRAND</span>
    <span class="strategy-signal-map__label strategy-signal-map__label--digital">DIGITAL</span>
    <span class="strategy-signal-map__center">BUSINESS<br /><strong>OBJECTIVE</strong></span>
    <span class="strategy-signal-map__priority"><i></i> POINT OF FOCUS</span>
  </div>
</template>

<style scoped>
.strategy-signal-map {
  position: relative;
  width: min(100%, 570px);
  aspect-ratio: 1.24;
  justify-self: end;
}

.strategy-signal-map svg {
  width: 100%;
  height: 100%;
}

.strategy-signal-map__label,
.strategy-signal-map__priority {
  position: absolute;
  color: #9db7ca;
  font-size: clamp(0.54rem, 0.78vw, 0.66rem);
  font-weight: 700;
  letter-spacing: 0.14em;
}

.strategy-signal-map__label--audience {
  top: 20%;
  left: 12%;
}

.strategy-signal-map__label--market {
  top: 31%;
  right: 4%;
}

.strategy-signal-map__label--brand {
  bottom: 17%;
  left: 15%;
}

.strategy-signal-map__label--digital {
  right: 13%;
  bottom: 22%;
}

.strategy-signal-map__center {
  position: absolute;
  top: 50%;
  left: 50%;
  color: #c6d9e7;
  font-size: clamp(0.55rem, 0.8vw, 0.67rem);
  letter-spacing: 0.12em;
  line-height: 1.55;
  text-align: center;
  transform: translate(-50%, -50%);
}

.strategy-signal-map__center strong {
  color: white;
  font-family: var(--font-display);
  font-size: 1.15em;
}

.strategy-signal-map__priority {
  right: 1%;
  bottom: 5%;
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  color: #bfe9ff;
  font-size: 0.58rem;
}

.strategy-signal-map__priority i {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--color-orange);
  box-shadow: 0 0 12px rgba(255, 176, 32, 0.55);
}

@media (max-width: 700px) {
  .strategy-signal-map {
    width: min(100%, 470px);
    margin-inline: auto;
  }
}

@media (max-width: 380px) {
  .strategy-signal-map {
    aspect-ratio: 1.12;
  }

  .strategy-signal-map__label {
    font-size: 0.5rem;
  }
}
</style>
