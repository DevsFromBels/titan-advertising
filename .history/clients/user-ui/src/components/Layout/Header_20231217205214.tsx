import styles from "@/utils/style"
import NavItems from "../NavItems"

const Header = () => {
	return (
		<header className="w-full h-[80px] bg-[#0F1524]">
			<div className="w-[90%] m-auto flex items-center justify-between">
				<h1 className={`${styles.logo}`}>
					TITAN
				</h1>
				<NavItems />
			</div>
		</header>
	)
}

export default Header