// Full site content in Bangla (default) and English.
// Bangla is authored natively (not literally translated) with idiomatic phrasing.
// Non-textual assets (images, icon names, accent colors) live in /data/content.js
// and are referenced here by key so both languages share visuals.

import { IMAGES, LEADER_IMAGES } from "@/data/content";

const bn = {
  langLabel: "বাংলা",
  otherLangLabel: "English",
  nav: [
    { label: "ব্র্যান্ডস", href: "#brands" },
    { label: "পরিবহন", href: "#transportation" },
    { label: "দৃষ্টিভঙ্গি", href: "#mission" },
    { label: "টিম", href: "#team" },
    { label: "কালচার", href: "#culture" },
    { label: "যোগাযোগ", href: "#contact" },
  ],
  common: {
    contact: "যোগাযোগ",
    learnMore: "আরও জানুন",
    live: "লাইভ",
    online: "অনলাইন",
    liveNetwork: "সারাদেশ কানেক্টেড—",
    citiesConnectedShort: "দেশের একমাত্র ইন্ডাস্ট্রিয়াল ট্রান্সপোর্ট",
  },
  hero: {
    overline: "ইজি ভেঞ্চারস গ্রুপ",
    truckAlt: "বাংলাদেশের জাতীয় মহাসড়কে চলমান একটি পণ্যবাহী ট্রাক",
    headline: ["গড়ছি আগামীর", "পরিবহন, অবকাঠামো", "ও প্রযুক্তি"],
    sub: "ইজি ভেঞ্চারস একত্র করেছে সেই উদ্ভাবনী প্রতিষ্ঠানগুলোকে — যারা লজিস্টিকস, নির্মাণ ও ডিজিটাল দক্ষতায় শিল্পকে বদলে দিচ্ছে।",
    ctaExplore: "আমাদের ব্র্যান্ড দেখুন",
    ctaContact: "যোগাযোগ করুন",
    metrics: [
      { value: 3, suffix: "+", label: "বছরের অভিজ্ঞতা" },
      { value: 4, suffix: "টি", label: "প্রতিষ্ঠান" },
      { value: 20, suffix: "+", label: "টিম সদস্য" },
      { value: 1, suffix: " হাজার+", label: "সম্পন্ন প্রকল্প" },
    ],
  },
  marquee: ["লজিস্টিকস", "অবকাঠামো", "প্রযুক্তি", "উদ্ভাবন", "নির্ভরযোগ্যতা", "প্রবৃদ্ধি"],
  brands: {
    overline: "আমাদের পোর্টফোলিও",
    titleBefore: "আগামীর শক্তি — ",
    titleAccent: "আমাদের ব্র্যান্ড",
    intro: "চারটি বিশেষায়িত প্রতিষ্ঠান, এক অভিন্ন উৎকর্ষের মানদণ্ড। আরও ব্র্যান্ড দেখতে পাশে স্ক্রল করুন।",
    scrollLabel: "আমাদের ব্র্যান্ডসমূহ",
    prevLabel: "আগের ব্র্যান্ড দেখুন",
    nextLabel: "পরের ব্র্যান্ড দেখুন",
    items: {
      "easy-truck": {
        name: "ইজি ট্রাক",
        tag: "লজিস্টিকস ও বহর",
        description: "পরবর্তী প্রজন্মের লজিস্টিকস প্ল্যাটফর্ম — দেশজুড়ে ইন্ডাস্ট্রিয়াল সেক্টরে ট্রাক সাপ্লাই করছে ও বিজনেস টু বিজনেস লজিস্টিক ম্যানেজ করছে।",
      },
      "easy-brick": {
        name: "ইজি ব্রিক",
        tag: "নির্মাণ উপকরণ",
        description: "ইট ও অন্যান্য অবকাঠামো-মানের উপকরণ সরবরাহ ব্যবস্থাপনা — শহর যারা গড়ছে, তাদের পাশে।",
      },
      "netro-systems": {
        name: "নেত্র সিস্টেমস",
        tag: "প্রযুক্তি ও সফটওয়্যার",
        description: "সফটওয়্যার ডেভেলপমেন্ট ও অটোমেশন এক্সপার্ট। ইন্ডাস্ট্রিয়াল সল্যুশন প্রভাইডার।",
      },
      "dream-build-solution": {
        name: "ড্রিম বিল্ড সল্যুশন",
        tag: "নির্মাণ উপকরণ",
        description: "ব্যক্তিগত ও ইন্ডাস্ট্রিয়াল নির্মাণের সকল উপকরণের যোগান দিচ্ছি আমরা।",
      },
    },
  },
  transport: {
    overline: "পরিবহনে নতুন রূপ",
    titleBefore: "কীভাবে আমরা দুনিয়াকে ",
    titleAccent: "সামনে এগিয়ে নিই",
    features: [
      { title: "স্মার্ট লজিস্টিকস", text: "ট্রাফিক, আবহাওয়া ও চাহিদার সাথে সাথে বদলে নেওয়া অভিযোজিত রাউটিং।" },
      { title: "বহর অপ্টিমাইজেশন", text: "পূর্বাভাসভিত্তিক রক্ষণাবেক্ষণ ও ব্যবহারের বিশ্লেষণে প্রতিটি গাড়ি সর্বদা উৎপাদনশীল।" },
      { title: "ডিজিটাল ট্র্যাকিং", text: "গুদাম থেকে ঠিকানা পর্যন্ত লাইভ টেলিমেট্রিতে পুরো দৃশ্যমানতা।" },
      { title: "এআই-চালিত অপারেশন", text: "মেশিন লার্নিং চাহিদা পূর্বাভাস দেয় এবং ডিসপ্যাচ সিদ্ধান্ত স্বয়ংক্রিয় করে।" },
      { title: "টেকসই পরিবহন", text: "বিদ্যুৎচালিত বহর ও কার্বন-সচেতন রাউটিং — এক পরিচ্ছন্ন সাপ্লাই চেইন।" },
    ],
    timeline: [
      "২০০৭ — আঞ্চলিক ফ্রেইট অপারেটর হিসেবে যাত্রা শুরু",
      "২০১৫ — ডিজিটাল ট্র্যাকিং প্ল্যাটফর্ম চালু",
      "২০২১ — এআই ডিসপ্যাচ ও বৈদ্যুতিক বহর",
      "২০২৫ — ১৪০টি শহর, এক সংযুক্ত নেটওয়ার্ক",
    ],
  },
  mission: {
    overline: "লক্ষ্য",
    titleBefore: "মিশনে চালিত। ",
    titleAccent: "দৃষ্টিভঙ্গিতে পরিচালিত।",
    mission: {
      overline: "আমাদের মিশন",
      title: "উদ্ভাবনের মাধ্যমে শিল্পকে সহজ করা",
      text: "উদ্ভাবন, দক্ষতা ও প্রযুক্তির মাধ্যমে শিল্পগুলোকে সহজ করাই আমাদের মিশন — যেখানেই কিছু গড়া, সরানো বা সংযুক্ত হয়, সেখান থেকে ঘর্ষণ সরিয়ে দেওয়া।",
    },
    vision: {
      overline: "আমাদের ভিশন",
      title: "ভবিষ্যতের প্রধান ইকোসিস্টেম",
      text: "যে অঞ্চলগুলোতে আমরা কাজ করি, সেখানে পরিবহন, নির্মাণ ও ডিজিটাল রূপান্তরের ভবিষ্যৎ গড়ে তোলার প্রধান ইকোসিস্টেম হয়ে ওঠা।",
    },
  },
  leadership: {
    overline: "নেতৃত্ব",
    titleBefore: "ইজি ভেঞ্চারসের ",
    titleAccent: "পেছনের মানুষদের চিনুন",
    scrollLabel: "ইজি ভেঞ্চারস টিম",
    prevLabel: "আগের টিম সদস্য দেখুন",
    nextLabel: "পরের টিম সদস্য দেখুন",
    leaders: [
      { name: "মো. কামরুল হাসান", role: "চেয়ারম্যান" },
      { name: "প্রকৌশলী আরিফুল হক জকি", role: "ব্যবস্থাপনা পরিচালক" },
      { name: "আসিক মোহাম্মদ", role: "প্রধান প্রযুক্তি কর্মকর্তা" },
      { name: "মো. আলমগীর হোসেন", role: "বিক্রয় বিভাগের প্রধান" },
      { name: "মাহমুদা হাসান", role: "ব্র্যান্ডিং বিভাগের প্রধান" },
      { name: "মো. নাহিদ হোসেন", role: "লজিস্টিকস সমন্বয়কারী" },
      { name: "মোহাম্মদ ইনজামাম", role: "লজিস্টিকস তত্ত্বাবধায়ক" },
      { name: "তানিশা জামান", role: "পরিবহন সমন্বয়কারী" },
      { name: "মহিউদ্দিন মাসুম", role: "পরিবহন সমন্বয়কারী" },
      { name: "তানজিলা পারভীন", role: "পরিবহন সমন্বয়কারী" },
    ],
  },
  culture: {
    overline: "অফিস ও সংস্কৃতি",
    titleBefore: "আমরা বিশ্বাস করি — মহান প্রতিষ্ঠান গড়ে ওঠে ",
    titleAccent: "মহান মানুষদের হাতে",
    alts: [
      "ইজি ট্রাক টিম",
      "অফিসে পরিকল্পনা সভা",
      "নেতৃত্বের আলোচনা",
      "টিম জার্সি উন্মোচন",
      "ইজি ট্রাক ব্র্যান্ড উদ্‌যাপন",
      "টিমের বিশেষ মুহূর্ত",
      "প্রেজেন্টেশন ও কর্মশালা",
      "টিম উদ্‌যাপন",
      "অফিসে কৌশলগত আলোচনা",
    ],
  },
  easyTruck: {
    overline: "ইজি ট্রাক",
    titleBefore: "লজিস্টিকস — ",
    titleAccent: "নতুন করে ভাবা",
    body: "একটাই কমান্ড সেন্টারে রিয়েল-টাইম বহর বুদ্ধিমত্তা, রুট অপ্টিমাইজেশন এবং ড্রাইভার ব্যবস্থাপনা।",
    features: [
      { title: "বহর মনিটরিং", text: "প্রতিটি গাড়ি, এক লাইভ ম্যাপে।" },
      { title: "ড্রাইভার ব্যবস্থাপনা", text: "শিডিউল, নিরাপত্তা ও স্কোরিং।" },
      { title: "রুট প্ল্যানিং", text: "অপ্টিমাইজড মাল্টি-স্টপ রুট।" },
      { title: "অ্যানালিটিক্স", text: "কর্মক্ষম অন্তর্দৃষ্টি।" },
    ],
    cta: "ইজি ট্রাক আবিষ্কার করুন",
    dashboard: {
      title: "বহর নিয়ন্ত্রণ",
      metrics: [
        { k: "সক্রিয়", v: "৩১২" },
        { k: "সময়মতো", v: "৯৮%" },
        { k: "গড় গতি", v: "৬৪" },
      ],
    },
  },
  easyBrick: {
    overline: "ইজি ব্রিক",
    titleBefore: "অবকাঠামো — ",
    titleAccent: "প্রকৌশলে নির্মিত",
    body: "বুদ্ধিমান উপকরণ ব্যবস্থাপনা ও প্রকল্প ট্র্যাকিং — নির্মাণ সাইটকে সময়মতো ও বাজেটের ভেতরে রাখে।",
    features: [
      { title: "ইনভেন্টরি ব্যবস্থাপনা", text: "সব সাইটজুড়ে রিয়েল-টাইম স্টক।" },
      { title: "উপকরণ ট্র্যাকিং", text: "খনি থেকে নির্মাণস্থল পর্যন্ত।" },
      { title: "সাইট সমন্বয়", text: "ক্রু, ডেলিভারি ও টাইমলাইন।" },
      { title: "খরচ অপ্টিমাইজেশন", text: "অপচয় কমান, মার্জিন রক্ষা করুন।" },
    ],
    cta: "ইজি ব্রিক আবিষ্কার করুন",
    dashboard: {
      title: "প্রকল্প ট্র্যাকার",
      subtitle: "তৃতীয় প্রান্তিক · ১৪টি সক্রিয় সাইট",
      projectLabel: "হারবার ব্রিজ · ৮২% সম্পন্ন",
      rows: [
        { k: "উপকরণ সরবরাহ", v: 92 },
        { k: "সাইট প্রস্তুতি", v: 74 },
        { k: "বাজেট ব্যবহৃত", v: 61 },
      ],
      costLabel: "এই প্রান্তিকে সাশ্রয়",
      costValue: "২৪ লাখ টাকা",
      costDelta: "+১৮%",
    },
  },
  why: {
    overline: "কেন ইজি ভেঞ্চারস",
    titleBefore: "একটি ইকোসিস্টেমের ",
    titleAccent: "সুবিধা",
    cards: [
      { title: "উদ্ভাবন-চালিত", value: 4, suffix: "+", metric: "পণ্য ও সেবা" },
      { title: "বিশ্বস্ত দক্ষতা", value: 5, suffix: " বছর", metric: "শিল্প অভিজ্ঞতা" },
      { title: "শিল্প-শ্রেষ্ঠ প্রযুক্তি", value: 99, suffix: "%", metric: "প্ল্যাটফর্ম আপটাইম" },
      { title: "গ্রাহক-কেন্দ্রিক", value: 98, suffix: "%", metric: "গ্রাহক ধরে রাখা" },
    ],
  },
  testimonials: {
    overline: "গ্রাহকদের কণ্ঠ",
    titleBefore: "শিল্পনেতাদের ",
    titleAccent: "আস্থা",
    items: [
      { name: "আমেলিয়া হার্ট", company: "নর্থলাইন রিটেইল", quote: "ইজি ট্রাক আমাদের লাস্ট-মাইল খরচ প্রায় এক-তৃতীয়াংশ কমিয়েছে, ডেলিভারির সময়ও উন্নত হয়েছে। সত্যিকারের অংশীদার।" },
      { name: "রাজ মালহোত্রা", company: "এপেক্স কনস্ট্রাকশনস", quote: "ইজি ব্রিকের উপকরণ ট্র্যাকিং বছরের পর বছর যে সাইট বিলম্ব আমাদের ভোগাচ্ছিল, তা একেবারে দূর করেছে। নিখুঁত সমন্বয়।" },
      { name: "ক্লো বেনেট", company: "মেরিডিয়ান গ্রুপ", quote: "নেট্রো সিস্টেমস আমাদের ডেটা প্ল্যাটফর্ম নতুন করে তৈরি করেছে, এবং প্রভাব ছিল তাৎক্ষণিক। বিশ্বমানের ইঞ্জিনিয়ারিং।" },
      { name: "তোমাস ফেরেইরা", company: "ভোল্ট মোবিলিটি", quote: "পুরো ইজি ভেঞ্চারস ইকোসিস্টেম চমৎকারভাবে একসাথে মিলে যায়। এক দৃষ্টিভঙ্গি, নিখুঁত বাস্তবায়ন।" },
    ],
  },
  contact: {
    overline: "যোগাযোগ",
    titleBefore: "চলুন একসাথে গড়ি ",
    titleAccent: "আগামীর দিন",
    labels: { office: "প্রধান কার্যালয়", phone: "ফোন", email: "ইমেইল" },
    info: {
      address: "লেভেল ৬বি, সিলিকন টাওয়ার, হাই-টেক পার্ক, রাজশাহী ৬২০৩",
      phone: "01898-923559",
      email: "easyventuresofficial@gmail.com",
    },
  },
  footer: {
    description: "একটি বহুমুখী গ্রুপ — একটাই ইকোসিস্টেমে পরিবহন, অবকাঠামো ও প্রযুক্তির আগামী গড়ে তুলছে।",
    cols: [
      {
        title: "কোম্পানি",
        links: [
          ["আমাদের সম্পর্কে", "#mission"],
          ["মিশন", "#mission"],
          ["ভিশন", "#mission"],
          ["টিম", "#team"],
        ],
      },
      {
        title: "ব্র্যান্ডস",
        links: [
          ["ইজি ট্রাক", "https://easytruck.xyz"],
          ["ইজি ব্রিক", "https://easybricks.xyz"],
          ["নেত্র সিস্টেমস", "https://netrosystems.com"],
          ["ড্রিম বিল্ড সল্যুশন", null],
        ],
      },
    ],
    newsletterTitle: "সংযুক্ত থাকুন",
    copyright: "ইজি ভেঞ্চারস। সর্বস্বত্ব সংরক্ষিত।",
  },
};

const en = {
  langLabel: "English",
  otherLangLabel: "বাংলা",
  nav: [
    { label: "Brands", href: "#brands" },
    { label: "Transportation", href: "#transportation" },
    { label: "Vision", href: "#mission" },
    { label: "Team", href: "#team" },
    { label: "Culture", href: "#culture" },
    { label: "Contact", href: "#contact" },
  ],
  common: {
    contact: "Contact",
    learnMore: "Learn More",
    live: "Live",
    online: "Online",
    liveNetwork: "Connected nationwide—",
    citiesConnectedShort: "Bangladesh's only industrial transport",
  },
  hero: {
    overline: "The Easy Ventures Group",
    truckAlt: "A cargo truck travelling on a national highway in Bangladesh",
    headline: ["Building the Future of", "Transportation, Infrastructure", "& Technology"],
    sub: "Easy Ventures unites innovative companies transforming industries through logistics, construction, and digital excellence.",
    ctaExplore: "Explore Our Brands",
    ctaContact: "Contact Us",
    metrics: [
      { value: 3, suffix: "+", label: "Years of experience" },
      { value: 4, suffix: "", label: "Companies" },
      { value: 20, suffix: "+", label: "Team members" },
      { value: 1, suffix: "K+", label: "Projects delivered" },
    ],
  },
  marquee: ["Logistics", "Infrastructure", "Technology", "Innovation", "Reliability", "Growth"],
  brands: {
    overline: "Our Portfolio",
    titleBefore: "Brands Powering ",
    titleAccent: "Tomorrow",
    intro: "Four specialised companies, one shared standard of excellence. Scroll sideways to explore more brands.",
    scrollLabel: "Our brands",
    prevLabel: "Show previous brand",
    nextLabel: "Show next brand",
    items: {
      "easy-truck": {
        name: "Easy Truck",
        tag: "Logistics & Fleet",
        description: "A next-generation logistics platform — supplying trucks to industrial sectors nationwide and managing B2B logistics end-to-end.",
      },
      "easy-brick": {
        name: "Easy Brick",
        tag: "Construction Materials",
        description: "Supply management for bricks and other infrastructure-grade construction materials — standing with the people who build cities.",
      },
      "netro-systems": {
        name: "Netro Systems",
        tag: "Technology & Software",
        description: "Software development and automation experts — an industrial solutions provider engineered for scale.",
      },
      "dream-build-solution": {
        name: "Dream Build Solution",
        tag: "Construction Materials",
        description: "Supplying every material needed for personal and industrial construction projects.",
      },
    },
  },
  transport: {
    overline: "Shaping Transportation",
    titleBefore: "How we move the world ",
    titleAccent: "forward",
    features: [
      { title: "Smart Logistics", text: "Adaptive routing that reacts to traffic, weather and demand in real time." },
      { title: "Fleet Optimization", text: "Predictive maintenance and utilization analytics keep every vehicle productive." },
      { title: "Digital Tracking", text: "End-to-end visibility from warehouse to doorstep with live telemetry." },
      { title: "AI-Powered Operations", text: "Machine learning forecasts demand and automates dispatch decisions." },
      { title: "Sustainable Transport", text: "Electrified fleets and carbon-aware routing for a cleaner supply chain." },
    ],
    timeline: [
      "2007 — Founded as a regional freight operator",
      "2015 — Digital tracking platform launched",
      "2021 — AI dispatch & electrified fleet",
      "2025 — 140 cities, one connected network",
    ],
  },
  mission: {
    overline: "Purpose",
    titleBefore: "Driven by mission. ",
    titleAccent: "Guided by vision.",
    mission: {
      overline: "Our Mission",
      title: "Simplify industries through innovation",
      text: "Our mission is to simplify industries through innovation, efficiency, and technology — removing friction wherever things are built, moved, or connected.",
    },
    vision: {
      overline: "Our Vision",
      title: "The ecosystem powering the future",
      text: "To become the leading ecosystem powering the future of transportation, construction, and digital transformation across the regions we serve.",
    },
  },
  leadership: {
    overline: "Leadership",
    titleBefore: "Meet the people behind ",
    titleAccent: "Easy Ventures",
    scrollLabel: "Easy Ventures team",
    prevLabel: "Show previous team member",
    nextLabel: "Show next team member",
    leaders: [
      { name: "Md. Kamrul Hasan", role: "Chairman" },
      { name: "Engr. Ariful Haque Jockey", role: "Managing Director" },
      { name: "Asiq Mohammed", role: "Chief Technology Officer" },
      { name: "Md. Alamgir Hossain", role: "Head of Sales" },
      { name: "Mahmuda Hasan", role: "Head of Branding" },
      { name: "Md. Nahid Hossen", role: "Logistics Coordinator" },
      { name: "Mohammad Inzamam", role: "Logistics Supervisor" },
      { name: "Tanisha Zaman", role: "Transport Coordinator" },
      { name: "Mohiduddin Masum", role: "Transport Coordinator" },
      { name: "Tanjila Parvin", role: "Transport Coordinator" },
    ],
  },
  culture: {
    overline: "Office & Culture",
    titleBefore: "We believe great companies are built by ",
    titleAccent: "great people",
    alts: [
      "Easy Truck team",
      "Office planning session",
      "Leadership discussion",
      "Team jersey reveal",
      "Easy Truck brand celebration",
      "A special team moment",
      "Presentation and workshop",
      "Team celebration",
      "Strategic office discussion",
    ],
  },
  easyTruck: {
    overline: "Easy Truck",
    titleBefore: "Logistics, ",
    titleAccent: "reimagined",
    body: "Real-time fleet intelligence, route optimization and driver management in one command center.",
    features: [
      { title: "Fleet monitoring", text: "Every vehicle, one live map." },
      { title: "Driver management", text: "Schedules, safety and scoring." },
      { title: "Route planning", text: "Optimized multi-stop routing." },
      { title: "Analytics", text: "Actionable operational insight." },
    ],
    cta: "Discover Easy Truck",
    dashboard: {
      title: "Fleet Control",
      metrics: [
        { k: "Active", v: "312" },
        { k: "On-time", v: "98%" },
        { k: "Avg speed", v: "64" },
      ],
    },
  },
  easyBrick: {
    overline: "Easy Brick",
    titleBefore: "Infrastructure, ",
    titleAccent: "engineered",
    body: "Intelligent material management and project tracking that keep construction sites on time and on budget.",
    features: [
      { title: "Inventory management", text: "Real-time stock across sites." },
      { title: "Material tracking", text: "From quarry to construction." },
      { title: "Site coordination", text: "Crews, deliveries and timelines." },
      { title: "Cost optimization", text: "Reduce waste, protect margins." },
    ],
    cta: "Discover Easy Brick",
    dashboard: {
      title: "Project Tracker",
      subtitle: "Q3 · 14 active sites",
      projectLabel: "Harbour Bridge · 82% complete",
      rows: [
        { k: "Materials delivered", v: 92 },
        { k: "Site readiness", v: 74 },
        { k: "Budget utilized", v: 61 },
      ],
      costLabel: "Cost saved this quarter",
      costValue: "BDT 2.4M",
      costDelta: "+18%",
    },
  },
  why: {
    overline: "Why Easy Ventures",
    titleBefore: "The advantage of an ",
    titleAccent: "ecosystem",
    cards: [
      { title: "Innovation-driven", value: 4, suffix: "+", metric: "Products & services" },
      { title: "Trusted expertise", value: 5, suffix: " years", metric: "Industry experience" },
      { title: "Industry-leading tech", value: 99, suffix: "%", metric: "Platform uptime" },
      { title: "Customer-centric", value: 98, suffix: "%", metric: "Client retention" },
    ],
  },
  testimonials: {
    overline: "Client Voices",
    titleBefore: "Trusted by industry ",
    titleAccent: "leaders",
    items: [
      { name: "Amelia Hart", company: "Northline Retail", quote: "Easy Truck cut our last-mile costs by a third while improving delivery windows. A genuine partner." },
      { name: "Raj Malhotra", company: "Apex Constructions", quote: "Easy Brick's material tracking eliminated site delays we'd fought for years. Flawless coordination." },
      { name: "Chloe Bennett", company: "Meridian Group", quote: "Netro Systems rebuilt our data platform and the impact was immediate. World-class engineering." },
      { name: "Tomas Ferreira", company: "Volt Mobility", quote: "The whole Easy Ventures ecosystem just fits together. One vision, executed with precision." },
    ],
  },
  contact: {
    overline: "Get in touch",
    titleBefore: "Let's build the ",
    titleAccent: "future together",
    labels: { office: "Head office", phone: "Phone", email: "Email" },
    info: {
      address: "Level 6B, Silicon Tower, Hi Tech Park, Rajshahi 6203",
      phone: "01898-923559",
      email: "easyventuresofficial@gmail.com",
    },
  },
  footer: {
    description: "A diversified group shaping the future of transportation, infrastructure, and technology under one ecosystem.",
    cols: [
      {
        title: "Company",
        links: [["About Us", "#mission"], ["Mission", "#mission"], ["Vision", "#mission"], ["Team", "#team"]],
      },
      {
        title: "Brands",
        links: [
          ["Easy Truck", "https://easytruck.xyz"],
          ["Easy Brick", "https://easybricks.xyz"],
          ["Netro Systems", "https://netrosystems.com"],
          ["Dream Build Solution", null],
        ],
      },
    ],
    newsletterTitle: "Stay in the loop",
    copyright: "Easy Ventures. All rights reserved.",
  },
};

// Static, language-agnostic mapping — icons/colors/images/URLs shared across languages
export const BRANDS_STATIC = [
  { id: "easy-truck", icon: "Truck", image: "/brand-easy-truck.jpg", accent: "#0066FF", url: "https://easytruck.xyz", bg: "#F7D95C" },
  { id: "easy-brick", icon: "Building2", image: "/brand-easy-brick.jpg", accent: "#FF5A00", url: "https://easybricks.xyz", bg: "#F5A97A" },
  { id: "netro-systems", icon: "Cpu", image: "/brand-netro.jpg", accent: "#0066FF", url: "https://netrosystems.com", bg: "#B7BEFB" },
  { id: "dream-build-solution", icon: "HardHat", image: "/brand-dream-build-solution.png", accent: "#B88624", bg: "#101D30" },
];

export const TRANSPORT_FEATURE_ICONS = ["Route", "Gauge", "Satellite", "BrainCircuit", "Leaf"];
export const TRUCK_FEATURE_ICONS = ["MapPinned", "IdCard", "Route", "BarChart3"];
export const BRICK_FEATURE_ICONS = ["Boxes", "PackageSearch", "HardHat", "PiggyBank"];
export const WHY_ICONS = ["Lightbulb", "ShieldCheck", "Cpu", "HeartHandshake"];

export const LEADER_ASSETS = [
  "/team/01-md-kamrul-hasan.png",
  "/team/02-ariful-haque-jockey.png",
  "/team/03-asiq-mohammed.png",
  "/team/04-md-alamgir-hossain.png",
  "/team/05-mahmuda-hasan.png",
  "/team/06-md-nahid-hossen.png",
  "/team/07-mohammad-inzamam.png",
  "/team/08-tanisha-zaman.png",
  "/team/09-mohiduddin-masum.png",
  "/team/10-tanjila-parvin.png",
];
export const TESTIMONIAL_IMAGES = [LEADER_IMAGES[1], LEADER_IMAGES[0], LEADER_IMAGES[3], LEADER_IMAGES[2]];

export const CULTURE_TILES = [
  { src: "/culture/20251226_163810.jpg", span: "md:col-span-2 md:row-span-2", position: "center" },
  { src: "/culture/20260424_110420.jpg", span: "md:col-span-2", position: "center" },
  { src: "/culture/20260424_131309.jpg", span: "md:row-span-2", position: "center" },
  { src: "/culture/20251225_201808.jpg", span: "", position: "center" },
  { src: "/culture/20260424_180352.jpg", span: "md:col-span-2", position: "center" },
  { src: "/culture/20251226_152143.jpg", span: "md:row-span-2", position: "center" },
  { src: "/culture/20260424_110738.jpg", span: "md:col-span-2", position: "center" },
  { src: "/culture/20251226_152701.jpg", span: "md:row-span-2", position: "center" },
  { src: "/culture/20260424_113930.jpg", span: "md:col-span-2", position: "center" },
];

const dictionaries = { bn, en };
export default dictionaries;
