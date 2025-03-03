---
layout: blog-detail
is_blog: true
title: MySQL SVN Backup- A simple solution for small databases
permalink: /:categories/backing-up-mysql-into-subversion-using-mysql-svn-backup/
type: ideas
categories:
  - blog
  - devops
blog_categories:
  - devops
author: Sam Bauers
content_sidebar: >
  Introducing a simple tool for backing up small MySQL databases to Subversion.
  The open source script MySQL SVN Backup. Now featuring dolphins with lasers.
image_small: /assets/uploads/mysql.jpg
image: /assets/uploads/mysql.jpg
description: >-
  A common pain point when using databases like MySQL on small projects is a
  simple way of managing backups. Here is a solution we've created.
tags: []
time: ''
redirect_from:
  - >-
    /devops/backing-up-mysql-into-subversion-using-mysql-svn-backup/
date_published: 2014-01-16T00:00:00.000Z

updated_at: 2014-01-16T00:00:00.000Z
published: false
---

The other issue is that monolithic MySQL dumps tend to add up in size. The usual solution is to rotate out the backups and discard old ones based on what is ultimately an arbitrary schedule. When the backup you need is from eight days ago, you can be sure that you have only kept them for the last seven days. This problem can also be solved by implementing complex incremental backups or by shunting files off to cheaper storage like Amazon, but then every new step in the backup path is a new dependency or point of failure just waiting to ruin your day. Tools like [rdiff-backup](http://www.nongnu.org/rdiff-backup/) (sometimes via [Backupninja](https://labs.riseup.net/code/projects/backupninja)) are also used, but the stored diffs are hard to manually verify.

So the world needs a solution for MySQL which satisfies the 5 golden rules for simple and effective backup solutions, which I just made up:

* Each backup run should finish quickly
* The backups should not require massive amounts of storage
* Backups should be verifiable as sane by a human with minimal effort
* Restoring backups from any point in time should be easy
* Backups should not be stored in proprietary data formats

A couple of years ago we created a tool which satisfies these requirements and is easy to understand, run, and modify for your own needs. Introducing MySQL SVN Backup. The name says it all really MySQL SVN Backup is a shell script that uses a combination of the "mysqldump" tool and the Subversion command-line client to backup MySQL databases to a Subversion repository.

The reasoning behind this approach is simple:

* Small databases don't change very often, so we only need to backup the changes.
* MySQL databases can be dumped out to text format.
* Text files can be version controlled.
* Version control systems are common.
* Version control systems allow for easy verification of backup content.
* Version control systems allow for easy restoration of content at any point in time.

It can be configured to backup only specific databases and it can also exclude specific tables that aren't suited to being backed up this way (or at all). By using Subversion we have access to dozens of tools for browsing backups online and restoring data. An unexpected advantage of this method has been the ease with which developers can grab a copy of production data for local development use. It's just a matter of an SVN export, which allows us to avoid giving developers access to production systems, or bugging our system administrators for database dumps. Another bonus is that we can account for schema changes over time. So we could potentially correlate and trace schema changes made by certain database migrations run by an application framework, as opposed to schema changes that have been made manually.

We have been using MySQL SVN Backup for about two years and tweaked it over that time to make it more reliable. The code can be found at the [project page on GitHub](https://github.com/red-ant/mysql-svn-backup) and no, the irony of hosting a Subversion based tool on GitHub is not lost on us. Git support may just be a [future feature](https://github.com/red-ant/mysql-svn-backup/issues/1) (pull requests are welcome!)

![Dolphins with lasers](/assets/uploads/2014/dolphins-with-lasers.jpg)
