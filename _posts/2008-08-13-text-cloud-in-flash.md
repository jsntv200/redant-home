---
layout: blog-detail
is_blog: true
title: Text Cloud in Flash
description: Visualising a list of information in interesting ways
permalink: /:categories/text-cloud-in-flash/
type: ideas
categories:
  - blog
blog_categories:
author: Ben Still
image_small: /assets/uploads/2008/radiant-admin-465x311.png
image: /assets/uploads/2008/radiant-admin.png
content_sidebar: Visualising a list of information in interesting ways
published: false
date_published: ! ' 2008-08-13'
updated_at: 2008-08-13

---

This post outlines an idea that we've come up with for visualising a list of information in interesting ways. We've included some code examples, a live example, and you can download the source code to roll your own.

First, some background. We're working on a project that had some kind tag cloud as part of the layout, serving both as navigation and a quick way of visualising what the content (in this case books) was about. Initially, the idea was to have a regular tag cloud. Content within the site would be tagged by users, and then we'd display these as links next to the book as a way of showing what other people thought of/categorised the book as. Clicking on green would get you all of the other **green** books. The more often a book is tagged **green**, the bigger the **green** link becomes in the list.

But as the project progressed out of wireframe and into design, we came to the realisation that many of the pages probably wouldn't get tagged - at least not by real users (read: not Red Ant people). One of the things we try to do in our design process is to have lots of reviews to really test out ideas with all of our team. What might seem a cool idea early on might end up being a production nightmare in the harsh light of day, or alternately someone might have a much better idea on how to do it. Someone [brought up this Library Thing post](http://www.librarything.com/thingology/2007/02/when-tags-works-and-when-they-dont.php) which discusses tag clouds on Amazon and Library Thing - well worth a read if you're considering using tag clouds as part of your site structure.

> Tagging works well when people tag their stuff, but it fails when they're asked to do it to someone else's stuff. You can't get your customers to organise your products, unless you give them a very good incentive. We all make our beds, but nobody volunteers to fluff pillows at the local Sheraton.

So, we had a problem in that the tag cloud idea wasn't necessarily going to work getting tags from users. But it **did** work as a visual device- a really simple way of getting the overall flavour of content on any given page. [Joe Lamatia](http://www.joelamantia.com/blog/archives/tag_clouds/text_clouds_a_new_form_of_tag_cloud.html) has an interesting post about moving away from basic tag clouds, and their value as a way of **visualising information**. Using his title as inspiration, we worked up this re-usable snippet that can be used in a Radiant page (or any page/CMS with some tweaks), and it looks like this:

- Miles Franklin Award
- versatile and provoking
- powerful narrative
- mystifying power
- Queensland
- most impressive novel
- Essential reading
- love and betrayal
- inter-racial relationships
- Indigenous spirituality
- colonial violence

*Example of Text Cloud in Flash. Refresh the page and you'll see the keywords written out as text, and then get replaced with the Flash.*

#### Integrating a text cloud into Radiant

To make it easy to generate a text cloud in our CMS (we're using Radiant), we thought that a simple ordered list was the most logical/semantic choice for content. We didn't want our content authors having to remember lots of markup to generate what was in essence a list of keywords describing the content. To add a text cloud, they add a cloud part to the page, and then use [Textile](http://en.wikipedia.org/wiki/Textile_%28markup_language%29) to write a list of words, starting with the most important:

![radiant admin](/assets/uploads/2008/radiant-admin.png)

We grab the cloud bit with this code, which could be either in the layout or as a snippet

![cloud snippet](/assets/uploads/2008/radiant-cloud-snippet.png)

But this is only half the story. Next, we could have gone 2 ways. The first would have been to simply style the content via CSS and JavaScript, and the second was to use Flash. The advantage of Flash here is that it gave us a bit more freedom with regard to font, effects, and speed of production. The JavaScript feeds this list of words into a Flash movie and we let Flash handle the weighting. We used [Prototype](http://prototypejs.org/) to parse the list, and added it as a variable into the embed code.

```
var so = new SWFObject("root.swf", "text-cloud-flash", "525px", "100%", "8", "#ffffff");
so.addVariable("tags", $$('div.text-cloud li').collect( function(li){return li.firstChild.nodeValue;}).join() );
so.write("text-cloud");
```

<script type="text/javascript" src="/assets/uploads/2008/08/javascripts/shCore.js"></script>
<script type="text/javascript" src="/assets/uploads/2008/08/javascripts/shBrushJScript.js"></script>
<script type="text/javascript" src="/assets/uploads/2008/08/javascripts/shBrushXml.js"></script>
<script type="text/javascript" src="/assets/uploads/2008/08/javascripts/dojshighlight.js"></script>

From there it is pretty straight forward. Flash randomises the array, calculates relative sizes of fonts, and generates our text cloud. The only tricky thing left to do is to resize the Flash content on the page to fit the height of it's content. We didn't want to limit the content author at all- if they want 5 words or 50 words, the Flash needs to deal with it gracefully. Again, this is handled with JavaScript and Prototype. This means that the content editor doesn't need to worry about passing additional arguments to make it bigger for more text, and we can be sure the text cloud will look the way it's meant to look.

#### Try it out

<form id="tag-cloud-form" method="post" action="#">
<p class="textarea">
	<label for="keywords">Keywords (e.g. hello,world,this,is,a,test)</label>
	<textarea id="keywords" name="keywords" rows="4" cols="40"></textarea>
</p>
<p class="submit">
	<input type="submit" value="Create Cloud" onClick="javascript:urchinTracker ('/makeacloud');"/>
</p>
</form>
<script type="text/javascript" src="/assets/uploads/2008/08/javascripts/tag-cloud.js"></script>

#### Download and roll your own

- [flash-resize.js](/assets/uploads/2008/08/text-cloud/flash_resize.js) - resizes the flash
- [text-cloud.js](/assets/uploads/2008/08/text-cloud/text-cloud.js) - talks to the flash
- [root.swf](/assets/uploads/2008/08/text-cloud/root.swf) - Flash that contains the bling. Get the [flash source here](/assets/uploads/2008/08/text-cloud/root.fla) (right click and choose Save as)
