---
layout: assessment-questions
permalink: /payments/payment-maturity-assessment/owner
class: assessment
sitemap: false
sections: ["current", "your-team", "owner", "technology"]
area: "payments"
---

<div class="bg-black">
  <div class="pt-10 px-6 md:px-10 border-b-[1px] border-b-purple-50">
    <h2 class="text-3xl font-semibold pb-2">
      {{ site.data.assessment.payment.owner.title }}
    </h2>

    <p class="mb-8 text-gray-100">
      {{ site.data.assessment.payment.owner.description }}
    </p>
    {% include assessment/questions.html area = "payments" section = site.data.assessment.payment.owner %}
  </div>
</div>

<div class="px-6 md:px-10 pb-5">
  {% include assessment/answers.html area = "payments" section = site.data.assessment.payment.owner next-section = 'technology' %}
</div>