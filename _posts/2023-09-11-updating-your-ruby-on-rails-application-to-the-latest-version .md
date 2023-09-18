---
published: true
layout: blog-detail
title: "Updating your Ruby on Rails application to the latest version\_"
permalink: /blog/ruby-on-rails/updating-ruby-on-rails-to-latest-version
categories:
  - blog
  - ruby-on-rails
blog_categories:
  - blog
  - ruby-on-rails
author: Ben Still
description: >
  Once upon a time, it wasn’t uncommon for people to leave their web application
  the hell alone once they’d stabilised things. 

  In the belief that making changes might introduce problems. As we've become
  more dependent on stable apps, and the threat of cyber security has become
  bigger, this is no longer viable. It’s really important to keep your Ruby on
  Rails application up to date
content_sidebar: ''
date_published: 2023-09-10T14:00:00.000Z
updated_at: 2023-09-10T14:00:00.000Z
is_blog: true
image_small: /assets/uploads/ruby-updating-s.jpg
image: /assets/uploads/ruby-updating-l.jpg
---

Once upon a time, it wasn’t uncommon for people to leave their web application the hell alone once they’d stabilised things. The belief being that making changes may introduce new problems, and the best approach to boosting longevity was to make as few changes possible.

Over the years, as businesses become more dependent on web applications to operate, and as the threat of cyber fraud increased a tipping point was reached, and this strategy become no longer viable in most cases. 

It’s really important to keep your [Ruby on Rails](https://redant.com.au/blog/ruby-on-rails/ruby-on-rails-for-your-web-development) application up to date

* Old rails apps can be difficult to work on
* Old versions of Ruby, Rails, and the various dependencies frequently have know critical security vulnerabilities, staying on top of these issues is extremely important if your app is processing payments, and/or handling Personally Identifying Information
* Left unchecked long enough, your app may become so difficult to work on, or the effort required to update so great that it’s easier to completely re-implement.

## Determining what needs to be updated

### Ruby

Take a look for a .ruby-version file in the root of your app to determine which version you’re running, if that’s missing you can check to see if it’s specified inside the Gemfile, or failing that you can make some assumptions based on your Rails version.

| Rails Version | Ruby Version |
| --------------- | --------------- |
| 7.1 | 3.2 |
| 7 | 3.1 |
| 6.1 | 3 |
| 6 | 2.6 |
| 5.2 | 2.5 |
| 5.1 | 2.5 |
| 5 | 2.4 |
| 4.2 | 2.2 |
| 4.1 | 2.1 |
| 4 | 2 |
| 3.2 | 2 |

As of writing this in September 2023, Ruby 3 and greater are currently supported. For further information check [https://endoflife.date/ruby](https://endoflife.date/ruby)

### Rails

You can check your Gemfile to determine which version of Rails your app is running. 

Rather than updating the Rails version in your Gemfile to the latest version, you will need to incrementally update through the major rails releases, updating ruby to the recommended versions as you go and fix issues as they arise.

Having a functional automated test suite will be extremely helpful for testing as you go.

[https://endoflife.date/rails](https://endoflife.date/rails)

### Gems / Dependencies

It’s useful to run a static analysis tool such as Brakeman to discover any known critical vulnerabilities in your gems, and prioritise updating those with issues.

Rather than updating your gems to the latest version, move slowly through major versions

### The Upgrade Cycle

1. Bump the rails gem to the next major release
2. Update ruby to recommended version
3. Install gems, if gems fail to install, bump versions incrementally
4. Run automated test suite, fix issues
5. Manually test site for issues
6. Goto 1

### Speed bumps

As you progress through your Upgrade Journey, you will encounter various speed bumps, depending on rails version, and gems you use. Here’s some noteworthy ones

* rails 4/5 apps - having to jump through all of the intermediate techs on the way to 7 - sprockets>webpacker>sprockets>esbuild>importmaps
* ditching paperclip for active storage - if they are have any custom paperclip integrations
* migrating paperclip assets to active storage will always take 5x longer than you planned for

Some Advice on updating your [Ruby on Rails](https://redant.com.au/blog/ruby-on-rails/why-we-use-ruby-on-rails/) app

* Don’t get carried away and upgrade all the things at once
* Updating from ruby 2 to 3 will introduce syntax errors. Many gems don’t correctly specify which versions of ruby they rely on in their gemspecs, before going down the rabbit hole make sure your ruby version is suitable for the version of the gem you have installed.
* unless it breaks, log it, come back to it
