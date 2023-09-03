import { BsArrowRight } from "react-icons/bs";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Keyboard, Scrollbar, Navigation } from 'swiper/modules';

const ForSkin = () => {
    return (
        <div className='my-24 w-11/12 mx-auto'>
            <Swiper
                slidesPerView={1}
                centeredSlides={false}
                slidesPerGroupSkip={1}
                grabCursor={true}
                keyboard={{
                    enabled: true,
                }}
                breakpoints={{
                    769: {
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                    },
                }}
                scrollbar={true}
                navigation={true}

                modules={[Keyboard, Scrollbar, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="space-y-4 pb-56">
                        <p>For the body</p>
                        <h1 className='text-3xl'>An expression of care</h1>
                        <p>Aesop formulations offer the body deserving care, to cleanse, <br /> replenish, and nourish skin. Each product is a sensory pleasure to <br /> use with its own delightful aroma</p>
                        <div>
                            <a href="">See all Body Care <BsArrowRight className="inline-block"></BsArrowRight></a>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide className="h-[525px]">
                    <div className="space-y-3 text-center p-10 ">
                        <img src="https://images.ctfassets.net/u1nb1km7t5q7/3QfGNj3NpYM5h3zLpQHWK0/6ac142e435309dc51f2dc2e477b54a95/Aesop_Skin_Lucent_Facial_Concentrate_60mL_Web_Large_684x668px.png" />
                        <p>Nuture Bar Soap</p>
                        <p>Offers a mild yet effective cleanse</p>
                    </div>

                </SwiperSlide>
                <SwiperSlide className="h-[525px]">
                    <div className="space-y-3 text-center p-24">
                        <img src="https://www.aesop.com/u1nb1km7t5q7/4DGsDcDdfO5dcxxkckH0Vz/ff15e75ea0734ffa3273513bda5a40d2/Aesop_Skin_Purifying_Facial_Cream_Cleanser_100mL_Web_Large_843x1000px.png" />
                        <p>Nuture Bar Soap</p>
                        <p>Offers a mild yet effective cleanse</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="h-[525px]">
                    <div className="space-y-3 text-center pt-44">
                        <img src="https://www.aesop.com/u1nb1km7t5q7/5EM8cNCKUmSUw5Ad9vg3d1/73b569f7bcb04bafc22cd73e519d3f2a/Aesop-Skin-Camellia-Nut-Facial-Hydrating-Cream-60mL-large.png" />
                        <p>Nuture Bar Soap</p>
                        <p>Offers a mild yet effective cleanse</p>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default ForSkin;