import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { NavLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
	const [active, setActive] = useState("");
	return (
		<nav className={"${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary"}>
			<div className={"w-full flex items-center justify-between max-w-7xl mx-auto"}>
				<Link
					to={"/"}
					className={"flex items-center gap-2"}
					onClick={() => {
						setActive("");
						window.scrollTo(0, 0);
					}}>
					<img src={logo} alt="Logo" className={"w-9 h-9 object-contain"} />
					<p className="text-white text-[18px] font-bold cursor-pointer">
						Koen <span className="sm:block hidden"> React </span>
					</p>
				</Link>
				<ul className="list-none hidden sm:flex flex-row gap-10">
						{NavLinks.map((link) => (
							<li>
								<a href={'#${link.id}'}>{link.title}</a>
							</li>
						))}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
