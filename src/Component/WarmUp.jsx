import { BsArrowRight } from "react-icons/bs";



const WarmUp = () => {
    return (
        <div className="flex justify-between">
            <div className="pl-16 pt-16 space-y-6">
                <p>The Athenaeum</p>
                <h1 className="text-3xl">The warm-up</h1>
                <p>In The Athenaeum, our digital reading room: a guide to <br /> ensuring a healthy complexion through the warmer <br /> months.</p>
                <button className="border-2 w-80 h-16 hover:bg-black hover:text-white"><span className="pr-24">Discover Bar Soap</span> <BsArrowRight className="inline-block text-xl"></BsArrowRight></button>
            </div>
            <div className="">
                <img className="w-[886px] h-[498px] " src="https://www.aesop.com/u1nb1km7t5q7/3GSzEbfK3uJnoXUkae2D9G/37d1916a82b754c70870cab8f85f34b0/Aesop_Article_Summer_Skin_Care_2020_Mid_1_Desktop_2560x1440px.jpg" alt="" />
            </div>
        </div>


    );
};

export default WarmUp;