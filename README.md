:root {
  --orange: #ff5c00;
  --orange-dark: #cf4200;
  --teal: #2eb3bb;
  --ink: #121318;
  --paper: #ffffff;
  --muted: #6e727a;
  --soft: #f2f3f5;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background:
    radial-gradient(circle at 20% 0%, rgba(255, 92, 0, 0.22), transparent 32rem),
    radial-gradient(circle at 90% 20%, rgba(46, 179, 187, 0.16), transparent 30rem),
    #111217;
  color: var(--paper);
  font-family: Arial, Helvetica, sans-serif;
}

a {
  color: inherit;
}

.top-bar {
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.8rem clamp(1rem, 3vw, 2rem);
  background: rgba(18, 19, 24, 0.82);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  text-decoration: none;
  font-weight: 800;
  letter-spacing: 0.02em;
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 2rem;
  height: 2rem;
  color: white;
  background: var(--orange);
  border-radius: 0.6rem;
  transform: rotate(-4deg);
}

.top-actions,
.intro-buttons {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  flex-wrap: wrap;
}

button,
.solid-button,
.ghost-button {
  font: inherit;
}

.solid-button,
.ghost-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2.5rem;
  border-radius: 999px;
  padding: 0.7rem 1rem;
  text-decoration: none;
  font-weight: 800;
  border: 1px solid transparent;
  cursor: pointer;
}

.solid-button {
  background: var(--orange);
  color: white;
  box-shadow: 0 10px 26px rgba(255, 92, 0, 0.28);
}

.ghost-button {
  background: rgba(255, 255, 255, 0.08);
  color: white;
  border-color: rgba(255, 255, 255, 0.22);
}

.progress {
  position: sticky;
  top: 64px;
  z-index: 19;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
}

.progress-bar {
  width: 0%;
  height: 100%;
  background: linear-gradient(90deg, var(--orange), var(--teal));
  transition: width 0.08s linear;
}

main {
  width: min(100%, 980px);
  margin: 0 auto;
  padding: 0 clamp(0.8rem, 3vw, 2rem) 4rem;
}

.intro-panel,
.closing-panel {
  display: grid;
  gap: 1rem;
  max-width: 760px;
  margin: clamp(2rem, 7vw, 5rem) auto;
  padding: clamp(1.4rem, 4vw, 2.5rem);
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 2rem;
  backdrop-filter: blur(10px);
}

.eyebrow {
  margin: 0;
  color: #ffd5c0;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.8rem;
}

h1,
h2 {
  margin: 0;
  line-height: 0.96;
  letter-spacing: -0.04em;
}

h1 {
  font-size: clamp(2.4rem, 7vw, 5.2rem);
}

h2 {
  font-size: clamp(2rem, 5vw, 3.6rem);
}

.intro-panel p:not(.eyebrow),
.closing-panel p:not(.eyebrow) {
  max-width: 60ch;
  margin: 0;
  color: rgba(255, 255, 255, 0.82);
  font-size: 1.05rem;
  line-height: 1.65;
}

.magazine-shell {
  display: flex;
  justify-content: center;
  padding: clamp(0.5rem, 2vw, 1.2rem);
}

.magazine-stage {
  position: relative;
  width: min(100%, 720px);
  background: white;
  box-shadow:
    0 30px 90px rgba(0, 0, 0, 0.42),
    0 0 0 1px rgba(255, 255, 255, 0.14);
  overflow: hidden;
  border-radius: 1.25rem;
  transform-origin: top center;
  animation: magazineEnter 700ms ease-out both;
}

.newsletter-image {
  display: block;
  width: 100%;
  height: auto;
}

.hotspot {
  position: absolute;
  z-index: 5;
  display: block;
  border-radius: 999px;
  text-decoration: none;
  cursor: pointer;
  outline: none;
}

.hotspot span {
  position: absolute;
  left: 50%;
  bottom: calc(100% + 0.4rem);
  transform: translateX(-50%) translateY(0.25rem);
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  padding: 0.35rem 0.55rem;
  border-radius: 999px;
  color: white;
  background: var(--ink);
  font-size: 0.72rem;
  font-weight: 800;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.18);
  transition: opacity 150ms ease, transform 150ms ease;
}

.hotspot:hover span,
.hotspot:focus-visible span {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

.hotspot:hover,
.hotspot:focus-visible {
  background: rgba(255, 92, 0, 0.10);
  box-shadow: inset 0 0 0 2px rgba(255, 92, 0, 0.7);
}

body.show-hotspots .hotspot {
  background: rgba(255, 92, 0, 0.16);
  box-shadow: inset 0 0 0 2px rgba(255, 92, 0, 0.7);
}

/* Hotspot positions are percentages of the Canva image */
.cover-title { left: 0%; top: 0%; width: 100%; height: 7.1%; border-radius: 0; }

.logo-student-made { left: 5%; top: 15.1%; width: 16%; height: 4.0%; }
.logo-startup-experience { left: 30%; top: 15.2%; width: 18%; height: 3.8%; }
.logo-innovation-expo { left: 53%; top: 14.8%; width: 17%; height: 4.5%; }
.logo-genius-bar { left: 78%; top: 15.0%; width: 16%; height: 4.3%; }
.logo-rsx-small { left: 4%; top: 19.4%; width: 24%; height: 3.0%; }
.logo-business-plan { left: 37%; top: 19.1%; width: 26%; height: 3.3%; }
.logo-vep { left: 70%; top: 19.0%; width: 25%; height: 3.5%; }

.rsx-section { left: 0%; top: 31.6%; width: 100%; height: 13.3%; border-radius: 0; }
.rsx-apply-card { left: 31%; top: 36.4%; width: 67%; height: 5.7%; border-radius: 1.6rem; }

.expo-section { left: 0%; top: 45.2%; width: 100%; height: 15.7%; border-radius: 0; }

.student-made-section { left: 0%; top: 60.9%; width: 100%; height: 20.5%; border-radius: 0; }
.shop-student-made { left: 55%; top: 70.9%; width: 28%; height: 1.7%; }
.become-creator { left: 55%; top: 73.3%; width: 28%; height: 1.7%; }

.vep-section { left: 0%; top: 81.8%; width: 100%; height: 13.7%; border-radius: 0; }
.vep-dates { left: 56%; top: 91.2%; width: 38%; height: 3.1%; }

.footer-riata { left: 0%; top: 95.4%; width: 100%; height: 4.6%; border-radius: 0; }

@keyframes magazineEnter {
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@media (max-width: 640px) {
  .top-bar {
    align-items: flex-start;
    flex-direction: column;
  }

  .progress {
    top: 105px;
  }

  .top-actions {
    width: 100%;
  }

  .solid-button,
  .ghost-button {
    min-height: 2.35rem;
    padding: 0.6rem 0.85rem;
    font-size: 0.9rem;
  }

  .magazine-stage {
    border-radius: 0.75rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation: none !important;
    transition: none !important;
  }
}
