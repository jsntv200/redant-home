import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "tinacms",
  clientId: process.env.TINA_PUBLIC_CLIENT_ID, // Get this from tina.io
  token: process.env.TINA_PUBLIC_TOKEN, // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "./",
  },
  media: {
    tina: {
      mediaRoot: "assets/uploads",
      publicFolder: "./",
    },
  },
  schema: {
    collections: [
      {
        label: "jobs",
        name: "jobs",
        path: "jobs",
        format: "md",
        fields: [
          {
            label: "published",
            name: "published",
            type: "boolean",
            required: true,
          }, {
            type: "string",
            name: "layout",
            label: "layout",
            required: true,
            options: ["v2-blog-detail", "v2-project-detail", "v2-technology-detail", "v2-job-detail"],
            ui: {
              description: "Determines which layout this content will use.",
            },
          }, {
            type: "string",
            name: "slug",
            label: "slug",
            required: true,
          }, {
            type: "string",
            name: "title",
            label: "title",
            required: true,
          }, {
            type: "string",
            name: "description",
            label: "description",
            required: true,
            component: "textarea",
          }, {
            type: "string",
            name: "keywords",
            label: "keywords",
          }, {
            type: "image",
            name: "image_small",
            label: "image_small",
          }, {
            type: "image",
            name: "image",
            label: "image",
          }, {
            label: "redirect_from",
            name: "redirect_from",
            type: "string",
            list: true,
          }, {
            label: "Body",
            name: "body",
            isBody: true,
            type: "rich-text",
          },
        ],
      },
      {
        label: "portfolio",
        name: "portfolio",
        path: "portfolio",
        format: "md",
        fields: [
          {
            label: "published",
            name: "published",
            type: "boolean",
            required: true,
          }, {
            type: "string",
            name: "layout",
            label: "layout",
            required: true,
            options: ["v2-blog-detail", "v2-project-detail", "v2-technology-detail", "v2-job-detail"],
            ui: {
              description: "Determines which layout this content will use.",
            },
          }, {
            type: "string",
            name: "theme",
            label: "theme",
            required: true,
            options: [
              {
                value: "12wbt",
                label: "12wbt",
              },
              {
                value: "accr",
                label: "accr",
              },
              {
                value: "bank-of-queensland",
                label: "bank-of-queensland",
              },
              {
                value: "beautyheaven",
                label: "beautyheaven",
              },
              {
                value: "bondi-vet",
                label: "bondi-vet",
              },
              {
                value: "campaign-xpress",
                label: "campaign-xpress",
              },
              {
                value: "gigcar",
                label: "gigcar",
              },
              {
                value: "huggies",
                label: "huggies",
              },
              {
                value: "know-anyone",
                label: "know-anyone",
              },
              {
                value: "managed",
                label: "managed",
              },
              {
                value: "matrix-education",
                label: "matrix-education",
              },
              {
                value: "mentor",
                label: "mentor",
              },
              {
                value: "momentum",
                label: "momentum",
              },
              {
                value: "mup",
                label: "mup",
              },
              {
                value: "redant",
                label: "redant",
              },
              {
                value: "nps",
                label: "nps",
              },
              {
                value: "move",
                label: "move",
              },
              {
                value: "pearsons-florist",
                label: "pearsons-florist",
              },
              {
                value: "pearsons-nav-admin",
                label: "pearsons-nav-admin",
              },
              {
                value: "pearsons-school-of-floristry",
                label: "pearsons-school-of-floristry",
              },
              {
                value: "placeos",
                label: "placeos",
              },
              {
                value: "sellers-diy",
                label: "sellers-diy",
              },
              {
                value: "smata",
                label: "smata",
              },
              {
                value: "sydney-trains",
                label: "sydney-trains",
              },
              {
                value: "the-grants-hub",
                label: "the-grants-hub",
              },
              {
                value: "tribe",
                label: "tribe",
              },
              {
                value: "whatson",
                label: "whatson",
              },
              {
                value: "yates",
                label: "yates",
              },
              {
                value: "managed",
                label: "managed",
              },
            ],
            ui: {
              defaultItem: "12wbt",
            },
          }, {
            type: "string",
            name: "slug",
            label: "slug",
          }, {
            type: "string",
            name: "title",
            label: "title",
          }, {
            type: "string",
            name: "tagline",
            label: "tagline",
            component: "textarea",
          }, {
            type: "string",
            name: "description",
            label: "description",
            component: "textarea",
          }, {
            type: "string",
            name: "project_url",
            label: "project_url",
            default: "https://",
          }, {
            type: "string",
            label: "client",
            name: "client",
            options: [
              {
                value: "12WBT",
                label: "12WBT",
              },
              {
                value: "Michelle Bridges 12WBT",
                label: "Michelle Bridges 12WBT",
              },
              {
                value: "Beauty Heaven",
                label: "Beauty Heaven",
              },
              {
                value: "Vexo Media",
                label: "Vexo Media",
              },
              {
                value: "CAMPAIGNxpress",
                label: "CAMPAIGNxpress",
              },
              {
                value: "Huggies",
                label: "Huggies",
              },
              {
                value: "Kimberly Clark",
                label: "Kimberly Clark",
              },
              {
                value: "The Mentor Platform",
                label: "The Mentor Platform",
              },
              {
                value: "Outdoor Media Association",
                label: "Outdoor Media Association",
              },
              {
                value: "NPS Medicinewise",
                label: "NPS Medicinewise",
              },
              {
                value: "Move OMA",
                label: "Move OMA",
              },
              {
                value: "Internal tool",
                label: "Internal tool",
              },
              {
                value: "Real Pet Food Co",
                label: "Real Pet Food Co",
              },
              {
                value: "Orica",
                label: "Orica",
              },
              {
                value: "Tribe Group",
                label: "Tribe Group",
              },
              {
                value: "City Of Sydney",
                label: "City Of Sydney",
              },
              {
                value: "Managed Platforms",
                label: "Managed Platforms",
              },
              {
                value: "Transport NSW and Veitch Lister Consulting",
                label: "Transport NSW and Veitch Lister Consulting",
              },
              {
                value: "Matrix Education",
                label: "Matrix Education",
              },
            ],
          }, {
            type: "string",
            name: "project_date",
            label: "project_date",
            ui: {
              defaultItem: "2016 - ",
            },
          }, {
            type: "string",
            name: "team_size",
            label: "team_size",
            ui: {
              defaultItem: "0 people",
            },
          }, {
            type: "string",
            name: "lines_of_code",
            label: "lines_of_code",
          }, {
            type: "string",
            name: "technology_tags",
            label: "technology_tags (Currently used strings: Ruby on Rails, Radiant CMS, Kubernetes, PostgreSQL, Salesforce Marketing Cloud, Stripe Payments, AngularJS, Brightcove, Postgres, Sidekiq, Swift, Wordpress, Amazon Web Services (AWS), Chargify, Comfy CMS, Elasticsearch, Facebook, Fastly, Google BigQuery, Locomotive CMS, Memcached, Paperclip, Paypal, ReactJS, Redis, SendGrid, Shopify, ABC / VFX signs API integration, Angular JS, Zai, Carrierwave, Channel Advisor price data, Cloudinary, CoreData, Delayed Job, DocuSign, FB Authentication, FB authentication, Facebook Messenger, Facebook authentication, Fitbit, Google Machine Learning, Grape API, Grape Ruby API, Indesign Server, MoneyTech, MongoDB, MyDesktop API integration, MyFitnessPal, Node server, Omniauth, PHP, Rack API, Reactful, Refile, Salesforce Predictive Intelligence, Scrivito CMS, Sendgrid, Social API integrations (Twitter, FB, Instagram), Tableau, Vue.js, Vzaar, WAVE (visually impaired testing tool) as part of CI build chain, Websockets, Wistia, Wit.ai API, Withings, YesMail, iOS Push, Docker, Heroku, Projectt, Twilio, Jira)",
            list: true,
          } , {
            type: "string",
            name: "industry_vertical_tags",
            label: "industry_vertical_tags (Currently used strings: Ecommerce, Ed Tech/education,	Government,	Transport,	Health & Fitness,	Adtech & Media,	Consumer Goods,	Pet Tech,	Property & Real Estate,	IoT,	Fintech,	Forex,	CRM)",
            list: true,
          } , {
            type: "string",
            name: "service_tags",
            label: "service_tags (Currently used strings: UX Design, Code Review,	Dev-Ops	Payments,	Product Development, Support & Maintenance)",
            list: true,
          }, {
            label: "Body",
            name: "body",
            isBody: true,
            type: "rich-text",
          },
        ],
      },
      {
        label: "posts",
        name: "post",
        path: "_posts",
        ui: {
          filename: {
            readonly: false,
            slugify: (values) => {
              let currentDate = new Date().toLocaleDateString("en-CA");
              return `${currentDate}-${values?.title?.toLowerCase().replace(/ /g, "-")}`;
            },
          },
        },
        format: "md",
        fields: [
          {
            label: "published",
            name: "published",
            type: "boolean",
            required: true,
          }, {
            label: "layout",
            name: "layout",
            type: "string",
            required: true,
            ui: {
              defaultItem: "post",
            },
          }, {
            label: "title",
            name: "title",
            type: "string",
            required: true,
          }, {
            label: "permalink",
            name: "permalink",
            type: "string",
            required: true,
          }, {
            label: "type",
            name: "type",
            type: "string",
            required: true,
            options: [
              {
                value: "news",
                label: "news",
              },
              {
                value: "ideas",
                label: "ideas",
              },
            ],
          }, {
            label: "categories",
            name: "categories",
            type: "string",
            list: true,
            ui: {
              description:
                "Example categories: our-work; ruby-on-rails; red-ant-stuff; strategy; how-we-do; design; automated-testing; ruby-on-rails-devops; mobile; digital-products; tool-reviews; pjax; marketing; software-development;",
            },
          }, {
            label: "author",
            name: "author",
            type: "string",
            required: true,
            ui: {
              defaultItem: "Ben Still",
            },
          }, {
            type: "string",
            name: "description",
            label: "description",
            required: true,
            component: "textarea",
            ui: {
              description: "Appears on index menus & meta desc",
            },
          }, {
            type: "string",
            name: "keywords",
            label: "keywords",
          }, {
            type: "image",
            name: "image_small",
            label: "image_small",
          }, {
            type: "image",
            name: "image",
            label: "image",
          }, {
            type: 'rich-text',
            label: 'content_sidebar',
            name: 'content_sidebar',
          }, {
            label: "tags",
            name: "tags",
            type: "string",
            list: true,
            ui: {
              description: "Tags in use: Innovation; Startup; Red-Ant-Marketing; LinkedIn",
            },
          }, {
            label: "time",
            name: "time",
            type: "string",
            ui: {
              defaultItem: "5 Mins Read",
            },
          }, {
            label: "redirect_from",
            name: "redirect_from",
            type: "string",
            list: true,
          }, {
            label: "date_published",
            name: "date_published",
            type: "datetime",
            required: true,
            ui: {
              description: "Post creation date",
              dateFormat: "YYYY MM DD",
            },
          }, {
            label: "updated_at",
            name: "updated_at",
            type: "datetime",
            required: true,
            ui: {
              description: "If the post has been updated, set this date",
              dateFormat: "YYYY MM DD",
            },
          }, {
            label: "publisher",
            name: "publisher",
            type: "string",
            required: true,
            ui: {
              defaultItem: "Red Ant",
            },
          }, {
            label: "Body",
            name: "body",
            isBody: true,
            type: "rich-text",
          }, {
            label: "is_blog",
            name: "is_blog",
            type: "boolean",
            required: true,
            ui: {
              defaultItem: true,
              description: "Do not change this value - should always be true. Used for front end templating.",
            },
          },
        ],
      },
      {
        label: "services",
        name: "services",
        path: "services",
        format: "md",
        fields: [
          {
            label: "published",
            name: "published",
            type: "boolean",
            required: true,
          }, {
            type: "string",
            label: "layout",
            name: "layout",
            required: true,
            ui: {
              defaultItem: "service",
            },
          }, {
            type: "string",
            name: "title",
            label: "title",
            required: true,
          }, {
            type: "string",
            name: "subtitle_1",
            label: "subtitle_1",
            required: true,
            component: "textarea",
          }, {
            type: "string",
            name: "subtitle_2",
            label: "subtitle_2",
            component: "textarea",
          }, {
            type: "string",
            name: "cta_button_title",
            label: "cta_button_title",
            required: true,
          }, {
            type: "string",
            name: "service_title",
            label: "service_title",
            required: true,
          }, {
            type: "string",
            name: "service_bulletpoints",
            label: "service_bulletpoints",
            list: true,
          }, {
            type: "string",
            name: "time",
            label: "time",
            required: true,
          }, {
            type: "string",
            name: "cost",
            label: "cost",
          }, {
            type: "string",
            name: "description",
            label: "description",
            required: true,
            component: "textarea",
          }, {
            type: "string",
            name: "slug",
            label: "slug",
          }, {
            label: "redirect_from",
            name: "redirect_from",
            type: "string",
            list: true,
          }, {
            type: "string",
            name: "bulletpoints",
            label: "bulletpoints",
            list: true,
          }, {
            type: "string",
            name: "projects",
            label: "projects",
            description: "Project slugs",
            list: true,
          }, {
            label: "Body",
            name: "body",
            isBody: true,
            type: "rich-text",
          },
        ],
      },
      {
        label: "technology",
        name: "technology",
        path: "technology",
        format: "md",
        fields: [
          {
            label: "published",
            name: "published",
            type: "boolean",
            required: true,
          }, {
            type: "string",
            name: "layout",
            label: "layout",
            required: true,
            ui: {
              defaultItem: "technology",
            },
          }, {
            type: "string",
            name: "category",
            label: "category",
            required: true,
            options: ["Languages", "Payments", "Hosting", "Integrations"],
            ui: {
              description: "Determines which category section this item falls under in the technology listing page",
            },
          }, {
            type: "string",
            name: "type",
            label: "type",
            required: true,
            ui: {
              description: "Determines which subcategory this item belongs to in the technology list",
            },
            options: ["Technology", "Integration"],
          }, {
            type: "string",
            name: "title",
            label: "title",
            required: true,
          }, {
            type: "string",
            name: "subtitle",
            label: "subtitle",
            required: true,
          }, {
            type: "string",
            name: "description",
            label: "description",
            required: true,
            component: "textarea",
          }, {
            type: "string",
            name: "listing_description",
            label: "listing_description",
            component: "textarea",
            ui: {
              defaultItem: "",
            },
          }, {
            type: "string",
            name: "slug",
            label: "slug",
          }, {
            type: "image",
            name: "image",
            label: "image",
          }, {
            type: "image",
            name: "image_hero",
            label: "image_hero",
            ui: {
              description:
                "The image that appears in the tech detail page. If not set, the image in the 'image' field gets used.",
            },
          }, {
            type: "string",
            label: "redirect_from",
            name: "redirect_from",
            list: true,
          }, {
            label: "Body",
            name: "body",
            isBody: true,
            type: "rich-text",
          },
        ],
      },
    ],
  },
});
