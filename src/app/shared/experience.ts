export const experiences = [
  {
    company: 'BC Government',
    division:
      'Ministry of Water, Land and Resource Stewardship – Natural Resource Information and Digital Services',
    title: 'Deployment Automation & Modernization',
    date: 'Aug 2019 – Current',
    summary:
      'Lead modernization of deployment, observability, and automation platforms across the division. Designed solutions to improve scalability, security, and developer experience while enabling continuous integration and delivery of applications.',
    projects: [
      {
        name: 'Modernization (OneTeam & OSCAR)',
        date: 'July 2021 – Current',
        descriptions: [
          'Delivered a centralized logging, metrics, and alerting platform using AWS OpenSearch to help teams improve scalability, accelerate debugging, and enhance reliability.',
          'Rebuilt the data ingestion pipeline for sustainability and streamlined data onboarding.',
          'Used OpenSearch to capture deployment metrics for proactive response to deployment issues.',
          'Delivered a secrets management solution using HashiCorp Vault to enable workload automation and enhance application security.',
          'Collaborated with internal and external stakeholders to assess secrets usage, prioritize initiatives, and develop a product roadmap.',
          'Created NR Broker – a configuration management database – to automate and audit deployment requests and related development activities such as granting access to code and secrets.',
          'Developed a CI/CD workflow pattern using GitHub Actions, Jenkins, Podman, NR Broker, and HashiCorp Vault for secure and reliable delivery across environments.',
          'Refactored Red Hat Ansible collections for usability and added reporting of deployment properties to NR Broker.',
          'Supported agile development of deployment pipelines for Vault (ArgoCD, OpenShift), NR Broker (GitHub, ArgoCD, OpenShift), and OpenSearch (GitHub, AWS).',
          'Acted as a subject matter expert on continuous integration and continuous delivery for internal teams.',
          'Prototyped a CMDB REST API using OrientDB, Node.js, and Angular to demonstrate automation of software and infrastructure documentation; informed the design of NR Broker.',
        ],
      },
      {
        name: 'Application Delivery',
        date: 'Aug 2019 – July 2021',
        descriptions: [
          'Delivered operational DevOps support for software deployments to on-premise data centers.',
          'Oversaw deployment request reviews, assigned and prioritized work across multiple teams, and ensured successful verification of deployments.',
          'Investigated and assessed cloud-native platforms and tools such as OpenShift, Vault, Consul, and OpenFaaS to identify opportunities for deployment and automation improvements.',
        ],
      },
    ],
  },
  {
    company: 'Uncharted Software',
    title: 'Software Engineer',
    date: 'Sep 2018 – Dec 2018',
    summary:
      'Contributed to front-end visualization development for social media analytics platforms using Vue.js and D3 within an agile environment.',
    projects: [
      {
        name: 'Social Media Visualization',
        descriptions: [
          'Worked on a single-page application (SPA) for querying and visualizing social media activity.',
          'Implemented new sections, D3 visualizations, and enhancements to the open source library veldt-js.',
          'Refactored components, removed duplication, and added unit tests to improve maintainability.',
          'Developed a tagging front-end with a designer and contributed to REST API design.',
          'Ensured a consistent user experience and documented UI components.',
        ],
      },
    ],
  },
  {
    company: 'Priologic Software',
    title: 'Software Engineer',
    date: 'Mar 2014 – Jul 2018',
    summary:
      'Delivered multiple large-scale SPA and platform development projects for enterprise clients such as Cisco and Veritas, focusing on front-end architecture, build optimization, and CI/CD integration.',
    projects: [
      {
        name: 'Veritas Stack Platform',
        descriptions: [
          'Built a SPA platform for managing company data warehouses using Angular, Docker, and Kubernetes.',
          'Developed reusable UI components, REST APIs, and an RBAC system model for production.',
          'Integrated Socket.IO for real-time events and refined build tooling for performance.',
          'Promoted agile, internationalization (i18n), and code quality best practices.',
        ],
      },
      {
        name: 'Veritas Application Portal',
        descriptions: [
          'Delivered multiple releases of an application login and account management portal.',
          'Refactored legacy AngularJS codebase for improved modularity, performance, and i18n support.',
          'Implemented test-driven continuous integration using Jasmine and Protractor.',
        ],
      },
      {
        name: 'Cisco Global Contacts Website',
        descriptions: [
          'Reviewed and refactored existing Python-based code using Angular.',
          'Mentored the team to improve release quality and interim delivery processes.',
        ],
      },
      {
        name: 'Cisco dCloud (Router Demonstration Portal)',
        descriptions: [
          'Developed a SASS-based Bootstrap component library aligning with Cisco’s corporate branding.',
          'Migrated AngularJS 1.x application and refined UX for responsiveness and consistency.',
        ],
      },
      {
        name: 'Cisco eStore',
        descriptions: [
          'Enhanced Cisco’s internal store for software, hardware, and services with the UK team.',
          'Earned Gold certification in continuous delivery.',
          'Performed major platform updates and complex merges, integrated analytics, and improved mobile front-ends (iOS Swift and React).',
        ],
      },
      {
        name: 'Cisco Canada Timesheet',
        date: 'Mar 2014 – Nov 2014',
        descriptions: [
          'Led redevelopment of a Python web app tracking engineering hours for SR&ED reporting.',
          'Integrated employee data from Oracle warehouse and rebuilt UI using AngularJS.',
          'Improved productivity through flexible layouts and consistent Bootstrap-based design.',
        ],
      },
    ],
  },
  {
    company: 'FTS Environmental',
    title: 'Software Engineer',
    date: 'Dec 2012 – Jan 2014',
    summary:
      'Contributed to front-end and back-end development of a web portal managing environmental sensor data, improving scalability and responsiveness.',
    projects: [
      {
        name: 'Remote Data Logger Web Portal',
        descriptions: [
          'Refactored Backbone.js front-end using MVC principles to improve performance.',
          'Optimized data retrieval and scaling within a GlassFish and PostgreSQL SOA environment.',
          'Migrated build system to Maven to align with test-driven development practices.',
        ],
      },
    ],
  },
  {
    company: 'Priologic Software',
    title: 'Software Engineer',
    date: 'Feb 2012 – Oct 2012',
    summary:
      'Delivered front-end and back-end enhancements to Cisco’s WebEx Social portal using Agile development methodologies.',
    projects: [
      {
        name: 'Cisco WebEx Social (Employee Collaboration Portal)',
        descriptions: [
          'Developed and maintained portlets for major WebEx Social upgrades using Java, SQL, and JavaScript.',
          'Resolved defects and added new features to the Vision, Strategy, Execution, and Metrics (VSEM) portlet.',
          'Redesigned the Integrated Calendar portlet database and backend using design patterns for scalability.',
          'Mentored external developers to improve Java and SQL coding standards.',
        ],
      },
    ],
  },
  {
    company: 'ETraffic Solutions',
    title: 'Senior Programmer',
    date: 'Aug 2007 – Nov 2011',
    summary:
      'Developed educational data analysis and reporting applications with a focus on performance, reliability, and database integration.',
    projects: [
      {
        name: 'SP Snapshot',
        descriptions: [
          'Enhanced a student performance analytics tool for U.S. school districts, improving speed and stability.',
          'Performed database administration, troubleshooting, and data quality improvements.',
          'Created a Java-based import tool to automate data ingestion for new markets.',
        ],
      },
    ],
  },
  {
    company: 'CSI (OKI Software and OKI Access Technologies)',
    title: 'Engineering Programmer',
    date: 'Aug 2006 – 2007',
    summary:
      'Developed and validated mobile communication library prototypes for embedded systems and supported hardware integration with international partners.',
    projects: [
      {
        name: 'PTT (Push to Talk) Library',
        descriptions: [
          'Developed Presence and Push-to-Talk prototypes using Linux and ALP (embedded Linux).',
          'Validated system behavior against SoftBank specifications via simulation.',
          'Assisted Samsung engineers with prototype cellphone integration.',
        ],
      },
    ],
  },
  {
    company: 'JET Programme',
    title: 'Assistant English Teacher',
    date: 'Aug 2003 – 2006',
    summary:
      'Taught English and delivered cultural presentations in Kure City, Hiroshima Prefecture.',
    projects: [
      {
        name: 'Education & Cultural Exchange',
        descriptions: [
          'Created and delivered lesson materials about Canadian culture.',
          'Supported cross-cultural communication and education initiatives.',
        ],
      },
    ],
  },
];
