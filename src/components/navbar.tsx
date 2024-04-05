const Navbar = () => {
	const navLinks = ['Home', 'Quiz', 'Suggestions', 'Github'];

	return (
		<nav className="h-14 container shadow-lg flex justify-between items-center *:cursor-pointer">
			<div id="logo" className="font-medium text-xl">
				Virtual Practice
			</div>
			<ul id="links" className="flex justify-between gap-3 font-medium">
				{navLinks.map((navLink) => {
					return <li className="cursor-pointer" key={navLink}>{navLink}</li>;
				})}
			</ul>
		</nav>
	);
};

export default Navbar;
