---
layout: blog-detail
is_blog: true
title: The blog that isn't a blog - and here's why
permalink: /:categories/the-blog-that-isnt-a-blog-and-heres-why/
type: news
categories:
  - blog
blog_categories:
author: Ben Still
content_sidebar: >
  We've recently launched a new blog feature on the Huggies site. But it's a
  blog with a difference.
image_small: /assets/uploads/2010/huggies-blogs-1-small.jpg
image: /assets/uploads/2010/huggies-blogs-1.jpg
description: >-
  We've recently launched a new blog feature on the Huggies site. But it's a
  blog with a difference.
tags: []
time: ''
redirect_from:
  - /our-work/the-blog-that-isnt-a-blog-and-heres-why/
date_published: 2010-11-17T00:00:00.000Z

updated_at: 2010-11-17T00:00:00.000Z
published: false
---

We've recently launched a [new blog feature](http://www.huggies.com.au/blog) on the Huggies site. A blog is a blog, you say. Well, blogs are a pretty standard bit of the web, and there are lots of great blog tools already out there like Wordpress and Posterous. But this one had a few unique requirements. We built this blog as a custom Rails app, and here's why:

* **It needed to fit in**: we needed the blog to fit in seamlessly with the existing site. This can be hard to do- which is why a lot of sites will use subdomains like forum.mysite.com and blog.mysite.com. We needed to have common URLs, dynamic content and member login sessions.
* **Content lives in SEO silos**: a blog would normally have URLs in a single silo or directory - perhaps something like this /blog/my-post or /blog/september/my-post. The Huggies blog has top level content at /blog, but then each of the blog areas then **live inside existing silos**. Each of these silos (things like pregnancy, childbirth and parenting) are controlled via the CMS. So a pregnancy post lives here /pregnancy/blog/my-post. This means that all of the blog content contributes Google juice to each of the content silos, rather than a non-meaningful silo such as blog
* **Comments that are actually forum posts**. When a new post is added, it also creates a new thread in the Huggies Forum. Any comment that gets added to the blog page also gets added as a forum post. Any post in the forum appears as a comment on the blog page. This allows the conversation to happen in several spots (the forum is quite popular) and also means our forum moderation team can keep an eye on comments.

[Check out the Huggies blogs](http://www.huggies.com.au/blog) - we're very chuffed with how they turned out!
