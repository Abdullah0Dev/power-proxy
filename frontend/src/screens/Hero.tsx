import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { g5Proxy } from "../assets";
import CompanyLogos from "../components/CompanyLogos";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import CustomButton from "../components/CustomButton";

type Props = {};

const Hero = (props: Props) => {
  return (
    <>
      <div className="relative flex justify-between py-9 px-9 items-center">
        {/* Awesome gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-pink-500 to-green-500 opacity-20 blur-2xl z-0" /> 

        {/* Content on top of gradient */}
        <div className="relative z-10 pt-16 head-text w-3/5 text-white">
          <h1>Unlock the Internet with Fast & Secure Mobile Proxies</h1>
          <h3 className="text-sm font-normal">
            Scrape public data without interruptions from CAPTCHAs or blocks,
            manage multiple social media accounts, and verify ads with fast and
            reliable mobile proxies.
          </h3>
          <div className="flex flex-col  items-start mt-7">
            <div className="flex items-center gap-x-2">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-xl"
                color="#22c55e"
              />
              <h5 className="text-sm leading-7">99.55% proxy success rate</h5>
            </div>
            <div className="flex items-center gap-x-2">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-xl"
                color="#22c55e"
              />
              <h5 className="text-sm leading-7">
                195+ countries included with city and carrier-level targeting
              </h5>
            </div>
            <div className="flex items-center gap-x-2">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-xl"
                color="#22c55e"
              />
              <h5 className="text-sm leading-7">
                3G, 4G, 5G and LTE coverage available
              </h5>
            </div>
          </div>

          <div className="text-lg">
            <CustomButton
              className="w-full mt-9"
              disabled={false}
              white={false}
            >
              Get Started
            </CustomButton>
          </div>
        </div>
        <div className="relative z-10">
          <img src={g5Proxy} alt="hero-image" />
        </div>
      </div>
      <CompanyLogos className="hidden relative z-10   lg:block" />
    </>
  );
};

export default Hero;
