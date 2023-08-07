---
layout: v2-assessment-questions
permalink: /cyber-security/cyber-security-maturity-assessment/protect
class: assessment
sitemap: false
sections: ["govern", "protect", "detect", "respond"]
area: "cyber-security"
---

<div class="bg-black">
  <div class="pt-10 px-6 md:px-10 border-b-[1px] border-b-red-100">
    <h2 class="text-3xl font-semibold pb-2">
      {{ site.data.assessment.cyber-security.protect.title }}
    </h2>

    <p class="mb-8 text-gray-100">
      {{ site.data.assessment.cyber-security.protect.description }}
    </p>

    {% include assessment/questions.html area = "cyber-security" section = site.data.assessment.cyber-security.protect %}
  </div>
</div>

<div class="px-6 md:px-10 pb-5">
  {% include assessment/answers.html area = "cyber-security" section = site.data.assessment.cyber-security.protect next-section = 'detect' %}
</div>