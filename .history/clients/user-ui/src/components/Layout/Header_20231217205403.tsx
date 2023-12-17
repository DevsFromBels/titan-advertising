import styles from "@/utils/style"
import NavItems from "../NavItems"
import ProfileDropDown from "../"

const Header = () => {
	return (
		<header className="w-full bg-[#0F1524]">
			<div className="w-[90%] m-auto h-[80px] flex items-center justify-between">
				<h1 className={`${styles.logo}`}>
					TITAN
				</h1>
				<NavItems />
				<ProfileDropDown />
			</div>
		</header>
	)
}

export default Header
