# Red Ant Website

The Red Ant Website - [https://redant.com.au/](https://redant.com.au/)
Staging Website - [https://staging.redant.com.au/](https://staging.redant.com.au/)

## Quick Start :runner:

Ensure ruby & node are installed using the .ruby-version & .node-version included, and preferably yarn otherwise use npm.

    $ git clone git@github.com:red-ant/redant-home.git
    $ cd redant-home
    $ bundle install && yarn install
    $ bundle exec jekyll serve --livereload

View the dev site at http://localhost:4000

The dev site can also be run using:

    $ yarn dev

Alternatively use the supplied docker-compose config:

    $ docker-compose up

Javascript and css is built on each build using [esbuild](https://esbuild.github.io/).

## Updating Portfolio Order

In the file `/_data/portfolio.json` you can change the order of the projects shown in the portfolio page by changing the order of the slugs.

    {
      "order": [
        "page-slug-1",
        "page-slug-2",
        "page-slug-3",
        "page-slug-4"
      ]
    }

## Updating Content

Use TinaCMS -> https://redant.com.au/admin/index.html

**Project image sizes:** Project images for desktop on the project detail header might vary in size. The desktop images are recalculated to 45.92% of the original image height in pixels and the default size is 729px. If an image is smaller than this default size, then you will have to add the calculated pixel height (to be supplied by Kap) in the project markdown file under the parameter `hero.desktop.height`.

Generally all images for posts / pages should be uploaded and handled through TinaCMS. Uploaded images live in `/assets/uploads`.

TinaCMS config for collections and settings are located in the `.tina` folder.

Files uploaded through TinaCMS are set to go into the `/assets/uploads` folder.

Because the master branch is protected, Tina can’t commit directly to the master branch. Instead, changes made in the Tina admin go into the `tinacms` branch.

The process for deploying content updates is:
* Make changes in Tina admin
* In github open a PR from the tinacms branch against the master branch
* Get a code review
* Merge to master so it gets deployed to production

## Release / Deploy

# Production

A github workflow will compile and deploy to `gh_pages` when updates are pushed to `master`.

Ensure that the CNAME file has the correct domain name when deploying to production and staging.

# Staging

To deploy to staging, you'll need to push from your local to the [master branch on the redant-home-staging repository](https://github.com/red-ant/redant-home-staging/)
