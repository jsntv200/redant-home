---
layout: section
permalink: /cybersecurity/privacy-maturity-assessment/collection-and-use
class: assessment
sitemap: false
sections: ["collection-and-use", "protection", "disclosure", "access-and-correction"]
---

<div class="card-body pb-0 pt-5 bg-blue-100 px-4 px-sm-5">
  <h2 class="card-title fw-semibold pb-2">{{ site.data.assessment.privacy.collection-and-use.title }}</h2>
  <p class="card-text pb-4">{{ site.data.assessment.privacy.collection-and-use.description }}</p>
  {% include assessment/questions.html section = site.data.assessment.privacy.collection-and-use %}
</div>
<div class="card-body pt-0 px-4 px-sm-5 pb-5">
  {% include assessment/answers.html section = site.data.assessment.privacy.collection-and-use next-section = 'protection' %}
</div>
