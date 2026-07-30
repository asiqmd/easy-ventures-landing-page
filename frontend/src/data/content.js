// Central content + curated imagery for the Easy Ventures site
export const IMAGES = {
  heroParallax:
    "https://images.unsplash.com/photo-1771182253516-ffc7c1bee56e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1Mjh8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBsb2dpc3RpY3MlMjB0cnVjayUyMGhpZ2h3YXklMjBzdW5zZXR8ZW58MHx8fHwxNzg1NDA3NjU5fDA&ixlib=rb-4.1.0&q=85",
  truck:
    "https://images.unsplash.com/photo-1696110581291-16c49b7df77e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1Mjh8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBsb2dpc3RpY3MlMjB0cnVjayUyMGhpZ2h3YXklMjBzdW5zZXR8ZW58MHx8fHwxNzg1NDA3NjU5fDA&ixlib=rb-4.1.0&q=85",
  bridge:
    "https://images.unsplash.com/photo-1569924291145-12a05f455966?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1Mjh8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsb2dpc3RpY3MlMjB0cnVjayUyMGhpZ2h3YXklMjBzdW5zZXR8ZW58MHx8fHwxNzg1NDA3NjU5fDA&ixlib=rb-4.1.0&q=85",
  officeA:
    "https://images.unsplash.com/photo-1758518731468-98e90ffd7430?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHw0fHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjBhcmNoaXRlY3R1cmUlMjB0ZWFtfGVufDB8fHx8MTc4NTQwNzY1OXww&ixlib=rb-4.1.0&q=85",
  officeB:
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjBhcmNoaXRlY3R1cmUlMjB0ZWFtfGVufDB8fHx8MTc4NTQwNzY1OXww&ixlib=rb-4.1.0&q=85",
  officeC:
    "https://images.unsplash.com/photo-1758691737124-05c5bffe46f0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwyfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjBhcmNoaXRlY3R1cmUlMjB0ZWFtfGVufDB8fHx8MTc4NTQwNzY1OXww&ixlib=rb-4.1.0&q=85",
};

export const LEADER_IMAGES = [
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzV8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBvcnRyYWl0fGVufDB8fHx8MTc4NTQwNzY1OXww&ixlib=rb-4.1.0&q=85",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzV8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBvcnRyYWl0fGVufDB8fHx8MTc4NTQwNzY1OXww&ixlib=rb-4.1.0&q=85",
  "https://images.unsplash.com/photo-1676989880361-091e12efc056?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzV8MHwxfHNlYXJjaHw0fHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBvcnRyYWl0fGVufDB8fHx8MTc4NTQwNzY1OXww&ixlib=rb-4.1.0&q=85",
  "https://images.pexels.com/photos/27086922/pexels-photo-27086922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
];

export const NAV_LINKS = [
  { label: "Brands", href: "#brands" },
  { label: "Transportation", href: "#transportation" },
  { label: "Vision", href: "#mission" },
  { label: "Team", href: "#team" },
  { label: "Culture", href: "#culture" },
  { label: "Contact", href: "#contact" },
];

export const HERO_METRICS = [
  { value: 18, suffix: "+", label: "Years of excellence" },
  { value: 6, suffix: "", label: "Companies under Easy Ventures" },
  { value: 2400, suffix: "+", label: "Team members" },
  { value: 12, suffix: "K", label: "Projects delivered" },
];

export const BRANDS = [
  {
    id: "easy-truck",
    name: "Easy Truck",
    tag: "Logistics & Fleet",
    icon: "Truck",
    image: IMAGES.truck,
    description:
      "A next-generation logistics platform optimizing fleets, routes, and real-time delivery across continents.",
    accent: "#0066FF",
    points: ["Fleet monitoring", "Route optimization", "Live tracking"],
  },
  {
    id: "easy-brick",
    name: "Easy Brick",
    tag: "Construction Materials",
    icon: "Building2",
    image: IMAGES.bridge,
    description:
      "Infrastructure-grade materials and intelligent supply management powering the projects that shape cities.",
    accent: "#FF5A00",
    points: ["Material tracking", "Site coordination", "Cost optimization"],
  },
  {
    id: "netro-systems",
    name: "Netro Systems",
    tag: "Technology & Software",
    icon: "Cpu",
    image: IMAGES.officeC,
    description:
      "The digital transformation engine of the group — building software, data, and AI for enterprise scale.",
    accent: "#0066FF",
    points: ["Cloud platforms", "Data & AI", "Enterprise software"],
  },
];

export const TRANSPORT_FEATURES = [
  { icon: "Route", title: "Smart Logistics", text: "Adaptive routing that reacts to traffic, weather and demand in real time." },
  { icon: "Gauge", title: "Fleet Optimization", text: "Predictive maintenance and utilization analytics keep every vehicle productive." },
  { icon: "Satellite", title: "Digital Tracking", text: "End-to-end visibility from warehouse to doorstep with live telemetry." },
  { icon: "BrainCircuit", title: "AI-Powered Operations", text: "Machine learning forecasts demand and automates dispatch decisions." },
  { icon: "Leaf", title: "Sustainable Transport", text: "Electrified fleets and carbon-aware routing for a cleaner supply chain." },
];

export const TRANSPORT_STATS = [
  { value: 48, suffix: "M", label: "Miles covered" },
  { value: 9, suffix: "M", label: "Deliveries completed" },
  { value: 850, suffix: "+", label: "Partner businesses" },
  { value: 140, suffix: "", label: "Cities connected" },
];

export const LEADERS = [
  { name: "Marcus Vale", role: "Founder & Group CEO", image: LEADER_IMAGES[0], bio: "Two decades building logistics and infrastructure ventures across three continents." },
  { name: "Elena Rhodes", role: "Chief Operating Officer", image: LEADER_IMAGES[1], bio: "Scales operations and culture, turning ambitious strategy into daily execution." },
  { name: "David Okafor", role: "Chief Technology Officer", image: LEADER_IMAGES[2], bio: "Leads Netro Systems and the group's data, cloud and AI platforms." },
  { name: "Sofia Marin", role: "Chief Financial Officer", image: LEADER_IMAGES[3], bio: "Steward of disciplined growth and long-term value across the portfolio." },
];

export const CULTURE_GALLERY = [
  { src: IMAGES.officeA, span: "md:col-span-2 md:row-span-2", alt: "Corporate architecture" },
  { src: IMAGES.officeB, span: "", alt: "Team collaborating" },
  { src: IMAGES.truck, span: "", alt: "Field operations" },
  { src: IMAGES.officeC, span: "md:col-span-2", alt: "Team around laptop" },
  { src: IMAGES.bridge, span: "", alt: "Infrastructure project" },
  { src: IMAGES.heroParallax, span: "", alt: "Highway logistics" },
];

export const TRUCK_FEATURES = [
  { icon: "MapPinned", title: "Fleet monitoring", text: "Every vehicle, one live map." },
  { icon: "IdCard", title: "Driver management", text: "Schedules, safety and scoring." },
  { icon: "Route", title: "Route planning", text: "Optimized multi-stop routing." },
  { icon: "BarChart3", title: "Analytics", text: "Actionable operational insight." },
];

export const BRICK_FEATURES = [
  { icon: "Boxes", title: "Inventory management", text: "Real-time stock across sites." },
  { icon: "PackageSearch", title: "Material tracking", text: "From quarry to construction." },
  { icon: "HardHat", title: "Site coordination", text: "Crews, deliveries and timelines." },
  { icon: "PiggyBank", title: "Cost optimization", text: "Reduce waste, protect margins." },
];

export const WHY_CHOOSE = [
  { icon: "Lightbulb", title: "Innovation-driven", value: 240, suffix: "+", metric: "Patents & products" },
  { icon: "ShieldCheck", title: "Trusted expertise", value: 18, suffix: "yrs", metric: "Industry experience" },
  { icon: "Cpu", title: "Industry-leading tech", value: 99, suffix: "%", metric: "Platform uptime" },
  { icon: "HeartHandshake", title: "Customer-centric", value: 98, suffix: "%", metric: "Client retention" },
];

export const TESTIMONIALS = [
  { name: "Amelia Hart", company: "Northline Retail", rating: 5, image: LEADER_IMAGES[1], quote: "Easy Truck cut our last-mile costs by a third while improving delivery windows. A genuine partner." },
  { name: "Raj Malhotra", company: "Apex Constructions", rating: 5, image: LEADER_IMAGES[0], quote: "Easy Brick's material tracking eliminated site delays we'd fought for years. Flawless coordination." },
  { name: "Chloe Bennett", company: "Meridian Group", rating: 5, image: LEADER_IMAGES[3], quote: "Netro Systems rebuilt our data platform and the impact was immediate. World-class engineering." },
  { name: "Tomas Ferreira", company: "Volt Mobility", rating: 5, image: LEADER_IMAGES[2], quote: "The whole Easy Ventures ecosystem just fits together. One vision, executed with precision." },
];

export const MANIFESTO = [
  { n: "01", title: "One ecosystem", text: "Logistics, infrastructure and technology — engineered to work as a single system." },
  { n: "02", title: "Built to last", text: "We invest in reliability and craft, not shortcuts. Trust is our compounding asset." },
  { n: "03", title: "Future-focused", text: "AI, electrification and data move our industries forward, responsibly." },
];

export const CONTACT_INFO = {
  address: "Easy Ventures HQ, 88 Harbour Avenue, Dubai, UAE",
  phone: "+971 4 000 0000",
  email: "hello@easyventures.com",
  socials: [
    { label: "LinkedIn", icon: "Linkedin", href: "#" },
    { label: "X", icon: "Twitter", href: "#" },
    { label: "Instagram", icon: "Instagram", href: "#" },
  ],
};
