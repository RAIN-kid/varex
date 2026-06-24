import {
  Zap,
  Cpu,
  Gauge,
  Wrench,
  BatteryCharging,
  ShieldCheck,
  Building2,
  HardHat,
  Factory,
  Pickaxe,
  Flame,
  Landmark,
  Fuel,
  Warehouse,
  CheckCircle2
} from "lucide-react";

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Projects", href: "#projects" },
  { label: "Partners", href: "#partners" },
  { label: "Contact", href: "#contact" }
];

export const values = [
  {
    title: "Value",
    description:
      "We deliver practical, measurable and cost-effective engineering solutions."
  },
  {
    title: "Reliability",
    description:
      "We build long-term partnerships through dependable service and consistent delivery."
  },
  {
    title: "Excellence",
    description:
      "We execute every project with quality, safety and international best practices."
  }
];

export const stats = [
  { value: "120+", label: "Projects Completed" },
  { value: "10+", label: "Years Experience" },
  { value: "12+", label: "Industries Served" },
  { value: "35+", label: "Technical Experts" }
];

export const services = [
  {
    title: "Electrical Engineering",
    icon: Zap,
    description:
      "HV, MV and LV systems, switchgear installation, transformer testing, panel building, commissioning and maintenance."
  },
  {
    title: "Industrial Automation",
    icon: Cpu,
    description:
      "PLC, HMI, SCADA integration, control panels, industrial networking and automation system optimization."
  },
  {
    title: "Instrumentation & Control",
    icon: Gauge,
    description:
      "Flowmeters, pressure transmitters, level sensors, calibration, process control and measurement systems."
  },
  {
    title: "Mechanical Engineering",
    icon: Wrench,
    description:
      "Pumps, compressors, conveyors, mechanical equipment installation, repair and industrial plant support."
  },
  {
    title: "Power Solutions",
    icon: BatteryCharging,
    description:
      "Backup power systems, electrical equipment supply, power distribution, testing and reliability improvement."
  },
  {
    title: "Industrial Maintenance",
    icon: HardHat,
    description:
      "Preventive maintenance, diagnostics, troubleshooting, shutdown support and technical equipment servicing."
  },
  {
    title: "Infrastructure Solutions",
    icon: Building2,
    description:
      "Industrial facilities, substations, transmission lines, commercial infrastructure and utility systems."
  },
  {
    title: "Safety Systems",
    icon: ShieldCheck,
    description:
      "Safety-focused engineering, security systems, cathodic protection, inspection and compliance support."
  }
];

export const industries = [
  {
    title: "Manufacturing",
    icon: Factory,
    image:
      "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Mining",
    icon: Pickaxe,
    image:
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Energy",
    icon: Flame,
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Commercial Infrastructure",
    icon: Landmark,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Oil & Gas",
    icon: Fuel,
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Industrial Facilities",
    icon: Warehouse,
    image:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=80"
  }
];

export const projects = [
  {
    title: "Industrial Power Distribution Upgrade",
    category: "Electrical Engineering",
    description:
      "Modernized LV/MV distribution infrastructure to improve plant safety, stability and uptime.",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Automation & SCADA Integration",
    category: "Industrial Automation",
    description:
      "Integrated PLC, HMI and SCADA systems for improved monitoring, process visibility and control.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Instrumentation Calibration Program",
    category: "Instrumentation",
    description:
      "Delivered calibration and commissioning for flow, pressure and level instruments.",
    image:
      "https://images.unsplash.com/photo-1581093458791-9d42cc0301f4?auto=format&fit=crop&w=1200&q=80"
  }
];

export const advantages = [
  "Experienced engineering team",
  "Quality assurance",
  "Reliable delivery",
  "Modern technology",
  "Safety focused approach"
].map((title) => ({
  title,
  icon: CheckCircle2
}));

export const partners = [
  "ABB",
  "Siemens",
  "Schneider Electric",
  "GE Vernova",
  "Mitsubishi",
  "Omron",
  "Emerson",
  "Yokogawa",
  "Valmet",
  "Atlas Copco",
  "Linde",
  "Supmea"
];