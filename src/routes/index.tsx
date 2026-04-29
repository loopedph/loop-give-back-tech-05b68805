import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/hero-laptop.jpg";
import impactImage from "@/assets/impact-students.jpg";
import { Button } from "@/components/ui/button";
import {
  Recycle,
  ShieldCheck,
  Cpu,
  HeartHandshake,
  Leaf,
  Droplets,
  Cloud,
  Scale,
  Mail,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Looped — Refurbished IT for a Circular Future" },
      {
        name: "description",
        content:
          "Looped recovers retired IT assets from companies and universities, refurbishes them, and redistributes them to NGOs — closing the loop on e-waste.",
      },
      { property: "og:title", content: "Looped — Refurbished IT for a Circular Future" },
      {
        property: "og:description",
        content:
          "Closing the loop on e-waste. We source, sanitize, upgrade, and redistribute IT assets to communities that need them.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Process />
      <Impact />
      <Metrics />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight text-lg">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Recycle className="h-4 w-4" />
          </span>
          Looped
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#process" className="hover:text-foreground transition-colors">Process</a>
          <a href="#impact" className="hover:text-foreground transition-colors">Impact</a>
          <a href="#metrics" className="hover:text-foreground transition-colors">Metrics</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </nav>
        <Button asChild size="sm" className="rounded-full">
          <a href="#contact">Partner with us</a>
        </Button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-soft)" }} />
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-28 md:pb-32 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <Leaf className="h-3.5 w-3.5 text-primary" />
            Circular IT • Pre-seed
          </span>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            Closing the loop on <span className="italic" style={{ color: "var(--primary-glow)" }}>e-waste.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
            We recover retired IT assets from companies and universities, refurbish them with care,
            and redistribute them to NGOs and communities who need them most.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button asChild size="lg" className="rounded-full shadow-[var(--shadow-soft)]">
              <a href="#contact">Donate your IT assets <ArrowRight className="ml-1 h-4 w-4" /></a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <a href="#process">How it works</a>
            </Button>
          </div>
          <div className="flex items-center gap-8 pt-6 text-sm">
            <Stat value="100%" label="E-waste recovery" />
            <div className="h-8 w-px bg-border" />
            <Stat value="322 kg" label="CO₂e avoided" />
            <div className="h-8 w-px bg-border" />
            <Stat value="190K L" label="Water saved" />
          </div>
        </div>
        <div className="relative">
          <div
            className="absolute -inset-4 rounded-[2rem] -z-10 opacity-40 blur-2xl"
            style={{ background: "var(--gradient-hero)" }}
          />
          <img
            src={heroImage}
            alt="Hands holding a refurbished laptop"
            width={1536}
            height={1024}
            className="relative rounded-[2rem] shadow-[var(--shadow-elegant)] object-cover w-full aspect-[4/3]"
          />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-2xl font-semibold tracking-tight">{value}</div>
      <div className="text-xs text-muted-foreground mt-0.5">{label}</div>
    </div>
  );
}

function Process() {
  const steps = [
    {
      icon: Recycle,
      title: "Sourcing",
      desc: "We partner with universities and corporations to recover retired IT assets at end-of-life.",
    },
    {
      icon: ShieldCheck,
      title: "Data Sanitization",
      desc: "Every unit undergoes certified data destruction to guarantee institutional security.",
    },
    {
      icon: Cpu,
      title: "Hardware Upgrade",
      desc: "We install new SSDs and RAM upgrades so devices meet modern performance standards.",
    },
    {
      icon: HeartHandshake,
      title: "Redistribution",
      desc: "Refurbished units are earmarked for NGOs, schools, and community partners.",
    },
  ];
  return (
    <section id="process" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium mb-3">Our Process</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            From retired hardware to renewed purpose.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="group relative rounded-2xl border border-border bg-card p-7 hover:shadow-[var(--shadow-soft)] hover:-translate-y-1 transition-[var(--transition-smooth)]"
            >
              <div className="absolute top-5 right-5 text-xs font-mono text-muted-foreground">
                0{i + 1}
              </div>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <step.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Impact() {
  return (
    <section id="impact" className="py-24 md:py-32 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-14 items-center">
        <div className="order-2 md:order-1">
          <img
            src={impactImage}
            alt="Students using refurbished laptops in a classroom"
            width={1280}
            height={896}
            loading="lazy"
            className="rounded-[2rem] shadow-[var(--shadow-elegant)] object-cover w-full aspect-[5/4]"
          />
        </div>
        <div className="order-1 md:order-2 space-y-6">
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium">Why it matters</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Every laptop has a second life — and someone waiting for it.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Millions of working machines are scrapped each year while millions of students and
            non-profits go without. Looped bridges that gap, turning corporate IT turnover into
            community access.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-2">
            <ImpactCard icon={Leaf} value="2.04 kg" label="Diverted from landfill" />
            <ImpactCard icon={Cloud} value="322 kg" label="CO₂e avoided" />
            <ImpactCard icon={Droplets} value="190,000 L" label="Water saved" />
            <ImpactCard icon={Scale} value="1.5" label="Neurotoxins avoided" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ImpactCard({
  icon: Icon,
  value,
  label,
}: {
  icon: typeof Leaf;
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-xl bg-card border border-border p-5">
      <Icon className="h-5 w-5 text-primary mb-3" />
      <div className="text-2xl font-semibold tracking-tight">{value}</div>
      <div className="text-xs text-muted-foreground mt-1">{label}</div>
    </div>
  );
}

function Metrics() {
  const metrics = [
    { label: "Assets sourced", value: "8" },
    { label: "Functional rate", value: "13%" },
    { label: "E-waste recovery", value: "100%" },
    { label: "Refurbishment yield", value: "1.0" },
    { label: "Gross margin", value: "90%" },
    { label: "Net income margin", value: "79%" },
  ];
  return (
    <section id="metrics" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-14">
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium mb-3">Traction</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Early numbers, real momentum.
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px rounded-2xl overflow-hidden bg-border">
          {metrics.map((m) => (
            <div key={m.label} className="bg-card p-6">
              <div className="text-3xl font-semibold tracking-tight">{m.value}</div>
              <div className="text-xs text-muted-foreground mt-2 leading-snug">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div
          className="relative overflow-hidden rounded-[2.5rem] p-12 md:p-16 text-center"
          style={{ background: "var(--gradient-hero)" }}
        >
          <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{
            backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 70%, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }} />
          <div className="relative space-y-6 text-primary-foreground">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Have IT assets to retire? Let's loop them in.
            </h2>
            <p className="text-lg opacity-90 max-w-xl mx-auto">
              Partner with Looped to turn your end-of-life hardware into measurable social and
              environmental impact.
            </p>
            <div className="pt-2">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="rounded-full text-base"
              >
                <a href="mailto:looped@loopedph.com">
                  <Mail className="mr-2 h-4 w-4" />
                  looped@loopedph.com
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Recycle className="h-3.5 w-3.5" />
          </span>
          <span className="font-medium text-foreground">Looped</span>
          <span>· Circular IT for the Philippines</span>
        </div>
        <div>© {new Date().getFullYear()} Looped. All rights reserved.</div>
      </div>
    </footer>
  );
}
