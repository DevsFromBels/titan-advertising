import Link from "next/link"

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
        {navItems.map((item, index) => (
            <Link key={item.url} href={item.}>
            
            </Link>
        ))}
    </div>
}

export default NavItems
