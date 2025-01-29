import { HeroWithMockup } from "@/components/blocks/hero-with-mockup";

export function HeroDemo() {
  const heroProps = {
    title: "Transform Your Oil & Gas Procurement with AI-Powered Intelligence",
    subtitle: "Your Time is Money. Stop Losing Both.",
    description:
      "Streamline procurement, eliminate risks, and boost profitability with Libya's first AI-powered procurement platform built exclusively for the Oil & Gas industry.",
    testimonial: {
      quote: "We reduced procurement cycles by 60% and saved $2.8M in our first year.",
      author: "Mohammed Ali",
      role: "Procurement Director at Libya Oil Corporation",
    },
    features: [
      {
        title: "Close Deals 3x Faster",
        description:
          "Our intelligent RFQ matching system connects you with pre-verified suppliers in minutes, not weeks",
      },
      {
        title: "Reduce Risks by 85%",
        description:
          "AI-powered contract analysis catches potential issues before they become problems",
      },
      {
        title: "Save 30% on Costs",
        description:
          "Automated workflows and smart supplier matching deliver immediate ROI",
      },
      {
        title: "Build Stronger Partnerships",
        description:
          "Priority access to Libya's largest network of verified Oil & Gas suppliers",
      },
    ],
    primaryCta: {
      text: "Start Saving Time Today",
      href: "/signup",
    },
    secondaryCta: {
      text: "See How It Works",
      href: "/demo",
    },
    mockupImage: {
      alt: "ProcStream Platform Dashboard",
      width: 1248,
      height: 765,
      src: "/dashboard-mockup.png",
    },
  };

  return <HeroWithMockup {...heroProps} />;
}