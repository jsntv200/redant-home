---
layout: post
title: 'The Goose Strategy: Getting Out Of Scope'
permalink: /cyber-security/goose-getting-out-of-scope/
type: ideas
categories:
  - cyber-security
author: Ben Still
description: >
  The Goose strategy - move your application out of scope as much as you can to
  avoid complexity

  What needs to be connected to the internet?

  Move complex stuff out of there and on private network

  Tie things together into a mega voltron structure == eggs in one basket

  Same with data - if we make a “data lake” we’ll somehow win at internet
image_small: /assets/uploads/top-gun-goose.jpg
image: /assets/uploads/top-gun-goose.jpg
excerpt_short: >-
  The Goose strategy - move your application out of scope as much as you can to
  avoid complexity

  1. Does everything need to be connected to the internet? Is there any way to
  silo or remove this

  2. Move complex stuff out and on private network

  3. Avoid tying everything together into a mega Voltron structure (aka all your
  eggs in one basket)

  4. Same with data - if we make a “data lake” we’ll somehow win at internet is
  not true
excerpt_long: >-
  The Goose strategy - move your application out of scope as much as you can to
  avoid complexity

  1. Does everything need to be connected to the internet? Is there any way to
  silo or remove this

  2. Move complex stuff out and on private network

  3. Avoid tying everything together into a mega Voltron structure (aka all your
  eggs in one basket)

  4. Same with data - if we make a “data lake” we’ll somehow win at internet is
  not true
date_published: '2023-04-13T14:00:00.000Z'
updated_at: '2023-04-13T14:00:00.000Z'
publisher: Red Ant
---

Many organisations focus on how they can protect networks and platforms. Using the analogy of a house, they are putting better locks on their doors, installing video cameras and so on. But what about another strategy- have less valuable stuff in your house, so it’s less attractive to break in to. And if there is a break in, there isn’t much to steal.




This is the “Get Out of Scope” strategy. The first stage is easy - are there any processes that your platform does that involve sensitive data? The common one here is transactions - taking payments from users. Especially with older apps, we see a lot of platforms either storing transaction information or using a payment gateway in a way that leaves transaction information hanging around. 




Another one is health data - even things you personally might not consider to be “sensitive health data” like weight. And the one that gets a lot of people is children’s data - if your UI wasn’t set up to determine age, then you may be unknowingly collecting sensitive child data.




The approach here is to move that process out, and put a solid wall between your app and that data. Taking payments as an example - although it might seem really attractive to hoard lots of data points and transactional information about your users, the “get out of scope” strategy involves moving this completely out of your system. 




Here’s how best practice looks:

* Your app stores only the minimum amount of information it needs to know about that user
* Anything else, like payments, is sent to a 3rd party payments provider
* This is all done via an iframe - no server code or javascript ever deals with it. It still blends in seamlessly with the rest of the UI
* The payments provider api responds with a transaction ID & payment intention
* This transaction ID can then get used to grab additional detail - like say your user hits a page that shows billing information. The app asks the payment API for summary data for transaction id 1234. Nothing is stored locally




The next stage is to look at technical architecture. Many organisations have complex apps that need to connect to the internet. Nothing amazing there. But what tends to happen is all of the complexity exists in this one big app - even if 90% is internal rather than customer facing. 

The strategy here is to try to split out parts which don’t need to live on the open internet - so into customer facing and internal. The internal platform and databases may still live on a cloud based server, but access can be locked down via VPN or similar. The two parts don’t share databases or server instances, and can exist independently. They can still share data, just via a carefully managed API rather than common databases.

The final stage of the Goose strategy is to look at what data you’re collecting, and start on a plan to remove what you don’t need. Most of the recent exploits of corporate data have revealed organisations hoarding arguably useless data - people that hadn’t been customers for decades. 

This data might exist in your own databases, or it might live inside marketing tools. If this marketing data is obfuscated (for example many shopping data tools obfuscate user data) then you’re OK. But if it can be all downloaded, or can be easily keyed to actual data (eg: facebook ids)  then (a) it’s still your data, and (b) still your problem.

If anyone in your marketing team has suggested a “Data Lake”, start there. In the league table of bad security ideas, the “Data Lake” would be up there. There was a trend to collect and store all these data points about customers, and in doing so an organisation would grow rich and all knowing. The reality is they’ll probably become litigated and poor. Having data can be an asset, but it can also become a massive liability - especially if you’re not using it. Evaluate the actual (rather than desired) ROI and weigh that up against the impact of a data breach.

Any data collection process (eg: signing up new customers) should also have some kind of automated “garbage collection” process. Say a customer has signed up but never progressed. Or they cancelled. Or they failed subscription payments. After a few months, an automated process could delete any remotely sensitive information.

The point of the Goose strategy is to avoid the need for any intensive security audit by staying out of scope as much as possible. 

Make yourself a small target by:

1. Not touching any sensitive information. Use a 3rd party payments provider and they can worry about PCI etc
2. Not having all your eggs in one basket. Split your technical architecture out into the bits that customers need to access via the open internet, and everything else. Share data via APIs rather than common databases.
3. Review what data is already being stored - particularly in 3rd party tools and analytics. Get rid of what isn’t being used, and set up automated processes to automatically clean out old data.
