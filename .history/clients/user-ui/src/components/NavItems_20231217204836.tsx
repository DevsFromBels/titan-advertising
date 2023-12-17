const navItems = [
	{
		title: "Home",
		url: "/",
	},
	{
		title: "About us",
		url: "/about",
	},
	{
		title: "Graph",
		url: "/graph",
	},
	{
		title: "Plan",
		url: "/plan",
	},
	{
		title: "Contact Us",
		url: "/contact",
	}
]

const NavItems = ({ activeItem }: { activeItem: number}) => {
	return <div>
        {navItems.map}
    </div>
}

export default NavItems
