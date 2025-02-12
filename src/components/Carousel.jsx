import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BiZoomIn } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";

const Carousel = ({ images }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  return (
    <>
      {/* Normal View */}
      {!isFullScreen && (
        <div className="relative w-full max-w-4xl mx-auto">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            pagination={{ clickable: true }}
            navigation
            autoplay={{ delay: 3000 }}
            className="w-80 h-56 rounded-lg overflow-hidden shadow-lg"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index} className="relative">
                <div
                  className="h-64 flex items-center justify-center text-white text-center bg-cover bg-center cursor-pointer"
                  style={{ backgroundImage: `url(${image})` }}
                  onClick={() => setIsFullScreen(true)}
                >
                  <p className="absolute bottom-4 left-4 bg-black/60 px-4 py-2 rounded text-white text-sm">
                    <BiZoomIn />
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      {/* Full-Screen View */}
      {isFullScreen && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          <button
            className="absolute top-5 right-5 text-white text-3xl z-50 p-2 bg-black rounded-full hover:bg-gray-800"
            onClick={() => setIsFullScreen(false)}
          >
            <FaTimes />
          </button>
          <Swiper
            modules={[Pagination, Navigation]}
            pagination={{ clickable: true }}
            navigation
            className="w-full h-full flex items-center justify-center"
          >
            {images.map((image, index) => (
              <SwiperSlide
                key={index}
                className="flex items-center justify-center"
              >
                <img
                  src={image}
                  alt={`Slide ${index}`}
                  className="max-h-[90vh] max-w-[90vw] object-contain mx-auto"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
};

export default Carousel;
