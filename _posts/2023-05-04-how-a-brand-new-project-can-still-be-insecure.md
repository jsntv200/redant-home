---
layout: v2-blog-detail
is_blog: true
title: How a brand new project can still be insecure
permalink: /:categories/brand-new-code-but-bad-sad-face-emoji/
type: ideas
categories:
  - blog
  - cyber-security
blog_categories:
  - cyber-security
author: Ben Still
description: >-
  So you've just launched your new project. It must be totally secure right? Not
  always - there are often vulnerabilities that may reveal over time. Here's how
  we go looking for them.
content_sidebar: >
  People often assume that if a software platform has been recently built, it
  must be inherently secure. This certainly has a kernel of truth to it, but
  there’s also a misplaced assumption. In fact, a brand new code release can
  have many different security problems. Here's how we look for them.
date_published: 2023-05-03T14:00:00.000Z

image_small: /assets/uploads/iStock-668575918.jpg
image: /assets/uploads/iStock-668575918.jpg
updated_at: 2023-05-03T14:00:00.000Z
redirect_from:
  - /cyber-security/brand-new-code-but-bad-sad-face-emoji/
---

People often assume that if a software platform has been recently built, it must be inherently secure. This certainly has a kernel of truth to it, but there’s also a misplaced assumption.

The kernel of truth is that most new software tools, when they are released, haven’t been compromised or had significant flaws exposed. Because they are new. So that very latest release of an SQL database or web server is most likely to pass muster from a risk analysis scan. It’s unlikely that any compromises have already been identified and published for that specific version.

OK great, but what about the code itself?

There are many points during a build where decisions are made that can impact security. There are architectural decisions that can reveal vulnerabilities at a later stage. Or how about that last minute compromise that helped meet the deadline, but ended up leaving some sensitive credentials in a queue log file?

We always start analysis by looking at the team involved. This isn’t about how “big brain” the developers were, or how many, or any of the other stuff. The first thing we try to understand is the human element of the project:

* **How many developers were active?** Looking at commits, was there a consistent team powering away? Or was there constant churn. New work or rework? Staying in their lanes or trampling on each other’s feet?
* **How confident and regular are the commits?** Do things build up in a gradual crescendo, or are there loud “commit bombs” going off. How confident are the developers in their work? 
* **Were there other people giving considered feedback** from their testing as the project progresses, or are the developers kind of on their own “Waterfall Island”. Is the feedback constructive, or does it border on abusive (often indicating frustration)?
* **Was communication working OK?** Were requirements explained and understood? Looking at descriptions in commits can also be revealing, since there seems to be a correlation between non-sensical quasi-English message and “I never understood what you meant in the first place”

A small team, working together with regular commits, and communicating smoothly with stakeholders (requirements and testing) typically ends up with a good result. Once those elements become dysfunctional, then it can be challenging to deliver good software. And poor software often results in poor security.

The next part is the history of the project:

* Looking at the requirements, was this done in a reasonable time frame? 
  * A **really long** project time frame typically indicates something probably went wrong.
  * A **really short time** frame might mean the developers were amazingly efficient. Or maybe the code was re-used from another project, or some kind of shortcut was taken that we need to understand the impact of.
* **What changed** in terms of goals and deliverables? Some change indicates a healthy project team. Radical change might be an indicator that we should look for code that was written but never used (for example)
* **Was this a new build, or was it an update** to an existing project? Is the project an update, but the code base new? Or vice versa - is this a new project but re-using an older existing code base?
* Has the code just been developed, or was it built a while ago and it’s been in maintenance mode for a period?

There are also the processes that support the development of the code:

* How are requirements defined, and how is feedback and refinements communicated?
* Was / is there a defined release process to move code to testing, staging and production environments? Or is it more of an "anything goes" / "we'll see how we feel on the day" kind of scene?
* On a scale where zero is someone occasionally tests a feature, through to 10 where every feature has an automated test defined first, and then code is written until it passes (TDD), where does this project sit?
* Are tests a part of the deploy process?
* Are there vulnerability checks as an automated part of the deploy process?
* Are monitoring tools used to evaluate post deployment of changes?

Finally, there is the code itself, which can be analysed with static analysis tools as well as a human review.

* **Complexity** - does each function get achieved in a straightforward way? Or are we in [Beautiful Mind](https://gfycat.com/enlighteneddarlingcreature) territory?
* **Repetition** - are functions repeated and are any functions repeated or appear elsewhere repeated?
* **Clarity** - can a reasonably skilled developer understand what’s going on?
* **Mistakes** - are there typos, misnamed variables, or sections of code that never actually get used?
* **“Grasp-ability”** - can a reasonably skilled developer understand and start working within a reasonable time frame?

Having secure software is somewhat of a moving target. And there isn’t a magic wand someone can wave to somehow make it “secure”. 
