---
layout: post
title: >-
  Which technology stacks or frameworks are more or less susceptible to being
  hacked?
permalink: /cyber-security/which-tech-stacks-are-more-likely-to-be-hacked/
type: news
author: Ben Still
description: >-
  There are some technologies that are inherently less secure and more
  vulnerable, but this is largely due to how old they are. Specifically, how
  long it’s been since last update
date_published: 2023-04-16T14:00:00.000Z
updated_at: 2023-04-16T14:00:00.000Z
image_small: /assets/uploads/IMG_8179.CR2.jpg
image: /assets/uploads/IMG_8179.CR2.jpg
categories:
  - cyber-security
publisher: Red Ant
---

We’re often asked if a particular framework or technology is more or less susceptible to being hacked than another. Or put another way, is one “more secure” than another?

The short answer is no. 

But it’s complicated.

**End of Life technologies**\
There are some technologies that are inherently less secure and more vulnerable, but this is largely due to how old they are. Specifically, how long it’s been since last update. There are some with no upgrade path - otherwise known as “End of Life”. Flash and "classic" ASP are all examples of this. And yet I’m regularly amazed at how many systems are still working and in production!

Of course there are a lot more recent examples of technology frameworks that have reached end of life. I could make a crack here about that being about 99% of all Javascript libraries, but I won’t.

In these instances, there isn’t much you can do - there is simply no upgrade path or way to better secure. Replacing with new technology is often the best solution.

**Not keeping up to date**\
Then there is the situation where the technology is out of date from neglect. Updates are available, but they haven’t been applied, for whatever reason. Maybe someone forgot. Never got around to it. The funding wasn’t there. 

The most common being that an update was available, but it wasn’t applied because it would break some functionality. Often when frameworks go through updates, they make changes to the way things work. So the way your developers made a feature initially, may no longer work in this more recent version. 

There is also a co dependency aspect - you may want to upgrade one part, but you’re unable to due to a database, service or library that won’t work. This cuts both ways- sometimes a dependency will force a change when they upgrade and no longer support your older system.

This problem snowballs - so the longer you leave it, the worse it becomes. Some tech stacks snowball faster than others.

**Complexity & Size of codebase**\
Another aspect is around the relative complexity and size of your code base.

Complexity is somewhat subjective - the more features and functions your platform has, and interactions or dependencies, increases complexity. However, it’s also true that a large feature set platform can also be coded in a less complex and straightforward manner. At the end of the day, the measure we use is how long it takes for a reasonably experienced developer to get their head around.

The bigger in size the code base is, the more surface area there is for vulnerabilities to be introduced. The higher the complexity of that code, the harder it is to work out where problem areas might be.

There are two gotchas here:

1. Sometimes the core code base might not be that big. But then it uses a large number of software libraries for specific functionality, which increases the overall size. Some of these libraries may well be super popular, actively maintained and updated- in which case you could assume they are relatively safe. Others can be either 
   * **out of date** - a bug or flaw has been found, and the library has been updated but your code isn’t using the current version for a variety of reasons or
   * **Abandonware** - the library has fallen out of favour, the developer has lost interest, or been hacked so spectacularly that it has been abandoned.
2. There may be “unused” parts of your code base, which swells overall size. This is a typical indication of a large amount of technical debt, where a change was made quickly but the developer never got around to completing the task. In this case, some code was made redundant but never removed from the code base. We’ve had occasions where this was the understanding, but then once that code was removed, functionality broke.
   It’s wise to include this “unused” code in the size calculation, because you can’t be 100% sure it isn’t still being used, or with a simple change can be reactivated.

In summary, yes there are some tech stacks and frameworks that are built with security in mind. As a general rule, avoid anything that is either 

* **Super new** - typically described breathlessly by junior developers who are busting to try them out as “modern” or
* **Super old** - typically described as “legacy”. 

Some frameworks have been around for a while (various C, Ruby, Java and Python flavours) that are very actively developed and have a strong security focus. There are other old frameworks such as Cold Fusion which have had anaemic developer interest and updates, while others like Flash have been shut down entirely.

However the actual technology isn’t that critical, but rather how it has been written and maintained. A regularly updated, frequently maintained platform and a good development team will help keep your platform secure.
