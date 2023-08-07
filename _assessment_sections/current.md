---
layout: v2-assessment-questions
permalink: /online-payments/payment-maturity-assessment/current
class: assessment
sitemap: false
sections: ["current", "your-team", "owner", "technology"]
area: "online-payments"
---

<div class="bg-black">
  <div class="pt-10 px-6 md:px-10 border-b-[1px] border-b-purple-50">
    <h2 class="text-3xl font-semibold pb-2">
      {{ site.data.assessment.payment.current.title }}
    </h2>

    <p class="mb-8 text-gray-100">
      {{ site.data.assessment.payment.current.description }}
    </p>

    {% include assessment/questions.html area = "online-payments" section = site.data.assessment.payment.current %}
  </div>
</div>

<div class="px-6 md:px-10 pb-5">
  {% include assessment/answers.html area = "online-payments" section = site.data.assessment.payment.current next-section = 'your-team' %}
</div>