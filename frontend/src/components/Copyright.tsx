const Copyright = () => {
	const currentYear = new Date().getFullYear();

    return (
        <p className="pb-6 pt-4 text-center text-sm">
            &copy; {currentYear} <span className="font-bold"> Go Gili</span>.
            All rights reserved.
        </p>
    );
};

export default Copyright;
