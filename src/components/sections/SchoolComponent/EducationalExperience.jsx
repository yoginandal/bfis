import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import WordPullUp from "@/components/ui/word-pull-up"; // Adjust path if needed

/* eslint-disable react/prop-types */
export default function EducationalExperience() {
  // Refs to observe each image
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const image3Ref = useRef(null);
  const image4Ref = useRef(null);
  const image5Ref = useRef(null);
  const image6Ref = useRef(null);

  // UseInView hooks to detect when elements are in view
  const isImage1InView = useInView(image1Ref, { triggerOnce: false });
  const isImage2InView = useInView(image2Ref, { triggerOnce: false });
  const isImage3InView = useInView(image3Ref, { triggerOnce: false });
  const isImage4InView = useInView(image4Ref, { triggerOnce: false });
  const isImage5InView = useInView(image5Ref, { triggerOnce: false });
  const isImage6InView = useInView(image6Ref, { triggerOnce: false });

  return (
    <div className=" max-w-screen-xl mx-auto px-4 py-16 overflow-hidden">
      {/* Heading with WordPullUp Animation */}
      <div className="text-center mb-8">
        <WordPullUp
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-dblue font-roboto mb-12"
          words="Discover the Diverse Educational Experience at BFIS"
        />
      </div>

      <div className="grid lg:grid-cols-3 gap-0 md:grid-cols-1">
        {/* Left Side Images */}
        <div className="col-span-1 text-center md:mb-8">
          <motion.div
            ref={image1Ref}
            initial={{ x: "-100%", y: "-100%", opacity: 0 }}
            animate={isImage1InView ? { x: 0, y: 0, opacity: 1 } : {}}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 20,
              delay: 0.2,
            }}
          >
            <ImageSection
              title="Academics"
              color="bg-purple-500"
              className="rounded-lg lg:rounded-none lg:rounded-tl-lg"
              imageSrc="https://www.vibgyorhigh.com/public/assets/frontend/images/education-img1.png"
            />
          </motion.div>

          <TriangleConnector direction="left" className="hidden lg:block" />

          <motion.div
            ref={image2Ref}
            initial={{ x: "-100%", opacity: 0 }}
            animate={isImage2InView ? { x: 0, opacity: 1 } : {}}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 20,
              delay: 0.3,
            }}
          >
            <ImageSection
              title="Student Life"
              color="bg-blue-500"
              className="lg:rounded-none rounded-lg"
              imageSrc="https://www.vibgyorhigh.com/public/assets/frontend/images/education-img2.png"
            />
          </motion.div>

          <TriangleConnector direction="left" className="hidden lg:block" />

          <motion.div
            ref={image3Ref}
            initial={{ x: "-100%", y: "100%", opacity: 0 }}
            animate={isImage3InView ? { x: 0, y: 0, opacity: 1 } : {}}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 20,
              delay: 0.4,
            }}
          >
            <ImageSection
              title="Achievements"
              color="bg-purple-500"
              className="rounded-lg lg:rounded-none lg:rounded-bl-lg"
              imageSrc="https://www.vibgyorhigh.com/public/assets/frontend/images/education-img1.png"
            />
          </motion.div>
        </div>

        {/* Center Text */}
        <div className="col-span-1 flex flex-col justify-center items-center text-center text-white text-montserrat px-6 bg-vgreen md:mt-8 md:mb-8 lg:mt-0 mb-4 pb-4 pt-3">
          <h2 className="text-2xl font-semibold mb-4">
            One Way.
            <br />
            Our Methods.
            <br />
            Our Difference.
          </h2>
          <h3 className="text-xl font-medium mb-2">
            Holistic Education at BFIS
          </h3>
          <p className="text-sm mb-4">
            Adding that holistic perspective of the child as the core essence of
            our academic system, we provide a comprehensive learning experience
            through Academics, Events, Facilities, and more.
          </p>
          <button className="px-4 py-2 bg-[#3B82F6] text-white rounded font-bold transition-colors">
            Learn More
          </button>
        </div>

        {/* Right Side Images */}
        <div className="col-span-1 text-center">
          <motion.div
            ref={image4Ref}
            initial={{ x: "100%", y: "-100%", opacity: 0 }}
            animate={isImage4InView ? { x: 0, y: 0, opacity: 1 } : {}}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 20,
              delay: 0.2,
            }}
          >
            <ImageSection
              title="Extracurricular"
              color="bg-green-500"
              className="rounded-lg lg:rounded-none lg:rounded-tr-lg"
              imageSrc="https://www.vibgyorhigh.com/public/assets/frontend/images/education-img3.png"
            />
          </motion.div>

          <TriangleConnector direction="right" className="hidden lg:block" />

          <motion.div
            ref={image5Ref}
            initial={{ x: "100%", opacity: 0 }}
            animate={isImage5InView ? { x: 0, opacity: 1 } : {}}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 20,
              delay: 0.3,
            }}
          >
            <ImageSection
              title="Facilities"
              color="bg-yellow-500"
              className="rounded-lg lg:rounded-none"
              imageSrc="https://www.vibgyorhigh.com/public/assets/frontend/images/education-img4.png"
            />
          </motion.div>

          <TriangleConnector direction="right" className="hidden lg:block" />

          <motion.div
            ref={image6Ref}
            initial={{ x: "100%", y: "100%", opacity: 0 }}
            animate={isImage6InView ? { x: 0, y: 0, opacity: 1 } : {}}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 20,
              delay: 0.4,
            }}
          >
            <ImageSection
              title="Events"
              color="bg-green-500"
              className="rounded-lg lg:rounded-none lg:rounded-br-lg"
              imageSrc="https://www.vibgyorhigh.com/public/assets/frontend/images/education-img3.png"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function ImageSection({ title, color, imageSrc, className }) {
  return (
    <div className={`relative h-40 overflow-hidden mb-4 md:mb-0 ${className}`}>
      <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
      <div className={`absolute bottom-0 left-0 right-0 ${color} p-2`}>
        <h3 className="text-white text-lg font-semibold">{title}</h3>
      </div>
    </div>
  );
}

function TriangleConnector({ direction, className }) {
  return (
    <div
      className={`relative w-full ${
        direction === "left" ? "ml-auto" : "mr-auto"
      } ${className}`}
    >
      <div
        className={`absolute bg-vgreen ${
          direction === "left" ? "right-0" : "left-0"
        } w-10 h-10 z-10 mt-[-1.20rem]`}
        style={{
          clipPath:
            direction === "left"
              ? "polygon(100% 0, 0 50%, 100% 100%)"
              : "polygon(100% 50%, 0 0, 0 100%)",
          WebkitClipPath:
            direction === "left"
              ? "polygon(100% 0, 0 50%, 100% 100%)"
              : "polygon(100% 50%, 0 0, 0 100%)",
        }}
      />
    </div>
  );
}
