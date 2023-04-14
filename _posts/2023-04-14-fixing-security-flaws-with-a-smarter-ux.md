---
layout: post
title: Fixing security flaws with a smarter UX
permalink: /cyber-security/fixing-security-flaws-with-a-smarter-ux/
type: ideas
categories:
  - cyber-security
author: Ben Still
date_published: 2023-04-13T14:00:00.000Z
updated_at: 2023-04-13T14:00:00.000Z
publisher: Red Ant
description: >-
  Some security problems come about when the security of information shown isn't
  considered during the design process. Here's an easy fix, with 4 different
  approaches to address the issue
image_small: /assets/uploads/fake4.jpg
image: /assets/uploads/fake4.jpg
---

Here’s a really common design flaw that can cause security problems. And it’s an easy one to fix.

The problem is when a product or interface is designed, without considering possible security implications. We’re not suggesting everyone should have tinfoil hats on, more that there are some easy mistakes to make. Which are also easy to fix.

The problem typically occurs in admin interfaces, where a member of staff is able to search on a keyword through users. Clicking on each result item takes you to a detail page.

Nothing unusual there.

The issue comes about when the content in each row grows to include potentially sensitive data. And it typically happens gradually over time. The first iteration might have only had ID, firstname, lastname. But over time, to make that search page more useful, more details were added. 

Which is good - the software has been improved to make the search process better and more efficient. But in meeting that objective, there’s been a compromise in security. 

If I type in a common search term (eg: “.com” is going to be in most email addresses), I’ll get a list of all users. Maybe the person doing this search isn’t who you expect - and they can scrape or screen shot your entire user list.

Maybe I shouldn’t be seeing sensitive information like salary, address or medical information. But I can see this for not only the person I was searching for, but everyone adjacent.

Maybe some of your staff work from home, and this search is left up on a laptop screen during a break. A flatmate walks by, a friend drops in, or this screen comes up by accident during a Zoom meeting. Either way, suddenly that list of sensitive information is exposed.

The fix is pretty straightforward. Obviously the search results page should be limited to the information that is required. Avoid anything sensitive. 

**Example**: the search query itself may be sensitive:

“all patients with procedures next week with unpaid bills”

But the results should only be a list of patient names and procedure dates. Not which procedure they are having. Not how much they owe.

The next part of the fix is to manage access to the detail page. That’s the page with all the potentially sensitive information on it. You may want to use a permission system to restrict access to this page:

Example: a person can only access this patient data if they are their patient. 

Creating an audit trigger might also be a good idea. Each time someone clicks through to a detail page, the person doing the search and the customer ID are recorded in a log. That way if there is an issue, you can understand the scope.

Creating an audit alert could also work. So if someone suddenly looks at lots of sensitive data screens, then an alert email is sent out.

Within the customer list, there may be some users that are more sensitive than others. An example of this is a celebrity or a Politically Exposed Person (PEP). As part of your user onboarding process, it is best practice to check with the user to see if they are a PEP, as they are more likely to come under threat from malicious activity.

Another approach is to request a reason - so ask the user why they need to see this sensitive information. This would typically take the format of a job code or ticket number.

Regardless of which approach you take, it’s a good idea to consider the security impacts of different parts of your platform interface. 
