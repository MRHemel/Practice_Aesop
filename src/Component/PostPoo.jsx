import { BsArrowRight } from "react-icons/bs";


const PostPoo = () => {
    return (
        <div className="flex justify-between">
            <div className="">
                <img className="w-[886px] h-[498px] " src="https://www.aesop.com/u1nb1km7t5q7/6m4yuIyUcyfXMyKT17ZYsr/9bc9ba78322632d97323d73f364113f0/Aesop_Home_2023_Post-Poo_Drops_Web_Homepage_Secondary_Mid_Desktop_2560x1540px.png" alt="" />
            </div>
            <div className="pr-16 pt-16 space-y-6">

                <h1 className="text-3xl">Post-Poo Drops has returned</h1>
                <p>In The Athenaeum, our digital reading room: a guide to <br /> ensuring a healthy complexion through the warmer <br /> months.</p>
                <button className="border-2 w-80 h-16 hover:bg-black hover:text-white"><span className="pr-24">Discover Bar Soap</span> <BsArrowRight className="inline-block text-xl"></BsArrowRight></button>
            </div>
        </div>
    );
};

export default PostPoo;