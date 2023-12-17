import styles from "@/utils/style"
import NavItems

const Header = () => {
	return (
		<header className="w-full h-[80px] bg-[#0F1524] flex items-center justify-between">
			<div className="w-[90%] m-auto">
				<h1 className={`${styles.logo}`}>
					TITAN
				</h1>
				<NavItems />
			</div>
		</header>
	)
}

export default Header
