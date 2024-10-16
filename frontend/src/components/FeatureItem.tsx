import React from "react";
import CustomButton from "./CustomButton";
import { featureBg } from "../assets";

type Props = {
  image?: string;
  title?: string;
  desc?: string;
  btnColor?: string;
  right?: boolean;
  multiImg?: boolean;
  divForMulti?: React.ReactNode; // Changed to ReactNode for JSX elements
};

const FeatureItem = ({
  image,
  title,
  desc,
  btnColor,
  divForMulti,
  multiImg = false,
  right = false, // default to false
}: Props) => {
  return (
    <div className="flex mt-9 items-center max-sm:flex-col relative justify-between">
      <div className="flex max-lg:hidden">
        {right ? (
          <>
            <div className="left-item items-start justify-center text-start gap-y-2 flex flex-col max-sm:w-full px-5 w-3/5 relative">
              <h1 className="head-feature-text text-black">
                {title}
              </h1>
              <h4 className="subhead-feature-text pr-12    ">{desc}</h4>
              <CustomButton
                className="w-3/5 rounded-tr-[22px]"
                disabled={false}
                white={true}
                color={`#0803FF`}
                href="/signup"
              >
                Learn More
              </CustomButton>
            </div>

            <div className="right-item flex relative items-center justify-center max-lg:w-full w-2/5">
              <img
                src={featureBg}
                alt="feature-item-bg"
                className="inset-0 absolute z-0"
              />
              {multiImg && divForMulti ? (
                // Render the divForMulti as JSX
                <div>{divForMulti}</div>
              ) : (
                <img src={image} alt="feature-item-1" />
              )}
            </div>
          </>
        ) : (
          <>
            <div className="right-item flex relative items-center justify-center max-sm:w-full w-2/5">
              <img
                src={featureBg}
                alt="feature-item-bg"
                className="inset-0 absolute z-0"
              />
              {multiImg && divForMulti ? (
                <div>{divForMulti}</div>
              ) : (
                <img src={image} alt="feature-item-1" />
              )}
            </div>

            <div className="left-item items-start justify-center text-start gap-y-2 flex flex-col px-5 w-3/5 relative">
              <h1 className="head-feature-text text-black">
                {title}
              </h1>
              <h4 className="subhead-feature-text pr-12  ">{desc}</h4>
              <CustomButton
                className="w-3/5 rounded-tr-[22px]"
                disabled={false}
                white={true}
                color={`#0803FF`}
                href="/signup"
              >
                Learn More
              </CustomButton>
            </div>
          </>
        )}
      </div>
      {/* small devices */}
      <div className="flex-col hidden  text-center self-center max-lg:flex justify-center">
            <div className="left-item items-start justify-center text-start gap-y-2 flex flex-col max-sm:w-full px-5  relative">
              <h1 className="head-feature-text text-black">
                {title}
              </h1>
              <h4 className="subhead-feature-text pr-12 ">{desc}</h4>
              <CustomButton
                className=" rounded-tr-[22px]"
                disabled={false}
                white={true}
                color={`#0803FF`}
                href="/signup"
              >
                Learn More
              </CustomButton>
            </div>

            <div className="right-item flex relative items-center justify-center max-lg:w-full w-2/5">
              <img
                src={featureBg}
                alt="feature-item-bg"
                className="inset-0 absolute z-0"
              />
              {multiImg && divForMulti ? (
                // Render the divForMulti as JSX
                <div>{divForMulti}</div>
              ) : (
                <img src={image} alt="feature-item-1" />
              )}
            </div>
          </div>
    </div>
  );
};

export default FeatureItem;
