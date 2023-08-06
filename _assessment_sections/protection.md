---
layout: v2-assessment-questions
permalink: /privacy/privacy-maturity-assessment/protection
class: assessment
sitemap: false
sections: ["collection-and-use", "protection", "disclosure", "access-and-correction"]
area: "privacy"
---

<div class="bg-black">
  <div class="pt-10 px-6 md:px-10 border-b-[1px] border-b-amber-400">
    <h2 class="text-3xl font-semibold pb-2">
      {{ site.data.assessment.privacy.protection.title }}
    </h2>

    <p class="pb-8 text-gray-100">
      {{ site.data.assessment.privacy.protection.description }}
    </p>

    {% include assessment/questions.html area = "privacy" section = site.data.assessment.privacy.protection %}
  </div>
</div>

<div class="px-6 md:px-10 pb-5">
  {% include assessment/answers.html area = "privacy" section = site.data.assessment.privacy.protection next-section = 'disclosure' %}
</div>