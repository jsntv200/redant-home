---
layout: section
permalink: /cybersecurity/cybersecurity-maturity-assessment/govern
class: assessment
sitemap: false
sections: ["govern", "protect", "detect", "respond"]
area: "cybersecurity"
---

<div class="card-body pb-0 pt-5 bg-blue-100 px-4 px-sm-5">
  <h2 class="card-title fw-semibold pb-2">{{ site.data.assessment.cybersecurity.govern.title }}</h2>
  <p class="card-text pb-4">{{ site.data.assessment.cybersecurity.govern.description }}</p>
  {% include assessment/questions.html section = site.data.assessment.cybersecurity.govern %}
</div>
<div class="card-body pt-0 px-4 px-sm-5 pb-5">
  {% include assessment/answers.html section = site.data.assessment.cybersecurity.govern next-section = 'protect' %}
</div>