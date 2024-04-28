import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay} from 'swiper/modules';
import fImg1 from "../assets/1-manu_default.jpg";
import fImg2 from "../assets/2-manu_default.jpg";
import fImg3 from "../assets/3-manu_default.jpg";
import fImg4 from "../assets/4-manu_default.jpg";
import fImg5 from "../assets/5-manu_default.jpg";
import fImg6 from "../assets/6-manu_default.jpg";
import bg5 from "../assets/postero-img-08.webp";
import ellipse1 from '../assets/ellipse1.webp'
import ellipse2 from '../assets/ellipse2.webp'
import ellipse3 from '../assets/ellipse3.webp'
import { FaStar } from "react-icons/fa";
export default function Featured() {
  return (
    <div className="container mx-auto my-9 lg:my-24">
      <h2 className="text-center text-2xl font-bold mb-6 lg:mb-10">Featured In</h2>
      <div className="flex justify-center xl:justify-between flex-wrap">
        <img
          className="opacity-30 duration-100 transition-opacity hover:opacity-100"
          src={fImg1}
          alt=""
        />
        <img
          className="opacity-30 duration-100 transition-opacity hover:opacity-100"
          src={fImg2}
          alt=""
        />
        <img
          className="opacity-30 duration-100 transition-opacity hover:opacity-100"
          src={fImg3}
          alt=""
        />
        <img
          className="opacity-30 duration-100 transition-opacity hover:opacity-100"
          src={fImg4}
          alt=""
        />
        <img
          className="opacity-30 duration-100 transition-opacity hover:opacity-100"
          src={fImg5}
          alt=""
        />
        <img
          className="opacity-30 duration-100 transition-opacity hover:opacity-100"
          src={fImg6}
          alt=""
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
        <div className="relative">
          <img src={bg5} alt="" className="w-full h-full"/>
          <div className="absolute top-3 md:top-20 w-full md:w-[200px] left-2 md:left-10 lg:left-20">
            <h3 className="text-4xl font-bold">Art for Every Wall</h3>
            <p className="text-[#404040]">
              We are a local brand, bringing you carefully designed and unique
              art prints.
            </p>
            <button className='py-2 lg:py-3 px-4 lg:px-8 rounded-full bg-white text-[#ca9234] font-semibold uppercase hover:bg-[#ca9234] hover:text-black transition-all duration-100 mt-3 lg:mt-6'>
              Discover now
            </button>
          </div>
        </div>
        <div className="bg-[#ffeeec] p-6 md:p-20">
          <h3 className="text-4xl font-bold">What Clients Say</h3>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}


            modules={[Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
                <div className="space-y-5 mt-10">
                    <div className="flex text-[#ca9236]">
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    </div>
                    <p>Really easy to order on website. Both prints I ordered look lovely & compliment the recently newly decorated bedroom. This is the second order & both times prints have been lovely.</p>
                    <div className="flex items-center gap-6">
                        <div>
                            <img src={ellipse1} alt="" />
                        </div>
                        <div>
                            <h3 className="font-bold">Elaine G.</h3>
                            <p className="text-xs">Private Job</p>
                        </div>
                    </div>
                </div>

            </SwiperSlide>
            <SwiperSlide>
            <div className="space-y-5 mt-10">
                    <div className="flex text-[#ca9236]">
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    </div>
                    <p>Really easy to order on website. Both prints I ordered look lovely & compliment the recently newly decorated bedroom. This is the second order & both times prints have been lovely.</p>
                    <div className="flex items-center gap-6">
                        <div>
                            <img src={ellipse2} alt="" />
                        </div>
                        <div>
                            <h3 className="font-bold">Margaret C.</h3>
                            <p className="text-xs">Advocate</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="space-y-5 mt-10">
                    <div className="flex text-[#ca9236]">
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    </div>
                    <p>Really easy to order on website. Both prints I ordered look lovely & compliment the recently newly decorated bedroom. This is the second order & both times prints have been lovely.</p>
                    <div className="flex items-center gap-6">
                        <div>
                            <img src={ellipse3} alt="" />
                        </div>
                        <div>
                            <h3 className="font-bold">Chole H.</h3>
                            <p className="text-xs">CEO</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
