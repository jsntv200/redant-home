---
layout: section
permalink: /privacy/privacy-maturity-assessment/protection
class: assessment
sitemap: false
sections: ["collection-and-use", "protection", "disclosure", "access-and-correction"]
area: "privacy"
---

<div class="card-body pb-0 pt-5 bg-blue-100 px-4 px-sm-5">
  <h2 class="card-title fw-semibold pb-2">{{ site.data.assessment.privacy.protection.title }}</h2>
  <p class="card-text pb-4">{{ site.data.assessment.privacy.protection.description }}</p>
  {% include assessment/questions.html section = site.data.assessment.privacy.protection %}
</div>
<div class="card-body pt-0 px-4 px-sm-5 pb-5">
  {% include assessment/answers.html section = site.data.assessment.privacy.protection next-section = 'disclosure' %}
</div>