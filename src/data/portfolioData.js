export const personalInfo = {
  name: "Nandana Vinod K",
  title: "Manual Software Tester | QA Engineer | Computer Science Graduate",
  tagline: "Passionate about software quality, identifying defects, validating user experiences, and building reliable applications through structured testing.",
  status: "Open to QA Opportunities",
  email: "nandhanavinodnandhu@gmail.com",
  linkedin: "https://linkedin.com/in/nandana-vinod-k",
  phone: "+91 8304864521",
  location: "Kerala, India",
  educationDegree: "B.Tech in Computer Science Engineering (2022–2026)",
};

export const aboutData = {
  summary:
    "I am a Computer Science Engineering graduate with a strong passion for software testing and quality assurance. Having developed and validated web and machine learning applications, I approach software with a critical, investigative mindset—focusing on early defect identification, comprehensive test coverage, and seamless user experience.",
  highlights: [
    {
      title: "Manual & Functional Testing",
      desc: "Skilled in end-to-end black-box testing, UI validation, boundary value analysis, and equivalence partitioning across diverse application modules.",
    },
    {
      title: "Regression & Test Case Design",
      desc: "Experienced in designing exhaustive test scenarios, positive/negative test cases, and conducting structured regression testing after code updates.",
    },
    {
      title: "Defect Identification & Reporting",
      desc: "Adept at isolating root causes, documenting step-by-step reproduction flows, and assigning appropriate severity and priority metrics.",
    },
    {
      title: "SDLC, STLC & Agile Methodologies",
      desc: "Thorough understanding of sprint cycles, sprint planning, standups, sprint reviews, and the complete Software Testing Life Cycle phases.",
    },
    {
      title: "REST APIs, Databases & Workflows",
      desc: "Hands-on foundation in HTTP response validation, schema checks, and relational query verification to validate end-to-end data integrity.",
    },
  ],
  coreTraits: [
    "Meticulous Eye for Edge Cases",
    "Analytical & Root-Cause Thinking",
    "Agile Team Collaboration",
    "User-Centric Quality Advocate",
    "Continuous QA Learning",
  ],
  developerAdvantage:
    "Having completed a MERN stack internship, I understand the underlying architecture—from React component states to Express routing and MongoDB schemas. This technical depth allows me to communicate effectively with developers and anticipate where bugs are most likely to occur.",
};

export const skillCategories = [
  {
    category: "Software Testing",
    iconName: "ShieldCheck",
    color: "from-blue-500 to-cyan-400",
    skills: [
      { name: "Manual Testing", level: "Core Expertise" },
      { name: "Functional Testing", level: "Core Expertise" },
      { name: "Regression Testing", level: "Core Expertise" },
      { name: "Test Case Design", level: "Core Expertise" },
      { name: "Test Execution", level: "Core Expertise" },
      { name: "Defect Identification", level: "Core Expertise" },
      { name: "Bug Reporting", level: "Core Expertise" },
    ],
  },
  {
    category: "Testing Fundamentals",
    iconName: "FileCheck",
    color: "from-purple-500 to-indigo-500",
    skills: [
      { name: "SDLC", level: "Methodology" },
      { name: "STLC", level: "Methodology" },
      { name: "Agile Methodology", level: "Methodology" },
      { name: "Requirement Analysis", level: "Methodology" },
    ],
  },
  {
    category: "Programming & Database",
    iconName: "Database",
    color: "from-emerald-500 to-teal-400",
    skills: [
      { name: "Python", level: "Scripting / Data" },
      { name: "C", level: "Fundamentals" },
      { name: "SQL", level: "Queries & Verification" },
      { name: "MySQL", level: "Relational DB" },
    ],
  },
  {
    category: "Web & API Technologies",
    iconName: "Globe",
    color: "from-cyan-500 to-blue-600",
    skills: [
      { name: "REST APIs", level: "Validation & Testing" },
      { name: "React", level: "Component Flow" },
      { name: "Node.js", level: "Backend Logic" },
      { name: "Express.js", level: "API Routing" },
      { name: "MongoDB", level: "NoSQL DB" },
    ],
  },
  {
    category: "Tools & Data",
    iconName: "Wrench",
    color: "from-amber-500 to-rose-500",
    skills: [
      { name: "GitHub", level: "Version Control" },
      { name: "Excel", level: "Test Artifacts" },
      { name: "Power BI", level: "Data Insights" },
      { name: "Pandas", level: "Data Processing" },
      { name: "NumPy", level: "Computation" },
      { name: "Matplotlib", level: "Visualizations" },
    ],
  },
];

export const additionalVerifiableSkill = {
  title: "Selenium with Java",
  badge: "Demonstrable & Verifiable Additional Skill",
  description:
    "Knowledge of automated web testing principles using the Selenium WebDriver API with Java, including locator strategies (XPath, CSS selectors), page synchronization, and test assertion basics.",
  status: "Available for live technical demonstration during interview rounds",
};

export const experienceData = [
  {
    role: "MERN Stack Development Intern",
    company: "Hexinox",
    location: "Kerala, India",
    period: "January 2025",
    type: "Internship",
    responsibilities: [
      "Worked on full-stack web applications using MongoDB, Express.js, React, and Node.js.",
      "Gained practical experience in application workflows, front-to-back data flow, and input validation.",
      "Developed and integrated RESTful APIs with dynamic front-end components, verifying HTTP status codes and payloads.",
      "Worked with database queries and analyzed application behavior under varying data conditions.",
      "Collaborated with a six-member Agile team using GitHub for version control, code reviews, and CI/CD workflows.",
    ],
    qaTakeaway:
      "This internship provided firsthand insight into common developer pitfalls, asynchronous state glitches, and edge-case handling—directly strengthening my ability to conduct thorough manual testing and diagnose defect root causes.",
  },
];

export const projectsData = [
  {
    id: "plant-disease-detection",
    title: "Plant Disease Detection App",
    date: "April 2024",
    category: "Machine Learning & Mobile UX",
    description:
      "Developed an end-to-end mobile application for automated plant disease detection using deep machine learning and image processing techniques. Integrated smartphone camera functionality to scan plant leaves and display verified treatment suggestions.",
    highlights: [
      "Integrated smartphone camera pipeline to capture leaf specimens under varying lighting conditions.",
      "Built an intuitive user workflow providing clear diagnostic results and actionable remedy recommendations.",
      "Validated image input boundary limits, edge-case camera permissions, and real-time inference latency.",
    ],
    tags: ["Python", "Machine Learning", "Image Processing", "Mobile Workflow", "Validation"],
    githubAvailable: true,
    githubUrl: "https://github.com/nandana-vinod-k",
    demoAvailable: false,
    demoNote: "Academic project repository and architecture walkthrough available on request",
  },
  {
    id: "ai-choreography",
    title: "AI-Powered Choreography System",
    date: "March 2026",
    category: "AI & Audio Signal Analysis",
    description:
      "Developed an innovative AI-powered choreography platform based on music tempo, rhythm, and beat analysis. Implemented beat detection algorithms and dance-step recommendations using machine learning techniques while systematically evaluating application behavior.",
    highlights: [
      "Processed polyphonic audio files to detect beats per minute (BPM) and rhythmic inflection points.",
      "Designed step-mapping algorithms that correlate choreography sequences with acoustic intensity.",
      "Conducted extensive functional verification on audio playback synchronization, file format edge cases, and UI responsiveness.",
    ],
    tags: ["Python", "Machine Learning", "Beat Detection", "Audio Processing", "Quality Evaluation"],
    githubAvailable: true,
    githubUrl: "https://github.com/nandana-vinod-k",
    demoAvailable: false,
    demoNote: "Research demonstration and evaluation data available on request",
  },
];

export const qaTestingApproach = {
  pillars: [
    {
      id: "test-case-design",
      title: "Test Case Design",
      iconName: "FileSpreadsheet",
      tag: "Coverage & Accuracy",
      description:
        "Preparing exhaustive test scenarios and structured test cases from business requirements and user stories. Incorporates boundary value analysis, equivalence partitioning, positive validation, and intentional negative testing to catch defects early.",
      points: [
        "Systematic boundary value analysis (min, max, invalid out-of-range).",
        "Clear precondition, test step, test data, and expected result definitions.",
        "Equivalence class partitioning to optimize test suite efficiency.",
      ],
    },
    {
      id: "functional-testing",
      title: "Functional Testing",
      iconName: "CheckCircle2",
      tag: "Verification",
      description:
        "Validating that every application feature behaves strictly according to specifications. Thoroughly testing form inputs, navigation flows, CTA states, error messages, session timeouts, and critical business logic paths.",
      points: [
        "Form field validation (required fields, regex, character limits, injections).",
        "Cross-browser and responsive viewport compatibility checks.",
        "End-to-end user journey validation from login to task completion.",
      ],
    },
    {
      id: "bug-reporting",
      title: "Bug Reporting",
      iconName: "AlertTriangle",
      tag: "Defect Life Cycle",
      description:
        "Documenting high-clarity defect logs that developers can reproduce immediately without ambiguity. Structured with descriptive titles, precise reproduction steps, severity vs. priority ratings, expected vs. actual outcomes, and environment details.",
      points: [
        "Unambiguous step-by-step reproduction workflows.",
        "Accurate classification of Severity (Impact) and Priority (Urgency).",
        "Traceability back to specific requirement IDs and test cases.",
      ],
    },
    {
      id: "regression-testing",
      title: "Regression Testing",
      iconName: "RefreshCw",
      tag: "Stability",
      description:
        "Retesting existing features after new code deployments, bug fixes, or framework upgrades to guarantee that unmodified modules remain stable and defect-free throughout continuous iterations.",
      points: [
        "Impact analysis to determine affected components before testing.",
        "Executing core sanity and smoke test suites on newly deployed builds.",
        "Detecting unintended side-effects and performance degradations.",
      ],
    },
  ],
  sampleBugReport: {
    bugId: "BUG-2025-042",
    title: "Checkout form allows submission with invalid email format when spaces are trailing",
    module: "User Checkout & Payment Flow",
    environment: "Chrome 122.0.6261 (Windows 11) / Staging Build v1.4.2",
    severity: "High",
    priority: "High",
    status: "Open / Under Investigation",
    reportedBy: "Nandana Vinod K (QA)",
    preconditions: "User is authenticated and has at least one item in the shopping cart.",
    stepsToReproduce: [
      "1. Navigate to the Checkout page from the Cart summary.",
      "2. In the 'Billing Email' field, enter 'user@example.com   ' (with trailing space characters).",
      "3. Complete remaining mandatory shipping fields with valid data.",
      "4. Click on the 'Proceed to Payment' button.",
    ],
    expectedResult:
      "The input field should either auto-trim trailing whitespace or trigger an inline validation error: 'Please enter a valid email address without spaces'. Submission should be blocked.",
    actualResult:
      "The system accepts the input, triggers an unhandled 500 Internal Server Error from the payment gateway webhook, and displays a blank payment modal.",
    impactAnalysis:
      "Prevents customers from completing purchases; potential loss of checkout revenue and poor user trust.",
  },
  sampleTestCases: [
    {
      id: "TC-AUTH-001",
      scenario: "Verify successful user login with valid credentials",
      category: "Authentication",
      steps: "1. Navigate to /login\n2. Enter registered email and valid password\n3. Click 'Sign In'",
      expectedResult: "User successfully authenticated; redirected to /dashboard with active JWT session cookie.",
      actualResult: "User redirected to /dashboard with correct session state.",
      status: "Pass",
    },
    {
      id: "TC-AUTH-002",
      scenario: "Verify login attempt with unregistered email address",
      category: "Authentication",
      steps: "1. Navigate to /login\n2. Enter 'unregistered@test.org'\n3. Enter password\n4. Click 'Sign In'",
      expectedResult: "Inline error banner displayed: 'Invalid email or password'. Password field cleared.",
      actualResult: "Error message displayed appropriately; form remains secure.",
      status: "Pass",
    },
    {
      id: "TC-FORM-003",
      scenario: "Verify boundary validation on password length (Min: 8, Max: 32)",
      category: "Forms & Fields",
      steps: "1. Navigate to Registration page\n2. Input 7-character password\n3. Attempt form submission",
      expectedResult: "Validation message: 'Password must be between 8 and 32 characters'. Submit disabled.",
      actualResult: "Submit button remains disabled and helper error text shows in red.",
      status: "Pass",
    },
    {
      id: "TC-NAV-004",
      scenario: "Verify responsive navigation drawer behavior on viewport < 768px",
      category: "UI & Navigation",
      steps: "1. Resize viewport to 375x667px (Mobile)\n2. Click hamburger menu icon\n3. Click outside overlay",
      expectedResult: "Drawer slides in smoothly; backdrop blurs; clicking outside closes drawer smoothly.",
      actualResult: "Drawer toggles smoothly with proper focus trapping and backdrop dismissal.",
      status: "Pass",
    },
    {
      id: "TC-API-005",
      scenario: "Verify API response code on duplicate user registration payload",
      category: "API & Backend",
      steps: "1. Send POST /api/v1/register with already existing email payload\n2. Inspect response",
      expectedResult: "HTTP 409 Conflict returned with JSON body `{ error: 'Email already exists' }`.",
      actualResult: "HTTP 409 returned with structured error object.",
      status: "Pass",
    },
    {
      id: "TC-REG-006",
      scenario: "Verify search filter persists when user paginates to page 2",
      category: "Regression",
      steps: "1. Apply filter 'Category: QA Tools'\n2. Navigate from Page 1 to Page 2\n3. Observe list items",
      expectedResult: "Page 2 shows only items matching 'QA Tools'; filter tags remain active in URL query.",
      actualResult: "Filter was reset to default on page change (Defect logged as BUG-2025-045).",
      status: "Fail",
    },
  ],
};

export const educationData = [
  {
    degree: "B.Tech in Computer Science Engineering",
    institution: "Ilahia College of Engineering and Technology",
    period: "2022 – 2026",
    grade: "CGPA: 6.9 / 10",
    description:
      "Core coursework in Software Engineering, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks, and Web Application Architecture.",
    highlights: [
      "Specialized projects in Machine Learning and Full-Stack Application Testing",
      "Active participant in technical symposiums and coding workshops",
    ],
  },
  {
    degree: "Higher Secondary Education (Class XII)",
    institution: "St. Ignatius School, Kanjiramattom",
    period: "Completed 2022",
    grade: "Score: 80%",
    description:
      "Specialized in Science stream with focus on Computer Science, Mathematics, Physics, and Chemistry.",
    highlights: ["Strong foundation in computational logic, mathematics, and algorithmic problem-solving."],
  },
  {
    degree: "Secondary Education (Class X)",
    institution: "S.N.D.P HSS, Udayamperoor",
    period: "Completed 2020",
    grade: "Score: 80%",
    description: "General academic curriculum with academic distinction and extracurricular participation.",
    highlights: ["Demonstrated consistent academic excellence and disciplined analytical mindset."],
  },
];
