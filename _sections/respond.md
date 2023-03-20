---
layout: section
permalink: /cybersecurity/security-maturity-assessment/respond
class: assessment
sitemap: false
sections: ["govern", "protect", "detect", "respond"]
area: "cybersecurity"
---

<div class="card-body pb-0 pt-5 bg-blue-100 px-4 px-sm-5">
  <h2 class="card-title fw-semibold pb-2">{{ site.data.assessment.security.respond.title }}</h2>
  <p class="card-text pb-4">{{ site.data.assessment.security.respond.description }}</p>
  {% include assessment/questions.html section = site.data.assessment.security.respond %}
</div>
<div class="card-body pt-0 px-4 px-sm-5 pb-5">
  {% include assessment/answers.html section = site.data.assessment.security.respond next-section = 'submit' %}
</div>