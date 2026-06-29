<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>The Riata Report | August Newsletter</title>
  <meta name="description" content="The August Riata Report digital magazine from the Riata Center for Innovation and Entrepreneurship at Oklahoma State University." />
  <link rel="stylesheet" href="style.css" />
</head>

<body>
  <div class="top-bar">
    <a class="brand" href="#top" aria-label="Back to top">
      <span class="brand-mark">R</span>
      <span>The Riata Report</span>
    </a>

    <div class="top-actions">
      <button class="ghost-button" id="toggleHotspots" type="button">Show links</button>
      <a class="solid-button" href="#read">Read issue</a>
    </div>
  </div>

  <div class="progress" aria-hidden="true">
    <div class="progress-bar" id="progressBar"></div>
  </div>

  <main id="top">
    <section class="intro-panel">
      <p class="eyebrow">August Newsletter</p>
      <h1>Innovation, entrepreneurship, and student stories in one scroll.</h1>
      <p>
        Scroll the full Riata newsletter below. Clickable areas are placed over the Canva design so the page keeps the same look while acting like a digital magazine.
      </p>
      <div class="intro-buttons">
        <a class="solid-button" href="#read">Start Reading</a>
        <button class="ghost-button" id="toggleHotspotsIntro" type="button">Preview Clickable Areas</button>
      </div>
    </section>

    <section id="read" class="magazine-shell" aria-label="August Riata newsletter">
      <div class="magazine-stage">
        <img src="assets/newsletter.png" alt="Full August Riata Center newsletter with sections for the director message, RSX, Student Innovation Expo, Student Made, VEP, and footer." class="newsletter-image" />

        <!-- Cover -->
        <a class="hotspot cover-title" href="https://business.okstate.edu/riata/" target="_blank" rel="noopener" aria-label="Visit the Riata Center website">
          <span>Riata website</span>
        </a>

        <!-- Program logo row -->
        <a class="hotspot logo-student-made" href="https://www.studentmadeokstate.com/" target="_blank" rel="noopener" aria-label="Visit Student Made OK State">
          <span>Student Made</span>
        </a>
        <a class="hotspot logo-startup-experience" href="https://business.okstate.edu/riata/riata_rsx/riata_startup_experience" target="_blank" rel="noopener" aria-label="Learn about the Riata Startup Experience">
          <span>RSX</span>
        </a>
        <a class="hotspot logo-innovation-expo" href="https://business.okstate.edu/riata/student_innovation_expo/student_inno_expo" target="_blank" rel="noopener" aria-label="Learn about Student Innovation Expo">
          <span>Innovation Expo</span>
        </a>
        <a class="hotspot logo-genius-bar" href="https://business.okstate.edu/riata/" target="_blank" rel="noopener" aria-label="Learn about Genius Bar">
          <span>Genius Bar</span>
        </a>
        <a class="hotspot logo-rsx-small" href="https://business.okstate.edu/riata/riata_rsx/riata_startup_experience" target="_blank" rel="noopener" aria-label="Learn about Startup Experience">
          <span>Startup Experience</span>
        </a>
        <a class="hotspot logo-business-plan" href="https://business.okstate.edu/riata/" target="_blank" rel="noopener" aria-label="Learn about Riata competitions">
          <span>Business Plan</span>
        </a>
        <a class="hotspot logo-vep" href="https://business.okstate.edu/riata/vep/vep" target="_blank" rel="noopener" aria-label="Learn about the Veterans Entrepreneurship Program">
          <span>VEP</span>
        </a>

        <!-- RSX -->
        <a class="hotspot rsx-section" href="https://business.okstate.edu/riata/riata_rsx/riata_startup_experience" target="_blank" rel="noopener" aria-label="Learn about RSX">
          <span>RSX details</span>
        </a>
        <a class="hotspot rsx-apply-card" href="https://business.okstate.edu/riata/riata_rsx/riata_startup_experience" target="_blank" rel="noopener" aria-label="RSX applications open August 10">
          <span>Apply to RSX</span>
        </a>

        <!-- Student Innovation Expo -->
        <a class="hotspot expo-section" href="https://business.okstate.edu/riata/student_innovation_expo/student_inno_expo" target="_blank" rel="noopener" aria-label="Learn about Student Innovation Expo">
          <span>Innovation Expo details</span>
        </a>

        <!-- Student Made -->
        <a class="hotspot student-made-section" href="https://www.studentmadeokstate.com/" target="_blank" rel="noopener" aria-label="Visit Student Made OK State">
          <span>Student Made</span>
        </a>
        <a class="hotspot shop-student-made" href="https://www.studentmadeokstate.com/" target="_blank" rel="noopener" aria-label="Shop Student Made">
          <span>Shop Student Made</span>
        </a>
        <a class="hotspot become-creator" href="https://www.studentmadeokstate.com/" target="_blank" rel="noopener" aria-label="Apply to become a Student Made creator">
          <span>Become a Creator</span>
        </a>

        <!-- VEP -->
        <a class="hotspot vep-section" href="https://business.okstate.edu/riata/vep/vep" target="_blank" rel="noopener" aria-label="Learn about the Veterans Entrepreneurship Program">
          <span>VEP details</span>
        </a>
        <a class="hotspot vep-dates" href="https://business.okstate.edu/riata/vep/vep_eligibility" target="_blank" rel="noopener" aria-label="VEP 2027 application information">
          <span>VEP application dates</span>
        </a>

        <!-- Footer -->
        <a class="hotspot footer-riata" href="https://business.okstate.edu/riata/" target="_blank" rel="noopener" aria-label="Visit the Riata Center website">
          <span>Riata website</span>
        </a>
      </div>
    </section>

    <section class="closing-panel">
      <p class="eyebrow">Ready for email?</p>
      <h2>Use the email as the teaser, and this page as the full issue.</h2>
      <p>
        Send a short email with a button to this page. That keeps the email simple while letting the magazine stay creative and interactive.
      </p>
      <a class="solid-button" href="https://business.okstate.edu/riata/" target="_blank" rel="noopener">Visit Riata</a>
    </section>
  </main>

  <script src="script.js"></script>
</body>
</html>
