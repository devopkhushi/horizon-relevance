import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

export default function ProductsPage() {
  const products = [
    {
      title: "Cloud Cost Optimization Platform",
      tagline: "Maximize cloud efficiency. Minimize spend. No guesswork.",
      features: [
        "Real-Time Dashboards",
        "AI-powered Savings Recommendations",
        "Budget Guardrails",
        "Multi-Cloud Support",
        "Seamless Integration with Cloud Billing APIs"
      ],
      useCases: [
        "FinTech: Saved 37% on AWS within 2 weeks",
        "Healthcare: Reduced 40% infrastructure waste with AI scaling"
      ],
      idealFor: [
        "FinOps, Engineering, Multi-cloud operations"
      ],
      cta: {
        label: "Start Free Assessment",
        calendlyUrl: "https://calendly.com/kashyap-ankur0114/30min-1"
      }
    },
    {
      title: "Multi-Cloud Deployment Manager",
      tagline: "One dashboard. Any cloud. Everywhere.",
      features: [
        "GitOps-ready pipeline integration",
        "Dynamic config loader",
        "Helm + Terraform modules",
        "Cost-aware deployments"
      ],
      useCases: [
        "Healthcare: EKS + AKS via Terraform",
        "FinTech: Reduced onboarding from 3 days to 1 hour"
      ],
      idealFor: [
        "Platform Engineering, SREs, DevOps teams"
      ],
      cta: {
        label: "Book a Demo",
        calendlyUrl: "https://calendly.com/kashyap-ankur0114/30min"
      }
    },
    {
      title: "Serverless Application Framework",
      tagline: "Build faster. Scale smarter. Operate serverlessly.",
      features: [
        "Python-first Lambda deployment",
        "Event orchestration (Step Functions)",
        "CloudWatch alerting and monitoring",
        "API Gateway with secure auto-docs",
        "Terraform & SAM support"
      ],
      useCases: [
        "Retail: 2M invocations, zero downtime",
        "Healthcare: HIPAA-compliant Lambda workflows"
      ],
      idealFor: [
        "Developers, Startups, Event-driven apps"
      ],
      cta: {
        label: "Deploy Your First Function",
        calendlyUrl: "https://calendly.com/kashyap-ankur0114/serverless-session"
      }
    },
    {
      title: "AI-Driven Monitoring & Incident Response",
      tagline: "Predict issues. Solve outages. Stay ahead with AI.",
      features: [
        "Generative AI Alerting & RCA",
        "Anomaly Detection & Forecasting",
        "OpenTelemetry + Grafana Tempo integration",
        "CloudWatch metrics & Lambda triggers",
        "Slack + ServiceNow integration"
      ],
      useCases: [
        "Healthcare: 65% faster incident response",
        "Finance: 99.99% uptime with AI-powered remediation"
      ],
      idealFor: [
        "SREs, DevOps, Regulated industries"
      ],
      cta: {
        label: "Explore AI Monitoring",
        calendlyUrl: "https://calendly.com/kashyap-ankur0114/ai-monitoring"
      }
    },
    {
      title: "Self-Service CI/CD Pipeline UI",
      tagline: "Deploy in one click. Zero scripts, maximum control.",
      features: [
        "No-code Jenkins pipeline creation",
        "GitHub webhook-based triggering",
        "Integrated SonarQube and OPA scanning",
        "LDAP-based access and audit trail",
        "Kubernetes-native deployment"
      ],
      useCases: [
        "Healthcare: 3x faster developer deployments",
        "Enterprise: 75% reduction in manual security reviews"
      ],
      idealFor: [
        "DevOps, DevSecOps, Kubernetes-first teams"
      ],
      cta: {
        label: "Try Self-Service Pipeline",
        calendlyUrl: "https://calendly.com/kashyap-ankur0114/pipeline-ui-demo"
      }
    }
  ];

  return (
    <>
      <Head>
        <title>Our Products - Horizon Relevance</title>
        <meta
          name="description"
          content="Explore our cloud-native product offerings."
        />
      </Head>

      {/* <Navbar /> */}

      <main className="relative overflow-hidden py-32 px-6 max-w-7xl mx-auto">

        <div className="text-center mb-20">

          <p className="text-green-400 uppercase tracking-[0.35em] text-sm mb-5">
            Product Ecosystem
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
            Enterprise Products
            <br />
            Built For Scale
          </h1>

          <p className="text-gray-400 text-xl leading-9 max-w-3xl mx-auto">
            Explore AI-powered cloud platforms, automation systems,
            and DevSecOps solutions engineered for modern enterprises.
          </p>

        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">

          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}

        </div>

      </main>

      {/* <Footer /> */}

    </>
  );
}