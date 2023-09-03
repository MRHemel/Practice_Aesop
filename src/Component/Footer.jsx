import { BsArrowRight } from "react-icons/bs";


const Footer = () => {
    return (
        <div className="text-white bg-[#252525] ">
            <div className="grid lg:grid-cols-5 grid-cols-2 gap-4 w-11/12 mx-auto py-10">
                <div className="col-span-2 space-y-4">
                    <p className="font-bold">Subscribe to Aesop communications</p>
                    <hr />
                    <div className="flex">
                        {/* <input type="text" placeholder="Email Address" className=" placeholder:bg-[#252525] placeholder:font-bold placeholder:text-xl placeholder:pt-4 border-[1px] w-full" /> */}
                        <input type="text" placeholder="Email Address" className=" w-full rounded-none   placeholder:bg-[#252525] placeholder:font-bold placeholder:text-xl border-2 placeholder:p-4" />
                        <BsArrowRight className="relative right-7 top-[7px]"></BsArrowRight>

                    </div>
                    <div className=" flex ">
                        <span className="mt-1 mr-2"><input type="checkbox" className="w-4  h-4 border-white border-2 " /></span>
                        <p>Subscribe to receive communications from Aesop. By subscribing, you confirm you have read and understood our privacy policy.</p>
                    </div>
                </div>
                <div className="space-y-4">
                    <p className="font-bold">Orders and support</p>
                    <hr />
                    <div className="flex flex-col ">
                        <a href="">Contact us</a>
                        <a href="">FAQs</a>
                        <a href="">Shipping</a>
                        <a href="">Returns</a>
                        <a href="">Order history</a>
                        <a href="">Terms and conditions</a>
                    </div>
                </div>
                <div className="space-y-4">
                    <p className="font-bold">Services</p>
                    <hr />
                    <div className="flex flex-col ">
                        <a href="">Contact us</a>
                        <a href="">FAQs</a>
                        <a href="">Shipping</a>
                        <a href="">Returns</a>
                        <a href="">Order history</a>
                        <a href="">Terms and conditions</a>
                    </div>
                </div>
                <div className="space-y-4">
                    <p className="font-bold">Location preferences</p>
                    <hr />
                    <div className="flex flex-col ">
                        <a href="">Contact us</a>
                        <a href="">FAQs</a>
                        <a href="">Shipping</a>
                        <a href="">Returns</a>
                        <a href="">Order history</a>
                        <a href="">Terms and conditions</a>
                    </div>
                </div>
                <div className="lg:col-span-2 space-y-4">
                    <p className="font-bold">Sustainability</p>
                    <hr />
                    <p>All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation. Learn more</p>
                </div>
                <div className="space-y-4">
                    <p className="font-bold">About</p>
                    <hr />
                    <div className="flex flex-col ">
                        <a href="">Contact us</a>
                        <a href="">FAQs</a>
                        <a href="">Shipping</a>
                        <a href="">Returns</a>
                        <a href="">Order history</a>
                        <a href="">Terms and conditions</a>
                    </div>
                </div>
                <div className="space-y-4">
                    <p className="font-bold">Social Media</p>
                    <hr />
                    <div className="flex flex-col ">
                        <a href="">Contact us</a>
                        <a href="">FAQs</a>
                        <a href="">Shipping</a>
                        <a href="">Returns</a>
                        <a href="">Order history</a>
                        <a href="">Terms and conditions</a>
                    </div>
                </div>
            </div>
            <hr className=" border-2" />
            <p className="p-10 text-lg font-bold">© Aesop</p>

        </div>
    );
};

export default Footer;