---
layout: post
title: Platform Security - maybe you're the security flaw?
permalink: /cyber-security/maybe-you're-the-security-flaw/
type: ideas
categories:
  - cyber-security
  - automated-testing
author: Ben Still
description: >
  Many organisations spend a lot of time evaluating and worrying about cyber
  risks from bad actors trying to access your systems, or valuable information
  from leaking out. <br />

  But what if the actual security flaw came about as a result of a decision you
  the Product Owner had made? One that made all the other measures somewhat
  redundant.
date_published: 2023-04-13T14:00:00.000Z
updated_at: 2023-04-13T14:00:00.000Z
publisher: Red Ant
image: /assets/uploads/Screenshot 2023-04-14 at 11.10.18 am.png
image_small: /assets/uploads/Screenshot 2023-04-14 at 11.10.18 am.png
excerpt_short: >-
  Many organisations spend a lot of time evaluating and worrying about cyber
  risks from hackers or information leaks. But what if the actual security flaw
  came about as a result of a decision you the Product Owner had made? Some tips
  to identify and avoid this.
---

Many organisations spend a lot of time evaluating cyber risks. Looking at ways to stop bad things coming in. Stopping various behaviours. Preventing information from leaking out.

But what if the security flaw was already in your platform? Something that was a result of a decision made a while ago, that no one analysed in terms of security? In other words, maybe you (the product owner) \*are\* the security flaw.

Here’s how it can happen. 

The most common way this occurs stems from a decision to solve a problem quickly. Say your team gets a user report that they are having problems with a particular task. And the root cause is complicated, which would involve lots of UX and development time to fix properly. So the quick fix approach is taken: change permissions on your team’s Admin accounts. They can log in as that user to rectify the issue, rather than the user.

This presents a few problems. Now, one type of user can now become another user. With a simple change in the database. Which is a pretty attractive target for exploitation. I can ask myself to pay my other self into my offshore bank account.

And if something bad does happen, and say some money goes missing from a customer account. The first step would be to review logs to see who moved the money. But if you can’t actually establish for sure who that user actually was, it renders the logs a bit useless.

Now let’s consider the scenario where there wasn’t some skillful hacker breaching your database. Instead, you have a vexatious user. They did something silly - paid the wrong account by mistake, or there was fraud on their end. Which results in the customer incurring some kind of loss or penalty. So they turn around and blame your platform -[ taking the Ted Cruz defence](https://www.abc.net.au/news/2017-09-12/ted-cruz-appears-to-like-porn-video-on-twitter/8901566) and claiming something along the lines of they had nothing to do with it / weren’t even online / etc -. You might have trouble convincing your insurer or lawyer that the customer was to blame if you can’t definitively track which account was linked to that transfer.

Another way this manifests is around lax user security. We get it - making customers stop using the password they would like to use (eg: “password123”) and requiring hard passwords is a hassle. Adding multi factor authentication and regular password changes is SUCH A DRAG. Logging users out after inactivity is really inconvenient because then I have to log in again each morning. Sigh.

We often find these changes get pushed down the development road map. Yes, everyone knows they need to be done, but we don’t want to impact sales right now. We’ll get to it next quarter. There are more pressing projects that get priority.

This failure to prioritise means these tasks never get done. Which in turn prompts users to invent workarounds to help them complete tasks - which can then create new security loopholes or flaws. A common one is one user creating multiple accounts, each with different privileges or permissions - so an admin user might have their own account, but also separate accounts specific for customers.

Take a fresh look at your system or platform. Can you improve your security with better development? Are there any features that have been added (like spoofing) which open up security holes? What about things you know need to be added (like multi factor), but the team never seems to find the time to address?

If you'd like to get some new eyes over your platform, we'd be keen to help. We can review code, as well as your development team and the processes they are using to build and maintain the platform. You might find a strategy or product design workshop with us useful in terms of planning out next steps.
