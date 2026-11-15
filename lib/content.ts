// All site copy lives here so it can be edited without touching components.
// Replace the sample entries (projects, contact details) with verified
// Brightstack information before going live.

export const site = {
  name: "Brightstack Technologies Ltd",
  short: "Brightstack",
  tagline: "Technology Built for Real Business Growth.",
  description:
    "Brightstack Technologies helps businesses build reliable digital products through technology, design, and thoughtful problem-solving.",
};

export type Service = {
  slug: string;
  title: string;
  nav: string;
  card: string;
  headline: string;
  intro: string;
  includes: string[];
  audience: string[];
  capabilities: string[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    nav: "Web Development",
    card: "Modern, responsive, and high-performing websites and web applications built around your business needs.",
    headline: "Web Experiences That Work as Hard as Your Business",
    intro:
      "We build websites and web applications that are fast, accessible, secure, and easy to maintain. Whether you need a business website, customer platform, internal dashboard, or complex web application, we focus on building the right solution for your goals.",
    includes: [
      "Planning the structure, content model, and technical approach",
      "Responsive front-end development for every screen size",
      "Back-end services, databases, and third-party integrations",
      "Accessibility, security, and performance reviews before launch",
    ],
    audience: [
      "Businesses that need a credible, easy to manage web presence",
      "Teams replacing an ageing website or web application",
      "Companies launching a customer portal or SaaS product",
    ],
    capabilities: [
      "Business websites",
      "Web applications",
      "SaaS platforms",
      "Customer portals",
      "Internal systems",
      "E-commerce platforms",
      "API integration",
      "Performance optimization",
    ],
    faqs: [
      {
        q: "Can you work with our existing website?",
        a: "Yes. We start by reviewing what you already have, then recommend whether to improve it, rebuild parts of it, or start again. The recommendation depends on your goals and the condition of the current code.",
      },
      {
        q: "Will we be able to update the content ourselves?",
        a: "Yes. We set up content management so your team can edit pages, publish updates, and add new content without needing a developer for everyday changes.",
      },
      {
        q: "How do you decide which technology to use?",
        a: "We choose technology based on your requirements, your team, and how the product needs to grow. We explain the options and the trade-offs before development begins.",
      },
    ],
  },
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    nav: "Custom Software",
    card: "Purpose-built software designed to simplify operations, improve workflows, and solve complex business challenges.",
    headline: "Software Built Around How Your Business Works",
    intro:
      "Off-the-shelf software does not always fit the way a business operates. We design and develop custom solutions that support your workflows and solve specific business challenges.",
    includes: [
      "Mapping your current workflows and the problems inside them",
      "Designing a solution around the people who will use it",
      "Building, testing, and integrating with the tools you already use",
      "Documentation and handover so the system stays maintainable",
    ],
    audience: [
      "Teams relying on spreadsheets or manual steps for critical work",
      "Businesses whose current tools no longer fit their process",
      "Organizations that need several systems to work together",
    ],
    capabilities: [
      "Workflow and operations tools",
      "Internal dashboards",
      "Booking and management systems",
      "Data and reporting tools",
      "System integrations",
      "Legacy modernization",
    ],
    faqs: [
      {
        q: "How do we know if we need custom software?",
        a: "Custom software makes sense when existing products force you to change how you work, or when you are combining several tools with manual steps in between. We help you compare the options honestly before you commit.",
      },
      {
        q: "Who owns the software after it is built?",
        a: "Ownership terms are agreed in writing before the project starts, so there are no surprises later. We will walk you through the options during planning.",
      },
      {
        q: "Can the system grow as our needs change?",
        a: "Yes. We structure the software so new features and integrations can be added later without rebuilding what already works.",
      },
    ],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    nav: "Mobile Apps",
    card: "Intuitive mobile experiences that help businesses stay connected with their customers wherever they are.",
    headline: "Useful Mobile Experiences for Modern Users",
    intro:
      "We develop mobile applications focused on usability, performance, and the needs of your business and users.",
    includes: [
      "Defining the core journeys the app must support",
      "Interface design for small screens and touch input",
      "App development, API connections, and device testing",
      "Preparing the app for store submission and future updates",
    ],
    audience: [
      "Businesses that want a direct channel to their customers",
      "Products that need to work on the move or in the field",
      "Teams extending an existing web platform to mobile",
    ],
    capabilities: [
      "iOS and Android apps",
      "Cross-platform apps",
      "Customer-facing apps",
      "Field and operations apps",
      "Push notifications",
      "Back-end and API integration",
    ],
    faqs: [
      {
        q: "Should we build for iOS, Android, or both?",
        a: "It depends on your audience and budget. We look at who your users are and recommend an approach that reaches them without unnecessary cost.",
      },
      {
        q: "Do you handle app store submission?",
        a: "We prepare the app for submission and guide you through the store requirements, so the release process is clear from the start.",
      },
      {
        q: "What happens after the app is released?",
        a: "Apps need updates as devices and operating systems change. We remain available for improvements, fixes, and new features after launch.",
      },
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    nav: "UI/UX Design",
    card: "Clear and thoughtful digital experiences designed around real users and business goals.",
    headline: "Design That Makes Technology Easier to Use",
    intro:
      "Good design helps people understand and use technology with confidence. Our design process combines user needs, business goals, and clear visual communication.",
    includes: [
      "Understanding the users, their tasks, and their context",
      "User flows and wireframes that test ideas early",
      "Interface design with consistent components and styles",
      "Interactive prototypes and developer-ready handoff",
    ],
    audience: [
      "Teams starting a new product and shaping it from the first screen",
      "Products that work but are difficult for people to use",
      "Businesses that want a consistent look across their digital tools",
    ],
    capabilities: [
      "User flows",
      "Wireframes",
      "Interface design",
      "Interactive prototypes",
      "Design systems",
      "Usability reviews",
    ],
    faqs: [
      {
        q: "Can you design without also building the product?",
        a: "Yes. Design can be a standalone engagement, and we prepare the files so any development team can build from them.",
      },
      {
        q: "Do you test designs with real users?",
        a: "Where the project allows, we review designs with the people who will use the product, because early feedback is far cheaper than late changes.",
      },
      {
        q: "Will the design match our existing brand?",
        a: "Yes. We work from your brand guidelines, and if you do not have any, we help you define the basics the product needs.",
      },
    ],
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    nav: "Cloud & DevOps",
    card: "Reliable infrastructure and deployment practices that help your applications remain secure, stable, and scalable.",
    headline: "Reliable Infrastructure for Growing Products",
    intro:
      "We help businesses build and manage modern application infrastructure with a focus on reliability, security, and efficient delivery.",
    includes: [
      "Reviewing how your application is hosted and released today",
      "Setting up cloud environments suited to your workload",
      "Automated build, test, and deployment pipelines",
      "Monitoring, backups, and clear recovery procedures",
    ],
    audience: [
      "Products that have outgrown their original hosting setup",
      "Teams that release slowly because deployment is manual",
      "Businesses that need better visibility into system health",
    ],
    capabilities: [
      "Cloud setup and migration",
      "CI/CD pipelines",
      "Containerization",
      "Infrastructure as code",
      "Monitoring and alerting",
      "Security hardening",
    ],
    faqs: [
      {
        q: "Do we need to move everything to the cloud at once?",
        a: "No. A gradual migration is often safer. We plan the move in stages so your service keeps running while the work happens.",
      },
      {
        q: "Can you work with our current hosting provider?",
        a: "In most cases, yes. We review your current setup first and only recommend a change when it clearly benefits you.",
      },
      {
        q: "How do you approach security?",
        a: "Security is part of the setup, not an extra step. We apply access controls, keep secrets out of code, and set up monitoring so problems are noticed early.",
      },
    ],
  },
  {
    slug: "ai-automation",
    title: "AI & Automation",
    nav: "AI & Automation",
    card: "Practical automation and AI-powered solutions that help teams reduce repetitive work and make better use of technology.",
    headline: "Practical AI and Automation for Everyday Work",
    intro:
      "We explore how AI and automation can reduce repetitive work, improve workflows, and create better digital experiences, always with a focus on practical business value.",
    includes: [
      "Identifying the tasks where automation is worth the effort",
      "Connecting your tools so information moves without manual steps",
      "Adding AI features to products where they help users",
      "Reviewing results and keeping people in control of decisions",
    ],
    audience: [
      "Teams that spend hours each week on repetitive tasks",
      "Businesses curious about AI but unsure where it fits",
      "Products that could offer smarter search, support, or content tools",
    ],
    capabilities: [
      "Workflow automation",
      "AI assistants and chat tools",
      "Document processing",
      "Smart search",
      "Tool and API integrations",
      "AI readiness reviews",
    ],
    faqs: [
      {
        q: "Is AI the right answer for our problem?",
        a: "Not always. Sometimes a simple automation solves the problem better. We look at the task first and recommend AI only where it adds clear value.",
      },
      {
        q: "What happens to our data?",
        a: "Data handling is agreed before any work starts. We explain where your data goes, which services process it, and what controls are in place.",
      },
      {
        q: "Can automation work with the tools we already use?",
        a: "Usually, yes. Most modern business tools can be connected, and we check what is possible with your current systems during discovery.",
      },
    ],
  },
];

export const whyBrightstack = [
  {
    title: "Understand Before We Build",
    text: "We take the time to understand your business, your users, and the problem you want to solve before choosing a solution.",
  },
  {
    title: "Clear Communication",
    text: "Technology projects work better when everyone stays informed. We believe in direct communication, shared expectations, and transparency throughout the process.",
  },
  {
    title: "Quality That Lasts",
    text: "We focus on building maintainable and reliable solutions instead of simply delivering something that works today.",
  },
  {
    title: "Ready to Grow",
    text: "Our solutions are designed with the future in mind, helping businesses adapt as their needs and opportunities change.",
  },
];

export const process = [
  {
    step: "01",
    title: "Discover",
    text: "We learn about your business, goals, users, and challenges. Together, we define what success should look like.",
  },
  {
    step: "02",
    title: "Plan",
    text: "We turn ideas into a clear roadmap, defining the solution, priorities, technology, and delivery approach.",
  },
  {
    step: "03",
    title: "Design & Build",
    text: "Our team designs and develops the solution with a focus on usability, performance, and long-term maintainability.",
  },
  {
    step: "04",
    title: "Test & Refine",
    text: "We review, test, and improve the product to make sure it meets the agreed requirements and performs reliably.",
  },
  {
    step: "05",
    title: "Launch & Support",
    text: "After launch, we remain available to help your product evolve, improve, and respond to new business needs.",
  },
];

export const values = [
  {
    title: "Build With Purpose",
    text: "We focus on solving meaningful problems rather than adding technology for the sake of technology.",
  },
  {
    title: "Take Ownership",
    text: "We take responsibility for our work, communicate openly, and stay committed to delivering quality.",
  },
  {
    title: "Keep Learning",
    text: "Technology changes quickly. We continue learning, improving, and exploring better ways to solve problems.",
  },
  {
    title: "Work Together",
    text: "The best solutions come from strong collaboration between teams, clients, and users.",
  },
  {
    title: "Earn Trust",
    text: "We believe trust is built through honesty, consistency, and delivering on our commitments.",
  },
];

// SAMPLE ENTRIES. These show the case study layout only.
// Replace them with real, verified projects before publishing.
export type Project = {
  slug: string;
  sample: boolean;
  name: string;
  industry: string;
  challenge: string;
  solution: string;
  approach: string;
  features: string[];
  technology: string[];
  outcome: string;
};

export const projects: Project[] = [
  {
    slug: "sample-web-platform",
    sample: true,
    name: "Project name goes here",
    industry: "Industry",
    challenge: "A short description of the problem the client needed to solve.",
    solution: "A short description of what Brightstack designed and built.",
    approach: "How the team approached the problem, from discovery to delivery.",
    features: ["Key feature one", "Key feature two", "Key feature three"],
    technology: ["Technology A", "Technology B"],
    outcome: "An honest description of the result. Add figures only when they are verified.",
  },
  {
    slug: "sample-mobile-app",
    sample: true,
    name: "Project name goes here",
    industry: "Industry",
    challenge: "A short description of the problem the client needed to solve.",
    solution: "A short description of what Brightstack designed and built.",
    approach: "How the team approached the problem, from discovery to delivery.",
    features: ["Key feature one", "Key feature two", "Key feature three"],
    technology: ["Technology A", "Technology B"],
    outcome: "An honest description of the result. Add figures only when they are verified.",
  },
  {
    slug: "sample-custom-system",
    sample: true,
    name: "Project name goes here",
    industry: "Industry",
    challenge: "A short description of the problem the client needed to solve.",
    solution: "A short description of what Brightstack designed and built.",
    approach: "How the team approached the problem, from discovery to delivery.",
    features: ["Key feature one", "Key feature two", "Key feature three"],
    technology: ["Technology A", "Technology B"],
    outcome: "An honest description of the result. Add figures only when they are verified.",
  },
];

export const industries = [
  {
    title: "Education",
    text: "Digital learning platforms, management systems, and interactive experiences.",
  },
  {
    title: "Healthcare",
    text: "Secure and user-focused digital tools and platforms.",
  },
  {
    title: "Retail & E-commerce",
    text: "Online experiences and systems that support modern commerce.",
  },
  {
    title: "Professional Services",
    text: "Platforms and tools that improve operations and client experiences.",
  },
  {
    title: "Startups & SaaS",
    text: "Product development support from early ideas to scalable platforms.",
  },
  {
    title: "Enterprise & Operations",
    text: "Custom systems designed around complex workflows.",
  },
];

export const insightCategories = [
  "Technology",
  "Product Development",
  "Business & Digital Strategy",
  "AI & Automation",
  "Engineering",
];

export type Article = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  sections: { heading: string; body: string }[];
};

export const articles: Article[] = [
  {
    slug: "when-your-business-needs-custom-software",
    title: "How to Know When Your Business Needs Custom Software",
    category: "Business & Digital Strategy",
    excerpt:
      "Ready-made tools are the right choice for many teams. Here are the signs that your business has outgrown them.",
    sections: [
      {
        heading: "Start with the friction",
        body: "Look at where your team loses time. If people copy information between tools, keep parallel spreadsheets, or follow workarounds that only a few colleagues understand, your software no longer matches your process.",
      },
      {
        heading: "Compare the real costs",
        body: "Subscriptions look inexpensive until you add the hours spent working around their limits. Custom software costs more at the start, so it should be judged against the full cost of staying as you are.",
      },
      {
        heading: "Begin with one workflow",
        body: "You do not need to replace everything. Choose the single workflow that causes the most trouble, solve it well, and let the results guide the next decision.",
      },
    ],
  },
  {
    slug: "from-idea-to-product",
    title: "From Idea to Product: What Happens Before Development Starts",
    category: "Product Development",
    excerpt:
      "The most valuable work on a digital product often happens before anyone writes code.",
    sections: [
      {
        heading: "Define the problem clearly",
        body: "A product idea is usually a solution in search of a clear problem statement. Writing down who has the problem, how they handle it today, and what would count as success gives every later decision a reference point.",
      },
      {
        heading: "Decide what the first version is",
        body: "A first release should prove the core idea with the smallest useful set of features. Everything else goes onto a roadmap, where it can be reordered as you learn from real users.",
      },
      {
        heading: "Agree on how you will work",
        body: "Before development begins, agree on priorities, communication, and how changes are handled. Projects rarely fail because of code alone. They fail when expectations drift apart.",
      },
    ],
  },
  {
    slug: "technology-that-grows-with-your-business",
    title: "Building Technology That Can Grow With Your Business",
    category: "Engineering",
    excerpt:
      "Planning for growth does not mean building everything on day one. It means keeping your options open.",
    sections: [
      {
        heading: "Scalability is mostly about change",
        body: "For most businesses, the real test is how easily the system accepts new features, new integrations, and new team members. Clear structure and good documentation matter more than exotic infrastructure.",
      },
      {
        heading: "Avoid building too early",
        body: "Solving problems you do not have yet adds cost and complexity. A better approach is to build simply, measure how the system behaves, and strengthen the parts that come under pressure.",
      },
      {
        heading: "Make maintenance part of the plan",
        body: "Software needs regular care: updates, security fixes, and small improvements. Budgeting for this from the start keeps the product healthy and avoids expensive rebuilds.",
      },
    ],
  },
  {
    slug: "before-adding-ai",
    title: "What Businesses Should Consider Before Adding AI",
    category: "AI & Automation",
    excerpt:
      "AI can remove real work from a team, but only when it is aimed at the right task.",
    sections: [
      {
        heading: "Choose the task, then the tool",
        body: "Begin with a specific, repetitive task that costs your team time. If you cannot name the task and how you would measure improvement, it is too early to choose an AI tool.",
      },
      {
        heading: "Understand your data",
        body: "AI features depend on the information you give them. Know what data is involved, who is allowed to see it, and where it is processed before you connect any service.",
      },
      {
        heading: "Keep people in the loop",
        body: "AI output should be reviewed where mistakes would be costly. Design the workflow so a person can check, correct, and take responsibility for the result.",
      },
    ],
  },
  {
    slug: "clear-product-requirements",
    title: "Why Clear Product Requirements Save Time and Cost",
    category: "Product Development",
    excerpt:
      "Vague requirements are among the most common reasons projects run late. A little clarity early prevents a great deal of rework.",
    sections: [
      {
        heading: "Unclear requirements become rework",
        body: "When a feature is described loosely, each person imagines something different. The gap only becomes visible after the work is done, which is the most expensive moment to find it.",
      },
      {
        heading: "Describe outcomes, not screens",
        body: "Good requirements explain what a user needs to achieve and why. That leaves room for the design and engineering team to find the simplest way to deliver it.",
      },
      {
        heading: "Keep requirements alive",
        body: "Requirements are not a document you write once. Review them as you learn, record what changed and why, and make sure everyone works from the same version.",
      },
    ],
  },
];

// Add real openings here. When the list is empty, the careers page
// shows the open application message instead.
export type Job = {
  title: string;
  department: string;
  type: string;
  location: string;
  description: string;
  requirements: string[];
};

export const jobs: Job[] = [];

// Add verified contact details only. Empty values are hidden on the site.
export const contact = {
  email: "",
  phone: "",
  address: "",
  linkedin: "",
};

export const legal = {
  "privacy-policy": {
    title: "Privacy Policy",
    sections: [
      {
        heading: "Information we collect",
        body: "When you contact us through this website, we collect the details you choose to provide, such as your name, company, email address, phone number, and information about your project.",
      },
      {
        heading: "How we use your information",
        body: "Your information is only used to respond to your inquiry and to communicate with you about the services you asked about.",
      },
      {
        heading: "Sharing and retention",
        body: "We do not sell your personal information. We keep inquiry details only for as long as they are needed for the purpose you shared them.",
      },
      {
        heading: "Your choices",
        body: "You may ask us to access, correct, or delete the personal information we hold about you by contacting us through the contact page.",
      },
    ],
  },
  "terms-and-conditions": {
    title: "Terms & Conditions",
    sections: [
      {
        heading: "Use of this website",
        body: "This website provides general information about Brightstack Technologies Ltd and its services. By using it, you agree to use it lawfully and not to interfere with its operation.",
      },
      {
        heading: "Content",
        body: "The content on this website is provided for general information. It does not form a contract or an offer. Services are governed by a separate written agreement.",
      },
      {
        heading: "Intellectual property",
        body: "Unless stated otherwise, the text, design, and graphics on this website belong to Brightstack Technologies Ltd and may not be reused without permission.",
      },
      {
        heading: "Changes",
        body: "We may update these terms from time to time. The current version will always be available on this page.",
      },
    ],
  },
  "cookie-policy": {
    title: "Cookie Policy",
    sections: [
      {
        heading: "What cookies are",
        body: "Cookies are small files stored by your browser that help websites remember information between visits.",
      },
      {
        heading: "How this website uses them",
        body: "This website stores your theme preference in your browser so the site appears the way you chose on your next visit. List any analytics or third-party cookies here if they are added.",
      },
      {
        heading: "Managing cookies",
        body: "You can clear or block cookies and stored preferences at any time through your browser settings.",
      },
    ],
  },
} as const;

export type LegalSlug = keyof typeof legal;
