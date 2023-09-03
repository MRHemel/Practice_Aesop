import { BsSearch, BsArrowRight } from "react-icons/bs";
const Header = () => {
    return (
        <div>
            <div className="text-center bg-[#C2C2AF] p-2">
                <p>Trained Aesop consultations are available to provide bespoke skin care advise. <a className="ml-4 font-medium hover:underline hover:cursor-pointer">Book a video consultation</a></p>

            </div>
            <div className="text-center text-white bg-[#252525] p-2 hover:underline">
                <p>Click and Collect is now available at Hong Kong stores. Enjoy complimentary shipping on orders over HK$400  <span className="ml-3">+</span></p>

            </div>
            <div className="flex justify-between font-semibold">
                <div className="flex gap-4  items-center p-5">
                    <a href="">Skin Care</a>
                    <a href="">Body & Hand</a>
                    <a href="">Hair</a>
                    <a href="">Fragnance</a>
                    <a href="">Home</a>
                    <a href="">Kits & Travel</a>
                    <a href="">Gifts</a>
                    <a href="">Read</a>
                    <a href="">Stones</a>
                    <a href="">facial Appointments</a>
                    <a href=""><BsSearch></BsSearch></a>
                </div>
                <div className="flex gap-4  items-center p-5">
                    <a href="">Log in</a>
                    <a href="">Cabinet</a>
                    <a href="">Cart</a>
                </div>
            </div>


            <div className="bg-cover bg-center  min-h-screen" style={{ backgroundImage: `url(https://www.aesop.com/u1nb1km7t5q7/AGQGWYrTapcQI1NrPvsYU/11e99769c1767531dd3c12b6fce85f37/Aesop_Bar_Soaps_2023_Web_Homepage_2_Primary_Full_Bleed_Desktop_2880x1044px.jpg)` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="text-white flex gap-20 ">
                    <h1 className="text-4xl mt-20 ml-20 ">Aesop</h1>
                    <div className="mt-24 space-y-6 ">
                        <span className="font-bold">Bar Soaps</span>
                        <h1 className="text-5xl font-bold">A body care classic, <br /> reimagined</h1>
                        <p className="font-bold">Breathing new life into the humble bar soap are Nurture,<br /> Polish and Refresh—three additions to the range, each <br /> imparting a unique constellation of benefits.</p>
                        <button className="border-2 w-80 h-16 hover:bg-white hover:text-black"><span className="pr-24">Discover Bar Soap</span> <BsArrowRight className="inline-block text-xl"></BsArrowRight></button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Header;