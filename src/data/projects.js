const profileBase = 'https://github.com/kuuhaku3614';

export const projects = [
  {
    id: 'aquabill',
    title: 'AquaBill — Water Billing Management System',
    category: 'Desktop Billing System',
    year: '2026',
    status: 'Featured',
    role: 'Frontend / Desktop App Developer',
    stack: ['React', 'TypeScript', 'Vite', 'Tauri', 'CSS', 'jsPDF', 'QR'],
    image: `${import.meta.env.BASE_URL}project-placeholder.svg`,
    summary:
      'A desktop water billing management system focused on consumer records, billing workflows, payment tracking, reporting, PDF generation, and QR-assisted features.',
    problem:
      'Water billing teams need a faster way to manage consumers, readings, bills, payments, and reports in one organized desktop workflow.',
    solution:
      'Designed a Tauri-based desktop interface with clear modules for consumers, billing, payments, reports, receipts, and future meter-reader sync support.',
    highlights: [
      'Consumer management with account status, contact details, and meter information.',
      'Billing workflow for consumption, due dates, payment status, and generated bill records.',
      'Payment and receipt screens designed for full or partial payment tracking.',
      'PDF generation and QR feature planning for practical office and field workflows.',
    ],
    impact:
      'Shows ability to plan real-world business systems, design admin dashboards, and build maintainable React desktop interfaces.',
    github: profileBase,
    demo: '',
  },
  {
    id: 'gym-management',
    title: 'Gym Membership Management System',
    category: 'Membership Platform',
    year: '2025',
    status: 'Academic Project',
    role: 'Lead Developer',
    stack: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'HTML', 'CSS'],
    image: `${import.meta.env.BASE_URL}project-placeholder.svg`,
    summary:
      'A membership management system for handling member registration, attendance, payments, dashboard monitoring, and QR check-in planning.',
    problem:
      'Gym staff need a practical way to track members, payments, membership status, and attendance without relying only on manual records.',
    solution:
      'Built a PHP and MySQL system with membership records, payment tracking, attendance modules, dashboards, and planned QR-based check-in support.',
    highlights: [
      'Member registration and profile management for active and inactive members.',
      'Payment tracking for membership plans and transaction history.',
      'Attendance monitoring and dashboard-ready statistics.',
      'Planned QR check-in flow to speed up member entry validation.',
    ],
    impact:
      'Demonstrates CRUD development, database design, dashboard thinking, and software engineering teamwork.',
    github: profileBase,
    demo: '',
  },
  {
    id: 'social-welfare',
    title: 'Social Welfare Program Management System',
    category: 'Database System',
    year: '2024',
    status: 'Academic Project',
    role: 'Full-stack Developer',
    stack: ['PHP', 'MySQL', 'Bootstrap', 'Chart.js', 'JavaScript'],
    image: `${import.meta.env.BASE_URL}project-placeholder.svg`,
    summary:
      'A database-driven system for managing applicants, beneficiary records, program participation, requirements, reports, and analytics.',
    problem:
      'Program staff need cleaner tracking of applicants, requirements, beneficiary participation, and report summaries.',
    solution:
      'Created a structured PHP/MySQL application with applicant records, program tracking, requirement management, and chart-based reporting.',
    highlights: [
      'Applicant and beneficiary records organized through relational database tables.',
      'Program participation and requirement tracking workflows.',
      'Report sections with charts for clearer administrative summaries.',
      'Searchable and organized records for faster staff navigation.',
    ],
    impact:
      'Highlights database normalization, admin CRUD interfaces, reporting, and practical public-service workflow design.',
    github: profileBase,
    demo: '',
  },
  {
    id: 'credential-verification',
    title: 'Blockchain Credential Verification System',
    category: 'Credential Verification',
    year: '2026',
    status: 'Thesis / Research Project',
    role: 'Assistant Developer',
    stack: ['Polygon', 'IPFS', 'MetaMask', 'Blockchain', 'Off-chain Storage'],
    image: `${import.meta.env.BASE_URL}project-placeholder.svg`,
    summary:
      'A credential verification concept using blockchain validation, off-chain storage, wallet interaction, and tamper-resistant record checking.',
    problem:
      'Credential records can be difficult to validate quickly when institutions need proof that a document is authentic and unchanged.',
    solution:
      'Used blockchain record validation with off-chain storage to support verification accuracy while keeping heavy document files outside the chain.',
    highlights: [
      'Blockchain validation flow for credential authenticity checks.',
      'IPFS/off-chain storage approach for files and supporting metadata.',
      'MetaMask interaction concept for wallet-based verification workflows.',
      'Research-oriented testing around validation accuracy, latency, and gas usage.',
    ],
    impact:
      'Shows willingness to explore emerging technologies and understand tradeoffs between usability, cost, and technical architecture.',
    github: profileBase,
    demo: '',
  },
];
