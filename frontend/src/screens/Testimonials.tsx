import { star } from "../assets/index.js";
import Heading from "../components/Heading";
import Section from "../components/Section";
import { clientReviews } from "../constants/index.js";
import { memo } from "react";
import { motion } from "framer-motion"; // Import motion

const Testimonials = () => {
  // Define animations
  const reviewVariants = {
    hidden: {
      opacity: 0,
      y: 50, // Start lower
      scale: 0.9, // Slightly smaller
      rotate: 5, // Slight rotation for effect
    },
    visible: {
      opacity: 1,
      y: 0, // Move to original position
      scale: 1, // Scale to normal size
      rotate: 0, // No rotation
    },
    exit: {
      opacity: 0,
      y: -20, // Move up when exiting
      scale: 0.95, // Slightly scale down
      rotate: -5, // Rotate slightly for exit
    },
  };

  return (
    <Section className="overflow-hidden" id="testimonials">
      <Heading tag="Testimonials" title="What people say about us" />
      <div className="client-container ">
        {clientReviews.map((item, index) => (
          <motion.div
            key={`review-${item.id}`}
            className="client-review shadow-sm"
            variants={reviewVariants} // Add variants
            initial="hidden" // Initial animation state
            animate="visible" // Animation state on mount
            exit="exit" // Animation state on unmount
            transition={{
              duration: 0.5, // Transition duration
              delay: index * 0.3, // Delay based on index for sequential effect
              ease: "easeOut", // Smooth easing for a nice effect
            }}
          >
            <div>
              <p className="text-white-800 font-light">{item.review}</p>

              <div className="client-content">
                <div className="flex gap-3">
                  <motion.img
                    loading="lazy"
                    src={item.img}
                    alt={`${item.name}'s review`} // More descriptive alt text
                    className="w-12 h-12 rounded-full"
                    width={48}
                    height={48}
                    whileHover={{ scale: 1.1 }} // Scale effect on hover
                    transition={{ duration: 0.3 }} // Smooth transition for image hover
                  />
                  <div className="flex flex-col">
                    <p className="font-semibold text-white-800">{item.name}</p>
                    <p className="text-white-500 md:text-base text-sm font-light">
                      {item.position}
                    </p>
                  </div>
                </div>

                <div className="flex self-end  items-center gap-2">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <motion.img
                      loading="lazy"
                      key={starIndex}
                      src={star}
                      alt="star"
                      className="w-5 h-5"
                      width={20}
                      height={20}
                      whileHover={{ rotate: [0, 15, -15, 0], scale: 1.2 }} // Rotate effect on hover
                      transition={{ duration: 0.3 }} // Transition for hover effect
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default memo(Testimonials);
