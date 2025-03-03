---
layout: blog-detail
is_blog: true
title: Tracking stuff - part one
description: Bugs, no body likes them, everyone has to deal with them. Here's how we've tried tracking ours so far.
permalink: /:categories/tracking-stuff-part-one/
type: ideas
categories:
  - blog
blog_categories:
author: Ben Still
image_small: /assets/uploads/2009/track-small.jpg
image: /assets/uploads/2009/track-large.jpg
content_sidebar: Bugs, no body likes them, everyone has to deal with them. Here's how we've tried tracking ours so far.
published: false
date_published: ! ' 2009-06-13'
updated_at: 2009-06-13

---

The basic problem; you have a project where there are lots of things that you need to write down and keep track of. These need to get resolved before the project can wrap up.

Initially, we used issue tracking for tracking bugs- identifying and recording things that were broken or not working properly, and then recording when they got fixed. Looking again at it now, about a third of what we do are bugs, the rest would be better described as tasks - so project management rather than bug tracking.

We started off with the low tech approach- using an Excel sheet. Mine had a description of the issue, a unique number, and some kind of way of marking issues off. As the project progresses, these were updated and hopefully checked off. The drawback to this approach is that it's quite manual, and needs an owner to update. We found this approach not particularly scalable - it worked OK sometimes, but on a rapidly changing project it became unweildy and got out of hand.

The first issue was pretty simple- version control. The excel file got mailed around, and people would start to update or annotate their version. Then these changes would need to get merged in to an update version. The first or second time, it's not that hard; but gradually things start to get just too much hassle. Yes, I'm sure that the solution lies with some kind of Advanced Merge With Tracked Changes command, hidden deep in the bowels of Excel interface, but I could never find it.

Another problem comes with distribution- how to let everyone know about the list, what they have to do, and what other people in the team are working on. Emailing it out as a broadcast works, but then we ran into version issues when people started using it. Again, I'm sure there is some clever function in Excel to make nice HTML, but I always seem to end up with a tag soup mess. And then people start emailing in updates, and some poor soul then has to reintegrate these into the spreadsheet.

The next issue started off as a filtering problem- some people need a list of just their issues, while other people (like a producer) needs a list of everyone's. Then the customer needs to get a feel for what has already been resolved vs what is left to do. But then we had one project where we needed to manage things that were being done by freelancers, as well as our internal team, and create a nice report back to our customer. The whole Excel plan started groaning at this stage. Then there are those secret bugs- a few things that we've stuffed up and needed to get rectified urgently, but we didn't necessarily want to broadcast this to our customer and their boss.

What really sank the good ship Excel was what I call issue blossoms - when one seemingly simple, innocent sounding issue suddenly spawns 20. They seem to appear in the later part of a project, when you're getting in to the meat of the project (and everyone is strapped for time anyway). You can try to have some kind of numbering system like 2.4.1, 2.4.2 etc, but you're starting to walk the thin ice by this stage. Sub list spreadsheets are another way of handling this, but these introduce lots of other issues.

*image credit: [Brian Herzog](https://www.flickr.com/photos/herzogbr/)*
