export const post_collection = {
  label: "posts",
  hide_body: false,
  fields: [
    {
      type: "string",
      label: "layout",
      name: "layout",
      defaultItem: "post",
      required: true
    },
    {
      type: "string",
      name: "title",
      label: "title",
      required: true
    },
    {
      type: "string",
      name: "permalink",
      label: "permalink",
      required: true,
      defaultItem: "/"
    },
    {
      type: "string",
      list: true,
      name: "type",
      label: "type",
      defaultItem: "news",
      required: true,
      ui: {
        options: [
          "news",
          "ideas"
        ]
      },
    },
    {
      type: "tag_list",
      name: "categories",
      label: "categories",
      defaultItem: [],
      description: "Example categories: our-work; ruby-on-rails; red-ant-stuff; ecommerce; strategy; how-we-do; design; automated-testing; ruby-on-rails-devops; mobile; agile; digital-products; tool-reviews; pjax; lean-development; marketing; software-development;"
    },
    {
      type: "string",
      name: "author",
      label: "author",
      required: true,
      defaultItem: "Ben Still"
    },
    {
      type: "textarea",
      name: "description",
      label: "description",
      required: true
    },
    {
      type: "string",
      name: "keywords",
      label: "keywords"
    },
    {
      type: "file",
      name: "image_small",
      label: "image_small"
    },
    {
      type: "file",
      name: "image",
      label: "image"
    },
    {
      type: "textarea",
      name: "excerpt_short",
      label: "excerpt_short"
    },
    {
      type: "textarea",
      name: "excerpt_long",
      label: "excerpt_long"
    },
    {
      type: "tag_list",
      name: "tags",
      label: "tags",
      defaultItem: [],
      description: "Tags in use: Innovation; Startup; Red-Ant-Marketing; LinkedIn"
    },
    {
      type: "string",
      name: "time",
      label: "time",
      defaultItem: "5 Mins Read"
    },
    {
      type: "tag_list",
      label: "redirect_from",
      name: "redirect_from"
    },
    {
      name: "date_published",
      type: "datetime",
      description: "Post creation date",
      config: {
        required: true,
        date_format: " DD-MM-YYYY",
        time_format: null,
        display_utc: false,
        export_format: " YYYY-MM-DD"
      },
      label: "date_published",
      hidden: true,
      defaultItem: "now"
    },
    {
      name: "updated_at",
      type: "datetime",
      description: "If the post has been updated, set this date",
      config: {
        required: true,
        date_format: "DD-MM-YYYY",
        time_format: null,
        display_utc: false,
        export_format: "YYYY-MM-DD"
      },
      label: "updated_at",
      defaultItem: "now"
    },
    {
      name: "publisher",
      type: "string",
      required: true
      label: "publisher",
      defaultItem: "Red Ant",
      hidden: true
    }
  ],
  pages: [
    "_posts/2009-07-13-earth-hour-2008.md",
    "_posts/2009-07-13-get-the-desktop.md",
    "_posts/2009-07-13-new-work-beautyheaven-update.md",
    "_posts/2009-07-13-oooh-weve-been-busy-little-ants.md",
    "_posts/2009-07-13-red-ant-web-design-award-at-uts.md",
    "_posts/2009-07-13-snapshot-of-our-latest-work.md",
    "_posts/2009-07-13-tails-for-whales.md",
    "_posts/2009-07-13-visualising-your-online-customer-funnel.md",
    "_posts/2009-07-30-fat-footers.md",
    "_posts/2009-07-30-refactoring-a-design.md",
    "_posts/2009-07-31-multi-variate-testing.md",
    "_posts/2009-08-02-why-we-use-ruby-on-rails.md",
    "_posts/2010-05-18-webby-awards-honoree-for-tails-for-whales.md",
    "_posts/2010-09-22-our-recent-interactive-tools.md",
    "_posts/2010-10-04-yates-problem-solver-iphone-app.md",
    "_posts/2010-10-25-id-like-an-iphone-app-ten-things-to-look-out-for.md",
    "_posts/2010-11-17-the-blog-that-isnt-a-blog-and-heres-why.md",
    "_posts/2010-11-18-the-story-behind-our-wallboard-whos-working-on-what-and-can-i-deploy-yet.md",
    "_posts/2011-01-19-benchmarking-the-perfect-project-what-makes-one-project-better-than-another.md",
    "_posts/2012-01-16-our-work-michelle-bridges-12wbt-build.md",
    "_posts/2012-01-25-jira-priorities-the-story-of-team-six-and-the-iceberg.md",
    "_posts/2012-01-31-clicktale-review-technology.md",
    "_posts/2012-02-24-how-a-project-gets-tested-and-deployed-with-gitflow.md",
    "_posts/2012-02-28-a-look-inside-our-jenkins-pipeline-how-we-make-reliable-stuff.md",
    "_posts/2012-03-28-manage-ssl-redirection-in-nginx-using-maps-and-save-the-universe.md",
    "_posts/2012-03-30-keyed-link-authentication-bypassing-the-sign-up-hurdle-with-super-soft-joins.md",
    "_posts/2012-06-17-going-mobile-some-options-to-address-increasing-mobile-traffic-to-your-site.md",
    "_posts/2012-08-03-which-shopify-account-is-the-best-value-for-money-it-depends-of-course.md",
    "_posts/2012-08-30-weve-finally-made-it-from-bucket-to-bokashi-to-3-compost-bins.md",
    "_posts/2012-09-25-vulnerability-scanning-ruby-on-rails.md",
    "_posts/2012-10-04-mobile-first-5-key-constraints.md",
    "_posts/2012-12-19-asynchronous-javascript-frameworks-like-angular-js.md",
    "_posts/2013-04-07-testing-web-projects-in-rails.md",
    "_posts/2013-04-10-ruby-on-rails-efficiency-convention-over-configuration.md",
    "_posts/2013-09-16-fast-follower-strategy-doa.md",
    "_posts/2013-09-17-mobile-apps.md",
    "_posts/2013-10-23-perils-ecommerce-objects-may-appear-larger-better-actually.md",
    "_posts/2013-12-16-cache-busting-gmail-new-image-caching.md",
    "_posts/2013-12-19-wordpress-effect.md",
    "_posts/2014-01-02-developing-12wbt-usa.md",
    "_posts/2014-01-16-backing-up-mysql-into-subversion-using-mysql-svn-backup.md",
    "_posts/2014-03-21-helping-plando-redefine-career.md",
    "_posts/2014-03-25-digital-products.md",
    "_posts/2018-03-27-ato-gets-sharp-on-rnd-tax-refunds-for-software-development.md",
    "_posts/2018-04-21-who-are-all-these-fake-people-on-linkedin.md",
    "_posts/2018-08-10-digital-agency-vs-technical.md",
    "_posts/2018-08-17-why-we-dont-enter-awards.md",
    "_posts/2018-09-17-mvp-software-development-options.md",
    "_posts/2018-09-17-opinionated-developer.md",
    "_posts/2018-11-26-ai-development-testing.md",
    "_posts/2019-02-12-what-makes-property-management-so-hard.md",
    "_posts/2019-05-22-finding-the-right-development-option-offshore-vs-agency-vs-freelance-vs-team.md",
    "_posts/2019-06-05-ruby-on-rails-for-your-next-web-development-project.md",
    "_posts/2020-02-27-what-is-the-right-budget-for-my-website.md",
    "_posts/automated-vulnerability-scanning-for-ruby-on-rails-projects-copy.md",
    "_posts/hompage-is-important-don-t-stuffed-it-up.md"
  ]
}