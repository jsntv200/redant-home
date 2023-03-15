---
layout: section
permalink: /cybersecurity/privacy-maturity-assessment/actions-and-correction
class: assessment
sitemap: false
sections: ["collection-and-use", "protection", "disclosure", "access-and-correction"]
---

<div class="card-body pb-0 pt-5 bg-blue-100 px-4 px-sm-5">
  <h2 class="card-title fw-semibold pb-2">{{ site.data.assessment.privacy.actions-and-correction.title }}</h2>
  <p class="card-text pb-4">{{ site.data.assessment.privacy.actions-and-correction.description }}</p>
  {% include assessment/questions.html section = site.data.assessment.privacy.actions-and-correction %}
</div>
<div class="card-body pt-0 px-4 px-sm-5 pb-5">
  {% include assessment/answers.html section = site.data.assessment.privacy.actions-and-correction next-section = 'submit' %}
</div>