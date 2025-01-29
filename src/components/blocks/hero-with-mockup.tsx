import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Mockup } from "@/components/ui/mockup";
import { Glow } from "@/components/ui/glow";

interface Feature {
  title: string;
  description: string;
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

interface HeroWithMockupProps {
  title: string;
  subtitle?: string;
  description: string;
  testimonial?: Testimonial;
  features?: Feature[];
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  mockupImage: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  className?: string;
}

export function HeroWithMockup({
  title,
  subtitle,
  description,
  testimonial,
  features = [],
  primaryCta = { text: "Get Started", href: "/get-started" },
  secondaryCta = { text: "See Demo", href: "/demo" },
  mockupImage,
  className,
}: HeroWithMockupProps) {
  return (
    <section
      className={cn(
        "relative bg-background text-foreground py-12 px-4 md:py-24 lg:py-32 overflow-hidden",
        className
      )}
    >
      <div className="relative mx-auto max-w-[1280px] flex flex-col gap-12 lg:gap-24">
        {/* Content Section */}
        <div className="relative z-10 flex flex-col items-center gap-6 pt-8 md:pt-16 text-center lg:gap-12">
          {/* Title */}
          <h1
            className={cn(
              "inline-block bg-gradient-to-b from-foreground via-foreground/90 to-muted-foreground",
              "bg-clip-text text-transparent text-4xl font-bold tracking-tight",
              "sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.1]",
              "drop-shadow-sm dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            )}
          >
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground/90">
              {subtitle}
            </h2>
          )}

          {/* Description */}
          <p
            className={cn(
              "max-w-[750px] text-base sm:text-lg md:text-xl text-muted-foreground font-medium"
            )}
          >
            {description}
          </p>

          {/* Testimonial */}
          {testimonial && (
            <div className="max-w-[800px] my-8 p-6 bg-muted/50 rounded-lg">
              <p className="text-lg md:text-xl italic text-foreground/80 mb-4">
                "{testimonial.quote}"
              </p>
              <p className="font-medium text-foreground/70">
                {testimonial.author},{" "}
                <span className="text-muted-foreground">{testimonial.role}</span>
              </p>
            </div>
          )}

          {/* Features */}
          {features.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-[1000px] mt-8">
              {features.map((feature, index) => (
                <FeatureCard key={index} feature={feature} />
              ))}
            </div>
          )}

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Button asChild size="lg" className="bg-brand text-white shadow-lg">
              <a href={primaryCta.href}>{primaryCta.text}</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={secondaryCta.href}>{secondaryCta.text}</a>
            </Button>
          </div>

          {/* Mockup Image */}
          <div className="relative w-full pt-12 px-4 sm:px-6 lg:px-8">
            <Mockup className="shadow-[0_0_50px_-12px_rgba(0,0,0,0.3)]">
              <img
                src={mockupImage.src}
                alt={mockupImage.alt}
                width={mockupImage.width}
                height={mockupImage.height}
                className="w-full h-auto"
                loading="lazy"
                decoding="async"
              />
            </Mockup>
          </div>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Glow className="animate-appear-zoom" />
      </div>
    </section>
  );
}

// FeatureCard Component
function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <div className="flex flex-col gap-2 text-left p-6 bg-background/50 rounded-lg border border-muted">
      <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
      <p className="text-muted-foreground">{feature.description}</p>
    </div>
  );
}