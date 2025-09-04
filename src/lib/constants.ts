import type { LucideIcon } from 'lucide-react';
import {
  BadgeCheck,
  FileCode2,
  FileX2,
  Orbit,
  ReceiptText,
  BriefcaseMedical,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  TrendingUp,
  Clock,
  Stethoscope,
  Building,
  User,
  Users,
  Network,
  HeartPulse,
  Bone,
  Baby,
  BrainCircuit,
  Video,
  ShieldCheck,
  DollarSign,
  FileScan,
  Repeat,
  BarChart,
  ChevronRight,
  Database,
  XCircle,
  TrendingDown,
  Scale,
} from 'lucide-react';

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/why-us', label: 'Why Choose Us' },
  { href: '/industries', label: 'Industries' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact Us' },
];

export const NAV_MENU = [
    {
        label: 'Solutions',
        children: [
            { href: '/services', label: 'All Services' },
            { href: '/industries', label: 'Industries' },
        ]
    },
    {
        label: 'Why Osham',
        children: [
            { href: '/why-us', label: 'Why Choose Us' },
            { href: '/about', label: 'About Us' },
            { href: '/testimonials', label: 'Testimonials' },
        ]
    },
    {
        label: 'Resources',
        children: [
            { href: '/blog', label: 'Blog' }
        ]
    },
    { href: '/contact', label: 'Contact' },
]

export const SOCIAL_LINKS = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Instagram', href: '#', icon: Instagram },
];

export const SERVICES: { 
  icon: LucideIcon; 
  title: string; 
  description: string; 
  features: string[];
  imageUrl: string;
  hint: string;
}[] = [
  {
    icon: ReceiptText,
    title: 'Medical Billing',
    description: 'Our core service involves end-to-end management of the billing cycle. From charge entry and submission to payment posting and follow-up, we handle every detail to ensure you receive maximum reimbursement.',
    features: ['Accurate charge capture', 'Clean claim submission', 'Proactive A/R follow-up', 'Detailed reporting'],
    imageUrl: '/MB.jpg',
    hint: 'person calculating finances'
  },
  {
    icon: FileCode2,
    title: 'Medical Coding',
    description: 'Our certified coders ensure that every service is coded accurately according to the latest guidelines (ICD-10, CPT, HCPCS), which is critical for compliance and preventing claim denials.',
    features: ['Certified professional coders', 'Regular coding audits', 'Compliance with regulations', 'Reduced denial rates'],
    imageUrl: '/MC.jpg',
    hint: 'person writing code'
  },
  {
    icon: Orbit,
    title: 'Revenue Cycle Management',
    description: 'We provide a holistic approach to managing your entire revenue cycle, from patient pre-authorization and eligibility verification to the final zero-balance account, optimizing every step for financial success.',
    features: ['Full cycle overview', 'Patient eligibility verification', 'Performance analytics', 'Improved cash flow'],
    imageUrl: '/RCM.jpg',
    hint: 'business analytics chart'
  },
  {
    icon: FileX2,
    title: 'Claim Denial Management',
    description: "Don't let denials diminish your revenue. Our dedicated team investigates every denied claim, identifies the root cause, manages the appeals process, and implements corrective actions to prevent future denials.",
    features: ['Root cause analysis', 'Timely appeal submission', 'Denial prevention strategies', 'Recovery of lost revenue'],
    imageUrl: '/CDM.jpeg?',
    hint: 'person reviewing documents'
  },
  {
    icon: BadgeCheck,
    title: 'Credentialing Services',
    description: 'We manage the entire credentialing and provider enrollment process with all government and commercial payers, ensuring your providers are correctly linked and authorized to receive payments.',
    features: ['New provider enrollment', 'Re-credentialing management', 'Payer contract negotiation', 'Reduced administrative burden'],
    imageUrl: 'https://images.unsplash.com/photo-1549923746-9507eec27243?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMnx8Y3JlZGVudGlhbCUyMG1hbmFnZW1lbnR8ZW58MHx8fHwxNzU1NzkxNjEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    hint: 'credential management'
  },
  {
    icon: Database,
    title: 'Electronic Health Records',
    description: 'We help you streamline your clinical workflows with fully integrated Electronic Health Records (EHR) systems. Enhance patient care, improve documentation, and ensure seamless data flow.',
    features: ['EHR system implementation', 'Data migration and integration', 'Staff training and support', 'HIPAA-compliant data management'],
    imageUrl: '/EHR.jpg',
    hint: 'doctor using tablet'
  },
];

export const HOW_IT_WORKS = [
    { step: 1, icon: FileScan, title: 'Analysis & Onboarding', description: 'We perform a deep analysis of your current billing process and seamlessly integrate with your existing systems.' },
    { step: 2, icon: Repeat, title: 'Daily Processing', description: 'Our team manages daily claim submissions, payment posting, and follow-ups with meticulous attention to detail.' },
    { step: 3, icon: BarChart, title: 'Reporting & Growth', description: 'You receive transparent, monthly performance reports and strategic insights to drive continuous financial growth.' }
];

export const PROBLEMS_WE_SOLVE = [
  { icon: XCircle, title: 'High Claim Denials', description: 'Errors and rejections slow down cash flow.' },
  { icon: Clock, title: 'Time-Consuming Billing', description: 'Manual processes waste staff hours.' },
  { icon: TrendingDown, title: 'Revenue Leakage', description: 'Missed charges lead to lost income.' },
  { icon: Scale, title: 'Compliance Risks', description: 'Constantly changing regulations create stress.' }
];

export const INDUSTRIES_WE_SERVE_TILES = [
    { name: 'Clinics', icon: Stethoscope },
    { name: 'Hospitals', icon: Building },
    { name: 'Private Practices', icon: User },
    { name: 'Healthcare Networks', icon: Network }
];

export const WHY_CHOOSE_US_ITEMS = [
  {
    icon: TrendingUp,
    title: 'Accuracy',
    description:
      'With a 99% claim accuracy rate, we ensure you get paid correctly and on time, minimizing rejections.',
  },
  {
    icon: ShieldCheck,
    title: 'HIPAA Compliance',
    description:
      'We operate with strict adherence to HIPAA regulations, ensuring patient data is always secure.',
  },
  {
    icon: DollarSign,
    title: 'Cost Savings',
    description:
      'Reduce your overhead costs associated with in-house billing staff, software, and training.',
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description:
      'Our efficient processes accelerate your reimbursement cycles and improve your overall cash flow.',
  },
];

export const TESTIMONIALS = [
  {
    name: 'Sarah, Practice Manager',
    title: 'Cardiology Group',
    quote:
      'Osham revolutionized our billing. Our clean claim rate went up by 15% in the first quarter and our AR days dropped significantly. Their team is responsive and truly an extension of ours.',
    avatar: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=100&h=100&fit=crop',
  },
  {
    name: 'Dr. David Chen, MD',
    title: 'Orthopedic Surgeon',
    quote:
      "The best decision I made for my practice. The financial reporting is clear and insightful, and I've been able to focus entirely on my patients without worrying about billing complexities.",
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&h=100&fit=crop',
  },
   {
    name: 'Maria Rodriguez, Office Manager',
    title: 'Family Medicine Clinic',
    quote:
      "The credentialing process was a nightmare before we found Osham. They handled everything seamlessly, and our new providers were able to see patients and get paid without delay. Highly recommended!",
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100&fit=crop',
  },
   {
    name: 'Johnathan Lee, CFO',
    title: 'Regional Hospital Network',
    quote:
      "Partnering with Osham for denial management has been a game-changer. They've recovered significant revenue for us and provided the data we needed to prevent future denials. Their expertise is unmatched.",
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100&h=100&fit=crop',
  },
   {
    name: 'Dr. Emily Carter',
    title: 'Pediatric Practice',
    quote:
      "As a small practice, we don't have the resources for a full-time billing department. Osham provides top-tier service at a fraction of the cost. Our revenue has never been healthier.",
    avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=100&h=100&fit=crop',
  },
];

// src/lib/constants.ts

export const BLOG_POSTS = [
  {
    slug: 'hidden-heartbeat-of-healthcare',
    title: 'The Hidden Heartbeat of Healthcare: Why Medical Billing & Coding Are the Lifelines of Financial Stability',
    description:
      'Behind every diagnosis and treatment lies a quieter, but equally critical story: the meticulous world of medical billing and coding. This isn’t just paperwork. It’s the financial heartbeat of modern healthcare.',
    author: 'The Osham Team',
    date: 'September 04, 2025',
    content: `
      <p>Healthcare often brings to mind images of white coats, stethoscopes, and heroic moments at the bedside. Yet, behind every diagnosis and treatment lies a quieter, less glamorous-but equally critical-story: the meticulous world of medical billing and coding.</p>
      <p>This isn’t just paperwork. It’s the financial heartbeat of modern healthcare. And like the heartbeat, you rarely notice it until something goes wrong.</p>
      <hr class="my-8 border-dashed" />
      <h3 class="text-2xl font-bold tracking-tight text-primary sm:text-3xl text-gradient mb-4">Beyond Numbers: The Language of Medicine</h3>
      <p>Medical coding transforms complex clinical encounters into standardized language. Each ICD-10 code, CPT entry, or HCPCS notation is not just an alphanumeric string-it’s a bridge between care delivery and financial sustainability.</p>
    `,
  },
  {
    slug: 'future-of-ai-in-billing',
    title: 'The Future of AI in Medical Billing: Efficiency Without Compromise',
    description:
      'Artificial Intelligence is reshaping healthcare administration. But how far can automation go without losing the human touch?',
    author: 'Dr. Sara Malik',
    date: 'August 15, 2025',
    content: `
      <p>AI is no longer a buzzword-it’s entering the core of healthcare operations. From automated claims processing to predictive denial management, intelligent systems are cutting down manual errors and saving millions for practices worldwide.</p>
      <p>But technology is not without challenges. The future lies in finding balance-using AI for speed and accuracy while keeping human oversight to protect patient trust and compliance.</p>
      <hr class="my-8 border-dashed" />
      <h3 class="text-2xl font-bold tracking-tight text-primary sm:text-3xl text-gradient mb-4">Where AI Shines</h3>
      <p>Automation in coding, smart claim scrubbing, and real-time eligibility checks are already improving reimbursement cycles. Clinics that adopt these tools early are gaining a strong competitive edge.</p>
    `,
  },
  {
    slug: 'top-5-revenue-mistakes',
    title: 'Top 5 Revenue Mistakes Clinics Make-and How to Avoid Them',
    description:
      'Even successful practices lose money due to overlooked revenue cycle mistakes. Here are the most common pitfalls and practical fixes.',
    author: 'The Osham Team',
    date: 'July 30, 2025',
    content: `
      <p>Running a clinic is about more than patient care-it’s also about keeping your financial engine healthy. Yet many practices unknowingly leak revenue every day.</p>
      <p>From coding errors to delayed claim submissions, small oversights compound into major financial stress.</p>
      <hr class="my-8 border-dashed" />
      <h3 class="text-2xl font-bold tracking-tight text-primary sm:text-3xl text-gradient mb-4">Common Mistakes</h3>
      <ul>
        <li>Not verifying patient insurance eligibility before visits.</li>
        <li>Submitting incomplete or inaccurate documentation.</li>
        <li>Ignoring denial management workflows.</li>
        <li>Lack of staff training in new billing regulations.</li>
        <li>Delays in claim submission beyond payer deadlines.</li>
      </ul>
      <p>Fixing these can boost collections significantly, often without adding new patients.</p>
    `,
  },
];

export const COMPANY_ADDRESS = 'Remote';
export const COMPANY_PHONE = '+1 (321) 750-6478';
export const COMPANY_EMAIL = 'info@osham.co';
