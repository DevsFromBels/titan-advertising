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
	},
]

const NavItems = ({ activeItem = 0 }: { activeItem?: number }) => {
	return (
		<div>
			{navItems.map((item, index) => (
				<Link
					key={item.url}
					href={item.url}
					className={`px-5 text-[18px] font-Poppins font-[500] ${
						activeItem === index && "text-[#37b668]"
					}`}
				>
					{item.title}
				</Link>
			))}
		</div>
	)
}

export default NavItems
