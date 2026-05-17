export interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  icon: string;
  gradient: string;
  gradientFrom: string;
  gradientTo: string;
  features: string[];
  techStack: string[];
  status: "available" | "beta" | "coming-soon";
  category: string;
}

export const products: Product[] = [
  {
    slug: "myai",
    name: "MyAI",
    tagline: "Receipt OCR + AI Purchase Matching",
    description:
      "Upload receipts and let AI automatically match and create purchase invoices in AutoCount 2.2.",
    longDescription:
      "MyAI uses advanced OCR and AI to extract data from receipts and supplier invoices, then intelligently matches them to existing vendors and items in AutoCount. It auto-creates purchase invoices, saving hours of manual data entry.",
    icon: "🧾",
    gradient: "from-purple-600 to-violet-500",
    gradientFrom: "#7C3AED",
    gradientTo: "#A855F7",
    features: [
      "Receipt & invoice OCR scanning",
      "AI-powered supplier matching",
      "Auto purchase invoice creation",
      "AutoCount 2.2 & Cloud support",
      "Batch processing",
      "Confidence scoring",
    ],
    techStack: ["React", "FastAPI", "C# Bridge", "Claude AI", "AutoCount SDK"],
    status: "available",
    category: "AI Automation",
  },
  {
    slug: "myai-bank-recon",
    name: "MyAI Bank Recon",
    tagline: "Offline-First Auto Bank Reconciliation",
    description:
      "Reconcile 14 Malaysian & foreign bank statements automatically with AI matching against AutoCount transactions.",
    longDescription:
      "MyAI Bank Recon is an offline-first application that imports bank statements from 14 Malaysian and foreign banks, uses AI to match transactions against AutoCount 2.2 ledger entries, and writes reconciliation results back to dbo.BankRecon.",
    icon: "🏦",
    gradient: "from-cyan-600 to-blue-500",
    gradientFrom: "#0891B2",
    gradientTo: "#06B6D4",
    features: [
      "14 MY & foreign bank support",
      "Offline-first architecture",
      "AI transaction matching",
      "Writes back to dbo.BankRecon",
      "Discrepancy reporting",
      "Multi-currency support",
    ],
    techStack: ["React", "FastAPI", "Python", "Claude AI", "AutoCount SDK"],
    status: "available",
    category: "Bank Reconciliation",
  },
  {
    slug: "ac-middleware",
    name: "ACMiddleware",
    tagline: "AutoCount REST API Integration Layer",
    description:
      "FastAPI middleware (port 8400) exposing AutoCount 2.2 as REST APIs for multi-client distribution.",
    longDescription:
      "ACMiddleware is a FastAPI-based integration layer that wraps AutoCount 2.2 functionality into clean REST APIs. Designed for multi-client distribution, it enables other applications and services to interact with AutoCount programmatically without direct SDK access.",
    icon: "🔌",
    gradient: "from-emerald-600 to-green-500",
    gradientFrom: "#059669",
    gradientTo: "#10B981",
    features: [
      "RESTful API on port 8400",
      "Multi-client distribution",
      "AutoCount 2.2 coverage",
      "JWT authentication",
      "Rate limiting",
      "OpenAPI documentation",
    ],
    techStack: ["FastAPI", "Python", "AutoCount SDK", "JWT", "SQLite"],
    status: "available",
    category: "Integration",
  },
  {
    slug: "aiar-aging",
    name: "AIARAging",
    tagline: "AI-Powered AR Aging Auto-Reminder",
    description:
      "Automated WhatsApp debt collection with AI-generated messages, PDF SOA server, and aging rules engine.",
    longDescription:
      "AIARAging automates accounts receivable collection by generating personalized WhatsApp messages using Claude AI, serving PDF Statement of Accounts, and applying configurable aging rules to determine when and how to contact overdue customers.",
    icon: "💬",
    gradient: "from-orange-500 to-amber-400",
    gradientFrom: "#D97706",
    gradientTo: "#F59E0B",
    features: [
      "WhatsApp debt collection",
      "Claude AI message generation",
      "PDF SOA auto-serve",
      "Configurable aging rules",
      "Multi-customer batch send",
      "Collection history tracking",
    ],
    techStack: ["C# .NET 10", "WinForms", "Claude AI", "WhatsApp API", "AutoCount SDK"],
    status: "available",
    category: "AR Collection",
  },
  {
    slug: "batch-sender",
    name: "AutoCount Batch Sender",
    tagline: "Batch Send Invoices via WhatsApp & Email",
    description:
      "Send AutoCount documents (invoices, DO, etc.) in bulk via WhatsApp, Email, or PDF without a developer plugin ID.",
    longDescription:
      "AutoCount Batch Sender allows businesses to send large volumes of AutoCount documents — invoices, delivery orders, credit notes — through WhatsApp and Email without requiring an expensive AutoCount developer plugin license. Simple, fast, and cost-effective.",
    icon: "📤",
    gradient: "from-pink-600 to-rose-500",
    gradientFrom: "#DB2777",
    gradientTo: "#F43F5E",
    features: [
      "Batch WhatsApp sending",
      "Batch email delivery",
      "PDF export & send",
      "No developer plugin ID needed",
      "AutoCount 2.2+ compatible",
      "Send history & status",
    ],
    techStack: ["C# WinForms", "AutoCount SDK", "WhatsApp API", "SMTP"],
    status: "available",
    category: "Document Delivery",
  },
  {
    slug: "batch-backup",
    name: "AutoCount Batch Backup",
    tagline: "Scheduled SQL Server Backup Manager",
    description:
      "Schedule, automate, and manage SQL Server backups for AutoCount databases with retention policy and tray support.",
    longDescription:
      "AutoCount Batch Backup is a lightweight .NET 10 WinForms tray application that schedules SQL Server backups for AutoCount databases. Features configurable retention policies, backup history, email notifications, and silent background operation.",
    icon: "💾",
    gradient: "from-indigo-600 to-blue-500",
    gradientFrom: "#4F46E5",
    gradientTo: "#3B82F6",
    features: [
      "Scheduled SQL backups",
      "Configurable retention policy",
      "Backup history log",
      "System tray operation",
      "Email notifications",
      "Multi-database support",
    ],
    techStack: ["C# .NET 10", "WinForms", "SQL Server", "Task Scheduler"],
    status: "available",
    category: "Database Management",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(): Record<string, Product[]> {
  return products.reduce(
    (acc, product) => {
      if (!acc[product.category]) acc[product.category] = [];
      acc[product.category].push(product);
      return acc;
    },
    {} as Record<string, Product[]>
  );
}
