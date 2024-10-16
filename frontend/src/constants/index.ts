import { profile, yourLogo } from "../assets";

export const navigation = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "Services",
    href: "#services",
  },
  {
    id: 3,
    name: "Reviews",
    href: "#reviews",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
  {
    id: 5,
    name: "Portfolio",
    href: "/portfolio",
  },
];
export const FAQs = [
  {
    question: "What exactly are mobile proxies?",
    answer:
      "Mobile proxies are specialized proxies that utilize IP addresses assigned by mobile ISPs (Internet Service Providers). They route your internet traffic through mobile networks, such as 3G, 4G, or 5G. These proxies enhance anonymity, as mobile IPs are shared among numerous users and change frequently, making them less susceptible to being flagged or blocked by websites compared to traditional static IP proxies.",
  },
  {
    question: "What advantages do mobile proxies offer?",
    answer:
      "Mobile proxies provide a host of benefits, including heightened anonymity, enhanced online security, and privacy protection. With PowerProxies mobile proxies, you can easily bypass geo-restrictions, accessing content from various locations without hassle.",
  },
  {
    question: "Why is there a surge in proxy usage?",
    answer:
      "Mobile proxies are gaining popularity because they use real IPv6/IPv4 addresses from actual mobile devices (smartphones and tablets) to route traffic. This makes them highly effective at evading sophisticated bot-blocking methods. You can scrape public data seamlessly without interruptions from CAPTCHAs or other verification processes. Plus, you can test all PowerProxies features for just $1.99 before committing to a paid plan.",
  },
  {
    question: "What can I accomplish with mobile proxy servers?",
    answer:
      "Mobile proxies are versatile tools, commonly used for social media management, ad verification, web scraping, and bypassing geo-restrictions. They also allow you to conduct market research by gathering high-quality data from different regions, comparing prices across various e-commerce sites, and ensuring your ads appear correctly.",
  },
  {
    question: "How do 3G, 4G, 5G, and LTE proxies differ?",
    answer:
      "3G proxies operate on the third generation of mobile telecommunications, providing moderate speeds but less commonly used today. 4G proxies deliver faster speeds and improved reliability, while 5G proxies, the latest technology, offer significantly higher speeds and lower latency for high-bandwidth applications. LTE proxies, often associated with 4G, deliver better performance than 3G but may not always meet the full 4G standards. Each proxy type varies in speed and connectivity, with newer generations typically outperforming the previous ones.",
  },
  {
    question: "How extensive is PowerProxies' global proxy network?",
    answer:
      "PowerProxies boasts a comprehensive global proxy network with access to over 195 countries. Our top locations include the USA, UK, Germany, Brazil, Canada, Indonesia, Russia, India, Ukraine, and Australia. When using PowerProxies mobile proxies, you can select specific locations down to the country or city level. Please note, however, that due to regulatory complexities, we currently do not offer proxy servers within the State of Texas.",
  },
  {
    question: "Can you explain your IP rotation system?",
    answer:
      "Absolutely! Our IP rotation system offers three modes to suit your needs: \n\n1. **Same IP up to Rotation**: Use the same IP for a set duration, provided it stays online. If it goes offline, a new IP is automatically assigned. \n2. **Hold IP if Connection Lost (Sticky IP)**: This feature allows you to maintain your IP for a designated time, even if you briefly lose connection, ensuring continuity. \n3. **Rotating - New IP on Each Request**: Get a new IP for every request you make, ensuring high anonymity and security with each new website or page accessed."
  }
];

export const clientReviews = [
  {
    id: 1,
    name: "Emily Johnson",
    position: "CEO, Streamline Ventures",
    img: profile,
    review:
      "Using this mobile proxy service was a game-changer for our business. Fast, reliable, and easy to use. It’s allowed us to scale our operations without any speed drops or interruptions. Couldn’t ask for better performance!",
  },
  {
    id: 2,
    name: "Michael Lee",
    position: "Marketing Manager, AdSavvy",
    img: profile,
    review:
      "The mobile proxies provided excellent speeds for all our ad verification tasks. We never faced any downtime, and the customer support was quick and helpful. Definitely recommend for businesses needing a solid proxy solution!",
  },
  {
    id: 3,
    name: "Sophia Davis",
    position: "Owner, DataPulse Analytics",
    img: profile,
    review:
      "As a data analyst, I rely on consistent, secure proxies, and this service delivered beyond my expectations. The mobile proxies are fast, and the dashboard is super intuitive. It made my job so much easier!",
  },
  {
    id: 4,
    name: "David Wilson",
    position: "CTO, NetSolutions Inc.",
    img: profile,
    review:
      "This mobile proxy service has been the backbone of our network testing. The reliability and speed are unmatched, and the custom proxy options have been perfect for our enterprise-level needs. Highly recommend for any tech-driven business!",
  },
];

export const companyLogos = [yourLogo, yourLogo, yourLogo, yourLogo, yourLogo];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "Mobile proxy, unlimited browsing, AI suggestions",
    price: "1",
    perTime: "day",
    features: [
      "Access to mobile proxy with no cost",
      "Unlimited browsing for casual users",
      "AI-powered suggestions based on your network usage",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "High-speed proxy, advanced analytics, priority support",
    price: "9.99",
    perTime: "week",
    features: [
      "High-speed mobile proxies for fast and secure browsing",
      "Advanced analytics dashboard to monitor proxy usage",
      "Priority support to handle any issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom proxies, dedicated support, unlimited data",
    price: "30", // custom pricing for enterprises
    perTime: "month",
    features: [
      "Custom mobile proxy setup tailored for your business",
      "Dedicated account manager for personalized support",
      "Unlimited data usage with advanced analytics and reporting",
    ],
  },
];
