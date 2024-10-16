import { ReactNode } from "react";
import {
  captcha,
  ccpa,
  gdpr,
  highSpeed,
  ipRotation,
  iso,
  mobileProxies,
} from "../assets";
import FeatureItem from "../components/FeatureItem";
import Section from "../components/Section";
import Heading from "../components/Heading";

const Features = () => {
  return (
    // <div className="min-h-screen pb-9 relative">
    <Section className="overflow-hidden" id="features">
      <div className="absolute  inset-0 bg-gradient-to-r from-blue-500 via-pink-500 to-green-500 opacity-5 blur-2xl z-0" />
      <div className="headlines text-center">
        <Heading tag="Features" title="What do we offer for you guys!" />
      </div>

      {/* feature item */}
      {featureItemData.map((item, index) => (
        <FeatureItem
          btnColor={item.btnColor}
          title={item.title}
          desc={item.desc}
          image={item.image}
          multiImg={item.multiImg}
          divForMulti={item.divForMulti}
          right={index % 2 === 0}
        />
      ))}
    </Section>
  );
};

export default Features;

interface featureItemProps {
  image?: string;
  title?: string;
  divForMulti?: ReactNode;
  multiImg?: boolean;
  desc?: string;
  btnColor?: string;
}
const featureItemData: featureItemProps[] = [
  {
    image: mobileProxies,
    title: "Global Mobile Proxy Network",
    desc: "Unlock access to a vast network of over 33 million mobile proxies across 190+ countries, providing unmatched global reach and versatility for all your scraping and automation needs. Whether you’re targeting localized content or scaling your operations worldwide, our proxies deliver reliable, fast connections from diverse geolocations, ensuring you stay ahead of the competition and overcome geographic restrictions effortlessly.",
    btnColor: "#4CAF50", // Green
  },
  {
    multiImg: true,
    divForMulti: (
      <div className="flex  justify-center">
        <img src={ccpa} alt="CCPA Compliance" />
        <img src={iso} className="-mt-20" alt="ISO Certification" />
        <img src={gdpr} alt="GDPR Compliance" />
      </div>
    ),
    title: "100% Ethically Sourced IPs",
    desc: "We prioritize ethical sourcing, ensuring that every mobile IP address within our network is obtained through legal and transparent means. This not only guarantees compliance with local regulations but also ensures high-quality, authentic user-like connections, giving you the peace of mind to focus on your operations while maintaining the highest standards of privacy and security across the globe.",
    btnColor: "#FF5733", // Orange
  },
  {
    image: captcha,
    title: "Effortlessly Evade CAPTCHAs and Detection",
    desc: "Our proxy network is specifically engineered to bypass even the most sophisticated CAPTCHA challenges and bot detection systems. By mimicking natural user behavior, our proxies enable you to scrape and automate without interruptions, ensuring consistent access to data without getting flagged or blocked. With advanced anti-bot measures, you can execute high-volume tasks while staying under the radar.",
    btnColor: "#FFC300", // Yellow
  },
  {
    multiImg: true,
    divForMulti: (
      <div className="flex  justify-center">
        <img src={highSpeed} className="w-60 object-contain" alt="high speed" />
      </div>
    ),
    title: "99.5% Success Rate for Maximum Reliability",
    desc: "Experience the industry-leading performance of our proxies, boasting a remarkable 99.5% success rate. With near-instant response times and unparalleled uptime, our network ensures your scraping, crawling, and automation projects operate smoothly and efficiently. Whether you're conducting real-time data collection or large-scale web scraping, rely on our proxies to maintain high-performance standards.",
    btnColor: "#900C3F", // Dark Red
  },
  {
    image: ipRotation,
    title: "Seamless IP Rotation for Enhanced Anonymity",
    desc: "Our dynamic IP rotation feature allows you to change IP addresses automatically, preventing IP bans and boosting your anonymity online. This provides you with the flexibility to scrape large amounts of data over an extended period while maintaining a low profile. Say goodbye to manual rotations and embrace smooth, uninterrupted access to your target sites, regardless of their anti-scraping measures.",
    btnColor: "#28A745", // Light Green
  },
];
