import { yourLogo } from "../assets";

  export const navigation = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'Services',
      href: '#services',
    },
    {
      id: 3,
      name: 'Reviews',
      href: '#reviews',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
    {
      id: 5,
      name: 'Portfolio',
      href: '/portfolio',
    },
  ];
  export const clientReviews = [
    {
      id: 1,
      name: 'Sarah Thompson',
      position: 'Creative Director, PixelWave Studio',
      img: 'assets/review1.png',
      review:
        'Working with CrumbLab on our logo design and brand guidelines was a seamless experience. They not only understood our vision but elevated it, delivering stunning designs that reflect our brand perfectly. Their professionalism and eye for detail made the entire process a breeze!',
    },
    {
      id: 2,
      name: 'James Martinez',
      position: 'Owner, SocialBoost Agency',
      img: 'assets/review2.png',
      review:
        'CrumbLab completely transformed our social media presence! The banners and product posts they designed were spot-on with our branding. Their ability to blend creativity with our brand voice helped us stand out across all digital platforms. Absolutely recommend them!',
    },
    {
      id: 3,
      name: 'Linda Carter',
      position: 'Founder, BrightFocus Marketing',
      img: 'assets/review3.png',
      review:
        'CrumbLab’s SEO optimization and schema markup services were game changers for us. Our website’s performance and rankings saw significant improvements almost immediately. The team is incredibly skilled, responsive, and truly invested in helping us succeed.',
    },
    {
      id: 4,
      name: 'Daniel Clark',
      position: 'CEO, MotionPlus Media',
      img: 'assets/review4.png',
      review:
        'The CrumbLab team took our video content to the next level. Their video editing and marketing video services were phenomenal, turning our footage into a polished final product that resonated with our audience. Their attention to detail and creative vision were unmatched!',
    },
    {
      id: 5,
      name: 'McQueens Bargain',
      position: 'Company',
      img: 'assets/review5.jpg',
      review:
        'CrumbLab did an amazing job designing our new logo. They took our vision and turned it into a simple, yet impactful design that truly represents our brand. We couldn’t be happier with the final result!',
    },
    {
      id: 6,
      name: 'ListLeap',
      position: 'Company',
      img: 'assets/review6.jpg',
      review:
        'CrumbLab nailed both our logo and website design! They created a fresh, modern look that perfectly aligns with our brand. Their attention to detail and creativity made all the difference, and we love how everything turned out.',
    },
  ];
  export const companyLogos = [yourLogo, yourLogo, yourLogo, yourLogo, yourLogo];


export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];
