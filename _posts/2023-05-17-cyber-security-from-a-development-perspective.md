---
layout: post
title: Cyber Security from a Development perspective
permalink: /cyber-security/cyber-security-from-a-development-perspective/
type: news
categories:
  - cyber-security
author: Ben Still
description: >-
  Often security analysis looks at how your platform runs - the network, the
  servers, etc. Using the analogy of a house, it’s checking that the doors &
  windows are locked, and the walls are robust enough. But it’s still up to the
  people that live in the house to not leave windows open or invite strangers
  in. 

  <br/><br/>

  This is the developer layer.
   
image_small: /assets/uploads/diagram.png
image: /assets/uploads/diagram.png
excerpt_short: >-
  The easiest way to exploit your platform won’t be by dressing up in a Ninja
  suit and breaking into your network. It will be finding a mistake or loophole
  in your code, and taking advantage. 
date_published: 2023-05-16T14:00:00.000Z
publisher: Red Ant
---

Typical security analysis looks at networks and infrastructure - the things your platform runs on. And while this is definitely important, security problems can often lie in the software itself. How that software connects with other software or data points. How it's built, configured and maintained. 

That's where we can help.

Keeping software secure is somewhat of a moving target. There isn't a magic wand we can wave to somehow make it "secure". It requires a unique development mindset.

This can start with decisions made during the build phase:

1. Which frameworks and which libraries were used, and where? 
2. How robust was the development process flow? Can we see via commits that there was a clear define > build > test > release flow, or was it a bit more (cough) ad hoc?
3. How were specific technical problems solved? Via libraries or with custom code? Is the solution easy to read and understand, or have we just entered a Jenga tower?
4. Were the developers confident in their understanding of the task and related issues? Clients often worry about developer competency, but we often find it wasn’t that they couldn’t do it, but rather didn’t understand enough. Which stems from poor communication, unclear design goals, or lack of process around testing & release management.

OK, so what does this have to do with cybersecurity?

Well, the easiest way to exploit your platform won’t be by dressing up in a Ninja suit and breaking into your network. It will be finding a mistake or loophole in your code, and taking advantage. 

The better your development process has been, the easier these mistakes will be to rectify. All developers make mistakes now and then - but ideally your development process is set up so that these can never make their way to Production. An overly complex, bloated code base can make hard work in trying to understand and then address any loopholes.

Once your software is built, it then needs to be maintained. This can range in effort from the minimum (making sure libraries and frameworks are kept up to date) through to active ongoing feature development.

Our approach is centred on the software itself. Not what kind of technology, but rather the humans that designed and built the software, what they delivered and how it’s being maintained.

We believe looking at not only the code, but how it was written is important in understanding your Cyber Security readiness. Even the most bullet proof network and infrastructure can be undone by poor development practices
