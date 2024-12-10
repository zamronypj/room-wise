import BecomePartner from "./BecomePartner";
import Copyright from "./Copyright";

const Footer = () => {
	return (
		<div className="container mx-auto bottom-0 mt-4 text-primary">
			<div className="grid md:grid-cols-2">
				<div className="flex w-full justify-evenly md:max-w-[300px]">
					<div>
						<h2 className="mb-2 text-xl font-bold">Support</h2>
						<ul>
							<li className="cursor-not-allowed py-2 text-sm">About Us</li>
							<li className="cursor-not-allowed py-2 text-sm">
								Terms of Services
							</li>
						</ul>
					</div>
				</div>
				<div className="text-right">
					<div className="flex w-full justify-end">
						<BecomePartner />
					</div>
				</div>
			</div>
			<Copyright />
		</div>
	);
};

export default Footer;
