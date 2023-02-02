import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "master";

export default defineConfig({
  branch,
  clientId: process.env.TINA__CLIENT_ID, // Get this from tina.io
  token: process.env.TINA__TOKEN, // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "admin",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "assets",
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
            type: "string",
            name: "layout",
            label: "layout *required",
            ui: {
              defaultItem: "job",
            },
          }, {
            type: "string",
            name: "slug",
            label: "slug *required",
          }, {
            type: "string",
            name: "title",
            label: "title *required",
          }, {
            type: "string",
            name: "description",
            label: "description *required",
            component: "textarea",
          }, {
            type: "string",
            name: "keywords",
            label: "keywords",
          }, {
            type: 'image',
            name: "image_small",
            label: "image_small",
          }, {
            type: 'image',
            name: "image",
            label: "image",
          }, {
            label: "redirect_from",
            name: "redirect_from",
            type: "string",
            component: "tags",
          }
        ]
      }, {
        label: "portfolio",
        name: "portfolio",
        path: "portfolio",
        format: "md",
        fields: [
          {
            type: "string",
            name: "layout",
            label: "layout *required",
            config: {
              defaultItem: "project",
            },
          }, {
            type: "string",
            name: "theme",
            label: "theme *required",
            options: [
              {
                value: "12wbt",
                label: "12wbt",
              }, {
                value: "accr",
                label: "accr",
              }, {
                value: "bank-of-queensland",
                label: "bank-of-queensland",
              }, {
                value: "beautyheaven",
                label: "beautyheaven",
              }, {
                value: "bondi-vet",
                label: "bondi-vet",
              }, {
                value: "campaign-xpress",
                label: "campaign-xpress",
              }, {
                value: "gigcar",
                label: "gigcar",
              }, {
                value: "huggies",
                label: "huggies",
              }, {
                value: "know-anyone",
                label: "know-anyone",
              }, {
                value: "managed",
                label: "managed",
              }, {
                value: "matrix-education",
                label: "matrix-education",
              }, {
                value: "mentor",
                label: "mentor",
              }, {
                value: "momentum",
                label: "momentum",
              }, {
                value: "mup",
                label: "mup",
              }, {
                value: "redant",
                label: "redant",
              }, {
                value: "nps",
                label: "nps",
              }, {
                value: "move",
                label: "move",
              }, {
                value: "pearsons-florist",
                label: "pearsons-florist",
              }, {
                value: "pearsons-nav-admin",
                label: "pearsons-nav-admin",
              }, {
                value: "pearsons-school-of-floristry",
                label: "pearsons-school-of-floristry",
              }, {
                value: "placeos",
                label: "placeos",
              }, {
                value: "plando",
                label: "plando",
              }, {
                value: "petmatcher",
                label: "petmatcher",
              }, {
                value: "sellers-diy",
                label: "sellers-diy",
              }, {
                value: "smata",
                label: "smata",
              }, {
                value: "sydney-trains",
                label: "sydney-trains",
              }, {
                value: "the-grants-hub",
                label: "the-grants-hub",
              }, {
                value: "tribe",
                label: "tribe",
              }, {
                value: "voome",
                label: "voome",
              }, {
                value: "whatson",
                label: "whatson",
              }, {
                value: "yates",
                label: "yates",
              }, {
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
              }, {
                value: "Michelle Bridges 12WBT",
                label: "Michelle Bridges 12WBT",
              }, {
                value: "Beauty Heaven",
                label: "Beauty Heaven",
              }, {
                value: "Vexo Media",
                label: "Vexo Media",
              }, {
                value: "CAMPAIGNxpress",
                label: "CAMPAIGNxpress",
              }, {
                value: "Huggies",
                label: "Huggies",
              }, {
                value: "Kimberly Clark",
                label: "Kimberly Clark",
              }, {
                value: "The Mentor Platform",
                label: "The Mentor Platform",
              }, {
                value: "Outdoor Media Association",
                label: "Outdoor Media Association",
              }, {
                value: "NPS Medicinewise",
                label: "NPS Medicinewise",
              }, {
                value: "Move OMA",
                label: "Move OMA",
              }, {
                value: "PlanDo",
                label: "PlanDo",
              }, {
                value: "Internal tool",
                label: "Internal tool",
              }, {
                value: "Real Pet Food Co",
                label: "Real Pet Food Co",
              }, {
                value: "Orica",
                label: "Orica",
              }, {
                value: "Tribe Group",
                label: "Tribe Group",
              }, {
                value: "City Of Sydney",
                label: "City Of Sydney",
              }, {
                value: "Managed Platforms",
                label: "Managed Platforms",
              }, {
                value: "Transport NSW and Veitch Lister Consulting",
                label: "Transport NSW and Veitch Lister Consulting",
              }, {
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
            label: "lines_of_code"
          }, {
            type: "string",
            name: "technologies",
            label: "technologies",
            list: true,
            description: "Currently used strings: Ruby on Rails, MySQL, Radiant CMS, Kubernetes, PostgreSQL, Salesforce Marketing Cloud, Stripe Payments, AngularJS, Brightcove, Postgres, Sidekiq, Swift, Wordpress, Amazon Web Services (AWS), Chargify, Comfy CMS, Elasticsearch, Facebook, Fastly, Google BigQuery, Locomotive CMS, Memcached, Paperclip, Paypal, ReactJS, Redis, SendGrid, Shopify, ABC / VFX signs API integration, Angular JS, Zai, Carrierwave, Channel Advisor price data, Cloudinary, CoreData, Delayed Job, DocuSign, FB Authentication, FB authentication, Facebook Messenger, Facebook authentication, Fitbit, Google Machine Learning, Grape API, Grape Ruby API, Indesign Server, MoneyTech, MongoDB, MyDesktop API integration, MyFitnessPal, Node server, Omniauth, PHP, Rack API, Reactful, Refile, Salesforce Predictive Intelligence, Scrivito CMS, Sendgrid, Social API integrations (Twitter, FB, Instagram), Tableau, Vue.js, Vzaar, WAVE (visually impaired testing tool) as part of CI build chain, Websockets, Wistia, Wit.ai API, Withings, YesMail, iOS Push, Docker, Heroku, Projectt, Twilio, Jira",
          },
        ],
      }, {
        label: "posts",
        name: "post",
        path: "_posts",
        ui: {
          filename: {
            readonly: false,
            slugify: values => {
              const date = new Date();
              const day = date.getDate();
              const month = date.getMonth() + 1;
              const year = date.getFullYear();
              let currentDate = `${year}-${month}-${day}`;
              return `${currentDate}-${values?.title?.toLowerCase().replace(/ /g, '-')}`
            }
          }
        },
        format: "md",
        fields: [
          {
            label: "layout *required",
            name: "layout",
            type: "string",
            ui: {
              defaultItem: "post",
            },
          }, {
            label: "title *required",
            name: "title",
            type: "string",
          }, {
            label: "permalink *required",
            name: "permalink",
            type: "string",
          }, {
            label: "type *required",
            name: "type",
            type: "string",
            options: [{
              value: "news",
              label: "news",
            }, {
              value: "ideas",
              label: "ideas",
            }],
          }, {
            label: "categories",
            name: "categories",
            type: "string",
            list: true,
            ui: {
              description: "Example categories: our-work; ruby-on-rails; red-ant-stuff; ecommerce; strategy; how-we-do; design; automated-testing; ruby-on-rails-devops; mobile; agile; digital-products; tool-reviews; pjax; lean-development; marketing; software-development;",
            },
          }, {
            label: "author *required",
            name: "author",
            type: "string",
            ui: {
              defaultItem: "Ben Still",
            },
          }, {
            type: "string",
            name: "description",
            label: "description *required",
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
            label: "excerpt_short",
            name: "excerpt_short",
            type: "string",
            component: 'textarea',
          }, {
            label: "excerpt_long",
            name: "excerpt_long",
            type: "string",
            component: 'textarea',
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
            component: "tags",
          }, {
            label: "date_published *required",
            name: "date_published",
            type: "datetime",
            ui: {
              description: "Post creation date",
              dateFormat: "YYYY MM DD",
            },
          }, {
            label: "updated_at *required",
            name: "updated_at",
            type: "datetime",
            ui: {
              description: "If the post has been updated, set this date",
              dateFormat: "YYYY MM DD",
            },
          }, {
            label: "publisher *required",
            name: "publisher",
            type: "string",
            ui: {
              defaultItem: "Red Ant",
            },
          }
        ],
      }, {
        label: "services",
        name: "services",
        path: "services",
        format: "md",
        fields: [
          {
            type: "string",
            label: "layout *required",
            name: "layout",
            ui: {
              defaultItem: "service",
            },
          }, {
            type: "string",
            name: "title",
            label: "title *required",
          }, {
            type: "string",
            name: "subtitle_1",
            label: "subtitle_1 *required",
            component: "textarea",
          }, {
            type: "string",
            name: "subtitle_2",
            label: "subtitle_2",
            component: "textarea",
          }, {
            type: "string",
            name: "cta_button_title",
            label: "cta_button_title *required",
          }, {
            type: "string",
            name: "service_title",
            label: "service_title *required",
          }, {
            type: "string",
            name: "service_bulletpoints",
            label: "service_bulletpoints",
            list: true,
          }, {
            type: "string",
            name: "time",
            label: "time *required",
          }, {
            type: "string",
            name: "cost",
            label: "cost",
          }, {
            type: "string",
            name: "description",
            label: "description *required",
            component: "textarea",
          }, {
            type: "string",
            name: "slug",
            label: "slug",
          }, {
            label: "redirect_from",
            name: "redirect_from",
            type: "string",
            component: "tags",
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
          },
        ],
      }, {
        label: "technology",
        name: "technology",
        path: "technology",
        format: "md",
        fields: [
          {
            type: "string",
            name: "layout",
            label: "layout *required",
            ui: {
              defaultItem: "technology"
            },
          },
          {
            type: "string",
            name: "category",
            label: "category *required",
            options: [
              "Languages",
              "Payments",
              "Hosting",
              "Integrations",
            ],
            ui: {
              description: "Determines which category section this item falls under in the technology listing page",
            },
          },
          {
            type: "string",
            name: "type",
            label: "type *required",
            ui: {
              description: "Determines which subcategory this item belongs to in the technology list",
            },
            options: [
              "Technology",
              "Integration"
            ],
          },
          {
            type: "string",
            name: "title",
            label: "title *required",
          },
          {
            type: "string",
            name: "subtitle",
            label: "subtitle *required",
          },
          {
            type: "string",
            name: "description",
            label: "description *required",
            component: "textarea",
          },
          {
            type: "string",
            name: "listing_description",
            label: "listing_description",
            component: "textarea",
            ui: {
              defaultItem: "",
            },
          },
          {
            type: "string",
            name: "slug",
            label: "slug",
          },
          {
            type: "string",
            name: "projects",
            label: "projects",
            list: true,
            config: {
              description: "Project slugs",
            }
          },
          {
            type: 'image',
            name: "image",
            label: "image",
          },
          {
            type: 'image',
            name: "image_hero",
            label: "image_hero",
            ui: {
              description: "The image that appears in the tech detail page. If not set, the image in the 'image' field gets used.",
            },
          },
          {
            type: "string",
            name: "how_title",
            label: "how_title *required",
          },
          {
            type: "string",
            name: "how_bulletpoints",
            label: "how_bulletpoints",
            list: true,
          },
          {
            type: "string",
            label: "redirect_from",
            name: "redirect_from",
            component: "tags",
          },
        ],
      },
    ],
  },
});
