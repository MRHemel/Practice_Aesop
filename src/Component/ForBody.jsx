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


const ForBody = () => {
    return (
        <div className='my-20 w-11/12 mx-auto'>
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
                <SwiperSlide>
                    <div className="space-y-3 text-center ">
                        <img src="https://www.aesop.com/u1nb1km7t5q7/2YWbdNlnJHD3t3zF4arNfK/4d9d61c34d4ef151f41defd952535345/Aesop_Body_Nurture_Bar_Soap_150g_Web_Front_Large_1800x1093px.png" />
                        <p>Nuture Bar Soap</p>
                        <p>Offers a mild yet effective cleanse</p>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="space-y-3 text-center ">
                        <img src="https://www.aesop.com/u1nb1km7t5q7/5NoA4d0c8KG7Hhz5y0kdfq/88bc42ee1a607d834f6f62c94373d2c1/Aesop_Body_Polish_Bar_Soap_150g_Web_Front_Large_1800x1093px.png" />
                        <p>Nuture Bar Soap</p>
                        <p>Offers a mild yet effective cleanse</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="space-y-3 text-center ">
                        <img src="https://www.aesop.com/u1nb1km7t5q7/1jDpJFSo3ih2QozJeNoNEJ/5f9d6b5863522f92eee44e0f1100608e/Aesop_Body_Refresh_Bar_Soap_150g_Web_Front_Large_1800x1093px.png" />
                        <p>Nuture Bar Soap</p>
                        <p>Offers a mild yet effective cleanse</p>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default ForBody;