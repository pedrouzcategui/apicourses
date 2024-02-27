import type { TCourse } from "../types";

export const COURSES: TCourse[] = [
  {
    title: "Zapier",
    description:
      "Embrace the legendary power of no-code automation and systems with Zapier.",
    price: 50,
    slug: "zapier",
    image_url: "ZAPIER_COURSE.png",
    difficulty: "Begginer",
    published: true,
  },
  {
    title: "Make",
    description:
      "Embrace the ultimate power of the best low-code automation and systems with Make.",
    price: 99,
    slug: "make",
    image_url: "MAKE_COURSE.png",
    difficulty: "Begginer",
    published: true,
  },
  {
    title: "Slack APIs and Workflows",
    description:
      "Learn everything you need to know about Slack Workflows and Automations with this course",
    price: 99,
    image_url: "SLACK_AUTOMATIONS_COURSE.png",
    slug: "slack-automations-course",
    difficulty: "Intermediate",
    published: true,
  },
  {
    title: "Facebook Marketing API",
    description:
      "Learn everything you need to know about the marketing API with this course",
    price: 200,
    image_url: "META_DEVELOPERS_COURSE.png",
    slug: "facebook-marketing-api-for-developers",
    difficulty: "Advanced",
    published: true,
  },
  {
    title: "Retool",
    description:
      "The best tool to create beautiful dashboards and complex querying",
    price: 200,
    image_url: "RETOOL_COURSE.png",
    slug: "retool",
    difficulty: "Advanced",
    published: true,
  },
  {
    title: "GoHighLevel Zero to Hero",
    description:
      "Learn everything you need to know about HighLevel with this course",
    price: 50,
    image_url: "HIGH_LEVEL_COURSE.png",
    slug: "high-level-zero-to-hero",
    difficulty: "Begginer",
    published: true,
    modules: [
      {
        name: "Welcome to the course",
        lessons: [
          {
            title: "Intro to Go High Level",
            type: "video",
            duration_in_minutes: 10,
            completed: true,
          },
          {
            title: "How to take advantage of this course",
            type: "video",
            duration_in_minutes: 3,
            completed: true,
          },
          {
            title: "Course Update notes",
            type: "text",
            completed: true,
          },
        ],
      },
      {
        name: "HighLevel Tour",
        lessons: [
          {
            title: "Dashboards",
            type: "video",
            duration_in_minutes: 3,
            completed: true,
          },
          {
            title: "Conversations",
            type: "video",
            duration_in_minutes: 3,
            completed: true,
          },
          {
            title: "Calendars",
            type: "video",
            duration_in_minutes: 3,
            completed: true,
          },
          {
            title: "Opportunities",
            type: "video",
            duration_in_minutes: 3,
            completed: true,
          },
          {
            title: "Payments",
            type: "video",
            duration_in_minutes: 3,
            completed: true,
          },
          {
            title: "Marketing",
            type: "video",
            duration_in_minutes: 3,
            completed: true,
          },
          {
            title: "Automation",
            type: "video",
            duration_in_minutes: 3,
            completed: true,
          },
          {
            title: "Sites",
            type: "video",
            duration_in_minutes: 3,
            completed: true,
          },
          {
            title: "Memberships",
            type: "video",
            duration_in_minutes: 3,
            completed: true,
          },
          {
            title: "Reputation",
            type: "video",
            duration_in_minutes: 3,
            completed: true,
          },
          {
            title: "Reporting",
            type: "video",
            duration_in_minutes: 3,
            completed: true,
          },
          {
            title: "App Marketplace",
            type: "video",
            duration_in_minutes: 3,
            completed: true,
          },
        ],
      },
      {
        name: "HighLevel Settings",
        lessons: [
          {
            title: "Introduction to Setttings",
            type: "video",
            completed: false,
            duration_in_minutes: 5,
          },
          {
            title: "Business Profile",
            type: "video",
            completed: false,
            duration_in_minutes: 5,
          },
          {
            title: "Company Billing",
            type: "video",
            completed: false,
            duration_in_minutes: 5,
          },
          {
            title: "My Staff",
            type: "video",
            completed: false,
            duration_in_minutes: 5,
          },
          {
            title: "Pipelines",
            type: "video",
            completed: false,
            duration_in_minutes: 5,
          },
          {
            title: "Calendars",
            type: "video",
            completed: false,
            duration_in_minutes: 5,
          },
          {
            title: "Conversation AI",
            type: "video",
            completed: false,
            duration_in_minutes: 5,
          },
          {
            title: "Email Services",
            type: "video",
            completed: false,
            duration_in_minutes: 5,
          },
          {
            title: "Phone Numbers",
            type: "video",
            completed: false,
            duration_in_minutes: 5,
          },
          {
            title: "WhatsApp",
            type: "video",
            completed: false,
            duration_in_minutes: 5,
          },
          {
            title: "Reputation Management",
            type: "video",
            completed: false,
            duration_in_minutes: 5,
          },
          {
            title: "Custom Fields",
            type: "video",
            completed: false,
            duration_in_minutes: 5,
          },
          {
            title: "Custom Values",
            type: "video",
            completed: false,
            duration_in_minutes: 5,
          },
          {
            title: "Manage Scoring",
            type: "video",
            completed: false,
            duration_in_minutes: 5,
          },
          {
            title: "Domains",
            type: "video",
            completed: false,
            duration_in_minutes: 5,
          },
          {
            title: "Media",
            type: "video",
            completed: false,
            duration_in_minutes: 5,
          },
          {
            title: "URL Redirects",
            type: "video",
            completed: false,
            duration_in_minutes: 5,
          },
          {
            title: "Integrations",
            type: "video",
            completed: false,
            duration_in_minutes: 5,
          },
          {
            title: "Conversation Providers",
            type: "video",
            completed: false,
            duration_in_minutes: 5,
          },
          {
            title: "Tags",
            type: "video",
            completed: false,
            duration_in_minutes: 5,
          },
          {
            title: "Labs",
            type: "video",
            completed: false,
            duration_in_minutes: 5,
          },
          {
            title: "Audit Logs",
            type: "video",
            completed: false,
            duration_in_minutes: 5,
          },
        ],
      },
      {
        name: "Sites",
        lessons: [
          {
            title: "Introduction to the section",
            type: "video",
            completed: false,
            duration_in_minutes: 5,
          },
          {
            title: "Landing Pages vs Sites vs Blogs",
            type: "video",
            completed: false,
            duration_in_minutes: 5,
          },
          {
            title: "Exploring the UI",
            type: "video",
            completed: false,
            duration_in_minutes: 5,
          },
        ],
      },
      {
        name: "Forms",
        lessons: [
          {
            title: "Introduction to the section",
            type: "video",
            completed: false,
            duration_in_minutes: 5,
          },
          {
            title: "Forms vs Surveys",
            type: "video",
            completed: false,
            duration_in_minutes: 5,
          },
          {
            title: "Creating our first form",
            type: "video",
            completed: false,
            duration_in_minutes: 5,
          },
        ],
      },
      {
        name: "Trigger Links",
        lessons: [
          {
            title: "Introduction to the section",
            type: "video",
            completed: false,
            duration_in_minutes: 5,
          },
        ],
      },
      {
        name: "Workflows",
        lessons: [
          {
            title: "Introduction to the section",
            type: "video",
            completed: false,
            duration_in_minutes: 5,
          },
        ],
      },
      {
        name: "Snapshots",
        lessons: [
          {
            title: "Introduction to the section",
            type: "video",
            completed: false,
            duration_in_minutes: 5,
          },
        ],
      },
      {
        name: "Email Marketing",
        lessons: [
          {
            title: "Introduction to the section",
            type: "video",
            completed: false,
            duration_in_minutes: 5,
          },
          {
            title: "Initial Configuration",
            type: "video",
            completed: false,
            duration_in_minutes: 5,
          },
          {
            title: "Branded Email Domains",
            type: "video",
            completed: false,
            duration_in_minutes: 5,
          },
        ],
      },
      {
        name: "Phone Numbers",
        lessons: [
          {
            title: "Introduction to the section",
            type: "video",
            completed: false,
            duration_in_minutes: 5,
          },
          {
            title: "A2P 10DLC",
            type: "video",
            completed: false,
            duration_in_minutes: 5,
          },
        ],
      },
      {
        name: "(NEW) Call Center",
        lessons: [
          {
            title: "Introduction to the section",
            type: "video",
            completed: false,
            duration_in_minutes: 5,
          },
        ],
      },
      {
        name: "(NEW) Common Automation Scenarios and Solutions",
        lessons: [
          {
            title: "Introduction to the section",
            type: "video",
            completed: false,
            duration_in_minutes: 5,
          },
        ],
      },
      {
        name: "(NEW) AI Booking Bot",
        lessons: [
          {
            title: "Introduction to the section",
            type: "video",
            completed: false,
            duration_in_minutes: 5,
          },
        ],
      },
      {
        name: "(NEW) Intro to Automations with Zapier and Make with HighLevel",
        lessons: [
          {
            title: "Introduction to the section",
            type: "video",
            completed: false,
            duration_in_minutes: 5,
          },
        ],
      },
    ],
  },
  {
    title: "Paypal API",
    description: "Learn how to use the Paypal API, explore it and embrace it",
    price: 50,
    image_url: "PAYPAL_API_COURSE.png",
    slug: "paypal",
    difficulty: "Advanced",
    published: true,
  },
  {
    title: "Stripe API",
    description: "Learn how to use ALL of the Stripe API features",
    price: 50,
    image_url: "STRIPE_API_COURSE.png",
    slug: "stripe",
    difficulty: "Advanced",
    published: true,
  },
];
