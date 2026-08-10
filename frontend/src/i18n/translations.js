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
    liveNetwork: "লাইভ নেটওয়ার্ক",
    citiesConnectedShort: "১৪০টি শহর সংযুক্ত",
  },
  hero: {
    overline: "ইজি ভেঞ্চারস গ্রুপ",
    headline: ["গড়ছি আগামীর", "পরিবহন, অবকাঠামো", "ও প্রযুক্তি"],
    sub: "ইজি ভেঞ্চারস একত্র করেছে সেই উদ্ভাবনী প্রতিষ্ঠানগুলোকে — যারা লজিস্টিকস, নির্মাণ ও ডিজিটাল দক্ষতায় শিল্পকে বদলে দিচ্ছে।",
    ctaExplore: "আমাদের ব্র্যান্ড দেখুন",
    ctaContact: "যোগাযোগ করুন",
    metrics: [
      { value: 18, suffix: "+", label: "বছরের অভিজ্ঞতা" },
      { value: 6, suffix: "টি", label: "প্রতিষ্ঠান" },
      { value: 2400, suffix: "+", label: "টিম সদস্য" },
      { value: 12, suffix: " হাজার+", label: "সম্পন্ন প্রকল্প" },
    ],
  },
  marquee: ["লজিস্টিকস", "অবকাঠামো", "প্রযুক্তি", "উদ্ভাবন", "নির্ভরযোগ্যতা", "প্রবৃদ্ধি"],
  brands: {
    overline: "আমাদের পোর্টফোলিও",
    titleBefore: "আগামীর শক্তি — ",
    titleAccent: "আমাদের ব্র্যান্ড",
    intro: "তিনটি বিশেষায়িত প্রতিষ্ঠান, এক অভিন্ন উৎকর্ষের মানদণ্ড। প্রতিটি কার্ডে ট্যাপ করে জানুন প্রতিটি ব্র্যান্ডের গল্প।",
    items: {
      "easy-truck": {
        name: "ইজি ট্রাক",
        tag: "লজিস্টিকস ও বহর",
        description: "পরবর্তী প্রজন্মের লজিস্টিকস প্ল্যাটফর্ম — মহাদেশজুড়ে বহর, রুট ও রিয়েল-টাইম ডেলিভারি অপ্টিমাইজ করছে।",
        points: ["বহর মনিটরিং", "রুট অপ্টিমাইজেশন", "লাইভ ট্র্যাকিং"],
      },
      "easy-brick": {
        name: "ইজি ব্রিক",
        tag: "নির্মাণ উপকরণ",
        description: "অবকাঠামো-মানের উপকরণ ও বুদ্ধিমান সরবরাহ ব্যবস্থাপনা — শহর যারা গড়ছে, তাদের পাশে।",
        points: ["উপকরণ ট্র্যাকিং", "সাইট সমন্বয়", "খরচ অপ্টিমাইজেশন"],
      },
      "netro-systems": {
        name: "নেট্রো সিস্টেমস",
        tag: "প্রযুক্তি ও সফটওয়্যার",
        description: "গ্রুপের ডিজিটাল রূপান্তরের ইঞ্জিন — এন্টারপ্রাইজ স্কেলে সফটওয়্যার, ডেটা ও এআই তৈরি করছে।",
        points: ["ক্লাউড প্ল্যাটফর্ম", "ডেটা ও এআই", "এন্টারপ্রাইজ সফটওয়্যার"],
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
    stats: [
      { value: 4.8, decimals: 1, suffix: " কোটি", label: "মাইল অতিক্রান্ত" },
      { value: 90, suffix: " লাখ", label: "সম্পন্ন ডেলিভারি" },
      { value: 850, suffix: "+", label: "অংশীদার ব্যবসা" },
      { value: 140, suffix: "", label: "সংযুক্ত শহর" },
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
    seeFull: "সম্পূর্ণ টিম দেখুন",
    toastTitle: "সম্পূর্ণ টিম ডিরেক্টরি শীঘ্রই আসছে",
    toastDesc: "আমরা ২,৪০০+ প্রোফাইল প্রস্তুত করছি।",
    leaders: [
      { name: "মার্কাস ভেল", role: "প্রতিষ্ঠাতা ও গ্রুপ সিইও", bio: "তিনটি মহাদেশজুড়ে দুই দশক ধরে লজিস্টিকস ও অবকাঠামো ভেঞ্চার গড়ে তুলেছেন।" },
      { name: "এলেনা রোডস", role: "চিফ অপারেটিং অফিসার", bio: "উচ্চাভিলাষী কৌশলকে দৈনন্দিন বাস্তবায়নে রূপ দেন — অপারেশন ও সংস্কৃতির স্কেলিংয়ে অগ্রণী।" },
      { name: "ডেভিড ওকাফর", role: "চিফ টেকনোলজি অফিসার", bio: "নেট্রো সিস্টেমস এবং গ্রুপের ডেটা, ক্লাউড ও এআই প্ল্যাটফর্মের নেতৃত্বে।" },
      { name: "সোফিয়া মারিন", role: "চিফ ফাইনান্সিয়াল অফিসার", bio: "পোর্টফোলিওজুড়ে সুশৃঙ্খল প্রবৃদ্ধি ও দীর্ঘমেয়াদি মূল্য গঠনের কাণ্ডারি।" },
    ],
  },
  culture: {
    overline: "অফিস ও সংস্কৃতি",
    titleBefore: "আমরা বিশ্বাস করি — মহান প্রতিষ্ঠান গড়ে ওঠে ",
    titleAccent: "মহান মানুষদের হাতে",
    alts: ["কর্পোরেট আর্কিটেকচার টিম", "সহকর্মীদের সহযোগিতা", "মাঠপর্যায়ে অপারেশন", "ল্যাপটপ ঘিরে টিম", "অবকাঠামো প্রকল্প", "হাইওয়ে লজিস্টিকস"],
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
      costValue: "২.৪ মিলিয়ন ডলার",
      costDelta: "+১৮%",
    },
  },
  why: {
    overline: "কেন ইজি ভেঞ্চারস",
    titleBefore: "একটি ইকোসিস্টেমের ",
    titleAccent: "সুবিধা",
    cards: [
      { title: "উদ্ভাবন-চালিত", value: 240, suffix: "+", metric: "পেটেন্ট ও পণ্য" },
      { title: "বিশ্বস্ত দক্ষতা", value: 18, suffix: " বছর", metric: "শিল্প অভিজ্ঞতা" },
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
      address: "ইজি ভেঞ্চারস প্রধান কার্যালয়, ৮৮ হারবার এভিনিউ, দুবাই, ইউএই",
      phone: "+৯৭১ ৪ ০০০ ০০০০",
      email: "hello@easyventures.com",
    },
    form: {
      fullName: "পুরো নাম *",
      company: "প্রতিষ্ঠান",
      email: "ইমেইল *",
      phone: "ফোন",
      subject: "বিষয়",
      message: "বার্তা *",
      fullNamePh: "জেন ডো",
      companyPh: "একমি ইনক.",
      emailPh: "jane@acme.com",
      phonePh: "+৮৮০ ১৭০০ ০০০০০০",
      subjectPh: "কীভাবে সাহায্য করতে পারি?",
      messagePh: "আপনার প্রকল্প সম্পর্কে বলুন...",
      submit: "বার্তা পাঠান",
      sending: "পাঠানো হচ্ছে...",
      successMsg: "ধন্যবাদ! আপনার বার্তা আমরা পেয়েছি।",
      requiredErr: "অনুগ্রহ করে নাম, ইমেইল ও বার্তা লিখুন।",
      genericErr: "কিছু একটা ভুল হয়েছে। আবার চেষ্টা করুন।",
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
          ["ইজি ট্রাক", "#easy-truck"],
          ["ইজি ব্রিক", "#easy-brick"],
          ["নেট্রো সিস্টেমস", "#brands"],
        ],
      },
    ],
    newsletterTitle: "সংযুক্ত থাকুন",
    newsletterPh: "আপনার ইমেইল",
    newsletterEmptyErr: "অনুগ্রহ করে ইমেইল লিখুন।",
    newsletterSuccess: "সাবস্ক্রাইব সম্পন্ন! ইনবক্স দেখুন।",
    newsletterGenericErr: "সাবস্ক্রিপশন ব্যর্থ হয়েছে। আবার চেষ্টা করুন।",
    copyright: "ইজি ভেঞ্চারস। সর্বস্বত্ব সংরক্ষিত।",
    privacy: "প্রাইভেসি পলিসি",
    terms: "শর্তাবলী",
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
    liveNetwork: "Live network",
    citiesConnectedShort: "140 cities connected",
  },
  hero: {
    overline: "The Easy Ventures Group",
    headline: ["Building the Future of", "Transportation, Infrastructure", "& Technology"],
    sub: "Easy Ventures unites innovative companies transforming industries through logistics, construction, and digital excellence.",
    ctaExplore: "Explore Our Brands",
    ctaContact: "Contact Us",
    metrics: [
      { value: 18, suffix: "+", label: "Years of excellence" },
      { value: 6, suffix: "", label: "Companies under Easy Ventures" },
      { value: 2400, suffix: "+", label: "Team members" },
      { value: 12, suffix: "K", label: "Projects delivered" },
    ],
  },
  marquee: ["Logistics", "Infrastructure", "Technology", "Innovation", "Reliability", "Growth"],
  brands: {
    overline: "Our Portfolio",
    titleBefore: "Brands Powering ",
    titleAccent: "Tomorrow",
    intro: "Three specialised companies, one shared standard of excellence. Tap a card to explore what each brand delivers.",
    items: {
      "easy-truck": {
        name: "Easy Truck",
        tag: "Logistics & Fleet",
        description: "A next-generation logistics platform optimizing fleets, routes, and real-time delivery across continents.",
        points: ["Fleet monitoring", "Route optimization", "Live tracking"],
      },
      "easy-brick": {
        name: "Easy Brick",
        tag: "Construction Materials",
        description: "Infrastructure-grade materials and intelligent supply management powering the projects that shape cities.",
        points: ["Material tracking", "Site coordination", "Cost optimization"],
      },
      "netro-systems": {
        name: "Netro Systems",
        tag: "Technology & Software",
        description: "The digital transformation engine of the group — building software, data, and AI for enterprise scale.",
        points: ["Cloud platforms", "Data & AI", "Enterprise software"],
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
    stats: [
      { value: 48, suffix: "M", label: "Miles covered" },
      { value: 9, suffix: "M", label: "Deliveries completed" },
      { value: 850, suffix: "+", label: "Partner businesses" },
      { value: 140, suffix: "", label: "Cities connected" },
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
    seeFull: "See Full Team",
    toastTitle: "Full team directory coming soon",
    toastDesc: "We're preparing 2,400+ profiles.",
    leaders: [
      { name: "Marcus Vale", role: "Founder & Group CEO", bio: "Two decades building logistics and infrastructure ventures across three continents." },
      { name: "Elena Rhodes", role: "Chief Operating Officer", bio: "Scales operations and culture, turning ambitious strategy into daily execution." },
      { name: "David Okafor", role: "Chief Technology Officer", bio: "Leads Netro Systems and the group's data, cloud and AI platforms." },
      { name: "Sofia Marin", role: "Chief Financial Officer", bio: "Steward of disciplined growth and long-term value across the portfolio." },
    ],
  },
  culture: {
    overline: "Office & Culture",
    titleBefore: "We believe great companies are built by ",
    titleAccent: "great people",
    alts: ["Corporate architecture team", "Team collaborating", "Field operations", "Team around laptop", "Infrastructure project", "Highway logistics"],
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
      costValue: "$2.4M",
      costDelta: "+18%",
    },
  },
  why: {
    overline: "Why Easy Ventures",
    titleBefore: "The advantage of an ",
    titleAccent: "ecosystem",
    cards: [
      { title: "Innovation-driven", value: 240, suffix: "+", metric: "Patents & products" },
      { title: "Trusted expertise", value: 18, suffix: "yrs", metric: "Industry experience" },
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
      address: "Easy Ventures HQ, 88 Harbour Avenue, Dubai, UAE",
      phone: "+971 4 000 0000",
      email: "hello@easyventures.com",
    },
    form: {
      fullName: "Full name *",
      company: "Company",
      email: "Email *",
      phone: "Phone",
      subject: "Subject",
      message: "Message *",
      fullNamePh: "Jane Doe",
      companyPh: "Acme Inc.",
      emailPh: "jane@acme.com",
      phonePh: "+1 000 000 0000",
      subjectPh: "How can we help?",
      messagePh: "Tell us about your project...",
      submit: "Send Message",
      sending: "Sending...",
      successMsg: "Thank you! Your message has been received.",
      requiredErr: "Please fill in your name, email and message.",
      genericErr: "Something went wrong. Please try again.",
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
        links: [["Easy Truck", "#easy-truck"], ["Easy Brick", "#easy-brick"], ["Netro Systems", "#brands"]],
      },
    ],
    newsletterTitle: "Stay in the loop",
    newsletterPh: "Your email",
    newsletterEmptyErr: "Please enter your email.",
    newsletterSuccess: "Subscribed! Check your inbox.",
    newsletterGenericErr: "Subscription failed. Try again.",
    copyright: "Easy Ventures. All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms & Conditions",
  },
};

// Static, language-agnostic mapping — icons/colors/images shared across languages
export const BRANDS_STATIC = [
  { id: "easy-truck", icon: "Truck", image: IMAGES.truck, accent: "#0066FF" },
  { id: "easy-brick", icon: "Building2", image: IMAGES.bridge, accent: "#FF5A00" },
  { id: "netro-systems", icon: "Cpu", image: IMAGES.officeC, accent: "#0066FF" },
];

export const TRANSPORT_FEATURE_ICONS = ["Route", "Gauge", "Satellite", "BrainCircuit", "Leaf"];
export const TRUCK_FEATURE_ICONS = ["MapPinned", "IdCard", "Route", "BarChart3"];
export const BRICK_FEATURE_ICONS = ["Boxes", "PackageSearch", "HardHat", "PiggyBank"];
export const WHY_ICONS = ["Lightbulb", "ShieldCheck", "Cpu", "HeartHandshake"];

export const LEADER_ASSETS = LEADER_IMAGES;
export const TESTIMONIAL_IMAGES = [LEADER_IMAGES[1], LEADER_IMAGES[0], LEADER_IMAGES[3], LEADER_IMAGES[2]];

export const CULTURE_TILES = [
  { src: IMAGES.officeA, span: "md:col-span-2 md:row-span-2" },
  { src: IMAGES.officeB, span: "" },
  { src: IMAGES.truck, span: "" },
  { src: IMAGES.officeC, span: "md:col-span-2" },
  { src: IMAGES.bridge, span: "" },
  { src: IMAGES.heroParallax, span: "" },
];

export const SOCIALS = [
  { label: "LinkedIn", icon: "Linkedin", href: "#" },
  { label: "X", icon: "Twitter", href: "#" },
  { label: "Instagram", icon: "Instagram", href: "#" },
];

const dictionaries = { bn, en };
export default dictionaries;
