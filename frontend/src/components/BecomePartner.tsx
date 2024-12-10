import SocialMedia from "./SocialMedia";

const BecomePartner = () => {
    return (
        <div className="relative w-full py-4 md:w-[300px]">
            <p className="text-center text-xl font-bold md:text-right">
                Become our partner
            </p>
            <div className="py-4">
                <div>
                    <input
                        className="mr-2 w-full cursor-not-allowed rounded-md border border-input bg-thirdary p-2 shadow-xl md:w-auto"
                        type="email"
                        placeholder="Enter Your Email"
                    />
                    <button className="my-2 w-full cursor-not-allowed rounded-md bg-button p-2 px-4 font-bold text-btnText shadow-xl hover:shadow-2xl md:w-auto">
                        Submit
                    </button>
                </div>
            </div>
            <SocialMedia />
        </div>
    );
}

export default BecomePartner;
