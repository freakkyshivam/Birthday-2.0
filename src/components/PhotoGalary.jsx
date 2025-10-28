import { motion } from "motion/react";
import { Camera, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function PhotoGallery({ onNext }) {
  const images = [
    { src: "./public/img/img1.jpg" },
    { src: "./public/img/img2.jpg" },
     { src: "./public/img/img3.jpg" },
      { src: "./public/img/img4.jpg" },
       { src: "./public/img/img5.jpg" },
        { src: "./public/img/img6.jpg" },
         { src: "./public/img/img7.jpg" },
  ];

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center p-8 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.8 }}
    >
      {/* Header */}
      <motion.div
        className="text-center mb-8"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <motion.div
          className="mb-8"
          animate={{
            rotate: [0, -10, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        >
          <Camera className="w-16 h-16 text-pink-400 mx-auto" />
        </motion.div>

        <h1 className="text-4xl md:text-6xl py-1 md:py-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 mb-6">
          Moments with You
        </h1>
        <p className="text-xl text-purple-300">
          Beautiful moments with Madam Jii 📸
        </p>
      </motion.div>

      {/* Swiper Slider */}
      <div className="special w-full max-w-2xl mx-auto px-4">
        <Swiper
          loop={true}
          autoplay={{ delay: 2000 }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          className="mySwiper rounded-2xl"
        >
          {images.map((item, index) => (
            <SwiperSlide key={index}>
              <img
                src={item.src}
                alt="special"
                className="w-full h-80 object-cover rounded-2xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Button */}
      <motion.button
        onClick={onNext}
        className="mt-10 flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-400 to-purple-500 text-white rounded-xl shadow-lg hover:shadow-2xl transition-all"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span>One Last Thing</span>
        <ArrowRight className="w-5 h-5" />
      </motion.button>
    </motion.div>
  );
}
