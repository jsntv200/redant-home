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
excerpt_short: >-
  Some security problems come about when the security of information shown isn't
  considered during the design process. Here's an easy fix, with 4 different
  approaches to address the issue.
---

Here’s a really common design flaw that can cause security problems. And it’s an easy one to fix.

The problem is when a product or interface is designed, without considering possible security implications. We’re not suggesting everyone should have tinfoil hats on, more that there are some easy mistakes to make. Which are also easy to fix.

The problem typically occurs in admin interfaces, where a member of staff is able to search on a keyword through users. Clicking on each result item takes you to a detail page.

Nothing unusual there.

The issue comes about when the content in each row grows to include potentially sensitive data. And it typically happens gradually over time. The first iteration might have only had ID, firstname, lastname. But over time, to make that search page more useful, more details were added. 

![](/assets/uploads/search-ux-1.png)

Which is good - the software has been improved to make the search process better and more efficient. But in meeting that objective, there’s been a compromise in security. 

If I type in a common search term (eg: “.com” is going to be in most email addresses), I’ll get a list of all users. Maybe the person doing this search isn’t who you expect - and they can scrape or screen shot your entire user list.

Maybe I shouldn’t be seeing sensitive information like salary, address or medical information. But I can see this for not only the person I was searching for, but everyone adjacent.

Maybe some of your staff work from home, and this search is left up on a laptop screen during a break. A flatmate walks by, a friend drops in, or this screen comes up by accident during a Zoom meeting. Either way, suddenly that list of sensitive information is exposed.

The scope for any security work is quite broad - it needs to cover any systems and people that might be exposed to sensitive data. Obviously the broader this is, the more work involved in securing it will be.

**The solution**\
Happily, the fix is pretty straightforward. Obviously the search results page should be limited to the information that is required. Avoid anything sensitive. 

**Example**: the search query itself may reveal sensitive information:

“all patients with procedures this month with unpaid bills”

In this query, we're asking for potentially sensitive health **and** financial data.

The admin person's task in this case is to send out payment reminders. But to achieve this, they just need a list of people that match the criteria, rather than all of the sensitive data which makes up that query. They need to know they are having a procedure soon, but they don't need to know what (which may be sensitive). They need to know who hasn't paid their bill, but they don't need to know for how much. They don't need to know personally identifying information like Email, Date of Birth or Address, what their last payment was or any other financial or health data. 

![](/assets/uploads/search-ux-2.png)

There might be a separate task to email out payment reminders to these people. Again, this could be designed so the audience is defined (people who haven't paid), and then each patient is then sent an email. An admin user doesn't need to get exposed to this information - they never need to see the actual email with payment details and the sending can all happen as a background process.

The next part of the fix is to manage access to the detail page. That’s the page with probably a lot more potentially sensitive information on it. You may want to use a permission system to restrict access to this page:

***Example: a person can only access this patient data if they are connected to that patient (eg: they are the patient's Doctor). ***

Creating an audit trigger might also be a good idea. Each time someone clicks through to a detail page, the person doing the search and the customer ID are recorded in a log. That way if there is an issue, you can understand the scope.

For a page which is relatively vanilla but with one piece of sensitive information, you can use a "click to reveal" approach. Obscure the data, and only reveal it once the user has clicked. This allows for a permission check or similar to be applied, and it also allows for an audit logging point to verify who saw what.

Creating an audit alert could also work. So if someone suddenly looks at lots of sensitive data screens, then an alert email is sent out. Similarly for doing exports or lots of printing.

Within the customer list, there may be some users that are more sensitive than others. An example of this is a celebrity or a Politically Exposed Person (PEP). As part of your user onboarding process, it is best practice to check with the user to see if they are a PEP, as they are more likely to come under threat from malicious activity.

Another approach is to request a reason. So when the admin user arrives on a screen, they are asked to describe why they need to see this sensitive information. This might take the format of a job code or ticket number.

**Don't forget the API !**\
On a more technical note, it's also important to consider what is coming back from the API data source. So while the page from the example above may now only display ID, name and procedure, a quick inspection of the data feed could expose more sensitive information. And while you may not consider Joe from Accounts capable of writing a script to paginate through the XHR and grab your entire patient data set, the person who wrote the USB key logger hidden inside the phone charging cable Joe found and has started using probably can.

![](</assets/uploads/Screenshot 2023-04-17 at 5.03.56 pm.png>)

The fix here is:

1. Try to **restrict logic in the front end** (FE). So the FE should ask the API "show me patients status outstanding next 30d", rather than getting a big list of patients and data and then doing the query in the FE. Your FE Developer might disagree and say it's easier this way, to which you need to use your Jedi powers to dissuade them. The API should do as much query work as possible.
2. There is inevitably a lag between changes to API and FE. Make sure you **allow for development time** to do this kind of "tidy up", otherwise these pieces of sensitive data can hang around in API end points. Eventually, developers assume those fields are required somewhere, and they never get removed. When the change is made, remove them (or at least make a ticket to do so).
3. **Compare what is being shown in the FE to what is returned via the API**. There should be API documentation tools that you can use to understand this and make the comparison.

Regardless of which approach you take, it’s a good idea to consider the security impacts of different parts of your platform interface. 
