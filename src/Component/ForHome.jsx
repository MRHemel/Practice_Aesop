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
const ForHome = () => {
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
                    <div className="space-y-3 text-center p-16 ">
                        <img src="https://www.aesop.com/u1nb1km7t5q7/LL8pUKUiuq1n8mKKpLdbb/b41e1d77b6dfeca7632d6677ee232fcb/Aesop-SkinParsley-Seed-Facial-Cleanser-100mL-large.png" />
                        <p>Nuture Bar Soap</p>
                        <p>Offers a mild yet effective cleanse</p>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="space-y-3 text-center ">
                        <img src="https://www.aesop.com/u1nb1km7t5q7/1HDrLNDwmYh2CtqiEsFL2n/507570e4e0b46a69e418d63df74fe44f/Aesop_Home_Callippus_Aromatique_Candle_Web_Large_1102x962px.png" />
                        <p>Nuture Bar Soap</p>
                        <p>Offers a mild yet effective cleanse</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="space-y-3 text-center ">
                        <img src="https://www.aesop.com/u1nb1km7t5q7/1HDrLNDwmYh2CtqiEsFL2n/507570e4e0b46a69e418d63df74fe44f/Aesop_Home_Callippus_Aromatique_Candle_Web_Large_1102x962px.png" />
                        <p>Nuture Bar Soap</p>
                        <p>Offers a mild yet effective cleanse</p>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default ForHome;