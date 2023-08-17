---
layout: blog-detail
is_blog: true
title: The story behind our Wallboard
permalink: /:categories/the-story-behind-our-wallboard-whos-working-on-what-and-can-i-deploy-yet/
type: news
categories:
  - blog
blog_categories:
author: Jesse Noble
content_sidebar: |
  The story behind our Wallboard. Who's working on what, and can I deploy yet?
image_small: /assets/uploads/2010/redant-wallboard-preview-small.jpg
image: /assets/uploads/2010/redant-wallboard-preview.jpg
description: 'Whiteboards are out, wallboards are in. Also, vote for us!'
tags: []
time: 10 Mins Read
redirect_from:
  - >-
    /agile/the-story-behind-our-wallboard-whos-working-on-what-and-can-i-deploy-yet/
  - /blog/the-story-behind-our-wallboard/
  - >-
    /red-ant-stuff/the-story-behind-our-wallboard-whos-working-on-what-and-can-i-deploy-yet/
date_published: 2010-11-18T00:00:00.000Z

updated_at: 2010-11-18T00:00:00.000Z
published: false
---

![Red Ant Wallboard](/assets/uploads/2010/redant-wallboard-preview.jpg)

**click on this image to get a bigger version**

Our wallboard is a bit different from some of the others. First up, we didn't want to make a bigger version of what you can already get out of our issue tracker, JIRA. Second, we felt it didnt need to alert people about new issues- we already have lots of emails and alerts that do that quite effectively.

Finally, the information needed to be useful / interesting enough to look at while you're making a coffee.

We looked at the kind of requests and information that our team we're already asking each other - stuff like **what are you working on?** and **am I OK to deploy this project?**. We also wanted to use the wallboard as a way of influencing behaviour, as the information is up there on the big screen. Right now we have an problem with people not keeping time sheets up to date. Were hoping that by showing what someone is working on (according to their time sheets) everyone will start keeping this up to date.

## Issues for the week

We wanted to create an overall list of issues for the week. On some projects we have sprints or deadlines where we are trying to close off a certain number of issues. But we wanted to have something that would give the overall numbers at a glance. The point being to get as many closed this week as we can.

## Projects

These are milestones that are coming up - so how many days to go and how many issues are outstanding. We compare the information we have in Jira (our issue tracker) to Harvest (our time sheet system). If there are **more issues than we have time left in the budget**, the project changes from green to red.

## Who is working on what

This is a list of what everyone is working on- the project name and the specific task. Next to that is the number of issues they have this week. Since not all issues are created equal (one might take 10min, another might take 10h), the graph shows the total time estimated. This goes red if a person has more time than everyone else (a hint to PMs to reschedule something).

## Can I deploy?

This was designed to answer one of our most common [Campfire](http://campfirenow.com/) questions - Am I OK to deploy Project X?

Our PMs also had an problem where work was being done, but then it was unclear whether it had been done and committed, or also moved onto staging or production servers. There was a separate problem where some tasks were deploy blockers, and had to get completed before the next deploy.

This feature answers those; it tells everyone how many issues are ready to deploy, and whether there is anything lurking around that they should be aware of.

## Be nice

This pulls information from a tool we've made to track customer interactions. We already look at lots of different things to measure how well a project is going - number of issues, whether it is on budget, etc. One thing we weren't looking at is how well customer interactions were going. How well did that meeting or phone call go? So we built a tool to measure this- hopefully it will provide some interesting data.

## Alert message - calling all cars

We have various alerts popping up down the bottom - this one is from Capistrano letting us know that Dan has just deployed to Staging (really helpful if you just happen to be walking the client through the site at the same time). These also pop up in [Campfire](http://campfirenow.com/). Other alerts include ones from [Hoptoad](http://hoptoadapp.com/pages/home) and [New Relic RPM](http://newrelic.com/).

**[Dont forget to vote for us!](http://www.ultimatewallboard.com/entries/91177)**
