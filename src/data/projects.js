const projects = [

  {
    id: 1,

    title: "Enterprise Java Application Cloud Migration & Modernization",

    technologies:
      "Java 17, Azure, Maven, Azure DevOps, SQL Server",

    description:
      "Migrated multiple enterprise Java applications from on-premises infrastructure to Microsoft Azure Cloud, modernizing the applications by upgrading Java from 8 to 17. Implemented CI/CD pipelines, Microsoft Entra ID-based SSO, and Azure Blob Storage for secure and scalable cloud integration. Improved application performance and database connection management using HikariCP, and enhanced centralized logging with custom Log4j2 appenders.",
    
  },

  {
    id: 2,

    title: "TransConnect - JioBP",

    technologies:
      "Spring Boot, Kafka, OracleDB, Docker",

    description:
      "Trans-Connect is a digital enterprise platform developed for Jio-BP to modernize and streamline business operations. The legacy PL/SQL monolithic application was re-engineered into a scalable microservices-based architecture. The platform supports financial management, contract management, and carrier/customer onboarding. Financial modules include wallet creation, payment processing, gateway integration, and transaction reconciliation. Contract management handles carrier agreements, payment terms, and lifecycle tracking. The onboarding module supports automated validation and KYC checks. Kafka is used for asynchronous communication between services. Resilience4j provides fault tolerance through circuit breaker mechanisms. Docker is used for containerized application deployment. The platform provides scalable, maintainable, and reliable integration across multiple business services.",

  },

  {
    id: 3,

    title: "ReachMobile",

    technologies:
      "Spring Boot, AWS, MySQL",

    description:
      "ReachMobile is a telecom domain application designed to manage end-to-end customer operations including billing, payments, shipments, and invoicing. The application follows a microservices architecture and is deployed on AWS for scalability and high availability. The Payment Service handles customer payments and external payment integrations, while the Billing Service manages bill generation and reconciliation. The Shipment Service supports shipment tracking and logistics operations. Invoice data is stored and retrieved using AWS S3, with application data persisted in MySQL. AWS Lambda and Step Functions are used for serverless processing and workflow orchestration. Jira and Atlassian tools are used for sprint planning and issue tracking, along with production support for resolving application and HubSpot-related issues.",

  },
  {
  id: 4,

  title: "Intermediate and Long-Term Care (iLTC)",

  technologies:
    "Java 8, Spring Boot, REST APIs, Microservices, MySQL, Tomcat, JUnit, Mockito, Git",

  description:
    "iLTC is a healthcare domain application that enables care providers to efficiently interface with government referral systems. The platform provides integrated tools to support the operational, financial, and clinical management of residents. It serves nursing homes, home care providers, and retirement villages by streamlining referral and care-related processes. The application follows a microservices architecture with REST APIs developed using Spring Boot. MySQL is used for data persistence, while Apache Tomcat supports application deployment. JUnit and Mockito are used for unit testing and ensuring application reliability. Git is used for source code management and collaboration."
}

];

export default projects;