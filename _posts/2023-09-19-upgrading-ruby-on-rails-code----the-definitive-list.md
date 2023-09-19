---
published: true
layout: blog-detail
title: Upgrading Ruby on Rails code  - the definitive list
permalink: /blog/ruby-on-rails/upgrading-ruby-on-rails-the-definitive-list
categories:
  - blog
  - ruby-on-rails
blog_categories:
  - ruby-on-rails
author: Clem Fandango
description: >-
  Most Rails update guides are just sad regurgitations of rubyonrails.org
  guides. But get ready - this is the unvarnished, definitive guide to all the
  gotchas and rabbit holes out there. 
content_sidebar: >
  Most Rails update guides are just sad regurgitations of rubyonrails.org
  guides. But get ready - this is the unvarnished, definitive guide. We've
  already wasted all the time and been down all the rabbit holes, so you don't
  need to! So nice.
date_published: 2023-09-18T14:00:00.000Z
updated_at: 2023-09-18T14:00:00.000Z
is_blog: true
---

## The BIG gotchas

* Old (unmaintained) vendored gems, new ruby compatibility? fixed upstream? why did they vendor it? did they modify it? can you switch back to upstream (un-vendor)?
* Rails 4/5 apps - having to jump through all of the intermediate techs on the way to 7 - sprockets>webpacker>sprockets>esbuild>importmaps
* If the app in question has any custom paperclip integrations - ditch paperclip for active storage 
* Migrating paperclip assets to active storage takes 5x longer than you planned for
* Adding turbolinks can fuck with any inline JS littered in views, rewrite as turbo-friendly stimulus controllers if you can
* Apps using cdn-url scripts in laouts/views - eg: jquery, ckeditor
* Apps that have an overlap/mix of BE/FE gems/node packages. eg. bootstrap gem + bootstrap node package. Which one is in use? Why both? Who wrote this…?
* Don't get carried away trying to upgrade all the things  - just update the minimal required to bump to the next version of ruby/rails
* Everything else is scope creep and features you can probably bill separately to upgrade, if the client even wants it
* Unless it breaks, log it, come back to it

## Rails/ruby

* Bump to latest patch level and max supported ruby, test app, test gems (eg 5.0.x, 5.1.x, 6.0.x, 6.1.x)
* Don't use the latest ruby version - step through them with each rails upgrade - use latest supported
* Have other rails apps handy for reference - don't have to reinvent the wheel
* rails diff is your friend [https://railsdiff.org/6.1.7.4/7.0.6](https://railsdiff.org/6.1.7.4/7.0.6)
* rails-new-output is your friend [https://github.com/railsdiff/rails-new-output](https://github.com/railsdiff/rails-new-output)
* Get your test suite working, upgrade gems to latest, add travis so you can test in the background while you do other things. Or make dinner or practice your drums
* theres plenty of blog posts about upgrading rails - mostly just rehashing whats in the [rubyonrails.org](http://rubyonrails.org/) guides
* move plain text passwords -> rails credentials, roll keys if sensitive, master key -> 1pass
* each upgrade adds /config/initialisers/ new framework defaults - most of them can be simply enabled. you wont even notice. add them all and if nothing breaks, you're good
* otherwise step through each and rerun your tests
* you can remove them from /config/initialisers once you've set their version in /config/application.rb
* good seed data is helpful when setting up a fresh app to test against - a prod dump, (obfuscated!) is better
* comment out super old outdated rake tasks that can mess up your data - less code to maintain
* before upgrading controllers, check the routes to see if they are actually in use - you might find a bunch of old unused controllers that you can skip upgrading
* it takes longer, but its easier to upgrade each rails major.minor version one by one instead of leaping 5.x -> 7.x (100% you're going to miss something)
* if the super old rails 4 app doesn't have a huge amount of code, consider a fresh rails 7 install instead of 6+ rails upgrades and cherry pick the features actually still used

## Dem Gemz

* Make a list of all gems, knock off the known easy ones
* bundle outdated, bundle audit
* for each gem, jump on rubygems / github and grab the changelog urls, make a list so you can get back there on each rails upgrade
* make a list of all gem update versions so you can impress your PM/client
* upgrade strategies
* if infrequent gem modifications, jump to latest - it'll probably just work
* if 100s of changes, jump to each major/minor version after reading the changelog - most changes are minor bugfixes, pay attention to major version jumps
* check their issues/pull requests for anything related to rails/ruby version fixes
* if gem is super outdated, check if its actually being used in the app before upgrading it - easier to delete
* use rails native encrypted fields over attr\_encrypted once you hit rails 7.0, migrate your 2fa keys
* use rails credentials with config gem - use env vars for things that need changing without a full deploy (looking at you heroku), or things managed by 3rd party apps (eg heroku postgres)
* env specific creds where applicable
* use bullet for n+1s
* don't include the full aws sdk if you are only need s3 - use the s3 specific gem
* discard > paranoia
* use httparty for simple api interactions, instead of including a huge buggy gem, at the cost of having to maintain the api url versioning yourself
* if your using sidekiq, sidekiq-cron > whenever
* slim > haml 
* using wkhtmltopdf on heroku? theres a wkhtmltopdf-heroku specific gem that works
* gh action reviewdog + brakeman > travis + brakeman
* if your app depends on a github url, fork it to your repo so your app doesnt die if they delete the repo
* ffaker > faker - should only be a few differences to fix
* pagy > all other pagination gems
* pundit is great for locking down granular access to things
* phonelib is great for phone/mobile sanitise/formatting
* pg\_search is handy for postgres full text search
* paper\_trail (gem) != papertrail (saas) - tracking changes like audited vs online log storage
* delete coffee-rails, use an online service to decaffinate
* remove uglifier, yui-compressor etc once you have webpacker packaging the FE
* letter\_opener is your friend on local dev. if you must test on a smtp server, add some sandbox email intercepting so you don't email real people - you use obfuscated data right
* if you're using sentry/new relic, make sure you're filtering out PII

## node

* use yarn over npm - should have a yarn.lock in the root
* yarn outdated, yarn audit
* bump the rails packages to match the rails upgrade versions
* step major node versions 10>12>14>16>18>20 up to the oldest your hosting platform supports - new ones are always fiddley
* if you are on ruby 3.0, you are on openssl 1.1.1, and cant go above node 18/20 without using the openssl legacy provider node option - sorted in ruby 3.1 which uses openssl 3
* fuck off libv8 / therubyracer gems as you have node installed
* move all of your BE js gems to FE js where they have no good reason to be on the BE
* bootstrap, font awesome, jquery
* purgecss can help remove unused css - but sometimes it gets it wrong, add exceptions to /config/purgecss.config.js
* time to get rid of bower. move them to package.json and let yarn take over
* you should have a .node-version in the root - if you don't, travis will assume the latest for it's ubuntu version, which may throw errors around node18/20, openssl1/3
* same goes for .ruby-version

## travis

* only use ubuntu 22 / jammy for >= ruby 3.1 apps - no openssl 1.1.1
* use ubuntu 20 / focal for node 20, but with openssl-legacy-provider to use openssl 1.1.1
* even if your app uses postgres 15, you'll have difficulties trying to get it working - just use postgres 12 in your travis config and save hrs of fucking around

## heroku

* use heroku-20 / focal for apps \< ruby 3.1
* use heroku-22 / jammy for apps >= ruby 3.1
* if you've migrated to heroku, you no longer need that capistrano config - one less thing to maintain - comment out or remove. Gemfile, /config
* If your app does a lot of logging to disk, you need some sweet, sweet 12 Factoring
* Write important stuff to the db, everything else to stdout and let heroku manage the logs - and maybe pipe to papertrail for a better ui
