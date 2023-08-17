---
layout: blog-detail
is_blog: true
title: Bypassing the sign up hurdle with super-soft joins
permalink: /:categories/keyed-link-authentication-bypassing-the-sign-up-hurdle-with-super-soft-joins/
type: ideas
categories:
  - blog
  - privacy
blog_categories:
  - privacy
  - products
author: Sam Bauers
content_sidebar: >
  When your users are unlikely to want to provide their email address to sign-up
  to your website, "Super-soft joins" may be right for you.
image_small: /assets/uploads/2012/clear-your-vision-home-small.jpg
image: /assets/uploads/2012/clear-your-vision-home.jpg
description: How we use super-soft joins to interact with users on personal subjects.
tags: []
time: ''
redirect_from:
  - >-
    /blog/how-we-do/keyed-link-authentication-bypassing-the-sign-up-hurdle-with-super-soft-joins/
date_published: 2012-03-30T00:00:00.000Z

updated_at: 2012-03-30T00:00:00.000Z
published: true
---

Red Ant client [NCPIC (National Cannabis Prevention and Information Centre)](http://ncpic.org.au/) has been pushing the boundaries of web-based psychological interventions for the past four to five years. Their latest intervention program [Clear Your Vision](http://clearyourvision.org.au/) had a few hurdles it had to overcome when it came to translating it to the web.

The intervention is aimed at young people, generally of high school age, and the topic we are wanting them to engage in is their own drug use, specifically their cannabis use. Obviously a web site belonging to a government funded agency that is offering a place to chronicle a person's drug use activity is not a place where we are going to easily get people to provide their email address.

The answer for us was to bypass sign ups and allow anybody to start the intervention process. During the course of the program we consistently offer a save functionality.

![clear-your-vision-save](/assets/uploads/2012/clear-your-vision-save.jpg)

When selected, this gives a visitor the option of either providing their email address or downloading a personalised PDF without providing an email address.

![clear-your-vision-dialog](/assets/uploads/2012/clear-your-vision-dialog.jpg)

Either way, they obtain a unique keyed link for their session. Clicking on the link brings them back to where they left off with the key in the link forming the only authentication. The email path is effectively a soft join, but the PDF path is a super-soft join as it requires zero credentials.

![clear-your-vision-pdf-detail](/assets/uploads/2012/clear-your-vision-pdf-detail.jpg)

With the PDF option, we have no way to directly identify the person, and so we can allow people who do not want to provide their email address to still utilise the resource. Those that provide their email get the benefit of being automatically reminded via email when they should return to complete the second part of the program.

The [authentication (Authentication on Wikipedia)](http://en.wikipedia.org/wiki/Authentication#Authentication_factors_and_identity) is one factor, but where the usual factor would be something the user knows - like a password, our factor is something the user has - their keyed unique link. By nature this is less secure certainly - as we rely on the user to keep it secret - but this level of authentication is OK for this application because in no way do we reveal any personally identifying data or offer the ability to reset the login credentials via the user interface. If you are offering the ability to change the account settings or are displaying personally identifying data, then this is definitely not a good approach for your application and you should probably use a normal password bound authentication method.
