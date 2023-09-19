---
published: true
layout: blog-detail
title: Upgrading Ruby on Rails code  - the Definitive List
permalink: /blog/ruby-on-rails/upgrading-ruby-on-rails-the-definitive-list
categories:
  - blog
  - ruby-on-rails
blog_categories:
  - ruby-on-rails
author: Clem Fandango
description: >-
  Most Rails update guides are just sad regurgitations of rubyonrails.org
  guides. But not this one. Strap in. Get ready. This is the unvarnished,
  definitive guide to all the gotchas and rabbit holes out there. 
content_sidebar: "Most Rails update guides are just sad regurgitations of rubyonrails.org guides. <br /><br />\nNot this one. \\\n<br /><br />\\\nMake a cup of tea, strap yourself in and get ready - this is the unvarnished, definitive guide. We've already wasted all the time there is and been down all the rabbit holes there are, so you don't need to! <br /><br />\nSo nice. \U0001F44D\n"
date_published: 2023-09-18T14:00:00.000Z
updated_at: 2023-09-18T14:00:00.000Z
is_blog: true
---

## The BIG gotchas

* Old (unmaintained) vendored gems - new ruby compatibility? Fixed upstream? Why did they vendor it? Did they modify it? Can you switch back to upstream (un-vendor)?
* Rails 4/5 apps - having to jump through all of the intermediate techs on the way to 7 - `sprockets>webpacker>sprockets>esbuild>importmaps`
* If the app in question has any custom `paperclip` integrations - ditch `paperclip` for `active storage`
* Migrating `paperclip` assets to `active storage` will always take 5x longer than you ever thought possible
* Adding `turbolinks` can mess with any inline JS littered in views, rewrite as turbo-friendly `stimulus` controllers if you can
* Apps using `cdn-url` scripts in layouts/views - eg: `jquery`, `ckeditor`
* Apps that have an overlap/mix of BE/FE gems/node packages. eg. `bootstrap gem` + `bootstrap node` package. Which one is in use? Why both? Who wrote this…?
* Don't get carried away trying to Upgrade All The Things. Just update the minimal required to bump to the next version of ruby/rails
* Everything else is scope creep and features you can probably upgrade at another time. I know it might sound mean, and maybe you really want to. But just focus on the bare minimum and get the upgrade done. It can be mighty tempting to tweak a few things while you've got the hood open, but there be the dragons, Luke.
* Unless it breaks, be like Arnie and make a list and come back to it. He waits ages to come back for Sarah Connor.

## Rails/Ruby

* Bump to latest patch level and max supported ruby, test app, test gems (eg 5.0.x, 5.1.x, 6.0.x, 6.1.x)
* Don't use the latest ruby version - step through them with each rails upgrade - use latest supported
* Have other rails apps handy for reference - don't have to reinvent the wheel
* `rails diff` is your friend [https://railsdiff.org/6.1.7.4/7.0.6](https://railsdiff.org/6.1.7.4/7.0.6)
* `rails-new-output` is your even bester friend [https://github.com/railsdiff/rails-new-output](https://github.com/railsdiff/rails-new-output)
* Get your test suite working, upgrade gems to latest, add travis so you can test in the background while you do other things. Or make dinner or practice your drums.
* There's plenty of blog posts about upgrading rails - mostly just rehashing what's in the [rubyonrails.org](http://rubyonrails.org/) guides. Or some SEO junkie trying to grab some traffic. 
* Move plain text passwords -> rails credentials, roll keys if sensitive, master key -> 1pass or similar
* Each upgrade adds /config/initialisers/ new framework defaults. Most of them can be simply enabled. You won't even notice. Add them all and if nothing breaks, you're good.
* ... otherwise step through each and rerun your tests
* You can remove them from `/config/initialisers` once you've set their version in `/config/application.rb`
* Good seed data is helpful when setting up a fresh app to test against. A recent Prod dump, (obfuscated, of course!) is better
* Comment out super old outdated `rake` tasks that can mess up your data. Less code to maintain
* Before upgrading controllers, check the routes to see if they are actually in use. You might find a bunch of old unused controllers that you can skip upgrading
* This will take more time, but it's easier to upgrade each rails major.minor version one by one instead of leaping 5.x -> 7.x. And we're 1000% guaranteeing that you'll miss something. 
* If your super old Rails 4 app doesn't have a huge amount of code, consider a fresh rails 7 install instead of a gazillion Rails upgrades and cherry pick the features actually still used

## Dem Gemz

* Make a list of all gems, knock off the known easy ones
* `bundle outdated`, `bundle audit`
* For each gem, jump on rubygems / github and grab the changelog urls, make a list so you can get back there on each rails upgrade
* Make a list of all gem update versions so you can impress your PM/client

### Upgrade strategies

* If there's been infrequent gem modifications, jump to latest - it'll probably just work
* It there has been a lot of gem modifications, jump to each major/minor version after reading the changelog - most changes are minor bugfixes, pay attention to major version jumps
* Check their issues/pull requests for anything related to rails/ruby version fixes
* If the gem is super duper outdated, check if its actually being used in the app before upgrading it. Nothing sadder than spending time on something that you only later discover isn't being used. Delete with relish.
* Use rails native encrypted fields over `attr_encrypted` once you hit rails 7.0. Migrate your 2FA keys
* Use rails credentials with `config` gem - use `env` vars for things that need changing without a full deploy (I'm looking at you Heroku), or things managed by 3rd party apps (eg `heroku postgres`)
* `env` specific creds where applicable
* Use bullet for n+1s
* Don't include the full `aws sdk` if you are only need s3 - use the s3 specific gem
* `discard` > `paranoia`
* Use `httparty` for simple api interactions, instead of including a huge buggy gem, at the cost of having to maintain the api url versioning yourself
* If you're using `sidekiq`, `sidekiq-cron` > `whenever`
* `slim` > `haml`
* Using `wkhtmltopdf` on heroku? There's a `wkhtmltopdf-heroku `specific gem that works
* gh action `reviewdog` + `brakeman` > `travis` + `brakeman`
* If your app depends on a github url, fork it to your repo so your app doesn't die if some evil clown deletes the original
* `ffaker` > `faker` - should only be a few differences to fix
* `pagy` > all other pagination gems
* `pundit` is great for locking down granular access to things
* `phonelib` is great for phone/mobile sanitise/formatting
* `pg_search` is handy for `postgres` full text search
* `paper_trail` (gem) != `papertrail` (saas) - tracking changes like audited vs online log storage
* Delete `coffee-rails`, use an online service to decaffinate
* Remove `uglifier`, `yui-compressor` etc once you have `webpacker` packaging the FE
* `letter_opener` is your friend on local dev. If you absolutely must test on an smtp server, add some sandbox email intercepting so you don't email real people. Friends don't let friends spam. But you use obfuscated data, right?
* If you're using sentry/new relic, make sure you're filtering out PII when you push data to them

## Node

* Use `yarn` over `npm` - should have a `yarn.lock` in the root
* `yarn outdated`, `yarn audit`
* Bump the rails packages to match the rails upgrade versions
* step major `node` versions 10>12>14>16>18>20 up to the oldest your hosting platform supports - new ones are always fiddly and will probably make you sob uncontrollably.
* If you are on ruby 3.0, you are on `openssl 1.1.1`, and can't go above `node 18/20` without using the `openssl-legacy-provider` node option - sorted in ruby 3.1 which uses `openssl 3`
* Piss off `libv8` / `therubyracer` gems as you have `node` installed
* Move all of your BE js gems to FE js where they have no good reason to be on the BE
* `bootstrap`, `font awesome`, `jquery`
* `purgecss` can help remove unused css - but sometimes it gets it wrong, add exceptions to `/config/purgecss.config.js`
* Time to get rid of `bower`. Move them to `package.json` and let `yarn` take over
* You should have a `.node-version` in the root - if you don't, travis will assume the latest for it's ubuntu version, which may throw errors around `node18/20`, `openssl1/3`
* Same goes for `.ruby-version`

## Travis

* Only use `ubuntu 22 / jammy` for >= ruby 3.1 apps - no `openssl 1.1.1`
* Use `ubuntu 20 / focal` for node 20, but with `openssl-legacy-provider` to use `openssl 1.1.1`
* Even if your app uses `postgres 15`, you'll have difficulties trying to get it working. Just use `postgres 12` in your travis config and save hrs of fucking around which you know in your heart of hearts you'll never get back. In celebration of the time you've just saved, plant a garden or do something nice.

## Heroku

* Use `heroku-20 / focal` for apps \< ruby 3.1
* Use `heroku-22 / jammy` for apps >= ruby 3.1
* If you've [migrated to heroku](/technology/heroku/), you no longer need that capistrano config - one less thing to maintain - comment out or remove. `Gemfile`, `/config`
* If your app does a lot of logging to disk, you need some sweet, sweet 12 Factoring
* Write important stuff to the db, everything else to `stdout` and let heroku manage the logs - and maybe pipe to `papertrail` for a better ui

If you're stuck on a Rails upgrade, [give us a shout](/hire-us/)! If you'd like to complain about the mixing up of metaphors, lame movie references, or anything that's rustled your jimmies please [head over to our Linkedin](https://www.linkedin.com/company/green-ant-solutions/about/) and leave a complaint there. We value the feedback.
