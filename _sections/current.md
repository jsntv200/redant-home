---
layout: section
permalink: /online-payments/payment-maturity-assessment/current
class: assessment
sitemap: false
sections: ["current", "your-team", "owner", "technology"]
---

<div class="card-body pb-0 pt-5 bg-blue-100 px-4 px-sm-5">
  <h2 class="card-title fw-semibold pb-2">{{ site.data.assessment.payment.current.title }}</h2>
  <p class="card-text pb-4">{{ site.data.assessment.payment.current.description }}</p>
  {% include assessment/questions.html section = site.data.assessment.payment.current %}
</div>
<div class="card-body pt-0 px-4 px-sm-5 pb-5">
  {% include assessment/answers.html section = site.data.assessment.payment.current next-section = 'your-team' %}
</div>