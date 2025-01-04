"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ImagesSlider } from "./components/ui/images-slider";
import { motion, useScroll, useSpring } from "framer-motion";
import { FocusCards } from "./components/ui/focus-cards";
import { LayoutGridDemo } from "./components/layout";
import { AnimatedTestimonials } from "./components/ui/animated-testimonials";
import { Vortex } from "./components/ui/vertex";
const StickyHeader = ({ visible }) => {
  return (
    <motion.div
      initial={{ opacity:  0, y: -50 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-40 bg-gradient-to-r from-slate-700 to-slate-400 shadow-sg"
    >
      <div className="flex justify-center items-center py-2">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={120} height={120} className="h-12 w-12" />
          <span className="text-white">|</span>
          <p className="font-bold text-ml md:text-3xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
            Cabin Essentials Hub
          </p>
        </div>
      </div>
    </motion.div>
  );
};



export default function Home() {

  const testimonials = [
    {
      quote: "The interior of this jet is pure luxury—spacious, elegant, and designed to make you feel at home in the sky. The attention to detail is unmatched.",
      name: "John Doe",
      designation: "CEO, Luxury Travels",
      src: "/7.jpg", // Image of a luxurious private jet interior
    },
    {
      quote: "Flying in this jet was like stepping into another world. The plush seating and serene environment made the journey incredibly relaxing.",
      name: "Sarah Williams",
      designation: "Founder, Elite Aviation",
      src: "/8.jpg", // Image of a cozy private jet interior
    },
    {
      quote: "The cabin was meticulously designed, with comfort and style at the forefront. It felt like I was in a five-star hotel, soaring through the clouds.",
      name: "Michael Johnson",
      designation: "CFO, Global Investments",
      src: "/9.jpg", // Image showing an exclusive private jet cabin
    },
    {
      quote: "Every inch of the jet was crafted for comfort and luxury. The recliner seats, top-notch amenities, and serene atmosphere made the trip unforgettable.",
      name: "Emily Roberts",
      designation: "Director, Corporate Partnerships",
      src: "/10.jpg", // Image of a premium private jet interior
    },
    {
      quote: "The private jet's interior was an epitome of sophistication—sleek, modern, and meticulously designed for the ultimate travel experience.",
      name: "David Brown",
      designation: "Founder, Exclusive Voyages",
      src: "/11.jpg", // Image of a high-end private jet interior
    },
  ];
  
  const cards = [
    { title: "Luxurious", src: "/1.jpg" },
    { title: "Spacious", src: "/2.jpg" },
    { title: "Serene", src: "/3.jpg" },
    { title: "Elegant", src: "/4.jpg" },
    { title: "Plush", src: "/5.jpg" },
    { title: "Exclusive", src: "/6.jpg" },
  ];

  const [showStickyHeader, setShowStickyHeader] = useState(false);
  const { scrollY } = useScroll();
  const smoothScrollY = useSpring(scrollY, { damping: 20, stiffness: 100 });

  useEffect(() => {
    const unsubscribe = smoothScrollY.onChange((currentY) => {
      // Show sticky header after scrolling down 200px
      setShowStickyHeader(currentY > 200);
    });

    return () => unsubscribe();
  }, [smoothScrollY]);

  const images = [
    "https://t3.ftcdn.net/jpg/09/71/23/08/240_F_971230836_JrpaMjNROOueZsnKmajgez3dkE5JyGde.jpg",
    "https://t4.ftcdn.net/jpg/06/27/33/05/240_F_627330570_mOuAEKXf4BCf3CHTDyBzj3u33tMPgtjd.jpg",
    "https://t4.ftcdn.net/jpg/09/95/56/09/240_F_995560917_Fd3tgoFZzFFcSCZrDFZIY5BnRk5pnueY.jpg",
    "https://t3.ftcdn.net/jpg/09/26/60/44/240_F_926604428_CkDyL2dZn3Oud7WJDFiTbo1ht6aJSQuf.jpg",
    "https://t4.ftcdn.net/jpg/06/83/31/01/240_F_683310184_j5irUdtfZYpRq1d1eJnmKdHLwkoalleW.jpg",
  ];

  const handleScrollToCards = () => {
    const focusCardsElement = document.getElementById("focus-cards");
    if (focusCardsElement) {
      const offset = 100; // Adjust this value to control how much you want to offset
      const elementPosition = focusCardsElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  

  return (
    <div className="bg-gradient-to-br from-slate-300 to-slate-700">
      <StickyHeader visible={showStickyHeader} />
      <ImagesSlider className="h-[60rem]" images={images}>
        <motion.div
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="z-50 flex flex-col justify-center items-center"
        >
          <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
            Cabin Essentials Hub
          </motion.p>
          <button
            className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4"
            onClick={handleScrollToCards}
          >
            <span>Discover now →</span>
            <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
          </button>
        </motion.div>
      </ImagesSlider>
      <div id="focus-cards" className="mt-10">
        <FocusCards cards={cards} />
      </div>
      <div>
        <LayoutGridDemo />
      </div>
     
    <div>
    <AnimatedTestimonials testimonials={testimonials} />
    </div>
 
      <div className="w-[calc(100%)] mx-auto rounded-md  h-[30rem] overflow-hidden">
      <Vortex
  backgroundColor="black"
  className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
>
  <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
    Experience Luxury in the Skies
  </h2>
  <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
    Private jets offer unparalleled comfort and personalized service, ensuring
    a seamless travel experience like no other. Elevate your journey above the
    clouds.
  </p>
  <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
    <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
      Book Your Flight
    </button>
    <button className="px-4 py-2 text-white">Explore Fleet</button>
  </div>
</Vortex>

    </div>
    </div>
  );
}
